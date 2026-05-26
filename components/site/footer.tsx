import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"

const footerGroups = [
  {
    title: "Content",
    links: [
      { label: "Comparisons", href: "/comparisons" },
      { label: "Reviews", href: "/reviews" },
      { label: "Best Of", href: "/best" },
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
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Privacy", href: "/privacy" },
      { label: "Disclosure", href: "/disclosure" },
      { label: "Terms", href: "/terms" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/edbelluti/" },
      { label: "GitHub", href: "https://github.com/edbr" },
      { label: "Website", href: "https://edbelluti.com/" },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t bg-secondary/30">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-[1.2fr_2fr]">
        <div>
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Image
              src="/logo.png"
              alt="Sinale logo"
              width={32}
              height={32}
              className="size-8"
            />
            <span>Sinale</span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-6 text-muted-foreground">
            Practical AI tool reviews, workflows, and comparisons for modern
            tech teams.
          </p>
          <Button asChild size="sm" className="mt-5 rounded-full">
            <Link href="https://sinale.beehiiv.com/subscribe">
              Subscribe
            </Link>
          </Button>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {footerGroups.map((group) => (
            <div key={group.title}>
              <h2 className="text-sm font-medium">{group.title}</h2>
              <div className="mt-3 grid gap-2">
                {group.links.map((link) => {
                  const isExternal = link.href.startsWith("http")

                  return isExternal ? (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-muted-foreground transition hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-sm text-muted-foreground transition hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-5 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright 2026 Sinale</p>
          <p>Independent AI tool guidance for builders.</p>
        </div>
      </div>
    </footer>
  )
}
