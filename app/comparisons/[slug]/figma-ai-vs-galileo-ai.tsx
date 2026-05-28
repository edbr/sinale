import Link from "next/link"
import { ArrowLeft, Check } from "lucide-react"

import { ArticleCta } from "@/components/article/article-cta"
import { GiscusComments } from "@/components/article/giscus-comments"
import { Button } from "@/components/ui/button"
import { toolLinks } from "@/lib/tool-links"

const verdictRows = [
  ["Native Design Workflow", "Figma AI"],
  ["Prompt-to-UI Generation", "Galileo AI / Stitch"],
  ["Team Collaboration", "Figma AI"],
  ["Fast Concept Exploration", "Galileo AI / Stitch"],
  ["Design System Fit", "Figma AI"],
  ["Non-Designer Access", "Galileo AI / Stitch"],
  ["Editing Existing Designs", "Figma AI"],
  ["Code-Adjacent Prototypes", "Galileo AI / Stitch"],
  ["Professional Handoff", "Figma AI"],
  ["Overall Recommendation", "Figma AI for teams, Galileo for first drafts"],
]

const figmaWins = [
  {
    title: "Better Inside Real Design Workflows",
    body: "Figma AI wins when the work needs to stay inside the tool designers already use for files, comments, components, variables, prototypes, developer handoff, and team collaboration.",
  },
  {
    title: "Stronger for Editing Existing Designs",
    body: "Figma AI is more useful when you already have a file, product surface, design system, or team convention. It can help generate first drafts, make changes, rename layers, search assets, rewrite copy, and assist inside the actual canvas.",
  },
  {
    title: "Better for Design Systems",
    body: "Professional product design is rarely just a pretty screen. Figma has the advantage when outputs need to connect to components, auto layout, variables, prototyping, comments, Dev Mode, and existing design standards.",
  },
  {
    title: "Safer for Product Teams",
    body: "Figma is the better default for teams that need review, collaboration, version history, permissions, libraries, and a shared source of truth. AI is an assistant inside the design system, not a separate destination.",
  },
]

const galileoWins = [
  {
    title: "Better for Prompt-to-UI Starts",
    body: "Galileo AI became known for turning natural-language prompts into high-fidelity interface concepts quickly. The current practical successor is Google Stitch, which pushes that idea further with AI-native UI generation.",
  },
  {
    title: "Faster for Blank-Canvas Ideation",
    body: "If you only have a rough product idea and need visual options fast, Galileo-style tools are often more exciting than starting inside a mature design file. They compress the blank-canvas phase into a few prompts.",
  },
  {
    title: "More Accessible for Non-Designers",
    body: "Product managers, founders, and engineers can describe a screen and get something visual to react to. That does not replace design judgment, but it helps teams discuss ideas earlier.",
  },
  {
    title: "Better for Experimental UI Generation",
    body: "Galileo AI and Stitch are best viewed as generative UI tools. They are useful for exploring flows, layouts, and front-end directions before a designer refines the work in Figma or another production tool.",
  },
]

