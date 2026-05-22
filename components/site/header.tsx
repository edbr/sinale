import Link from "next/link"
import { Search } from "lucide-react"

import { Button } from "@/components/ui/button"

const primaryNav = [
  { label: "Comparisons", href: "/comparisons" },
  { label: "Reviews", href: "/reviews" },
  { label: "Workflows", href: "/workflows" },
  { label: "Tools", href: "/tools" },
]

const roleNav = [
  { label: "Designers", href: "/designers" },
  { label: "Developers", href: "/developers" },
  { label: "PMs", href: "/product-managers" },
  { label: "Analytics", href: "/analytics" },
  { label: "Founders", href: "/founders" },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-3">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <span className="flex size-8 items-center justify-center rounded-lg bg-foreground text-sm text-background">
            S
          </span>
          <span>Stack Signal</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition hover:bg-secondary hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Button asChild variant="outline" size="sm" className="rounded-full">
          <Link href="/search">
            <Search />
            Search
          </Link>
        </Button>
      </div>

      <div className="border-t md:hidden">
        <nav className="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-6 py-2">
          {[...primaryNav, ...roleNav].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="shrink-0 rounded-lg px-3 py-1.5 text-sm text-muted-foreground transition hover:bg-secondary hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
