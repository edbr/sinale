import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Check, ExternalLink } from "lucide-react"

import { GiscusComments } from "@/components/article/giscus-comments"
import { RelatedContent } from "@/components/article/related-content"
import { Button } from "@/components/ui/button"
import { pageMetadata } from "@/lib/seo"
import { getSetupArticle, setupArticles } from "@/lib/setups"

type SetupRouteProps = {
  params: Promise<{ slug: string }>
}

const contextualSetupLinks: Record<string, string[]> = {
  "founder-desk-setup-2026": [
    "remote-work-setup-2026",
    "ai-developer-setup-2026",
    "desk-accessories-cable-management-2026",
  ],
  "content-creator-stack-2026": [
    "founder-desk-setup-2026",
    "remote-work-setup-2026",
    "everyday-tech-essentials-2026",
  ],
  "remote-work-setup-2026": [
    "desk-accessories-cable-management-2026",
    "founder-desk-setup-2026",
    "content-creator-stack-2026",
  ],
  "ai-developer-setup-2026": [
    "founder-desk-setup-2026",
    "remote-work-setup-2026",
    "desk-accessories-cable-management-2026",
  ],
  "everyday-tech-essentials-2026": [
    "founder-desk-setup-2026",
    "remote-work-setup-2026",
    "desk-accessories-cable-management-2026",
  ],
  "desk-accessories-cable-management-2026": [
    "remote-work-setup-2026",
    "founder-desk-setup-2026",
    "ai-developer-setup-2026",
  ],
  "coffee-aficionado-espresso-setup-2026": [
    "founder-desk-setup-2026",
    "content-creator-stack-2026",
    "desk-accessories-cable-management-2026",
  ],
}

export function generateStaticParams() {
  return setupArticles.map((article) => ({ slug: article.slug }))
}

export async function generateMetadata({ params }: SetupRouteProps) {
  const { slug } = await params
  const article = getSetupArticle(slug)

  return pageMetadata({
    title: article ? `${article.title} | Sinale` : "Setup Guide | Sinale",
    description:
      article?.description ??
      "Practical hardware and software setup guides for modern work.",
    path: `/setups/${slug}`,
  })
}

function BulletList({ items }: { items: string[] }) {
  return (
    <div className="mt-4 grid gap-2 text-sm leading-6 text-muted-foreground">
      {items.map((item) => (
        <p key={item} className="flex gap-2">
          <Check className="mt-1 size-4 shrink-0 text-foreground" />
          <span>{item}</span>
        </p>
      ))}
    </div>
  )
}

function RelatedSetupLinks({
  items,
  compact = false,
}: {
  items: { title: string; description: string; href: string }[]
  compact?: boolean
}) {
  if (items.length === 0) {
    return null
  }

  return (
    <aside
      className={
        compact
          ? "rounded-2xl border bg-secondary/50 p-5"
          : "mt-10 rounded-2xl border bg-card p-5 shadow-sm"
      }
    >
      <p className="text-sm font-semibold text-primary">Related setups</p>
      <div className={compact ? "mt-3 grid gap-2" : "mt-4 grid gap-3"}>
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="group block rounded-xl border bg-background p-4 transition hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-sm"
          >
            <h3 className="font-semibold leading-snug group-hover:text-primary">
              {item.title}
            </h3>
            {!compact ? (
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {item.description}
              </p>
            ) : null}
          </Link>
        ))}
      </div>
    </aside>
  )
}