const useCases = [
  {
    title: "Choose Figma AI if",
    items: [
      "Your design team already works in Figma",
      "You need AI inside existing files and design systems",
      "Collaboration, comments, components, and handoff matter",
      "You are editing real product work, not just generating concepts",
      "Design quality needs review from experienced designers",
    ],
  },
  {
    title: "Choose Galileo AI / Stitch if",
    items: [
      "You want fast prompt-to-UI concept generation",
      "A founder or PM needs quick visual options",
      "You are exploring early product directions",
      "You want code-adjacent prototypes or generated front-end ideas",
      "You plan to refine the best output in Figma afterward",
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

export function FigmaAiVsGalileoAiComparison() {
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
          Figma AI vs Galileo AI (2026): Which Design AI Tool Should You Try?
        </h1>

        <div className="mt-8 space-y-5 text-lg leading-8 text-muted-foreground">
          <p>
            Figma AI and Galileo AI represent two different directions for AI
            product design.
          </p>
          <p>
            Figma AI is best when AI needs to live inside a real design
            workflow. It helps with first drafts, design edits, search, copy,
            layer organization, prototyping, and collaboration inside the tool
            where product teams already make decisions.
          </p>
          <p>
            Galileo AI became popular as a prompt-to-UI generator for quickly
            turning product ideas into high-fidelity screen concepts. In 2026,
            the more current practical reference point is Google Stitch, which
            continues that AI-native UI generation direction.
          </p>
          <p>
            The simple rule: use Figma AI when the design needs to become real
            product work. Use Galileo-style generation when the idea needs a
            quick visual starting point.
          </p>
        </div>

        <ArticleCta tool="Figma" href={toolLinks.figma} placement="top" />

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
              <span className="font-medium">Best for product teams:</span>{" "}
              Figma AI
            </p>
            <p className="rounded-lg border bg-background p-4">
              <span className="font-medium">Best for quick UI concepts:</span>{" "}
              Galileo AI / Stitch
            </p>
          </div>
        </section>

        <section className="mt-12 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border bg-card p-5">
            <h2 className="text-2xl font-semibold">What is Figma AI?</h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              Figma AI is a set of AI features inside Figma Design. It can help
              generate first drafts, make changes to designs, find assets,
              rewrite copy, remove image backgrounds, create prototypes, rename
              layers, and speed up common product design tasks.
            </p>
            <p className="mt-4 leading-7 text-muted-foreground">
              Its biggest advantage is context. The work happens inside Figma,
              alongside components, variables, comments, prototypes, Dev Mode,
              design systems, and team files.
            </p>
          </div>

          <div className="rounded-lg border bg-card p-5">
            <h2 className="text-2xl font-semibold">What is Galileo AI?</h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              Galileo AI was known as a text-to-UI design generator that could
              turn prompts and references into high-fidelity interface concepts,
              often with Figma export for further refinement.
            </p>
            <p className="mt-4 leading-7 text-muted-foreground">
              The original Galileo design direction is now best understood
              alongside Google Stitch, a Google Labs AI UI design tool for
              generating and iterating on interface ideas from natural language.
            </p>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Where Figma AI Wins</h2>
          <div className="mt-5 grid gap-4">
            {figmaWins.map((item) => (
              <div key={item.title} className="rounded-lg border bg-card p-5">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {item.body}
                </p>
                <p className="mt-4 text-sm font-medium">Winner: Figma AI</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Where Galileo AI Wins</h2>
          <div className="mt-5 grid gap-4">
            {galileoWins.map((item) => (
              <div key={item.title} className="rounded-lg border bg-card p-5">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {item.body}
                </p>
                <p className="mt-4 text-sm font-medium">
                  Winner: Galileo AI / Stitch
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            Figma AI vs Galileo AI for UI Generation
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Galileo-style tools are stronger when the goal is a quick visual
            first pass from a prompt. They are good for exploring dashboard
            layouts, onboarding flows, mobile screens, landing page ideas, and
            stakeholder-facing concepts.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Figma AI is stronger when the generated work needs to connect to an
            existing design system. First Draft is useful, but the real value is
            that the design can continue inside Figma instead of becoming a
            throwaway mockup.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            Figma AI vs Galileo AI for Professional Design
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Professional designers should treat both tools as accelerators, not
            replacements. AI can produce a starting point, suggest structure,
            and speed up repetitive work, but it does not understand strategy,
            user research, constraints, accessibility, or product tradeoffs on
            its own.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Figma AI has the advantage once a real team is involved because the
            file can be reviewed, annotated, connected to components, handed off
            to developers, and maintained over time.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            Figma AI vs Galileo AI for Founders and PMs
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Founders and product managers may prefer Galileo-style generation
            when they need to visualize an idea quickly before involving a
            designer. It is useful for pitch decks, MVP conversations, early
            product concepts, and alignment meetings.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Figma AI becomes more useful once the team needs to refine the idea,
            compare alternatives, comment on details, create prototypes, and
            preserve decisions in the source design file.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            Figma AI vs Galileo AI for Handoff
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Figma AI wins for handoff because Figma is already the standard
            place many teams use for specs, inspection, prototypes, components,
            comments, and developer collaboration.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Galileo AI and Stitch can be useful earlier in the process,
            especially when paired with export to Figma or code. But generated
            UI still needs product review, accessibility review, responsive
            behavior, content cleanup, and design system alignment.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Pricing</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Figma AI access depends on Figma plan, seat type, workspace
            settings, and which AI features are available to your team. It is
            easiest to justify if Figma is already the design system and
            collaboration hub.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Galileo AI pricing and availability have shifted as the original
            design product moved into the Stitch/Google Labs direction. Check
            the current product page before making it part of a paid workflow.
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

        <ArticleCta tool="Figma" href={toolLinks.figma} placement="mid" />

        <section className="mt-12 rounded-lg border bg-card p-6">
          <h2 className="text-2xl font-semibold">Verdict</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Figma AI is the better choice for professional product teams because
            it sits inside the design environment where real design work,
            collaboration, systems, prototypes, and handoff already happen.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Galileo AI, and its current Stitch-style successor category, is the
            better choice for fast prompt-to-UI exploration before the design
            needs to become a maintained product artifact.
          </p>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            <p className="rounded-lg border bg-background p-4">
              <span className="font-medium">Figma AI Rating:</span> 8.8/10.
              Best for AI-assisted design inside real team workflows.
            </p>
            <p className="rounded-lg border bg-background p-4">
              <span className="font-medium">Galileo AI Rating:</span> 8.4/10.
              Best for fast prompt-to-UI concepts and early visual exploration.
            </p>
          </div>
        </section>

        <section className="mt-12 rounded-lg border bg-foreground p-6 text-background">
          <h2 className="text-xl font-semibold">Bottom line</h2>
          <p className="mt-3 leading-7">
            Choose Figma AI when the design needs to become real product work.
            Choose Galileo AI or Stitch when you need fast visual concepts
            before the design process fully begins.
          </p>
        </section>

        <ArticleCta tool="Figma" href={toolLinks.figma} placement="bottom" />

        <GiscusComments />
      </article>
    </main>
  )
}
