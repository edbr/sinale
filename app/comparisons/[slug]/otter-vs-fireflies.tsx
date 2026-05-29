import Link from "next/link"
import { ArrowLeft, Check } from "lucide-react"

import { ArticleCta } from "@/components/article/article-cta"
import { GiscusComments } from "@/components/article/giscus-comments"
import { Button } from "@/components/ui/button"
import { toolLinks } from "@/lib/tool-links"

const verdictRows = [
  ["Live Transcription", "Otter"],
  ["Meeting Summaries", "Tie"],
  ["Transcript Search", "Fireflies"],
  ["File Uploads", "Fireflies"],
  ["CRM Integrations", "Tie"],
  ["Sales Calls", "Fireflies"],
  ["Team Analytics", "Fireflies"],
  ["Individual Notes", "Otter"],
  ["Enterprise Controls", "Fireflies"],
  ["Overall Recommendation", "Fireflies"],
]

const otterWins = [
  {
    title: "Better Live Meeting Transcription",
    body: "Otter is still one of the easiest tools to understand if your main need is live transcription during Zoom, Microsoft Teams, Google Meet, in-person meetings, lectures, interviews, or recurring calls.",
  },
  {
    title: "Better Individual Note Workflow",
    body: "Otter works well for people who want a personal meeting assistant that joins calls, creates transcripts, identifies speakers, produces notes, and lets them ask questions across meetings.",
  },
  {
    title: "Strong Desktop and Mobile Capture",
    body: "Otter has useful capture options across desktop, mobile, browser extension, and meeting platforms, including workflows where you need to record conversations outside a standard video call.",
  },
  {
    title: "Simple for Education and Interviews",
    body: "Otter is a natural fit for students, journalists, researchers, educators, and solo professionals who need reliable transcription more than a large sales or operations workflow.",
  },
]

const firefliesWins = [
  {
    title: "Better Search Across Team Meetings",
    body: "Fireflies is stronger when transcripts need to become searchable company knowledge. It is built around meeting search, AskFred, team analytics, contacts, tasks, and long-running meeting history.",
  },
  {
    title: "Broader Team Workflow Coverage",
    body: "Fireflies is useful across sales, recruiting, marketing, product research, engineering, and operations because it treats meetings as a shared knowledge layer rather than only a personal transcript.",
  },
  {
    title: "More Flexible Integrations and Automation",
    body: "Fireflies has broad integrations across video conferencing, CRM, dialers, collaboration tools, storage, API workflows, and automation systems, which makes it easier to connect meeting notes to existing work.",
  },
  {
    title: "Stronger Admin and Enterprise Fit",
    body: "Fireflies is a better fit for larger teams that need user groups, team analytics, SSO, SCIM, HIPAA-oriented options, custom retention, private storage, and stronger administrative controls.",
  },
]

