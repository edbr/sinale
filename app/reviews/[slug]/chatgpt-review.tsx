import Link from "next/link"
import { ArrowLeft, Check, X } from "lucide-react"

import { Button } from "@/components/ui/button"

const useCases = [
  "Product strategy",
  "UX reviews",
  "Coding assistance",
  "Interview preparation",
  "Data analysis",
  "Content writing",
  "Research summaries",
  "Learning new concepts",
]

const strengths = [
  {
    title: "Breadth of Capabilities",
    body: "ChatGPT performs well across writing, coding, document analysis, image generation, data work, research support, and everyday problem solving.",
  },
  {
    title: "Strong Reasoning",
    body: "Recent models are significantly better at multi-step reasoning, planning, analysis, decision support, and evaluating tradeoffs.",
  },
  {
    title: "Coding Assistance",
    body: "ChatGPT is useful for generating code, explaining unfamiliar code, debugging issues, reviewing architecture, writing SQL, and learning frameworks.",
  },
  {
    title: "Multimodal Workflows",
    body: "ChatGPT can work across PDFs, spreadsheets, screenshots, charts, images, and mixed media, reducing the need to switch between specialized tools.",
  },
  {
    title: "Custom GPTs",
    body: "Power users can create specialized assistants for research, writing, product strategy, coding, and repeatable internal workflows.",
  },
]

const pros = [
  "Extremely versatile",
  "Strong reasoning and problem solving",
  "Excellent multimodal capabilities",
  "Helpful for coding and analysis",
  "Custom GPT ecosystem",
  "Constantly improving",
]

const cons = [
  "Writing quality can trail Claude",
  "Occasionally overconfident",
  "Growing feature complexity",
  "Requires verification of important outputs",
]

