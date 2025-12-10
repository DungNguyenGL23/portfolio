"use client"

import { useEffect, useState } from "react"

export default function About() {
  const [isVisible, setIsVisible] = useState(false)

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
          <span className="text-sm font-semibold text-secondary tracking-wider">ABOUT ME</span>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={isVisible ? "animate-slide-in-left" : "opacity-0"}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">AI Engineer & Full Stack Developer</h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-4">
              Software Engineer with 2 years of experience specializing in Legacy System Modernization (PHP to Mobile)
              and Real-world AI Integration (FaceID, GenAI). Master's Degree Candidate in Computer Science.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed mb-6">
              I specialize in building intelligent systems with real-time processing, API integration, and scalable
              cloud architectures. My expertise spans AI/ML implementation, full-stack development with modern
              frameworks, and DevOps practices for enterprise-grade deployments.
            </p>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-secondary font-medium">EDUCATION</p>
                <p className="text-foreground">Master of Science in Computer Science (2024 - Present)</p>
                <ul className="text-muted-foreground text-sm space-y-1 ml-4 mt-1">
                  <li>• Specialization: Deep Learning (DL) & Machine Learning (ML)</li>
                  <li>• Advanced Coursework: Software Process Management & Workflow Optimization</li>
                </ul>
              </div>
              <div className="pt-2">
                <p className="text-foreground">Bachelor of Information Technology, HUIT (2024)</p>
                <p className="text-muted-foreground text-sm">
                  Graduated with focus on web development, AI systems, and software engineering
                </p>
              </div>
            </div>
          </div>

          <div className={`space-y-4 ${isVisible ? "animate-slide-in-right" : "opacity-0"}`}>
            <div className="p-6 bg-background/50 border border-secondary/30 rounded-lg hover:border-secondary/80 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/10">
              <div className="text-3xl font-bold text-secondary mb-2">1.5+</div>
              <p className="text-muted-foreground">Years of Experience</p>
            </div>
            <div className="p-6 bg-background/50 border border-accent/30 rounded-lg hover:border-accent/80 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10">
              <div className="text-3xl font-bold text-accent mb-2">4+</div>
              <p className="text-muted-foreground">Enterprise Projects Completed</p>
            </div>
            <div className="p-6 bg-background/50 border border-primary/30 rounded-lg hover:border-primary/80 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
              <div className="text-3xl font-bold text-primary mb-2">Master's</div>
              <p className="text-muted-foreground">Degree Candidate - CS</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
