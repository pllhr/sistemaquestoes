"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarIcon, Clock, FileText, ArrowLeft, BarChart, Edit, Trash2, AlertTriangle } from "lucide-react"
import { useSimulados } from "@/contexts/SimuladosContext"
import { formatarData } from "@/lib/utils"
import type { Simulado, SimuladoPersonalizado } from "@/lib/types"
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

export default function DetalhesSimulado({ params }: { params: { id: string } }) {
  const router = useRouter()
  const { toast } = useToast()
  const { getSimuladoById, getResultadoBySimuladoId, excluirSimuladoPersonalizado } = useSimulados()
  const [simulado, setSimulado] = useState<Simulado | SimuladoPersonalizado | null>(null)
  const [loading, setLoading] = useState(true)
  const [showDeleteDialog, setShowDeleteDialog] = useState(false)

  useEffect(() => {
    // Verificar se o ID é válido antes de tentar buscar o simulado
    if (params.id === "novo") {
      console.error("Rota inválida:", params.id)
      router.push("/novo-simulado")
      return
    }

    const simuladoEncontrado = getSimuladoById(params.id)

    if (simuladoEncontrado) {
      setSimulado(simuladoEncontrado)
      console.log("Simulado encontrado:", simuladoEncontrado)
    } else {
      console.error("Simulado não encontrado:", params.id)
      // Simulado não encontrado, redirecionar
      router.push("/simulados")
    }

    setLoading(false)
  }, [params.id, getSimuladoById, router])

  const resultado = simulado ? getResultadoBySimuladoId(simulado.id) : undefined
  const concluido = !!resultado
  const isPersonalizado = simulado?.tipo === "personalizado"

  const handleExcluirSimulado = () => {
    if (!simulado || !isPersonalizado) return

    excluirSimuladoPersonalizado(simulado.id)

    toast({
      title: "Simulado excluído",
      description: "O simulado foi excluído com sucesso",
    })

    router.push("/simulados")
  }

  if (loading) {
    return (
      <div className="container mx-auto py-8">
        <p>Carregando...</p>
      </div>
    )
  }

  if (!simulado) {
    return null // Redirecionando...
  }

  return (
    <div className="container mx-auto py-8">
      <div className="mb-6">
        <Link href="/simulados">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar para Simulados
          </Button>
        </Link>
      </div>

      <Card>
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-2xl">{simulado.titulo}</CardTitle>
              <CardDescription className="mt-2">{simulado.descricao}</CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant={simulado.tipo === "personalizado" ? "outline" : "default"}>
                {simulado.tipo === "personalizado" ? "Personalizado" : "Oficial"}
              </Badge>

              {isPersonalizado && (
                <div className="flex gap-2 ml-4">
                  <Link href={`/simulados/editar/${simulado.id}`}>
                    <Button variant="outline" size="icon">
                      <Edit className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Button variant="destructive" size="icon" onClick={() => setShowDeleteDialog(true)}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              )}
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center">
              <FileText className="mr-2 h-4 w-4" />
              <span>{simulado.questoes.length} questões</span>
            </div>

            {"dataCriacao" in simulado && (
              <div className="flex items-center">
                <CalendarIcon className="mr-2 h-4 w-4" />
                <span>Criado em {formatarData(simulado.dataCriacao)}</span>
              </div>
            )}
          </div>

          {concluido && (
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Resultado</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Acertos:</span>
                    <Badge variant="outline" className="text-green-600">
                      {resultado.acertos} de {resultado.total}
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Aproveitamento:</span>
                    <Badge variant="outline" className="text-blue-600">
                      {Math.round((resultado.acertos / resultado.total) * 100)}%
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Data de conclusão:</span>
                    <span className="text-sm text-muted-foreground">{formatarData(resultado.dataFim)}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </CardContent>
        <CardFooter className="flex justify-end gap-4">
          {concluido ? (
            <Link href={`/simulados/${simulado.id}/revisao`}>
              <Button>
                <BarChart className="mr-2 h-4 w-4" />
                Revisar Simulado
              </Button>
            </Link>
          ) : (
            <Link href={`/simulados/iniciar/${simulado.id}`}>
              <Button>
                <Clock className="mr-2 h-4 w-4" />
                Iniciar Simulado
              </Button>
            </Link>
          )}
        </CardFooter>
      </Card>

      <AlertDialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
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
