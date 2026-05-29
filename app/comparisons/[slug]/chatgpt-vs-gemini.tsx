import Link from "next/link"
import { ArrowLeft, Check } from "lucide-react"

import { ArticleCta } from "@/components/article/article-cta"
import { GiscusComments } from "@/components/article/giscus-comments"
import { Button } from "@/components/ui/button"
import { toolLinks } from "@/lib/tool-links"

const verdictRows = [
  ["General-purpose assistant", "ChatGPT"],
  ["Google ecosystem integration", "Gemini"],
  ["Writing and analysis", "ChatGPT"],
  ["Search and everyday web context", "Gemini"],
  ["Custom assistants and GPTs", "ChatGPT"],
  ["Gmail, Docs, Drive, and Android", "Gemini"],
  ["Coding help", "ChatGPT"],
  ["Multimodal Google workflows", "Gemini"],
  ["Business workspace", "Tie"],
  ["Overall Recommendation", "ChatGPT for broad AI work, Gemini for Google-first teams"],
]

const chatgptWins = [
  {
    title: "Stronger General AI Workspace",
    body: "ChatGPT is usually the better standalone assistant for writing, analysis, brainstorming, coding help, file work, data analysis, image generation, deep research, custom GPTs, projects, memory, and everyday problem solving.",
  },
  {
    title: "Better for Custom Assistants",
    body: "Custom GPTs make ChatGPT especially useful when teams want reusable assistants for workflows, research, support drafts, writing standards, internal playbooks, or repeatable analysis.",
  },
  {
    title: "More Flexible Work Modes",
    body: "ChatGPT gives users many ways to work: conversational help, canvas-style editing, file uploads, voice, vision, scheduled tasks, deep research, agent workflows, and coding support through OpenAI&apos;s broader product stack.",
  },
  {
    title: "Stronger Default for Mixed Work",
    body: "If your work spans documents, code, data, strategy, product thinking, marketing, research, and creative tasks across many tools, ChatGPT is the safer default.",
  },
]

const geminiWins = [
  {
    title: "Best Google Workspace Fit",
    body: "Gemini is the better choice if your day happens in Gmail, Docs, Sheets, Slides, Drive, Calendar, Meet, Android, Chrome, Google Search, and Google Workspace admin environments.",
  },
  {
    title: "Excellent Search and Product Context",
    body: "Gemini benefits from Google&apos;s search and product ecosystem. It is especially useful when you want research, web context, files, email, and Workspace output close together.",
  },
  {
    title: "Strong Multimodal Direction",
    body: "Gemini is built around multimodal work across text, images, video, search, mobile, Workspace, and Google&apos;s model ecosystem, which makes it compelling for everyday personal and work assistance.",
  },
  {
    title: "Better for Google-First Teams",
    body: "For organizations already standardized on Google Workspace, Gemini can feel less like a separate AI app and more like a layer inside tools employees already use.",
  },
]

