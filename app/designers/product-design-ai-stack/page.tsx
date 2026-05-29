import Link from "next/link"
import { ArrowLeft, Check } from "lucide-react"

import { ArticleCta } from "@/components/article/article-cta"
import { GiscusComments } from "@/components/article/giscus-comments"
import { Button } from "@/components/ui/button"
import { toolLinks } from "@/lib/tool-links"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata({
  title: "My Product Design AI Stack (2026) | Sinale",
  description:
    "The product design AI stack I use every week for research, strategy, prototyping, implementation, competitive analysis, and meeting notes.",
  path: "/designers/product-design-ai-stack",
})

const tools = [
  {
    rank: "1",
    name: "ChatGPT",
    role: "My Primary Design Partner",
    rating: "9.5/10",
    uses: [
      "Product strategy",
      "UX writing",
      "Competitive analysis",
      "Journey mapping",
      "Design critique",
      "Information architecture",
      "Stakeholder communication",
      "Interview preparation",
    ],
    prompts: [
      "Analyze this onboarding flow and identify activation risks.",
      "What assumptions are hidden in this product strategy?",
      "Generate alternative approaches to this workflow.",
    ],
    likes: [
      "Extremely versatile",
      "Strong reasoning",
      "Excellent for brainstorming",
      "Great design critique partner",
      "Handles documents, screenshots, and files",
    ],
    body:
      "If I could only keep one AI tool, it would be ChatGPT. The value is not generating answers. The value is exposing blind spots.",
  },
  {
    rank: "2",
    name: "Claude",
    role: "My Strategic Thinking Tool",
    rating: "9.5/10",
    uses: [
      "Research synthesis",
      "Product strategy",
      "Service design",
      "Opportunity analysis",
      "Long-form writing",
      "Complex decision making",
    ],
    likes: [
      "Excellent writing",
      "Strong strategic thinking",
      "Great document analysis",
      "Helpful research synthesis",
      "Thoughtful recommendations",
    ],
    body:
      "Claude is where I go when I need depth. When working through difficult product decisions, I often find its responses more nuanced and structured.",
  },
  {
    rank: "3",
    name: "Cursor",
    role: "My Design-to-Code Bridge",
    rating: "9.5/10",
    uses: [
      "Build prototypes",
      "Create React components",
      "Test interactions",
      "Explore UI patterns",
      "Build design systems",
      "Validate concepts",
    ],
    likes: [
      "Rapid prototyping",
      "React and Next.js support",
      "Multi-file editing",
      "Design system development",
      "Fast iteration cycles",
    ],
    body:
      "This is where ideas become software. Instead of handing static screens to engineers, I can create working experiences and validate assumptions earlier.",
  },
  {
    rank: "4",
    name: "Perplexity",
    role: "My Research Assistant",
    rating: "9/10",
    uses: [
      "Competitors",
      "Market trends",
      "Industry patterns",
      "Emerging products",
      "Customer expectations",
    ],
    likes: [
      "Fast research",
      "Source citations",
      "Current information",
      "Competitive analysis",
      "Easy exploration",
    ],
    body:
      "Before solving a problem, I want context. Perplexity helps me quickly explore a category and verify findings through citations.",
  },
  {
    rank: "5",
    name: "Figma AI",
    role: "My Daily Design Accelerator",
    rating: "8.5/10",
    uses: [
      "Content generation",
      "Layout exploration",
      "Design variations",
      "Early wireframes",
    ],
    likes: [
      "Integrated workflow",
      "Fast iterations",
      "Familiar environment",
      "Reduced busywork",
    ],
    body:
      "Figma remains my primary design environment. The biggest benefit of AI is eliminating repetitive work so I can focus on product decisions.",
  },
  {
    rank: "6",
    name: "Lovable",
    role: "My MVP Builder",
    rating: "8.5/10",
    uses: [
      "Working dashboards",
      "Internal tools",
      "SaaS concepts",
      "User portals",
      "Interactive workflows",
    ],
    likes: [
      "Extremely fast",
      "Full-stack generation",
      "Great for validation",
      "Strong UI quality",
    ],
    body:
      "When I want to test an idea quickly, Lovable is often the fastest path from static prototype to working product.",
  },
  {
    rank: "7",
    name: "Granola",
    role: "My Meeting Memory",
    rating: "9/10",
    uses: [
      "User interviews",
      "Stakeholder meetings",
      "Discovery sessions",
      "Workshops",
    ],
    likes: [
      "Clean summaries",
      "Useful action items",
      "Excellent interview support",
      "Minimal setup",
    ],
    body:
      "Designers spend a surprising amount of time in conversations. Granola captures notes, decisions, action items, and follow-ups without creating overwhelming transcripts.",
  },
]

const workflow = [
  ["Discovery", "Perplexity", "Research the market and competitors."],
  ["Strategy", "Claude", "Synthesize findings and explore opportunities."],
  ["Product Thinking", "ChatGPT", "Challenge assumptions and refine workflows."],
  ["Design", "Figma AI", "Explore layouts and concepts."],
  ["Prototype", "Cursor or Lovable", "Build a working version."],
  ["Validation", "Granola", "Capture insights from customer conversations."],
]

