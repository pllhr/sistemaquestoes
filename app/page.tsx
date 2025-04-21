"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function Home() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
  }

  const features = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-8 w-8 text-purple-600"
        >
          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
          <polyline points="14 2 14 8 20 8" />
          <path d="M9 13h6" />
          <path d="M9 17h3" />
        </svg>
      ),
      title: "Questões Personalizadas",
      description: "Crie simulados com questões específicas para suas necessidades de estudo.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-8 w-8 text-purple-600"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
      title: "Feedback Imediato",
      description: "Receba feedback instantâneo sobre suas respostas e explicações detalhadas.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-8 w-8 text-purple-600"
        >
          <path d="M3 3v18h18" />
          <path d="m19 9-5 5-4-4-3 3" />
        </svg>
      ),
      title: "Análise de Desempenho",
      description: "Acompanhe seu progresso com estatísticas detalhadas e identifique áreas para melhorar.",
    },
  ]

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
            <div className="h-8 w-8 rounded-md bg-purple-600"></div>
            <span className="text-xl font-bold">SimulabMath</span>
          </motion.div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
              Início
            </Link>
            <Link
              href="/sobre"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Sobre
            </Link>
            <Link
              href="/simulados"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Simulados
            </Link>
            <Link
              href="/precos"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Preços
            </Link>
            <Link
              href="/contato"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Contato
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/simulados">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-purple-600 hover:bg-purple-700 transition-all duration-300">Começar Agora</Button>
              </motion.div>
            </Link>
          </div>
        </div>
      </motion.header>
      <main className="flex-1">
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-purple-500 to-purple-700"
        >
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-4"
              >
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                  Sistema de Questões de Prova Personalizado
                </h1>
                <p className="max-w-[600px] text-white/90 md:text-xl">
                  Prepare-se para suas provas com nosso sistema inteligente de questões. Personalize seus estudos,
                  acompanhe seu progresso e alcance melhores resultados.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/simulados">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button className="bg-white text-purple-700 hover:bg-gray-100 transition-all duration-300">
                        Iniciar Simulado
                      </Button>
                    </motion.div>
                  </Link>
                  <Link href="/novo-simulado">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        variant="outline"
                        className="border-white text-white hover:bg-white/10 transition-all duration-300"
                      >
                        Criar Simulado
                      </Button>
                    </motion.div>
                  </Link>
                </div>
              </motion.div>
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex justify-center"
              >
                <motion.div
                  whileHover={{
                    y: -5,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  className="relative w-full max-w-[500px] aspect-video rounded-xl overflow-hidden shadow-2xl"
                >
                  <div className="absolute inset-0 bg-white p-6 rounded-xl">
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: "50%" }}
                          transition={{ duration: 1, delay: 0.8 }}
                          className="h-3 bg-purple-200 rounded-full"
                        ></motion.div>
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: "75%" }}
                          transition={{ duration: 1, delay: 1 }}
                          className="h-6 bg-purple-100 rounded-lg"
                        ></motion.div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="h-4 w-4 rounded-full border-2 border-purple-500"></div>
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "75%" }}
                            transition={{ duration: 1, delay: 1.2 }}
                            className="h-4 bg-gray-100 rounded-full"
                          ></motion.div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-4 w-4 rounded-full border-2 border-purple-500 flex items-center justify-center">
                            <div className="h-2 w-2 rounded-full bg-purple-500"></div>
                          </div>
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "75%" }}
                            transition={{ duration: 1, delay: 1.4 }}
                            className="h-4 bg-gray-100 rounded-full"
                          ></motion.div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-4 w-4 rounded-full border-2 border-purple-500"></div>
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "75%" }}
                            transition={{ duration: 1, delay: 1.6 }}
                            className="h-4 bg-gray-100 rounded-full"
                          ></motion.div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-4 w-4 rounded-full border-2 border-purple-500"></div>
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "75%" }}
                            transition={{ duration: 1, delay: 1.8 }}
                            className="h-4 bg-gray-100 rounded-full"
                          ></motion.div>
                        </div>
                      </div>
                      <div className="flex justify-end">
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.5, delay: 2 }}
                          className="h-10 w-32 bg-purple-500 rounded-lg"
                        ></motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center justify-center space-y-4 text-center"
            >
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Recursos Principais</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Nosso sistema oferece tudo o que você precisa para se preparar para suas provas
                </p>
              </div>
            </motion.div>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-12"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  whileHover={{
                    y: -10,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                    backgroundColor: "rgba(250, 245, 255, 1)",
                  }}
                  className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm transition-all duration-300"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                  <p className="text-muted-foreground text-center">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full py-12 md:py-24 lg:py-32 bg-purple-50"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Comece Agora</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Escolha um simulado pronto ou crie o seu próprio
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <Link href="/simulados">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button className="bg-purple-600 hover:bg-purple-700 transition-all duration-300 text-lg px-8 py-6 h-auto">
                      Ver Simulados
                    </Button>
                  </motion.div>
                </Link>
                <Link href="/novo-simulado">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      variant="outline"
                      className="border-purple-600 text-purple-700 hover:bg-purple-100 transition-all duration-300 text-lg px-8 py-6 h-auto"
                    >
                      Criar Simulado
                    </Button>
                  </motion.div>
                </Link>
              </div>
            </div>
          </div>
        </motion.section>
      </main>
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="border-t py-6 md:py-8"
      >
        <div className="container flex flex-col items-center justify-center gap-4 md:flex-row md:gap-8">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2025 ExamPro. Todos os direitos reservados.
          </p>
        </div>
      </motion.footer>
    </div>
  )
}