const useCases = [
  {
    title: "Choose ChatGPT if",
    items: [
      "You want the best standalone AI assistant for mixed knowledge work",
      "You use custom GPTs, projects, files, deep research, or data analysis",
      "You write, code, plan, analyze, and brainstorm across many tools",
      "You want a flexible AI workspace outside one vendor ecosystem",
      "Your team needs broad AI adoption across different job functions",
    ],
  },
  {
    title: "Choose Gemini if",
    items: [
      "Your team lives in Gmail, Docs, Sheets, Slides, Drive, and Calendar",
      "You want AI close to Google Search, Android, Chrome, and Workspace",
      "You care about connected Google app context and daily productivity",
      "You want strong multimodal workflows inside Google products",
      "Your organization already buys and administers Google AI plans",
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

export function ChatGPTVsGeminiComparison() {
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
          ChatGPT vs Gemini (2026): Which AI Assistant Should You Use?
        </h1>

        <div className="mt-8 space-y-5 text-lg leading-8 text-muted-foreground">
          <p>
            ChatGPT and Gemini are both excellent AI assistants, but they are
            strongest in different workflows.
          </p>
          <p>
            ChatGPT is the better default if you want one flexible AI workspace
            for writing, analysis, coding help, file work, research, data,
            custom assistants, and general problem solving.
          </p>
          <p>
            Gemini is the better default if your work already lives inside
            Google: Gmail, Docs, Sheets, Slides, Drive, Search, Android, Chrome,
            Calendar, and Google Workspace.
          </p>
          <p>
            The simple rule: choose ChatGPT when you want the strongest
            standalone assistant. Choose Gemini when Google ecosystem context is
            the main advantage.
          </p>
        </div>

        <ArticleCta tool="ChatGPT" href={toolLinks.chatgpt} placement="top" />

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
              <span className="font-medium">Best standalone assistant:</span>{" "}
              ChatGPT
            </p>
            <p className="rounded-lg border bg-background p-4">
              <span className="font-medium">Best Google assistant:</span>{" "}
              Gemini
            </p>
          </div>
        </section>

        <section className="mt-12 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border bg-card p-5">
            <h2 className="text-2xl font-semibold">What is ChatGPT?</h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              ChatGPT is OpenAI&apos;s AI assistant for writing, coding,
              research, reasoning, file analysis, data work, image generation,
              voice, projects, custom GPTs, and agent-style workflows.
            </p>
            <p className="mt-4 leading-7 text-muted-foreground">
              It is especially strong as a general AI workspace that can adapt
              to many types of work without depending on one productivity suite.
            </p>
          </div>

          <div className="rounded-lg border bg-card p-5">
            <h2 className="text-2xl font-semibold">What is Gemini?</h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              Gemini is Google&apos;s AI assistant and model family, available
              through the Gemini app and integrated across Google products,
              Google AI plans, Workspace, Search, Android, Chrome, and developer
              tools.
            </p>
            <p className="mt-4 leading-7 text-muted-foreground">
              It is especially strong when AI needs to work near email,
              documents, spreadsheets, files, search, mobile workflows, and
              Google account context.
            </p>
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
                <p className="mt-4 text-sm font-medium">Winner: ChatGPT</p>
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
            ChatGPT vs Gemini for Work
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            ChatGPT is better when the work is varied: drafting a strategy memo,
            analyzing a spreadsheet, reviewing code, summarizing PDFs,
            brainstorming a campaign, building a custom GPT, or running deeper
            research across files and the web.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Gemini is better when the work is tightly tied to Google Workspace:
            summarizing Gmail threads, drafting Docs, working with Sheets,
            finding Drive context, preparing Slides, researching with Google,
            or using AI inside Android and Chrome.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            ChatGPT vs Gemini for Research
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            ChatGPT is excellent for turning research into usable output:
            synthesis, outlines, recommendations, comparative analysis, tables,
            memos, and follow-up questions. Deep research is especially useful
            when the final answer needs structure.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Gemini is excellent when search context, Google results, dynamic
            web information, and Workspace follow-through are central. It is a
            natural fit for users who already trust Google as the first stop for
            discovery.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            ChatGPT vs Gemini for Coding
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            ChatGPT is the better general coding assistant for most users,
            especially when combined with file analysis, debugging, explanation,
            refactoring help, architecture tradeoffs, and OpenAI&apos;s coding
            products.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Gemini is strong for coding too, especially in Google&apos;s
            developer ecosystem and multimodal workflows, but I would choose
            ChatGPT first if coding is one of many broad knowledge-work tasks.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Pricing</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            ChatGPT has free, Plus, Pro, Business, and Enterprise tiers. The
            value is strongest when you use multiple modes: models, files,
            voice, image generation, deep research, custom GPTs, projects,
            tasks, and business workspace features.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Gemini is available through Google AI plans and Workspace-related
            offerings. The value is strongest when the subscription improves the
            tools you already use every day: Gmail, Docs, Sheets, Drive, Search,
            Android, Chrome, and related Google products.
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

        <ArticleCta tool="Gemini" href={toolLinks.gemini} placement="mid" />

        <section className="mt-12 rounded-lg border bg-card p-6">
          <h2 className="text-2xl font-semibold">Verdict</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            ChatGPT is the better all-around AI assistant for most people. It is
            flexible, broad, strong across writing and analysis, and useful even
            when your work spans many apps and formats.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Gemini is the better assistant for Google-first users and teams. Its
            biggest advantage is not just model quality, but proximity to Gmail,
            Docs, Sheets, Drive, Search, Android, Chrome, and Workspace.
          </p>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            <p className="rounded-lg border bg-background p-4">
              <span className="font-medium">ChatGPT Rating:</span> 9.3/10.
              Best for broad AI work across writing, analysis, coding, and
              research.
            </p>
            <p className="rounded-lg border bg-background p-4">
              <span className="font-medium">Gemini Rating:</span> 9/10. Best
              for Google-first productivity and multimodal everyday assistance.
            </p>
          </div>
        </section>

        <section className="mt-12 rounded-lg border bg-foreground p-6 text-background">
          <h2 className="text-xl font-semibold">Bottom line</h2>
          <p className="mt-3 leading-7">
            Choose ChatGPT if you want the strongest general-purpose AI
            workspace. Choose Gemini if Google Workspace, Search, Android, and
            connected Google app context are where your work already happens.
          </p>
        </section>

        <ArticleCta tool="ChatGPT" href={toolLinks.chatgpt} placement="bottom" />

        <GiscusComments />
      </article>
    </main>
  )
}
