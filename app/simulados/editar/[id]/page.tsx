"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { useToast } from "@/components/ui/use-toast"
import { useSimulados } from "@/contexts/SimuladosContext"
import type { SimuladoPersonalizado, Questao, Alternativa } from "@/lib/types"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function EditarSimulado({ params }: { params: { id: string } }) {
  const router = useRouter()
  const { toast } = useToast()
  const { getSimuladoById, editarSimuladoPersonalizado } = useSimulados()

  const [titulo, setTitulo] = useState("")
  const [descricao, setDescricao] = useState("")
  const [questoes, setQuestoes] = useState<Questao[]>([])
  const [novaQuestao, setNovaQuestao] = useState({
    enunciado: "",
    alternativas: ["", "", "", ""],
    resposta: 0,
    explicacao: "",
  })
  const [loading, setLoading] = useState(true)
  const [simuladoOriginal, setSimuladoOriginal] = useState<SimuladoPersonalizado | null>(null)

  useEffect(() => {
    const simulado = getSimuladoById(params.id) as SimuladoPersonalizado | undefined

    if (!simulado || simulado.tipo !== "personalizado") {
      toast({
        title: "Simulado não encontrado",
        description: "O simulado que você está tentando editar não existe ou não é um simulado personalizado.",
        variant: "destructive",
      })
      router.push("/simulados")
      return
    }

    setSimuladoOriginal(simulado)
    setTitulo(simulado.titulo)
    setDescricao(simulado.descricao || "")
    setQuestoes([...simulado.questoes])
    setLoading(false)
  }, [params.id, getSimuladoById, router, toast])

  const handleAddQuestao = () => {
    // Validar se todos os campos estão preenchidos
    if (!novaQuestao.enunciado.trim()) {
      toast({
        title: "Erro ao adicionar questão",
        description: "O enunciado da questão é obrigatório",
        variant: "destructive",
      })
      return
    }

    if (!novaQuestao.explicacao.trim()) {
      toast({
        title: "Erro ao adicionar questão",
        description: "A explicação da questão é obrigatória",
        variant: "destructive",
      })
      return
    }

    for (let i = 0; i < novaQuestao.alternativas.length; i++) {
      if (!novaQuestao.alternativas[i].trim()) {
        toast({
          title: "Erro ao adicionar questão",
          description: `A alternativa ${i + 1} é obrigatória`,
          variant: "destructive",
        })
        return
      }
    }

    // Criar alternativas no formato correto
    const alternativas: Alternativa[] = novaQuestao.alternativas.map((texto, index) => ({
      id: String.fromCharCode(97 + index), // 'a', 'b', 'c', 'd'
      texto,
    }))

    const questao: Questao = {
      id: questoes.length + 1,
      enunciado: novaQuestao.enunciado,
      alternativas,
      resposta: String.fromCharCode(97 + novaQuestao.resposta), // 'a', 'b', 'c', 'd'
      explicacao: novaQuestao.explicacao,
    }

    setQuestoes([...questoes, questao])
    setNovaQuestao({
      enunciado: "",
      alternativas: ["", "", "", ""],
      resposta: 0,
      explicacao: "",
    })

    toast({
      title: "Questão adicionada",
      description: "A questão foi adicionada com sucesso",
    })
  }

  const handleAlternativaChange = (index: number, value: string) => {
    const novasAlternativas = [...novaQuestao.alternativas]
    novasAlternativas[index] = value
    setNovaQuestao({ ...novaQuestao, alternativas: novasAlternativas })
  }

  const handleRemoverQuestao = (index: number) => {
    const novasQuestoes = [...questoes]
    novasQuestoes.splice(index, 1)

    // Reajustar os IDs das questões
    const questoesAtualizadas = novasQuestoes.map((q, idx) => ({
      ...q,
      id: idx + 1,
    }))

    setQuestoes(questoesAtualizadas)

    toast({
      title: "Questão removida",
      description: "A questão foi removida com sucesso",
    })
  }

  const handleSalvarSimulado = () => {
    if (!titulo.trim()) {
      toast({
        title: "Erro ao salvar simulado",
        description: "O título do simulado é obrigatório",
        variant: "destructive",
      })
      return
    }

    if (questoes.length === 0) {
      toast({
        title: "Erro ao salvar simulado",
        description: "O simulado deve ter pelo menos uma questão",
        variant: "destructive",
      })
      return
    }

    if (!simuladoOriginal) {
      toast({
        title: "Erro ao salvar simulado",
        description: "Não foi possível encontrar o simulado original",
        variant: "destructive",
      })
      return
    }

    try {
      const simuladoAtualizado: Partial<SimuladoPersonalizado> = {
        titulo,
        descricao,
        questoes,
        numQuestoes: questoes.length,
      }

      editarSimuladoPersonalizado(simuladoOriginal.id, simuladoAtualizado)

      toast({
        title: "Simulado atualizado",
        description: "O simulado foi atualizado com sucesso",
      })

      router.push("/simulados")
    } catch (error) {
      console.error("Erro ao salvar simulado:", error)
      toast({
        title: "Erro ao salvar simulado",
        description: "Ocorreu um erro ao salvar o simulado. Por favor, tente novamente.",
        variant: "destructive",
      })
    }
  }

  if (loading) {
    return (
      <div className="container mx-auto py-8">
        <p>Carregando...</p>
      </div>
    )
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

      <h1 className="text-3xl font-bold mb-6">Editar Simulado</h1>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Informações do Simulado</CardTitle>
          <CardDescription>Atualize as informações básicas do simulado</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="titulo">Título</Label>
            <Input
              id="titulo"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              placeholder="Ex: Simulado de Matemática"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="descricao">Descrição</Label>
            <Textarea
              id="descricao"
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
              placeholder="Descreva o conteúdo do simulado"
            />
          </div>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Questões ({questoes.length})</CardTitle>
          <CardDescription>Adicione ou remova questões do simulado</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="visualizar">
            <TabsList className="mb-4">
              <TabsTrigger value="adicionar">Adicionar Questão</TabsTrigger>
              <TabsTrigger value="visualizar">Visualizar Questões</TabsTrigger>
            </TabsList>

            <TabsContent value="adicionar" className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="enunciado">Enunciado</Label>
                <Textarea
                  id="enunciado"
                  value={novaQuestao.enunciado}
                  onChange={(e) => setNovaQuestao({ ...novaQuestao, enunciado: e.target.value })}
                  placeholder="Digite o enunciado da questão"
                />
              </div>

              <div className="space-y-4">
                <Label>Alternativas</Label>
                {novaQuestao.alternativas.map((alt, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="flex items-center justify-center h-10 w-10 rounded-md border border-input bg-background px-3 py-2 text-sm">
                      {String.fromCharCode(65 + index)}
                    </div>
                    <Input
                      value={alt}
                      onChange={(e) => handleAlternativaChange(index, e.target.value)}
                      placeholder={`Alternativa ${String.fromCharCode(65 + index)}`}
                    />
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id={`resposta-${index}`}
                        checked={novaQuestao.resposta === index}
                        onCheckedChange={() => setNovaQuestao({ ...novaQuestao, resposta: index })}
                      />
                      <Label htmlFor={`resposta-${index}`}>Correta</Label>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-2">
                <Label htmlFor="explicacao">Explicação</Label>
                <Textarea
                  id="explicacao"
                  value={novaQuestao.explicacao}
                  onChange={(e) => setNovaQuestao({ ...novaQuestao, explicacao: e.target.value })}
                  placeholder="Digite a explicação da resposta correta"
                />
              </div>

              <Button onClick={handleAddQuestao}>Adicionar Questão</Button>
            </TabsContent>

            <TabsContent value="visualizar">
              {questoes.length === 0 ? (
                <p className="text-muted-foreground">Nenhuma questão adicionada ainda.</p>
              ) : (
                <div className="space-y-4">
                  {questoes.map((questao, index) => (
                    <Card key={questao.id}>
                      <CardHeader>
                        <CardTitle className="text-lg">Questão {index + 1}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="mb-4">{questao.enunciado}</p>
                        <div className="space-y-2">
                          {questao.alternativas.map((alt, altIndex) => (
                            <div key={altIndex} className="flex items-center gap-2">
                              <div
                                className={`flex items-center justify-center h-8 w-8 rounded-full ${
                                  questao.resposta === alt.id ? "bg-primary text-primary-foreground" : "bg-muted"
                                }`}
                              >
                                {alt.id.toUpperCase()}
                              </div>
                              <p>{alt.texto}</p>
                            </div>
                          ))}
                        </div>
                        <div className="mt-4">
                          <h4 className="font-medium mb-1">Explicação:</h4>
                          <p className="text-muted-foreground">{questao.explicacao}</p>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button variant="destructive" size="sm" onClick={() => handleRemoverQuestao(index)}>
                          Remover
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              )}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <div className="flex justify-end gap-4">
        <Button variant="outline" onClick={() => router.push("/simulados")}>
          Cancelar
        </Button>
        <Button onClick={handleSalvarSimulado}>Salvar Alterações</Button>
      </div>
    </div>
  )
}