export function ChatGPTReview() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <article className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <Button asChild variant="ghost" className="mb-10 px-0">
          <Link href="/reviews">
            <ArrowLeft />
            Reviews
          </Link>
        </Button>

        <p className="mb-4 text-sm font-medium text-muted-foreground">
          Review
        </p>
        <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
          ChatGPT Review (2026): The Most Versatile AI Assistant Available Today
        </h1>

        <div className="mt-6 flex flex-wrap gap-2">
          <span className="rounded-full border px-3 py-1 text-sm text-muted-foreground">
            Rating: 9.5/10
          </span>
          <span className="rounded-full border px-3 py-1 text-sm text-muted-foreground">
            Best all-around AI platform
          </span>
        </div>

        <div className="mt-8 space-y-5 text-lg leading-8 text-muted-foreground">
          <p>
            If I could only keep one AI subscription, it would probably be
            ChatGPT. Not because it&apos;s the best at every task. It
            isn&apos;t.
          </p>
          <p>
            Claude often produces stronger writing. Cursor is better for coding
            inside an editor. Perplexity is better for search. But ChatGPT is
            the most complete AI platform I&apos;ve used.
          </p>
          <p>
            It combines reasoning, writing, coding, research, image generation,
            data analysis, and custom workflows into a single product that
            continues to expand. For most people, ChatGPT is the best place to
            start and often the only AI tool they need.
          </p>
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">What is ChatGPT?</h2>
          <div className="mt-4 space-y-4 leading-7 text-muted-foreground">
            <p>
              ChatGPT is an AI assistant developed by OpenAI. Depending on the
              model and subscription tier, it can help with writing and editing,
              research, coding, data analysis, brainstorming, image generation,
              document review, spreadsheet analysis, workflow automation, and
              custom GPTs.
            </p>
            <p>
              Unlike many AI products that focus on a single use case, ChatGPT
              is designed as a general-purpose intelligence platform.
            </p>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">What I Use ChatGPT For</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {useCases.map((useCase) => (
              <div key={useCase} className="rounded-lg border bg-card p-4">
                <p className="text-sm font-medium">{useCase}</p>
              </div>
            ))}
          </div>
          <p className="mt-5 leading-7 text-muted-foreground">
            One reason I keep returning to ChatGPT is flexibility. A
            conversation can start with a product question, move into code
            generation, analyze a spreadsheet, create visuals, and end with a
            strategic recommendation without changing tools.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">What ChatGPT Does Well</h2>
          <div className="mt-5 grid gap-4">
            {strengths.map((strength) => (
              <div key={strength.title} className="rounded-lg border bg-card p-5">
                <h3 className="font-semibold">{strength.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {strength.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Where ChatGPT Falls Short</h2>
          <div className="mt-4 space-y-4 leading-7 text-muted-foreground">
            <p>
              ChatGPT is a strong writer, but I generally prefer Claude for
              polished long-form writing. Claude often requires fewer edits and
              produces more natural prose.
            </p>
            <p>
              Like all AI systems, ChatGPT occasionally presents incorrect
              information with confidence. Outputs should always be reviewed,
              especially for technical topics, financial decisions, legal
              matters, medical information, and other high-stakes work.
            </p>
            <p>
              As more capabilities are added, the product can occasionally feel
              overwhelming for new users. The flexibility is powerful, but it
              increases complexity.
            </p>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">ChatGPT vs Claude</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border bg-card p-5">
              <h3 className="font-semibold">I prefer ChatGPT for</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                General productivity, multimodal work, images and visual
                content, data analysis, tool integrations, custom assistants,
                and broad everyday usage.
              </p>
            </div>
            <div className="rounded-lg border bg-card p-5">
              <h3 className="font-semibold">I prefer Claude for</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Long-form writing, deep analysis, research synthesis, strategic
                thinking, and document-heavy work.
              </p>
            </div>
          </div>
          <p className="mt-5 leading-7 text-muted-foreground">
            If I had to choose one platform for everything, I&apos;d choose
            ChatGPT. If my day consisted entirely of writing and analysis,
            I&apos;d probably choose Claude.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">ChatGPT vs Perplexity</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Perplexity excels at search and citation-heavy research. ChatGPT
            excels at analysis, interpretation, synthesis, and problem solving.
            I often use Perplexity to gather information and ChatGPT to make
            sense of it.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Who Should Use ChatGPT?</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            ChatGPT is an excellent fit for students, developers, designers,
            product managers, founders, analysts, marketers, consultants, and
            researchers. Its versatility makes it useful across nearly every
            knowledge-work profession.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Pricing</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            ChatGPT offers both free and paid subscription options. Most users
            can get significant value from the free plan, while power users
            benefit from higher usage limits and access to the latest models.
            Visit the ChatGPT website for current pricing and features.
          </p>
        </section>

        <section className="mt-12 rounded-lg border bg-card p-6">
          <h2 className="text-2xl font-semibold">Verdict</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            ChatGPT is the most versatile AI assistant available today. It may
            not win every category individually, but no other platform currently
            combines reasoning, coding, research, image generation, document
            analysis, and workflow flexibility as effectively.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            For most people entering the AI ecosystem, ChatGPT remains the best
            starting point and one of the highest-value software subscriptions
            available.
          </p>
        </section>

        <section className="mt-12 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border bg-card p-5">
            <h2 className="text-xl font-semibold">Pros</h2>
            <div className="mt-4 grid gap-3">
              {pros.map((pro) => (
                <p key={pro} className="flex gap-2 text-sm leading-6">
                  <Check className="mt-0.5 size-4 shrink-0" />
                  {pro}
                </p>
              ))}
            </div>
          </div>
          <div className="rounded-lg border bg-card p-5">
            <h2 className="text-xl font-semibold">Cons</h2>
            <div className="mt-4 grid gap-3">
              {cons.map((con) => (
                <p key={con} className="flex gap-2 text-sm leading-6">
                  <X className="mt-0.5 size-4 shrink-0" />
                  {con}
                </p>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-12 rounded-lg border bg-foreground p-6 text-background">
          <h2 className="text-xl font-semibold">Bottom line</h2>
          <p className="mt-3 leading-7">
            If you&apos;re looking for a single AI tool that can assist with
            writing, coding, research, analysis, and creative work, ChatGPT is
            currently the most complete solution on the market and an essential
            part of any modern AI stack.
          </p>
        </section>
      </article>
    </main>
  )
}
