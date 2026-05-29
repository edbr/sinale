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
  "Startups and SMBs that want an AI BDR for outbound",
  "Teams that need lead discovery, enrichment, outreach, replies, and booking together",
  "Founders who want to launch outbound before hiring a full SDR team",
  "Sales teams that want autonomous email and social campaigns with approval controls",
  "Companies that can manage credits, deliverability, and campaign guardrails carefully",
]

const notFor = [
  "Teams that only need a lightweight email writing assistant",
  "Organizations that want human control over every prospecting step",
  "Call-heavy teams expecting an AI agent to make calls directly",
  "Companies without a clear ICP, offer, or outbound message",
  "Teams that cannot monitor automated replies, meeting booking, and data quality",
]

const features = [
  {
    title: "Ava, the AI BDR",
    body: "Artisan's main product is Ava, an autonomous AI BDR that can source leads, write personalized outreach, handle replies, and book meetings.",
  },
  {
    title: "Lead Discovery",
    body: "Ava can search B2B contacts, build targeted lists, enrich records, and use prospect or company signals to identify people to contact.",
  },
  {
    title: "Autonomous Campaigns",
    body: "Artisan supports outbound campaigns where Ava writes messages, sends sequences, tests variations, follows up, and adapts based on campaign performance.",
  },
  {
    title: "Reply Handling",
    body: "Ava can read replies, handle objections, answer questions, and schedule qualified meetings on the team's calendar.",
  },
  {
    title: "Deliverability Tools",
    body: "Paid plans include deliverability monitoring, with sending infrastructure such as mailboxes and phone numbers billed separately from credits.",
  },
  {
    title: "CRM and Workflow Integrations",
    body: "Artisan supports HubSpot, Salesforce on higher plans, Slack, calendars, and webhooks or custom data sources depending on the plan.",
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

export function ArtisanToolPage({ relatedItems }: { relatedItems: CardItem[] }) {
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
        <ToolLogo name="Artisan" className="mb-5 size-12 rounded-lg" />
        <h1 className="text-3xl font-medium tracking-tight md:text-4xl">
          Artisan
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          Artisan is listed in Sinale&apos;s AI sales directory for Ava, AI BDR
          workflows, autonomous outbound, lead discovery, enrichment, email and
          social campaigns, reply handling, meeting booking, and sales
          automation.
        </p>

        <div className="mt-8 space-y-5 text-lg leading-8 text-muted-foreground">
          <p>
            Artisan is an AI sales platform built around Ava, an autonomous AI
            BDR. Ava is designed to find leads, enrich records, write
            personalized outreach, send campaigns, handle replies, and book
            meetings with less day-to-day work from a human SDR.
          </p>
          <p>
            The pitch is different from a sales email coach or a traditional
            sequencer. Artisan is not just helping a rep write a better email;
            it is trying to run more of the outbound motion itself, from list
            building through follow-up and scheduling.
          </p>
          <p>
            That makes Artisan useful for lean teams that want outbound coverage
            quickly, but it also raises the bar for oversight. Automated
            prospecting still needs a clear ICP, reliable data, deliverability
            discipline, message guardrails, and human review where risk is high.
          </p>
        </div>

        <ArticleCta tool="Artisan" href={toolLinks.artisan} placement="top" />

        <section className="mt-12 rounded-lg border bg-card p-6">
          <h2 className="text-2xl font-semibold">Quick Verdict</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Artisan is best for teams that want to test or scale AI-run outbound
            without assembling separate tools for lead data, enrichment,
            personalization, sequencing, reply handling, and meeting booking.
            It is especially interesting for founders and small sales teams
            that want an AI BDR before adding more headcount.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Skip it if your main need is coaching human-written emails, running
            highly custom enterprise sales plays, or managing a phone-first
            outbound motion. Ava can queue call tasks and context, but Artisan
            says Ava does not legally make calls herself.
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
          <h2 className="text-2xl font-semibold">What Artisan Does</h2>
          <div className="mt-5 grid gap-4">
            {features.map((feature) => (
              <div key={feature.title} className="rounded-lg border bg-card p-5">
                <h3 className="font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {feature.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            Artisan for Autonomous Outbound
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Ava&apos;s strongest use case is end-to-end outbound. You define the
            audience and campaign goals, then Ava can find prospects, enrich
            them, personalize messages, send sequences, follow up, handle
            objections, and book meetings.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            That is a good fit when the team&apos;s bottleneck is execution speed.
            It is a weaker fit when the team has not yet proven the audience,
            offer, message, or sales process. AI can scale a working motion, but
            it can also scale weak targeting very efficiently.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Controls and Guardrails</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Artisan positions Ava as autonomous by default but adjustable by
            design. Teams can use approvals, lock tone and CTA, set budget caps,
            choose channels, define routing rules, coach Ava with instructions,
            control reply sensitivity, and pause campaigns when needed.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Use those controls seriously. Early campaigns should be reviewed for
            target quality, claims, personalization accuracy, objection handling,
            meeting qualification, unsubscribe behavior, and CRM hygiene before
            letting Ava run hands-off.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Pricing Notes</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Artisan publishes a free plan with 300 credits per month. New
            accounts can start a 30-day trial with 10,000 credits, positioned as
            about $300 of value, with no credit card required.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Paid plans include Intern at $250 per month when billed annually
            with 12,000 credits per month, and Employee at $600 per month when
            billed annually with 30,000 credits per month. Enterprise is custom
            with flexible plans and custom volume.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Credits power actions such as email enrichment, phone enrichment,
            end-to-end campaigns, website visitor identification, autonomous
            replies, and research. Artisan says most campaigns start around 20
            credits per enrolled prospect, with heavier personalization and
            longer sequences using more.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Remember that sending infrastructure is separate from credits.
            Artisan notes that mailboxes and phone numbers are billed separately
            in dollars, and the human power dialer is listed as an additional
            per-seat monthly cost.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Final Recommendation</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Choose Artisan if you want an AI BDR that can own a meaningful
            amount of outbound execution and you are ready to manage the system
            like a sales channel, not a casual writing assistant.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Before scaling, run a small controlled campaign, inspect the data,
            review messages, monitor deliverability, audit booked meetings, and
            compare pipeline created against total credit and infrastructure
            spend. Ava is most valuable when there is a proven outbound motion
            for the automation to amplify.
          </p>
        </section>

        <ArticleCta tool="Artisan" href={toolLinks.artisan} placement="bottom" />

        <RelatedContent title="More tools" items={relatedItems} />

        <GiscusComments />
      </article>
    </main>
  )
}
