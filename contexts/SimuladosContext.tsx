"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { simuladosData } from "@/lib/data"
import type { Simulado, SimuladoPersonalizado, SimuladoResultado } from "@/lib/types"

// Definir o tipo para o contexto
interface SimuladosContextType {
  simulados: Simulado[]
  simuladosPersonalizados: SimuladoPersonalizado[]
  resultados: SimuladoResultado[]
  getSimuladoById: (id: string) => Simulado | SimuladoPersonalizado | undefined
  adicionarSimuladoPersonalizado: (simulado: SimuladoPersonalizado) => void
  editarSimuladoPersonalizado: (id: string, simulado: Partial<SimuladoPersonalizado>) => void
  excluirSimuladoPersonalizado: (id: string) => void
  adicionarResultado: (resultado: SimuladoResultado) => void
  getResultadosBySimuladoId: (simuladoId: string) => SimuladoResultado[]
  obterSimuladoPorId: (id: string) => Simulado | SimuladoPersonalizado | undefined
  obterResultadosPorSimuladoId: (simuladoId: string) => SimuladoResultado[]
  getResultadoBySimuladoId: (simuladoId: string) => SimuladoResultado | undefined
}

// Criar o contexto
const SimuladosContext = createContext<SimuladosContextType | undefined>(undefined)

// Hook personalizado para usar o contexto
export function useSimulados() {
  const context = useContext(SimuladosContext)
  if (context === undefined) {
    throw new Error("useSimulados deve ser usado dentro de um SimuladosProvider")
  }
  return context
}

