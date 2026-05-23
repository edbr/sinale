import {
  Blocks,
  ChartNoAxesCombined,
  Code2,
  Lightbulb,
  PenTool,
  Rocket,
  Search,
  type LucideIcon,
} from "lucide-react"

export type CardItem = {
  title: string
  description: string
  href: string
}

export type RoleItem = CardItem & {
  icon: LucideIcon
}

export const pillars: RoleItem[] = [
  {
    title: "AI for Designers",
    description:
      "Tools for UX research, interface design, prototyping, design systems, and creative workflows.",
    href: "/designers",
    icon: PenTool,
  },
  {
    title: "AI for Developers",
    description:
      "Coding assistants, agents, debugging tools, documentation helpers, and app-building platforms.",
    href: "/developers",
    icon: Code2,
  },
  {
    title: "AI for Product Managers",
    description:
      "Tools for roadmaps, research synthesis, meeting notes, analytics, prioritization, and strategy.",
    href: "/product-managers",
    icon: Blocks,
  },
  {
    title: "AI for Data & Analytics",
    description:
      "SQL copilots, BI assistants, notebook tools, dashboards, and data exploration workflows.",
    href: "/analytics",
    icon: ChartNoAxesCombined,
  },
  {
    title: "AI for Founders",
    description:
      "Tools for launching, marketing, automating, selling, and operating lean businesses.",
    href: "/founders",
    icon: Rocket,
  },
  {
    title: "Reviews",
    description:
      "Hands-on evaluations, pricing, strengths, weaknesses, and recommendations.",
    href: "/reviews",
    icon: Lightbulb,
  },
  {
    title: "Comparisons",
    description: "Side-by-side breakdowns of competing tools.",
    href: "/comparisons",
    icon: ChartNoAxesCombined,
  },
]

export const comparisons: CardItem[] = [
  {
    title:
      "Cursor vs Claude Code (2026): Which AI Coding Assistant Should You Use?",
    description:
      "Which coding assistant fits better for product teams, solo builders, and codebase-heavy work.",
    href: "/comparisons/cursor-vs-claude-code",
  },
  {
    title: "Claude vs ChatGPT (2026): Which AI Assistant Is Better?",
    description:
      "A practical comparison for writing, analysis, ideation, coding help, and team workflows.",
    href: "/comparisons/claude-vs-chatgpt",
  },
  {
    title: "Lovable vs Bolt (2026): Which AI App Builder Is Better?",
    description:
      "Which AI app builder makes more sense for prototypes, SaaS MVPs, and product demos.",
    href: "/comparisons/lovable-vs-bolt",
  },
  {
    title:
      "Perplexity vs ChatGPT (2026): Which AI Assistant Should You Actually Use?",
    description:
      "When to use an answer engine versus a general AI assistant for research and synthesis.",
    href: "/comparisons/perplexity-vs-chatgpt",
  },
  {
    title:
      "Windsurf vs Cursor (2026): Which AI Coding Assistant Should Developers Choose?",
    description:
      "A practical coding workflow comparison for AI editors, agents, and refactoring support.",
    href: "/comparisons/windsurf-vs-cursor",
  },
  {
    title:
      "Apollo vs ZoomInfo (2026): Which Sales Intelligence Platform Should You Use?",
    description:
      "A practical comparison for startups, sales teams, enterprise GTM, enrichment, and outbound workflows.",
    href: "/comparisons/apollo-vs-zoominfo",
  },
  {
    title: "Webflow vs Framer (2026): Which Website Builder Should Designers Use?",
    description:
      "A practical comparison for designers, startups, landing pages, CMS sites, SEO, and client work.",
    href: "/comparisons/webflow-vs-framer",
  },
  {
    title: "Notion AI vs ChatGPT",
    description:
      "How embedded workspace AI compares with a general-purpose assistant for team knowledge work.",
    href: "/comparisons/notion-ai-vs-chatgpt",
  },
]

