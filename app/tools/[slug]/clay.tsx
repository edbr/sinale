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
  "GTM teams building custom prospecting and enrichment workflows",
  "Founders and RevOps teams that want flexible outbound research systems",
  "Sales teams combining many data providers through waterfalls",
  "Teams using AI research and personalization before outreach",
  "Companies enriching CRM records, tracking signals, and syncing GTM data",
]

const notFor = [
  "Teams that only need a simple contact database",
  "Sales reps who want a turnkey dialer or sequencer first",
  "Small teams that will not manage credits, workflows, and QA carefully",
  "Companies without clear ICP, segmentation, or outbound process",
  "Buyers who need predictable flat-rate enrichment costs",
]

const features = [
  {
    title: "Waterfall Enrichment",
    body: "Clay lets teams run multiple data providers in sequence to find emails, phone numbers, company attributes, job data, and other GTM fields while improving coverage and controlling provider choice.",
  },
  {
    title: "Claygent AI Research",
    body: "Claygent is Clay's AI research agent for generating custom data points from web research. It is useful for account research, qualification, personalization, and enrichment that normal databases do not provide.",
  },
  {
    title: "GTM Workflow Tables",
    body: "Clay feels like a spreadsheet for GTM engineering: rows, columns, formulas, enrichments, APIs, AI prompts, conditions, and exports all live in a table-based workflow surface.",
  },
  {
    title: "Signals and Triggers",
    body: "Clay can track signals such as job changes, promotions, new hires, company news, web intent, CRM updates, and webhook events so teams can build timely outbound and routing workflows.",
  },
  {
    title: "CRM and API Integrations",
    body: "Paid tiers add CRM sync, HTTP API integrations, webhook automation, campaign integrations, ads audiences, data warehouse sync, and other connections that turn Clay from list building into GTM infrastructure.",
  },
  {
    title: "Email and Campaign Handoff",
    body: "Clay can send emails with Clay Sequencer or hand enriched lists and personalization fields to sales engagement tools, CRMs, campaign platforms, and other outbound systems.",
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

export function ClayToolPage({ relatedItems }: { relatedItems: CardItem[] }) {
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
        <ToolLogo name="Clay" className="mb-5 size-12 rounded-lg" />
        <h1 className="text-5xl font-semibold tracking-tight md:text-6xl">
          Clay
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          Clay is listed in Sinale&apos;s AI sales directory for GTM enrichment,
          prospecting workflows, Claygent research, data waterfalls, signals,
          CRM enrichment, personalization, and outbound automation.
        </p>

        <div className="mt-8 space-y-5 text-lg leading-8 text-muted-foreground">
          <p>
            Clay is a GTM engineering platform for building custom sales and
            marketing data workflows. It combines enrichment providers,
            spreadsheet-like tables, AI research, APIs, signals, CRM sync, and
            outbound handoff in one flexible workspace.
          </p>
          <p>
            The main reason teams choose Clay is control. Instead of accepting a
            single database&apos;s view of a prospect, teams can build waterfalls,
            enrich records from multiple providers, ask AI to research custom
            fields, score accounts, and route results into the rest of the GTM
            stack.
          </p>
          <p>
            The tradeoff is complexity and usage management. Clay is powerful,
            but teams need to watch Actions, Data Credits, provider costs, AI
            usage, and workflow quality. It rewards builders who understand both
            sales process and data operations.
          </p>
        </div>

        <ArticleCta tool="Clay" href={toolLinks.clay} placement="top" />

        <section className="mt-12 rounded-lg border bg-card p-6">
          <h2 className="text-2xl font-semibold">Quick Verdict</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Clay is one of the strongest tools for teams that want to build
            custom GTM systems: prospect lists, enrichment waterfalls, AI
            research, CRM enrichment, signal-based outbound, and personalized
            campaign data.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Choose Clay if your team wants flexibility and is willing to build.
            Skip it if you mainly need a simple lead database, a basic email
            sequencer, or predictable costs without workflow ownership.
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
          <h2 className="text-2xl font-semibold">What Clay Does</h2>
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
          <h2 className="text-2xl font-semibold">Clay for Prospecting</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Clay is excellent for prospecting when your target account or buyer
            definition is specific. You can start from a list, enrich companies
            and people, verify contact data, find missing attributes, and use AI
            to research whether each account actually fits your ICP.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            The best workflows do not stop at finding emails. They qualify,
            segment, score, personalize, and route prospects so reps receive a
            useful reason to reach out, not just another exported CSV.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Clay for CRM Enrichment</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Growth and Enterprise tiers are more relevant when Clay becomes part
            of your CRM workflow. Teams can auto-sync and enrich CRM records,
            call APIs, use webhooks, track intent or company signals, and push
            updated fields back into the systems sellers already use.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            This is where Clay moves from list-building tool to GTM operations
            layer. That power is useful, but it also means you should document
            ownership, field definitions, sync rules, and what happens when
            enrichment data conflicts with existing CRM data.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Clay for AI Personalization</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Claygent and AI columns can generate custom research and
            personalization at scale: summaries, buying triggers, role-specific
            pain points, account notes, competitive context, and outbound angles.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            The quality bar matters. AI personalization should be checked on
            sample rows before volume runs. Bad prompts can create plausible but
            weak copy, and expensive models can burn through budget if the
            workflow asks for more research than the campaign actually needs.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Pricing Notes</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Clay pricing now separates Actions from Data Credits. Actions
            measure platform usage such as enrichment runs, workflow execution,
            AI calls, CRM syncs, exports, and other GTM operations. Data Credits
            pay for data and AI from Clay&apos;s marketplace providers.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            The Free plan includes 500 actions per month and 100 data credits
            per month. Launch starts around $167 per month with 15,000 actions
            and 3,000 data credits per month. Growth starts around $446 per
            month with 40,000 actions and 6,000 data credits per month.
            Enterprise is custom.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Bring-your-own API keys can reduce Data Credit usage, but runs still
            consume Actions. Before scaling a workflow, test a small sample,
            check successful-match rates, estimate Actions and Data Credits, and
            decide whether the enrichment outcome is worth the spend.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Final Recommendation</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Choose Clay if your GTM motion depends on better data, sharper
            targeting, AI-assisted research, and custom workflows that normal
            sales databases cannot support.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Do not treat Clay as magic outbound. Start with one well-defined
            workflow, measure enrichment quality, keep costs visible, and only
            expand when the data leads to better meetings, cleaner CRM records,
            or campaigns that convert.
          </p>
        </section>

        <ArticleCta tool="Clay" href={toolLinks.clay} placement="bottom" />

        <RelatedContent title="More tools" items={relatedItems} />

        <GiscusComments />
      </article>
    </main>
  )
}