// Provider component
export function SimuladosProvider({ children }: { children: ReactNode }) {
  const [simuladosPersonalizados, setSimuladosPersonalizados] = useState<SimuladoPersonalizado[]>([])
  const [resultados, setResultados] = useState<SimuladoResultado[]>([])

  // Carregar dados do localStorage na inicialização
  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const storedSimulados = localStorage.getItem("simuladosPersonalizados")
        if (storedSimulados) {
          const parsedSimulados = JSON.parse(storedSimulados)
          setSimuladosPersonalizados(parsedSimulados)
          console.log("Simulados personalizados carregados:", parsedSimulados)
        }

        const storedResultados = localStorage.getItem("simuladosResultados")
        if (storedResultados) {
          const parsedResultados = JSON.parse(storedResultados)
          setResultados(parsedResultados)
          console.log("Resultados carregados:", parsedResultados)
        }
      } catch (error) {
        console.error("Erro ao carregar dados do localStorage:", error)
      }
    }
  }, [])

  // Salvar dados no localStorage quando mudarem
  useEffect(() => {
    if (typeof window !== "undefined" && simuladosPersonalizados.length > 0) {
      try {
        localStorage.setItem("simuladosPersonalizados", JSON.stringify(simuladosPersonalizados))
        console.log("Simulados personalizados salvos:", simuladosPersonalizados)
      } catch (error) {
        console.error("Erro ao salvar simulados personalizados:", error)
      }
    }
  }, [simuladosPersonalizados])

  useEffect(() => {
    if (typeof window !== "undefined" && resultados.length > 0) {
      try {
        localStorage.setItem("simuladosResultados", JSON.stringify(resultados))
        console.log("Resultados salvos:", resultados)
      } catch (error) {
        console.error("Erro ao salvar resultados:", error)
      }
    }
  }, [resultados])

  // Função para obter um simulado pelo ID
  const getSimuladoById = (id: string): Simulado | SimuladoPersonalizado | undefined => {
    // Primeiro procura nos simulados padrão
    const simuladoPadrao = simuladosData.find((s) => s.id === id)
    if (simuladoPadrao) return simuladoPadrao

    // Se não encontrar, procura nos personalizados
    return simuladosPersonalizados.find((s) => s.id === id)
  }

  // Alias para getSimuladoById para manter compatibilidade
  const obterSimuladoPorId = getSimuladoById

  // Função para adicionar um novo simulado personalizado
  const adicionarSimuladoPersonalizado = (simulado: SimuladoPersonalizado) => {
    try {
      console.log("Adicionando simulado personalizado:", simulado)
      setSimuladosPersonalizados((prev) => {
        const novosSimulados = [...prev, simulado]
        // Salvar imediatamente no localStorage para garantir persistência
        if (typeof window !== "undefined") {
          localStorage.setItem("simuladosPersonalizados", JSON.stringify(novosSimulados))
        }
        return novosSimulados
      })
    } catch (error) {
      console.error("Erro ao adicionar simulado personalizado:", error)
      throw error
    }
  }

  // Função para editar um simulado personalizado existente
  const editarSimuladoPersonalizado = (id: string, simuladoAtualizado: Partial<SimuladoPersonalizado>) => {
    try {
      console.log("Editando simulado personalizado:", id, simuladoAtualizado)
      setSimuladosPersonalizados((prev) => {
        const novosSimulados = prev.map((simulado) =>
          simulado.id === id ? { ...simulado, ...simuladoAtualizado } : simulado,
        )
        // Salvar imediatamente no localStorage
        if (typeof window !== "undefined") {
          localStorage.setItem("simuladosPersonalizados", JSON.stringify(novosSimulados))
        }
        return novosSimulados
      })
    } catch (error) {
      console.error("Erro ao editar simulado personalizado:", error)
      throw error
    }
  }

  // Função para excluir um simulado personalizado
  const excluirSimuladoPersonalizado = (id: string) => {
    try {
      console.log("Excluindo simulado personalizado:", id)
      setSimuladosPersonalizados((prev) => {
        const novosSimulados = prev.filter((simulado) => simulado.id !== id)
        // Salvar imediatamente no localStorage
        if (typeof window !== "undefined") {
          localStorage.setItem("simuladosPersonalizados", JSON.stringify(novosSimulados))
        }
        return novosSimulados
      })

      // Também remover os resultados associados a este simulado
      setResultados((prev) => {
        const novosResultados = prev.filter((resultado) => resultado.simuladoId !== id)
        // Salvar imediatamente no localStorage
        if (typeof window !== "undefined") {
          localStorage.setItem("simuladosResultados", JSON.stringify(novosResultados))
        }
        return novosResultados
      })
    } catch (error) {
      console.error("Erro ao excluir simulado personalizado:", error)
      throw error
    }
  }

  // Função para adicionar um novo resultado
  const adicionarResultado = (resultado: SimuladoResultado) => {
    try {
      console.log("Adicionando resultado:", resultado)
      setResultados((prev) => {
        const novosResultados = [...prev, resultado]
        // Salvar imediatamente no localStorage
        if (typeof window !== "undefined") {
          localStorage.setItem("simuladosResultados", JSON.stringify(novosResultados))
        }
        return novosResultados
      })
    } catch (error) {
      console.error("Erro ao adicionar resultado:", error)
      throw error
    }
  }

  // Função para obter resultados de um simulado específico
  const getResultadosBySimuladoId = (simuladoId: string): SimuladoResultado[] => {
    return resultados.filter((r) => r.simuladoId === simuladoId)
  }

  // Alias para getResultadosBySimuladoId para manter compatibilidade
  const obterResultadosPorSimuladoId = getResultadosBySimuladoId

  // Função para obter o último resultado de um simulado específico
  const getResultadoBySimuladoId = (simuladoId: string): SimuladoResultado | undefined => {
    const resultadosSimulado = resultados.filter((r) => r.simuladoId === simuladoId)
    return resultadosSimulado.length > 0 ? resultadosSimulado[resultadosSimulado.length - 1] : undefined
  }

  // Valor do contexto
  const value = {
    simulados: simuladosData,
    simuladosPersonalizados,
    resultados,
    getSimuladoById,
    adicionarSimuladoPersonalizado,
    editarSimuladoPersonalizado,
    excluirSimuladoPersonalizado,
    adicionarResultado,
    getResultadosBySimuladoId,
    obterSimuladoPorId,
    obterResultadosPorSimuladoId,
    getResultadoBySimuladoId,
  }

  return <SimuladosContext.Provider value={value}>{children}</SimuladosContext.Provider>
}