export const reviews: CardItem[] = [
  {
    title: "Cursor Review (2026): The Best AI Coding Assistant I've Used",
    description:
      "A hands-on look at Cursor for real-world coding, refactoring, debugging, and team adoption.",
    href: "/reviews/cursor-review",
  },
  {
    title:
      "Claude Review (2026): The AI Assistant I Use Most for Thinking, Writing, and Problem Solving",
    description:
      "Strengths, limits, pricing, and best-fit workflows for Claude across product teams.",
    href: "/reviews/claude-review",
  },
  {
    title: "ChatGPT Review (2026): The Most Versatile AI Assistant Available Today",
    description:
      "A practical review of ChatGPT for writing, coding, research, analysis, images, and custom workflows.",
    href: "/reviews/chatgpt-review",
  },
  {
    title:
      "Perplexity Review (2026): The Best AI Search Engine for Research and Discovery",
    description:
      "How Perplexity performs for research, source discovery, market scans, and daily knowledge work.",
    href: "/reviews/perplexity-review",
  },
  {
    title:
      "Lovable Review (2026): The Fastest Way to Turn an Idea Into a Working App",
    description:
      "A hands-on review of Lovable for MVPs, full-stack prototypes, product validation, and AI app building.",
    href: "/reviews/lovable-review",
  },
]

export const workflows: (CardItem & { tags: string[] })[] = [
  {
    title: "Building a SaaS MVP with AI",
    description:
      "A practical workflow for taking a SaaS idea from problem definition to research, prototype, launch, and feedback.",
    href: "/workflows/building-saas-mvp-with-ai",
    tags: ["Founders", "MVP"],
  },
  {
    title: "AI Product Design",
    description:
      "Move from research notes to flows, wireframes, content variants, and design system updates.",
    href: "/workflows/ai-product-design",
    tags: ["Design", "Product"],
  },
  {
    title: "AI Coding Stack",
    description:
      "Plan features, generate implementation options, debug faster, and ship a working product.",
    href: "/workflows/ai-coding-stack",
    tags: ["Development", "Agents"],
  },
  {
    title: "AI Research Stack",
    description:
      "Collect sources, synthesize evidence, compare alternatives, and turn research into decisions.",
    href: "/workflows/ai-research-stack",
    tags: ["Research", "Strategy"],
  },
]

export const developerGuides: CardItem[] = [
  {
    title: "Best AI Coding Assistants (2026): Tested and Ranked",
    description:
      "A practical ranking of Cursor, Claude Code, Windsurf, GitHub Copilot, Replit Agent, and Lovable.",
    href: "/developers/best-ai-coding-assistants",
  },
]

export const productManagerGuides: CardItem[] = [
  {
    title: "Best AI Tools for Product Managers (2026): The Tools I Actually Use",
    description:
      "A practical PM stack for strategy, research, meetings, analytics, documentation, prototyping, and execution.",
    href: "/product-managers/best-ai-tools",
  },
]

export const designerGuides: CardItem[] = [
  {
    title:
      "Best AI Tools for Designers (2026): The Tools That Actually Improve Design Work",
    description:
      "A practical design stack for research, ideation, UX writing, interface design, prototyping, and implementation.",
    href: "/designers/best-ai-tools",
  },
  {
    title: "My Product Design AI Stack (2026): The Tools I Use Every Week",
    description:
      "A weekly product design workflow using ChatGPT, Claude, Cursor, Perplexity, Figma AI, Lovable, and Granola.",
    href: "/designers/product-design-ai-stack",
  },
]

export const founderGuides: CardItem[] = [
  {
    title:
      "Best AI Tools for Founders (2026): The Stack I Would Use to Build a Startup Today",
    description:
      "A founder stack for research, strategy, MVP development, automation, analytics, support, meetings, and marketing.",
    href: "/founders/best-ai-tools",
  },
]

