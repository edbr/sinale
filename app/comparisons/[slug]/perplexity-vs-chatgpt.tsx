import Link from "next/link"
import { ArrowLeft, Check } from "lucide-react"

import { Button } from "@/components/ui/button"

const verdictRows = [
  ["Web Research", "Perplexity"],
  ["Source Citations", "Perplexity"],
  ["Current Information", "Perplexity"],
  ["Fact Finding", "Perplexity"],
  ["Writing", "ChatGPT"],
  ["Coding", "ChatGPT"],
  ["Data Analysis", "ChatGPT"],
  ["Images", "ChatGPT"],
  ["Productivity Workflows", "ChatGPT"],
  ["Overall Versatility", "ChatGPT"],
]

const perplexityWins = [
  {
    title: "Research Speed",
    body: "Perplexity can search recent sources, identify leading products, summarize findings, and link supporting evidence in seconds.",
  },
  {
    title: "Source Transparency",
    body: "Most answers include citations, which makes it easier to verify claims, read original sources, and explore additional context.",
  },
  {
    title: "Current Information",
    body: "Perplexity excels when investigating breaking news, recent launches, industry developments, current pricing, and competitive intelligence.",
  },
  {
    title: "Learning New Topics",
    body: "When entering an unfamiliar domain, Perplexity provides a structured path to understanding and suggests logical follow-up areas to explore.",
  },
]

const chatgptWins = [
  {
    title: "Writing",
    body: "ChatGPT is better at transforming information into polished articles, reports, documentation, emails, presentations, and marketing copy.",
  },
  {
    title: "Coding",
    body: "ChatGPT is significantly more useful for building applications, debugging code, explaining frameworks, generating APIs, and refactoring projects.",
  },
  {
    title: "Data Analysis",
    body: "ChatGPT can work with uploaded CSV files, spreadsheets, product analytics exports, and survey results, then answer questions directly.",
  },
  {
    title: "Images and Visual Content",
    body: "ChatGPT supports image generation, image editing, screenshot analysis, and diagram interpretation.",
  },
  {
    title: "Complex Problem Solving",
    body: "ChatGPT is stronger for designing strategies, analyzing retention problems, building monetization models, and comparing implementation approaches.",
  },
]

