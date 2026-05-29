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
  "Mid-market and enterprise sales teams modernizing outbound",
  "SDR teams that want AI agents, sequencing, data, signals, and dialing together",
  "Revenue leaders trying to cover more of their TAM without adding headcount",
  "Teams that rely on signal-based prospecting and prioritized call lists",
  "Organizations ready for sales-led onboarding, implementation, and annual contracts",
]

const notFor = [
  "Solo founders who only need simple cold email software",
  "Teams looking for a low-cost self-serve sequencer",
  "Companies without enough outbound volume to justify a platform rollout",
  "Sales teams that want a point solution for email writing only",
  "Organizations not ready to govern AI-generated outreach and CRM updates",
]

const features = [
  {
    title: "RegieOne",
    body: "RegieOne is Regie.ai's AI-native sales engagement platform, combining list building, enrichment, sequencing, signals, calling, analytics, and AI agent orchestration.",
  },
  {
    title: "Prospecting Agents",
    body: "Regie.ai prospecting agents can research accounts, find and enrich contacts, write personalized messages, monitor signals, generate call tasks, and sync activity back to CRM.",
  },
  {
    title: "Signal-Based Outreach",
    body: "The platform uses buyer signals and intent data to prioritize accounts, adjust touch patterns, and decide when, how often, and through which channel to engage.",
  },
  {
    title: "AI SEP",
    body: "Regie.ai offers a modern sales engagement platform with static and dynamic sequencing agents, prompt-based steps, AI messaging, call coaching, social steps, and CRM or SEP integrations.",
  },
  {
    title: "AI Dialer",
    body: "Regie.ai includes power and parallel dialing workflows, prioritized call lists, AI voicemails, call coaching, and sales-floor features depending on the package.",
  },
  {
    title: "Enrichment and Data",
    body: "Regie.ai includes enrichment credits, custom enrichment waterfalls, verification checks, and access to a large B2B contact database on higher-tier packages.",
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

export function RegieToolPage({ relatedItems }: { relatedItems: CardItem[] }) {
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
        <ToolLogo name="Regie.ai" className="mb-5 size-12 rounded-lg" />
        <h1 className="text-3xl font-medium tracking-tight md:text-4xl">
          Regie.ai
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          Regie.ai is listed in Sinale&apos;s AI sales directory for AI sales
          engagement, prospecting agents, signal-based outbound, data
          enrichment, AI dialing, sales automation, and pipeline generation.
        </p>

        <div className="mt-8 space-y-5 text-lg leading-8 text-muted-foreground">
          <p>
            Regie.ai has moved beyond simple AI sequence writing. Its main
            product, RegieOne, is positioned as an AI sales engagement platform
            that brings together prospecting agents, data enrichment, intent
            signals, sequencing, email, social, calling, CRM updates, and
            analytics.
          </p>
          <p>
            The core idea is to make outbound less dependent on manual list
            building and repetitive rep tasks. Regie.ai&apos;s agents can identify
            accounts, enrich contacts, generate personalized touches, monitor
            buying signals, create prioritized call lists, and hand warmer
            opportunities back to sellers.
          </p>
          <p>
            That makes Regie.ai more ambitious than an email coach or a basic
            sequencer. It is closer to an AI-orchestrated prospecting system,
            which also means buyers should evaluate implementation, data
            quality, governance, cost, and sales-process fit before committing.
          </p>
        </div>

        <ArticleCta tool="Regie.ai" href={toolLinks.regie} placement="top" />

        <section className="mt-12 rounded-lg border bg-card p-6">
          <h2 className="text-2xl font-semibold">Quick Verdict</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Regie.ai is strongest for sales organizations that want to
            consolidate outbound execution around AI agents, signals, dialing,
            and engagement workflows. It fits teams that already have a serious
            outbound motion and want more coverage without simply hiring more
            SDRs.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            It is not the lightest option. Smaller teams that only need email
            generation, basic sequencing, or inexpensive contact discovery will
            usually get value faster from narrower tools.
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
          <h2 className="text-2xl font-semibold">What Regie.ai Does</h2>
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
            Regie.ai for AI Prospecting
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Regie.ai&apos;s prospecting agents are designed to do the work around
            the rep: find and enrich ICP contacts, monitor account and buyer
            signals, create relevant outreach, log CRM activity, and tee up
            sales-ready prospects for human follow-up.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            This is valuable when the team&apos;s bottleneck is coverage. If reps
            spend too much time building lists, researching accounts, writing
            first touches, and sorting call priorities, Regie.ai can shift more
            of that repetitive work into the system.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            Regie.ai for Signal Selling
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Regie.ai emphasizes signal-driven prospecting. Instead of only using
            signals as a reason to personalize a single message, the platform
            can change the broader touch pattern: timing, channel, frequency,
            messaging, and handoff based on buyer behavior.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            This matters for teams with enough data and market activity to make
            signals useful. Website visits, job changes, competitor research,
            CRM records, call transcripts, company news, and intent sources can
            all become triggers for better prioritization.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Implementation Notes</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Regie.ai is not just a browser extension or writing assistant. A good
            rollout should define personas, territory rules, CRM ownership,
            approval workflows, data sources, message guardrails, mailbox
            strategy, dialer rules, and success metrics before letting agents
            operate at scale.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            The teams most likely to succeed are the ones that treat Regie.ai as
            a GTM operating system. That means RevOps, sales leadership,
            enablement, and frontline reps need shared rules for what AI can do
            automatically and when a human should review or take over.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Pricing Notes</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Regie.ai publishes pricing for two main packages. AI SEP is listed
            at $180 per user per month on an annual contract with a 10-seat
            minimum. Force Multiplier Rep is listed at $499 per user per month
            on an annual contract with a 5-seat minimum.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Force Multiplier Rep includes everything in AI SEP plus AI and
            enrichment credits, custom enrichment waterfalls, bounce and job
            verification checks, a parallel dialer, mailbox and domain warming,
            research agents, and reasons to engage. Enterprise plans are custom.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Watch add-ons closely. Regie.ai lists additional data packages,
            mailbox rotation pricing, parallel dialer pricing, and professional
            services. The real budget should include seats, credits, mailboxes,
            implementation, enablement, and ongoing RevOps ownership.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Final Recommendation</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Choose Regie.ai if your outbound problem is bigger than writing more
            emails. It is most compelling when you need AI agents to help cover
            more accounts, prioritize real buying signals, warm up prospects,
            feed sellers better call lists, and connect activity back to CRM and
            pipeline.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Do not buy it casually. Before committing, model the seat minimums,
            add-ons, data volume, implementation effort, and governance burden.
            The platform makes the most sense when the expected pipeline lift is
            large enough to justify a serious sales-operations rollout.
          </p>
        </section>

        <ArticleCta tool="Regie.ai" href={toolLinks.regie} placement="bottom" />

        <RelatedContent title="More tools" items={relatedItems} />

        <GiscusComments />
      </article>
    </main>
  )
}