const currentStack = ["ChatGPT", "Claude", "Cursor", "Perplexity", "Figma"]

export default function ProductDesignAiStackPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <article className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        <Button asChild variant="ghost" className="mb-10 px-0">
          <Link href="/designers">
            <ArrowLeft />
            Designers
          </Link>
        </Button>

        <p className="mb-4 text-sm font-medium text-muted-foreground">
          Designer Guide
        </p>
        <h1 className="max-w-3xl text-3xl font-medium tracking-tight md:text-4xl">
          My Product Design AI Stack (2026): The Tools I Use Every Week
        </h1>

        <div className="mt-8 max-w-3xl space-y-5 text-lg leading-8 text-muted-foreground">
          <p>
            The conversation around AI often focuses on replacing designers. My
            experience has been the opposite.
          </p>
          <p>
            The biggest value comes from accelerating research, reducing
            repetitive work, improving decision making, and shortening the
            distance between an idea and a working prototype.
          </p>
          <p>
            I don&apos;t use AI to design for me. I use AI to think faster,
            explore more options, and spend more time solving real user
            problems.
          </p>
        </div>

        <ArticleCta tool="ChatGPT" href={toolLinks.chatgpt} placement="top" />

        <section className="mt-12 grid gap-6">
          {tools.map((tool) => (
            <div key={tool.name} className="rounded-lg border bg-card p-6">
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    #{tool.rank}
                  </p>
                  <h2 className="mt-2 text-3xl font-semibold">{tool.name}</h2>
                  <p className="mt-2 font-medium">{tool.role}</p>
                </div>
                <span className="w-fit rounded-full border px-3 py-1 text-sm text-muted-foreground">
                  {tool.rating}
                </span>
              </div>

              <p className="mt-5 leading-7 text-muted-foreground">{tool.body}</p>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="rounded-lg border bg-background p-4">
                  <h3 className="font-semibold">I use it for</h3>
                  <div className="mt-3 grid gap-2 text-sm text-muted-foreground">
                    {tool.uses.map((item) => (
                      <p key={item} className="flex gap-2">
                        <Check className="mt-0.5 size-4 shrink-0" />
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
                <div className="rounded-lg border bg-background p-4">
                  <h3 className="font-semibold">What I like</h3>
                  <div className="mt-3 grid gap-2 text-sm text-muted-foreground">
                    {tool.likes.map((item) => (
                      <p key={item}>{item}</p>
                    ))}
                  </div>
                </div>
              </div>

              {tool.prompts ? (
                <div className="mt-5 rounded-lg border bg-secondary/40 p-4">
                  <h3 className="font-semibold">Typical prompts</h3>
                  <div className="mt-3 grid gap-2 text-sm">
                    {tool.prompts.map((prompt) => (
                      <p key={prompt}>{prompt}</p>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          ))}
        </section>

        <section className="mt-12 rounded-lg border bg-card p-6">
          <h2 className="text-2xl font-semibold">
            How These Tools Fit Together
          </h2>
          <div className="mt-5 divide-y rounded-lg border">
            {workflow.map(([stage, tool, description]) => (
              <div
                key={stage}
                className="grid gap-2 px-4 py-4 text-sm md:grid-cols-[0.7fr_0.8fr_1.5fr]"
              >
                <span className="font-medium">{stage}</span>
                <span>{tool}</span>
                <span className="text-muted-foreground">{description}</span>
              </div>
            ))}
          </div>
          <p className="mt-5 leading-7 text-muted-foreground">
            The output of one tool becomes the input for the next.
          </p>
        </section>

        <section className="mt-12 rounded-lg border bg-card p-6">
          <h2 className="text-2xl font-semibold">My Current Stack</h2>
          <p className="mt-3 leading-7 text-muted-foreground">
            If I could only keep five tools, these are the ones I&apos;d keep.
            Together they cover strategy, research, design, prototyping,
            implementation, and communication.
          </p>
          <div className="mt-5 grid gap-3 md:grid-cols-5">
            {currentStack.map((tool) => (
              <p key={tool} className="rounded-lg border bg-background p-4">
                {tool}
              </p>
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-lg border bg-card p-6">
          <h2 className="text-2xl font-semibold">Final Thoughts</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            The most valuable designers are not the ones using AI to generate
            screens. They are the ones using AI to understand problems faster,
            test ideas earlier, and make better decisions.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            The future of design isn&apos;t AI replacing designers. It is
            designers who know how to combine human judgment with AI leverage
            outperforming those who don&apos;t.
          </p>
        </section>



        <ArticleCta tool="ChatGPT" href={toolLinks.chatgpt} placement="mid" />

        <section className="mt-12 rounded-lg border bg-foreground p-6 text-background">
          <h2 className="text-xl font-semibold">Bottom line</h2>
          <p className="mt-3 leading-7">
            The tools will continue to evolve. The ability to frame problems,
            evaluate tradeoffs, and understand people remains the real
            competitive advantage.
          </p>
        </section>


        <ArticleCta tool="ChatGPT" href={toolLinks.chatgpt} placement="bottom" />

        <GiscusComments />
      </article>
    </main>
  )
}
