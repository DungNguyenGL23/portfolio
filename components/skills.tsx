"use client"

import { useEffect, useState } from "react"
import { useLanguage } from "./language-provider"

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 },
    )
    const element = document.getElementById("skills")
    if (element) observer.observe(element)
    return () => observer.disconnect()
  }, [])

  const baseCategories = [
    {
      skills: ["TypeScript", "JavaScript", "Python", "C#", "Bash/Shell"],
      color: "from-stone-500",
    },
    {
      skills: ["React.js", "React Native", "SCSS", "HTML/CSS", "Material-UI", "Redux"],
      color: "from-emerald-500",
    },
    {
      skills: ["Node.js", "NestJS", "Python", "FastAPI", "Flask", "ASP.NET"],
      color: "from-teal-500",
    },
    {
      skills: ["MySQL", "SQL Server", "MongoDB", "TypeORM"],
      color: "from-amber-600",
    },
    {
      skills: ["PyTorch", "TensorFlow", "Keras", "CNN", "Hugging Face", "LangChain", "OpenCV", "YOLO", "scikit-learn", "Pandas", "Recommendation Systems"],
      color: "from-slate-500",
    },
    {
      skills: ["Docker", "GitHub Actions (CI/CD)", "Nginx", "Linux/Ubuntu VPS", "Cloudflare", "Git/GitHub"],
      color: "from-amber-500",
    },
  ]

  const skillCategories = t.skills.categories.map((cat, idx) => ({ ...cat, ...baseCategories[idx] }))

  return (
    <section id="skills" className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="inline-flex items-center gap-2 mb-12">
          <div className="w-2 h-2 bg-secondary rounded-full" />
          <span className="text-sm font-semibold text-secondary tracking-wider">{t.skills.sectionTitle}</span>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold mb-16">{t.skills.title}</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="p-6 rounded-lg border border-border bg-background/30 hover:border-secondary/50 hover:bg-background/50 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/10 group"
              style={isVisible ? { animation: `fadeInUp 0.6s ease-out ${idx * 0.08}s backwards` } : {}}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`w-1 h-6 bg-gradient-to-b ${category.color} to-transparent rounded-full group-hover:h-8 transition-all duration-300`}
                />
                <h3 className="text-lg font-bold text-secondary">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIdx) => (
                  <span
                    key={skillIdx}
                    className="px-3 py-1.5 bg-card text-foreground text-sm rounded-full border border-border hover:border-secondary/50 hover:bg-card/80 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
