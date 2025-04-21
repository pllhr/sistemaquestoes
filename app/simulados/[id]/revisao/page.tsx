"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle, CheckCircle, ArrowLeft, ArrowRight, AlertTriangle } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { motion, AnimatePresence } from "framer-motion"
import { useSimulados } from "@/contexts/SimuladosContext"

export default function RevisaoPage({ params }: { params: { id: string } }) {
  const { getSimuladoById, getResultadosBySimuladoId } = useSimulados()
  const simuladoId = params.id
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [simulado, setSimulado] = useState<any>(null)
  const [resultado, setResultado] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Verificar se o ID é válido antes de tentar buscar o simulado
    if (simuladoId === "criar" || simuladoId === "novo") {
      // ID inválido, redirecionar
      setLoading(false)
      return
    }

    // Obter o simulado pelo ID
    const simuladoData = getSimuladoById(simuladoId)

    // Obter o último resultado do simulado
    const resultados = getResultadosBySimuladoId(simuladoId)
    const ultimoResultado = resultados.length > 0 ? resultados[resultados.length - 1] : null

    setSimulado(simuladoData)
    setResultado(ultimoResultado)
    setLoading(false)
  }, [simuladoId, getSimuladoById, getResultadosBySimuladoId])

  // Se estiver carregando, mostrar indicador de carregamento
  if (loading) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center">
        <p>Carregando...</p>
      </div>
    )
  }

  // Se o simulado não existir ou não houver resultado, mostrar mensagem de erro
  if (!simulado || !resultado) {
    return (
      <div className="flex min-h-screen flex-col">
        <motion.header
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
        >
          <div className="container flex h-16 items-center justify-between">
            <motion.div
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link href="/">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-md bg-purple-600"></div>
                  <span className="text-xl font-bold">SimulabMath</span>
                </div>
              </Link>
            </motion.div>
          </div>
        </motion.header>
        <main className="flex-1 container py-12">
          <div className="max-w-md mx-auto text-center">
            <AlertTriangle className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
            <h1 className="text-2xl font-bold mb-2">Revisão não disponível</h1>
            <p className="text-muted-foreground mb-6">
              Não foi possível encontrar o simulado ou você ainda não realizou este simulado.
            </p>
            <Link href="/simulados">
              <Button className="bg-purple-600 hover:bg-purple-700 transition-all duration-300">
                Ver todos os simulados
              </Button>
            </Link>
          </div>
        </main>
      </div>
    )
  }

  const questao = simulado.questoes[currentQuestion]
  // Encontrar a resposta do usuário para esta questão
  const respostaUsuario = resultado.respostas[currentQuestion]
  const isCorrect = respostaUsuario === questao.resposta

  const handlePrevQuestion = () => {
    setCurrentQuestion((prev) => Math.max(0, prev - 1))
  }

  const handleNextQuestion = () => {
    setCurrentQuestion((prev) => Math.min(simulado.questoes.length - 1, prev + 1))
  }

  return (
    <div className="flex min-h-screen flex-col">
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      >
        <div className="container flex h-16 items-center justify-between">
          <motion.div
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link href="/">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-md bg-purple-600"></div>
                <span className="text-xl font-bold">ExamPro</span>
              </div>
            </Link>
          </motion.div>
          <div className="flex items-center gap-2">
            <Link href={`/simulados/${simuladoId}`}>
              <Button variant="outline" size="sm">
                Voltar ao Simulado
              </Button>
            </Link>
          </div>
        </div>
      </motion.header>
      <main className="flex-1 container py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto space-y-6"
        >
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Revisão: {simulado.titulo}</h1>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Questão</span>
              <motion.span
                key={currentQuestion}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="font-medium"
              >
                {currentQuestion + 1}/{simulado.questoes.length}
              </motion.span>
            </div>
          </div>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${((currentQuestion + 1) / simulado.questoes.length) * 100}%` }}
            className="h-2 bg-purple-600 rounded-full"
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="overflow-hidden">
                <CardHeader>
                  <CardTitle className="text-lg">
                    Questão {currentQuestion + 1}: {questao.enunciado}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    {questao.alternativas.map((alternativa: any) => (
                      <motion.div
                        key={alternativa.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 * (alternativa.id.charCodeAt(0) - 97) }}
                        className={`flex items-center space-x-2 rounded-lg border p-4 transition-all duration-300 ${
                          alternativa.id === questao.resposta
                            ? "border-green-500 bg-green-50"
                            : alternativa.id === respostaUsuario && alternativa.id !== questao.resposta
                              ? "border-red-500 bg-red-50"
                              : ""
                        }`}
                      >
                        <div className="flex-1">
                          <span className="font-semibold mr-2">{alternativa.id.toUpperCase()})</span>
                          {alternativa.texto}
                        </div>
                        {alternativa.id === questao.resposta && <CheckCircle className="h-5 w-5 text-green-500" />}
                        {alternativa.id === respostaUsuario && alternativa.id !== questao.resposta && (
                          <AlertCircle className="h-5 w-5 text-red-500" />
                        )}
                      </motion.div>
                    ))}
                  </div>

                  <Alert className={isCorrect ? "border-green-500 bg-green-50" : "border-red-500 bg-red-50"}>
                    <div className="flex items-start gap-4">
                      {isCorrect ? (
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      ) : (
                        <AlertCircle className="h-5 w-5 text-red-500" />
                      )}
                      <div>
                        <AlertTitle className={isCorrect ? "text-green-700" : "text-red-700"}>
                          {isCorrect ? "Você acertou esta questão!" : "Você errou esta questão"}
                        </AlertTitle>
                        <AlertDescription className="mt-2">{questao.explicacao}</AlertDescription>
                      </div>
                    </div>
                  </Alert>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button
                    variant="outline"
                    onClick={handlePrevQuestion}
                    disabled={currentQuestion === 0}
                    className="transition-all duration-300"
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" /> Anterior
                  </Button>
                  <Button
                    onClick={handleNextQuestion}
                    disabled={currentQuestion === simulado.questoes.length - 1}
                    className="bg-purple-600 hover:bg-purple-700 transition-all duration-300"
                  >
                    Próxima <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-8">
            <Link href="/simulados">
              <Button variant="outline" className="transition-all duration-300">
                Voltar para Simulados
              </Button>
            </Link>
          </div>
        </motion.div>
      </main>
    </div>
  )
}
