"use client"

import { useEffect, useState } from "react"
import { Contrast, Moon, Sun } from "lucide-react"

function applyThemeClass(className: string, enabled: boolean) {
  document.documentElement.classList.toggle(className, enabled)
}

function getInitialDarkMode() {
  if (typeof window === "undefined") {
    return false
  }

  const savedDark = localStorage.getItem("theme:dark")

  if (savedDark) {
    return savedDark === "true"
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
}

function getInitialHighContrast() {
  if (typeof window === "undefined") {
    return false
  }

  return localStorage.getItem("theme:high-contrast") === "true"
}

export function ThemeSwitches() {
  const [isDark, setIsDark] = useState(getInitialDarkMode)
  const [isHighContrast, setIsHighContrast] = useState(getInitialHighContrast)

  useEffect(() => {
    localStorage.setItem("theme:dark", String(isDark))
    localStorage.setItem("theme:high-contrast", String(isHighContrast))
    applyThemeClass("dark", isDark)
    applyThemeClass("high-contrast", isHighContrast)
  }, [isDark, isHighContrast])

  function toggleDark() {
    const nextDark = !isDark

    setIsDark(nextDark)
  }

  function toggleContrast() {
    const nextContrast = !isHighContrast

    setIsHighContrast(nextContrast)
  }

  return (
    <div className="flex items-center overflow-hidden rounded-full border bg-background/70">
      <button
        type="button"
        role="switch"
        aria-checked={isDark}
        aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        title={isDark ? "Light mode" : "Dark mode"}
        onClick={toggleDark}
        className="inline-flex size-8 items-center justify-center border-r text-muted-foreground transition hover:bg-accent hover:text-foreground aria-checked:bg-foreground aria-checked:text-background"
      >
        {isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
      </button>
      <button
        type="button"
        role="switch"
        aria-checked={isHighContrast}
        aria-label={
          isHighContrast
            ? "Turn high contrast off"
            : "Turn high contrast on"
        }
        title="High contrast"
        onClick={toggleContrast}
        className="inline-flex size-8 items-center justify-center text-muted-foreground transition hover:bg-accent hover:text-foreground aria-checked:bg-foreground aria-checked:text-background"
      >
        <Contrast className="size-4" />
      </button>
    </div>
  )
}
