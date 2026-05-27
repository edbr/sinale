import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"

import { ToolLogo } from "@/components/site/tool-logo"
import { Button } from "@/components/ui/button"
import { articles } from "@/lib/articles"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata({
  title: "Articles | Sinale",
  description:
    "Practical AI workflow articles for founders, developers, designers, product teams, operators, and analysts.",
  path: "/articles",
})

function getArticleLogoTool(tool: string) {
  return tool.split(/\s+(?:and|or)\s+|,/)[0]?.trim() ?? tool
}

export default function ArticlesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <Button asChild variant="ghost" className="mb-10 px-0">
          <Link href="/">
            <ArrowLeft />
            Home
          </Link>
        </Button>

        <p className="mb-4 text-sm font-medium text-muted-foreground">
          Articles
        </p>
        <h1 className="max-w-4xl text-5xl font-semibold tracking-tight md:text-7xl">
          Practical AI workflows, written for real product work.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
          Short, useful guides on AI tools, product workflows, research,
          content, analytics, operations, and launch systems.
        </p>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/articles/${article.slug}`}
              className="group rounded-lg border bg-card p-5 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4 flex items-center justify-between gap-3">
                <span className="rounded-full border px-2.5 py-1 text-xs text-muted-foreground">
                  {article.category}
                </span>
                <ArrowRight className="size-4 shrink-0 text-muted-foreground transition group-hover:translate-x-1 group-hover:text-foreground" />
              </div>
              <div className="flex items-start gap-3">
                <ToolLogo
                  name={getArticleLogoTool(article.tool)}
                  className="mt-0.5 size-9 rounded-lg"
                />
                <h2 className="text-lg font-semibold">{article.title}</h2>
              </div>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {article.description}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
