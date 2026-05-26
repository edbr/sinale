import Link from "next/link"
import { ArrowLeft, Check } from "lucide-react"

import { ArticleCta } from "@/components/article/article-cta"
import { GiscusComments } from "@/components/article/giscus-comments"
import { Button } from "@/components/ui/button"
import { toolLinks } from "@/lib/tool-links"

const verdictRows = [
  ["Bot-Free Notes", "Granola"],
  ["Automatic Recording", "Fathom"],
  ["Transcripts", "Fathom"],
  ["Summaries", "Tie"],
  ["Follow-Up Emails", "Fathom"],
  ["CRM Workflows", "Fathom"],
  ["Internal Meetings", "Granola"],
  ["Sales Calls", "Fathom"],
  ["Team Search", "Fathom"],
  ["Overall Recommendation", "Granola"],
]

const granolaWins = [
  {
    title: "Better Bot-Free Meeting Experience",
    body: "Granola does not need to join the meeting as a visible bot. That makes it feel more natural for internal calls, sensitive conversations, 1:1s, interviews, and meetings where a recorder changes the tone.",
  },
  {
    title: "Human-in-the-Loop Notes",
    body: "Granola combines your rough notes with AI-enhanced summaries. That means the final notes reflect what you thought mattered, not only what the transcript model guessed was important.",
  },
  {
    title: "Better for Internal Team Work",
    body: "Granola is excellent for product meetings, design critiques, founder calls, hiring loops, customer discovery, 1:1s, and strategy sessions where you want useful notes without turning the meeting into a recording event.",
  },
  {
    title: "Cleaner Personal Workflow",
    body: "For people who want a quiet note layer across meetings, Granola feels less intrusive than classic meeting recorders and easier to use as a personal memory system.",
  },
]

const fathomWins = [
  {
    title: "Better Automatic Recording and Transcripts",
    body: "Fathom is stronger when you want every call recorded, transcribed, summarized, searchable, and available later. It is built around capture, playback, clips, and meeting history.",
  },
  {
    title: "Stronger Follow-Up Workflow",
    body: "Fathom is better for automated action items, follow-up emails, highlight clips, playlists, and sharing meeting moments with teammates.",
  },
  {
    title: "Better Sales and CRM Fit",
    body: "Fathom is more useful for sales and customer-facing teams that need CRM sync, deal views, coaching metrics, keyword alerts, customer history, and structured call follow-through.",
  },
  {
    title: "More Team Search and Collaboration",
    body: "Fathom's shared call library, team folders, comments, search, alerts, and customer or deal views make it stronger for teams that want a searchable meeting archive.",
  },
]

