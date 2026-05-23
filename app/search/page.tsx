import Link from "next/link"
import { ArrowLeft, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata({
  title: "Search | Sinale",
  description:
    "Search Sinale for AI tools, reviews, comparisons, workflows, and best-of guides.",
  path: "/search",
  index: false,
})

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>
}) {
  const { q = "" } = await searchParams

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
          Search Stack Signal
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

        <div className="mt-10 rounded-lg border bg-card p-6">
          <h2 className="text-xl font-semibold">
            {q ? `Results for "${q}"` : "Start a search"}
          </h2>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            Search UI is wired. Results can connect to the content index once
            the review, comparison, workflow, and tool pages are filled in.
          </p>
        </div>
      </section>
    </main>
  )
}
