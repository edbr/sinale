import Link from "next/link"
import { ArrowLeft, Check } from "lucide-react"

import { ArticleCta } from "@/components/article/article-cta"
import { Button } from "@/components/ui/button"
import { toolLinks } from "@/lib/tool-links"

const verdictRows = [
  ["Writing Quality", "Claude"],
  ["Strategic Thinking", "Claude"],
  ["Research Synthesis", "Claude"],
  ["Coding", "ChatGPT"],
  ["Data Analysis", "ChatGPT"],
  ["Images", "ChatGPT"],
  ["Flexibility", "ChatGPT"],
  ["Long Documents", "Claude"],
  ["Tool Ecosystem", "ChatGPT"],
  ["Overall Platform", "ChatGPT"],
]

const claudeWins = [
  {
    title: "Writing Quality",
    body: "Claude often produces more natural, polished, organized, conversational, and nuanced prose. For articles, reports, research summaries, strategic documents, and executive communication, editing requirements are usually minimal.",
  },
  {
    title: "Strategic Thinking",
    body: "Claude consistently performs well when discussing product strategy, business models, organizational design, user experience, and tradeoffs. It often explores competing perspectives before making recommendations.",
  },
  {
    title: "Long Document Analysis",
    body: "Claude excels at processing large volumes of information, including product requirements, research reports, interview transcripts, academic papers, and technical documentation.",
  },
  {
    title: "Research Synthesis",
    body: "Research is not simply collecting information. It is identifying patterns and drawing conclusions. Claude frequently provides strong summaries, insights, and structured recommendations.",
  },
]

const chatgptWins = [
  {
    title: "Coding",
    body: "Both tools are capable developers, but ChatGPT generally performs better across frontend development, full-stack applications, framework-specific implementation, debugging, and rapid prototyping.",
  },
  {
    title: "Data Analysis",
    body: "Users can upload CSV files, Excel spreadsheets, analytics exports, and survey results, then receive meaningful analysis within minutes.",
  },
  {
    title: "Image Generation",
    body: "ChatGPT supports image creation, image editing, screenshot analysis, and visual interpretation. Claude currently focuses primarily on text-based workflows.",
  },
  {
    title: "Workflow Flexibility",
    body: "ChatGPT combines research, writing, coding, analytics, images, and automation inside a single platform. That versatility makes it difficult to replace.",
  },
]