export const bestOfGuides: CardItem[] = [
  {
    title:
      "Best AI Tools for Founders (2026): The Stack I Would Use to Build a Startup Today",
    description:
      "A founder stack for research, strategy, MVP development, automation, analytics, support, meetings, and marketing.",
    href: "/founders/best-ai-tools",
  },
  {
    title: "Best AI Coding Assistants (2026): Tested and Ranked",
    description:
      "A practical ranking of Cursor, Claude Code, Windsurf, GitHub Copilot, Replit Agent, and Lovable.",
    href: "/developers/best-ai-coding-assistants",
  },
  {
    title:
      "Best AI Tools for Designers (2026): The Tools That Actually Improve Design Work",
    description:
      "A practical design stack for research, ideation, UX writing, interface design, prototyping, and implementation.",
    href: "/designers/best-ai-tools",
  },
  {
    title: "Best AI Tools for Product Managers (2026): The Tools I Actually Use",
    description:
      "A practical PM stack for strategy, research, meetings, analytics, documentation, prototyping, and execution.",
    href: "/product-managers/best-ai-tools",
  },
  {
    title: "Best AI Meeting Assistants (2026): Tested and Ranked",
    description:
      "A practical guide to Granola, Fathom, Fireflies, Otter, tl;dv, Read.ai, Avoma, and Fellow.",
    href: "/best/ai-meeting-assistants",
  },
]

export const rolePages: Record<string, { title: string; description: string }> = {
  analytics: {
    title: "AI for Data & Analytics",
    description:
      "SQL copilots, BI assistants, notebook tools, dashboards, and data exploration workflows.",
  },
  designers: {
    title: "AI for Designers",
    description:
      "UX research, interface design, prototyping, design systems, and creative workflows.",
  },
  developers: {
    title: "AI for Developers",
    description:
      "Coding assistants, agents, debugging tools, docs helpers, and app-building platforms.",
  },
  founders: {
    title: "AI for Founders",
    description:
      "Tools for launching, marketing, automating, selling, and operating lean businesses.",
  },
  "product-managers": {
    title: "AI for Product Managers",
    description:
      "Roadmaps, research synthesis, meeting notes, analytics, prioritization, and strategy.",
  },
}

export const trendingTools = [
  {
    name: "Claude",
    category: "Research & writing",
    description:
      "Strong long-context reasoning for product thinking, analysis, and content.",
    href: "/tools/claude",
  },
  {
    name: "Cursor",
    category: "Coding",
    description:
      "AI-first code editor for building, refactoring, and understanding codebases.",
    href: "/tools/cursor",
  },
  {
    name: "Perplexity",
    category: "Search",
    description:
      "Fast answer engine for research, source discovery, and market scanning.",
    href: "/tools/perplexity",
  },
  {
    name: "Granola",
    category: "Meetings",
    description:
      "Lightweight AI notes for calls, customer interviews, and team meetings.",
    href: "/tools/granola",
  },
  {
    name: "Lovable",
    category: "App building",
    description:
      "Prompt-driven app generation for prototypes, demos, and early products.",
    href: "/tools/lovable",
  },
  {
    name: "Replit",
    category: "Development",
    description:
      "Browser-based development and deployment with AI assistance built in.",
    href: "/tools/replit",
  },
]

