import Link from "next/link"
import { ArrowLeft, Check } from "lucide-react"

import { ArticleCta } from "@/components/article/article-cta"
import { GiscusComments } from "@/components/article/giscus-comments"
import { Button } from "@/components/ui/button"
import { toolLinks } from "@/lib/tool-links"

const verdictRows = [
  ["Lightweight AI Notes", "Granola"],
  ["Transcription", "Otter"],
  ["Speaker Identification", "Otter"],
  ["Bot-Free Meetings", "Granola"],
  ["Collaboration", "Otter"],
  ["Privacy Feel", "Granola"],
  ["Searchable Transcript Archive", "Otter"],
  ["Meeting Follow-Through", "Tie"],
  ["Internal Team Calls", "Granola"],
  ["General Transcription", "Otter"],
]

const granolaWins = [
  {
    title: "Better Lightweight Notes",
    body: "Granola is built for people who want useful notes, not a giant transcript archive. You jot rough notes during the call, and Granola enhances them with AI afterward.",
  },
  {
    title: "Bot-Free Meeting Experience",
    body: "Granola does not join as a meeting participant. That makes it feel more natural for internal meetings, 1:1s, sensitive conversations, customer discovery, and founder calls.",
  },
  {
    title: "Better Privacy Perception",
    body: "Because Granola does not visibly join the call and does not center the experience around stored audio/video playback, it feels less intrusive than traditional meeting bots.",
  },
  {
    title: "More Human-in-the-Loop",
    body: "Granola works best when you still want to guide the notes. Your own rough bullets shape the final summary, which can make the result more useful than a fully automatic transcript summary.",
  },
]

const otterWins = [
  {
    title: "Better Transcription",
    body: "Otter is transcription-first. It is stronger when you need a real-time transcript, speaker labels, searchable text, imports, and a meeting record that can be reviewed later.",
  },
  {
    title: "Better Collaboration",
    body: "Otter is useful for teams that want shared transcripts, comments, highlights, assigned items, shared notes, and a common place to review what happened in meetings.",
  },
  {
    title: "Better for Classes, Interviews, and Long Calls",
    body: "If the meeting itself is the record, Otter makes more sense. It is a better fit for lectures, interviews, workshops, webinars, and calls where transcript accuracy matters.",
  },
  {
    title: "More Mature Meeting Capture Workflow",
    body: "Otter has been focused on speech-to-text and meeting capture for years. Its strengths are reliability, searchable transcripts, speaker identification, and classic AI meeting note workflows.",
  },
]

