import Link from "next/link"
import { ArrowRight, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { pageMetadata } from "@/lib/seo"
import { aiToolCategories } from "@/lib/site-content"

export const metadata = pageMetadata({
  title: "AI Tool Directory | Sinale",
  description:
    "Browse AI tools by jobs to be done, including coding assistants, research tools, meeting assistants, video tools, sales tools, and more.",
  path: "/tools",
})

const featuredJobs = [
  "AI coding assistant",
  "AI note taker",
  "AI presentation maker",
  "AI video editor",
  "AI meeting assistant",
  "AI research tool",
]

export default function ToolsPage() {
  const toolCount = aiToolCategories.reduce(
    (total, category) => total + category.tools.length,
    0
  )

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <p className="mb-4 text-sm font-medium text-muted-foreground">
          AI Tool Directory
        </p>
        <h1 className="max-w-4xl text-5xl font-semibold tracking-tight md:text-7xl">
          Find AI tools by the job you need done.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
          Browse {toolCount} AI tools organized around practical workflows:
          coding, research, design, meetings, video, sales, support, analytics,
          and more.
        </p>

        <form action="/search" className="mt-8 max-w-2xl">
          <div className="flex h-14 items-center gap-3 rounded-full border bg-card px-4 shadow-sm transition focus-within:border-ring focus-within:ring-3 focus-within:ring-ring/20">
            <Search className="size-5 shrink-0 text-muted-foreground" />
            <input
              type="search"
              name="q"
              placeholder="Search AI coding assistants, note takers, research tools..."
              className="h-full min-w-0 flex-1 bg-transparent text-base outline-none placeholder:text-muted-foreground"
            />
            <Button type="submit" size="sm" className="rounded-full px-4">
              Search
            </Button>
          </div>
        </form>

        <div className="mt-5 flex flex-wrap gap-2">
          {featuredJobs.map((job) => (
            <Link
              key={job}
              href={`/search?q=${encodeURIComponent(job)}`}
              className="rounded-full border bg-background px-3 py-1.5 text-sm text-muted-foreground transition hover:border-foreground hover:text-foreground"
            >
              {job}
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid gap-4 md:grid-cols-2">
          {aiToolCategories.map((category) => (
            <section
              key={category.title}
              className="rounded-lg border bg-card p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-semibold">{category.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {category.description}
                  </p>
                </div>
                <span className="shrink-0 rounded-full border px-3 py-1 text-sm text-muted-foreground">
                  {category.tools.length}
                </span>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {category.tools.map((tool) => (
                  <Link
                    key={tool}
                    href={`/search?q=${encodeURIComponent(tool)}`}
                    className="rounded-full border bg-background px-3 py-1.5 text-sm transition hover:border-foreground hover:text-foreground"
                  >
                    {tool}
                  </Link>
                ))}
              </div>

              <Link
                href={`/search?q=${encodeURIComponent(category.title)}`}
                className="mt-6 inline-flex items-center gap-1 text-sm font-medium"
              >
                Explore {category.title.toLowerCase()}
                <ArrowRight className="size-4" />
              </Link>
            </section>
          ))}
        </div>
      </section>
    </main>
  )
}