export function PerplexityVsChatGPTComparison() {
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
          Perplexity vs ChatGPT (2026): Which AI Assistant Should You Actually
          Use?
        </h1>

        <div className="mt-8 space-y-5 text-lg leading-8 text-muted-foreground">
          <p>
            If you&apos;re evaluating AI tools in 2026, there&apos;s a good
            chance you&apos;ve narrowed your shortlist to two products:
            Perplexity and ChatGPT.
          </p>
          <p>
            At first glance, they appear similar. Both answer questions,
            summarize information, generate content, and help users learn new
            topics. But after using both extensively for product design,
            software development, market research, business analysis, and
            everyday knowledge work, I&apos;ve found they solve fundamentally
            different problems.
          </p>
          <p>
            Perplexity helps you find information. ChatGPT helps you work with
            information. The distinction sounds subtle, but it dramatically
            changes how each tool fits into your workflow.
          </p>
        </div>

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
              <span className="font-medium">Best research tool:</span>{" "}
              Perplexity
            </p>
            <p className="rounded-lg border bg-background p-4">
              <span className="font-medium">Best overall AI assistant:</span>{" "}
              ChatGPT
            </p>
          </div>
        </section>

        <section className="mt-12 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border bg-card p-5">
            <h2 className="text-2xl font-semibold">What is Perplexity?</h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              Perplexity is an AI-powered answer engine that combines web
              search with large language models. Instead of showing a page full
              of links, it searches the web, reads sources, summarizes findings,
              provides citations, and suggests follow-up questions.
            </p>
            <p className="mt-4 leading-7 text-muted-foreground">
              The experience feels like having a research analyst investigate a
              topic on your behalf.
            </p>
          </div>
          <div className="rounded-lg border bg-card p-5">
            <h2 className="text-2xl font-semibold">What is ChatGPT?</h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              ChatGPT is OpenAI&apos;s general-purpose AI platform. Beyond
              answering questions, it can write content, generate code, analyze
              spreadsheets, create images, review documents, build custom
              assistants, solve complex problems, and support multi-step
              workflows.
            </p>
            <p className="mt-4 leading-7 text-muted-foreground">
              It functions more like a digital operating system than a search
              tool.
            </p>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Where Perplexity Wins</h2>
          <div className="mt-5 grid gap-4">
            {perplexityWins.map((item) => (
              <div key={item.title} className="rounded-lg border bg-card p-5">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Where ChatGPT Wins</h2>
          <div className="mt-5 grid gap-4">
            {chatgptWins.map((item) => (
              <div key={item.title} className="rounded-lg border bg-card p-5">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            Perplexity vs ChatGPT for Research
          </h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border bg-card p-5">
              <h3 className="font-semibold">Perplexity is best for</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Gathering information, finding sources, exploring topics, market
                intelligence, competitive research, and current events.
              </p>
            </div>
            <div className="rounded-lg border bg-card p-5">
              <h3 className="font-semibold">ChatGPT is best for</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Analyzing findings, synthesizing information, drawing
                conclusions, creating recommendations, and building strategies.
              </p>
            </div>
          </div>
          <p className="mt-5 leading-7 text-muted-foreground">
            Perplexity discovers facts. ChatGPT creates understanding.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            Perplexity vs ChatGPT for Product Managers
          </h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border bg-card p-5">
              <h3 className="font-semibold">Perplexity</h3>
              <div className="mt-4 grid gap-2 text-sm">
                {[
                  "Competitive analysis",
                  "Market research",
                  "Industry trends",
                  "Product discovery",
                  "User behavior research",
                ].map((item) => (
                  <p key={item} className="flex gap-2">
                    <Check className="size-4 shrink-0" />
                    {item}
                  </p>
                ))}
              </div>
            </div>
            <div className="rounded-lg border bg-card p-5">
              <h3 className="font-semibold">ChatGPT</h3>
              <div className="mt-4 grid gap-2 text-sm">
                {[
                  "Product strategy",
                  "Roadmapping",
                  "Prioritization",
                  "User journey analysis",
                  "Stakeholder communication",
                ].map((item) => (
                  <p key={item} className="flex gap-2">
                    <Check className="size-4 shrink-0" />
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <p className="mt-5 leading-7 text-muted-foreground">
            Perplexity finds the inputs. ChatGPT helps decide what to do with
            them.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            Perplexity vs ChatGPT for Founders
          </h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border bg-card p-5">
              <h3 className="font-semibold">Use Perplexity to</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Research markets, understand competitors, validate ideas, and
                track industry changes.
              </p>
            </div>
            <div className="rounded-lg border bg-card p-5">
              <h3 className="font-semibold">Use ChatGPT to</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Write product requirements, create business plans, generate
                marketing content, build software, and analyze opportunities.
              </p>
            </div>
          </div>
          <p className="mt-5 leading-7 text-muted-foreground">
            Founders will likely benefit from both tools.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Which One Saves More Time?</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            If you spend hours searching for information, Perplexity will save
            more time. If you spend hours creating, analyzing, planning,
            writing, or building, ChatGPT will save more time. Most
            professionals do more of the latter.
          </p>
        </section>

        <section className="mt-12 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border bg-card p-5">
            <h2 className="text-2xl font-semibold">
              Who Should Choose Perplexity?
            </h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              Perplexity is ideal for researchers, analysts, consultants,
              journalists, investors, students, and knowledge workers. Anyone
              whose primary job is finding and validating information will
              appreciate Perplexity.
            </p>
          </div>
          <div className="rounded-lg border bg-card p-5">
            <h2 className="text-2xl font-semibold">
              Who Should Choose ChatGPT?
            </h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              ChatGPT is ideal for developers, product managers, designers,
              founders, marketers, consultants, and operators. Anyone who
              creates, analyzes, plans, or builds things will benefit from its
              broader capabilities.
            </p>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">My Workflow</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border bg-card p-5">
              <h3 className="font-semibold">Step 1: Research</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Use Perplexity to gather facts, read sources, and understand the
                landscape.
              </p>
            </div>
            <div className="rounded-lg border bg-card p-5">
              <h3 className="font-semibold">Step 2: Analyze</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Use ChatGPT to interpret findings, explore tradeoffs, create
                recommendations, and build solutions.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-12 rounded-lg border bg-card p-6">
          <h2 className="text-2xl font-semibold">Verdict</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Perplexity is the best AI research engine available today. ChatGPT
            is the most versatile AI platform available today. If your primary
            goal is finding reliable information quickly, choose Perplexity. If
            you want a single AI assistant capable of writing, coding,
            analyzing, creating, and problem solving, choose ChatGPT.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Perplexity helps you discover knowledge. ChatGPT helps you apply it.
          </p>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            <p className="rounded-lg border bg-background p-4">
              <span className="font-medium">Perplexity Rating:</span> 9/10.
              Best for research, discovery, and source-backed answers.
            </p>
            <p className="rounded-lg border bg-background p-4">
              <span className="font-medium">ChatGPT Rating:</span> 9.5/10. Best
              all-around AI assistant and productivity platform.
            </p>
          </div>
        </section>

        <section className="mt-12 rounded-lg border bg-foreground p-6 text-background">
          <h2 className="text-xl font-semibold">Bottom line</h2>
          <p className="mt-3 leading-7">
            Perplexity is your research analyst. ChatGPT is your operator. One
            finds the answers, the other helps you turn those answers into
            action. For most people, ChatGPT is the better standalone
            subscription. For power users, the combination is difficult to beat.
          </p>
        </section>
      </article>
    </main>
  )
}
