"use client"

import { motion } from "framer-motion"
import { CodeBracketIcon, CpuChipIcon, AcademicCapIcon, GlobeAltIcon } from "@heroicons/react/24/outline"

const floatingIcons = [
  { Icon: CodeBracketIcon, delay: 0, x: "10vw", y: "20vh" },
  { Icon: CpuChipIcon, delay: 1, x: "80vw", y: "30vh" },
  { Icon: AcademicCapIcon, delay: 2, x: "15vw", y: "70vh" },
  { Icon: GlobeAltIcon, delay: 3, x: "85vw", y: "80vh" },
]

export default function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {floatingIcons.map(({ Icon, delay, x, y }, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{ left: x, top: y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.2, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 8,
            delay: delay,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <Icon className="w-8 h-8 text-primary/20" />
        </motion.div>
      ))}
    </div>
  )
}
