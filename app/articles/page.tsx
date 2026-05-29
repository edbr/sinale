import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"

import { GiscusComments } from "@/components/article/giscus-comments"
import { ToolLogo } from "@/components/site/tool-logo"
import { Button } from "@/components/ui/button"
import { articles } from "@/lib/articles"
import { getCategoryPageStyle } from "@/lib/category-theme"
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
    <main
      style={getCategoryPageStyle("Articles:Practical AI workflows")}
      className="category-page min-h-screen bg-background text-foreground"
    >
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-16 md:py-24">
        <Button asChild variant="ghost" className="page-enter mb-10 px-0">
          <Link href="/">
            <ArrowLeft />
            Home
          </Link>
        </Button>

        <p className="page-enter page-enter-delay-1 editorial-eyebrow mb-5">
          Articles
        </p>
        <h1 className="page-enter page-enter-delay-1 editorial-display max-w-5xl">
          Practical AI workflows, written for real product work.
        </h1>
        <p className="page-enter page-enter-delay-2 editorial-deck mt-7">
          Short, useful guides on AI tools, product workflows, research,
          content, analytics, operations, and launch systems.
        </p>

        <div className="page-enter page-enter-delay-3 mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/articles/${article.slug}`}
              className="editorial-card group rounded-lg border bg-card/95 p-5"
            >
              <div className="mb-4 flex items-center justify-between gap-3">
                <span className="editorial-card-meta rounded-full border px-2.5 py-1 text-xs text-muted-foreground">
                  {article.category}
                </span>
                <ArrowRight className="editorial-card-arrow size-4 shrink-0 text-muted-foreground" />
              </div>
              <div className="flex items-start gap-3">
                <ToolLogo
                  name={getArticleLogoTool(article.tool)}
                  className="editorial-card-media mt-0.5 size-9 rounded-lg"
                />
                <h2 className="editorial-card-title text-lg font-semibold">{article.title}</h2>
              </div>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {article.description}
              </p>
            </Link>
          ))}
        </div>

        <GiscusComments />
      </section>
    </main>
  )
}
