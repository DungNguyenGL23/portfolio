"use client"

import React, { createContext, useContext, useState, useEffect } from "react"
import { Language, translations } from "@/lib/i18n/translations"

interface LanguageContextProps {
    language: Language
    setLanguage: (lang: Language) => void
    t: typeof translations.en
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguageState] = useState<Language>("en")
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
        const storedLang = localStorage.getItem("portfolio_lang") as Language
        if (storedLang && (storedLang === "en" || storedLang === "vi")) {
            setLanguageState(storedLang)
        }
    }, [])

    const setLanguage = (lang: Language) => {
        setLanguageState(lang)
        localStorage.setItem("portfolio_lang", lang)
    }

    // To prevent hydration errors, default to en for server rendering
    const t = translations[language] || translations.en

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {mounted ? children : <div className="invisible">{children}</div>}
        </LanguageContext.Provider>
    )
}

export const useLanguage = () => {
    const context = useContext(LanguageContext)
    if (!context) throw new Error("useLanguage must be used within LanguageProvider")
    return context
}
