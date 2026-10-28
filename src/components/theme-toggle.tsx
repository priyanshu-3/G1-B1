import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"

type Theme = "light" | "dark"

const currentTheme = (): Theme => (document.documentElement.classList.contains("dark") ? "dark" : "light")

/** Floating light/dark switch. The initial theme is set in index.html before paint. */
export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(currentTheme)

  // Follow the OS setting until the visitor picks a theme themselves.
  useEffect(() => {
    const query = matchMedia("(prefers-color-scheme: light)")
    const onChange = () => {
      let saved: string | null = null
      try {
        saved = localStorage.getItem("theme")
      } catch {}
      if (!saved) apply(query.matches ? "light" : "dark")
    }
    query.addEventListener("change", onChange)
    return () => query.removeEventListener("change", onChange)
  }, [])

  function apply(next: Theme) {
    document.documentElement.classList.toggle("dark", next === "dark")
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", next === "dark" ? "#0d0d0c" : "#f5f3ec")
    setTheme(next)
  }

  function toggle() {
    const next = theme === "dark" ? "light" : "dark"
    try {
      localStorage.setItem("theme", next)
    } catch {}
    apply(next)
  }

  const isDark = theme === "dark"
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light mode" : "Dark mode"}
      className="fixed right-4 top-4 z-50 flex h-10 w-10 items-center justify-center rounded-full border bg-background/80 text-foreground shadow-lg backdrop-blur transition-transform hover:scale-105 active:scale-95 md:right-6 md:top-6 md:h-11 md:w-11"
    >
      {isDark ? <Sun className="h-[18px] w-[18px]" /> : <Moon className="h-[18px] w-[18px]" />}
    </button>
  )
}
