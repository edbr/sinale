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
  "Creators making short-form videos for TikTok, Reels, Shorts, and LinkedIn",
  "Marketers who need captions, resizing, translation, and quick edits",
  "Teams that want AI-generated B-roll, voiceovers, sounds, music, and visuals",
  "Founders and small businesses producing polished videos without a full editor",
  "Creators who want avatars, AI Twins, AI ads, or script-to-video workflows",
]

const notFor = [
  "Editors who need a full professional NLE like Premiere Pro or DaVinci Resolve",
  "Teams that only need a free basic subtitle generator",
  "Long-form video teams with complex timelines, color, audio, and asset management",
  "Creators who do not want a credit-based model for generative AI features",
  "Organizations that require enterprise review of AI media, likeness, and training data",
]

const features = [
  {
    title: "AI Captions",
    body: "Captions generates subtitles in 100+ languages, supports caption templates, custom caption styling, keyframes, and transcript downloads depending on the plan.",
  },
  {
    title: "AI Video Editing",
    body: "Captions includes one-tap AI Edit, chat-based editing, trims, zooms, transitions, resizing, title cards, denoise, censor, and other creator-focused editing tools.",
  },
  {
    title: "AI Video Generation",
    body: "Higher tiers unlock tools such as AI Creator, AI Ads, AI Skits, AI Twins, prompt-to-video, script-to-video, AI images, AI video, B-roll, music, and sound effects.",
  },
  {
    title: "Translation and Lipdub",
    body: "Captions can translate videos and use AI Lipdub to adapt spoken content across languages while keeping the video more natural for social audiences.",
  },
  {
    title: "Eye Contact and Audio",
    body: "The app includes AI Eye Contact, denoise, voiceover, voice clone, AI sound effects, and audio cleanup tools for talking-head and creator videos.",
  },
  {
    title: "Mobile and Web Workflow",
    body: "Captions works across mobile and web, with plan access and some pricing details varying by platform, region, app store, and subscription type.",
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

export function CaptionsToolPage({ relatedItems }: { relatedItems: CardItem[] }) {
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
        <ToolLogo name="Captions" className="mb-5 size-12 rounded-lg" />
        <h1 className="text-5xl font-semibold tracking-tight md:text-6xl">
          Captions
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          Captions is listed in Sinale&apos;s AI video directory for AI captions,
          short-form editing, AI video generation, avatars, translation, eye
          contact correction, audio cleanup, and creator workflows.
        </p>

        <div className="mt-8 space-y-5 text-lg leading-8 text-muted-foreground">
          <p>
            Captions started from the obvious creator pain: adding polished
            subtitles to social video is tedious. Today, it is broader than the
            name suggests. Captions is an AI video editor for creators,
            marketers, founders, and small teams that need to turn ideas,
            talking-head footage, scripts, or prompts into finished video.
          </p>
          <p>
            The product combines practical editing features with generative AI.
            You can create captions, resize clips, correct eye contact, clean
            audio, translate videos, generate B-roll, use AI actors or twins,
            build AI ads, and edit with a chat-style workflow on higher plans.
          </p>
          <p>
            The tradeoff is that Captions is optimized for fast creator output,
            not deep professional post-production. It is best when speed,
            social polish, and AI assistance matter more than granular timeline
            control.
          </p>
        </div>

        <ArticleCta tool="Captions" href={toolLinks.captions} placement="top" />

        <section className="mt-12 rounded-lg border bg-card p-6">
          <h2 className="text-2xl font-semibold">Quick Verdict</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Captions is a strong fit for creators and lean marketing teams that
            publish frequent short-form video and want one app for captions,
            cleanup, quick edits, translation, and AI-generated assets.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Choose it for speed and convenience. Skip it if you need a full
            production editor, a purely free captioning workflow, or predictable
            heavy generative usage without thinking about credits.
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
          <h2 className="text-2xl font-semibold">What Captions Does</h2>
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
            Captions for Short-Form Video
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Captions is especially useful for vertical video where captions are
            part of the creative, not just accessibility metadata. The app can
            generate captions, style them, resize the video, trim dead space,
            add effects, and prepare clips for feeds where many people watch
            without sound.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            The best workflow still includes human taste. Use Captions to get
            the first version fast, then review the hook, pacing, caption
            accuracy, line breaks, brand voice, and calls to action before
            publishing.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            Captions for AI Video Generation
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            On higher plans, Captions moves into generative video creation. It
            can help create AI ads, AI skits, AI Creator videos, AI Twins,
            prompt-to-video assets, voiceovers, images, music, sound effects,
            and B-roll.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            That makes it useful for testing creative ideas quickly. It also
            means teams should set review rules for likeness, claims,
            disclosures, brand safety, and whether AI-generated people or voices
            are acceptable for the channel.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Pricing Notes</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Captions publishes iOS plan pricing in USD. Pro is listed at $9.99
            per month, Max at $24.99 per month, Scale at $69.99 per month,
            Scale 2x at $139.99 per month, and Scale 4x at $279.99 per month.
            Enterprise is custom.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            The free plan includes limited editing and 60 to 200 lifetime
            credits. Pro includes 200 monthly credits, Max includes 500, Scale
            includes 1,400, Scale 2x includes 2,800, and Scale 4x includes
            5,600.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Credits are used by AI features such as prompt-to-video, AI Edit, AI
            Creator, AI Ads, AI Skits, AI images, AI video, music, voiceover,
            sound effects, and chat-based edits. Credit use varies by feature,
            duration, model, and generation choices.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Captions notes that prices can vary by country, currency, app store,
            platform, and checkout path. Confirm the exact plan and credit
            allowance in the app before building a production workflow around
            it.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Final Recommendation</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Choose Captions if you want a fast AI-assisted video workflow for
            social content, talking-head videos, ads, explainers, and creator
            clips. It is strongest when the goal is publishing more polished
            video with less editing labor.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            For teams, start with a few representative videos and track the real
            cost in credits, revision time, export quality, and brand review.
            Captions is easy to like, but the right plan depends on how often
            you use the generative features.
          </p>
        </section>

        <ArticleCta tool="Captions" href={toolLinks.captions} placement="bottom" />

        <RelatedContent title="More tools" items={relatedItems} />

        <GiscusComments />
      </article>
    </main>
  )
}
