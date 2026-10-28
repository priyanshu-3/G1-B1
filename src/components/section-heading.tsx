import { cn } from "@/lib/utils"

type Props = {
  title: React.ReactNode
  className?: string
  children?: React.ReactNode
}

export function SectionHeading({ title, className, children }: Props) {
  return (
    <header className={cn("mb-10 grid gap-6 md:mb-14 md:grid-cols-12 md:items-end", className)}>
      <div className="md:col-span-7">
        <h2 className="text-4xl font-medium leading-[0.95] tracking-[-0.04em] sm:text-5xl md:text-6xl">{title}</h2>
      </div>
      {children ? <div className="text-sm leading-relaxed opacity-70 md:col-span-5 md:text-base">{children}</div> : null}
    </header>
  )
}
