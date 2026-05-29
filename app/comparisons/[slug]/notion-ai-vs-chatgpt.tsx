import Link from "next/link"
import { ArrowLeft, Check } from "lucide-react"

import { ArticleCta } from "@/components/article/article-cta"
import { GiscusComments } from "@/components/article/giscus-comments"
import { Button } from "@/components/ui/button"
import { toolLinks } from "@/lib/tool-links"

const verdictRows = [
  ["Embedded Workspace AI", "Notion AI"],
  ["General-Purpose Assistant", "ChatGPT"],
  ["Team Knowledge Search", "Notion AI"],
  ["Writing Quality", "ChatGPT"],
  ["Research and Analysis", "ChatGPT"],
  ["Working Inside Docs", "Notion AI"],
  ["Custom Workflows", "ChatGPT"],
  ["Notion Workspace Context", "Notion AI"],
  ["Cross-Tool Flexibility", "ChatGPT"],
  ["Overall Recommendation", "ChatGPT"],
]

const notionWins = [
  {
    title: "Better Inside Notion",
    body: "Notion AI is strongest when the work already lives in Notion: docs, meeting notes, project plans, tasks, databases, decisions, and team knowledge.",
  },
  {
    title: "Workspace-Aware Answers",
    body: "Notion AI can answer questions from your Notion workspace and, on supported plans, connected tools through Notion AI Connectors. That makes it useful for internal knowledge lookup.",
  },
  {
    title: "Less Context Switching",
    body: "If your team writes, plans, and stores knowledge in Notion, embedded AI saves the friction of copying text into another assistant and pasting answers back into the workspace.",
  },
  {
    title: "Better for Team Wikis",
    body: "For company handbooks, product specs, meeting notes, onboarding docs, and project pages, Notion AI fits naturally into the place where teams already maintain knowledge.",
  },
]

const chatgptWins = [
  {
    title: "Better General Assistant",
    body: "ChatGPT is more flexible across writing, analysis, brainstorming, research, coding help, data work, planning, images, files, and custom assistant workflows.",
  },
  {
    title: "Stronger Reasoning and Synthesis",
    body: "When the job is not only finding a page but thinking through a problem, ChatGPT is usually the stronger assistant for analysis, strategy, editing, and decision support.",
  },
  {
    title: "More Portable Across Tools",
    body: "ChatGPT is not tied to one workspace. That makes it more useful when team knowledge is spread across docs, spreadsheets, project tools, meetings, files, repositories, and external research.",
  },
  {
    title: "Better for Custom Workflows",
    body: "Custom GPTs, connectors, business workspace features, files, deep research, and plugin-style workflows make ChatGPT better when the assistant needs to sit above many tools rather than inside one.",
  },
]

