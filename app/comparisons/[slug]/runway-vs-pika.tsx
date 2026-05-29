import Link from "next/link"
import { ArrowLeft, Check } from "lucide-react"

import { ArticleCta } from "@/components/article/article-cta"
import { GiscusComments } from "@/components/article/giscus-comments"
import { Button } from "@/components/ui/button"
import { toolLinks } from "@/lib/tool-links"

const verdictRows = [
  ["Video Quality", "Runway"],
  ["Creative Effects", "Pika"],
  ["Production Control", "Runway"],
  ["Social Clips", "Pika"],
  ["Character Consistency", "Runway"],
  ["Speed for Fun Experiments", "Pika"],
  ["Editing Toolkit", "Runway"],
  ["Beginner Friendliness", "Pika"],
  ["Professional Workflows", "Runway"],
  ["Overall Recommendation", "Runway for production, Pika for playful clips"],
]

const runwayWins = [
  {
    title: "Better for Production-Grade Video",
    body: "Runway is the stronger choice when the output needs to feel closer to a controlled creative asset than a quick novelty clip. Its model quality, editing tools, and broader creative suite make it more useful for serious video work.",
  },
  {
    title: "More Creative Control",
    body: "Runway is built for creators who want to control shots, motion, references, timing, consistency, edits, and iteration. It is better when you are trying to shape a specific scene rather than generate a surprising effect.",
  },
  {
    title: "Stronger Model Direction",
    body: "Runway's Gen-4 and Gen-4.5 direction emphasizes prompt adherence, visual coherence, physics, and consistency across characters, objects, and environments. That matters when a video needs to hold together across shots.",
  },
  {
    title: "Broader Editing Workflow",
    body: "Runway is not only a prompt-to-video toy. It includes generation, editing, image and video tools, background removal, inpainting-style workflows, motion tools, and collaboration features for creative teams.",
  },
]

const pikaWins = [
  {
    title: "Better for Playful Visual Effects",
    body: "Pika is excellent when the goal is a surprising short clip, meme-like transformation, social effect, or fast creative experiment. Pikaffects, Pikaswaps, Pikatwists, and similar features make it feel very accessible.",
  },
  {
    title: "Faster for Social Content",
    body: "If you want to make short clips for TikTok, Reels, YouTube Shorts, ads, or lightweight brand experiments, Pika often gets you to a shareable result faster than a more production-oriented workflow.",
  },
  {
    title: "Easier for Casual Creators",
    body: "Pika is more approachable for people who do not want to learn a full AI filmmaking workflow. Pick a mode, upload or prompt, generate, and iterate until something entertaining appears.",
  },
  {
    title: "Stronger Effects Identity",
    body: "Pika's product identity is built around turning ideas, images, and edits into visually playful moments. That makes it feel more native to the internet clip economy than to traditional production.",
  },
]

