"use client"

import { useEffect, useState } from "react"
import { CheckCircle2 } from "lucide-react"
import { useLanguage } from "./language-provider"

export default function About() {
  const [isVisible, setIsVisible] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.2 },
    )
    const element = document.getElementById("about")
    if (element) observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-20 px-4 md:px-8 bg-card/20">
      <div className="max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 mb-12">
          <div className="w-2 h-2 bg-secondary rounded-full" />
          <span className="text-sm font-semibold text-secondary tracking-wider">{t.about.sectionTitle}</span>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={isVisible ? "animate-slide-in-left" : "opacity-0"}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">{t.about.role}</h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-4">
              {t.about.desc1}
            </p>
            <p className="text-muted-foreground text-base leading-relaxed mb-6">
              {t.about.desc2}
            </p>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-secondary font-medium">{t.about.education}</p>
                <p className="text-foreground">{t.about.masterTitle}</p>
                <ul className="text-muted-foreground text-sm space-y-2 ml-4 mt-2">
                  <li className="flex gap-2 items-start"><CheckCircle2 size={16} className="text-secondary mt-0.5 shrink-0" /> <span>{t.about.masterCourses}</span></li>
                  <li className="flex gap-2 items-start"><CheckCircle2 size={16} className="text-secondary mt-0.5 shrink-0" /> <span>{t.about.masterResearch}</span></li>
                </ul>
              </div>
              <div className="pt-2">
                <p className="text-foreground">{t.about.bachelorTitle}</p>
                <p className="text-muted-foreground text-sm">
                  {t.about.bachelorDesc}
                </p>
              </div>
              <div className="pt-4">
                <p className="text-sm text-secondary font-medium uppercase tracking-wider mb-2">{t.about.activitiesTitle}</p>
                <ul className="text-muted-foreground text-sm space-y-3 ml-4 mt-2">
                  <li className="flex gap-2 items-start"><CheckCircle2 size={16} className="text-secondary mt-0.5 shrink-0" /> <span><strong className="text-foreground font-medium">{t.about.volunteeringTitle}</strong> {t.about.volunteeringDesc}</span></li>
                  <li className="flex gap-2 items-start"><CheckCircle2 size={16} className="text-secondary mt-0.5 shrink-0" /> <span><strong className="text-foreground font-medium">{t.about.gameTitle}</strong> {t.about.gameDesc}</span></li>
                  <li className="flex gap-2 items-start"><CheckCircle2 size={16} className="text-secondary mt-0.5 shrink-0" /> <span><strong className="text-foreground font-medium">{t.about.interestsTitle}</strong> {t.about.interestsDesc}</span></li>
                </ul>
              </div>
            </div>
          </div>

          <div className={`space-y-4 ${isVisible ? "animate-slide-in-right" : "opacity-0"}`}>
            <div className="p-6 bg-background/50 border border-secondary/30 rounded-lg hover:border-secondary/80 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/10">
              <div className="text-3xl font-bold text-secondary mb-2">2+</div>
              <p className="text-muted-foreground">{t.about.yearsExperience}</p>
            </div>
            <div className="p-6 bg-background/50 border border-accent/30 rounded-lg hover:border-accent/80 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10">
              <div className="text-3xl font-bold text-accent mb-2">5+</div>
              <p className="text-muted-foreground">{t.about.projectsCompleted}</p>
            </div>
            <div className="p-6 bg-background/50 border border-primary/30 rounded-lg hover:border-primary/80 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
              <div className="text-3xl font-bold text-primary mb-2">{t.about.masterDegree}</div>
              <p className="text-muted-foreground">{t.about.degreeCandidate}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
