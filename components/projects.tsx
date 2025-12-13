"use client"

import { useState, useEffect } from "react"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Enterprise ERP Mobile Transformation",
    role: "Lead Engineer",
    category: "Legacy Modernization & Mobile Dev",
    description:
      "Led the strategic migration of a monolithic PHP ERP system into a modern mobile ecosystem using React Native, empowering 100+ remote staff with offline capabilities.",
    challenge:
      "Decoupling complex business logic from a legacy PHP codebase while ensuring data consistency without disrupting ongoing web operations.",
    solution: [
      "API Gateway: Refactored legacy PHP views into secure, documented RESTful APIs",
      "Offline-First Architecture: Engineered a robust React Native app using Redux Persist, ensuring seamless operation in low-connectivity environments",
      "Performance: Reduced data access latency by 40% for remote staff through optimized endpoints",
      "Sync Logic: Implemented background data synchronization algorithms to resolve conflicts automatically when connectivity is restored",
    ],
    tech: ["React Native", "Node.js", "MySQL", "Redux Persist", "REST API", "Docker", "PHP (Legacy)"],
    color: "from-orange-500/20 to-red-500/20",
    accentColor: "text-orange-400",
    githubUrl: "",
    demoUrl: "",
  },
  {
    id: 2,
    title: "Face Recognition Attendance System",
    role: "AI Engineer",
    category: "Computer Vision & System Integration",
    description:
      "Engineered a high-performance attendance system using Python & InsightFace. Optimized for edge deployment to achieve sub-second latency on standard CPUs.",
    challenge:
      "Processing high-resolution RTSP video streams in real-time on non-GPU hardware while preventing spoofing attacks.",
    solution: [
      "Multi-Process Architecture: Utilized Python Multiprocessing to decouple heavy AI inference tasks from video streaming threads, preventing bottlenecks",
      "Optimization: Achieved <0.5s latency using InsightFace (ArcFace) combined with motion detection triggers",
      "Security: Implemented Liveness Detection algorithms to nullify presentation attacks (anti-spoofing)",
      "Integration: Synced attendance logs in real-time with the legacy MySQL ERP system",
    ],
    tech: ["Python", "InsightFace", "OpenCV", "Flask", "MySQL", "Docker", "RTSP"],
    color: "from-blue-500/20 to-cyan-500/20",
    accentColor: "text-cyan-400",
    githubUrl: "",
    demoUrl: "",
  },
  {
    id: 3,
    title: "Pet Shop Management System",
    role: "Full Stack Engineer",
    category: "Enterprise SaaS",
    description:
      "Developed a comprehensive retail management ecosystem featuring Inventory, POS, and real-time analytics.",
    challenge:
      "Synchronizing real-time inventory updates across multiple physical locations and ensuring instant reporting accuracy.",
    solution: [
      "Architecture: Built a scalable, type-safe backend with NestJS following SOLID principles and Enterprise Design Patterns",
      "Frontend: Developed a responsive React dashboard with Material-UI, integrating real-time barcode scanning",
      "Data Layer: Utilized MySQL with TypeORM for complex relationship management and reliable persistence",
      "DevOps: Fully containerized the stack with Docker for consistent CI/CD and deployment",
    ],
    tech: ["React", "NestJS", "MySQL", "Material-UI", "TypeORM", "Docker"],
    color: "from-purple-500/20 to-pink-500/20",
    accentColor: "text-pink-400",
    githubUrl: "",
    demoUrl: "",
  },
  {
    id: 4,
    title: "SmartMath AI Tutor",
    role: "AI Engineer",
    category: "Generative AI & EdTech",
    description:
      "Created an intelligent tutoring platform leveraging Generative AI to provide personalized math education with contextual feedback.",
    challenge:
      "Minimizing chat latency for a seamless user experience while ensuring educational accuracy in model responses.",
    solution: [
      "High-Performance Runtime: Integrated OpenAI API with Bun runtime, significantly reducing server overhead and response latency",
      "Prompt Engineering: Designed custom \"Chain-of-Thought\" prompts to guide the AI in error analysis and step-by-step teaching",
      "Concurrency: Built a scalable backend capable of handling concurrent user sessions with efficient request queuing",
      "UX: Implemented Response Streaming to provide immediate visual feedback to students",
    ],
    tech: ["Bun", "OpenAI API", "TypeScript", "MySQL", "React"],
    color: "from-green-500/20 to-emerald-500/20",
    accentColor: "text-emerald-400",
    githubUrl: "",
    demoUrl: "https://smartmath.edu.vn",
  },
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(projects[0])
  const [isVisible, setIsVisible] = useState(false)

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
          <span className="text-sm font-semibold text-secondary tracking-wider">PORTFOLIO</span>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-balance">Featured Projects</h2>

        {/* Project Tabs */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 mb-12">
          {projects.map((project, idx) => (
            <button
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className={`p-4 rounded-lg border transition-all text-left transform hover:scale-105 duration-300 ${selectedProject.id === project.id
                ? "bg-card border-secondary shadow-lg shadow-secondary/20"
                : "bg-card/50 border-border hover:border-secondary/50"
                }`}
              style={isVisible ? { animation: `fadeInUp 0.6s ease-out ${idx * 0.1}s backwards` } : {}}
            >
              <div
                className={`text-xs font-bold mb-2 ${selectedProject.id === project.id ? "text-secondary" : "text-muted-foreground"}`}
              >
                {project.role}
              </div>
              <h3 className="font-bold text-sm text-foreground line-clamp-2">{project.title}</h3>
            </button>
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
                  <span className="text-xs font-bold text-secondary tracking-wider">{selectedProject.role}</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2">{selectedProject.title}</h3>
                <p className="text-secondary text-sm font-medium">{selectedProject.category}</p>
              </div>

              <p className="text-muted-foreground leading-relaxed">{selectedProject.description}</p>

              <div>
                <h4 className="text-sm font-bold text-secondary mb-3 tracking-wider">TECHNICAL CHALLENGES SOLVED</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{selectedProject.challenge}</p>
              </div>

              <div>
                <h4 className="text-sm font-bold text-secondary mb-3 tracking-wider">KEY TECHNICAL HIGHLIGHTS</h4>
                <div className="space-y-2">
                  {selectedProject.solution.map((point, idx) => (
                    <div key={idx} className="flex gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
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
                    Learn More
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
                    Code
                  </a>
                )}
              </div>
            </div>

            <div className="md:col-span-1 space-y-6">
              <div>
                <p className="text-xs font-bold text-secondary mb-4 tracking-wider">TECHNOLOGIES</p>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech, idx) => (
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
                <p className="mb-2 font-medium text-foreground">Featured Work:</p>
                <p>Click on any project to explore the technical challenges solved and key achievements</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
