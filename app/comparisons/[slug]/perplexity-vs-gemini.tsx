import Link from "next/link"
import { ArrowLeft, Check } from "lucide-react"

import { ArticleCta } from "@/components/article/article-cta"
import { GiscusComments } from "@/components/article/giscus-comments"
import { Button } from "@/components/ui/button"
import { toolLinks } from "@/lib/tool-links"

const verdictRows = [
  ["Answer Quality", "Perplexity"],
  ["Source Handling", "Perplexity"],
  ["Multimodal Research", "Gemini"],
  ["Everyday Search", "Gemini"],
  ["Deep Research", "Tie"],
  ["Google Workspace Context", "Gemini"],
  ["Citation Workflow", "Perplexity"],
  ["General Productivity", "Gemini"],
  ["Decision Summaries", "Perplexity"],
  ["Overall Recommendation", "Perplexity"],
]

const perplexityWins = [
  {
    title: "Cleaner Research Answers",
    body: "Perplexity is designed around answer quality for research questions. It usually gives a focused synthesis, shows sources prominently, and makes it easy to inspect where an answer came from.",
  },
  {
    title: "Better Source Handling",
    body: "Perplexity puts citations at the center of the experience. That makes it easier to verify claims, open references, compare sources, and catch weak evidence before making a decision.",
  },
  {
    title: "Better for Decision Research",
    body: "When the job is comparing tools, understanding a market, summarizing a topic, or preparing a recommendation, Perplexity usually gets to a practical answer faster.",
  },
  {
    title: "Less Distracting Research Workflow",
    body: "Perplexity is narrower than Gemini, and that is part of its strength. It feels like a focused research engine instead of a general assistant trying to do everything.",
  },
]

const geminiWins = [
  {
    title: "Better Multimodal Research",
    body: "Gemini is stronger when research includes images, video, voice, screenshots, files, Google Workspace content, or other multimodal inputs.",
  },
  {
    title: "Stronger Google Ecosystem Fit",
    body: "Gemini has the advantage if your work already lives in Google Search, Gmail, Docs, Drive, Sheets, Slides, Android, Chrome, or Google Workspace.",
  },
  {
    title: "Better Everyday Assistant",
    body: "Gemini is more useful as an all-purpose productivity assistant. It can help with search, writing, files, media, Google apps, voice, mobile workflows, and general tasks.",
  },
  {
    title: "Useful Deep Research Workflow",
    body: "Gemini Deep Research can plan and work through more complex research tasks, especially when you want Google Search and optional Workspace context in the same research assistant.",
  },
]

