"use client";

import { motion } from "framer-motion";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import { GridPattern } from "../components/grid-pattern";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Nav } from "../components/nav";
import { SEO } from "../components/seo";

export default function ContatoPage() {
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <SEO
        title="Portfólio de Eduardo Souza"
        description="Bem-vindo ao meu portfólio! Descubra meus projetos e habilidades em desenvolvimento web."
        url="https://portfolio2-mauve-six.vercel.app/portfolio"
      />
      <div className="min-h-screen bg-black text-white flex flex-col grid-pattern">
        <GridPattern />

        <Nav isActiveName={true} />

        <main className="flex-grow flex items-center justify-center px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <Card className="w-full max-w-md bg-white/10 border-white/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-center">
                  Entre em Contato
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <motion.div
                  variants={itemVariants}
                  className="flex items-center space-x-3"
                >
                  <Mail className="w-5 h-5 text-blue-400" />
                  <a
                    href="mailto:eduardo@example.com"
                    className="hover:underline"
                  >
                    eduardosouzadev.10@gmail.com
                  </a>
                </motion.div>
                {/* <motion.div
                variants={itemVariants}
                className="flex items-center space-x-3"
              >
                <Phone className="w-5 h-5 text-green-400" />
                <a href="tel:+5511999999999" className="hover:underline">
                  +55 (11) 99999-9999
                </a>
              </motion.div> */}
                <motion.div
                  variants={itemVariants}
                  className="flex items-center space-x-3"
                >
                  <MapPin className="w-5 h-5 text-red-400" />
                  <span>BA - Brasil</span>
                </motion.div>
                <motion.div
                  variants={itemVariants}
                  className="flex items-center space-x-3"
                >
                  <Linkedin className="w-5 h-5 text-blue-500" />
                  <a
                    href="https://www.linkedin.com/in/eduardo-souza-dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    LinkedIn
                  </a>
                </motion.div>
                <motion.div
                  variants={itemVariants}
                  className="flex items-center space-x-3"
                >
                  <Github className="w-5 h-5 text-gray-400" />
                  <a
                    href="https://github.com/DevEduardoSouza"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    GitHub
                  </a>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </main>
      </div>
    </>
  );
}
