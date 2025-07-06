"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons"

const teamMembers = [
  {
    name: "Bayu Pratama",
    role: "Lead Developer & Founder",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Mahasiswa S1 Sistem Informasi dengan pengalaman dalam pengembangan web.",
    skills: ["Teraform", "Laravel", "PHP", "Python", "Docker"],
    social: {
      linkedin: "#",
      Instagram: "https://www.instagram.com/beyees_/",
    },
  },
  {
    name: "Kevin Asa",
    role: "Developer & Founder",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Mahasiswa S1 Sistem Informasi dengan pengalaman dalam pengembangan web.",
    skills: ["JS Framework", "Tailwind CSS", "CodeIgniter", "Flutter"],
    social: {
      linkedin: "https://www.linkedin.com/in/kevin-asa-mayra-t-a27104312/",
      Instagram: "https://www.instagram.com/kepin.json/",
    },
  },
  {
    name: "Sigit Dwi",
    role: "IoT Specialist & Founder",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Mahasiswa S1 Sistem Informasi dengan pengalaman dalam pengembangan web.",
    skills: ["Flutter", "Laravel", "PHP", "IoT"],
    social: {
      linkedin: "#",
      Instagram: "https://www.instagram.com/sigutthe/",
    },
  },
  
]

export default function Team() {
  return (
    <section id="team" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">Tim Kami</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Bertemu dengan tim profesional yang siap membantu mewujudkan project Anda
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              className="bg-background border border-border/50 rounded-2xl p-6 shadow-lg hover-lift"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <div className="text-center mb-4">
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-foreground">{member.name}</h3>
                <p className="text-primary font-medium">{member.role}</p>
              </div>

              <p className="text-muted-foreground text-sm mb-4 text-center">{member.bio}</p>

              <div className="mb-4">
                <h4 className="font-semibold text-foreground mb-2 text-center">Keahlian:</h4>
                <div className="flex flex-wrap gap-2 justify-center">
                  {member.skills.map((skill, idx) => (
                    <span key={idx} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex justify-center gap-4 pt-4 border-t border-border">
                <a href={member.social.linkedin} className="text-muted-foreground hover:text-primary transition-colors">
                  <LinkedInLogoIcon className="w-5 h-5" />
                </a>
                <a href={member.social.Instagram} className="text-muted-foreground hover:text-primary transition-colors">
                  <InstagramLogoIcon className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
