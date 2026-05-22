import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { pillars, type CardItem } from "@/lib/site-content"

type SectionPageProps = {
  title: string
  description: string
  items?: CardItem[]
  eyebrow?: string
  showRoleBrowse?: boolean
}

export function SectionPage({
  title,
  description,
  items = [],
  eyebrow = "Stack Signal",
  showRoleBrowse = false,
}: SectionPageProps) {
  const roleItems = pillars.filter(
    (pillar) => !["Reviews", "Comparisons"].includes(pillar.title)
  )

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
          {eyebrow}
        </p>
        <h1 className="max-w-4xl text-5xl font-semibold tracking-tight md:text-7xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
          {description}
        </p>

        {items.length > 0 ? (
          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group rounded-lg border bg-card p-6 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <h2 className="text-xl font-semibold">{item.title}</h2>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {item.description}
                </p>
                <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium">
                  Read more
                  <ArrowRight className="size-4 transition group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        ) : null}

        {showRoleBrowse ? (
          <section className="mt-20 border-t pt-14">
            <div className="mb-8">
              <h2 className="text-3xl font-semibold tracking-tight">
                Browse by role
              </h2>
              <p className="mt-3 max-w-2xl text-muted-foreground">
                Explore AI tools, reviews, workflows, and recommendations for
                the way each team works.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {roleItems.map((role) => (
                <Link
                  key={role.href}
                  href={role.href}
                  className="group rounded-lg border bg-card p-6 transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="mb-5 flex size-10 items-center justify-center rounded-lg bg-secondary text-secondary-foreground">
                    <role.icon className="size-5" />
                  </div>
                  <h3 className="text-xl font-semibold">{role.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {role.description}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium">
                    Explore
                    <ArrowRight className="size-4 transition group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>
          </section>
        ) : null}
      </section>
    </main>
  )
}
