"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return <div className="w-9 h-9" />
    }

    return (
        <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-card/50 transition-all duration-300"
            title="Toggle Theme"
        >
            {theme === "light" ? <Sun size={20} /> : <Moon size={20} />}
        </button>
    )
}
