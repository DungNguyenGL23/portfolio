"use client"

import * as React from "react"
import { useLanguage } from "./language-provider"

export function LanguageToggle() {
    const { language, setLanguage } = useLanguage()

    return (
        <div className="flex bg-card/50 rounded-lg p-1 border border-border">
            <button
                onClick={() => setLanguage("en")}
                className={`px-3 py-1 text-xs font-semibold rounded-md transition-all duration-300 ${language === "en" ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
                    }`}
            >
                EN
            </button>
            <button
                onClick={() => setLanguage("vi")}
                className={`px-3 py-1 text-xs font-semibold rounded-md transition-all duration-300 ${language === "vi" ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
                    }`}
            >
                VI
            </button>
        </div>
    )
}
