"use client"

import { ArrowDown } from "lucide-react"
import { useLanguage } from "./language-provider"

export default function Hero() {
  const { t } = useLanguage();

  const scrollToProjects = () => {
    const element = document.getElementById("projects")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4 md:px-8">
      <div className="max-w-4xl text-center space-y-8">
        <div className="space-y-4 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-balance">
            <span className="text-foreground">{t.hero.title}</span>
          </h1>
          <p className="text-xl md:text-2xl text-secondary font-light">{t.hero.role}</p>
          <p className="text-lg text-accent font-medium">{t.hero.subtitle}</p>
        </div>

        <p
          className="text-base text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          {t.hero.description}
        </p>

        <div className="flex gap-4 justify-center flex-wrap animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <button
            onClick={scrollToProjects}
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 font-medium hover:shadow-lg hover:shadow-primary/50"
          >
            {t.hero.viewProjects}
          </button>
          <a
            href="#contact"
            className="px-8 py-3 border border-secondary text-foreground rounded-lg hover:bg-card hover:border-secondary/80 transition-all duration-300 font-medium"
          >
            {t.hero.contactMe}
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
