"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { AlertCircle, CheckCircle, Clock, XCircle } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { motion, AnimatePresence } from "framer-motion"
import { useToast } from "@/components/ui/use-toast"
import { useSimulados } from "@/contexts/SimuladosContext"
import type { SimuladoResultado } from "@/lib/types"

export default function SimuladoPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const { toast } = useToast()
  const { getSimuladoById, adicionarResultado } = useSimulados()

  const [simulado, setSimulado] = useState<any>(null)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [answers, setAnswers] = useState<(string | null)[]>([])
  const [showFeedback, setShowFeedback] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)
  const [timeLeft, setTimeLeft] = useState(2700) // 45 minutos em segundos
  const [isFinished, setIsFinished] = useState(false)
  const [score, setScore] = useState(0)
  const [progressValue, setProgressValue] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Verificar se o ID é válido antes de tentar buscar o simulado
    if (params.id === "criar" || params.id === "novo") {
      toast({
        title: "Rota inválida",
        description: "A rota solicitada não é válida",
        variant: "destructive",
      })
      router.push("/simulados")
      return
    }

    const simuladoEncontrado = getSimuladoById(params.id)

    if (simuladoEncontrado) {
      setSimulado(simuladoEncontrado)
      // Inicializar o array de respostas com null para cada questão
      setAnswers(new Array(simuladoEncontrado.questoes.length).fill(null))
    } else {
      // Simulado não encontrado, redirecionar
      toast({
        title: "Simulado não encontrado",
        description: "O simulado solicitado não foi encontrado",
        variant: "destructive",
      })
      router.push("/simulados")
    }

    setLoading(false)
  }, [params.id, getSimuladoById, router, toast])

  useEffect(() => {
    if (!simulado) return

    // Timer para o simulado
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          finishSimulado()
          return 0
        }
        return prev - 1
      })
    }, 1000)

    // Atualiza o progresso
    setProgressValue((currentQuestion / simulado.questoes.length) * 100)

    return () => clearInterval(timer)
  }, [currentQuestion, simulado])

  if (loading || !simulado) {
    return (
      <div className="container mx-auto py-8">
        <p>Carregando...</p>
      </div>
    )
  }

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`
  }

  const handleAnswerSelect = (value: string) => {
    setSelectedAnswer(value)
  }

  const checkAnswer = () => {
    if (!selectedAnswer) return

    const isAnswerCorrect = selectedAnswer === simulado.questoes[currentQuestion].resposta
    setIsCorrect(isAnswerCorrect)

    // Atualiza o array de respostas
    const newAnswers = [...answers]
    newAnswers[currentQuestion] = selectedAnswer
    setAnswers(newAnswers)

    setShowFeedback(true)
  }

  const nextQuestion = () => {
    setShowFeedback(false)
    setSelectedAnswer(null)

    if (currentQuestion < simulado.questoes.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      finishSimulado()
    }
  }

  const finishSimulado = () => {
    // Calcula a pontuação
    let correctAnswers = 0
    answers.forEach((answer, index) => {
      if (answer === simulado.questoes[index].resposta) {
        correctAnswers++
      }
    })

    setScore(correctAnswers)
    setIsFinished(true)

    // Criar objeto de resultado
    const resultado: SimuladoResultado = {
      simuladoId: simulado.id,
      respostas: answers,
      acertos: correctAnswers,
      total: simulado.questoes.length,
      dataInicio: new Date().toISOString(),
      dataFim: new Date().toISOString(),
    }

    // Salvar resultado
    adicionarResultado(resultado)
  }

  if (isFinished) {
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
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Card className="max-w-3xl mx-auto">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Simulado Concluído</CardTitle>
                <CardDescription>Veja seu desempenho no simulado {simulado.titulo}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center rounded-full p-4 bg-purple-100 mb-4">
                    <CheckCircle className="h-10 w-10 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold">Sua pontuação</h3>
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 15,
                      delay: 0.5,
                    }}
                    className="text-5xl font-bold mt-2 text-purple-600"
                  >
                    {score} / {simulado.questoes.length}
                  </motion.div>
                  <p className="text-muted-foreground mt-2">
                    Você acertou {score} de {simulado.questoes.length} questões
                  </p>
                </motion.div>

                <div className="space-y-4 mt-6">
                  <h3 className="font-semibold text-lg">Resumo das questões</h3>
                  {simulado.questoes.map((questao: any, index: number) => {
                    // Encontrar a alternativa selecionada pelo usuário
                    const resposta = answers[index]
                    const alternativaSelecionada = resposta
                      ? questao.alternativas.find((alt: any) => alt.id === resposta)
                      : null

                    return (
                      <motion.div
                        key={questao.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 * index }}
                        whileHover={{
                          scale: 1.02,
                          boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                        }}
                        className={`flex items-center gap-3 p-3 rounded-lg border transition-all duration-300`}
                      >
                        {answers[index] === questao.resposta ? (
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        ) : (
                          <XCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
                        )}
                        <div className="flex-1">
                          <p className="font-medium truncate">{questao.enunciado}</p>
                          {alternativaSelecionada && (
                            <p className="text-sm text-muted-foreground mt-1">
                              Sua resposta:{" "}
                              <span className={answers[index] === questao.resposta ? "text-green-600" : "text-red-600"}>
                                {resposta?.toUpperCase()}) {alternativaSelecionada.texto}
                              </span>
                            </p>
                          )}
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Link href="/simulados">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button className="bg-red-600 hover:bg-purple-700 transition-all duration-300" variant="outline">
                      Voltar para Simulados
                    </Button>
                  </motion.div>
                </Link>
                <Link href={`/simulados/${simulado.id}/revisao`}>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button className="bg-green-600 hover:bg-purple-700 transition-all duration-300">
                      Revisar Questões
                    </Button>
                  </motion.div>
                </Link>
              </CardFooter>
            </Card>
          </motion.div>
        </main>
      </div>
    )
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
                <span className="text-xl font-bold">SimulabMath</span>
              </div>
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center gap-2"
          >
            <Clock className="h-5 w-5 text-muted-foreground" />
            <span className="font-medium">{formatTime(timeLeft)}</span>
          </motion.div>
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
            <h1 className="text-2xl font-bold">{simulado.titulo}</h1>
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
            animate={{ width: `${progressValue}%` }}
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
                    Questão {currentQuestion + 1}: {simulado.questoes[currentQuestion].enunciado}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <RadioGroup value={selectedAnswer || ""} onValueChange={handleAnswerSelect} className="space-y-3">
                    {simulado.questoes[currentQuestion].alternativas.map((alternativa: any) => (
                      <motion.div
                        key={alternativa.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 * (alternativa.id.charCodeAt(0) - 97) }}
                        whileHover={{ scale: 1.02 }}
                        className={`flex items-center space-x-2 rounded-lg border p-4 transition-all duration-300 ${
                          showFeedback && alternativa.id === simulado.questoes[currentQuestion].resposta
                            ? "border-green-500 bg-green-50"
                            : showFeedback && alternativa.id === selectedAnswer
                              ? "border-red-500 bg-red-50"
                              : ""
                        }`}
                      >
                        <RadioGroupItem value={alternativa.id} id={alternativa.id} disabled={showFeedback} />
                        <Label htmlFor={alternativa.id} className="flex-1 cursor-pointer font-normal">
                          <span className="font-semibold mr-2">{alternativa.id.toUpperCase()})</span>
                          {alternativa.texto}
                        </Label>
                        {showFeedback && alternativa.id === simulado.questoes[currentQuestion].resposta && (
                          <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ type: "spring", stiffness: 500, damping: 15 }}
                          >
                            <CheckCircle className="h-5 w-5 text-green-500" />
                          </motion.div>
                        )}
                        {showFeedback &&
                          alternativa.id === selectedAnswer &&
                          alternativa.id !== simulado.questoes[currentQuestion].resposta && (
                            <motion.div
                              initial={{ scale: 0, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              transition={{ type: "spring", stiffness: 500, damping: 15 }}
                            >
                              <XCircle className="h-5 w-5 text-red-500" />
                            </motion.div>
                          )}
                      </motion.div>
                    ))}
                  </RadioGroup>
                </CardContent>
                <CardFooter className="flex justify-between">
                  {!showFeedback ? (
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        onClick={checkAnswer}
                        disabled={!selectedAnswer}
                        className="bg-purple-600 hover:bg-purple-700 transition-all duration-300"
                      >
                        Responder
                      </Button>
                    </motion.div>
                  ) : (
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        onClick={nextQuestion}
                        className="bg-purple-600 hover:bg-purple-700 transition-all duration-300"
                      >
                        {currentQuestion < simulado.questoes.length - 1 ? "Próxima Questão" : "Finalizar Simulado"}
                      </Button>
                    </motion.div>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence>
            {showFeedback && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Alert className={isCorrect ? "border-green-500 bg-green-50" : "border-red-500 bg-red-50"}>
                  <div className="flex items-start gap-4">
                    {isCorrect ? (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 500, damping: 15 }}
                      >
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      </motion.div>
                    ) : (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 500, damping: 15 }}
                      >
                        <AlertCircle className="h-5 w-5 text-red-500" />
                      </motion.div>
                    )}
                    <div>
                      <AlertTitle className={isCorrect ? "text-green-700" : "text-red-700"}>
                        {isCorrect ? "Resposta Correta!" : "Resposta Incorreta"}
                      </AlertTitle>
                      <AlertDescription className="mt-2">
                        {simulado.questoes[currentQuestion].explicacao}
                      </AlertDescription>
                    </div>
                  </div>
                </Alert>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </main>
    </div>
  )
}
