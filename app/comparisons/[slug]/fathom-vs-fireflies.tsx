import Link from "next/link"
import { ArrowLeft, Check } from "lucide-react"

import { ArticleCta } from "@/components/article/article-cta"
import { GiscusComments } from "@/components/article/giscus-comments"
import { Button } from "@/components/ui/button"
import { toolLinks } from "@/lib/tool-links"

const verdictRows = [
  ["Fastest Personal Workflow", "Fathom"],
  ["Recording and Playback", "Tie"],
  ["Meeting Summaries", "Fathom"],
  ["Transcript Search", "Fireflies"],
  ["CRM Handoff", "Fathom"],
  ["Team Knowledge Base", "Fireflies"],
  ["Sales Follow-Up", "Fathom"],
  ["Multilingual Transcription", "Fireflies"],
  ["Enterprise Controls", "Fireflies"],
  ["Overall Recommendation", "Fathom"],
]

const fathomWins = [
  {
    title: "Cleaner Out-of-the-Box Meeting Workflow",
    body: "Fathom is easier to recommend when the goal is simple: join the call, record it, summarize it, pull out action items, send follow-ups, and keep the team moving without extra configuration.",
  },
  {
    title: "Stronger CRM Handoff",
    body: "Fathom is especially good for customer-facing teams because it can push summaries and notes into CRM records, support customer and deal views, and reduce the amount of manual post-call cleanup.",
  },
  {
    title: "Better Highlight and Follow-Up Flow",
    body: "Fathom's clips, highlights, playlists, AI action items, and follow-up emails make it useful when the output of a meeting needs to become a shareable artifact quickly.",
  },
  {
    title: "Better Fit for Sales and Customer Success",
    body: "If reps need call recaps, next steps, CRM notes, coaching metrics, and customer history, Fathom feels more focused than a general meeting knowledge platform.",
  },
]

const firefliesWins = [
  {
    title: "Stronger Team Search and Knowledge Capture",
    body: "Fireflies is better when the main problem is finding information across many meetings. It is built around transcripts, meeting search, AskFred, team analytics, integrations, and long-running meeting memory.",
  },
  {
    title: "Broader Transcription Coverage",
    body: "Fireflies is a stronger choice for teams that need broad transcription support, including many languages, uploads, mobile apps, Chrome capture, live transcription, and flexible meeting ingestion.",
  },
  {
    title: "More Flexible Team and Enterprise Controls",
    body: "Fireflies has a deeper set of team and enterprise features, including user groups, SSO, SCIM, custom retention, private storage, HIPAA-oriented options, and admin controls on higher plans.",
  },
  {
    title: "Better for Cross-Functional Meeting Archives",
    body: "Product, recruiting, marketing, research, and operations teams may prefer Fireflies because it behaves more like a searchable conversation database than a sales follow-up assistant.",
  },
]

