import Link from "next/link"
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Braces,
  Bug,
  CalendarDays,
  ClipboardCheck,
  Code2,
  DatabaseZap,
  FileQuestion,
  FileText,
  Mail,
  Map,
  Megaphone,
  PenTool,
  Phone,
  RefreshCw,
  Rocket,
  Search,
  Share2,
  ShieldCheck,
  Users,
  type LucideIcon,
} from "lucide-react"

import { ToolLogo } from "@/components/site/tool-logo"
import { Button } from "@/components/ui/button"
import { pillars, type CardItem } from "@/lib/site-content"
import { cn } from "@/lib/utils"

type SectionPageProps = {
  title: string
  description: string
  items?: CardItem[]
  eyebrow?: string
  showRoleBrowse?: boolean
  cardVisual?: "logos" | "workflow-icons"
  styleVariant?: "default" | "poster"
}

type WorkflowIconConfig = {
  icon: LucideIcon
  className: string
}

const workflowIcons: Record<string, WorkflowIconConfig> = {
  "building-saas-mvp-with-ai": {
    icon: Rocket,
    className: "bg-emerald-100 text-emerald-700 border-emerald-200",
  },
  "ai-product-design": {
    icon: PenTool,
    className: "bg-rose-100 text-rose-700 border-rose-200",
  },
  "ai-coding-stack": {
    icon: Code2,
    className: "bg-sky-100 text-sky-700 border-sky-200",
  },
  "ai-research-stack": {
    icon: Search,
    className: "bg-amber-100 text-amber-700 border-amber-200",
  },
  "customer-interview-synthesis-ai": {
    icon: Users,
    className: "bg-teal-100 text-teal-700 border-teal-200",
  },
  "ai-user-persona-builder": {
    icon: Users,
    className: "bg-cyan-100 text-cyan-700 border-cyan-200",
  },
  "ai-feature-prioritization": {
    icon: ClipboardCheck,
    className: "bg-lime-100 text-lime-700 border-lime-200",
  },
  "ai-prd-drafting": {
    icon: FileText,
    className: "bg-indigo-100 text-indigo-700 border-indigo-200",
  },
  "ai-product-roadmap-review": {
    icon: Map,
    className: "bg-violet-100 text-violet-700 border-violet-200",
  },
  "ai-sprint-planning": {
    icon: CalendarDays,
    className: "bg-orange-100 text-orange-700 border-orange-200",
  },
  "ai-release-notes": {
    icon: Megaphone,
    className: "bg-fuchsia-100 text-fuchsia-700 border-fuchsia-200",
  },
  "ai-bug-triage": {
    icon: Bug,
    className: "bg-red-100 text-red-700 border-red-200",
  },
  "ai-code-review": {
    icon: ShieldCheck,
    className: "bg-green-100 text-green-700 border-green-200",
  },
  "ai-test-plan-generator": {
    icon: FileQuestion,
    className: "bg-yellow-100 text-yellow-700 border-yellow-200",
  },
  "ai-documentation": {
    icon: BookOpen,
    className: "bg-blue-100 text-blue-700 border-blue-200",
  },
  "ai-api-documentation": {
    icon: Braces,
    className: "bg-purple-100 text-purple-700 border-purple-200",
  },
  "ai-landing-page-copy": {
    icon: PenTool,
    className: "bg-pink-100 text-pink-700 border-pink-200",
  },
  "ai-seo-brief": {
    icon: Search,
    className: "bg-stone-100 text-stone-700 border-stone-200",
  },
  "ai-content-refresh": {
    icon: RefreshCw,
    className: "bg-emerald-100 text-emerald-700 border-emerald-200",
  },
  "ai-newsletter": {
    icon: Mail,
    className: "bg-sky-100 text-sky-700 border-sky-200",
  },
  "ai-social-content-repurposing": {
    icon: Share2,
    className: "bg-violet-100 text-violet-700 border-violet-200",
  },
  "ai-sales-prospect-research": {
    icon: Search,
    className: "bg-cyan-100 text-cyan-700 border-cyan-200",
  },
  "ai-cold-email": {
    icon: Mail,
    className: "bg-amber-100 text-amber-700 border-amber-200",
  },
  "ai-sales-call-prep": {
    icon: Phone,
    className: "bg-lime-100 text-lime-700 border-lime-200",
  },
  "ai-crm-cleanup": {
    icon: DatabaseZap,
    className: "bg-teal-100 text-teal-700 border-teal-200",
  },
}

function getCardLogoTool(item: CardItem) {
  if (item.domain || item.logo) {
    return item.title
  }

  const comparisonMatch = item.title.match(/^(.+?)\s+vs\s+/i)

  if (comparisonMatch?.[1]) {
    return comparisonMatch[1]
  }

  const reviewMatch = item.title.match(/^(.+?)\s+Review\b/i)

  if (reviewMatch?.[1]) {
    return reviewMatch[1]
  }

  if (item.href.includes("ai-meeting-assistants")) return "Granola"
  if (item.href.includes("ai-coding-assistants")) return "Cursor"
  if (item.href.includes("designers")) return "Figma AI"
  if (item.href.includes("product-managers")) return "ChatGPT"
  if (item.href.includes("founders")) return "ChatGPT"

  return item.title
}

