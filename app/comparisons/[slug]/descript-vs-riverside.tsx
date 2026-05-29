import Link from "next/link"
import { ArrowLeft, Check } from "lucide-react"

import { ArticleCta } from "@/components/article/article-cta"
import { GiscusComments } from "@/components/article/giscus-comments"
import { Button } from "@/components/ui/button"
import { toolLinks } from "@/lib/tool-links"

const verdictRows = [
  ["Podcast Editing", "Descript"],
  ["Remote Recording", "Riverside"],
  ["Transcript Editing", "Descript"],
  ["Guest Video Quality", "Riverside"],
  ["Short Clips", "Tie"],
  ["AI Editing Assistant", "Descript"],
  ["Layouts and Scenes", "Riverside"],
  ["Beginner Editing Workflow", "Descript"],
  ["Live and Studio Recording", "Riverside"],
  ["Overall Recommendation", "Depends on recording vs editing"],
]

const descriptWins = [
  {
    title: "Better for Text-Based Editing",
    body: "Descript's core advantage is editing audio and video by editing the transcript. If you want to cut words, remove filler, tighten rambling sections, clean up pacing, and shape an episode like a document, Descript is the more natural tool.",
  },
  {
    title: "Stronger Post-Production Workflow",
    body: "Descript is better once the recording already exists. Import a recording, transcribe it, edit the script, enhance the audio, create clips, add captions, and export the finished piece.",
  },
  {
    title: "Underlord AI Co-Editor",
    body: "Underlord gives Descript a more ambitious AI editing layer. It can help with captions, clips, transitions, translation, Studio Sound, show notes, and multi-step creative editing tasks.",
  },
  {
    title: "More Approachable for Editing Beginners",
    body: "Traditional video and podcast editing can be intimidating. Descript makes many edits feel like working in a text document, which is easier for creators who do not want to become full-time editors.",
  },
]

const riversideWins = [
  {
    title: "Better for Remote Recording",
    body: "Riverside is the stronger choice when recording quality is the main concern. It is built for remote podcast and video sessions, separate participant tracks, studio-style recording, and reliable capture before editing begins.",
  },
  {
    title: "Higher-Quality Guest Capture",
    body: "Riverside is especially useful for interviews, video podcasts, customer stories, webinars, and distributed teams because it records each participant separately and supports high-resolution exports.",
  },
  {
    title: "Stronger Built-In Recording Studio",
    body: "Riverside feels more like a recording studio with editing attached. It supports studios, guest sessions, layouts, scenes, captions, Magic Audio, eye contact correction, and publishing-oriented exports.",
  },
  {
    title: "Better for Recording-to-Clip Workflows",
    body: "Riverside is strong when the workflow starts with a recording session and ends with a full episode plus social clips. Magic Clips, AI Co-Creator, layouts, and brand elements help repurpose a recording quickly.",
  },
]

