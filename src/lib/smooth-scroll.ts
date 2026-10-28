import Lenis from "lenis"
import "lenis/dist/lenis.css"

let lenis: Lenis | null = null

/** Eased, inertial page scrolling. Skipped for visitors who ask for reduced motion. */
export function startSmoothScroll() {
  if (lenis || matchMedia("(prefers-reduced-motion: reduce)").matches) return () => {}
  lenis = new Lenis({
    autoRaf: true,
    lerp: 0.09,
    // in-page links (#about, #work…) glide too
    anchors: { duration: 1.4 },
  })
  return () => {
    lenis?.destroy()
    lenis = null
  }
}

/** Scroll to a section by id, through Lenis when it is running so the two never fight. */
export function scrollToId(id: string) {
  const el = document.getElementById(id)
  if (!el) return
  if (lenis) lenis.scrollTo(el, { duration: 1.4 })
  else el.scrollIntoView({ behavior: "smooth" })
}
