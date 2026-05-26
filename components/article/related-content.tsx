import Link from "next/link"
import { ArrowRight } from "lucide-react"

import type { CardItem } from "@/lib/site-content"

type RelatedContentProps = {
  title?: string
  items: CardItem[]
}

export function RelatedContent({
  title = "Keep reading",
  items,
}: RelatedContentProps) {
  if (items.length === 0) {
    return null
  }

  return (
    <section className="mt-12 border-t pt-10">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <div className="mt-5 grid gap-3">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="group rounded-lg border bg-card p-4 transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-semibold leading-6">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {item.description}
                </p>
              </div>
              <ArrowRight className="mt-1 size-4 shrink-0 text-muted-foreground transition group-hover:translate-x-1 group-hover:text-foreground" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
