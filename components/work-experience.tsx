"use client"

import { useEffect, useState } from "react"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { useLanguage } from "./language-provider"

export default function WorkExperience() {
  const [isVisible, setIsVisible] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.2 },
    )
    const element = document.getElementById("experience")
    if (element) observer.observe(element)
    return () => observer.disconnect()
  }, [])

  const baseExperiences = [
    {
      skills: ["React", "NestJS", "Python", "OpenCV", "MySQL", "Docker", "TypeORM"],
      color: "from-stone-500/20 to-neutral-500/20",
    },
    {
      skills: ["React Native", "REST APIs", "State Management", "UI/UX"],
      color: "from-amber-500/20 to-orange-500/20",
    },
  ]

  const experiences = t.experience.jobs.map((job, idx) => ({ ...job, ...baseExperiences[idx] }))

  return (
    <section id="experience" className="py-20 px-4 md:px-8 bg-card/10">
      <div className="max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 mb-12">
          <div className="w-2 h-2 bg-secondary rounded-full" />
          <span className="text-sm font-semibold text-secondary tracking-wider">{t.experience.sectionTitle}</span>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold mb-16">{t.experience.title}</h2>

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className={`p-8 rounded-lg border border-border bg-gradient-to-br ${exp.color} hover:border-secondary/50 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/10 ${isVisible ? "animate-slide-in-left" : "opacity-0"
                }`}
              style={isVisible ? { animationDelay: `${idx * 0.2}s` } : {}}
            >
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-1">{exp.role}</h3>
                  <p className="text-secondary font-medium">{exp.company}</p>
                </div>
                <div className="md:text-center">
                  <p className="text-sm text-muted-foreground font-medium">{exp.period}</p>
                  <p className="text-lg font-bold text-secondary">{exp.duration}</p>
                </div>
                <div className="md:text-right">
                  <p className="text-xs font-bold text-secondary tracking-wider mb-2">{t.experience.techStack}</p>
                  <div className="flex flex-wrap gap-2 md:justify-end">
                    {exp.skills.slice(0, 3).map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 bg-background/50 text-foreground text-xs rounded-full border border-border"
                      >
                        {skill}
                      </span>
                    ))}
                    {exp.skills.length > 3 && (
                      <span className="px-2.5 py-1 bg-background/50 text-muted-foreground text-xs rounded-full border border-border">
                        +{exp.skills.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">{exp.description}</p>

              <div>
                <p className="text-xs font-bold text-secondary mb-4 tracking-wider">{t.experience.keyAchievements}</p>
                <div className="space-y-3">
                  {exp.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex gap-3">
                      <CheckCircle2 size={16} className="text-secondary mt-0.5 flex-shrink-0" />
                      <p className="text-muted-foreground text-sm leading-relaxed">{highlight}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline Summary */}
        <div className="mt-12 p-6 rounded-lg bg-background border border-border/50">
          <div className="flex items-center gap-4 flex-wrap">
            <div>
              <p className="text-sm text-muted-foreground">{t.experience.timeline.started}</p>
              <p className="text-lg font-bold text-secondary">{t.experience.timeline.startedDate}</p>
            </div>
            <div className="text-secondary/50 flex align-center"><ArrowRight size={20} /></div>
            <div>
              <p className="text-sm text-muted-foreground">{t.experience.timeline.total}</p>
              <p className="text-lg font-bold text-accent">{t.experience.timeline.experienceYears}</p>
            </div>
            <div className="text-secondary/50 flex align-center"><ArrowRight size={20} /></div>
            <div>
              <p className="text-sm text-muted-foreground">{t.experience.timeline.current}</p>
              <p className="text-lg font-bold text-primary">{t.experience.timeline.seniorTrack}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
