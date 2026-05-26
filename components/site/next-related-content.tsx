"use client"

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
  label: string
  items: CardItem[]
}

const contentGroups: ContentGroup[] = [
  {
    label: "Next article",
    items: articles.map((article) => ({
      title: article.title,
      description: article.description,
      href: `/articles/${article.slug}`,
    })),
  },
  {
    label: "Next comparison",
    items: comparisons,
  },
  {
    label: "Next review",
    items: reviews,
  },
  {
    label: "Next best-of guide",
    items: bestOfGuides,
  },
  {
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
        label: group.label,
        item: group.items[nextIndex],
      }
    }
  }

  return null
}

export function NextRelatedContent() {
  const pathname = usePathname()
  const nextContent = findNextContent(pathname)

  if (!nextContent) {
    return null
  }

  return (
    <section className="border-t bg-secondary/30">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <Link
          href={nextContent.item.href}
          className="group grid gap-5 rounded-lg border bg-card p-6 transition hover:-translate-y-0.5 hover:shadow-lg md:grid-cols-[1fr_auto] md:items-center"
        >
          <div>
            <p className="text-sm font-medium text-muted-foreground">
              {nextContent.label}
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight">
              {nextContent.item.title}
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-muted-foreground">
              {nextContent.item.description}
            </p>
          </div>
          <span className="inline-flex items-center gap-1 text-sm font-medium">
            Read next
            <ArrowRight className="size-4 transition group-hover:translate-x-1" />
          </span>
        </Link>
      </div>
    </section>
  )
}
