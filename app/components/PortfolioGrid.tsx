"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "Sistem Manajemen Mahasiswa",
    description: "Web application untuk mengelola data mahasiswa dengan fitur lengkap",
    imageUrl: "/placeholder.svg?height=600&width=800",
    category: "Web Development",
    tech: ["Laravel", "MySQL", "Bootstrap"],
    client: "Universitas ABC",
  },
  {
    id: 2,
    title: "Smart Home IoT System",
    description: "Sistem rumah pintar dengan kontrol lampu, AC, dan keamanan",
    imageUrl: "/placeholder.svg?height=800&width=600",
    category: "IoT",
    tech: ["Arduino", "ESP32", "Firebase"],
    client: "Private Client",
  },
  {
    id: 3,
    title: "E-Commerce Mobile App",
    description: "Aplikasi mobile untuk toko online dengan fitur payment gateway",
    imageUrl: "/placeholder.svg?height=600&width=800",
    category: "Mobile App",
    tech: ["Flutter", "Firebase", "Stripe"],
    client: "Toko Online XYZ",
  },
  {
    id: 4,
    title: "Skripsi: Machine Learning",
    description: "Penelitian tentang prediksi harga saham menggunakan LSTM",
    imageUrl: "/placeholder.svg?height=800&width=600",
    category: "Academic",
    tech: ["Python", "TensorFlow", "Pandas"],
    client: "Mahasiswa Teknik Informatika",
  },
  {
    id: 5,
    title: "Company Profile Website",
    description: "Website company profile dengan design modern dan responsive",
    imageUrl: "/placeholder.svg?height=600&width=800",
    category: "Web Development",
    tech: ["React", "Next.js", "Tailwind"],
    client: "PT. Teknologi Maju",
  },
  {
    id: 6,
    title: "Industrial IoT Monitoring",
    description: "Sistem monitoring mesin industri dengan dashboard real-time",
    imageUrl: "/placeholder.svg?height=800&width=600",
    category: "IoT",
    tech: ["Raspberry Pi", "InfluxDB", "Grafana"],
    client: "PT. Manufaktur Indonesia",
  },
]

const categories = ["All", ...new Set(projects.map((project) => project.category))]

export default function PortfolioGrid() {
  const [filter, setFilter] = useState("All")

  const filteredProjects = filter === "All" ? projects : projects.filter((project) => project.category === filter)

  return (
    <section id="portfolio" className="py-20 bg-secondary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Portfolio Kami</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Showcase project-project yang telah kami kerjakan dengan hasil memuaskan
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-background text-foreground hover:bg-primary/10 border border-border"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-background rounded-2xl shadow-lg overflow-hidden hover-lift border border-border/50"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.imageUrl || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-2 py-1 bg-primary text-primary-foreground text-xs rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-3">{project.description}</p>

                  <div className="mb-3">
                    <p className="text-xs text-muted-foreground mb-1">Client: {project.client}</p>
                    <div className="flex flex-wrap gap-1">
                      {project.tech.map((tech, idx) => (
                        <span key={idx} className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button className="w-full apple-button text-sm">Lihat Detail</button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
