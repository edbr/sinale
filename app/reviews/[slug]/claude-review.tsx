import Link from "next/link"
import { ArrowLeft, Check, X } from "lucide-react"

import { ArticleCta } from "@/components/article/article-cta"
import { Button } from "@/components/ui/button"
import { toolLinks } from "@/lib/tool-links"

const useCases = [
  "Product strategy discussions",
  "Interview preparation",
  "Writing case studies",
  "Research synthesis",
  "Technical documentation",
  "Feature planning",
  "Reviewing code",
]

const strengths = [
  {
    title: "Long-Form Writing",
    body: "Claude consistently produces some of the strongest writing among major AI assistants. It is especially useful for articles, reports, documentation, summaries, and strategic analysis.",
  },
  {
    title: "Reasoning and Structured Thinking",
    body: "Claude performs particularly well when exploring complex topics such as product strategy, system design, research interpretation, process improvement, and business analysis.",
  },
  {
    title: "Large Document Analysis",
    body: "Claude is strong at reviewing product requirements, research reports, academic papers, technical documentation, and interview notes.",
  },
  {
    title: "Coding Support",
    body: "While Cursor is stronger inside the editor, Claude often gives better explanations and higher-level reasoning when solving technical problems.",
  },
]

const pros = [
  "Exceptional writing quality",
  "Strong reasoning and analysis",
  "Excellent document handling",
  "Helpful coding explanations",
  "Reliable for professional work",
]

const cons = [
  "Can be verbose",
  "Occasionally over-cautious",
  "Not always the best source for real-time information",
  "Some advanced usage requires a paid plan",
]

export function ClaudeReview() {
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
          Claude Review (2026): The AI Assistant I Use Most for Thinking,
          Writing, and Problem Solving
        </h1>

        <div className="mt-6 flex flex-wrap gap-2">
          <span className="rounded-full border px-3 py-1 text-sm text-muted-foreground">
            Rating: 9.5/10
          </span>
          <span className="rounded-full border px-3 py-1 text-sm text-muted-foreground">
            Best for thinking and writing
          </span>
        </div>

        <div className="mt-8 space-y-5 text-lg leading-8 text-muted-foreground">
          <p>
            The AI market moves fast, but after using dozens of tools across
            product design, software development, research, and content
            creation, I keep coming back to Claude.
          </p>
          <p>
            While many AI products compete on features, Claude&apos;s biggest
            advantage is harder to quantify: it consistently produces
            thoughtful, well-structured responses that require less editing and
            correction.
          </p>
          <p>
            For knowledge work, strategy, writing, and reasoning-heavy tasks,
            Claude has become my default AI assistant.
          </p>
        </div>

        <ArticleCta tool="Claude" href={toolLinks.claude} placement="top" />

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">What is Claude?</h2>
          <div className="mt-4 space-y-4 leading-7 text-muted-foreground">
            <p>
              Claude is an AI assistant developed by Anthropic. It can help
              with writing and editing, research and analysis, coding and
              debugging, document review, brainstorming, data interpretation,
              and strategy development.
            </p>
            <p>
              Unlike many AI tools that optimize for speed or entertainment,
              Claude feels optimized for thoughtful work. Its responses are
              generally more structured, nuanced, and easier to trust than many
              competing models.
            </p>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">What I Use Claude For</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {useCases.map((useCase) => (
              <div key={useCase} className="rounded-lg border bg-card p-4">
                <p className="text-sm font-medium">{useCase}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-lg border bg-secondary/40 p-5">
            <p className="text-sm font-medium text-muted-foreground">
              Example prompts
            </p>
            <div className="mt-3 space-y-3 leading-7">
              <p>
                Analyze this workflow and identify operational bottlenecks.
              </p>
              <p>
                Critique this product strategy from a customer, business, and
                engineering perspective.
              </p>
            </div>
          </div>
          <p className="mt-5 leading-7 text-muted-foreground">
            Instead of treating Claude like a search engine, I use it more like
            a collaborative thinking partner. The responses often surface
            tradeoffs and considerations that improve decision making.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">What Claude Does Well</h2>
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
          <h2 className="text-2xl font-semibold">Where Claude Falls Short</h2>
          <div className="mt-4 space-y-4 leading-7 text-muted-foreground">
            <p>
              Claude is not my first choice when I need current events, breaking
              news, or live web information. For those tasks, dedicated
              search-focused tools often perform better.
            </p>
            <p>
              Claude can also be overly cautious. Sometimes the caveats and
              qualifications are useful, especially for critical topics, but for
              straightforward questions they can feel excessive.
            </p>
            <p>
              When prompts are broad, Claude sometimes produces responses that
              are longer than required. Clear instructions usually solve this.
            </p>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Claude vs ChatGPT</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border bg-card p-5">
              <h3 className="font-semibold">I prefer Claude for</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Writing, editing, research, strategic thinking, long documents,
                and deep analysis.
              </p>
            </div>
            <div className="rounded-lg border bg-card p-5">
              <h3 className="font-semibold">I prefer ChatGPT for</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                General-purpose assistance, multimodal workflows, broader tool
                integrations, creative ideation, and faster iteration.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Claude vs Cursor</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            These tools solve different problems. Cursor lives inside the
            development environment and helps ship code. Claude helps think
            through problems before implementation. I frequently use both
            together: Claude for planning and architecture, Cursor for
            execution.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Who Should Use Claude?</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Claude is an excellent fit for product managers, designers,
            researchers, consultants, analysts, students, engineers, and
            founders. Anyone whose job involves reading, writing, reasoning, or
            decision making will likely find value in Claude.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Pricing</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Claude offers a free plan and paid subscription tiers for heavier
            usage. Most professionals can evaluate the product thoroughly before
            needing a paid plan. Visit the Claude pricing page for current plans
            and limits.
          </p>
        </section>



        <ArticleCta tool="Claude" href={toolLinks.claude} placement="mid" />

        <section className="mt-12 rounded-lg border bg-card p-6">
          <h2 className="text-2xl font-semibold">Verdict</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Claude has become the AI assistant I rely on most for high-quality
            thinking. Its strengths are not flashy demos or novelty features.
            Its strengths are clarity, reasoning, writing quality, and the
            ability to help navigate complex problems.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            For professionals who spend their days making decisions, writing
            documents, analyzing information, or planning products, Claude is
            one of the most useful AI tools available today.
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
            If your work depends on thinking, writing, research, or problem
            solving, Claude is one of the best AI assistants available and
            deserves a place in nearly every modern AI stack.
          </p>
        </section>


        <ArticleCta tool="Claude" href={toolLinks.claude} placement="bottom" />
      </article>
    </main>
  )
}
