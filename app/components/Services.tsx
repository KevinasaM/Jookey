"use client"

import { motion, useInView } from "framer-motion"
import { AcademicCapIcon, CodeBracketIcon, CpuChipIcon, GlobeAltIcon } from "@heroicons/react/24/outline"
import { useRef } from "react"

const services = [
  {
    icon: AcademicCapIcon,
    title: "Joki Tugas Kuliah",
    description: "Bantuan pengerjaan tugas kuliah, skripsi, dan project akademik dengan kualitas terjamin.",
    features: ["Tugas Mata Kuliah","Tugas Programming", "Skripsi & Thesis", "Tugas Penulisan", "Presentasi"],
    price: "Mulai dari Rp 50.000",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: CodeBracketIcon,
    title: "Joki Coding",
    description: "Layanan pengembangan aplikasi dan sistem dengan berbagai bahasa pemrograman.",
    features: ["Web Development", "Mobile Apps", "Desktop Apps", "API Development", "DevOps"],
    price: "Mulai dari Rp 100.000",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: CpuChipIcon,
    title: "IoT Solutions",
    description: "Pengembangan sistem Internet of Things untuk kebutuhan smart home dan industri.",
    features: ["Smart Home", "Industrial IoT", "Sensor Integration", "Data Analytics", "Robotic"],
    price: "Mulai dari Rp 500.000",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: GlobeAltIcon,
    title: "Website Development",
    description: "Pembuatan website profesional untuk bisnis, portfolio, dan e-commerce.",
    features: ["Landing Page", "E-commerce", "Company Profile", "Custom Web App", "Layanan Hosting"],
    price: "Mulai dari Rp 300.000",
    color: "from-orange-500 to-red-500",
  },
]

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

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

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      rotateX: -15,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        // ease: easeOut,
      },
    },
  }

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20 relative overflow-hidden">
      {/* Animated background shapes */}
      <motion.div
        className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"
        animate={{
          x: [0, -100, 0],
          y: [0, 50, 0],
        }}
        transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />

      <div className="container mx-auto relative z-10" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-4xl font-bold text-foreground mb-4"
            animate={
              isInView
                ? {
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }
                : {}
            }
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            style={{
              backgroundSize: "200% 200%",
              backgroundImage: "linear-gradient(45deg, #3b82f6, #8b5cf6, #3b82f6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Layanan Kami
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Solusi lengkap untuk kebutuhan teknologi dan akademik Anda dengan kualitas profesional
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="group relative"
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
              }}
            >
              {/* Glowing background effect */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-r ${service.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                initial={{ scale: 0.8 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />

              <motion.div
                className="relative bg-background p-6 rounded-2xl shadow-lg border border-border/50 h-full"
                whileHover={{
                  borderColor: "rgba(59, 130, 246, 0.3)",
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="mb-4"
                  whileHover={{
                    scale: 1.1,
                    rotate: [0, -10, 10, 0],
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <service.icon className="w-12 h-12 text-primary" />
                </motion.div>

                <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{service.description}</p>

                <div className="mb-4">
                  <h4 className="font-semibold text-foreground mb-2">Fitur:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {service.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        className="flex items-center"
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                        transition={{ delay: 0.5 + idx * 0.1 }}
                      >
                        <motion.span
                          className="w-1.5 h-1.5 bg-primary rounded-full mr-2"
                          animate={{ scale: [1, 1.3, 1] }}
                          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: idx * 0.2 }}
                        />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-border pt-4">
                  <motion.p
                    className="font-semibold text-primary mb-3"
                    animate={{ opacity: [1, 0.7, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.5 }}
                  >
                    {service.price}
                  </motion.p>
                  <motion.a
                  href="https://wa.me/6285600601619"
                    className="w-full apple-button text-sm"
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 8px 20px rgba(59, 130, 246, 0.3)",
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                   Pesan Sekarang
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
