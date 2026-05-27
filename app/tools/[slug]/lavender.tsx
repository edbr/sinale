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
  "SDRs and AEs who write cold emails every day",
  "Sales teams that want real-time coaching inside their existing tools",
  "Managers who need visibility into email quality across reps",
  "Founders who want sharper outbound copy before scaling volume",
  "Teams using Gmail, Outlook, Outreach, Salesloft, HubSpot, Apollo, Gong, or Groove",
]

const notFor = [
  "Teams looking for a full sales engagement platform",
  "Companies that need contact data, enrichment, and sequencing in one tool",
  "Teams that want AI to own the whole outbound motion without rep review",
  "Reps who only need occasional general writing help",
  "Organizations that cannot let a third-party tool connect to email systems",
]

const features = [
  {
    title: "Email Scoring",
    body: "Lavender scores sales emails and templates, then flags the parts that may hurt reply rate, clarity, length, personalization, or mobile readability.",
  },
  {
    title: "Real-Time Coaching",
    body: "The coach works while a seller writes, giving practical suggestions instead of waiting for a manager or enablement review after the campaign is already live.",
  },
  {
    title: "Personalization Assistant",
    body: "Lavender brings prospect context, company details, personality cues, and intro ideas into the writing workflow so reps can personalize faster.",
  },
  {
    title: "AI Email Writer",
    body: "Reps can start from bullet points or rough notes and use Lavender to draft, rewrite, shorten, and improve outbound emails before sending.",
  },
  {
    title: "Team Coaching Dashboard",
    body: "Team plans add manager-facing analytics, coaching visibility, and performance signals for spotting patterns across reps and templates.",
  },
  {
    title: "Inbox and Sales Tool Integrations",
    body: "Lavender works across common email and sales platforms, including Gmail, Outlook, Outreach, Salesloft, HubSpot, Apollo, Groove, and Gong.",
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

export function LavenderToolPage({ relatedItems }: { relatedItems: CardItem[] }) {
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
        <ToolLogo name="Lavender" className="mb-5 size-12 rounded-lg" />
        <h1 className="text-5xl font-semibold tracking-tight md:text-6xl">
          Lavender
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          Lavender is listed in Sinale&apos;s AI sales directory for sales email
          coaching, cold email writing, personalization, inbox feedback, team
          coaching, and outbound copy improvement.
        </p>

        <div className="mt-8 space-y-5 text-lg leading-8 text-muted-foreground">
          <p>
            Lavender is an AI sales email coach. It helps sellers write clearer,
            more personalized, more reply-worthy emails by scoring drafts,
            suggesting improvements, generating copy, and surfacing recipient
            context where reps already work.
          </p>
          <p>
            The important thing to understand is that Lavender is not trying to
            be Apollo, Outreach, or Salesloft. It does not replace your database,
            sequencer, CRM, or deliverability stack. Its job is narrower: make
            the email itself better before a rep hits send.
          </p>
          <p>
            That narrowness is the product&apos;s strength. Teams that already have
            prospecting and sending infrastructure can add Lavender as a writing
            and coaching layer without rebuilding the rest of the outbound
            motion.
          </p>
        </div>

        <ArticleCta tool="Lavender" href={toolLinks.lavender} placement="top" />

        <section className="mt-12 rounded-lg border bg-card p-6">
          <h2 className="text-2xl font-semibold">Quick Verdict</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Lavender is best for teams that believe email quality is still a
            bottleneck. If your reps have the right accounts and contacts but
            the messaging is too long, generic, vague, or hard to read on
            mobile, Lavender is a focused fix.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Skip it if your main problem is list building, data coverage,
            sequencing, CRM hygiene, or deliverability infrastructure. Lavender
            can improve a message, but it cannot make a bad audience or broken
            sending setup perform.
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
          <h2 className="text-2xl font-semibold">What Lavender Does</h2>
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
            Lavender for Cold Email Coaching
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Lavender&apos;s core workflow is simple: write an email, review the
            score, fix the issues, and send a cleaner message. The coach looks
            for patterns that often reduce replies, such as weak personalization,
            unclear asks, overly long copy, poor mobile readability, and generic
            AI-sounding phrasing.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            The best use case is not blindly chasing a score. Use the score as a
            forcing function for better judgment. A strong rep still needs to
            know the account, the buyer, the trigger, and the reason the email
            deserves attention.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Lavender for Sales Teams</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Managers can use Lavender as a lightweight coaching system. Instead
            of reviewing every outbound email manually, they can see common
            writing issues, coach repeat patterns, and give reps a shared
            standard for what good outbound looks like.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            This is especially useful when teams are growing. New reps often
            need feedback on structure, tone, length, and personalization before
            they develop taste. Lavender gives them a feedback loop inside the
            workflow rather than only during weekly enablement sessions.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Lavender and Ora</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Lavender now also promotes Ora, an AI sales agent created by
            Lavender. Ora is positioned differently from the Email Coach: it can
            research, write, and send personalized sales emails automatically
            after you upload a lead list or connect Salesforce.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Treat Ora as a separate buying decision. Lavender Email Coach is for
            improving rep-written emails. Ora is closer to an autonomous
            outbound agent, with different risk, governance, pricing, and
            operational questions.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Pricing Notes</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Lavender publishes Email Coach pricing with a free Basic plan,
            Starter, Individual Pro, and Team plans. The official page lists a
            7-day free trial with no credit card required, plus month-to-month
            options.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            As of the checked pricing page, the Basic plan includes 5 email
            analyses and 5 personalizations per month. Monthly pricing is listed
            at $29 per month for Starter, $49 per month for Individual Pro, and
            $99 per seat per month for Team. Annual billing lowers the displayed
            monthly equivalents.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Ora is priced separately. Lavender&apos;s Ora page lists launch pricing
            at $500 per agent per month, with free building before launch and
            included sending volume per agent.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Final Recommendation</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Choose Lavender if your team already has a sales stack but needs
            better outbound writing. It is most valuable when reps use it every
            day, managers reinforce the coaching, and the team measures replies
            and meetings rather than just email scores.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Do not buy Lavender as a substitute for strategy. It can sharpen the
            message, but you still need the right ICP, clean data, credible
            personalization, careful sending practices, and a reason for the
            prospect to care.
          </p>
        </section>

        <ArticleCta tool="Lavender" href={toolLinks.lavender} placement="bottom" />

        <RelatedContent title="More tools" items={relatedItems} />

        <GiscusComments />
      </article>
    </main>
  )
}
