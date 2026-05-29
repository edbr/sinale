import Link from "next/link"
import { ArrowLeft, Check } from "lucide-react"

import { ArticleCta } from "@/components/article/article-cta"
import { GiscusComments } from "@/components/article/giscus-comments"
import { Button } from "@/components/ui/button"
import { toolLinks } from "@/lib/tool-links"

const verdictRows = [
  ["Meeting Summaries", "Tie"],
  ["Fast Follow-Up Workflow", "Fathom"],
  ["Meeting Intelligence", "Read.ai"],
  ["Coaching Signals", "Read.ai"],
  ["CRM Handoff", "Fathom"],
  ["Team Metrics", "Read.ai"],
  ["Recording and Clips", "Fathom"],
  ["Privacy Controls", "Tie"],
  ["Sales Calls", "Fathom"],
  ["Overall Recommendation", "Fathom"],
]

const readAiWins = [
  {
    title: "Stronger Meeting Intelligence",
    body: "Read.ai is better when your team wants more than notes. It tracks meeting performance signals like sentiment, engagement, talk time, speaker coaching, recommendations, and team-level meeting metrics.",
  },
  {
    title: "Broader Cross-Channel Context",
    body: "Read.ai can connect meetings with email, chat, and workspace-level reports. That makes it more useful for teams that want a wider view of communication patterns, not just call summaries.",
  },
  {
    title: "Better for Coaching and Meeting Health",
    body: "If managers want to understand meeting quality, participation, engagement, and team communication habits, Read.ai has a stronger analytics and coaching angle than Fathom.",
  },
  {
    title: "More Explicit Privacy Controls",
    body: "Read.ai puts a lot of emphasis on participant controls, host approval, opt-out commands, report access, deletion, and workspace settings. That matters for teams that need visible governance around meeting measurement.",
  },
]

const fathomWins = [
  {
    title: "Cleaner Meeting-to-Action Workflow",
    body: "Fathom is easier to recommend when the goal is simple: record the call, get a strong summary, pull action items, create follow-up emails, share clips, and move on.",
  },
  {
    title: "Better CRM and Sales Fit",
    body: "Fathom is stronger for customer-facing teams because it supports CRM sync, CRM field sync, customer views, deal views, call highlights, and sales-oriented follow-through.",
  },
  {
    title: "Less Analytics Overhead",
    body: "Some teams want meeting notes without a heavy layer of sentiment, engagement, and performance measurement. Fathom feels more focused and less managerial in day-to-day use.",
  },
  {
    title: "Better Highlight and Clip Workflow",
    body: "Fathom is very good at turning important moments into clips, playlists, summaries, and shareable call artifacts, which is useful for sales, success, hiring, and customer research.",
  },
]

