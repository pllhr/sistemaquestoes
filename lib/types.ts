// Tipos para o sistema de simulados
export type Alternativa = {
  id: string
  texto: string
}

export type Questao = {
  id: number
  enunciado: string
  alternativas: Alternativa[]
  resposta: string
  explicacao: string
}

export type Simulado = {
  id: string
  titulo: string
  descricao: string
  numQuestoes: number
  duracao: string
  duracaoEmSegundos: number
  nivel: string
  topicos?: string[]
  tentativas?: number
  mediaAcertos?: number
  questoes: Questao[]
  tipo?: "padrao" | "personalizado"
}

export type SimuladoPersonalizado = Simulado & {
  dataCriacao: string
  tipo: "personalizado"
}

export type SimuladoResultado = {
  simuladoId: string
  respostas: (string | null)[]
  acertos: number
  total: number
  dataInicio: string
  dataFim: string
}
