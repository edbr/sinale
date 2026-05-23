import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"

import { ArticleCta } from "@/components/article/article-cta"
import { Button } from "@/components/ui/button"
import type { CardItem } from "@/lib/site-content"
import { toolLinks } from "@/lib/tool-links"

type ArticlePageProps = {
  items: CardItem[]
  params: Promise<{ slug: string }>
  parentHref: string
  parentLabel: string
}

const ctasBySlug: Record<string, { tool: string; href: string }> = {
  "ai-coding-stack": { tool: "Cursor", href: toolLinks.cursor },
  "ai-product-design": { tool: "Figma", href: toolLinks.figma },
  "ai-research-stack": { tool: "Perplexity", href: toolLinks.perplexity },
  claude: { tool: "Claude", href: toolLinks.claude },
  cursor: { tool: "Cursor", href: toolLinks.cursor },
  granola: { tool: "Granola", href: toolLinks.granola },
  lovable: { tool: "Lovable", href: toolLinks.lovable },
  "notion-ai-vs-chatgpt": { tool: "Notion AI", href: toolLinks.notion },
  perplexity: { tool: "Perplexity", href: toolLinks.perplexity },
  replit: { tool: "Replit", href: toolLinks.replit },
}

export async function ArticlePage({
  items,
  params,
  parentHref,
  parentLabel,
}: ArticlePageProps) {
  const { slug } = await params
  const item = items.find((entry) => entry.href.endsWith(`/${slug}`))
  const cta = ctasBySlug[slug]

  if (!item) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <article className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <Button asChild variant="ghost" className="mb-10 px-0">
          <Link href={parentHref}>
            <ArrowLeft />
            {parentLabel}
          </Link>
        </Button>

        <p className="mb-4 text-sm font-medium text-muted-foreground">
          {parentLabel}
        </p>
        <h1 className="text-5xl font-semibold tracking-tight md:text-6xl">
          {item.title}
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          {item.description}
        </p>

        {cta ? (
          <ArticleCta tool={cta.tool} href={cta.href} placement="top" />
        ) : null}

        <div className="mt-12 rounded-lg border bg-card p-6">
          <h2 className="text-xl font-semibold">Coming next</h2>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            This page is ready for the full article: evaluation criteria,
            recommended workflow, pricing notes, alternatives, and a clear
            recommendation.
          </p>
        </div>

        {cta ? (
          <>
            <ArticleCta tool={cta.tool} href={cta.href} placement="mid" />
            <ArticleCta tool={cta.tool} href={cta.href} placement="bottom" />
          </>
        ) : null}
      </article>
    </main>
  )
}