const useCases = [
  {
    title: "Choose Notion AI if",
    items: [
      "Your team already uses Notion as the source of truth",
      "You need AI for docs, meeting notes, pages, and databases",
      "You want answers from Notion workspace knowledge",
      "You want less copy-paste between Notion and an AI assistant",
      "Your main AI workflow is improving team documentation",
    ],
  },
  {
    title: "Choose ChatGPT if",
    items: [
      "You need one assistant for many kinds of work",
      "You want stronger writing, reasoning, research, and analysis",
      "Your knowledge lives across many tools, not only Notion",
      "You use files, data, code, custom GPTs, or deep research",
      "You want AI workflows that are not locked to one workspace app",
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

export function NotionAiVsChatgptComparison() {
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
          Notion AI vs ChatGPT: Which Is Better for Team Knowledge Work?
        </h1>

        <div className="mt-8 space-y-5 text-lg leading-8 text-muted-foreground">
          <p>
            Notion AI and ChatGPT both help teams write, summarize, answer
            questions, and work with information. But they solve different
            problems.
          </p>
          <p>
            Notion AI is embedded workspace AI. It is most useful when your
            team&apos;s knowledge already lives in Notion and you want answers,
            summaries, edits, and meeting notes without leaving the workspace.
          </p>
          <p>
            ChatGPT is a general-purpose assistant. It is most useful when the
            work spans many tools, formats, questions, files, decisions,
            research tasks, and workflows beyond one docs app.
          </p>
          <p>
            Choose Notion AI if Notion is your team&apos;s knowledge hub.
            Choose ChatGPT if you want one assistant for broader work.
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
              <span className="font-medium">Best inside Notion:</span> Notion
              AI
            </p>
            <p className="rounded-lg border bg-background p-4">
              <span className="font-medium">Best overall assistant:</span>{" "}
              ChatGPT
            </p>
          </div>
        </section>

        <section className="mt-12 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border bg-card p-5">
            <h2 className="text-2xl font-semibold">What is Notion AI?</h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              Notion AI is the AI layer inside Notion. It helps with writing,
              summarizing, answering questions, searching workspace knowledge,
              generating docs, and working with pages and databases.
            </p>
            <p className="mt-4 leading-7 text-muted-foreground">
              Its advantage is proximity. The AI lives where the docs,
              decisions, notes, and project context already live.
            </p>
          </div>

          <div className="rounded-lg border bg-card p-5">
            <h2 className="text-2xl font-semibold">What is ChatGPT?</h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              ChatGPT is OpenAI&apos;s general-purpose AI assistant for writing,
              research, analysis, coding help, files, data, brainstorming,
              custom GPTs, and business workflows.
            </p>
            <p className="mt-4 leading-7 text-muted-foreground">
              Its advantage is breadth. It can support many kinds of knowledge
              work instead of being limited to one workspace product.
            </p>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Where Notion AI Wins</h2>
          <div className="mt-5 grid gap-4">
            {notionWins.map((item) => (
              <div key={item.title} className="rounded-lg border bg-card p-5">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {item.body}
                </p>
                <p className="mt-4 text-sm font-medium">Winner: Notion AI</p>
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
                <p className="mt-4 text-sm font-medium">Winner: ChatGPT</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            Notion AI vs ChatGPT for Team Knowledge
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Notion AI is better when the question is, “What do we already know
            inside Notion?” It can search pages, summarize docs, pull context
            from databases, and help teams reuse existing workspace knowledge.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            ChatGPT is better when the question is broader: “What should we do
            with this information?” It is stronger for synthesis, analysis,
            strategy, editing, research, and turning many inputs into a
            decision.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            Notion AI vs ChatGPT for Writing
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Notion AI is convenient for improving pages already inside Notion:
            cleaning up meeting notes, drafting updates, summarizing projects,
            creating outlines, and rewriting internal docs.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            ChatGPT is usually better for higher-stakes writing. It gives you
            more room to explore tone, structure, examples, outlines, critique,
            and revision workflows before the writing gets pasted into a final
            doc.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            Notion AI vs ChatGPT for Research
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Notion AI is useful for researching your internal workspace. It can
            surface relevant pages and connected knowledge sources when your
            team needs an answer from internal context.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            ChatGPT is better for external research, multi-step analysis,
            broad synthesis, file comparison, deeper exploration, and turning
            research into arguments or recommendations.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            Notion AI vs ChatGPT for Workflow Automation
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Notion AI is best when the workflow starts and ends in Notion:
            create a project brief, summarize meeting notes, generate action
            items, improve a database page, or answer a question from the wiki.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            ChatGPT is better when the workflow crosses tools. ChatGPT Business
            and enterprise features increasingly support connectors, shared
            workspace knowledge, custom GPTs, plugins, files, and internal
            workflows that are not tied to one workspace app.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Pricing</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Notion AI pricing depends on your Notion plan, workspace setup, AI
            access, connector needs, and any advanced AI usage limits or
            credits available in your account.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            ChatGPT pricing depends on whether you use Free, Plus, Pro,
            Business, Enterprise, or Edu plans, plus any workspace features,
            connector access, custom GPT usage, and flexible usage terms.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Check official pricing before choosing. If your team already pays
            for Notion, embedded AI may be easier to justify. If your team
            needs one assistant across many tools, ChatGPT may deliver more
            value.
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

        <ArticleCta tool="ChatGPT" href={toolLinks.chatgpt} placement="mid" />

        <section className="mt-12 rounded-lg border bg-card p-6">
          <h2 className="text-2xl font-semibold">Verdict</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Notion AI is better for embedded team knowledge work inside Notion:
            docs, wikis, meeting notes, internal search, and workspace answers.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            ChatGPT is better as a general-purpose assistant for writing,
            research, analysis, reasoning, files, custom workflows, and work
            that crosses many tools.
          </p>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            <p className="rounded-lg border bg-background p-4">
              <span className="font-medium">Notion AI Rating:</span> 8.5/10.
              Best when Notion is already your team knowledge hub.
            </p>
            <p className="rounded-lg border bg-background p-4">
              <span className="font-medium">ChatGPT Rating:</span> 9/10. Best
              for broad knowledge work beyond one workspace.
            </p>
          </div>
        </section>

        <section className="mt-12 rounded-lg border bg-foreground p-6 text-background">
          <h2 className="text-xl font-semibold">Bottom line</h2>
          <p className="mt-3 leading-7">
            Choose Notion AI if the work is mostly inside Notion. Choose
            ChatGPT if the work requires a flexible assistant that can reason,
            write, research, and operate across many contexts.
          </p>
        </section>

        <ArticleCta tool="ChatGPT" href={toolLinks.chatgpt} placement="bottom" />

        <GiscusComments />
      </article>
    </main>
  )
}
