import Link from "next/link"
import { ArrowRight, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { getCategoryPageStyle } from "@/lib/category-theme"
import { pageMetadata } from "@/lib/seo"
import { ToolLogo } from "@/components/site/tool-logo"
import {
  aiToolCategories,
  slugifyToolName,
  toolDirectory,
} from "@/lib/site-content"

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
  const toolsByName = new Map(toolDirectory.map((tool) => [tool.name, tool]))
  const toolCount = aiToolCategories.reduce(
    (total, category) => total + category.tools.length,
    0
  )

  return (
    <main
      style={getCategoryPageStyle("Tools:AI Tool Directory")}
      className="category-page min-h-screen bg-background text-foreground"
    >
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-16 md:py-24">
        <p className="page-enter page-enter-delay-1 editorial-eyebrow mb-5">
          AI Tool Directory
        </p>
        <h1 className="page-enter page-enter-delay-1 editorial-display max-w-5xl">
          Find AI tools by the job you need done.
        </h1>
        <p className="page-enter page-enter-delay-2 editorial-deck mt-7">
          Browse {toolCount} AI tools organized around practical workflows:
          coding, research, design, meetings, video, sales, support, analytics,
          and more.
        </p>

        <form action="/search" className="page-enter page-enter-delay-3 mt-8 max-w-2xl">
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

        <div className="page-enter page-enter-delay-3 mt-5 flex flex-wrap gap-2">
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

      <section className="page-enter page-enter-delay-3 relative z-10 mx-auto max-w-6xl px-6 pb-24">
        <div className="grid gap-4 md:grid-cols-2">
          {aiToolCategories.map((category) => (
            <section
              key={category.title}
              className="editorial-card group rounded-lg border bg-card/95 p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="editorial-card-title text-2xl font-semibold">{category.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {category.description}
                  </p>
                </div>
                <span className="editorial-card-meta shrink-0 rounded-full border px-3 py-1 text-sm text-muted-foreground">
                  {category.tools.length}
                </span>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {category.tools.map((tool) => (
                  <Link
                    key={tool}
                    href={`/tools/${slugifyToolName(tool)}`}
                    className="inline-flex items-center gap-2 rounded-full border bg-background px-3 py-1.5 text-sm transition hover:border-foreground hover:text-foreground"
                  >
                    <ToolLogo
                      name={tool}
                      domain={toolsByName.get(tool)?.domain}
                      logo={toolsByName.get(tool)?.logo}
                      className="size-5 rounded-sm border-0 p-0.5 transition group-hover:scale-105"
                    />
                    {tool}
                  </Link>
                ))}
              </div>

              <Link
                href={`/search?q=${encodeURIComponent(category.title)}`}
                className="editorial-card-meta mt-6 inline-flex items-center gap-1 text-sm font-medium"
              >
                Explore {category.title.toLowerCase()}
                <ArrowRight className="editorial-card-arrow size-4" />
              </Link>
            </section>
          ))}
        </div>
      </section>
    </main>
  )
}
