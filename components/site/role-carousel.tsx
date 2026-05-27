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
      return "bg-fuchsia-100 text-fuchsia-700"
    case "AI for Developers":
      return "bg-sky-100 text-sky-700"
    case "AI for Product Managers":
      return "bg-orange-100 text-orange-700"
    case "AI for Data & Analytics":
      return "bg-emerald-100 text-emerald-700"
    case "AI for Founders":
      return "bg-amber-100 text-amber-700"
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
    <div className="relative overflow-hidden">
      <div
        ref={listRef}
        className="-mr-3 flex items-center gap-3 overflow-x-auto pb-4 pr-3 scroll-smooth"
      >
        {pillars.map((pillar) => {
          const Icon = getPillarIcon(pillar.title)

          return (
            <Link
              key={pillar.title}
              href={pillar.href}
              className="snap-start flex min-w-[18rem] max-w-88 shrink-0 flex-col justify-between rounded-lg border bg-card p-6 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div>
                <div className="flex items-center gap-4">
                  <div
                    className={cn(
                      "flex h-12 w-12 items-center justify-center rounded-2xl",
                      getPillarTone(pillar.title)
                    )}
                  >
                    <Icon className="size-5" />
                  </div>
                  <h3 className="text-xl font-semibold">{pillar.title}</h3>
                </div>

                <p className="mt-4 min-h-12 text-sm leading-6 text-muted-foreground line-clamp-2">
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
          className="pointer-events-auto rounded-full border bg-background/80 p-2 shadow-sm transition hover:border-foreground hover:text-foreground"
        >
          <ArrowLeft className="size-4" />
        </button>
        <button
          type="button"
          aria-label="Scroll right"
          onClick={() => handleScroll("right")}
          className="pointer-events-auto rounded-full border bg-background/80 p-2 shadow-sm transition hover:border-foreground hover:text-foreground"
        >
          <ArrowRight className="size-4" />
        </button>
      </div>
    </div>
  )
}