const audienceSections = [
  {
    title: "Claude vs ChatGPT for Product Managers",
    intro: "Product managers will likely benefit from both tools.",
    claude: [
      "Product strategy",
      "Research synthesis",
      "Customer insights",
      "Executive communication",
      "Opportunity analysis",
    ],
    chatgpt: [
      "Roadmaps",
      "User stories",
      "Data analysis",
      "Competitive research",
      "Product requirements",
      "Stakeholder presentations",
    ],
  },
  {
    title: "Claude vs ChatGPT for Designers",
    intro:
      "Claude helps me think through design problems. ChatGPT helps me execute solutions.",
    claude: [
      "Design rationale",
      "UX analysis",
      "Research synthesis",
      "Service design",
      "Product thinking",
    ],
    chatgpt: [
      "UX writing",
      "Design critiques",
      "Competitive analysis",
      "Prototyping workflows",
      "Design system implementation",
    ],
  },
  {
    title: "Claude vs ChatGPT for Founders",
    intro:
      "Founders face two challenges: making decisions and building things.",
    claude: [
      "Evaluating opportunities",
      "Assessing risks",
      "Understanding markets",
      "Strategic planning",
    ],
    chatgpt: [
      "Writing content",
      "Building products",
      "Analyzing data",
      "Automating workflows",
      "Supporting day-to-day execution",
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
            Artificial intelligence has quickly become a core part of how
            professionals write, research, build products, analyze data, and
            make decisions. Among the dozens of AI assistants available today,
            two products consistently lead the conversation: Claude and
            ChatGPT.
          </p>
          <p>
            Both are exceptionally capable. Both can write articles, summarize
            documents, answer questions, generate code, and help solve complex
            problems.
          </p>
          <p>
            But after using both extensively across product design, software
            development, business analysis, research, and content creation,
            I&apos;ve found that they excel in different areas.
          </p>
          <p>
            Claude is my preferred tool for thinking. ChatGPT is my preferred
            tool for doing. The best choice depends on the type of work you
            perform most often.
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
              <span className="font-medium">Best for most users:</span> ChatGPT
            </p>
            <p className="rounded-lg border bg-background p-4">
              <span className="font-medium">
                Best for writers and strategists:
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
              understanding, and document processing.
            </p>
            <p className="mt-4 leading-7 text-muted-foreground">
              Claude often feels like collaborating with a thoughtful colleague
              who carefully evaluates tradeoffs before providing
              recommendations. Its biggest strength is producing nuanced
              responses that require minimal editing.
            </p>
          </div>
          <div className="rounded-lg border bg-card p-5">
            <h2 className="text-2xl font-semibold">What is ChatGPT?</h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              ChatGPT is OpenAI&apos;s flagship AI platform. Beyond
              conversation, ChatGPT provides coding assistance, data analysis,
              file processing, image generation, web research, Custom GPTs, and
              workflow automation.
            </p>
            <p className="mt-4 leading-7 text-muted-foreground">
              Rather than specializing in a single area, ChatGPT functions as a
              general-purpose AI workspace. For many professionals, it becomes
              the center of their AI workflow.
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

        {audienceSections.map((section) => (
          <section key={section.title} className="mt-12">
            <h2 className="text-2xl font-semibold">{section.title}</h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              {section.intro}
            </p>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border bg-card p-5">
                <h3 className="font-semibold">Use Claude for</h3>
                <CheckList items={section.claude} />
              </div>
              <div className="rounded-lg border bg-card p-5">
                <h3 className="font-semibold">Use ChatGPT for</h3>
                <CheckList items={section.chatgpt} />
              </div>
            </div>
          </section>
        ))}

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Pricing</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Both platforms offer free and paid plans. For professionals, paid
            plans generally provide higher usage limits, better models, faster
            performance, and advanced capabilities.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Pricing changes regularly, so check each provider&apos;s website
            for current details.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Which One Feels Smarter?</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            This depends entirely on the task. For writing, analysis, research,
            and strategy, Claude often feels smarter. For coding, data
            analysis, problem solving, and workflow execution, ChatGPT often
            feels smarter.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            The difference isn&apos;t intelligence. The difference is emphasis.
            Claude prioritizes reasoning. ChatGPT prioritizes capability.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">My Workflow</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border bg-card p-5">
              <h3 className="font-semibold">Claude</h3>
              <CheckList
                items={["Strategy", "Research", "Writing", "Product thinking"]}
              />
            </div>
            <div className="rounded-lg border bg-card p-5">
              <h3 className="font-semibold">ChatGPT</h3>
              <CheckList
                items={["Coding", "Analysis", "Images", "Productivity", "Daily work"]}
              />
            </div>
          </div>
        </section>

        <section className="mt-12 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border bg-card p-5">
            <h2 className="text-2xl font-semibold">Who Should Choose Claude?</h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              Claude is ideal for writers, researchers, consultants, product
              strategists, analysts, and knowledge workers. If your day
              revolves around reading, writing, and making decisions, Claude is
              an outstanding choice.
            </p>
          </div>
          <div className="rounded-lg border bg-card p-5">
            <h2 className="text-2xl font-semibold">
              Who Should Choose ChatGPT?
            </h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              ChatGPT is ideal for developers, product managers, designers,
              founders, marketers, and operators. If you want one AI tool that
              can do almost everything, ChatGPT is the stronger platform.
            </p>
          </div>
        </section>



        <ArticleCta tool="ChatGPT" href={toolLinks.chatgpt} placement="mid" />

        <section className="mt-12 rounded-lg border bg-card p-6">
          <h2 className="text-2xl font-semibold">Verdict</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Claude produces some of the strongest writing and reasoning
            available today. ChatGPT offers the broadest collection of
            capabilities available in a single AI product.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            If I could only recommend one subscription to most professionals, I
            would choose ChatGPT because of its versatility. If I were choosing
            a tool specifically for writing, analysis, and strategic thinking,
            I would choose Claude.
          </p>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            <p className="rounded-lg border bg-background p-4">
              <span className="font-medium">Claude Rating:</span> 9.5/10. Best
              for writing, analysis, and research.
            </p>
            <p className="rounded-lg border bg-background p-4">
              <span className="font-medium">ChatGPT Rating:</span> 9.5/10. Best
              all-around AI platform.
            </p>
          </div>
        </section>

        <section className="mt-12 rounded-lg border bg-foreground p-6 text-background">
          <h2 className="text-xl font-semibold">Bottom line</h2>
          <p className="mt-3 leading-7">
            Claude helps you think through complex problems. ChatGPT helps you
            solve them. The right choice depends on whether your work demands
            deeper reasoning or broader capability, but for many professionals
            the ideal setup is using both together.
          </p>
        </section>


        <ArticleCta tool="ChatGPT" href={toolLinks.chatgpt} placement="bottom" />
      </article>
    </main>
  )
}