const useCases = [
  {
    title: "Choose Descript if",
    items: [
      "You already have recordings and need to edit them faster",
      "Transcript editing is central to your podcast or video workflow",
      "You want AI help with filler words, clarity, captions, and clips",
      "You need a simpler alternative to a traditional video editor",
      "Your bottleneck is post-production, not recording quality",
    ],
  },
  {
    title: "Choose Riverside if",
    items: [
      "You record remote interviews, podcasts, or video shows",
      "Separate guest tracks and recording quality matter",
      "You want recording, clips, layouts, captions, and exports together",
      "You publish full episodes plus social clips from the same session",
      "Your bottleneck is capturing clean source material",
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

export function DescriptVsRiversideComparison() {
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
          Descript vs Riverside (2026): Which Podcast and Video Tool Is Better?
        </h1>

        <div className="mt-8 space-y-5 text-lg leading-8 text-muted-foreground">
          <p>
            Descript and Riverside overlap more than they used to, but they
            still start from different strengths.
          </p>
          <p>
            Descript is the better choice when your biggest problem is editing:
            cutting a podcast by transcript, cleaning audio, removing filler
            words, creating clips, adding captions, and turning rough recordings
            into finished content.
          </p>
          <p>
            Riverside is the better choice when your biggest problem is
            recording: remote guests, separate tracks, high-quality video,
            studio sessions, layouts, full episodes, and clips from one
            recording workflow.
          </p>
          <p>
            The simple rule: record in Riverside when capture quality matters.
            Edit in Descript when post-production speed matters.
          </p>
        </div>

        <ArticleCta tool="Descript" href={toolLinks.descript} placement="top" />

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
              <span className="font-medium">Best for editing:</span> Descript
            </p>
            <p className="rounded-lg border bg-background p-4">
              <span className="font-medium">Best for recording:</span>{" "}
              Riverside
            </p>
          </div>
        </section>

        <section className="mt-12 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border bg-card p-5">
            <h2 className="text-2xl font-semibold">What is Descript?</h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              Descript is an audio and video editing platform built around
              transcript editing. You can record or import media, transcribe it,
              edit by changing text, improve audio with Studio Sound, create
              clips, add captions, and export finished podcast or video assets.
            </p>
            <p className="mt-4 leading-7 text-muted-foreground">
              Its AI co-editor, Underlord, can help with filler word removal,
              shortening word gaps, clips, captions, transitions, show notes,
              translation, and other editing tasks.
            </p>
          </div>

          <div className="rounded-lg border bg-card p-5">
            <h2 className="text-2xl font-semibold">What is Riverside?</h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              Riverside is a remote recording, editing, and repurposing platform
              for podcasts, interviews, webinars, video shows, and social clips.
              It records participants separately and then lets teams edit,
              export, download, and repurpose the session.
            </p>
            <p className="mt-4 leading-7 text-muted-foreground">
              Its editor includes transcript-based edits, clips, captions,
              layouts, Magic Audio, smart mute, eye contact correction, AI
              Co-Creator, and export options for full episodes and short-form
              content.
            </p>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Where Descript Wins</h2>
          <div className="mt-5 grid gap-4">
            {descriptWins.map((item) => (
              <div key={item.title} className="rounded-lg border bg-card p-5">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {item.body}
                </p>
                <p className="mt-4 text-sm font-medium">Winner: Descript</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Where Riverside Wins</h2>
          <div className="mt-5 grid gap-4">
            {riversideWins.map((item) => (
              <div key={item.title} className="rounded-lg border bg-card p-5">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {item.body}
                </p>
                <p className="mt-4 text-sm font-medium">Winner: Riverside</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            Descript vs Riverside for Recording
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Riverside is the better recording-first platform. It is designed
            for remote sessions, separate participant tracks, high-resolution
            exports, guest workflows, and full episodes that need clean source
            files before editing begins.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Descript can record directly and supports remote recording through
            Rooms, but its real advantage appears after the media exists. If the
            recording session itself is the mission-critical step, Riverside is
            the safer starting point.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            Descript vs Riverside for Editing
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Descript wins for editing. The text-based workflow is faster for
            creators who want to remove sections, tighten phrasing, clean up
            pacing, apply Studio Sound, and publish without learning a full
            professional editing suite.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Riverside&apos;s editor has improved and now handles transcript edits,
            pauses, filler words, clips, captions, layouts, smart mute, and
            Magic Audio. It is useful for light-to-medium editing, but Descript
            still feels more purpose-built for post-production.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            Descript vs Riverside for Clips
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            This category is close. Descript is strong if clips are part of a
            broader editing project: cut the transcript, adjust captions, refine
            the story, and export several social versions.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Riverside is strong if clips should come directly from a recording
            session. Magic Clips and AI Co-Creator help turn long recordings
            into promotional clips, posts, and thumbnails without moving the
            project into another tool.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            Descript vs Riverside for Teams
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Descript is a better fit for content teams that already have a
            recording process and need editors, producers, marketers, or
            founders to turn raw media into finished assets quickly.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Riverside is a better fit for teams whose workflow starts with live
            recording: podcasts, interviews, customer stories, internal shows,
            webinars, and distributed video sessions with guests.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Pricing</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Pricing changes often, so check the official pages before choosing.
            Descript pricing is most important to evaluate around transcription,
            export quality, AI credits, Studio Sound, collaboration, and how
            much finished content you create each month.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Riverside pricing is most important to evaluate around recording
            hours, export quality, separate tracks, guest workflow needs, clips,
            team seats, and whether you need the platform for every recording
            session or only selected shows.
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

        <ArticleCta tool="Descript" href={toolLinks.descript} placement="mid" />

        <section className="mt-12 rounded-lg border bg-card p-6">
          <h2 className="text-2xl font-semibold">Verdict</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Descript is the better choice if editing is the pain. It is faster
            for transcript-based editing, podcast cleanup, Studio Sound,
            captions, social clips, and creators who want to produce polished
            content without a traditional editing workflow.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Riverside is the better choice if recording is the pain. It is
            stronger for remote interviews, separate tracks, high-quality guest
            capture, recording sessions, and turning one session into full
            episodes plus clips.
          </p>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            <p className="rounded-lg border bg-background p-4">
              <span className="font-medium">Descript Rating:</span> 9/10. Best
              for editing podcasts and videos from a transcript.
            </p>
            <p className="rounded-lg border bg-background p-4">
              <span className="font-medium">Riverside Rating:</span> 8.8/10.
              Best for remote recording and recording-to-clips workflows.
            </p>
          </div>
        </section>

        <section className="mt-12 rounded-lg border bg-foreground p-6 text-background">
          <h2 className="text-xl font-semibold">Bottom line</h2>
          <p className="mt-3 leading-7">
            Choose Descript when you need to edit faster. Choose Riverside when
            you need to record better. Many serious creators can justify using
            Riverside for capture and Descript for final editing.
          </p>
        </section>

        <ArticleCta
          tool="Descript"
          href={toolLinks.descript}
          placement="bottom"
        />

        <GiscusComments />
      </article>
    </main>
  )
}
