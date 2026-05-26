import Link from "next/link"
import { ArrowLeft, Check } from "lucide-react"

import { ArticleCta } from "@/components/article/article-cta"
import { GiscusComments } from "@/components/article/giscus-comments"
import { RelatedContent } from "@/components/article/related-content"
import { Button } from "@/components/ui/button"
import { toolLinks } from "@/lib/tool-links"
import type { CardItem } from "@/lib/site-content"

const bestFor = [
  "Creators repurposing podcasts, interviews, webinars, and livestreams",
  "Marketing teams turning long videos into Shorts, Reels, and TikToks",
  "Founders and educators who want more social clips from existing content",
  "Agencies that need faster first cuts before human polishing",
  "Teams that want captions, reframing, hooks, and publishing in one workflow",
]

const notFor = [
  "Teams that need a full professional editing suite",
  "Creators who only publish polished long-form video",
  "Brands that need frame-perfect manual editing from the start",
  "Teams with very high source-video volume and tight credit budgets",
  "People who expect AI to pick every clip perfectly without review",
]

const features = [
  {
    title: "AI Clipping",
    body: "Opus Clip analyzes long videos and suggests short clips that can work for social platforms. It is strongest when the source video has clear moments, useful explanations, interviews, reactions, or audience-friendly takeaways.",
  },
  {
    title: "Virality Score",
    body: "The virality score helps creators triage generated clips. It should not replace judgment, but it is useful when a long recording produces many possible short-form edits.",
  },
  {
    title: "Animated Captions",
    body: "Opus Clip can generate animated captions, emoji highlights, keyword emphasis, and multi-language transcription. This is useful for social feeds where many viewers watch without sound.",
  },
  {
    title: "AI Reframe",
    body: "AI Reframe resizes horizontal or mixed-format footage into vertical, square, or horizontal layouts so clips can be adapted for TikTok, Instagram Reels, YouTube Shorts, LinkedIn, and other platforms.",
  },
  {
    title: "AI B-Roll and Editing",
    body: "On paid plans, Opus Clip adds editing tools like AI B-roll, text and timeline editing, speech enhancement, filler removal, custom fonts, brand templates, and exports for more advanced editing workflows.",
  },
  {
    title: "Social Publishing",
    body: "Opus Clip supports downloading clips and posting or scheduling to social platforms, which helps creators turn one long recording into a consistent short-form publishing cadence.",
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

export function OpusClipToolPage({ relatedItems }: { relatedItems: CardItem[] }) {
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
        <h1 className="text-5xl font-semibold tracking-tight md:text-6xl">
          Opus Clip
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          Opus Clip is listed in Sinale&apos;s AI video directory for video
          generation, editing, avatars, clips, captions, and creative
          workflows.
        </p>

        <div className="mt-8 space-y-5 text-lg leading-8 text-muted-foreground">
          <p>
            Opus Clip is an AI video repurposing tool that turns long-form
            videos into short clips for social platforms. It is built for the
            creator workflow where one podcast, webinar, interview, livestream,
            or YouTube video needs to become multiple vertical clips.
          </p>
          <p>
            The product is strongest when you already have long video content
            and need faster clipping, captions, reframing, hooks, and posting.
            It is not a replacement for a full editor like Premiere Pro,
            DaVinci Resolve, Final Cut, or Descript.
          </p>
          <p>
            The main tradeoff is control. Opus Clip can save a lot of editing
            time, but creators still need to review the selected moments, adjust
            captions, polish hooks, and choose which clips match their brand.
          </p>
        </div>

        <ArticleCta tool="Opus Clip" href={toolLinks.opusClip} placement="top" />

        <section className="mt-12 rounded-lg border bg-card p-6">
          <h2 className="text-2xl font-semibold">Quick Verdict</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Opus Clip is one of the most practical AI video tools for turning
            long videos into short-form clips. It is especially useful for
            podcasters, YouTubers, educators, founders, marketers, agencies,
            and livestreamers who want more mileage from existing content.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Choose it if your bottleneck is finding, cutting, captioning, and
            formatting social clips. Skip it if your bottleneck is deep video
            editing, motion design, color, sound mixing, or narrative control.
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
          <h2 className="text-2xl font-semibold">What Opus Clip Does</h2>
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
            Opus Clip for Video Repurposing
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Opus Clip is best understood as a repurposing engine. You bring a
            long video, and it helps identify short-form moments, generate
            captions, resize the frame, add hooks, and prepare clips for social
            distribution.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            That workflow is valuable because most creators and teams already
            have more long-form content than they can manually clip. Opus Clip
            reduces the first-pass editing work so you can spend more time
            selecting, refining, and publishing.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            Opus Clip for Captions and Formatting
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Captions are a core reason to use Opus Clip. The tool can generate
            animated captions, highlight keywords, add emojis, and adapt clips
            for vertical feeds where captions often carry the first few seconds
            of attention.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            AI Reframe is also useful when the source content was not recorded
            for vertical video. Interviews, webinars, screen shares, and
            livestreams often need automatic subject tracking and layout changes
            before they feel native on short-form platforms.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            Opus Clip for Teams and Agencies
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            For teams, Opus Clip is useful when the same source video needs to
            produce many clips across multiple channels. Brand templates, custom
            fonts, team workspaces, social account connections, bulk exporting,
            and scheduler features make it easier to operationalize clipping.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Agencies should still treat AI clips as drafts. Opus Clip can speed
            up discovery and rough cuts, but client-ready edits often need a
            human pass for pacing, captions, brand voice, calls to action, and
            platform-specific hooks.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Pricing Notes</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Opus Clip uses a credit model where processing capacity is tied to
            source video minutes. The free plan includes limited monthly
            credits with watermark and export limits. Starter is aimed at
            individual creators, Pro adds more credits and team-oriented
            features, and Business is custom for organizations that need API,
            more seats, more credits, and enterprise support.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            The important budgeting question is source-video volume. If you
            process a few videos per month, the value can be obvious. If you
            process many long podcasts, webinars, or livestreams, credits can
            become the limiting factor.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Final Recommendation</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Choose Opus Clip if you have long-form video and want a faster way
            to create short clips with captions, reframing, hooks, and social
            publishing. It is one of the easiest ways to turn a single recording
            into a repeatable content repurposing workflow.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Do not expect it to replace creative judgment. The best results
            come when Opus Clip handles the first pass and a person chooses the
            best clips, tightens captions, edits the opening seconds, and
            publishes with platform-specific context.
          </p>
        </section>

        <ArticleCta tool="Opus Clip" href={toolLinks.opusClip} placement="bottom" />

        <RelatedContent title="More tools" items={relatedItems} />

        <GiscusComments />
      </article>
    </main>
  )
}
