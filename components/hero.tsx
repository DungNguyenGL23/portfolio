"use client"

import { ArrowDown } from "lucide-react"

export default function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById("projects")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4 md:px-8">
      <div className="max-w-4xl text-center space-y-8">
        <div className="space-y-4 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-balance">
            <span className="text-foreground">Nguyễn Thế Dũng</span>
          </h1>
          <p className="text-xl md:text-2xl text-secondary font-light">AI Engineer & Full Stack Developer</p>
          <p className="text-lg text-accent font-medium">Building intelligent systems and scalable web solutions</p>
        </div>

        <p
          className="text-base text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          Software engineer with 1.5 years of experience specializing in Digital Transformation and AI Integration. I
          build high-performance systems that migrate legacy architectures to modern solutions, delivering
          enterprise-grade AI applications for digital innovation.
        </p>

        <div className="flex gap-4 justify-center flex-wrap animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <button
            onClick={scrollToProjects}
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 font-medium hover:shadow-lg hover:shadow-primary/50"
          >
            View My Projects
          </button>
          <a
            href="#contact"
            className="px-8 py-3 border border-secondary text-foreground rounded-lg hover:bg-card hover:border-secondary/80 transition-all duration-300 font-medium"
          >
            Contact Me
          </a>
        </div>

        <button
          onClick={scrollToProjects}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-secondary hover:text-accent transition-colors"
        >
          <ArrowDown size={24} />
        </button>
      </div>
    </section>
  )
}
