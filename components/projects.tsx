"use client"

import { useState, useEffect } from "react"
import { ExternalLink, Github, CheckCircle2 } from "lucide-react"
import { useLanguage } from "./language-provider"

const baseProjects = [
  {
    id: 1,
    tech: ["TypeScript", "Web App Architecture", "API Integration", "Release Management"],
    color: "from-stone-500/20 to-neutral-500/20",
    accentColor: "text-stone-400",
    githubUrl: "https://github.com/COVASOL/Clothing",
    demoUrl: "https://tafas.vn",
  },
  {
    id: 2,
    tech: ["TypeScript", "SCSS", "HTML/CSS", "JavaScript", "Python"],
    color: "from-emerald-500/20 to-teal-500/20",
    accentColor: "text-emerald-400",
    githubUrl: "https://github.com/COVASOL/smartmath",
    demoUrl: "https://smartmath.edu.vn",
  },
  {
    id: 3,
    tech: ["React Native", "Node.js", "MySQL", "Redux Persist", "REST API", "Docker", "PHP (Legacy)"],
    color: "from-amber-500/20 to-orange-500/20",
    accentColor: "text-amber-400",
    githubUrl: "",
    demoUrl: "",
  },
  {
    id: 4,
    tech: ["Python", "InsightFace", "OpenCV", "Flask", "MySQL", "Docker", "RTSP"],
    color: "from-slate-500/20 to-zinc-500/20",
    accentColor: "text-slate-400",
    githubUrl: "",
    demoUrl: "",
  },
  {
    id: 5,
    tech: ["React", "NestJS", "MySQL", "Material-UI", "TypeORM", "Docker"],
    color: "from-teal-500/20 to-cyan-600/20",
    accentColor: "text-teal-400",
    githubUrl: "",
    demoUrl: "",
  }
]

export default function Projects() {
  const { t } = useLanguage()
  const projects = t.projects.items.map((item, idx) => ({ ...item, ...baseProjects[idx] }))

  const [selectedProject, setSelectedProject] = useState(projects[0])
  const [isVisible, setIsVisible] = useState(false)

  // Update selected project when language changes to maintain data synchronization
  useEffect(() => {
    const freshProject = projects.find(p => p.id === selectedProject.id) || projects[0];
    setSelectedProject(freshProject)
  }, [t])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 },
    )
    const element = document.getElementById("projects")
    if (element) observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="inline-flex items-center gap-2 mb-12">
          <div className="w-2 h-2 bg-secondary rounded-full" />
          <span className="text-sm font-semibold text-secondary tracking-wider">{t.projects.sectionTitle}</span>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-balance">{t.projects.title}</h2>

        {/* Project Tabs */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 mb-12">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              role="button"
              tabIndex={0}
              onClick={() => setSelectedProject(project)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setSelectedProject(project);
                }
              }}
              className={`p-4 rounded-lg border transition-all text-left transform hover:scale-105 duration-300 cursor-pointer ${selectedProject.id === project.id
                ? "bg-card border-secondary shadow-lg shadow-secondary/20"
                : "bg-card/50 border-border hover:border-secondary/50"
                }`}
              style={isVisible ? { animation: `fadeInUp 0.6s ease-out ${idx * 0.1}s backwards` } : {}}
            >
              <div
                className={`text-xs font-bold mb-2 ${selectedProject.id === project.id ? "text-secondary" : "text-muted-foreground"}`}
              >
                {project.role.includes("COVASOL TEAM") ? (
                  <>
                    {project.role.split("COVASOL TEAM")[0]}
                    <a
                      href="https://covasol.com.vn"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="hover:underline transition-colors"
                    >
                      COVASOL TEAM
                    </a>
                    {project.role.split("COVASOL TEAM")[1]}
                  </>
                ) : (
                  project.role
                )}
              </div>
              <h3 className="font-bold text-sm text-foreground line-clamp-2">{project.title}</h3>
            </div>
          ))}
        </div>

        {/* Project Detail */}
        <div
          className={`p-8 md:p-12 rounded-xl border border-border bg-gradient-to-br ${selectedProject.color} transition-all duration-500 ${isVisible ? "animate-fade-in" : "opacity-0"}`}
        >
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            <div className="md:col-span-2 space-y-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-1 h-6 bg-secondary rounded-full" />
                  <span className="text-xs font-bold text-secondary tracking-wider">
                    {selectedProject.role.includes("COVASOL TEAM") ? (
                      <>
                        {selectedProject.role.split("COVASOL TEAM")[0]}
                        <a
                          href="https://covasol.com.vn"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline transition-colors"
                        >
                          COVASOL TEAM
                        </a>
                        {selectedProject.role.split("COVASOL TEAM")[1]}
                      </>
                    ) : (
                      selectedProject.role
                    )}
                  </span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2">{selectedProject.title}</h3>
                <p className="text-secondary text-sm font-medium">{selectedProject.category}</p>
              </div>

              <p className="text-muted-foreground leading-relaxed">{selectedProject.description}</p>

              <div>
                <h4 className="text-sm font-bold text-secondary mb-3 tracking-wider">{t.projects.techChallenges}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{selectedProject.challenge}</p>
              </div>

              <div>
                <h4 className="text-sm font-bold text-secondary mb-3 tracking-wider">{t.projects.techHighlights}</h4>
                <div className="space-y-2">
                  {selectedProject.solution.map((point: string, idx: number) => (
                    <div key={idx} className="flex gap-3">
                      <CheckCircle2 size={16} className="text-secondary mt-0.5 flex-shrink-0" />
                      <p className="text-muted-foreground text-sm leading-relaxed">{point}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                {selectedProject.demoUrl && (
                  <a
                    href={selectedProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 font-medium inline-flex items-center gap-2 hover:shadow-lg hover:shadow-primary/30"
                  >
                    <ExternalLink size={16} />
                    {t.projects.learnMore}
                  </a>
                )}
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 border border-secondary text-foreground rounded-lg hover:bg-card/50 hover:border-secondary/80 transition-all duration-300 font-medium inline-flex items-center gap-2"
                  >
                    <Github size={16} />
                    {t.projects.code}
                  </a>
                )}
              </div>
            </div>

            <div className="md:col-span-1 space-y-6">
              <div>
                <p className="text-xs font-bold text-secondary mb-4 tracking-wider">{t.projects.technologies}</p>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech: string, idx: number) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 bg-background/50 text-foreground text-xs rounded-full border border-border hover:border-secondary/50 transition-colors cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="text-xs text-muted-foreground pt-6 border-t border-border/50">
                <p className="mb-2 font-medium text-foreground">{t.projects.featuredWork}</p>
                <p>{t.projects.clickToExplore}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