const useCases = [
  {
    title: "Choose Granola if",
    items: [
      "You want lightweight AI-enhanced notes",
      "You do not want a bot joining meetings",
      "You take rough notes and want AI to clean them up",
      "You mostly need internal meeting memory",
      "You care more about summaries than complete transcripts",
    ],
  },
  {
    title: "Choose Otter if",
    items: [
      "You need accurate real-time transcription",
      "You want speaker labels and searchable transcripts",
      "You need collaboration around meeting records",
      "You record classes, interviews, webinars, or long calls",
      "You want a traditional AI meeting transcription workflow",
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

export function GranolaVsOtterComparison() {
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
          Granola vs Otter (2026): Which Meeting Notes Tool Should You Use?
        </h1>

        <div className="mt-8 space-y-5 text-lg leading-8 text-muted-foreground">
          <p>
            Granola and Otter both help you remember what happened in meetings,
            but they approach the problem from opposite directions.
          </p>
          <p>
            Granola is a lightweight AI notes tool. It is designed for people
            who want better meeting notes without a visible bot, heavy call
            archive, or transcript-first workflow.
          </p>
          <p>
            Otter is a transcription-first meeting assistant. It is designed
            for people and teams that want real-time transcripts, speaker
            labels, summaries, search, collaboration, and shareable meeting
            records.
          </p>
          <p>
            Choose Granola if you want better notes. Choose Otter if you need
            better transcripts.
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
              <span className="font-medium">Best lightweight notes:</span>{" "}
              Granola
            </p>
            <p className="rounded-lg border bg-background p-4">
              <span className="font-medium">Best transcription:</span> Otter
            </p>
          </div>
        </section>

        <section className="mt-12 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border bg-card p-5">
            <h2 className="text-2xl font-semibold">What is Granola?</h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              Granola is an AI meeting notes app that lets you take rough notes
              during a meeting and then uses AI to turn those notes into a more
              structured summary.
            </p>
            <p className="mt-4 leading-7 text-muted-foreground">
              It is best for people who want a quiet note layer, not a visible
              meeting bot or full recording system.
            </p>
          </div>

          <div className="rounded-lg border bg-card p-5">
            <h2 className="text-2xl font-semibold">What is Otter?</h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              Otter is an AI meeting transcription and note-taking platform for
              real-time transcripts, speaker identification, summaries,
              collaboration, imports, and searchable meeting records.
            </p>
            <p className="mt-4 leading-7 text-muted-foreground">
              It is best for people who want meeting capture first and
              AI-generated notes second.
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
          <h2 className="text-2xl font-semibold">
            Granola vs Otter for Lightweight AI Notes
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Granola wins if your goal is a clean meeting summary. It lets you
            type what you notice, then uses AI to expand and structure the
            result after the meeting.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Otter can summarize meetings too, but the workflow begins with
            transcription. If you do not want a transcript-first process,
            Granola feels lighter.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            Granola vs Otter for Transcription
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Otter wins for transcription. It is built around real-time
            speech-to-text, speaker identification, transcript search, imports,
            and meeting capture across Zoom, Google Meet, and Microsoft Teams.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Granola uses transcript context to improve notes, but it is not the
            tool I would choose if the transcript itself is the primary asset.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            Granola vs Otter for Collaboration
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Otter is stronger for collaboration around meeting records. Shared
            transcripts, comments, highlights, summaries, and team access make
            it more useful when many people need to reference the same meeting.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Granola is better for personal or lightweight team memory. It is
            useful when the goal is to capture the useful bits, not to build a
            shared transcript archive.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Privacy and Meeting Feel</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Granola feels more private because it avoids the visible bot
            experience and emphasizes local capture plus AI-enhanced notes. For
            sensitive calls, that can make the meeting feel more natural.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Otter is more explicit about capture. That can be a benefit when
            everyone needs a record, but it also means teams should be careful
            about consent, workspace settings, retention, and recording
            expectations.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Pricing</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Granola pricing is positioned around lightweight AI notes, meeting
            history, shared folders, integrations, and team usage without
            per-minute transcription pricing.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Otter pricing is tied more directly to transcription minutes,
            conversation limits, collaboration features, imports, team admin,
            and business or enterprise controls.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Check both official pricing pages before choosing. Granola can be
            better value if you need notes. Otter can be better value if you
            need transcripts.
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
            Granola is better for lightweight AI notes, bot-free meetings,
            personal meeting memory, internal calls, and situations where you
            want better summaries without a heavy meeting capture system.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Otter is better for transcription, speaker identification,
            collaboration, searchable meeting records, imports, and teams that
            need the transcript as a source of truth.
          </p>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            <p className="rounded-lg border bg-background p-4">
              <span className="font-medium">Granola Rating:</span> 9/10. Best
              for lightweight AI meeting notes.
            </p>
            <p className="rounded-lg border bg-background p-4">
              <span className="font-medium">Otter Rating:</span> 8.5/10. Best
              for transcription-first meeting workflows.
            </p>
          </div>
        </section>

        <section className="mt-12 rounded-lg border bg-foreground p-6 text-background">
          <h2 className="text-xl font-semibold">Bottom line</h2>
          <p className="mt-3 leading-7">
            Choose Granola if you want better notes with less meeting friction.
            Choose Otter if you need a reliable transcript and shared meeting
            record.
          </p>
        </section>

        <ArticleCta tool="Granola" href={toolLinks.granola} placement="bottom" />

        <GiscusComments />
      </article>
    </main>
  )
}