export const aiToolCategories = [
  {
    title: "AI Coding",
    description:
      "Coding assistants, AI editors, app builders, agents, and developer tools.",
    tools: [
      "Cursor",
      "Claude Code",
      "Windsurf",
      "GitHub Copilot",
      "Replit Agent",
      "Bolt",
      "Lovable",
      "Devin",
      "Codeium",
      "Aider",
    ],
  },
  {
    title: "AI Research & Search",
    description:
      "Answer engines, research assistants, source discovery, and knowledge tools.",
    tools: [
      "ChatGPT",
      "Claude",
      "Perplexity",
      "Gemini",
      "You.com",
      "Consensus",
      "Elicit",
      "NotebookLM",
      "Exa",
      "Genspark",
    ],
  },
  {
    title: "AI Writing & Content",
    description:
      "Writing assistants for articles, marketing copy, editing, and creative work.",
    tools: [
      "Claude",
      "ChatGPT",
      "Jasper",
      "Copy.ai",
      "Writesonic",
      "Rytr",
      "Sudowrite",
      "Anyword",
      "HyperWrite",
      "Wordtune",
    ],
  },
  {
    title: "AI Design",
    description:
      "Interface design, product mockups, visual exploration, and site generation.",
    tools: [
      "Figma AI",
      "Galileo",
      "Uizard",
      "Relume",
      "v0",
      "Midjourney",
      "Ideogram",
      "Adobe Firefly",
      "Framer AI",
      "Visual Electric",
    ],
  },
  {
    title: "AI Product Management",
    description:
      "Research, roadmaps, meetings, analytics, documentation, and PM workflows.",
    tools: [
      "ChatGPT",
      "Claude",
      "Perplexity",
      "Granola",
      "Dovetail",
      "Notion AI",
      "Productboard AI",
      "Mixpanel AI",
      "Amplitude AI",
      "Linear AI",
    ],
  },
  {
    title: "AI Meetings",
    description:
      "Meeting notes, transcripts, summaries, follow-ups, and call intelligence.",
    tools: [
      "Granola",
      "Fireflies",
      "Fathom",
      "Otter",
      "tl;dv",
      "Read.ai",
      "Avoma",
      "Supernormal",
      "Fellow",
      "Krisp",
    ],
  },
  {
    title: "AI Video",
    description:
      "Video generation, editing, avatars, clips, captions, and creative workflows.",
    tools: [
      "Runway",
      "Descript",
      "Synthesia",
      "Veo",
      "HeyGen",
      "Opus Clip",
      "Captions",
      "Pika",
      "Luma",
      "Wisecut",
    ],
  },
  {
    title: "AI Audio & Voice",
    description:
      "Voice generation, music, audio cleanup, podcasting, and narration tools.",
    tools: [
      "ElevenLabs",
      "Play.ht",
      "Suno",
      "Udio",
      "Murf",
      "Resemble AI",
      "Wondercraft",
      "Adobe Podcast",
      "Cleanvoice",
      "Podcastle",
    ],
  },
  {
    title: "AI Data & Analytics",
    description:
      "Data exploration, BI copilots, dashboards, analytics, and decision support.",
    tools: [
      "ChatGPT",
      "Claude",
      "Julius",
      "Hex",
      "Mode",
      "ThoughtSpot",
      "Tableau Pulse",
      "Power BI Copilot",
      "Sigma AI",
      "Akkio",
    ],
  },
  {
    title: "AI Automation & Agents",
    description:
      "Automation builders, agent frameworks, workflows, and AI operations.",
    tools: [
      "Zapier AI",
      "Make",
      "n8n",
      "Lindy",
      "Gumloop",
      "Relay",
      "Relevance AI",
      "CrewAI",
      "AutoGen",
      "LangGraph",
    ],
  },
  {
    title: "AI Sales",
    description:
      "Sales intelligence, outbound workflows, CRM automation, and coaching.",
    tools: [
      "Gong",
      "Clay",
      "Apollo",
      "Lavender",
      "Regie",
      "Artisan",
      "Common Room",
      "Outreach AI",
      "HubSpot AI",
      "Attention",
    ],
  },
  {
    title: "AI Marketing",
    description:
      "SEO, campaign generation, content optimization, ads, and creative testing.",
    tools: [
      "Jasper",
      "Copy.ai",
      "Surfer SEO",
      "Clearscope",
      "MarketMuse",
      "Frase",
      "Semrush AI",
      "Canva AI",
      "AdCreative",
      "Predis",
    ],
  },
  {
    title: "AI Customer Support",
    description:
      "Support agents, helpdesk automation, customer service AI, and deflection.",
    tools: [
      "Intercom Fin",
      "Zendesk AI",
      "Sierra",
      "Decagon",
      "Forethought",
      "Ada",
      "Kustomer AI",
      "Helpscout AI",
      "Freshdesk AI",
      "Tidio AI",
    ],
  },
  {
    title: "AI Presentation Tools",
    description:
      "Deck generation, visual storytelling, slides, and executive presentations.",
    tools: [
      "Gamma",
      "Beautiful.ai",
      "Tome",
      "Pitch",
      "Canva AI",
      "SlidesAI",
      "Decktopus",
      "Presentations.ai",
      "Plus AI",
      "PopAI",
    ],
  },
]

export const searchSuggestions = [
  "Cursor",
  "Claude",
  "Perplexity",
  "Agents",
  "Coding",
  "Research",
]

export const searchIcon = Search
