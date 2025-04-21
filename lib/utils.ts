import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatarData(dataString: string): string {
  try {
    const data = new Date(dataString)
    return data.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  } catch (error) {
    console.error("Erro ao formatar data:", error)
    return dataString
  }
}

// Função para gerar um ID único
export function generateUniqueId(): string {
  // Verificar se crypto.randomUUID está disponível
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return crypto.randomUUID()
  }

  // Fallback para navegadores que não suportam crypto.randomUUID
  return (
    "id-" +
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15) +
    "-" +
    Date.now().toString(36)
  )
}
