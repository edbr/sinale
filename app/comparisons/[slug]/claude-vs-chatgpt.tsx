import Link from "next/link"
import { ArrowLeft, Check } from "lucide-react"

import { Button } from "@/components/ui/button"

const verdictRows = [
  ["Writing Quality", "Claude"],
  ["Strategic Thinking", "Claude"],
  ["Research Synthesis", "Claude"],
  ["Coding", "ChatGPT"],
  ["Data Analysis", "ChatGPT"],
  ["Images", "ChatGPT"],
  ["Flexibility", "ChatGPT"],
  ["Document Analysis", "Claude"],
  ["Tool Ecosystem", "ChatGPT"],
  ["Overall Platform", "ChatGPT"],
  ["Pure AI Reasoning", "Claude"],
]

const claudeWins = [
  {
    title: "Writing Quality",
    body: "Claude tends to produce writing that feels more natural, nuanced, organized, and less formulaic. For articles, reports, case studies, research summaries, and strategic documents, it often requires fewer edits.",
  },
  {
    title: "Strategic Thinking",
    body: "Claude excels when discussing product strategy, business decisions, organizational design, user experience, and tradeoffs. It often evaluates competing perspectives before recommending a path.",
  },
  {
    title: "Long Documents",
    body: "Claude is exceptional at processing large research reports, academic papers, interview transcripts, product requirements, and technical documentation.",
  },
  {
    title: "Nuanced Analysis",
    body: "Claude shines on questions about hidden risks, flawed assumptions, and stakeholder perspectives. Its responses tend to feel thoughtful rather than reactive.",
  },
]

const chatgptWins = [
  {
    title: "Overall Capability",
    body: "ChatGPT simply does more: spreadsheets, images, screenshots, charts, custom assistants, web browsing, and advanced workflows.",
  },
  {
    title: "Coding",
    body: "Both models can code, but ChatGPT often feels more practical and execution-oriented for full-stack development, debugging, framework support, and implementation.",
  },
  {
    title: "Data Analysis",
    body: "Uploading CSV files, Excel spreadsheets, analytics exports, or database-like data and asking questions can produce surprisingly useful results.",
  },
  {
    title: "Visual Work",
    body: "ChatGPT supports image generation, image editing, screenshot analysis, and diagram interpretation, which gives it broader workflow coverage.",
  },
  {
    title: "Tool Ecosystem",
    body: "Custom GPTs, integrations, workflows, and specialized tools can make ChatGPT the central hub of an AI workflow.",
  },
]

