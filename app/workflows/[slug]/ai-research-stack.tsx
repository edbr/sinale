import Link from "next/link"
import { ArrowLeft, Check } from "lucide-react"

import { ArticleCta } from "@/components/article/article-cta"
import { GiscusComments } from "@/components/article/giscus-comments"
import { Button } from "@/components/ui/button"
import { toolLinks } from "@/lib/tool-links"

const steps = [
  {
    title: "Define the Research Question",
    tools: ["Claude", "ChatGPT"],
    body:
      "AI research fails when the question is too broad. Start by defining the decision you need to make, the audience, the time horizon, the sources you trust, and the type of answer you need.",
    checklist: [
      "Decision to make",
      "Audience",
      "Scope",
      "Time horizon",
      "Trusted source types",
      "Output format",
    ],
  },
  {
    title: "Map the Source Landscape",
    tools: ["Perplexity", "Google Search"],
    body:
      "Use search-first tools to discover the main source categories: official docs, pricing pages, research papers, regulatory sources, expert analysis, user communities, benchmarks, and competitor pages.",
    prompt:
      "Find the most authoritative source types for researching this topic. Separate primary sources, expert analysis, user discussions, and sources to avoid.",
  },
  {
    title: "Collect Evidence in One Place",
    tools: ["NotebookLM", "Notion"],
    body:
      "Do not leave research scattered across tabs. Save links, PDFs, notes, quotes, screenshots, and source dates in one workspace so synthesis can stay attached to the evidence.",
    checklist: [
      "Source title",
      "URL",
      "Publisher",
      "Date",
      "Key claim",
      "Why it matters",
    ],
  },
  {
    title: "Run Deep Research for Breadth",
    tools: ["ChatGPT", "Perplexity"],
    body:
      "Use deep research tools to get a broad first pass across sources. Treat the output as a research assistant&apos;s draft, not the final truth. Pull the citations back into your source library.",
    prompt:
      "Research this question using current sources. Include citations, distinguish facts from interpretation, note conflicting evidence, and end with open questions.",
  },
  {
    title: "Verify the Important Claims",
    tools: ["Perplexity", "NotebookLM", "Google Search"],
    body:
      "The more important a claim is, the closer you should get to the primary source. Verify pricing, legal claims, product features, market size, benchmarks, and quotes before using them in a decision.",
    checklist: [
      "Pricing",
      "Feature availability",
      "Legal or policy claims",
      "Benchmarks",
      "Market data",
      "Direct quotes",
    ],
  },
  {
    title: "Synthesize into Themes",
    tools: ["Claude", "ChatGPT"],
    body:
      "Once evidence is collected and checked, ask AI to cluster it into themes. Good synthesis keeps citations, confidence levels, contradictions, and implications visible.",
    prompt:
      "Synthesize these notes into themes. For each theme, include supporting evidence, citations, confidence level, contradictions, and decision implications.",
  },
  {
    title: "Compare Alternatives",
    tools: ["Claude", "ChatGPT"],
    body:
      "Research usually supports a choice. Ask AI to compare options using the criteria that matter: cost, risk, complexity, maturity, switching cost, speed, and strategic fit.",
    checklist: [
      "Evaluation criteria",
      "Option strengths",
      "Option weaknesses",
      "Risks",
      "Unknowns",
      "Recommendation",
    ],
  },
  {
    title: "Write the Decision Memo",
    tools: ["Claude", "Notion"],
    body:
      "End with a short memo that states the recommendation, evidence, tradeoffs, risks, open questions, and next action. The memo matters more than the research dump.",
  },
]

const stack = [
  ["Question framing", "Claude or ChatGPT"],
  ["Source discovery", "Perplexity and Google Search"],
  ["Deep report drafting", "ChatGPT Deep Research"],
  ["Source-grounded notebook", "NotebookLM"],
  ["Academic literature", "Elicit"],
  ["Knowledge base", "Notion or Airtable"],
  ["Synthesis", "Claude"],
  ["Decision output", "Memo, table, brief, or roadmap note"],
]

const guardrails = [
  {
    title: "Primary Sources Win",
    body: "For pricing, product claims, laws, standards, medical claims, and financial facts, verify against primary sources before publishing or deciding.",
  },
  {
    title: "Keep Dates Visible",
    body: "Research decays quickly. Save publication dates, access dates, and whether the source describes a current feature or an old announcement.",
  },
  {
    title: "Do Not Hide Contradictions",
    body: "If sources disagree, show the disagreement and explain which source you trust more and why.",
  },
  {
    title: "Separate Facts from Judgment",
    body: "AI can help infer implications, but the memo should clearly mark what is sourced fact versus your interpretation.",
  },
]

const prompts = [
  {
    title: "Research Plan",
    body:
      "Create a research plan for this question. Include source types, search queries, trusted primary sources, risks, and expected output format.",
  },
  {
    title: "Source Evaluation",
    body:
      "Evaluate these sources for credibility, recency, bias, primary-source status, and usefulness for the decision.",
  },
  {
    title: "Evidence Synthesis",
    body:
      "Cluster these notes into themes with citations, confidence levels, contradictions, and implications for the decision.",
  },
  {
    title: "Decision Memo",
    body:
      "Write a concise decision memo with recommendation, evidence, tradeoffs, risks, unknowns, and next steps.",
  },
]

