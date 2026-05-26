import Link from "next/link"
import { ArrowLeft, ArrowRight, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { articles } from "@/lib/articles"
import { pageMetadata } from "@/lib/seo"
import {
  aiToolCategories,
  bestOfGuides,
  comparisons,
  designerGuides,
  developerGuides,
  founderGuides,
  pillars,
  productManagerGuides,
  reviews,
  toolDirectory,
  workflows,
  type CardItem,
} from "@/lib/site-content"

export const metadata = pageMetadata({
  title: "Search | Sinale",
  description:
    "Search Sinale for AI tools, reviews, comparisons, workflows, and best-of guides.",
  path: "/search",
  index: false,
})

metadata.robots = "noindex,follow"

type SearchItem = CardItem & {
  type: string
  keywords?: string[]
}

const contentIndex: SearchItem[] = [
  ...articles.map((item) => ({
    title: item.title,
    description: item.description,
    href: `/articles/${item.slug}`,
    type: "Article",
    keywords: [item.category, item.audience, item.tool],
  })),
  ...bestOfGuides.map((item) => ({ ...item, type: "Best Of" })),
  ...comparisons.map((item) => ({ ...item, type: "Comparison" })),
  ...reviews.map((item) => ({ ...item, type: "Review" })),
  ...workflows.map((item) => ({ ...item, type: "Workflow" })),
  ...designerGuides.map((item) => ({ ...item, type: "Designer Guide" })),
  ...developerGuides.map((item) => ({ ...item, type: "Developer Guide" })),
  ...productManagerGuides.map((item) => ({ ...item, type: "PM Guide" })),
  ...founderGuides.map((item) => ({ ...item, type: "Founder Guide" })),
  ...pillars.map((item) => ({
    title: item.title,
    description: item.description,
    href: item.href,
    type: "Role",
  })),
  ...toolDirectory.map((tool) => ({
    title: tool.name,
    description: tool.description,
    href: tool.href,
    type: tool.category,
    keywords: [tool.category],
  })),
  ...aiToolCategories.map((category) => ({
    title: category.title,
    description: category.description,
    href: `/tools?category=${encodeURIComponent(category.title)}`,
    type: "Tool Category",
    keywords: category.tools,
  })),
]

const fallbackResults = [
  ...bestOfGuides,
  comparisons[1],
  reviews[0],
  workflows[0],
].filter(Boolean).map((item) => ({
  ...item,
  type: "Recommended",
}))

function scoreResult(item: SearchItem, query: string) {
  const haystack = [
    item.title,
    item.description,
    item.type,
    ...(item.keywords ?? []),
  ]
    .join(" ")
    .toLowerCase()

  const title = item.title.toLowerCase()
  const terms = query
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean)

  if (terms.length === 0) return 0

  let score = 0

  if (title.includes(query.toLowerCase())) {
    score += 8
  }

  for (const term of terms) {
    if (title.includes(term)) score += 4
    if (haystack.includes(term)) score += 2
  }

  return score
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>
}) {
  const { q = "" } = await searchParams
  const query = q.trim()
  const scoredResults = query
    ? contentIndex
        .map((item) => ({ item, score: scoreResult(item, query) }))
        .filter((entry) => entry.score > 0)
        .sort((a, b) => b.score - a.score)
        .map((entry) => entry.item)
    : []
  const results = scoredResults.length > 0 ? scoredResults : fallbackResults
  const hasExactResults = scoredResults.length > 0

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <Button asChild variant="ghost" className="mb-10 px-0">
          <Link href="/">
            <ArrowLeft />
            Home
          </Link>
        </Button>

        <p className="mb-4 text-sm font-medium text-muted-foreground">
          Search
        </p>
        <h1 className="text-5xl font-semibold tracking-tight md:text-6xl">
          Search Sinale
        </h1>
        <form action="/search" className="mt-8">
          <div className="flex h-14 items-center gap-3 rounded-full border bg-card px-4 shadow-sm">
            <Search className="size-5 shrink-0 text-muted-foreground" />
            <input
              type="search"
              name="q"
              defaultValue={q}
              placeholder="Search AI tools, workflows, and comparisons..."
              className="h-full min-w-0 flex-1 bg-transparent text-base outline-none placeholder:text-muted-foreground"
            />
            <Button type="submit" size="sm" className="rounded-full px-4">
              Search
            </Button>
          </div>
        </form>

        <div className="mt-10">
          <h2 className="text-xl font-semibold">
            {query
              ? hasExactResults
                ? `Results for "${query}"`
                : `No exact matches for "${query}"`
              : "Recommended places to start"}
          </h2>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            {query && !hasExactResults
              ? "Here are the most useful guides and comparisons to explore next."
              : "Browse reviews, comparisons, workflows, best-of guides, role pages, and tool categories."}
          </p>

          <div className="mt-6 grid gap-4">
            {results.map((result) => (
              <Link
                key={`${result.href}-${result.title}`}
                href={result.href}
                className="group rounded-lg border bg-card p-5 transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="mb-3 flex items-center justify-between gap-4">
                  <span className="rounded-full border px-2.5 py-1 text-xs text-muted-foreground">
                    {result.type}
                  </span>
                  <ArrowRight className="size-4 text-muted-foreground transition group-hover:translate-x-1 group-hover:text-foreground" />
                </div>
                <h3 className="text-lg font-semibold">{result.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {result.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