export function ClaudeVsChatGPTComparison() {
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
          Claude vs ChatGPT (2026): Which AI Assistant Is Better?
        </h1>

        <div className="mt-8 space-y-5 text-lg leading-8 text-muted-foreground">
          <p>
            If you&apos;re choosing between Claude and ChatGPT, you&apos;re
            already looking at the two strongest general-purpose AI assistants
            available today.
          </p>
          <p>
            Both can write, code, analyze documents, brainstorm ideas,
            summarize research, and help solve complex problems. The real
            question isn&apos;t which one is objectively better. It is which one
            fits the way you work.
          </p>
          <p>
            After using both extensively for product design, software
            development, research, strategy, writing, and learning, I&apos;ve
            found that each has a distinct personality and set of strengths.
            Claude is my preferred tool for thinking. ChatGPT is my preferred
            tool for doing.
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
              <span className="font-medium">Best for most people:</span>{" "}
              ChatGPT
            </p>
            <p className="rounded-lg border bg-background p-4">
              <span className="font-medium">
                Best for writers, researchers, and strategists:
              </span>{" "}
              Claude
            </p>
          </div>
        </section>

        <section className="mt-12 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border bg-card p-5">
            <h2 className="text-2xl font-semibold">What is Claude?</h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              Claude is an AI assistant developed by Anthropic. It focuses
              heavily on writing, reasoning, research, analysis, long-context
              understanding, and complex discussions.
            </p>
            <p className="mt-4 leading-7 text-muted-foreground">
              Its biggest strength is producing thoughtful, structured
              responses that often feel closer to collaborating with a
              knowledgeable colleague than interacting with software.
            </p>
          </div>
          <div className="rounded-lg border bg-card p-5">
            <h2 className="text-2xl font-semibold">What is ChatGPT?</h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              ChatGPT is the flagship AI platform from OpenAI. It combines
              conversational AI, coding assistance, data analysis, image
              generation, research, document processing, custom GPTs, and
              workflow automation.
            </p>
            <p className="mt-4 leading-7 text-muted-foreground">
              Rather than specializing in one area, ChatGPT aims to be an
              all-purpose AI platform.
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
            Claude vs ChatGPT for Writing
          </h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border bg-card p-5">
              <h3 className="font-semibold">Claude is better for</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Long-form content, essays, reports, strategic communication,
                and research synthesis.
              </p>
            </div>
            <div className="rounded-lg border bg-card p-5">
              <h3 className="font-semibold">ChatGPT is better for</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Draft generation, iterative editing, marketing content,
                structured outputs, and multi-step workflows.
              </p>
            </div>
          </div>
          <p className="mt-5 leading-7 text-muted-foreground">
            If the final output matters most, I usually start with Claude.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            Claude vs ChatGPT for Coding
          </h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border bg-card p-5">
              <h3 className="font-semibold">Claude is better for</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Architecture discussions, code explanation, system reasoning,
                and technical tradeoffs.
              </p>
            </div>
            <div className="rounded-lg border bg-card p-5">
              <h3 className="font-semibold">ChatGPT is better for</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Feature implementation, code generation, debugging, framework
                support, and rapid iteration.
              </p>
            </div>
          </div>
          <p className="mt-5 leading-7 text-muted-foreground">
            If I&apos;m shipping software, ChatGPT usually gets more use.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            Claude vs ChatGPT for Product Managers
          </h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border bg-card p-5">
              <h3 className="font-semibold">Claude is excellent for</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Product strategy, user research synthesis, opportunity
                assessment, and stakeholder communication.
              </p>
            </div>
            <div className="rounded-lg border bg-card p-5">
              <h3 className="font-semibold">ChatGPT is excellent for</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Data analysis, brainstorming, documentation, competitive
                research, and workflow automation.
              </p>
            </div>
          </div>
          <p className="mt-5 leading-7 text-muted-foreground">
            Product managers will likely benefit from both.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Which One Feels Smarter?</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            This depends on the task. For writing, analysis, research, and
            strategy, Claude often feels smarter. For execution, coding, tool
            use, and practical problem solving, ChatGPT often feels smarter.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Claude frequently behaves like a thoughtful advisor. ChatGPT
            frequently behaves like a capable operator.
          </p>
        </section>

        <section className="mt-12 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border bg-card p-5">
            <h2 className="text-2xl font-semibold">Who Should Choose Claude?</h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              Claude is ideal for writers, researchers, consultants, analysts,
              product strategists, academics, and knowledge workers. If your day
              revolves around reading, writing, thinking, and making decisions,
              Claude is exceptionally strong.
            </p>
          </div>
          <div className="rounded-lg border bg-card p-5">
            <h2 className="text-2xl font-semibold">
              Who Should Choose ChatGPT?
            </h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              ChatGPT is ideal for developers, designers, product managers,
              founders, marketers, students, and general professionals. If you
              want one AI tool that can do almost everything, ChatGPT remains
              the safest choice.
            </p>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">My Workflow</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border bg-card p-5">
              <h3 className="font-semibold">Claude</h3>
              <div className="mt-4 grid gap-2 text-sm">
                {["Deep thinking", "Strategy", "Writing", "Research synthesis"].map(
                  (item) => (
                    <p key={item} className="flex gap-2">
                      <Check className="size-4 shrink-0" />
                      {item}
                    </p>
                  )
                )}
              </div>
            </div>
            <div className="rounded-lg border bg-card p-5">
              <h3 className="font-semibold">ChatGPT</h3>
              <div className="mt-4 grid gap-2 text-sm">
                {["Coding", "Data analysis", "Images", "Everyday work"].map(
                  (item) => (
                    <p key={item} className="flex gap-2">
                      <Check className="size-4 shrink-0" />
                      {item}
                    </p>
                  )
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="mt-12 rounded-lg border bg-card p-6">
          <h2 className="text-2xl font-semibold">Verdict</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Claude produces some of the best writing and reasoning available in
            AI today. ChatGPT offers the most complete and versatile AI platform
            available today.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            If I were recommending a single subscription to most people, I would
            recommend ChatGPT because of its breadth of capabilities. If I were
            recommending a tool specifically for writing, analysis, and
            strategic thinking, I would recommend Claude.
          </p>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            <p className="rounded-lg border bg-background p-4">
              <span className="font-medium">Claude Rating:</span> 9.5/10. Best
              for writing, analysis, and deep reasoning.
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
            Claude helps you think through complex problems. ChatGPT helps you
            solve them. The choice isn&apos;t about which model is smarter. It
            is about whether your work demands deeper reasoning or broader
            capability. For many professionals, the ideal answer is both.
          </p>
        </section>
      </article>
    </main>
  )
}