function CheckList({ items }: { items: string[] }) {
  return (
    <div className="mt-5 grid gap-2 text-sm md:grid-cols-2">
      {items.map((item) => (
        <p key={item} className="flex gap-2">
          <Check className="mt-0.5 size-4 shrink-0" />
          <span>{item}</span>
        </p>
      ))}
    </div>
  )
}

export function AiResearchStackWorkflow() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <article className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        <Button asChild variant="ghost" className="mb-10 px-0">
          <Link href="/workflows">
            <ArrowLeft />
            Workflows
          </Link>
        </Button>

        <p className="mb-4 text-sm font-medium text-muted-foreground">
          Workflow
        </p>
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
          AI Research Stack (2026): Collect Sources, Synthesize Evidence, and
          Make Better Decisions
        </h1>

        <div className="mt-8 max-w-3xl space-y-5 text-lg leading-8 text-muted-foreground">
          <p>
            AI can make research dramatically faster, but speed is only useful
            if the evidence stays visible. The best research stack separates
            discovery, source collection, verification, synthesis, and decision
            writing.
          </p>
          <p>
            Perplexity, ChatGPT Deep Research, NotebookLM, Elicit, Claude, and
            Notion can all help, but no single tool should own the whole truth.
            The workflow matters more than the tool list.
          </p>
          <p>
            This is the stack I would use for product research, vendor
            evaluation, market mapping, competitor research, academic scanning,
            and strategy work.
          </p>
        </div>

        <ArticleCta tool="Perplexity" href={toolLinks.perplexity} placement="top" />

        <section className="mt-12 grid gap-6">
          {steps.map((step, index) => (
            <div key={step.title} className="rounded-lg border bg-card p-6">
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Step {index + 1}
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold">{step.title}</h2>
                </div>
                {step.tools.length > 0 ? (
                  <div className="flex flex-wrap gap-2">
                    {step.tools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-full border px-3 py-1 text-sm text-muted-foreground"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>

              <p className="mt-5 leading-7 text-muted-foreground">
                {step.body}
              </p>

              {step.checklist ? <CheckList items={step.checklist} /> : null}

              {step.prompt ? (
                <div className="mt-5 rounded-lg border bg-background p-4">
                  <p className="text-sm font-medium text-muted-foreground">
                    Example prompt
                  </p>
                  <p className="mt-3 text-sm leading-6">{step.prompt}</p>
                </div>
              ) : null}
            </div>
          ))}
        </section>

        <section className="mt-12 rounded-lg border bg-card p-6">
          <h2 className="text-2xl font-semibold">The AI Research Stack</h2>
          <p className="mt-3 leading-7 text-muted-foreground">
            Use each tool for a specific research job. Discovery, source
            grounding, academic literature, synthesis, and decision writing need
            different strengths.
          </p>
          <div className="mt-5 divide-y rounded-lg border">
            {stack.map(([stage, tools]) => (
              <div
                key={stage}
                className="grid gap-2 px-4 py-4 text-sm md:grid-cols-[0.8fr_1.2fr]"
              >
                <span className="font-medium">{stage}</span>
                <span className="text-muted-foreground">{tools}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Guardrails That Matter</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {guardrails.map((guardrail) => (
              <div
                key={guardrail.title}
                className="rounded-lg border bg-card p-5"
              >
                <h3 className="font-semibold">{guardrail.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {guardrail.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        <ArticleCta tool="ChatGPT" href={toolLinks.chatgpt} placement="mid" />

        <section className="mt-12 rounded-lg border bg-card p-6">
          <h2 className="text-2xl font-semibold">Prompts Worth Saving</h2>
          <div className="mt-5 grid gap-4">
            {prompts.map((prompt) => (
              <div key={prompt.title} className="rounded-lg border bg-background p-4">
                <h3 className="font-semibold">{prompt.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {prompt.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-lg border bg-card p-6">
          <h2 className="text-2xl font-semibold">Final Thoughts</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            The strongest AI research workflow is not about asking one model for
            an answer. It is about building a trail from question to source to
            evidence to synthesis to decision.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            AI can accelerate discovery and synthesis, but the final decision
            should still show its work. If a reader cannot trace the conclusion
            back to credible sources, the research is not finished.
          </p>
        </section>

        <section className="mt-12 rounded-lg border bg-foreground p-6 text-background">
          <h2 className="text-xl font-semibold">Bottom line</h2>
          <p className="mt-3 leading-7">
            Use Perplexity for discovery, ChatGPT for broad research drafts,
            NotebookLM for source-grounded notebooks, Elicit for academic
            literature, Claude for synthesis, and primary sources for the claims
            that matter.
          </p>
        </section>

        <ArticleCta tool="Perplexity" href={toolLinks.perplexity} placement="bottom" />

        <GiscusComments />
      </article>
    </main>
  )
}
