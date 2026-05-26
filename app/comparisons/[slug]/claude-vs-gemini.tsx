import Link from "next/link"
import { ArrowLeft, Check } from "lucide-react"

import { ArticleCta } from "@/components/article/article-cta"
import { GiscusComments } from "@/components/article/giscus-comments"
import { Button } from "@/components/ui/button"
import { toolLinks } from "@/lib/tool-links"

const verdictRows = [
  ["Writing Quality", "Claude"],
  ["Analysis and Reasoning", "Claude"],
  ["Research Workflows", "Gemini"],
  ["Long-Context Documents", "Claude"],
  ["Google Workspace", "Gemini"],
  ["Team Collaboration", "Tie"],
  ["Multimodal Work", "Gemini"],
  ["Strategic Thinking", "Claude"],
  ["Everyday Productivity", "Gemini"],
  ["Overall Recommendation", "Claude"],
]

const claudeWins = [
  {
    title: "Better Writing and Editing",
    body: "Claude is usually the stronger assistant for clear prose, nuanced rewrites, executive communication, strategy memos, research summaries, product narratives, and long-form editing.",
  },
  {
    title: "Stronger Analysis",
    body: "Claude tends to be better at slowing down, weighing tradeoffs, structuring messy information, and explaining why a recommendation makes sense. That makes it useful for product, strategy, research, and leadership work.",
  },
  {
    title: "Excellent Long-Context Work",
    body: "Claude is one of the best assistants for working through long documents, transcripts, specs, research notes, policies, codebases, and multi-part context without losing the thread.",
  },
  {
    title: "More Reliable Thinking Partner",
    body: "When the job is to sharpen an argument, critique a plan, find weak assumptions, or turn raw notes into a decision, Claude often feels more thoughtful and less rushed.",
  },
]

const geminiWins = [
  {
    title: "Better Google Ecosystem Fit",
    body: "Gemini is the obvious choice if your work already lives in Gmail, Docs, Sheets, Slides, Drive, Android, Chrome, Google Search, or Google Workspace.",
  },
  {
    title: "Stronger Multimodal Direction",
    body: "Gemini is built deeply around multimodal work across text, images, documents, search, video, mobile, and Google product surfaces. That makes it attractive for broad everyday productivity.",
  },
  {
    title: "Useful Research and Search Workflows",
    body: "Gemini benefits from Google's search and information ecosystem. It is especially useful when research, browsing, source discovery, and Workspace output all happen close together.",
  },
  {
    title: "Better Default for Google-First Teams",
    body: "If a company already runs on Google Workspace, Gemini can be easier to roll out because it meets users inside the tools they already open every day.",
  },
]