export default async function SetupArticlePage({ params }: SetupRouteProps) {
  const { slug } = await params
  const article = getSetupArticle(slug)

  if (!article) {
    notFound()
  }

  const currentIndex = setupArticles.findIndex(
    (entry) => entry.slug === article.slug
  )
  const relatedItems = [
    ...setupArticles.slice(currentIndex + 1),
    ...setupArticles,
  ]
    .filter((entry) => entry.slug !== article.slug)
    .slice(0, 3)
    .map((entry) => ({
      title: entry.title,
      description: entry.description,
      href: `/setups/${entry.slug}`,
    }))
  const contextualLinks = (contextualSetupLinks[article.slug] ?? [])
    .map((relatedSlug) => setupArticles.find((entry) => entry.slug === relatedSlug))
    .filter((entry): entry is (typeof setupArticles)[number] => Boolean(entry))
    .map((entry) => ({
      title: entry.title,
      description: entry.description,
      href: `/setups/${entry.slug}`,
    }))

  return (
    <main className="min-h-screen bg-background text-foreground">
      <article className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <Button
          asChild
          variant="outline"
          className="mb-10 rounded-full bg-background/70 font-semibold hover:bg-accent"
        >
          <Link href="/setups">
            <ArrowLeft />
            Setups
          </Link>
        </Button>

        <p className="mb-4 text-sm font-semibold text-primary">
          {article.category}
        </p>
        <h1 className="text-3xl font-medium leading-[1.12] tracking-tight md:text-4xl">
          {article.title}
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          {article.description}
        </p>

        <section className="mt-12 space-y-5 text-lg leading-8 text-muted-foreground">
          {article.intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </section>

        <RelatedSetupLinks items={contextualLinks} />

        <div className="mt-14 space-y-14">
          {article.sections.map((section, index) => (
            <div key={section.title} className="space-y-10">
              <section>
                <h2 className="text-2xl font-semibold tracking-tight">
                  {section.title}
                </h2>

                {section.body ? (
                  <div className="mt-4 space-y-4 leading-7 text-muted-foreground">
                    {section.body.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                ) : null}

                {section.items ? (
                  <div className="mt-5 grid gap-4">
                    {section.items.map((item) => (
                      <div key={item.title} className="rounded-2xl border bg-card p-5 shadow-sm">
                        <h3 className="text-lg font-semibold">{item.title}</h3>
                        <div className="mt-3 space-y-3 text-sm leading-6 text-muted-foreground">
                          {item.body.map((paragraph) => (
                            <p key={paragraph}>{paragraph}</p>
                          ))}
                        </div>
                        {item.bullets ? <BulletList items={item.bullets} /> : null}
                      </div>
                    ))}
                  </div>
                ) : null}
              </section>

              {index % 2 === 1 && contextualLinks[index % contextualLinks.length] ? (
                <RelatedSetupLinks
                  compact
                  items={[contextualLinks[index % contextualLinks.length]]}
                />
              ) : null}
            </div>
          ))}
        </div>

        {article.affiliateProducts ? (
          <section className="mt-14 rounded-2xl border bg-card p-6 shadow-sm">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-semibold text-primary">
                  Recommended gear
                </p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight">
                  Related links for this setup
                </h2>
              </div>
              <Link
                href="/disclosure"
                className="text-sm font-medium text-muted-foreground transition hover:text-foreground"
              >
                Affiliate disclosure
              </Link>
            </div>
            <p className="mt-4 text-sm leading-6 text-muted-foreground">
              Some links below are affiliate links. Sinale may earn a commission
              at no additional cost to you.
            </p>

            <div className="mt-6 grid gap-3">
              {article.affiliateProducts.map((product) => (
                <a
                  key={`${product.title}-${product.href}`}
                  href={product.href}
                  target="_blank"
                  rel="nofollow noreferrer sponsored"
                  className="group rounded-xl border bg-background p-4 transition hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-sm"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-semibold">{product.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">
                        {product.description}
                      </p>
                    </div>
                    <ExternalLink className="mt-1 size-4 shrink-0 text-muted-foreground transition group-hover:text-primary" />
                  </div>
                  <span className="mt-4 inline-flex text-sm font-semibold text-primary">
                    View on Amazon
                  </span>
                </a>
              ))}
            </div>
          </section>
        ) : null}

        <section className="mt-14 rounded-2xl border bg-secondary/60 p-6">
          <p className="text-sm font-semibold text-primary">Final thoughts</p>
          <div className="mt-3 space-y-4 leading-7 text-muted-foreground">
            {article.finalThoughts.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <RelatedContent title="More setups" items={relatedItems} variant="editorial" />

        <GiscusComments />
      </article>
    </main>
  )
}