const useCases = [
  {
    title: "Choose Read.ai if",
    items: [
      "You want meeting intelligence, not just notes",
      "You care about sentiment, engagement, and speaker coaching",
      "You want team-level meeting metrics",
      "You need visible participant controls and report governance",
      "You want meetings, email, and chat context connected",
    ],
  },
  {
    title: "Choose Fathom if",
    items: [
      "You want fast summaries and action items",
      "Your team needs CRM sync and sales follow-up",
      "You want clips, highlights, playlists, and call sharing",
      "You prefer a simpler meeting assistant workflow",
      "You do not need engagement or sentiment analytics",
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

export function ReadAiVsFathomComparison() {
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
          Read.ai vs Fathom (2026): Which Meeting Assistant Fits Your Team?
        </h1>

        <div className="mt-8 space-y-5 text-lg leading-8 text-muted-foreground">
          <p>
            Read.ai and Fathom both help teams capture meetings, but they are
            designed around different ideas of what should happen after a call.
          </p>
          <p>
            Read.ai is a meeting intelligence platform. It creates summaries
            and transcripts, but its bigger focus is engagement, sentiment,
            coaching signals, meeting metrics, live dashboards, and team-level
            visibility.
          </p>
          <p>
            Fathom is a meeting workflow tool. It records, transcribes,
            summarizes, creates action items, generates follow-up emails, shares
            clips, and syncs meeting notes into CRM systems.
          </p>
          <p>
            Choose Read.ai if you want to measure and improve meetings. Choose
            Fathom if you want meetings to turn into useful notes, follow-ups,
            and customer workflow updates.
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
              <span className="font-medium">Best for meeting intelligence:</span>{" "}
              Read.ai
            </p>
            <p className="rounded-lg border bg-background p-4">
              <span className="font-medium">Best for follow-through:</span>{" "}
              Fathom
            </p>
          </div>
        </section>

        <section className="mt-12 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border bg-card p-5">
            <h2 className="text-2xl font-semibold">What is Read.ai?</h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              Read.ai is an AI meeting assistant that generates notes,
              summaries, transcripts, playback, highlighted moments, live
              dashboards, meeting metrics, speaker coaching, and team-level
              reports.
            </p>
            <p className="mt-4 leading-7 text-muted-foreground">
              Its main strength is helping teams understand how meetings are
              going, not only what was said.
            </p>
          </div>

          <div className="rounded-lg border bg-card p-5">
            <h2 className="text-2xl font-semibold">What is Fathom?</h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              Fathom is an AI meeting assistant for recording, transcription,
              summaries, action items, follow-up emails, clips, playlists, team
              search, and CRM handoff.
            </p>
            <p className="mt-4 leading-7 text-muted-foreground">
              Its main strength is turning meetings into clean post-call
              outputs that people can act on quickly.
            </p>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Where Read.ai Wins</h2>
          <div className="mt-5 grid gap-4">
            {readAiWins.map((item) => (
              <div key={item.title} className="rounded-lg border bg-card p-5">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {item.body}
                </p>
                <p className="mt-4 text-sm font-medium">Winner: Read.ai</p>
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
            Read.ai vs Fathom for Meeting Intelligence
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Read.ai wins for meeting intelligence. It is built for teams that
            want to see patterns in meetings: engagement, sentiment, questions,
            speaker behavior, coaching recommendations, workspace metrics, and
            live meeting dashboards.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Fathom has useful search, summaries, alerts, coaching metrics, and
            team views, but its center of gravity is still post-meeting
            execution rather than measuring the meeting itself.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            Read.ai vs Fathom for Summaries
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Both tools can produce strong meeting summaries. Read.ai is better
            if the summary should sit alongside transcript, playback, key
            moments, questions, metrics, and coaching signals.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Fathom is better if the summary needs to become follow-up emails,
            action items, clips, CRM notes, customer history, or a quick recap
            that sales and success teams can use immediately.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            Read.ai vs Fathom for Coaching Signals
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Read.ai is the stronger coaching tool for teams that actively want
            feedback on meeting behavior. Sentiment, engagement, speaker
            patterns, recommendations, and team metrics can help managers spot
            recurring communication issues.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            That strength can also be a drawback. Some teams may find meeting
            measurement too intrusive for sensitive 1:1s, executive meetings,
            legal conversations, hiring discussions, or internal strategy work.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            Read.ai vs Fathom for Privacy
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Privacy matters for both tools because meeting assistants can
            record, transcribe, summarize, and distribute sensitive
            conversations. Teams should define clear rules for which meetings
            can be captured, who can invite a bot, who receives reports, how
            long data is retained, and how participants can opt out.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Read.ai is more explicit about meeting measurement controls,
            including host approval, participant opt-out, report access,
            deletion, and workspace-level settings. Fathom offers controls
            around recording, banners, custom bot naming, SSO, CRM sync, and
            custom data retention on higher plans.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            Read.ai vs Fathom for Workflow Fit
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Read.ai fits organizations that want to improve how meetings run.
            It is better for leadership, managers, operations, and teams that
            are comfortable using analytics to review collaboration patterns.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Fathom fits teams that want fewer meeting chores. It is better for
            sales, customer success, recruiting, customer research, and anyone
            who wants fast notes, follow-ups, clips, and CRM updates without a
            broader meeting measurement program.
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
            Read.ai is the better choice if your team wants meeting
            intelligence: summaries, transcripts, engagement metrics, sentiment,
            speaker coaching, live dashboards, workspace reports, and stronger
            visibility into meeting behavior.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Fathom is the better choice if your team wants practical
            follow-through: summaries, action items, follow-up emails, clips,
            team search, CRM updates, customer views, and deal workflows.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            For most teams comparing Read.ai vs Fathom in 2026, Fathom is the
            safer default for everyday meeting productivity. Read.ai is better
            when the team explicitly wants to measure and improve meetings.
          </p>
        </section>

        <ArticleCta tool="Fathom" href={toolLinks.fathom} placement="bottom" />

        <section className="mt-12 rounded-lg border bg-card p-6">
          <h2 className="text-2xl font-semibold">Related Comparisons</h2>
          <div className="mt-4 grid gap-3 text-sm">
            <Link className="underline-offset-4 hover:underline" href="/comparisons/fathom-vs-fireflies">
              Fathom vs Fireflies
            </Link>
            <Link className="underline-offset-4 hover:underline" href="/comparisons/granola-vs-fathom">
              Granola vs Fathom
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
