"use client"

import { useEffect, useState } from "react"

export default function WorkExperience() {
  const [isVisible, setIsVisible] = useState(false)

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

  const experiences = [
    {
      role: "AI Engineer & Full Stack Developer",
      company: "SOF",
      period: "May 2024 – Present",
      duration: "1.5+ Years",
      description:
        "Lead digital transformation initiatives and deploy AI solutions for enterprise clients. Architect and implement scalable systems for mission-critical applications.",
      highlights: [
        "Lead Mobile ERP Transformation - Migrated legacy ERP systems to modern mobile architectures",
        "Face ID Integration - Implemented biometric authentication systems for attendance tracking",
        "Pet Shop Management System - Built comprehensive fullstack solution for inventory and sales management",
        "Enterprise AI Solutions - Deployed high-performance AI systems for digital innovation",
      ],
      skills: ["React", "NestJS", "Python", "OpenCV", "PostgreSQL", "Docker", "Nginx"],
      color: "from-cyan-500/20 to-blue-500/20",
    },
    {
      role: "Mobile Developer Intern",
      company: "DIEN TOAN GROUP",
      period: "Feb 2024 – Apr 2024",
      duration: "3 Months",
      description:
        "Developed mobile applications and learned full-stack development practices in a professional environment.",
      highlights: [
        "React Native App Development - Built cross-platform mobile applications",
        "UI/UX Implementation - Designed and implemented user interfaces following design specs",
        "API Integration - Connected mobile apps to backend services",
        "Team Collaboration - Worked closely with senior developers and learned industry best practices",
      ],
      skills: ["React Native", "JavaScript", "REST APIs", "UI/UX", "Git"],
      color: "from-purple-500/20 to-pink-500/20",
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 md:px-8 bg-card/10">
      <div className="max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 mb-12">
          <div className="w-2 h-2 bg-secondary rounded-full" />
          <span className="text-sm font-semibold text-secondary tracking-wider">PROFESSIONAL JOURNEY</span>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold mb-16">Work Experience</h2>

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className={`p-8 rounded-lg border border-border bg-gradient-to-br ${exp.color} hover:border-secondary/50 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/10 ${
                isVisible ? "animate-slide-in-left" : "opacity-0"
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
                  <p className="text-xs font-bold text-secondary tracking-wider mb-2">TECH STACK</p>
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
                <p className="text-xs font-bold text-secondary mb-4 tracking-wider">KEY ACHIEVEMENTS</p>
                <div className="space-y-3">
                  {exp.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
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
              <p className="text-sm text-muted-foreground">Started Career</p>
              <p className="text-lg font-bold text-secondary">February 2024</p>
            </div>
            <div className="text-2xl text-secondary/30">→</div>
            <div>
              <p className="text-sm text-muted-foreground">Total Experience</p>
              <p className="text-lg font-bold text-accent">Nearly 2 Years</p>
            </div>
            <div className="text-2xl text-secondary/30">→</div>
            <div>
              <p className="text-sm text-muted-foreground">Current Track</p>
              <p className="text-lg font-bold text-primary">Senior-track Engineer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