const useCases = [
  {
    title: "Choose Perplexity if",
    items: [
      "You want cited answers quickly",
      "You care about source handling and verification",
      "You are comparing products, markets, or options",
      "You need concise decision-ready research summaries",
      "You prefer a focused answer engine over a broad assistant",
    ],
  },
  {
    title: "Choose Gemini if",
    items: [
      "You need multimodal research with images, files, or media",
      "You work heavily inside Google apps",
      "You want Deep Research with Google Search and Workspace context",
      "You need a general assistant for everyday productivity",
      "You care about voice, mobile, and Google ecosystem workflows",
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

export function PerplexityVsGeminiComparison() {
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
          Perplexity vs Gemini (2026): Which Research Tool Should You Use?
        </h1>

        <div className="mt-8 space-y-5 text-lg leading-8 text-muted-foreground">
          <p>
            Perplexity and Gemini are both useful research tools, but they are
            built for different habits.
          </p>
          <p>
            Perplexity is an answer engine. It is best when you want a cited,
            concise, research-ready answer and a trail of sources you can
            inspect.
          </p>
          <p>
            Gemini is a broader AI assistant. It is best when research blends
            with Google Search, Google Workspace, images, files, voice, mobile
            workflows, and multimodal context.
          </p>
          <p>
            Choose Perplexity for focused research and source handling. Choose
            Gemini for multimodal and Google-native research workflows.
          </p>
        </div>

        <ArticleCta
          tool="Perplexity"
          href={toolLinks.perplexity}
          placement="top"
        />

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
              <span className="font-medium">Best cited answer engine:</span>{" "}
              Perplexity
            </p>
            <p className="rounded-lg border bg-background p-4">
              <span className="font-medium">Best multimodal research:</span>{" "}
              Gemini
            </p>
          </div>
        </section>

        <section className="mt-12 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border bg-card p-5">
            <h2 className="text-2xl font-semibold">What is Perplexity?</h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              Perplexity is an AI answer engine that searches the web,
              synthesizes information, and provides cited answers for research
              questions.
            </p>
            <p className="mt-4 leading-7 text-muted-foreground">
              Its core strength is turning source material into a readable
              answer while keeping citations close enough to verify.
            </p>
          </div>

          <div className="rounded-lg border bg-card p-5">
            <h2 className="text-2xl font-semibold">What is Gemini?</h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              Gemini is Google&apos;s AI assistant and model family, connected
              to Google Search, Google apps, multimodal inputs, mobile
              workflows, and Deep Research features.
            </p>
            <p className="mt-4 leading-7 text-muted-foreground">
              Its core strength is being a broad assistant that can research,
              reason, analyze media, and work inside Google&apos;s ecosystem.
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
                <p className="mt-4 text-sm font-medium">Winner: Perplexity</p>
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
            Perplexity vs Gemini for Answer Quality
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Perplexity usually gives better research answers because the
            product is focused on concise synthesis with citations. It is less
            likely to wander into general assistant behavior when the task is
            clearly research.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Gemini can produce excellent answers, especially with strong
            prompts and Deep Research, but its answer quality depends more on
            whether you are using it as search, assistant, Workspace helper, or
            multimodal tool.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            Perplexity vs Gemini for Source Handling
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Perplexity wins for source handling because citations are part of
            the core product experience. It is easy to open references, compare
            claims, and verify where the answer came from.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Gemini can also cite and use web sources, particularly in Deep
            Research, but source inspection is not always as central to the
            everyday experience as it is in Perplexity.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            Perplexity vs Gemini for Multimodal Research
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Gemini is stronger for multimodal research. If you need to work
            with images, documents, screenshots, video, voice, Google Drive
            files, or Workspace context, Gemini has the broader surface area.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Perplexity can handle files and research workflows, but Gemini is
            better when the research is not mostly text and web sources.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            Perplexity vs Gemini for Everyday Search
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Gemini has the advantage for everyday search because it is tied to
            Google&apos;s broader ecosystem. It can connect search with Google
            apps, mobile workflows, voice, and everyday productivity.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Perplexity is better when the everyday search becomes a research
            question. If you are trying to understand something, compare
            options, or summarize a topic, Perplexity is usually cleaner.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            Perplexity vs Gemini for Workflow Fit
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Perplexity fits researchers, analysts, founders, writers, product
            managers, and anyone who wants fast cited answers with a
            straightforward research trail.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Gemini fits Google-first users who want research to connect with
            Gmail, Drive, Docs, Sheets, Android, Chrome, voice, images, and
            broader assistant workflows.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Pricing</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Perplexity offers free and paid plans, with paid tiers usually
            unlocking more advanced models, higher usage, file handling, and
            deeper research capabilities.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Gemini pricing is tied to Google AI plans, Workspace access,
            storage bundles, model limits, and availability of features like
            Deep Research or advanced multimodal tools.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Check official pricing before committing. Perplexity is often the
            cleaner research subscription. Gemini may be the better value if
            you already pay for Google AI or Workspace features.
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

        <ArticleCta
          tool="Perplexity"
          href={toolLinks.perplexity}
          placement="mid"
        />

        <section className="mt-12 rounded-lg border bg-card p-6">
          <h2 className="text-2xl font-semibold">Verdict</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Perplexity is better for focused research, cited answers, source
            handling, comparison work, and decision-ready summaries.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Gemini is better for multimodal research, Google ecosystem
            workflows, everyday search, Workspace context, and broader
            assistant tasks.
          </p>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            <p className="rounded-lg border bg-background p-4">
              <span className="font-medium">Perplexity Rating:</span> 9/10.
              Best for cited answer research.
            </p>
            <p className="rounded-lg border bg-background p-4">
              <span className="font-medium">Gemini Rating:</span> 8.5/10. Best
              for multimodal and Google-native research.
            </p>
          </div>
        </section>

        <section className="mt-12 rounded-lg border bg-foreground p-6 text-background">
          <h2 className="text-xl font-semibold">Bottom line</h2>
          <p className="mt-3 leading-7">
            Choose Perplexity when sources and synthesis matter most. Choose
            Gemini when research needs Google context, multimodal inputs, and a
            broader assistant workflow.
          </p>
        </section>

        <ArticleCta
          tool="Perplexity"
          href={toolLinks.perplexity}
          placement="bottom"
        />

        <GiscusComments />
      </article>
    </main>
  )
}
