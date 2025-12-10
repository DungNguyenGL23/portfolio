"use client"

import { useEffect, useState } from "react"

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false)

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

  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "TypeScript", "JavaScript", "Tailwind CSS", "Material-UI", "HTML/CSS"],
      color: "from-blue-500",
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "NestJS", "Python", "C# (.NET)", "Bun", "Flask", "REST APIs"],
      color: "from-cyan-500",
    },
    {
      title: "Databases",
      skills: ["PostgreSQL", "MySQL", "SQL Server", "SQLite", "MongoDB", "Redis", "Firebase"],
      color: "from-purple-500",
    },
    {
      title: "DevOps & Production Infrastructure",
      skills: [
        "Ubuntu Linux Administration",
        "Docker",
        "Nginx",
        "VPS Management",
        "Cloudflare (DNS, CDN, WAF)",
        "SSL/TLS Security",
        "Bash/Shell Scripting",
        "Git/GitHub",
      ],
      color: "from-pink-500",
    },
    {
      title: "AI & Libraries",
      skills: ["OpenAI API", "OpenCV", "PyTorch", "NumPy", "Flask", "Prompt Engineering"],
      color: "from-green-500",
    },
    {
      title: "Foundation & Methodologies",
      skills: ["OOP", "WinForms", "Software Workflow Management", "Design Patterns"],
      color: "from-amber-500",
    },
    {
      title: "Key Competencies",
      skills: ["Workflow Management", "System Architecture", "Legacy Refactoring", "Team Leadership"],
      color: "from-orange-500",
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="inline-flex items-center gap-2 mb-12">
          <div className="w-2 h-2 bg-secondary rounded-full" />
          <span className="text-sm font-semibold text-secondary tracking-wider">MY SKILLS</span>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold mb-16">Technologies & Tools</h2>

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
