"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import AnimatedCounter from "./AnimatedCounter"

const stats = [
  { value: 10, suffix: "+", label: "Project Selesai", icon: "🚀" },
  { value: 10, suffix: "+", label: "Mahasiswa Terbantu", icon: "🎓" },
  { value: 24, suffix: "/7", label: "Customer Support", icon: "💬" },
  { value: 1, suffix: "+", label: "Tahun Pengalaman", icon: "⭐" },
]

export default function StatsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section className="py-20 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "linear-gradient(45deg, rgba(59, 130, 246, 0.05), rgba(168, 85, 247, 0.05), rgba(59, 130, 246, 0.05))",
            "linear-gradient(135deg, rgba(168, 85, 247, 0.05), rgba(59, 130, 246, 0.05), rgba(168, 85, 247, 0.05))",
            "linear-gradient(225deg, rgba(59, 130, 246, 0.05), rgba(168, 85, 247, 0.05), rgba(59, 130, 246, 0.05))",
          ],
        }}
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-foreground mb-4">Pencapaian Kami</h2>
          <p className="text-muted-foreground">Angka yang membuktikan dedikasi dan kualitas layanan kami</p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center group"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="relative bg-background/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-border/50"
                whileHover={{
                  borderColor: "rgba(59, 130, 246, 0.3)",
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
                }}
              >
                <motion.div
                  className="text-4xl mb-2"
                  animate={{
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: index * 0.5,
                  }}
                >
                  {stat.icon}
                </motion.div>
                <motion.div
                  className="text-3xl font-bold text-primary mb-2"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 0.5 + index * 0.2 }}
                >
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </motion.div>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
