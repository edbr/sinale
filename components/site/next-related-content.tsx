"use client"

import type { CSSProperties } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ArrowRight } from "lucide-react"

import { articles } from "@/lib/articles"
import {
  bestOfGuides,
  comparisons,
  reviews,
  workflows,
  type CardItem,
} from "@/lib/site-content"

type ContentGroup = {
  id: "article" | "comparison" | "review" | "best" | "workflow"
  label: string
  items: CardItem[]
}

const contentGroups: ContentGroup[] = [
  {
    id: "article",
    label: "Next article",
    items: articles.map((article) => ({
      title: article.title,
      description: article.description,
      href: `/articles/${article.slug}`,
    })),
  },
  {
    id: "comparison",
    label: "Next comparison",
    items: comparisons,
  },
  {
    id: "review",
    label: "Next review",
    items: reviews,
  },
  {
    id: "best",
    label: "Next best-of guide",
    items: bestOfGuides,
  },
  {
    id: "workflow",
    label: "Next workflow",
    items: workflows,
  },
]

function findNextContent(pathname: string) {
  for (const group of contentGroups) {
    const currentIndex = group.items.findIndex((item) => item.href === pathname)

    if (currentIndex >= 0) {
      const nextIndex = (currentIndex + 1) % group.items.length

      return {
        groupId: group.id,
        label: group.label,
        item: group.items[nextIndex],
      }
    }
  }

  return null
}

const groupThemes: Record<
  ContentGroup["id"],
  CSSProperties & {
    "--next-accent": string
    "--next-accent-soft": string
    "--next-pattern-x": string
    "--next-pattern-y": string
  }
> = {
  article: {
    "--next-accent": "oklch(52% 0.14 238)",
    "--next-accent-soft": "oklch(92% 0.045 238 / 0.62)",
    "--next-pattern-x": "12px",
    "--next-pattern-y": "18px",
  },
  comparison: {
    "--next-accent": "oklch(56% 0.12 184)",
    "--next-accent-soft": "oklch(92% 0.045 184 / 0.64)",
    "--next-pattern-x": "30px",
    "--next-pattern-y": "10px",
  },
  review: {
    "--next-accent": "oklch(56% 0.14 310)",
    "--next-accent-soft": "oklch(93% 0.045 310 / 0.56)",
    "--next-pattern-x": "18px",
    "--next-pattern-y": "32px",
  },
  best: {
    "--next-accent": "oklch(58% 0.13 78)",
    "--next-accent-soft": "oklch(94% 0.05 78 / 0.56)",
    "--next-pattern-x": "42px",
    "--next-pattern-y": "20px",
  },
  workflow: {
    "--next-accent": "oklch(54% 0.14 142)",
    "--next-accent-soft": "oklch(93% 0.045 142 / 0.58)",
    "--next-pattern-x": "22px",
    "--next-pattern-y": "8px",
  },
}

const groupFigures: Record<ContentGroup["id"], string> = {
  article: "READ 01",
  comparison: "COMPARE 02",
  review: "REVIEW 03",
  best: "GUIDE 04",
  workflow: "FLOW 05",
}

export function NextRelatedContent() {
  const pathname = usePathname()
  const nextContent = findNextContent(pathname)

  if (!nextContent) {
    return null
  }

  return (
    <section className="next-related-shell border-t bg-secondary/30">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <Link
          href={nextContent.item.href}
          style={groupThemes[nextContent.groupId]}
          className="next-related-card group grid gap-6 rounded-2xl border bg-card/90 p-6 shadow-sm backdrop-blur md:grid-cols-[minmax(0,1fr)_auto] md:items-end md:p-7"
        >
          <div className="min-w-0">
            <div className="mb-5 flex items-center gap-3">
              <p className="text-sm font-medium text-muted-foreground">
                {nextContent.label}
              </p>
            </div>
            <h2 className="next-related-title max-w-4xl font-serif text-2xl font-medium leading-tight tracking-[-0.035em] text-foreground">
              {nextContent.item.title}
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-6 text-muted-foreground">
              {nextContent.item.description}
            </p>
          </div>
          <div className="flex items-center justify-between gap-5 md:grid md:justify-items-end">
            <span className="next-related-figure font-mono text-xs text-muted-foreground">
              {groupFigures[nextContent.groupId]}
            </span>
            <span className="inline-flex items-center gap-1 text-sm font-medium">
              Read next
              <ArrowRight className="next-related-arrow size-4" />
            </span>
          </div>
        </Link>
      </div>
    </section>
  )
}
