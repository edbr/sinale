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
  "Founders and small sales teams starting outbound from scratch",
  "SDR teams that want data, sequencing, and engagement in one place",
  "Teams that need prospecting, enrichment, email outreach, and CRM sync",
  "Revenue teams that value accessible pricing over enterprise-only contracts",
  "Operators building repeatable email-first prospecting workflows",
]

const notFor = [
  "Teams that need the deepest enterprise account intelligence",
  "Call-heavy teams that will burn through phone and dialer credits quickly",
  "Companies that require perfect data accuracy without verification workflows",
  "RevOps teams that want fully custom GTM engineering workflows like Clay",
  "Organizations using Apollo data to power external products or resale use cases",
]

const features = [
  {
    title: "B2B Contact Database",
    body: "Apollo gives teams a large searchable B2B database for finding companies, contacts, emails, phone numbers, job titles, firmographics, and account segments.",
  },
  {
    title: "Sales Engagement",
    body: "Apollo includes email sequences, tasks, templates, A/B testing, tracking, meeting scheduling, and outreach workflows so teams can prospect and execute from the same platform.",
  },
  {
    title: "Data Enrichment",
    body: "Apollo can enrich CRM records, CSV files, contacts, leads, accounts, and external systems through integrations or API access, depending on the plan and use case.",
  },
  {
    title: "Chrome Extension",
    body: "The Apollo Chrome extension helps sellers prospect while browsing LinkedIn, company sites, and other workflow surfaces, then save or reveal contact details.",
  },
  {
    title: "AI Research and Writing",
    body: "Apollo includes AI-assisted research and sales writing features for prospecting, personalization, sequence drafting, and account preparation.",
  },
  {
    title: "Dialer, Calls, and Deal Tools",
    body: "Higher-tier and add-on workflows can include dialer features, call recording, conversation intelligence, opportunities, deal management, analytics, and coaching.",
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

export function ApolloToolPage({ relatedItems }: { relatedItems: CardItem[] }) {
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
        <ToolLogo name="Apollo" className="mb-5 size-12 rounded-lg" />
        <h1 className="text-5xl font-semibold tracking-tight md:text-6xl">
          Apollo
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          Apollo is listed in Sinale&apos;s AI sales directory for B2B sales
          intelligence, prospecting, contact enrichment, sales engagement,
          sequences, AI research, CRM sync, and outbound workflows.
        </p>

        <div className="mt-8 space-y-5 text-lg leading-8 text-muted-foreground">
          <p>
            Apollo is an all-in-one sales intelligence and engagement platform.
            It combines a B2B contact database, search filters, enrichment,
            email sequences, meeting scheduling, sales calls, AI assistance,
            integrations, and workflow automation in one product.
          </p>
          <p>
            The biggest reason teams choose Apollo is speed to outbound. A
            founder or SDR team can build a list, reveal contact data, write a
            sequence, send emails, track replies, and sync activity to a CRM
            without stitching together several separate tools.
          </p>
          <p>
            The tradeoff is that Apollo is still a data and outreach system,
            which means quality control matters. Teams should verify important
            contacts, watch credit usage, maintain deliverability, and avoid
            treating a large database as a substitute for sharp targeting.
          </p>
        </div>

        <ArticleCta tool="Apollo" href={toolLinks.apollo} placement="top" />

        <section className="mt-12 rounded-lg border bg-card p-6">
          <h2 className="text-2xl font-semibold">Quick Verdict</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Apollo is one of the easiest sales tools to recommend for startups,
            founders, and lean GTM teams that want prospecting data and outreach
            execution in one place. It is less custom than Clay and less
            enterprise-heavy than ZoomInfo, but it gets teams selling quickly.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Choose Apollo if your outbound motion is email-first and you want a
            practical database plus sequencer. Be more careful if your team is
            call-heavy, needs very specific data coverage, or will rely on
            mobile numbers and enrichment credits at high volume.
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
          <h2 className="text-2xl font-semibold">What Apollo Does</h2>
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
          <h2 className="text-2xl font-semibold">Apollo for Prospecting</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Apollo works well when you need to turn an ICP into a workable list.
            Teams can search by company, role, location, industry, headcount,
            signals, technologies, and other filters, then save contacts and
            accounts into outbound workflows.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            The best Apollo workflows still start with strategy. Define the
            buyer, segment the list, verify samples, and write outreach around a
            clear reason to contact the prospect. More contacts do not
            automatically mean better pipeline.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            Apollo for Sales Engagement
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Apollo&apos;s sales engagement layer is the practical advantage over
            pure data vendors. You can build sequences, send emails, create
            tasks, A/B test messaging, track engagement, and manage follow-up
            without exporting everything into another tool first.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Deliverability still needs discipline. Connect the right mailbox,
            warm up thoughtfully, keep volume reasonable, personalize where it
            matters, and monitor replies, bounces, spam complaints, and domain
            health as the campaign scales.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Apollo for Data Enrichment</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Apollo can enrich CRM records, CSVs, contacts, accounts, and
            external systems. That makes it useful for cleaning stale records,
            filling missing fields, finding buyer contacts, and keeping sales
            systems more complete.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Enrichment should be treated as a workflow with QA. Check match
            rates, validate a sample, document which fields Apollo owns, and be
            careful when syncing data back into Salesforce, HubSpot, Outreach,
            Salesloft, or other systems of record.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Pricing Notes</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Apollo publishes plan details on its pricing page, but the exact
            value depends heavily on credits and feature access. Trial plans
            include 50 credits and 5 mobile credits, while the free plan is
            positioned as free forever. Larger enterprise and custom use cases
            require talking to sales.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Credits are used for actions such as revealing verified phone
            numbers or emails, Apollo API enrichment, AI research, email warmup
            beyond included allowances, generated domains or mailboxes, dialer
            usage, and additional phone numbers. Export credits are consumed
            when sending contact data outside Apollo.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Before committing, estimate your real motion: how many contacts you
            will reveal, whether you need mobile numbers, how much you will use
            the dialer, whether API enrichment is required, and which users
            actually need paid seats.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Final Recommendation</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Choose Apollo if you want a fast, practical sales platform for
            finding prospects and running outbound without a complex GTM stack.
            It is especially useful for early sales teams that need one product
            to cover data, enrichment, and engagement.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Do not treat Apollo as an infinite lead machine. Use it to support a
            clear outbound strategy, keep credit usage visible, verify data
            quality, protect deliverability, and measure pipeline created rather
            than contacts exported.
          </p>
        </section>

        <ArticleCta tool="Apollo" href={toolLinks.apollo} placement="bottom" />

        <RelatedContent title="More tools" items={relatedItems} />

        <GiscusComments />
      </article>
    </main>
  )
}
