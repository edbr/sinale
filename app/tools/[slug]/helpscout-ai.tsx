import Link from "next/link"
import { ArrowLeft, Check } from "lucide-react"

import { ArticleCta } from "@/components/article/article-cta"
import { GiscusComments } from "@/components/article/giscus-comments"
import { RelatedContent } from "@/components/article/related-content"
import { ToolLogo } from "@/components/site/tool-logo"
import { Button } from "@/components/ui/button"
import { toolLinks } from "@/lib/tool-links"
import type { CardItem } from "@/lib/site-content"

const bestFor = [
  "Small and mid-sized support teams that already like Help Scout",
  "Companies with strong help docs and repeat support questions",
  "Teams that want AI deflection without switching helpdesks",
  "Support leaders who still want easy human escalation",
  "Brands that care about friendly, email-like customer service",
]

const notFor = [
  "Teams that want a standalone AI support platform",
  "Companies that need highly custom autonomous support workflows",
  "Large enterprise teams that need deep call-center routing logic",
  "Teams without good documentation for the AI to learn from",
  "Businesses that want fixed AI automation costs at high resolution volume",
]

const sections = [
  {
    title: "AI Answers",
    body: "AI Answers lets Help Scout answer customer questions from approved knowledge sources inside Beacon. It is best for common support questions, documentation lookup, and first-line deflection before a customer reaches the team.",
  },
  {
    title: "AI Agents",
    body: "AI Agents are where teams configure the knowledge, behavior, tone, guardrails, and source connections behind AI Answers. They do not act independently; they work inside the permissions and settings the team defines.",
  },
  {
    title: "AI Inbox Assistant",
    body: "Help Scout also includes AI assistance inside the inbox, helping support agents work faster with customer conversations while keeping the human support workflow intact.",
  },
  {
    title: "AI Drafts",
    body: "On higher plans, AI Drafts help agents create replies faster. This is useful when the team wants acceleration and consistency without fully handing customer conversations to automation.",
  },
]

function CheckList({ items }: { items: string[] }) {
  return (
    <div className="mt-4 grid gap-2 text-sm">
      {items.map((item) => (
        <p key={item} className="flex gap-2">
          <Check className="mt-0.5 size-4 shrink-0" />
          <span>{item}</span>
        </p>
      ))}
    </div>
  )
}

export function HelpscoutAiToolPage({ relatedItems }: { relatedItems: CardItem[] }) {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <article className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <Button asChild variant="ghost" className="mb-10 px-0">
          <Link href="/tools">
            <ArrowLeft />
            Tools
          </Link>
        </Button>

        <p className="mb-4 text-sm font-medium text-muted-foreground">Tools</p>
        <ToolLogo name="Help Scout AI" className="mb-5 size-12 rounded-lg" />
        <h1 className="text-3xl font-medium tracking-tight md:text-4xl">
          Help Scout AI
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          Help Scout AI is listed in Sinale&apos;s AI customer support directory
          for support agents, helpdesk automation, customer service AI, and
          deflection.
        </p>

        <div className="mt-8 space-y-5 text-lg leading-8 text-muted-foreground">
          <p>
            Help Scout AI is not a separate support product. It is the AI layer
            inside Help Scout&apos;s customer support platform, built around the
            shared inbox, Beacon, Docs, workflows, live chat, and customer
            conversations.
          </p>
          <p>
            The main reason to choose it is simple: your team already wants a
            friendly helpdesk, and you want AI to reduce repetitive tickets
            without turning support into a fully automated black box.
          </p>
          <p>
            The main reason to be careful is pricing and scope. AI Answers is a
            per-resolution add-on, and the quality of the system depends heavily
            on the quality of your help center, public sources, guardrails, and
            support process.
          </p>
        </div>

        <ArticleCta tool="Help Scout" href={toolLinks.helpscout} placement="top" />

        <section className="mt-12 rounded-lg border bg-card p-6">
          <h2 className="text-2xl font-semibold">Quick Verdict</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Help Scout AI is a good fit for small and mid-sized support teams
            that want AI answers, AI drafts, inbox assistance, and customer
            deflection inside a familiar support desk.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            It is strongest when your documentation is already solid and your
            team wants automation that hands off gracefully to humans. It is
            weaker when you need a standalone AI agent platform, deep enterprise
            orchestration, or predictable flat-rate AI automation at high
            volume.
          </p>
        </section>

        <section className="mt-12 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border bg-card p-5">
            <h2 className="text-2xl font-semibold">Best For</h2>
            <CheckList items={bestFor} />
          </div>

          <div className="rounded-lg border bg-card p-5">
            <h2 className="text-2xl font-semibold">Not Best For</h2>
            <CheckList items={notFor} />
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">What Help Scout AI Does</h2>
          <div className="mt-5 grid gap-4">
            {sections.map((section) => (
              <div key={section.title} className="rounded-lg border bg-card p-5">
                <h3 className="font-semibold">{section.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {section.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            Help Scout AI for Support Agents
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            For support agents, Help Scout AI is most useful as an assistant
            inside an existing inbox. It can help create drafts, reduce
            repetitive writing, and keep responses closer to the team&apos;s
            support style.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            This matters because many support teams do not want AI to replace
            agents outright. They want faster replies, better first drafts,
            fewer repetitive tickets, and cleaner escalation when a customer
            needs a person.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            Help Scout AI for Deflection
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            AI Answers is the deflection layer. It uses your selected knowledge
            sources to answer common questions inside Beacon, then lets the
            customer continue to a human channel when the answer is not enough.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            The best use cases are repetitive questions about setup, billing,
            account access, policies, product behavior, troubleshooting, and
            other topics that are already covered in your docs.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            Help Scout AI Setup and Guardrails
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Help Scout&apos;s AI Agent settings are important because they define
            what the AI can use, how it should speak, and which topics should
            be escalated. Teams can add Help Scout Docs, public websites,
            files, spreadsheets, and smaller improvement notes as knowledge
            sources.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            This makes Help Scout AI more practical for support teams that care
            about accuracy. You still need to maintain the underlying docs,
            review unanswered conversations, add improvements, and keep sources
            up to date.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Pricing Notes</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Help Scout&apos;s paid plans are seat-based, and AI availability
            depends on the feature. The Standard plan includes AI Inbox
            assistant, Plus includes unlimited AI Drafts, and AI Answers is a
            separate add-on priced per resolution.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            That pricing can work well if AI Answers meaningfully reduces human
            workload. It can also become harder to forecast if your support
            volume grows quickly, so teams should model expected resolution
            volume before rolling it out broadly.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Final Recommendation</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Choose Help Scout AI if you want practical AI inside a support desk
            that still feels human. It is especially good for teams that value a
            clean inbox, useful docs, customer-friendly escalation, and gradual
            automation.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Look elsewhere if you need an AI-first support platform with deeper
            autonomous workflows, fixed AI resolution pricing, or highly custom
            enterprise automation. Help Scout AI is best as a thoughtful AI
            upgrade to Help Scout, not as a replacement for every support
            operations system.
          </p>
        </section>

        <ArticleCta tool="Help Scout" href={toolLinks.helpscout} placement="bottom" />

        <RelatedContent title="More tools" items={relatedItems} />

        <GiscusComments />
      </article>
    </main>
  )
}