function getComparisonLogoTools(title: string) {
  const match = title.match(/^(.*?)\s+vs\s+(.*?)(?:\s+\(|:|$)/i)

  if (!match) {
    return []
  }

  return [match[1].trim(), match[2].trim()]
}

function WorkflowIcon({ item }: { item: CardItem }) {
  const workflowSlug = item.href.split("/").at(-1) ?? ""
  const config = workflowIcons[workflowSlug] ?? {
    icon: Rocket,
    className: "bg-secondary text-secondary-foreground border-border",
  }
  const Icon = config.icon

  return (
    <div
      className={`flex size-10 shrink-0 items-center justify-center rounded-lg border ${config.className}`}
    >
      <Icon className="size-5" />
    </div>
  )
}

export function SectionPage({
  title,
  description,
  items = [],
  eyebrow = "Stack Signal",
  showRoleBrowse = false,
  cardVisual = "logos",
  styleVariant = "default",
}: SectionPageProps) {
  const isPoster = styleVariant === "poster"
  const roleItems = pillars.filter(
    (pillar) => !["Reviews", "Comparisons"].includes(pillar.title)
  )

  return (
    <main className={cn("min-h-screen bg-background text-foreground", isPoster && "hero-glow")}>
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <Button
          asChild
          variant={isPoster ? "outline" : "ghost"}
          className={cn(
            "mb-10",
            isPoster
              ? "rounded-none border-2 border-foreground bg-transparent font-black uppercase tracking-[0.12em] hover:bg-accent"
              : "px-0"
          )}
        >
          <Link href="/">
            <ArrowLeft />
            Home
          </Link>
        </Button>

        <p
          className={cn(
            "mb-4",
            isPoster
              ? "text-xs font-black uppercase tracking-[0.34em] text-primary"
              : "text-sm font-medium text-muted-foreground"
          )}
        >
          {eyebrow}
        </p>
        <h1
          className={cn(
            "max-w-4xl",
            isPoster
              ? "font-heading text-6xl font-black uppercase leading-[0.86] tracking-normal md:text-8xl"
              : "text-5xl font-semibold tracking-tight md:text-7xl"
          )}
        >
          {title}
        </h1>
        <p className={cn("mt-6 max-w-2xl text-lg leading-8 text-muted-foreground", isPoster && "font-medium")}>
          {description}
        </p>

        {items.length > 0 ? (
          <div
            className={cn(
              "mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3",
              isPoster && "border-2 border-foreground bg-[#fff7d8] p-4 shadow-[12px_12px_0_rgba(51,33,22,0.16)]"
            )}
          >
            {items.map((item) => {
              const comparisonTools = getComparisonLogoTools(item.title)

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "group bg-card p-6 transition hover:-translate-y-1",
                    isPoster
                      ? "border-2 border-foreground shadow-[6px_6px_0_rgba(51,33,22,0.16)] hover:bg-background hover:shadow-[10px_10px_0_rgba(51,33,22,0.18)]"
                      : "rounded-lg border hover:shadow-lg"
                  )}
                >
                  <div className="mb-5 flex items-start justify-between gap-4">
                    {cardVisual === "workflow-icons" ? (
                      <WorkflowIcon item={item} />
                    ) : comparisonTools.length === 2 && isPoster ? (
                      <div className="flex items-center gap-2">
                        <ToolLogo
                          name={comparisonTools[0]}
                          domain={item.domain}
                          logo={item.logo}
                          className="size-10 border border-foreground"
                        />
                        <span className="text-xs font-black uppercase tracking-[0.24em] text-primary">
                          vs
                        </span>
                        <ToolLogo
                          name={comparisonTools[1]}
                          className="size-10 border border-foreground"
                        />
                      </div>
                    ) : (
                      <ToolLogo
                        name={getCardLogoTool(item)}
                        domain={item.domain}
                        logo={item.logo}
                        className={cn("size-10", isPoster ? "border border-foreground" : "rounded-lg")}
                      />
                    )}
                    <ArrowRight className="mt-1 size-4 shrink-0 text-muted-foreground transition group-hover:translate-x-1 group-hover:text-foreground" />
                  </div>
                  <h2
                    className={cn(
                      isPoster
                        ? "font-heading text-xl font-black uppercase leading-6"
                        : "text-xl font-semibold"
                    )}
                  >
                    {item.title}
                  </h2>
                  <p className={cn("mt-3 text-sm leading-6 text-muted-foreground", isPoster && "font-medium")}>
                    {item.description}
                  </p>
                  <span
                    className={cn(
                      "mt-6 inline-flex items-center gap-1",
                      isPoster
                        ? "text-xs font-black uppercase tracking-[0.16em] text-primary"
                        : "text-sm font-medium"
                    )}
                  >
                    Read more
                  </span>
                </Link>
              )
            })}
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
