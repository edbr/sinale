import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Check } from "lucide-react"

import { GiscusComments } from "@/components/article/giscus-comments"
import { RelatedContent } from "@/components/article/related-content"
import { Button } from "@/components/ui/button"
import { articles, getArticle } from "@/lib/articles"
import { pageMetadata } from "@/lib/seo"

type ArticleRouteProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }))
}

export async function generateMetadata({ params }: ArticleRouteProps) {
  const { slug } = await params
  const article = getArticle(slug)

  return pageMetadata({
    title: article ? `${article.title} | Sinale` : "Article | Sinale",
    description:
      article?.description ??
      "Practical AI workflow articles for modern software teams.",
    path: `/articles/${slug}`,
  })
}

function Checklist({ items }: { items: string[] }) {
  return (
    <div className="mt-4 grid gap-2 text-sm leading-6 text-muted-foreground">
      {items.map((item) => (
        <p key={item} className="flex gap-2">
          <Check className="mt-1 size-4 shrink-0 text-foreground" />
          {item}
        </p>
      ))}
    </div>
  )
}

export default async function ArticlePage({ params }: ArticleRouteProps) {
  const { slug } = await params
  const article = getArticle(slug)

  if (!article) {
    notFound()
  }

  const relatedArticles = articles
    .filter((entry) => entry.slug !== article.slug)
    .sort((a, b) => {
      if (a.category === article.category && b.category !== article.category) {
        return -1
      }

      if (a.category !== article.category && b.category === article.category) {
        return 1
      }

      return 0
    })
    .slice(0, 3)
    .map((entry) => ({
      title: entry.title,
      description: entry.description,
      href: `/articles/${entry.slug}`,
    }))

  return (
    <main className="min-h-screen bg-background text-foreground">
      <article className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <Button
          asChild
          variant="outline"
          className="mb-10 rounded-none border-orange-900/20 bg-transparent font-semibold hover:bg-accent"
        >
          <Link href="/articles">
            <ArrowLeft />
            Articles
          </Link>
        </Button>

        <p className="mb-4 text-xs font-black uppercase tracking-[0.22em] text-primary">
          {article.category}
        </p>
        <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
          {article.title}
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          {article.description}
        </p>

        <section className="mt-12 space-y-5 leading-7 text-muted-foreground">
          <p>
            AI tools are most useful when they are attached to a specific job.
            For {article.audience}, the goal is not to add another shiny tool to
            the stack. The goal is to create a repeatable workflow that produces
            a better decision, draft, prototype, analysis, or handoff.
          </p>
          <p>{article.angle}</p>
          <p>
            In practice, that means using {article.tool} as part of a bounded
            process. Give the tool enough context to be useful, keep the output
            connected to real work, and make the human review step explicit.
          </p>
        </section>

        <section className="mt-12 border border-orange-900/20 bg-card p-6">
          <h2 className="text-2xl font-semibold">The Workflow</h2>
          <p className="mt-3 leading-7 text-muted-foreground">
            Use this as a simple starting point. The exact details can change,
            but the sequence keeps the work focused.
          </p>
          <Checklist items={article.steps} />
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">What Good Looks Like</h2>
          <div className="mt-5 space-y-5 leading-7 text-muted-foreground">
            <p>
              The output should make the next step easier. If the workflow ends
              with more ambiguity, more tabs, or a longer list of unresolved
              ideas, it is not doing its job.
            </p>
            <p>
              A strong result gives you {article.outcome}. It should also leave
              a trail: what information went in, what assumptions were made, and
              what still needs human judgment.
            </p>
          </div>
        </section>

        <section className="mt-12 border border-orange-900/20 bg-card p-6">
          <h2 className="text-2xl font-semibold">Common Mistakes</h2>
          <Checklist items={article.pitfalls} />
        </section>

        <section className="mt-12 border-l-4 border-primary bg-[#fff7d8] p-6">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-primary">
            Bottom line
          </p>
          <h2 className="mt-2 text-xl font-semibold">
            Keep the human edit in the loop.
          </h2>
          <p className="mt-3 leading-7 text-muted-foreground">
            Start small, make the workflow observable, and keep responsibility
            with the person doing the work. AI should reduce friction, but it
            should not remove taste, judgment, or accountability.
          </p>
        </section>

        <RelatedContent items={relatedArticles} variant="editorial" />

        <GiscusComments />
      </article>
    </main>
  )
}
