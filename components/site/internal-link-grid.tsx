import Link from "next/link"
import { ArrowRight } from "lucide-react"

const internalLinkGroups = [
  {
    title: "Start with a role",
    links: [
      { label: "AI tools for designers", href: "/designers" },
      { label: "AI tools for developers", href: "/developers" },
      { label: "AI tools for product managers", href: "/product-managers" },
      { label: "AI tools for founders", href: "/founders" },
    ],
  },
  {
    title: "Compare tools",
    links: [
      { label: "Cursor vs Claude Code", href: "/comparisons/cursor-vs-claude-code" },
      { label: "Claude vs ChatGPT", href: "/comparisons/claude-vs-chatgpt" },
      { label: "Lovable vs Bolt", href: "/comparisons/lovable-vs-bolt" },
      { label: "All comparisons", href: "/comparisons" },
    ],
  },
  {
    title: "Read reviews",
    links: [
      { label: "Cursor review", href: "/reviews/cursor-review" },
      { label: "Claude review", href: "/reviews/claude-review" },
      { label: "ChatGPT review", href: "/reviews/chatgpt-review" },
      { label: "All reviews", href: "/reviews" },
    ],
  },
  {
    title: "Browse workflows",
    links: [
      { label: "Building a SaaS MVP with AI", href: "/workflows/building-saas-mvp-with-ai" },
      { label: "AI coding stack", href: "/workflows/ai-coding-stack" },
      { label: "AI product design", href: "/workflows/ai-product-design" },
      { label: "All workflows", href: "/workflows" },
    ],
  },
]

export function InternalLinkGrid() {
  return (
    <section className="border-t bg-background">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="mb-8">
          <p className="text-sm font-medium text-muted-foreground">
            Explore more
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight">
            Find related AI tool guides, reviews, and workflows.
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {internalLinkGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-medium">{group.title}</h3>
              <div className="mt-3 grid gap-2">
                {group.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="group flex items-center justify-between gap-3 rounded-lg border bg-card px-3 py-2.5 text-sm text-muted-foreground transition hover:border-foreground/30 hover:text-foreground"
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="size-3.5 shrink-0 transition group-hover:translate-x-0.5" />
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
