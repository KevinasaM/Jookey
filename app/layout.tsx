import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "./components/Header"
import Footer from "./components/Footer"
import AnimatedBackground from "./components/AnimatedBackground"
import FloatingElements from "./components/FloatingElements"
import ScrollProgress from "./components/ScrollProgress"
import LoadingAnimation from "./components/LoadingAnimation"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "JooKey -  Joki Tugas | Solusi Digital Terpercaya, Coding, IoT & Website Development",
  description: "Layanan joki tugas kuliah, coding, IoT, dan website development",
    generator: 'Kevin'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-background text-foreground`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <LoadingAnimation />
          <ScrollProgress />
          <AnimatedBackground />
          <FloatingElements />
          <Header />
          <main className="relative z-20">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