const useCases = [
  {
    title: "Choose Claude if",
    items: [
      "You write strategy docs, memos, articles, or executive updates",
      "You analyze long documents, transcripts, or research notes",
      "You want a careful thinking partner for tradeoffs and decisions",
      "You do product, UX, policy, legal, or technical writing",
      "You value depth and clarity more than ecosystem integration",
    ],
  },
  {
    title: "Choose Gemini if",
    items: [
      "Your team lives in Gmail, Docs, Sheets, Slides, and Drive",
      "You want AI embedded across Google Workspace",
      "You do a lot of web research and everyday productivity work",
      "You care about multimodal workflows across Google products",
      "You are already committed to Google accounts and admin controls",
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

export function ClaudeVsGeminiComparison() {
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
          Claude vs Gemini (2026): Which AI Assistant Is Better for Work?
        </h1>

        <div className="mt-8 space-y-5 text-lg leading-8 text-muted-foreground">
          <p>
            Claude and Gemini are both excellent AI assistants, but they are
            optimized for different kinds of work.
          </p>
          <p>
            Claude is the better choice when the job involves analysis,
            writing, synthesis, long documents, product thinking, strategic
            decisions, and careful reasoning.
          </p>
          <p>
            Gemini is the better choice when the job lives inside Google&apos;s
            ecosystem: Gmail, Docs, Sheets, Slides, Drive, Search, Android,
            Chrome, and Google Workspace.
          </p>
          <p>
            If I had to choose one assistant for deep work, I would choose
            Claude. If I had to choose one assistant for a Google-first team, I
            would choose Gemini.
          </p>
        </div>

        <ArticleCta tool="Claude" href={toolLinks.claude} placement="top" />

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
              <span className="font-medium">Best for deep work:</span> Claude
            </p>
            <p className="rounded-lg border bg-background p-4">
              <span className="font-medium">Best for Google Workspace:</span>{" "}
              Gemini
            </p>
          </div>
        </section>

        <section className="mt-12 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border bg-card p-5">
            <h2 className="text-2xl font-semibold">What is Claude?</h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              Claude is Anthropic&apos;s AI assistant for writing, analysis,
              coding help, research synthesis, long-document work, and
              professional collaboration.
            </p>
            <p className="mt-4 leading-7 text-muted-foreground">
              In work settings, Claude is strongest when you need judgment:
              turning messy context into a clear argument, memo, plan,
              recommendation, or critique.
            </p>
          </div>
          <div className="rounded-lg border bg-card p-5">
            <h2 className="text-2xl font-semibold">What is Gemini?</h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              Gemini is Google&apos;s AI assistant and model family, integrated
              across Google products and available through the Gemini app,
              Google AI plans, Google Workspace, Android, Chrome, and developer
              tools.
            </p>
            <p className="mt-4 leading-7 text-muted-foreground">
              In work settings, Gemini is strongest when AI needs to sit close
              to email, documents, spreadsheets, search, meetings, files, and
              daily productivity workflows.
            </p>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Where Claude Wins</h2>
          <div className="mt-5 grid gap-4">
            {claudeWins.map((item) => (
              <div key={item.title} className="rounded-lg border bg-card p-5">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {item.body}
                </p>
                <p className="mt-4 text-sm font-medium">Winner: Claude</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Where Gemini Wins</h2>
          <div className="mt-5 grid gap-4">
            {geminiWins.map((item) => (
              <div key={item.title} className="rounded-lg border bg-card p-5">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {item.body}
                </p>
                <p className="mt-4 text-sm font-medium">Winner: Gemini</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            Claude vs Gemini for Analysis
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Claude is the stronger analysis assistant for most professional
            work. It is especially good at comparing options, surfacing
            tradeoffs, identifying missing assumptions, and turning ambiguous
            inputs into a structured recommendation.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Gemini can analyze documents and answer complex questions, but I
            would choose Claude first for strategy memos, product decisions,
            user research synthesis, policy analysis, and nuanced writing.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            Claude vs Gemini for Writing
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Claude usually produces cleaner first drafts. It is less likely to
            sound like a generic assistant and more likely to preserve tone,
            structure, and argument quality.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Gemini is useful for writing that starts inside Google Docs, Gmail,
            or Workspace. If your team wants AI embedded directly into the
            document workflow, Gemini has the advantage.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            Claude vs Gemini for Research
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Gemini has the edge for research discovery because it sits close to
            Google Search and Google&apos;s broader information products. For
            everyday web research, quick source discovery, and pulling context
            into Workspace, Gemini is extremely convenient.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Claude has the edge after you have the material. Give Claude
            transcripts, reports, notes, PDFs, or interview excerpts, and it is
            excellent at finding patterns, summarizing evidence, and turning
            research into decisions.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            Claude vs Gemini for Long-Context Work
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Both tools support serious long-context workflows, but Claude is
            the one I would trust first for deep document work: reviewing
            product specs, comparing research studies, analyzing transcripts,
            editing long reports, or working across many pages of context.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Gemini is also strong here, especially when the context includes
            Google files, multimodal inputs, or Workspace-native material. But
            Claude often feels more consistent when the final output needs to
            be a clear written judgment.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            Claude vs Gemini for Team Workflows
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            For teams, the decision depends less on the model and more on where
            work happens. If your team writes in Google Docs, communicates in
            Gmail, tracks data in Sheets, and presents in Slides, Gemini has a
            practical distribution advantage.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            If your team needs a dedicated AI workspace for analysis, writing,
            research synthesis, coding support, and long-context collaboration,
            Claude is often the better shared assistant.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Pricing</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Claude pricing is usually easiest to evaluate as individual,
            higher-usage, team, enterprise, and API access. The right plan
            depends on usage limits, collaboration needs, admin controls, and
            whether your team needs Claude Code or developer platform access.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Gemini pricing can be more tied to Google accounts, Google AI
            plans, Google Workspace availability, storage bundles, and
            organization settings. For Workspace teams, the buying path may be
            different from a personal Gemini subscription.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Check official pricing before committing, because both companies
            update plans and usage limits frequently.
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

        <ArticleCta tool="Claude" href={toolLinks.claude} placement="mid" />

        <section className="mt-12 rounded-lg border bg-card p-6">
          <h2 className="text-2xl font-semibold">Verdict</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Claude is better for analysis, writing, long-context work, research
            synthesis, strategy, and high-quality professional documents.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Gemini is better for Google-first work, Workspace productivity,
            multimodal workflows, everyday research, and teams that want AI
            embedded directly into the tools they already use.
          </p>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            <p className="rounded-lg border bg-background p-4">
              <span className="font-medium">Claude Rating:</span> 9/10. Best
              for deep work, writing, and careful analysis.
            </p>
            <p className="rounded-lg border bg-background p-4">
              <span className="font-medium">Gemini Rating:</span> 8.5/10. Best
              for Google Workspace and multimodal productivity.
            </p>
          </div>
        </section>

        <section className="mt-12 rounded-lg border bg-foreground p-6 text-background">
          <h2 className="text-xl font-semibold">Bottom line</h2>
          <p className="mt-3 leading-7">
            Choose Claude when the work requires judgment. Choose Gemini when
            the work lives in Google. For most writing, analysis, and strategy,
            Claude is stronger. For Google Workspace productivity, Gemini is
            more convenient.
          </p>
        </section>

        <ArticleCta tool="Claude" href={toolLinks.claude} placement="bottom" />

        <GiscusComments />
      </article>
    </main>
  )
}
