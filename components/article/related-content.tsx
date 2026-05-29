import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { ToolLogo } from "@/components/site/tool-logo"
import type { CardItem } from "@/lib/site-content"
import { cn } from "@/lib/utils"

type RelatedContentProps = {
  title?: string
  items: CardItem[]
  variant?: "default" | "editorial"
}

export function RelatedContent({
  title = "Keep reading",
  items,
  variant = "default",
}: RelatedContentProps) {
  if (items.length === 0) {
    return null
  }

  const isEditorial = variant === "editorial"

  return (
    <section
      className={cn(
        "mt-12",
        isEditorial
          ? "rounded-2xl border bg-secondary/50 px-0 py-8"
          : "border-t pt-10"
      )}
    >
      <div className={cn(isEditorial && "mb-6 flex items-end justify-between gap-4 px-5")}>
        <div>
          {isEditorial ? (
            <p className="mb-2 text-sm font-semibold text-primary">
              Next reads
            </p>
          ) : null}
          <h2
            className={cn(
              isEditorial
                ? "font-heading text-3xl font-semibold tracking-normal"
                : "text-2xl font-semibold"
            )}
          >
            {title}
          </h2>
        </div>
        {isEditorial ? (
          <div className="hidden h-px flex-1 bg-border sm:block" />
        ) : null}
      </div>
      <div className={cn(isEditorial ? "grid" : "mt-5 grid gap-3")}>
        {items.map((item, index) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "editorial-card group",
              isEditorial
                ? "border-t bg-transparent px-5 py-5 last:border-b hover:bg-background/60"
                : "rounded-lg border bg-card p-4"
            )}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <div className="flex items-start gap-3">
                  {isEditorial ? (
                    <span className="mt-1 w-8 shrink-0 text-sm font-semibold text-primary">
                      0{index + 1}
                    </span>
                  ) : (
                    <ToolLogo
                      name={item.title}
                      domain={item.domain}
                      logo={item.logo}
                      className="editorial-card-media"
                    />
                  )}
                  <h3
                    className={cn(
                      "editorial-card-title",
                      isEditorial
                        ? "font-heading text-xl font-semibold leading-6"
                        : "font-semibold leading-6"
                    )}
                  >
                    {item.title}
                  </h3>
                </div>
                <p
                  className={cn(
                    "text-sm leading-6 text-muted-foreground",
                    isEditorial ? "mt-3 pl-11" : "mt-2"
                  )}
                >
                  {item.description}
                </p>
              </div>
              <ArrowRight className="editorial-card-arrow mt-1 size-4 shrink-0 text-muted-foreground" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