const useCases = [
  {
    title: "Choose Runway if",
    items: [
      "You care about high-quality AI video generation",
      "You need better control over motion, shots, and consistency",
      "You are making ads, films, concept videos, or polished campaigns",
      "You want generation and editing tools in one creative workspace",
      "You are willing to spend more time refining the result",
    ],
  },
  {
    title: "Choose Pika if",
    items: [
      "You want fast AI video effects and short clips",
      "You make social-first content or playful brand experiments",
      "You value speed and surprise over production control",
      "You want templates and effects that are easy to try",
      "You are experimenting before committing to a serious video workflow",
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

export function RunwayVsPikaComparison() {
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
          Runway vs Pika (2026): Which AI Video Tool Should Creators Use?
        </h1>

        <div className="mt-8 space-y-5 text-lg leading-8 text-muted-foreground">
          <p>
            Runway and Pika are both important AI video tools, but they serve
            different creative jobs.
          </p>
          <p>
            Runway is the better choice for creators who want more control,
            better model quality, stronger editing tools, and production-ready
            workflows. It is where I would start for serious AI video work,
            concept films, ads, brand scenes, and polished creative assets.
          </p>
          <p>
            Pika is the better choice for fast, playful, social-first video
            experiments. It is especially good for effects, transformations,
            quick clips, and internet-native ideas where speed and surprise
            matter more than precise direction.
          </p>
          <p>
            The simple rule: choose Runway when the video needs control. Choose
            Pika when the video needs energy.
          </p>
        </div>

        <ArticleCta tool="Runway" href={toolLinks.runway} placement="top" />

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
              <span className="font-medium">Best for production:</span> Runway
            </p>
            <p className="rounded-lg border bg-background p-4">
              <span className="font-medium">Best for social effects:</span>{" "}
              Pika
            </p>
          </div>
        </section>

        <section className="mt-12 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border bg-card p-5">
            <h2 className="text-2xl font-semibold">What is Runway?</h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              Runway is an AI creative platform for video generation, editing,
              image generation, motion tools, visual effects, and collaborative
              production workflows. Its recent Gen-4 and Gen-4.5 direction is
              focused on higher-quality, more coherent video generation.
            </p>
            <p className="mt-4 leading-7 text-muted-foreground">
              Runway is best when you want to direct a scene, refine a visual
              idea, keep characters or objects consistent, and combine AI
              generation with a broader editing workflow.
            </p>
          </div>

          <div className="rounded-lg border bg-card p-5">
            <h2 className="text-2xl font-semibold">What is Pika?</h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              Pika is an AI video creation platform for turning prompts, images,
              and effects into short videos. It is known for playful tools like
              Pikaframes, Pikaffects, Pikaswaps, Pikatwists, and fast
              social-style transformations.
            </p>
            <p className="mt-4 leading-7 text-muted-foreground">
              Pika is best when you want a quick, surprising, shareable clip
              rather than a heavily directed production workflow.
            </p>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Where Runway Wins</h2>
          <div className="mt-5 grid gap-4">
            {runwayWins.map((item) => (
              <div key={item.title} className="rounded-lg border bg-card p-5">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {item.body}
                </p>
                <p className="mt-4 text-sm font-medium">Winner: Runway</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Where Pika Wins</h2>
          <div className="mt-5 grid gap-4">
            {pikaWins.map((item) => (
              <div key={item.title} className="rounded-lg border bg-card p-5">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {item.body}
                </p>
                <p className="mt-4 text-sm font-medium">Winner: Pika</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            Runway vs Pika for Video Quality
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Runway has the advantage for video quality and coherence. Its models
            are built for creators who care about motion, prompt adherence,
            lighting, camera direction, and visual consistency across shots.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Pika can create impressive clips, especially for short effects and
            stylized ideas, but it is less reliable when the creative brief
            requires precise direction or a sequence that feels production
            ready.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            Runway vs Pika for Creative Control
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Runway is stronger for creators who want to direct. Reference
            images, model selection, editing tools, camera movement, extensions,
            and broader creative controls make it easier to shape a final
            result intentionally.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Pika is stronger when you want a fast effect or transformation. It
            rewards experimentation: try an effect, change the input, generate
            another version, and see what feels shareable.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            Runway vs Pika for Social Content
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Pika is excellent for short social videos because its feature set is
            playful and direct. It works well for transformations, memes,
            surreal effects, quick brand experiments, and creative prompts that
            benefit from surprise.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Runway can also create social content, but it shines when the clip
            is part of a bigger creative system: ad concepts, campaign visuals,
            film experiments, product videos, or polished edits that need more
            control.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            Runway vs Pika for Teams
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Runway is the better fit for creative teams that need projects,
            collaboration, model quality, review, and a toolkit that can support
            actual production work. It is easier to justify when AI video is
            part of a real brand or studio workflow.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Pika is a better fit for individual creators, social teams, and
            marketers who need fast experimentation. It is less about production
            infrastructure and more about quickly finding a compelling visual
            idea.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Pricing</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Both tools use plan and credit-based models, and pricing can change
            quickly as video models improve. Check the official pricing pages
            before committing to a workflow, especially if you expect heavy
            generation volume.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Runway is easier to justify when the generated output replaces real
            production effort. Pika is easier to justify when the goal is fast
            experimentation, social clips, and lightweight creative volume.
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

        <ArticleCta tool="Runway" href={toolLinks.runway} placement="mid" />

        <section className="mt-12 rounded-lg border bg-card p-6">
          <h2 className="text-2xl font-semibold">Verdict</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Runway is the better AI video tool for production-minded creators.
            It has stronger video quality, more control, a broader editing
            toolkit, and a clearer path from idea to polished creative asset.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Pika is the better AI video tool for playful, fast, social-first
            clips. It is approachable, effects-driven, and useful when you want
            a surprising short video more than a carefully directed scene.
          </p>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            <p className="rounded-lg border bg-background p-4">
              <span className="font-medium">Runway Rating:</span> 9/10. Best
              for AI video quality, control, and production workflows.
            </p>
            <p className="rounded-lg border bg-background p-4">
              <span className="font-medium">Pika Rating:</span> 8.5/10. Best
              for quick effects, social clips, and playful video experiments.
            </p>
          </div>
        </section>

        <section className="mt-12 rounded-lg border bg-foreground p-6 text-background">
          <h2 className="text-xl font-semibold">Bottom line</h2>
          <p className="mt-3 leading-7">
            Choose Runway when you need higher-quality AI video and creative
            control. Choose Pika when you want fast, fun clips and effects that
            can move quickly on social channels.
          </p>
        </section>

        <ArticleCta tool="Runway" href={toolLinks.runway} placement="bottom" />

        <GiscusComments />
      </article>
    </main>
  )
}
