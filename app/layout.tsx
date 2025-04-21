import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { SimuladosProvider } from "@/contexts/SimuladosContext"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SimulabMath - Sistema de Simulados",
  description: "Plataforma de simulados para concursos e vestibulares",
  generator: "v0.dev",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.ico" }
    ],
    apple: "/placeholder-logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <SimuladosProvider>{children}</SimuladosProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