const useCases = [
  {
    title: "Choose Fathom if",
    items: [
      "You want fast meeting summaries with little setup",
      "Your team lives in customer calls and CRM records",
      "You need action items and follow-up emails after calls",
      "You want highlights, clips, playlists, and call sharing",
      "You care more about workflow speed than archive depth",
    ],
  },
  {
    title: "Choose Fireflies if",
    items: [
      "You need a searchable meeting knowledge base",
      "Your team records many internal and external meetings",
      "You need multilingual transcription or file uploads",
      "You want team analytics, user groups, and admin controls",
      "You need broader integrations across work tools",
    ],
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

export function FathomVsFirefliesComparison() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <article className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <Button asChild variant="ghost" className="mb-10 px-0">
          <Link href="/comparisons">
            <ArrowLeft />
            Comparisons
          </Link>
        </Button>

        <p className="mb-4 text-sm font-medium text-muted-foreground">
          Comparison
        </p>
        <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
          Fathom vs Fireflies (2026): Which AI Note Taker Is Better?
        </h1>

        <div className="mt-8 space-y-5 text-lg leading-8 text-muted-foreground">
          <p>
            Fathom and Fireflies are both strong AI note takers, but they are
            best for different meeting workflows.
          </p>
          <p>
            Fathom is the better choice when you want a fast, polished workflow
            for recorded calls: summaries, action items, follow-up emails,
            highlights, clips, and CRM handoff.
          </p>
          <p>
            Fireflies is the better choice when meetings need to become a
            searchable team knowledge base across many departments, languages,
            recordings, uploads, and integrations.
          </p>
          <p>
            Choose Fathom for sales follow-through and simple post-meeting
            execution. Choose Fireflies for team search, transcript depth, and
            broader meeting intelligence.
          </p>
        </div>

        <ArticleCta tool="Fathom" href={toolLinks.fathom} placement="top" />

        <section className="mt-12 rounded-lg border bg-card p-6">
          <h2 className="text-2xl font-semibold">Quick Verdict</h2>
          <div className="mt-5 divide-y rounded-lg border">
            {verdictRows.map(([category, winner]) => (
              <div
                key={category}
                className="grid grid-cols-[1fr_auto] gap-4 px-4 py-3 text-sm"
              >
                <span className="text-muted-foreground">{category}</span>
                <span className="font-medium">{winner}</span>
              </div>
            ))}
          </div>
          <div className="mt-5 grid gap-3 text-sm md:grid-cols-2">
            <p className="rounded-lg border bg-background p-4">
              <span className="font-medium">Best for CRM follow-up:</span>{" "}
              Fathom
            </p>
            <p className="rounded-lg border bg-background p-4">
              <span className="font-medium">Best for team search:</span>{" "}
              Fireflies
            </p>
          </div>
        </section>

        <section className="mt-12 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border bg-card p-5">
            <h2 className="text-2xl font-semibold">What is Fathom?</h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              Fathom is an AI meeting assistant that records calls, creates
              summaries, identifies action items, generates follow-up emails,
              supports clips and highlights, and syncs notes into CRM systems.
            </p>
            <p className="mt-4 leading-7 text-muted-foreground">
              Its main strength is turning meetings into immediate next steps,
              especially for sales, customer success, recruiting, and account
              teams.
            </p>
          </div>

          <div className="rounded-lg border bg-card p-5">
            <h2 className="text-2xl font-semibold">What is Fireflies?</h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              Fireflies is an AI meeting assistant for transcription,
              summaries, meeting search, team analytics, integrations, uploads,
              live transcription, and searchable conversation history.
            </p>
            <p className="mt-4 leading-7 text-muted-foreground">
              Its main strength is helping teams capture and search knowledge
              from meetings across many tools, departments, and recurring
              workflows.
            </p>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Where Fathom Wins</h2>
          <div className="mt-5 grid gap-4">
            {fathomWins.map((item) => (
              <div key={item.title} className="rounded-lg border bg-card p-5">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {item.body}
                </p>
                <p className="mt-4 text-sm font-medium">Winner: Fathom</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Where Fireflies Wins</h2>
          <div className="mt-5 grid gap-4">
            {firefliesWins.map((item) => (
              <div key={item.title} className="rounded-lg border bg-card p-5">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {item.body}
                </p>
                <p className="mt-4 text-sm font-medium">Winner: Fireflies</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            Fathom vs Fireflies for Recording
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Both tools can record meetings and produce transcripts. Fathom feels
            more focused on a clean call recording workflow with summaries,
            highlights, clips, and easy sharing. It is a great fit when the
            meeting output needs to move directly into follow-up.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Fireflies is stronger when recording is one input into a larger
            meeting archive. It supports meetings across common video platforms,
            uploads, mobile capture, Chrome capture, and broader transcript
            workflows.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            Fathom vs Fireflies for Summaries
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Fathom wins if you want summaries that are ready to use after a
            customer call. Its workflow is oriented around chronological and
            enhanced summaries, action items, templates, and follow-up emails.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Fireflies also produces AI summaries, but its bigger advantage is
            what happens after the summary: searchable transcripts, AskFred,
            AI apps, team analytics, and knowledge discovery across meetings.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            Fathom vs Fireflies for CRM Handoff
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Fathom is the better CRM handoff tool for most teams. Its CRM sync,
            CRM field sync, customer views, deal views, and sales-oriented
            follow-up flow make it easier to keep account records fresh after
            calls.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Fireflies also integrates with CRM tools and can auto-fill CRM
            notes and call logs, but it feels more general-purpose. Choose it
            when CRM is one workflow among many, not the center of the product.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            Fathom vs Fireflies for Team Search
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Fireflies wins for team search. If you want to ask questions across
            meetings, search transcripts, browse conversation history, and use
            meetings as a knowledge source for multiple departments, Fireflies
            is the more natural fit.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Fathom has strong meeting search, keyword alerts, team folders, and
            customer or deal views, but it is most compelling when search is
            tied to sales calls and account workflows.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            Fathom vs Fireflies for Pricing
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Pricing depends heavily on team size and the features you need.
            Fathom is attractive if your main value comes from summaries,
            follow-ups, and CRM handoff without adding a large meeting
            intelligence stack.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Fireflies has a clear free tier and paid tiers that add unlimited
            AI summaries, storage, video recording, analytics, and enterprise
            controls. It can be a better value if many departments need
            searchable transcripts and broader meeting capture.
          </p>
        </section>

        <section className="mt-12 rounded-lg border bg-card p-6">
          <h2 className="text-2xl font-semibold">Which Should You Choose?</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {useCases.map((group) => (
              <div key={group.title} className="rounded-lg border bg-background p-5">
                <h3 className="font-semibold">{group.title}</h3>
                <CheckList items={group.items} />
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Final Verdict</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Fathom is the better AI note taker for teams that want a simple,
            polished path from meeting recording to summary, follow-up, and CRM
            update. It is especially strong for sales, success, recruiting, and
            account teams.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Fireflies is the better AI note taker for teams that want meetings
            to become searchable company knowledge. It is stronger for
            transcript-heavy workflows, cross-functional archives, multilingual
            teams, analytics, and enterprise administration.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            For most teams choosing between the two in 2026, start with Fathom
            if meeting follow-through is the pain. Start with Fireflies if
            meeting knowledge and search are the pain.
          </p>
        </section>

        <ArticleCta tool="Fathom" href={toolLinks.fathom} placement="bottom" />

        <section className="mt-12 rounded-lg border bg-card p-6">
          <h2 className="text-2xl font-semibold">Related Comparisons</h2>
          <div className="mt-4 grid gap-3 text-sm">
            <Link className="underline-offset-4 hover:underline" href="/comparisons/granola-vs-fathom">
              Granola vs Fathom
            </Link>
            <Link className="underline-offset-4 hover:underline" href="/comparisons/granola-vs-otter">
              Granola vs Otter
            </Link>
            <Link className="underline-offset-4 hover:underline" href="/best/ai-meeting-assistants">
              Best AI Meeting Assistants
            </Link>
          </div>
        </section>

        <GiscusComments />
      </article>
    </main>
  )
}