const useCases = [
  {
    title: "Choose Granola if",
    items: [
      "You want bot-free meeting notes",
      "You take rough notes and want AI to improve them",
      "You mainly need internal meeting memory",
      "You care about meeting tone and privacy perception",
      "You want a lightweight note layer instead of a call archive",
    ],
  },
  {
    title: "Choose Fathom if",
    items: [
      "You want automatic recordings and transcripts",
      "You need summaries, action items, and follow-up emails",
      "You run sales, customer success, or recruiting calls",
      "You want CRM sync or team call search",
      "You need a shared meeting archive with highlights and clips",
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

export function GranolaVsFathomComparison() {
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
          Granola vs Fathom (2026): Which AI Meeting Assistant Is Better?
        </h1>

        <div className="mt-8 space-y-5 text-lg leading-8 text-muted-foreground">
          <p>
            Granola and Fathom are both excellent AI meeting assistants, but
            they make different assumptions about what people need after a
            meeting.
          </p>
          <p>
            Granola is built for quiet, bot-free note-taking. It enhances your
            own rough notes with AI and turns meetings into useful summaries
            without making the meeting feel heavily recorded.
          </p>
          <p>
            Fathom is built for automatic capture. It records, transcribes,
            summarizes, creates follow-ups, supports team search, and connects
            more naturally to sales and customer workflows.
          </p>
          <p>
            Choose Granola if you want better notes. Choose Fathom if you want
            a complete meeting archive and follow-up system.
          </p>
        </div>

        <ArticleCta tool="Granola" href={toolLinks.granola} placement="top" />

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
              <span className="font-medium">Best for bot-free notes:</span>{" "}
              Granola
            </p>
            <p className="rounded-lg border bg-background p-4">
              <span className="font-medium">Best for recorded workflows:</span>{" "}
              Fathom
            </p>
          </div>
        </section>

        <section className="mt-12 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border bg-card p-5">
            <h2 className="text-2xl font-semibold">What is Granola?</h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              Granola is an AI meeting note app that listens locally, lets you
              type rough notes during the meeting, and then enhances those notes
              with AI using the meeting transcript as context.
            </p>
            <p className="mt-4 leading-7 text-muted-foreground">
              Its main appeal is that it feels like better note-taking rather
              than a heavy recording system.
            </p>
          </div>

          <div className="rounded-lg border bg-card p-5">
            <h2 className="text-2xl font-semibold">What is Fathom?</h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              Fathom is an AI meeting assistant for recording, transcribing,
              summarizing, searching, clipping, sharing, and following up after
              meetings.
            </p>
            <p className="mt-4 leading-7 text-muted-foreground">
              Its main appeal is that it turns meetings into a searchable
              record with summaries, action items, follow-ups, and team
              workflows.
            </p>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Where Granola Wins</h2>
          <div className="mt-5 grid gap-4">
            {granolaWins.map((item) => (
              <div key={item.title} className="rounded-lg border bg-card p-5">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {item.body}
                </p>
                <p className="mt-4 text-sm font-medium">Winner: Granola</p>
              </div>
            ))}
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
          <h2 className="text-2xl font-semibold">
            Granola vs Fathom for Meeting Notes
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Granola is better for people who still want to participate in the
            note-taking process. You write a few rough notes, mark what matters,
            and let AI turn that into something polished after the call.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Fathom is better when you want the notes to happen automatically.
            It records and summarizes without requiring you to type during the
            meeting.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            Granola vs Fathom for Transcripts
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Fathom wins for transcript-heavy workflows. If you need recordings,
            searchable transcripts, clips, playlists, and a call archive,
            Fathom is the more complete system.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Granola uses transcript context to improve notes, but its core
            value is not replaying or managing a complete recording library.
            It is about turning meetings into useful written memory.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            Granola vs Fathom for Follow-Ups
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Fathom has the stronger follow-up workflow. AI action items,
            follow-up emails, CRM sync, alerts, customer views, and deal views
            make it better for sales, recruiting, customer success, and account
            management.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Granola can produce useful next steps and summaries, but it feels
            less like a workflow automation layer and more like a note layer
            that helps humans remember what happened.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            Granola vs Fathom for Team Workflows
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Granola is a great fit for teams that want better internal meeting
            memory without turning every call into a formal recorded asset.
            Product, design, founder, and research teams may prefer that
            lighter feel.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Fathom is a better fit for teams that want a shared meeting library
            with search, folders, comments, CRM sync, clips, and collaboration
            around calls.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Pricing</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Granola pricing is positioned around simple meeting note usage,
            team memory, shared spaces, and avoiding per-minute transcription
            fees.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Fathom offers a strong free plan for individuals and paid tiers for
            advanced summaries, action items, team collaboration, CRM sync,
            coaching, and business workflows.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Check official pricing before choosing. Fathom can be very
            compelling for free individual use, while Granola can be attractive
            for teams that want lightweight, bot-free notes.
          </p>
        </section>

        <section className="mt-12 grid gap-4 md:grid-cols-2">
          {useCases.map((useCase) => (
            <div key={useCase.title} className="rounded-lg border bg-card p-5">
              <h2 className="text-2xl font-semibold">{useCase.title}</h2>
              <CheckList items={useCase.items} />
            </div>
          ))}
        </section>

        <ArticleCta tool="Granola" href={toolLinks.granola} placement="mid" />

        <section className="mt-12 rounded-lg border bg-card p-6">
          <h2 className="text-2xl font-semibold">Verdict</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Granola is better for bot-free meeting notes, human-in-the-loop
            summaries, internal team calls, personal meeting memory, and
            conversations where a visible recorder feels awkward.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Fathom is better for automatic recordings, transcripts,
            follow-ups, searchable call libraries, sales workflows, CRM sync,
            and teams that want meeting intelligence after every call.
          </p>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            <p className="rounded-lg border bg-background p-4">
              <span className="font-medium">Granola Rating:</span> 9/10. Best
              for quiet, bot-free AI meeting notes.
            </p>
            <p className="rounded-lg border bg-background p-4">
              <span className="font-medium">Fathom Rating:</span> 8.5/10. Best
              for recordings, transcripts, and follow-up workflows.
            </p>
          </div>
        </section>

        <section className="mt-12 rounded-lg border bg-foreground p-6 text-background">
          <h2 className="text-xl font-semibold">Bottom line</h2>
          <p className="mt-3 leading-7">
            Choose Granola if you want better meeting notes without a bot.
            Choose Fathom if you want a full meeting recording, transcript, and
            follow-up system.
          </p>
        </section>

        <ArticleCta tool="Granola" href={toolLinks.granola} placement="bottom" />

        <GiscusComments />
      </article>
    </main>
  )
}
