"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarIcon, Clock, FileText, Plus, Edit, Trash2, AlertTriangle } from "lucide-react"
import { useSimulados } from "@/contexts/SimuladosContext"
import { formatarData } from "@/lib/utils"
import { useEffect, useState } from "react"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { useToast } from "@/components/ui/use-toast"

export default function Simulados() {
  const { simulados, simuladosPersonalizados, resultados, excluirSimuladoPersonalizado } = useSimulados()
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(true)
  const [todosSimulados, setTodosSimulados] = useState<any[]>([])
  const [simuladoParaExcluir, setSimuladoParaExcluir] = useState<string | null>(null)

  useEffect(() => {
    // Combinar simulados padrão e personalizados
    const todos = [...simulados.map((s) => ({ ...s, tipo: "padrao" })), ...simuladosPersonalizados]
    setTodosSimulados(todos)
    setIsLoading(false)

    console.log("Simulados padrão:", simulados)
    console.log("Simulados personalizados:", simuladosPersonalizados)
    console.log("Todos simulados:", todos)
  }, [simulados, simuladosPersonalizados])

  const handleExcluirSimulado = () => {
    if (!simuladoParaExcluir) return

    excluirSimuladoPersonalizado(simuladoParaExcluir)

    toast({
      title: "Simulado excluído",
      description: "O simulado foi excluído com sucesso",
    })

    setSimuladoParaExcluir(null)
  }

  if (isLoading) {
    return (
      <div className="container mx-auto py-8">
        <p>Carregando simulados...</p>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Simulados</h1>
        <Link href="/novo-simulado">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Criar Simulado
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {todosSimulados.map((simulado) => {
          const resultado = resultados.find((r) => r.simuladoId === simulado.id)
          const concluido = !!resultado
          const isPersonalizado = simulado.tipo === "personalizado"

          return (
            <Card key={simulado.id} className="overflow-hidden">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>{simulado.titulo}</CardTitle>
                  <Badge variant={simulado.tipo === "personalizado" ? "outline" : "default"}>
                    {simulado.tipo === "personalizado" ? "Personalizado" : "Oficial"}
                  </Badge>
                </div>
                <CardDescription>{simulado.descricao}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-muted-foreground mb-2">
                  <FileText className="mr-2 h-4 w-4" />
                  {simulado.questoes.length} questões
                </div>
                {simulado.tipo === "personalizado" && (
                  <div className="flex items-center text-sm text-muted-foreground">
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    Criado em {formatarData(simulado.dataCriacao)}
                  </div>
                )}
                {concluido && (
                  <div className="mt-4">
                    <Badge variant="outline" className="bg-green-100 text-green-800 hover:bg-green-200">
                      Concluído • {resultado.acertos} de {resultado.total} (
                      {Math.round((resultado.acertos / resultado.total) * 100)}%)
                    </Badge>
                  </div>
                )}
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="flex gap-2">
                  <Link href={`/simulados/${simulado.id}`}>
                    <Button variant="outline">Detalhes</Button>
                  </Link>
                  {isPersonalizado && (
                    <div className="flex gap-1">
                      <Link href={`/simulados/editar/${simulado.id}`}>
                        <Button variant="outline" size="icon">
                          <Edit className="h-4 w-4" />
                        </Button>
                      </Link>
                      <Button variant="destructive" size="icon" onClick={() => setSimuladoParaExcluir(simulado.id)}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  )}
                </div>
                {concluido ? (
                  <Link href={`/simulados/${simulado.id}/revisao`}>
                    <Button>Revisar</Button>
                  </Link>
                ) : (
                  <Link href={`/simulados/iniciar/${simulado.id}`}>
                    <Button>
                      <Clock className="mr-2 h-4 w-4" />
                      Iniciar
                    </Button>
                  </Link>
                )}
              </CardFooter>
            </Card>
          )
        })}
      </div>

      {todosSimulados.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground mb-4">Nenhum simulado disponível.</p>
          <Link href="/novo-simulado">
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Criar Simulado
            </Button>
          </Link>
        </div>
      )}

      <AlertDialog open={!!simuladoParaExcluir} onOpenChange={(open) => !open && setSimuladoParaExcluir(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-destructive" />
              Excluir Simulado
            </AlertDialogTitle>
            <AlertDialogDescription>
              Tem certeza que deseja excluir este simulado? Esta ação não pode ser desfeita e todos os resultados
              associados também serão excluídos.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleExcluirSimulado}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              Excluir
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
