"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import {
  AcademicCapIcon,
  CodeBracketIcon,
  CpuChipIcon,
  GlobeAltIcon,
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline"

const services = [
  { name: "Joki Tugas Kuliah", href: "#services", icon: AcademicCapIcon },
  { name: "Joki Coding", href: "#services", icon: CodeBracketIcon },
  { name: "IoT Solutions", href: "#services", icon: CpuChipIcon },
  { name: "Website Development", href: "#services", icon: GlobeAltIcon },
]

const quickLinks = [
  { name: "Tentang Kami", href: "#about" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Tim Kami", href: "#team" },
  { name: "Kontak", href: "#contact" },
]

const legalLinks = [
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" },
  { name: "Refund Policy", href: "/refund" },
]

const contactInfo = [
  { icon: EnvelopeIcon, text: "jookeytugaskuliah@gmail.com", href: "mailto:jookeytugaskuliah@gmail.com" },
  { icon: PhoneIcon, text: "+6285600601619", href: "tel:+6285600601619" },
  { icon: MapPinIcon, text: "Jakarta, Indonesia", href: "#" },
]

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        // ease: "easeOut",
      },
    },
  }

  return (
    <footer className="bg-background border-t border-border relative overflow-hidden">
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"
        animate={{
          background: [
            "linear-gradient(45deg, rgba(59, 130, 246, 0.05), transparent, rgba(168, 85, 247, 0.05))",
            "linear-gradient(135deg, rgba(168, 85, 247, 0.05), transparent, rgba(59, 130, 246, 0.05))",
            "linear-gradient(225deg, rgba(59, 130, 246, 0.05), transparent, rgba(168, 85, 247, 0.05))",
          ],
        }}
        transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 relative z-10">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <motion.div className="flex items-center mb-4" whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
              <motion.h3
                className="text-2xl font-bold text-gradient"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                style={{
                  backgroundSize: "200% 200%",
                  backgroundImage: "linear-gradient(45deg, #3b82f6, #8b5cf6, #3b82f6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                JooKey
              </motion.h3>
            </motion.div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Solusi digital terpercaya untuk kebutuhan akademik dan teknologi Anda. Kami berkomitmen memberikan layanan
              berkualitas tinggi dengan harga terjangkau.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              {contactInfo.map((contact, index) => (
                <motion.a
                  key={contact.text}
                  href={contact.href}
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                  whileHover={{ x: 5 }}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                    <contact.icon className="h-4 w-4 group-hover:text-primary" />
                  </motion.div>
                  <span className="text-sm">{contact.text}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Services Section */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold text-foreground mb-6">Layanan Kami</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <motion.li
                  key={service.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={service.href}
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                  >
                    <motion.div whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.3 }}>
                      <service.icon className="h-4 w-4 group-hover:text-primary" />
                    </motion.div>
                    <span className="text-sm group-hover:translate-x-1 transition-transform">{service.name}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links Section */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold text-foreground mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Legal Section */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold text-foreground mb-6">Legal</h4>
            <ul className="space-y-3">
              {legalLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>

            {/* Social Media */}
            <div className="mt-6">
              <h5 className="text-sm font-semibold text-foreground mb-3">Follow Us</h5>
              <div className="flex gap-3">
                {["WhatsApp", "Instagram", "LinkedIn"].map((social, index) => (
                  <motion.a
                    key={social}
                    href="#"
                    className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <span className="text-xs font-bold">
                      {social === "WhatsApp" ? "W" : social === "Instagram" ? "I" : "L"}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          className="border-t border-border pt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.p
              className="text-sm text-muted-foreground"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            >
              JooKey © {new Date().getFullYear()}. All rights reserved.
            </motion.p>

            <motion.div className="flex items-center gap-2 text-sm text-muted-foreground" whileHover={{ scale: 1.05 }}>
              <span>Made with</span>
              <motion.span
                className="text-red-500"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
              >
                Kevin
              </motion.span>
              <span>in Indonesia</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Floating CTA Button */}
        <motion.div
          className="fixed bottom-6 right-6 z-50"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
        >
          <motion.a
            href="https://wa.me/6285600601619"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center gap-2"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            animate={{
              boxShadow: [
                "0 0 0 0 rgba(34, 197, 94, 0.7)",
                "0 0 0 10px rgba(34, 197, 94, 0)",
                "0 0 0 0 rgba(34, 197, 94, 0)",
              ],
            }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            <span className="text-xl">💬</span>
            <span className="hidden sm:inline text-sm font-medium">Chat WhatsApp</span>
          </motion.a>
        </motion.div>
      </div>
    </footer>
  )
}
