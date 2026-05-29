"use client"

import { useRef } from "react"
import Link from "next/link"
import {
  ArrowLeft,
  ArrowRight,
  Blocks,
  ChartNoAxesCombined,
  Code2,
  Lightbulb,
  PenTool,
  Rocket,
} from "lucide-react"

import { cn } from "@/lib/utils"

type RoleCarouselItem = {
  title: string
  description: string
  href: string
}

function getPillarTone(title: string) {
  switch (title) {
    case "AI for Designers":
      return "bg-rose-100 text-rose-700"
    case "AI for Developers":
      return "bg-sky-100 text-sky-700"
    case "AI for Product Managers":
      return "bg-amber-100 text-amber-700"
    case "AI for Data & Analytics":
      return "bg-emerald-100 text-emerald-700"
    case "AI for Founders":
      return "bg-indigo-100 text-indigo-700"
    default:
      return "bg-secondary text-secondary-foreground"
  }
}

function getPillarIcon(title: string) {
  switch (title) {
    case "AI for Designers":
      return PenTool
    case "AI for Developers":
      return Code2
    case "AI for Product Managers":
      return Blocks
    case "AI for Data & Analytics":
      return ChartNoAxesCombined
    case "AI for Founders":
      return Rocket
    case "Reviews":
      return Lightbulb
    case "Comparisons":
      return ChartNoAxesCombined
    default:
      return ChartNoAxesCombined
  }
}

export function RoleCarousel({ pillars }: { pillars: RoleCarouselItem[] }) {
  const listRef = useRef<HTMLDivElement | null>(null)

  function handleScroll(direction: "left" | "right") {
    if (!listRef.current) {
      return
    }

    const scrollAmount = Math.max(listRef.current.clientWidth * 0.8, 320)
    listRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    })
  }

  return (
    <div className="relative overflow-hidden rounded-2xl border bg-card/80 p-4 shadow-sm">
      <div
        ref={listRef}
        className="-mr-3 flex items-stretch gap-4 overflow-x-auto pb-4 pr-3 scroll-smooth"
      >
        {pillars.map((pillar) => {
          const Icon = getPillarIcon(pillar.title)

          return (
            <Link
              key={pillar.title}
              href={pillar.href}
              className="group snap-start flex min-w-[18rem] max-w-88 shrink-0 flex-col justify-between rounded-xl border bg-card p-5 shadow-sm transition hover:-translate-y-1 hover:border-primary/25 hover:shadow-lg"
            >
              <div>
                <div className="flex items-start gap-4">
                  <div
                    className={cn(
                      "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-transparent",
                      getPillarTone(pillar.title)
                    )}
                  >
                    <Icon className="size-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-primary">
                      Role
                    </p>
                    <h3 className="mt-1 font-heading text-xl font-semibold leading-6">
                      {pillar.title}
                    </h3>
                  </div>
                </div>

                <p className="mt-5 min-h-12 border-t pt-4 text-sm leading-6 text-muted-foreground line-clamp-2">
                  {pillar.description}
                </p>
              </div>

              <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                Explore
                <ArrowRight className="size-4 transition group-hover:translate-x-1" />
              </span>
            </Link>
        )})}
      </div>

      <div className="pointer-events-none absolute right-3 top-1/2 hidden -translate-y-1/2 gap-2 md:flex">
        <button
          type="button"
          aria-label="Scroll left"
          onClick={() => handleScroll("left")}
          className="pointer-events-auto rounded-full border bg-background/90 p-2 shadow-sm transition hover:bg-accent"
        >
          <ArrowLeft className="size-4" />
        </button>
        <button
          type="button"
          aria-label="Scroll right"
          onClick={() => handleScroll("right")}
          className="pointer-events-auto rounded-full border bg-background/90 p-2 shadow-sm transition hover:bg-accent"
        >
          <ArrowRight className="size-4" />
        </button>
      </div>
    </div>
  )
}
