"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import { MoonIcon, SunIcon, Bars3Icon } from "@heroicons/react/24/outline"
import FullScreenMenu from "./FullScreenMenu"

export default function Header() {
  const [mounted, setMounted] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  return (
    <>
      <motion.header
        className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="text-2xl font-bold text-gradient">JooKey</span>
            </Link>
          </div>
          <div className="hidden lg:flex gap-x-8">
            <Link
              href="#services"
              className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
            >
              Layanan
            </Link>
            <Link
              href="#portfolio"
              className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
            >
              Portfolio
            </Link>
            <Link
              href="#team"
              className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
            >
              Tim Kami
            </Link>
            <Link
              href="#about"
              className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
            >
              Tentang
            </Link>
            <Link
              href="#contact"
              className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
            >
              Kontak
            </Link>
          </div>
          <div className="flex items-center gap-4">
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="rounded-full p-2 bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
              >
                {theme === "dark" ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
              </button>
            )}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="lg:hidden rounded-full p-2 bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          </div>
        </nav>
      </motion.header>
      <FullScreenMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  )
}
