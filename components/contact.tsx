"use client"

import { Mail, Github, Linkedin, MapPin, Phone } from "lucide-react"
import { useLanguage } from "./language-provider"

export default function Contact() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="py-20 px-4 md:px-8 bg-card/20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 mb-12">
          <div className="w-2 h-2 bg-secondary rounded-full" />
          <span className="text-sm font-semibold text-secondary tracking-wider">{t.contact.sectionTitle}</span>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">{t.contact.title}</h2>

        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          {t.contact.description}
        </p>

        <div className="flex justify-center gap-4 mb-16 flex-wrap">
          <a
            href="mailto:nguyendungg12308@gmail.com"
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 font-medium inline-flex items-center gap-2 hover:shadow-lg hover:shadow-primary/30"
          >
            <Mail size={20} />
            {t.contact.emailMe}
          </a>
          <a
            href="https://github.com/DungNguyenGL23"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-secondary text-foreground rounded-lg hover:bg-card/50 hover:border-secondary/80 transition-all duration-300 font-medium inline-flex items-center gap-2"
          >
            <Github size={20} />
            {t.contact.github}
          </a>
          <a
            href="https://www.linkedin.com/in/d%E1%BB%89ng-nguy%E1%BB%85n-24993a2a0/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-secondary text-foreground rounded-lg hover:bg-card/50 hover:border-secondary/80 transition-all duration-300 font-medium inline-flex items-center gap-2"
          >
            <Linkedin size={20} />
            {t.contact.linkedin}
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8 pt-12 border-t border-border">
          <div className="group">
            <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Phone className="text-secondary" size={28} />
            </div>
            <p className="text-muted-foreground text-sm mb-2">{t.contact.phone}</p>
            <a
              href="tel:+840359692045"
              className="text-foreground hover:text-secondary transition-colors font-medium"
            >
              (+84) 0359692045
            </a>
          </div>

          <div className="group">
            <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Mail className="text-secondary" size={28} />
            </div>
            <p className="text-muted-foreground text-sm mb-2">{t.contact.email}</p>
            <a
              href="mailto:nguyendungg12308@gmail.com"
              className="text-foreground hover:text-secondary transition-colors font-medium"
            >
              nguyendungg12308@gmail.com
            </a>
          </div>

          <div className="group">
            <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <MapPin className="text-secondary" size={28} />
            </div>
            <p className="text-muted-foreground text-sm mb-2">{t.contact.location}</p>
            <p className="text-foreground font-medium">{t.contact.locationDesc}</p>
          </div>
        </div>

        <div className="mt-24 pt-8 border-t border-border text-center text-muted-foreground text-sm">
          <p>© {new Date().getFullYear()} Nguyễn Thế Dũng. {t.footer.allRightsReserved}</p>
        </div>
      </div>
    </section>
  )
}
