"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import Image from "next/image"

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-7xl mx-auto w-full">
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
            <div className="relative flex-shrink-0">
              <div className="relative w-32 h-32 sm:w-40 sm:h-40">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl"></div>
                <div className="relative rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
                  <Image
                    src="/12309486.jpg"
                    alt="Profile"
                    width={180}
                    height={180}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2 text-center sm:text-left">
              <p className="text-sm font-medium text-primary uppercase tracking-wider">Welcome to my portfolio</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground text-balance">
                Hi, I'm <span className="text-primary">Achmad Whildan</span>
              </h1>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-muted-foreground">
                Frontend Developer
              </h2>
            </div>
          </div>

          <div className="space-y-6 text-center sm:text-left max-w-3xl mx-auto sm:mx-0">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Passionate about crafting beautiful, responsive, and user-friendly web experiences using modern
              technologies and best practices.
            </p>
            <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
              <Button size="lg" onClick={() => scrollToSection("projects")}>
                View My Work
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection("contact")}>
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
        {/* </CHANGE> */}

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection("about")}
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Scroll to about section"
          >
            <ArrowDown className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  )
}
