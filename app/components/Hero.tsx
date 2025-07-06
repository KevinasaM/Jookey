"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { CodeBracketIcon, AcademicCapIcon, CpuChipIcon, GlobeAltIcon } from "@heroicons/react/24/outline"
import { useRef } from "react"

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  const services = [
    { icon: AcademicCapIcon, name: "Joki Tugas Kuliah" },
    { icon: CodeBracketIcon, name: "Joki Coding" },
    { icon: CpuChipIcon, name: "IoT Solutions" },
    { icon: GlobeAltIcon, name: "Website Development" },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        // ease: easeOut, // use a valid string easing
      },
    },
  }

  return (
    <div ref={ref} className="relative isolate overflow-hidden bg-background min-h-screen flex items-center">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"
        animate={{
          background: [
            "linear-gradient(45deg, rgba(59, 130, 246, 0.05), transparent, rgba(168, 85, 247, 0.05))",
            "linear-gradient(135deg, rgba(168, 85, 247, 0.05), transparent, rgba(59, 130, 246, 0.05))",
            "linear-gradient(225deg, rgba(59, 130, 246, 0.05), transparent, rgba(168, 85, 247, 0.05))",
          ],
        }}
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />

      <motion.div
        style={{ y, opacity }}
        className="mx-auto max-w-7xl px-6 py-20 lg:flex lg:items-center lg:gap-x-10 lg:px-8"
      >
        <motion.div
          className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg lg:flex-shrink-0"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <motion.h1 className="mt-10 text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              <motion.span
                className="text-gradient inline-block"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                style={{
                  backgroundSize: "200% 200%",
                  backgroundImage: "linear-gradient(45deg, #3b82f6, #8b5cf6, #3b82f6)",
                }}
              >
                JooKey
              </motion.span>
              <br />
              <motion.span
                className="text-2xl sm:text-3xl font-normal text-muted-foreground"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Solusi Digital Terpercaya
              </motion.span>
            </motion.h1>
          </motion.div>

          <motion.p variants={itemVariants} className="mt-6 text-lg leading-8 text-muted-foreground">
            Kami menyediakan layanan joki tugas kuliah, pengembangan coding, solusi IoT, dan pembuatan website dengan
            kualitas terbaik dan harga terjangkau.
          </motion.p>

          <motion.div variants={itemVariants} className="mt-8 grid grid-cols-2 gap-4">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                className="flex items-center gap-2 text-sm text-muted-foreground"
                whileHover={{
                  scale: 1.05,
                  color: "rgb(59, 130, 246)",
                  transition: { duration: 0.2 },
                }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                >
                  <service.icon className="h-5 w-5 text-primary" />
                </motion.div>
                <span>{service.name}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="mt-10 flex items-center gap-x-6">
            <motion.a
              href="https://wa.me/6285600601619"
              className="apple-button"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Konsultasi Gratis
            </motion.a>
            <motion.a
              href="#services"
              className="text-sm font-semibold leading-6 text-foreground group"
              whileHover={{ x: 5 }}
            >
              Lihat Layanan
              <motion.span
                aria-hidden="true"
                className="inline-block ml-1"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
              >
                →
              </motion.span>
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="mx-auto mt-16 lg:mt-0"
          initial={{ opacity: 0, x: 100, rotateY: -30 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <motion.div className="relative" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
            <motion.div
              className="w-[500px] h-[400px] rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center relative overflow-hidden"
              animate={{
                background: [
                  "linear-gradient(45deg, rgba(59, 130, 246, 0.2), rgba(168, 85, 247, 0.2))",
                  "linear-gradient(135deg, rgba(168, 85, 247, 0.2), rgba(59, 130, 246, 0.2))",
                  "linear-gradient(225deg, rgba(59, 130, 246, 0.2), rgba(168, 85, 247, 0.2))",
                ],
              }}
              transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              {/* Floating code symbols */}
              <motion.div
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute text-primary/30 font-mono text-2xl"
                    style={{
                      left: `${20 + i * 15}%`,
                      top: `${20 + i * 10}%`,
                    }}
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0.3, 0.7, 0.3],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: i * 0.5,
                    }}
                  >
                    {["</", "{", "}", "()", "[]", "//"][i]}
                  </motion.div>
                ))}
              </motion.div>

              <div className="text-center z-10">
                <motion.div
                  animate={{
                    rotateY: [0, 360],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  <CodeBracketIcon className="h-24 w-24 text-primary mx-auto mb-4" />
                </motion.div>
                <motion.p
                  className="text-xl font-semibold text-foreground"
                  animate={{ opacity: [1, 0.7, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  Task Solutions
                </motion.p>
                <p className="text-muted-foreground">Professional Development Services</p>
              </div>
            </motion.div>

            {/* Glowing border effect */}
            <motion.div
              className="absolute inset-0 rounded-2xl"
              style={{
                background: "linear-gradient(45deg, transparent, rgba(59, 130, 246, 0.3), transparent)",
                filter: "blur(1px)",
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}
