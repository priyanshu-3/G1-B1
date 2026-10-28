"use client"

import * as React from "react"

export type HoverExpandItem = {
  /** The label. Rotated into the rail on desktop, a plain row on mobile. */
  title: string
  /** Secondary label — a year, a role, a client. Only shown on the open panel. */
  meta?: string
  /** Image URL. Panels without one fall back to `accent`. */
  src?: string
  alt?: string
  /** Any CSS background. Used when `src` is absent, and behind it while it decodes. */
  accent?: string
  /**
   * Extra content laid over the open panel's image (copy, tags, links). It is
   * rendered beside the trigger button rather than inside it, so it may hold
   * links of its own.
   */
  content?: React.ReactNode
}

export type HoverExpandGalleryProps = {
  items?: HoverExpandItem[]
  /**
   * Height of the desktop row. Must be a definite length — everything below the
   * root is percentage-based, so `"100%"` collapses to 0px unless every ancestor
   * up to <html> has a real height too. Ignored below 1024px, where the
   * accordion sizes itself.
   */
  height?: string
  /**
   * Width of a closed panel on desktop, in px — also the width of the label
   * rail. The open panel gets whatever is left, so keep
   * `items.length * railWidth` comfortably under 1024px.
   */
  railWidth?: number
  /**
   * Cap on the open panel's width on desktop, in px. Keeps it a portrait strip
   * instead of a near-square block when there are few items; the row centres
   * inside whatever is left over.
   */
  maxOpenWidth?: number
  /**
   * Height of the open panel's image in the stacked layout, in px — below
   * 1024px, or at every width when `orientation` is `"vertical"`.
   */
  mobileImageHeight?: number
  /**
   * `"horizontal"` (default) lays the panels side by side from 1024px up, with
   * rotated labels. `"vertical"` keeps the stacked accordion at every width:
   * full-width rows that open downward.
   */
  orientation?: "horizontal" | "vertical"
  /** Which panel starts open. */
  defaultIndex?: number
  /** Open/close duration, in ms. */
  duration?: number
  /**
   * How long the mouse has to rest on a panel before it opens, in ms. Sweeping
   * across the list on the way somewhere else then doesn't flick every panel open.
   */
  hoverDelay?: number
  onChange?: (index: number, item: HoverExpandItem) => void
  className?: string
}

const DEFAULT_ITEMS: HoverExpandItem[] = [
  { title: "Velvet Dreams Studio", meta: "2024", accent: "linear-gradient(200deg,#2f4f43,#0f1f1a)" },
  { title: "Neon Pulse ® Agency", meta: "2024", accent: "linear-gradient(200deg,#c8371f,#3a0f0a)" },
  { title: "Midnight Canvas", meta: "2023", accent: "linear-gradient(200deg,#26304d,#0b0e18)" },
  { title: "Echo Digital Lab", meta: "2023", accent: "linear-gradient(200deg,#b4642c,#301608)" },
  { title: "Cosmic Brew Studios", meta: "2023", accent: "linear-gradient(200deg,#6b4a8f,#1a1026)" },
  { title: "Horizon Typography", meta: "2022", accent: "linear-gradient(200deg,#d6c9a8,#514830)" },
  { title: "Waves & ® Motion", meta: "2022", accent: "linear-gradient(200deg,#1f6f7a,#07222a)" },
  { title: "Stellar Workshop", meta: "2022", accent: "linear-gradient(200deg,#8f8f8f,#1c1c1c)" },
  { title: "Prism ® Media House", meta: "2021", accent: "linear-gradient(200deg,#a8326a,#280c1c)" },
  { title: "Aurora Design Co ™", meta: "2021", accent: "linear-gradient(200deg,#3f7d4f,#0c2113)" },
  { title: "Flux Interactive", meta: "2021", accent: "linear-gradient(200deg,#c9a227,#3a2c05)" },
  { title: "Zenith Brand Studio", meta: "2020", accent: "linear-gradient(200deg,#4a4f8f,#0f1128)" },
]

