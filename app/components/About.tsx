"use client"

import { motion } from "framer-motion"
import { CheckCircleIcon } from "@heroicons/react/24/outline"

const achievements = [
  "10+ Project Berhasil Diselesaikan",
  "10+ Mahasiswa Terbantu",
  "24/7 Customer Support",
  "Garansi Revisi Unlimited",
  "Tim Berpengalaman",
  "Harga Terjangkau & Kompetitif",
]

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <h2 className="text-4xl font-bold mb-6 text-foreground">Tentang JooKey</h2>
            <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
              TechSolution adalah penyedia layanan teknologi terpercaya yang berfokus pada solusi digital untuk
              kebutuhan akademik dan bisnis. Kami memiliki tim profesional yang berpengalaman dalam berbagai bidang
              teknologi.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Dengan komitmen untuk memberikan kualitas terbaik, kami telah membantu ratusan klien menyelesaikan project
              mereka dengan hasil yang memuaskan. Kepercayaan klien adalah prioritas utama kami.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <CheckCircleIcon className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground text-sm">{achievement}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold text-primary mb-4">Profesional</div>
                  <p className="text-xl font-semibold text-foreground">Berpengalaman</p>
                  <p className="text-muted-foreground">Melayani Klien Terpercaya</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
