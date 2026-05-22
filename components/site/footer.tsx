import Link from "next/link"

const footerGroups = [
  {
    title: "Content",
    links: [
      { label: "Comparisons", href: "/comparisons" },
      { label: "Reviews", href: "/reviews" },
      { label: "Workflows", href: "/workflows" },
      { label: "Tools", href: "/tools" },
    ],
  },
  {
    title: "Roles",
    links: [
      { label: "Designers", href: "/designers" },
      { label: "Developers", href: "/developers" },
      { label: "Product Managers", href: "/product-managers" },
      { label: "Data & Analytics", href: "/analytics" },
      { label: "Founders", href: "/founders" },
    ],
  },
  {
    title: "Popular",
    links: [
      { label: "Cursor vs Claude Code", href: "/comparisons/cursor-vs-claude-code" },
      { label: "Claude vs ChatGPT", href: "/comparisons/claude-vs-chatgpt" },
      { label: "AI Coding Stack", href: "/workflows/ai-coding-stack" },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t bg-secondary/30">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-[1.2fr_2fr]">
        <div>
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <span className="flex size-8 items-center justify-center rounded-lg bg-foreground text-sm text-background">
              S
            </span>
            <span>Stack Signal</span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-6 text-muted-foreground">
            Practical AI tool reviews, workflows, and comparisons for modern
            tech teams.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-3">
          {footerGroups.map((group) => (
            <div key={group.title}>
              <h2 className="text-sm font-medium">{group.title}</h2>
              <div className="mt-3 grid gap-2">
                {group.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-muted-foreground transition hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-5 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright 2026 Stack Signal</p>
          <p>Independent AI tool guidance for builders.</p>
        </div>
      </div>
    </footer>
  )
}