export default function HoverExpandGallery({
  items = DEFAULT_ITEMS,
  height = "100svh",
  railWidth = 64,
  maxOpenWidth = 520,
  mobileImageHeight = 420,
  orientation = "horizontal",
  defaultIndex = 0,
  duration = 620,
  hoverDelay = 110,
  onChange,
  className = "",
}: HoverExpandGalleryProps) {
  const [active, setActive] = React.useState(defaultIndex)
  // Mirrors `active` so a delayed open (below) never compares against a stale render.
  const activeRef = React.useRef(defaultIndex)
  const hoverTimer = React.useRef(0)
  React.useEffect(() => () => window.clearTimeout(hoverTimer.current), [])

  const open = (index: number) => {
    window.clearTimeout(hoverTimer.current)
    if (index === activeRef.current) return
    activeRef.current = index
    setActive(index)
    onChange?.(index, items[index])
  }
  const openSoon = (index: number) => {
    window.clearTimeout(hoverTimer.current)
    hoverTimer.current = window.setTimeout(() => open(index), hoverDelay)
  }

  const rootVars = {
    "--hx-h": height,
    "--hx-rail": `${railWidth}px`,
    "--hx-max": `${maxOpenWidth}px`,
    "--hx-t": `${duration}ms`,
  } as React.CSSProperties

  // Every lg: class below builds the side-by-side layout; "vertical" drops them
  // and keeps the stacked accordion, only scaled up for wide screens.
  const vertical = orientation === "vertical"
  const ease = "ease-[cubic-bezier(0.32,0.72,0,1)]"

  return (
    <section
      style={rootVars}
      className={`relative w-full bg-background text-foreground ${vertical ? "" : "lg:h-[var(--hx-h)] lg:overflow-hidden"} ${className}`}
    >
      <ul className={`flex w-full flex-col ${vertical ? "" : "lg:h-full lg:flex-row lg:justify-center"}`}>
        {items.map((item, index) => {
          const isActive = index === active
          const panelVars = {
            // Desktop: flex-basis is what animates, rail width to open width.
            // Growing into the free space instead would need a max-width to
            // stay a portrait strip, and the clamp eats most of the travel —
            // the panel reaches its cap early and reads as a snap.
            // Mobile (and vertical): the image block's height animates instead.
            // Each row's image sits above its label, so when the row below the
            // open one is hovered, one image shrinks as the other grows and the
            // label under the pointer stays put — no hover cascade.
            "--hx-basis": isActive ? "var(--hx-max)" : "var(--hx-rail)",
            "--hx-img-h": isActive ? `${mobileImageHeight}px` : "0px",
            "--hx-img-o": isActive ? 1 : 0,
          } as React.CSSProperties

          return (
            <li
              key={`${item.title}-${index}`}
              style={panelVars}
              className={`relative border-b border-border last:border-b-0 ${
                vertical
                  ? ""
                  : `lg:h-full lg:min-w-0 lg:border-b-0 lg:border-l lg:last:border-r lg:[flex-basis:var(--hx-basis)] lg:[flex-grow:0] lg:[flex-shrink:1] lg:transition-[flex-basis] lg:duration-[var(--hx-t)] lg:ease-[cubic-bezier(0.32,0.72,0,1)] lg:motion-reduce:transition-none`
              }`}
            >
              <button
                type="button"
                aria-current={isActive}
                aria-label={item.title}
                onPointerEnter={(event) => {
                  if (event.pointerType === "mouse") openSoon(index)
                }}
                onPointerLeave={() => window.clearTimeout(hoverTimer.current)}
                onFocus={() => open(index)}
                onClick={() => open(index)}
                className={`group relative block w-full cursor-pointer border-0 bg-transparent p-0 text-left outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-foreground/40 ${
                  vertical ? "" : "lg:h-full lg:overflow-hidden"
                }`}
              >
                {/* Image. In flow below 1024px (its height animates); pinned to
                    the panel above it (the panel's width animates under it). */}
                <span
                  aria-hidden={!isActive}
                  style={{ background: item.accent, opacity: "var(--hx-img-o)" }}
                  className={`block h-[var(--hx-img-h)] w-full overflow-hidden transition-[height,opacity] duration-[var(--hx-t)] ${ease} motion-reduce:transition-none ${
                    vertical
                      ? ""
                      : "lg:absolute lg:inset-y-2 lg:left-[var(--hx-rail)] lg:right-3 lg:h-auto lg:w-auto lg:rounded-[10px] lg:transition-opacity"
                  }`}
                >
                  {item.src ? (
                    <img
                      src={item.src}
                      alt={item.alt ?? item.title}
                      draggable={false}
                      style={{ maxWidth: "none" }}
                      className={`block h-full w-full object-cover object-top transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
                        isActive ? "scale-100" : "scale-[1.08]"
                      }`}
                    />
                  ) : null}
                </span>

                {/* Label. A row below 1024px (and always when vertical); above it
                    a rail down the left of the panel — title at the bottom, meta
                    at the top. */}
                <span
                  className={`flex h-16 w-full items-center justify-between gap-3 overflow-hidden px-5 text-[14px] tracking-tight transition-colors duration-[var(--hx-t)] ease-out motion-reduce:transition-none ${
                    vertical
                      ? "lg:h-20 lg:px-8 lg:text-2xl lg:font-medium lg:tracking-[-0.03em]"
                      : "lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-[var(--hx-rail)] lg:flex-col-reverse lg:justify-between lg:px-0 lg:py-5"
                  } ${isActive ? "text-foreground" : "text-foreground/40 hover:text-foreground/70"}`}
                >
                  <span
                    className={`truncate ${
                      vertical
                        ? `transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${isActive ? "translate-x-1.5" : "group-hover:translate-x-1"}`
                        : "lg:overflow-hidden lg:rotate-180 lg:whitespace-nowrap lg:[writing-mode:vertical-rl]"
                    }`}
                  >
                    {item.title}
                  </span>
                  <span
                    style={{ opacity: isActive && item.meta ? 1 : 0 }}
                    className={`shrink-0 text-[13px] font-medium transition-opacity duration-[var(--hx-t)] ease-out motion-reduce:transition-none ${
                      vertical
                        ? "lg:font-mono lg:text-xs lg:font-normal lg:uppercase lg:tracking-[0.15em]"
                        : "lg:rotate-180 lg:whitespace-nowrap lg:[writing-mode:vertical-rl]"
                    }`}
                  >
                    {item.meta}
                  </span>
                </span>
              </button>

              {/* Content. Covers the image block in both layouts; a fixed inner
                  width on desktop means the panel reveals it instead of
                  reflowing it while the width animates. */}
              {item.content ? (
                <div
                  aria-hidden={!isActive}
                  inert={!isActive}
                  style={{ opacity: "var(--hx-img-o)" }}
                  className={`absolute inset-x-0 top-0 h-[var(--hx-img-h)] overflow-hidden transition-[height,opacity] duration-[var(--hx-t)] ${ease} motion-reduce:transition-none ${
                    vertical
                      ? ""
                      : "lg:inset-x-auto lg:inset-y-2 lg:left-[var(--hx-rail)] lg:right-3 lg:h-auto lg:rounded-[10px] lg:transition-opacity"
                  } ${isActive ? "" : "pointer-events-none"}`}
                >
                  <div
                    className={`h-full w-full transition-[opacity,translate] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:translate-y-0 motion-reduce:transition-none ${
                      isActive ? "translate-y-0 opacity-100 delay-150 duration-700" : "translate-y-4 opacity-0 delay-0 duration-200"
                    } ${vertical ? "" : "lg:w-[calc(var(--hx-max)-var(--hx-rail)-12px)]"}`}
                  >
                    {item.content}
                  </div>
                </div>
              ) : null}
            </li>
          )
        })}
      </ul>
    </section>
  )
}