const useCases = [
  {
    title: "Choose Otter if",
    items: [
      "You want excellent live transcription",
      "You need simple meeting notes for yourself or a small team",
      "You record lectures, interviews, in-person conversations, or calls",
      "You care about speaker identification and quick transcript access",
      "You want a familiar transcription-first workflow",
    ],
  },
  {
    title: "Choose Fireflies if",
    items: [
      "You need searchable transcripts across many team meetings",
      "You want stronger integrations and automation",
      "You run sales, recruiting, research, or customer calls",
      "You need team analytics, admin controls, or enterprise features",
      "You want meeting notes to feed workflows across departments",
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

export function OtterVsFirefliesComparison() {
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
        <h1 className="text-3xl font-medium tracking-tight md:text-4xl">
          Otter vs Fireflies (2026): Which AI Transcription Tool Should You Pick?
        </h1>

        <div className="mt-8 space-y-5 text-lg leading-8 text-muted-foreground">
          <p>
            Otter and Fireflies are both AI transcription tools for meetings,
            but they solve slightly different problems.
          </p>
          <p>
            Otter is the cleaner pick if you mostly want live transcription,
            speaker identification, AI meeting notes, and simple access to
            transcripts from meetings, interviews, lectures, or calls.
          </p>
          <p>
            Fireflies is the stronger pick if transcripts need to become a
            searchable team system with summaries, integrations, analytics,
            tasks, CRM workflows, and enterprise controls.
          </p>
          <p>
            Choose Otter for transcription-first personal productivity. Choose
            Fireflies for team workflows built around meeting intelligence.
          </p>
        </div>

        <ArticleCta tool="Fireflies" href={toolLinks.fireflies} placement="top" />

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
              <span className="font-medium">Best for live transcription:</span>{" "}
              Otter
            </p>
            <p className="rounded-lg border bg-background p-4">
              <span className="font-medium">Best for team workflows:</span>{" "}
              Fireflies
            </p>
          </div>
        </section>

        <section className="mt-12 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border bg-card p-5">
            <h2 className="text-2xl font-semibold">What is Otter?</h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              Otter is an AI transcription and meeting note tool for live
              transcripts, speaker identification, audio playback, AI chat,
              meeting summaries, imports, and notes across video calls,
              desktop, mobile, and browser workflows.
            </p>
            <p className="mt-4 leading-7 text-muted-foreground">
              Its main appeal is simple: it turns conversations into searchable
              transcripts and notes quickly.
            </p>
          </div>

          <div className="rounded-lg border bg-card p-5">
            <h2 className="text-2xl font-semibold">What is Fireflies?</h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              Fireflies is an AI meeting assistant for transcripts, summaries,
              real-time notes, meeting search, AskFred, task capture,
              integrations, analytics, storage, and team meeting knowledge.
            </p>
            <p className="mt-4 leading-7 text-muted-foreground">
              Its main appeal is that it connects meeting transcripts to the
              rest of a team&apos;s work.
            </p>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Where Otter Wins</h2>
          <div className="mt-5 grid gap-4">
            {otterWins.map((item) => (
              <div key={item.title} className="rounded-lg border bg-card p-5">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {item.body}
                </p>
                <p className="mt-4 text-sm font-medium">Winner: Otter</p>
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
            Otter vs Fireflies for Transcripts
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Otter wins for live transcription. It is especially good when you
            want real-time notes during a meeting, speaker identification,
            playback, mobile access, and a straightforward transcript after the
            conversation ends.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Fireflies wins when transcripts need to be searched, shared,
            organized, and reused across a team. Its transcript workflow is
            less about one meeting and more about the knowledge that piles up
            across many meetings.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            Otter vs Fireflies for Summaries
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Both tools can summarize meetings, extract key takeaways, and make
            transcripts easier to digest. Otter&apos;s summaries are a good fit for
            individuals and small teams that want a quick meeting recap.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Fireflies is better if summaries need to feed tasks, contacts,
            AI apps, AskFred, team analytics, CRM updates, or a broader
            searchable meeting system.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            Otter vs Fireflies for Integrations
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Otter has useful integrations across calendar, video conferencing,
            storage, collaboration tools, CRM systems, and sales tools. For
            many teams, that is enough to get transcripts and notes into the
            tools they already use.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Fireflies has the broader workflow story. It connects to video
            conferencing tools, CRM, dialers, collaboration apps, storage,
            API workflows, and automation tools, making it stronger for teams
            that want meeting data to move through multiple systems.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            Otter vs Fireflies for Sales Calls
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Otter has sales-oriented features, CRM integrations, sales notes,
            follow-ups, and call logging options. It can work well for teams
            that already like Otter&apos;s transcription experience and want to add
            CRM handoff.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Fireflies is the stronger default for sales teams that want
            conversation intelligence, tasks, CRM workflows, team analytics,
            search, and a meeting history that managers and teammates can
            inspect across accounts.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            Otter vs Fireflies for Team Use
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Otter is easier for individuals and small teams. The product is
            simple to explain, the live transcript experience is strong, and
            the workflow works well for people who need meeting notes without a
            lot of process.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Fireflies is better for larger teams and cross-functional usage.
            User groups, analytics, integrations, storage, enterprise controls,
            and searchable conversation history make it more useful as a shared
            meeting layer.
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
            Otter is the better choice if you primarily need live transcription
            and meeting notes for yourself, a classroom, interviews, research,
            or a small team. It is transcription-first and easy to adopt.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Fireflies is the better choice if your team wants transcripts,
            summaries, integrations, sales workflows, team analytics, and
            searchable meeting memory in one system.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            For most teams comparing Otter vs Fireflies in 2026, Otter is the
            simpler transcription app. Fireflies is the stronger team meeting
            intelligence platform.
          </p>
        </section>

        <ArticleCta tool="Fireflies" href={toolLinks.fireflies} placement="bottom" />

        <section className="mt-12 rounded-lg border bg-card p-6">
          <h2 className="text-2xl font-semibold">Related Comparisons</h2>
          <div className="mt-4 grid gap-3 text-sm">
            <Link className="underline-offset-4 hover:underline" href="/comparisons/fathom-vs-fireflies">
              Fathom vs Fireflies
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
