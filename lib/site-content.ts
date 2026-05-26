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
    title: "ChatGPT vs Gemini (2026): Which AI Assistant Should You Use?",
    description:
      "A practical comparison for writing, research, coding help, multimodal work, and everyday productivity.",
    href: "/comparisons/chatgpt-vs-gemini",
  },
  {
    title: "Claude vs Gemini (2026): Which AI Assistant Is Better for Work?",
    description:
      "How Claude and Gemini compare for analysis, writing, research, long-context work, and team workflows.",
    href: "/comparisons/claude-vs-gemini",
  },
  {
    title: "Cursor vs GitHub Copilot (2026): Which Coding Tool Is Better?",
    description:
      "A developer-focused comparison of AI editors, autocomplete, codebase context, and agent workflows.",
    href: "/comparisons/cursor-vs-github-copilot",
  },
  {
    title: "Cursor vs Windsurf (2026): Which AI Editor Should You Choose?",
    description:
      "A side-by-side look at two AI-first development environments for coding, refactoring, and agents.",
    href: "/comparisons/cursor-vs-windsurf",
  },
  {
    title: "Claude Code vs GitHub Copilot (2026): Which Helps Developers More?",
    description:
      "Compare agentic coding, IDE assistance, reasoning, repository understanding, and enterprise fit.",
    href: "/comparisons/claude-code-vs-github-copilot",
  },
  {
    title: "Replit vs Lovable (2026): Which AI App Builder Fits Your Project?",
    description:
      "Which platform is better for browser-based coding, prototypes, SaaS MVPs, and beginner-friendly builds.",
    href: "/comparisons/replit-vs-lovable",
  },
  {
    title: "Bolt vs Replit (2026): Which AI Development Platform Should You Use?",
    description:
      "A practical comparison for fast prototypes, hosted development, deployment, and code control.",
    href: "/comparisons/bolt-vs-replit",
  },
  {
    title: "Notion AI vs Coda AI (2026): Which Workspace AI Is Better?",
    description:
      "How Notion AI and Coda AI compare for docs, team knowledge, workflows, tables, and automation.",
    href: "/comparisons/notion-ai-vs-coda-ai",
  },
  {
    title: "Notion AI vs ChatGPT",
    description:
      "How embedded workspace AI compares with a general-purpose assistant for team knowledge work.",
    href: "/comparisons/notion-ai-vs-chatgpt",
  },
  {
    title: "Perplexity vs Google Search (2026): Which Is Better for Research?",
    description:
      "When to use an AI answer engine versus traditional search for source discovery and decision-making.",
    href: "/comparisons/perplexity-vs-google-search",
  },
  {
    title: "Perplexity vs Gemini (2026): Which Research Tool Should You Use?",
    description:
      "Compare answer quality, source handling, multimodal research, everyday search, and workflow fit.",
    href: "/comparisons/perplexity-vs-gemini",
  },
  {
    title: "Granola vs Fathom (2026): Which AI Meeting Assistant Is Better?",
    description:
      "A practical comparison for meeting notes, transcripts, summaries, follow-ups, and team workflows.",
    href: "/comparisons/granola-vs-fathom",
  },
  {
    title: "Granola vs Otter (2026): Which Meeting Notes Tool Should You Use?",
    description:
      "Compare lightweight AI notes, transcription, collaboration, privacy, and meeting follow-through.",
    href: "/comparisons/granola-vs-otter",
  },
  {
    title: "Fathom vs Fireflies (2026): Which AI Note Taker Is Better?",
    description:
      "A meeting workflow comparison for recording, summaries, CRM handoff, team search, and pricing.",
    href: "/comparisons/fathom-vs-fireflies",
  },
  {
    title: "Otter vs Fireflies (2026): Which AI Transcription Tool Should You Pick?",
    description:
      "How Otter and Fireflies compare for transcripts, summaries, integrations, sales calls, and team use.",
    href: "/comparisons/otter-vs-fireflies",
  },
  {
    title: "Read.ai vs Fathom (2026): Which Meeting Assistant Fits Your Team?",
    description:
      "Compare meeting intelligence, summaries, coaching signals, privacy considerations, and workflow fit.",
    href: "/comparisons/read-ai-vs-fathom",
  },
  {
    title: "Avoma vs Gong (2026): Which Conversation Intelligence Tool Is Better?",
    description:
      "A sales-team comparison for call intelligence, coaching, forecasting, CRM sync, and cost.",
    href: "/comparisons/avoma-vs-gong",
  },
  {
    title: "Apollo vs Clay (2026): Which GTM Tool Should Startups Use?",
    description:
      "Compare prospecting, enrichment, outbound workflows, data quality, automation, and founder fit.",
    href: "/comparisons/apollo-vs-clay",
  },
  {
    title: "Clay vs ZoomInfo (2026): Which Sales Data Platform Is Better?",
    description:
      "A practical comparison for enrichment, prospecting, workflows, enterprise sales, and startup GTM.",
    href: "/comparisons/clay-vs-zoominfo",
  },
  {
    title: "HubSpot vs Salesforce (2026): Which CRM Should You Choose?",
    description:
      "Compare CRM setup, sales workflows, marketing automation, reporting, cost, and team maturity.",
    href: "/comparisons/hubspot-vs-salesforce",
  },
  {
    title: "Airtable vs Notion (2026): Which Workspace Tool Is Better?",
    description:
      "A practical comparison for databases, documentation, lightweight operations, and team workflows.",
    href: "/comparisons/airtable-vs-notion",
  },
  {
    title: "Notion vs Linear (2026): Which Tool Should Product Teams Use?",
    description:
      "How Notion and Linear compare for planning, docs, issue tracking, product specs, and execution.",
    href: "/comparisons/notion-vs-linear",
  },
  {
    title: "Linear vs Jira (2026): Which Issue Tracker Is Better?",
    description:
      "Compare speed, structure, enterprise controls, developer experience, and product team workflows.",
    href: "/comparisons/linear-vs-jira",
  },
  {
    title: "Webflow vs Wix Studio (2026): Which Website Builder Should Teams Use?",
    description:
      "Compare visual development, CMS, design control, agency workflows, SEO, and launch speed.",
    href: "/comparisons/webflow-vs-wix-studio",
  },
  {
    title: "Framer vs Squarespace (2026): Which Site Builder Is Better?",
    description:
      "A practical comparison for portfolios, startup sites, landing pages, CMS needs, and design control.",
    href: "/comparisons/framer-vs-squarespace",
  },
  {
    title: "Canva vs Adobe Express (2026): Which Design Tool Is Better?",
    description:
      "Compare quick content creation, templates, brand kits, collaboration, AI features, and team use.",
    href: "/comparisons/canva-vs-adobe-express",
  },
  {
    title: "Figma AI vs Galileo AI (2026): Which Design AI Tool Should You Try?",
    description:
      "A product design comparison for UI generation, ideation, iteration, design systems, and handoff.",
    href: "/comparisons/figma-ai-vs-galileo-ai",
  },
  {
    title: "Midjourney vs DALL-E (2026): Which AI Image Generator Is Better?",
    description:
      "Compare image quality, prompt control, style range, editing workflows, and commercial use cases.",
    href: "/comparisons/midjourney-vs-dall-e",
  },
  {
    title: "Runway vs Pika (2026): Which AI Video Tool Should Creators Use?",
    description:
      "A practical comparison for AI video generation, editing, motion quality, creative control, and cost.",
    href: "/comparisons/runway-vs-pika",
  },
  {
    title: "Descript vs Riverside (2026): Which Podcast and Video Tool Is Better?",
    description:
      "Compare recording, editing, transcripts, clips, collaboration, and creator production workflows.",
    href: "/comparisons/descript-vs-riverside",
  },
  {
    title: "Zapier vs Make (2026): Which Automation Platform Should You Use?",
    description:
      "Compare workflow automation, visual builders, app coverage, error handling, and pricing.",
    href: "/comparisons/zapier-vs-make",
  },
  {
    title: "Zapier vs n8n (2026): Which Automation Tool Is Better?",
    description:
      "A practical comparison for no-code teams, technical operators, self-hosting, integrations, and control.",
    href: "/comparisons/zapier-vs-n8n",
  },
  {
    title: "Retool vs Bubble (2026): Which App Builder Should You Choose?",
    description:
      "Compare internal tools, customer-facing apps, databases, design flexibility, and developer control.",
    href: "/comparisons/retool-vs-bubble",
  },
  {
    title: "Supabase vs Firebase (2026): Which Backend Platform Is Better?",
    description:
      "A developer-focused comparison for databases, auth, realtime features, hosting, and startup apps.",
    href: "/comparisons/supabase-vs-firebase",
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
  {
    title: "Gemini Review (2026): Google's AI Assistant for Everyday Work",
    description:
      "A practical review of Gemini for writing, research, multimodal work, productivity, and Google Workspace users.",
    href: "/reviews/gemini-review",
  },
  {
    title: "Claude Code Review (2026): The AI Coding Agent for Deep Technical Work",
    description:
      "A hands-on review of Claude Code for repository understanding, refactoring, debugging, and engineering planning.",
    href: "/reviews/claude-code-review",
  },
  {
    title: "GitHub Copilot Review (2026): Still the Default AI Coding Assistant?",
    description:
      "A practical look at Copilot for autocomplete, chat, enterprise adoption, IDE workflows, and developer productivity.",
    href: "/reviews/github-copilot-review",
  },
  {
    title: "Windsurf Review (2026): An AI-Native Editor for Agent Workflows",
    description:
      "How Windsurf performs for coding agents, project-wide edits, refactoring, and daily development work.",
    href: "/reviews/windsurf-review",
  },
  {
    title: "Replit Review (2026): Browser-Based Coding With AI Built In",
    description:
      "A hands-on review of Replit for students, founders, prototypes, deployment, and AI-assisted development.",
    href: "/reviews/replit-review",
  },
  {
    title: "Bolt Review (2026): Fast AI App Prototyping in the Browser",
    description:
      "A practical review of Bolt for building prototypes, frontends, demos, and early product experiments.",
    href: "/reviews/bolt-review",
  },
  {
    title: "Figma AI Review (2026): Useful Design Assistant or Workflow Hype?",
    description:
      "A product design review of Figma AI for ideation, layout help, design systems, copy, and handoff.",
    href: "/reviews/figma-ai-review",
  },
  {
    title: "Canva Review (2026): The Fastest Design Tool for Non-Designers",
    description:
      "A practical review of Canva for brand kits, social content, presentations, templates, and AI design workflows.",
    href: "/reviews/canva-review",
  },
  {
    title: "Midjourney Review (2026): The AI Image Generator for Creative Direction",
    description:
      "A hands-on review of Midjourney for image quality, style control, brand concepts, and creative workflows.",
    href: "/reviews/midjourney-review",
  },
  {
    title: "DALL-E Review (2026): AI Image Generation Inside ChatGPT",
    description:
      "A practical review of DALL-E for image creation, editing, prompt control, and everyday visual work.",
    href: "/reviews/dall-e-review",
  },
  {
    title: "Runway Review (2026): AI Video Generation for Creators and Teams",
    description:
      "How Runway performs for AI video generation, editing, motion design, creative experiments, and production workflows.",
    href: "/reviews/runway-review",
  },
  {
    title: "Descript Review (2026): AI Editing for Podcasts and Video",
    description:
      "A practical review of Descript for transcript editing, clips, screen recording, podcasts, and creator workflows.",
    href: "/reviews/descript-review",
  },
  {
    title: "Fathom Review (2026): AI Meeting Notes for Sales and Team Calls",
    description:
      "A hands-on review of Fathom for call recording, summaries, follow-ups, CRM workflows, and meeting productivity.",
    href: "/reviews/fathom-review",
  },
  {
    title: "Fireflies Review (2026): AI Meeting Transcripts and Team Search",
    description:
      "How Fireflies works for meeting capture, searchable transcripts, summaries, integrations, and team collaboration.",
    href: "/reviews/fireflies-review",
  },
  {
    title: "Otter Review (2026): AI Transcription for Meetings and Interviews",
    description:
      "A practical review of Otter for live transcription, summaries, collaboration, interviews, and team notes.",
    href: "/reviews/otter-review",
  },
  {
    title: "Read.ai Review (2026): Meeting Intelligence for Busy Teams",
    description:
      "A hands-on review of Read.ai for meeting summaries, engagement signals, coaching, and productivity insights.",
    href: "/reviews/read-ai-review",
  },
  {
    title: "Apollo Review (2026): Sales Intelligence for Startup GTM",
    description:
      "A practical review of Apollo for prospecting, enrichment, sequences, sales workflows, and startup outbound.",
    href: "/reviews/apollo-review",
  },
  {
    title: "Clay Review (2026): Flexible GTM Automation for Modern Sales Teams",
    description:
      "How Clay performs for enrichment, prospecting workflows, AI research, personalization, and sales operations.",
    href: "/reviews/clay-review",
  },
  {
    title: "HubSpot Review (2026): CRM, Marketing, and Sales in One Platform",
    description:
      "A practical review of HubSpot for startups, sales teams, marketing automation, CRM workflows, and reporting.",
    href: "/reviews/hubspot-review",
  },
  {
    title: "Linear Review (2026): The Issue Tracker Product Teams Love",
    description:
      "A hands-on review of Linear for engineering planning, product workflows, speed, cycles, and team execution.",
    href: "/reviews/linear-review",
  },
  {
    title: "Notion Review (2026): The Workspace Tool for Docs, Projects, and AI",
    description:
      "A practical review of Notion for team knowledge, documentation, databases, lightweight projects, and AI features.",
    href: "/reviews/notion-review",
  },
  {
    title: "Airtable Review (2026): Databases for Operations Teams",
    description:
      "How Airtable works for lightweight databases, workflows, automations, content ops, and internal tools.",
    href: "/reviews/airtable-review",
  },
  {
    title: "Zapier Review (2026): Automation for Teams That Need Speed",
    description:
      "A practical review of Zapier for app integrations, AI automation, workflows, reliability, and operator productivity.",
    href: "/reviews/zapier-review",
  },
  {
    title: "Make Review (2026): Visual Automation for Complex Workflows",
    description:
      "A hands-on review of Make for visual scenarios, data transformations, automation control, and operations teams.",
    href: "/reviews/make-review",
  },
  {
    title: "n8n Review (2026): Flexible Automation for Technical Teams",
    description:
      "How n8n performs for self-hosted automation, integrations, custom workflows, and technical operators.",
    href: "/reviews/n8n-review",
  },
  {
    title: "Supabase Review (2026): The Backend Platform for Product Builders",
    description:
      "A developer-focused review of Supabase for Postgres, auth, realtime apps, storage, and SaaS MVPs.",
    href: "/reviews/supabase-review",
  },
  {
    title: "Firebase Review (2026): Google's Backend Platform for Fast App Builds",
    description:
      "A practical review of Firebase for auth, realtime data, hosting, serverless workflows, and mobile apps.",
    href: "/reviews/firebase-review",
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
  {
    title: "Customer Interview Synthesis with AI",
    description:
      "Turn interview transcripts into themes, quotes, opportunity areas, and follow-up questions.",
    href: "/workflows/customer-interview-synthesis-ai",
    tags: ["Research", "Product"],
  },
  {
    title: "AI User Persona Builder",
    description:
      "Create grounded personas from research notes, support tickets, sales calls, and product analytics.",
    href: "/workflows/ai-user-persona-builder",
    tags: ["Research", "Design"],
  },
  {
    title: "AI Feature Prioritization Workflow",
    description:
      "Compare feature ideas by evidence, effort, risk, customer pain, and strategic fit.",
    href: "/workflows/ai-feature-prioritization",
    tags: ["Product", "Strategy"],
  },
  {
    title: "AI PRD Drafting Workflow",
    description:
      "Move from customer problem to product requirements, acceptance criteria, edge cases, and launch notes.",
    href: "/workflows/ai-prd-drafting",
    tags: ["Product", "PM"],
  },
  {
    title: "AI Product Roadmap Review",
    description:
      "Pressure-test roadmap themes, assumptions, dependencies, sequencing, and risk before planning cycles.",
    href: "/workflows/ai-product-roadmap-review",
    tags: ["Product", "Strategy"],
  },
  {
    title: "AI Sprint Planning Workflow",
    description:
      "Break product priorities into scoped engineering tasks, risks, milestones, and review checkpoints.",
    href: "/workflows/ai-sprint-planning",
    tags: ["Engineering", "Planning"],
  },
  {
    title: "AI Release Notes Workflow",
    description:
      "Transform shipped changes into customer-facing release notes, internal summaries, and changelog copy.",
    href: "/workflows/ai-release-notes",
    tags: ["Product", "Content"],
  },
  {
    title: "AI Bug Triage Workflow",
    description:
      "Convert messy bug reports into reproducible steps, severity, missing details, and engineering tickets.",
    href: "/workflows/ai-bug-triage",
    tags: ["Support", "Engineering"],
  },
  {
    title: "AI Code Review Workflow",
    description:
      "Use AI to scan diffs for risks, missing tests, edge cases, regressions, and maintainability issues.",
    href: "/workflows/ai-code-review",
    tags: ["Development", "Quality"],
  },
  {
    title: "AI Test Plan Generator",
    description:
      "Create focused test plans from feature specs, user flows, acceptance criteria, and known risks.",
    href: "/workflows/ai-test-plan-generator",
    tags: ["QA", "Product"],
  },
  {
    title: "AI Documentation Workflow",
    description:
      "Turn product behavior and engineering notes into user docs, setup guides, FAQs, and troubleshooting pages.",
    href: "/workflows/ai-documentation",
    tags: ["Docs", "Support"],
  },
  {
    title: "AI API Documentation Workflow",
    description:
      "Draft endpoint references, examples, auth notes, error states, and integration guidance from code.",
    href: "/workflows/ai-api-documentation",
    tags: ["Docs", "Development"],
  },
  {
    title: "AI Landing Page Copy Workflow",
    description:
      "Move from positioning notes to headlines, proof points, objections, FAQs, and conversion-focused page copy.",
    href: "/workflows/ai-landing-page-copy",
    tags: ["Marketing", "Copywriting"],
  },
  {
    title: "AI SEO Brief Workflow",
    description:
      "Build useful SEO briefs from search intent, competitor gaps, internal expertise, and reader outcomes.",
    href: "/workflows/ai-seo-brief",
    tags: ["SEO", "Content"],
  },
  {
    title: "AI Content Refresh Workflow",
    description:
      "Update old articles with current information, stronger structure, better examples, and clearer CTAs.",
    href: "/workflows/ai-content-refresh",
    tags: ["Content", "SEO"],
  },
  {
    title: "AI Newsletter Workflow",
    description:
      "Turn research notes, product updates, and useful links into a concise newsletter draft.",
    href: "/workflows/ai-newsletter",
    tags: ["Content", "Marketing"],
  },
  {
    title: "AI Social Content Repurposing",
    description:
      "Convert long-form articles, calls, and product notes into LinkedIn posts, threads, and short updates.",
    href: "/workflows/ai-social-content-repurposing",
    tags: ["Content", "Growth"],
  },
  {
    title: "AI Sales Prospect Research",
    description:
      "Research target accounts, buying triggers, pain points, and tailored outreach angles before sending emails.",
    href: "/workflows/ai-sales-prospect-research",
    tags: ["Sales", "Research"],
  },
  {
    title: "AI Cold Email Workflow",
    description:
      "Draft relevant outbound emails from account research, buyer pains, proof points, and clear next steps.",
    href: "/workflows/ai-cold-email",
    tags: ["Sales", "Outbound"],
  },
  {
    title: "AI Sales Call Prep Workflow",
    description:
      "Prepare discovery questions, account context, likely objections, and demo angles before sales calls.",
    href: "/workflows/ai-sales-call-prep",
    tags: ["Sales", "Meetings"],
  },
  {
    title: "AI CRM Cleanup Workflow",
    description:
      "Find messy records, missing fields, stale stages, duplicate accounts, and follow-up gaps in CRM data.",
    href: "/workflows/ai-crm-cleanup",
    tags: ["Sales", "Operations"],
  },
  {
    title: "AI Customer Support Macro Workflow",
    description:
      "Create support macros that are accurate, clear, empathetic, and easy for agents to adapt.",
    href: "/workflows/ai-support-macros",
    tags: ["Support", "Operations"],
  },
  {
    title: "AI Help Center Gap Analysis",
    description:
      "Compare support tickets against help content to find missing docs, outdated answers, and confusing flows.",
    href: "/workflows/ai-help-center-gap-analysis",
    tags: ["Support", "Docs"],
  },
  {
    title: "AI Customer Feedback Triage",
    description:
      "Group feedback by pain, request type, segment, severity, and product area before roadmap review.",
    href: "/workflows/ai-customer-feedback-triage",
    tags: ["Support", "Product"],
  },
  {
    title: "AI Churn Analysis Workflow",
    description:
      "Synthesize cancellation notes, support history, usage patterns, and account context into churn themes.",
    href: "/workflows/ai-churn-analysis",
    tags: ["Customer Success", "Analytics"],
  },
  {
    title: "AI Onboarding Email Workflow",
    description:
      "Design onboarding sequences that guide users toward activation, habit formation, and early value.",
    href: "/workflows/ai-onboarding-email",
    tags: ["Lifecycle", "Growth"],
  },
  {
    title: "AI Activation Audit Workflow",
    description:
      "Identify where new users get stuck, what activation means, and which interventions to test.",
    href: "/workflows/ai-activation-audit",
    tags: ["Growth", "Product"],
  },
  {
    title: "AI Pricing Page Audit",
    description:
      "Review pricing copy, plan differences, objections, FAQs, upgrade paths, and buyer confidence signals.",
    href: "/workflows/ai-pricing-page-audit",
    tags: ["Growth", "Pricing"],
  },
  {
    title: "AI Competitor Monitoring Workflow",
    description:
      "Track competitor positioning, launches, pricing changes, customer complaints, and strategic shifts.",
    href: "/workflows/ai-competitor-monitoring",
    tags: ["Research", "Strategy"],
  },
  {
    title: "AI Market Map Workflow",
    description:
      "Create a structured market map from categories, competitors, customer segments, use cases, and gaps.",
    href: "/workflows/ai-market-map",
    tags: ["Research", "Strategy"],
  },
  {
    title: "AI Analytics Narrative Workflow",
    description:
      "Turn dashboard changes into plain-language explanations, hypotheses, risks, and recommended next actions.",
    href: "/workflows/ai-analytics-narrative",
    tags: ["Analytics", "Reporting"],
  },
  {
    title: "AI Metric Definition Workflow",
    description:
      "Create clear metric definitions, source logic, owners, caveats, and examples for team dashboards.",
    href: "/workflows/ai-metric-definition",
    tags: ["Analytics", "Data"],
  },
  {
    title: "AI SQL Exploration Workflow",
    description:
      "Move from business questions to SQL drafts, validation checks, edge cases, and readable summaries.",
    href: "/workflows/ai-sql-exploration",
    tags: ["Analytics", "SQL"],
  },
  {
    title: "AI Data Quality Review",
    description:
      "Find suspicious metrics, missing events, naming inconsistencies, outliers, and instrumentation gaps.",
    href: "/workflows/ai-data-quality-review",
    tags: ["Analytics", "Quality"],
  },
  {
    title: "AI Meeting Follow-Up Workflow",
    description:
      "Turn meeting notes into decisions, owners, action items, risks, and useful follow-up messages.",
    href: "/workflows/ai-meeting-follow-up",
    tags: ["Meetings", "Operations"],
  },
  {
    title: "AI Hiring Scorecard Workflow",
    description:
      "Draft role scorecards, interview rubrics, evaluation notes, and consistent hiring criteria.",
    href: "/workflows/ai-hiring-scorecard",
    tags: ["Hiring", "Operations"],
  },
  {
    title: "AI Interview Question Workflow",
    description:
      "Create role-specific interview questions, scoring guidance, follow-ups, and red-flag checks.",
    href: "/workflows/ai-interview-questions",
    tags: ["Hiring", "People"],
  },
  {
    title: "AI Employee Onboarding Workflow",
    description:
      "Build first-week plans, role context, system checklists, reading paths, and manager prompts.",
    href: "/workflows/ai-employee-onboarding",
    tags: ["People", "Operations"],
  },
  {
    title: "AI SOP Builder Workflow",
    description:
      "Turn repeated team processes into clear standard operating procedures, checklists, and ownership rules.",
    href: "/workflows/ai-sop-builder",
    tags: ["Operations", "Docs"],
  },
  {
    title: "AI Automation Opportunity Finder",
    description:
      "Identify repetitive workflows, estimate effort, rank automation candidates, and define human review points.",
    href: "/workflows/ai-automation-opportunity-finder",
    tags: ["Automation", "Operations"],
  },
  {
    title: "AI Zapier Automation Planning",
    description:
      "Plan triggers, actions, data fields, failure cases, and monitoring before building automations.",
    href: "/workflows/ai-zapier-automation-planning",
    tags: ["Automation", "No-Code"],
  },
  {
    title: "AI Internal Tool Spec Workflow",
    description:
      "Define internal tool users, data sources, permissions, workflows, edge cases, and rollout steps.",
    href: "/workflows/ai-internal-tool-spec",
    tags: ["Operations", "Development"],
  },
  {
    title: "AI Vendor Evaluation Workflow",
    description:
      "Compare tools by use case, cost, implementation effort, security, workflow fit, and long-term risk.",
    href: "/workflows/ai-vendor-evaluation",
    tags: ["Operations", "Strategy"],
  },
  {
    title: "AI Privacy Review Workflow",
    description:
      "Review AI tools for sensitive data handling, retention settings, access controls, and approved-use rules.",
    href: "/workflows/ai-privacy-review",
    tags: ["Security", "Operations"],
  },
  {
    title: "AI Investor Update Workflow",
    description:
      "Draft concise investor updates with metrics, progress, risks, asks, and context that builds trust.",
    href: "/workflows/ai-investor-update",
    tags: ["Founders", "Fundraising"],
  },
]

export const developerGuides: CardItem[] = [
  {
    title:
      "How I Added Comments to My Next.js Site with Giscus in Under 30 Minutes",
    description:
      "A practical walkthrough of adding GitHub-powered comments to a Next.js site without building auth, moderation, or database infrastructure.",
    href: "/developers/adding-comments-nextjs-giscus",
  },
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
  {
    title: "AI Coding Review & DevOps",
    description:
      "Code review, documentation, refactoring, developer onboarding, and DevOps assistance.",
    tools: [
      "Tabnine",
      "Sourcegraph Cody",
      "CodeRabbit",
      "Qodo",
      "Mutable AI",
      "Continue",
      "Bito",
      "Swimm",
      "Figstack",
      "Blackbox AI",
    ],
  },
  {
    title: "AI App Builders",
    description:
      "Prompt-driven app builders, product prototyping tools, and no-code development platforms.",
    tools: [
      "Base44",
      "Tempo",
      "Softgen",
      "Create",
      "Databutton",
      "Marblism",
      "Lazy AI",
      "Builder.io",
      "FlutterFlow AI",
      "Draftbit AI",
    ],
  },
  {
    title: "AI Search & Academic Research",
    description:
      "Research discovery, scholarly search, citation exploration, and source verification tools.",
    tools: [
      "Andi",
      "Phind",
      "Komo",
      "Brave Leo",
      "SciSpace",
      "Research Rabbit",
      "Semantic Scholar",
      "Connected Papers",
      "Litmaps",
      "Scite",
    ],
  },
  {
    title: "AI Writing & Editing",
    description:
      "Grammar checking, rewriting, drafting, academic writing, and editorial support.",
    tools: [
      "Grammarly",
      "ProWritingAid",
      "QuillBot",
      "Writer",
      "Lex",
      "Type",
      "Jenni",
      "Paperpal",
      "Wordvice AI",
      "LanguageTool",
    ],
  },
  {
    title: "AI SEO Optimization",
    description:
      "Content optimization, search intent research, rank tracking, and SEO writing workflows.",
    tools: [
      "Ahrefs AI",
      "seoClarity",
      "PageOptimizer Pro",
      "NeuronWriter",
      "SE Ranking AI",
      "Alli AI",
      "RankIQ",
      "ContentShake AI",
      "GrowthBar",
      "Surfer AI",
    ],
  },
  {
    title: "AI UI & Brand Design",
    description:
      "Brand design, UI generation, product mockups, design assistants, and creative exploration.",
    tools: [
      "Khroma",
      "Looka",
      "Designs.ai",
      "Visily",
      "Motiff",
      "Penpot AI",
      "Diagram",
      "Magician",
      "GeniusUI",
      "Creatie",
    ],
  },
  {
    title: "AI Image Generation & Editing",
    description:
      "Image generation, creative direction, upscaling, editing, and visual asset production.",
    tools: [
      "Leonardo",
      "Krea",
      "Freepik AI",
      "Recraft",
      "Playground",
      "NightCafe",
      "DreamStudio",
      "Stable Assistant",
      "Magnific AI",
      "Topaz Photo AI",
    ],
  },
  {
    title: "AI Video Generation & Editing",
    description:
      "Avatar videos, text-to-video, AI editing, short clips, and video production workflows.",
    tools: [
      "Synthesys",
      "Colossyan",
      "Elai",
      "InVideo AI",
      "Kapwing AI",
      "VEED AI",
      "Fliki",
      "D-ID",
      "DeepBrain AI",
      "Steve AI",
    ],
  },
  {
    title: "AI Voice, Music & Audio",
    description:
      "Voiceovers, dubbing, music generation, audio cleanup, and podcast production tools.",
    tools: [
      "Speechify",
      "WellSaid Labs",
      "LOVO",
      "Listnr",
      "Altered",
      "Replica Studios",
      "Kits AI",
      "AIVA",
      "Beatoven",
      "Soundraw",
    ],
  },
  {
    title: "AI Meeting Productivity",
    description:
      "Meeting notes, action items, coaching, summaries, and async team follow-up.",
    tools: [
      "Jamie",
      "MeetGeek",
      "Sembly",
      "Nyota",
      "Equal Time",
      "Rewatch",
      "Circleback",
      "Spinach",
      "MeetRecord",
      "Wudpecker",
    ],
  },
  {
    title: "AI Product Discovery",
    description:
      "Feedback synthesis, roadmap inputs, product discovery, user insights, and PM workflows.",
    tools: [
      "Cycle",
      "Zeda.io",
      "Kraftful",
      "Productlane",
      "Vistaly",
      "Harvestr",
      "airfocus AI",
      "Maze AI",
      "UserTesting AI",
      "UserVoice AI",
    ],
  },
  {
    title: "AI UX Research",
    description:
      "Interview analysis, research repositories, usability testing, survey insights, and synthesis.",
    tools: [
      "Condens",
      "Looppanel",
      "Marvin",
      "UserInterviews AI",
      "EnjoyHQ",
      "Aurelius",
      "Sprig AI",
      "Lyssna AI",
      "Ballpark",
      "Useberry",
    ],
  },
  {
    title: "AI Machine Learning & Data Science",
    description:
      "Predictive modeling, ML platforms, natural-language analytics, and data science copilots.",
    tools: [
      "Dataiku",
      "DataRobot",
      "H2O.ai",
      "Obviously AI",
      "DataChat",
      "Seek AI",
      "Vanna",
      "PandasAI",
      "Numbers Station",
      "AnswerRocket",
    ],
  },
  {
    title: "AI Business Intelligence",
    description:
      "Natural-language BI, spreadsheet analysis, dashboard exploration, and reporting assistants.",
    tools: [
      "ThoughtSpot Sage",
      "Tableau Agent",
      "Powerdrill",
      "Rows AI",
      "Polymer",
      "ChartPixel",
      "Sourcetable",
      "Quadratic",
      "Equals AI",
      "Luzmo IQ",
    ],
  },
  {
    title: "AI Workflow Automation",
    description:
      "Browser automation, AI agents, workflow builders, and operations automation.",
    tools: [
      "Bardeen",
      "Magical",
      "Motion",
      "Taskade",
      "Zapier Agents",
      "MindStudio",
      "AgentGPT",
      "Flowise",
      "Dify",
      "Stack AI",
    ],
  },
  {
    title: "AI Customer Support Platforms",
    description:
      "Support automation, customer service agents, ticket triage, and help center intelligence.",
    tools: [
      "Gorgias AI",
      "Yuma AI",
      "eesel AI",
      "Maven AGI",
      "Ultimate",
      "Coveo",
      "Capacity",
      "Gladly Sidekick",
      "Quiq",
      "Certainly",
    ],
  },
  {
    title: "AI Sales Engagement",
    description:
      "Outbound automation, sales email coaching, prospecting, and AI sales development.",
    tools: [
      "Instantly AI",
      "Smartlead",
      "Lemlist AI",
      "Reply.io AI",
      "Salesloft AI",
      "Klenty AI",
      "Drift",
      "Conversica",
      "Nooks",
      "11x",
    ],
  },
  {
    title: "AI Recruiting",
    description:
      "Candidate sourcing, interview notes, hiring workflows, screening, and talent intelligence.",
    tools: [
      "HireVue",
      "Paradox",
      "Eightfold",
      "SeekOut",
      "Metaview",
      "BrightHire",
      "Humanly",
      "Manatal AI",
      "Workable AI",
      "Ashby AI",
    ],
  },
  {
    title: "AI HR & People Operations",
    description:
      "Performance reviews, employee feedback, HR automation, and people operations workflows.",
    tools: [
      "Lattice AI",
      "Leapsome AI",
      "Culture Amp AI",
      "15Five AI",
      "Workday AI",
      "Gusto AI",
      "Deel AI",
      "Rippling AI",
      "Betterworks",
      "Textio",
    ],
  },
  {
    title: "AI Legal",
    description:
      "Contract review, legal research, drafting, compliance workflows, and legal operations.",
    tools: [
      "Harvey",
      "Spellbook",
      "CoCounsel",
      "Lexion",
      "Ironclad AI",
      "Robin AI",
      "LegalOn",
      "LawGeex",
      "Paxton AI",
      "Casetext",
    ],
  },
  {
    title: "AI Finance & Accounting",
    description:
      "Accounting automation, finance reporting, expense intelligence, and startup finance workflows.",
    tools: [
      "Ramp Intelligence",
      "Brex AI",
      "Rillet",
      "Numeric",
      "Vic.ai",
      "Booke AI",
      "Datarails",
      "Cube AI",
      "Mosaic AI",
      "Anrok AI",
    ],
  },
  {
    title: "AI Education",
    description:
      "Tutoring, teaching assistants, lesson planning, quizzes, and classroom productivity.",
    tools: [
      "Khanmigo",
      "Duolingo Max",
      "Quizlet AI",
      "MagicSchool",
      "Curipod",
      "Eduaide",
      "Brisk Teaching",
      "SchoolAI",
      "Gradescope",
      "ScribeSense",
    ],
  },
  {
    title: "AI Presentation & Storytelling",
    description:
      "Slide generation, narrative design, interactive decks, and visual communication.",
    tools: [
      "PitchBob",
      "Storydoc",
      "Slidebean",
      "DeckRobot",
      "Sendsteps",
      "Mentimeter AI",
      "Visme AI",
      "Prezi AI",
      "Zoho Show AI",
      "Slidesgo AI",
    ],
  },
  {
    title: "AI Ads & Campaigns",
    description:
      "Ad creative, campaign optimization, message testing, personalization, and paid growth workflows.",
    tools: [
      "Pencil",
      "Madgicx",
      "Albert.ai",
      "Smartly.io AI",
      "Omneky",
      "Persado",
      "Phrasee",
      "Mutiny",
      "Optimizely AI",
      "Unbounce Smart Copy",
    ],
  },
  {
    title: "AI Social Media",
    description:
      "Social scheduling, post generation, audience insights, and short-form content workflows.",
    tools: [
      "Buffer AI",
      "Hootsuite OwlyWriter",
      "Sprout AI",
      "Later AI",
      "SocialBee AI",
      "Ocoya",
      "Publer AI",
      "Lately AI",
      "Flick",
      "FeedHive",
    ],
  },
  {
    title: "AI Email Marketing",
    description:
      "Lifecycle messaging, email personalization, deliverability support, and campaign optimization.",
    tools: [
      "Mailchimp AI",
      "Klaviyo AI",
      "Customer.io AI",
      "ActiveCampaign AI",
      "Brevo AI",
      "Ortto AI",
      "Encharge AI",
      "SmartWriter",
      "Seventh Sense",
      "Rasa.io",
    ],
  },
  {
    title: "AI Knowledge Management",
    description:
      "Enterprise search, internal knowledge assistants, team wikis, and support knowledge bases.",
    tools: [
      "Glean",
      "Guru",
      "Mem",
      "Tana",
      "Slite AI",
      "Slab AI",
      "Sana",
      "Hebbia",
      "Kapa.ai",
      "Moveworks",
    ],
  },
  {
    title: "AI Agent Platforms",
    description:
      "Agent frameworks, RAG tooling, AI app infrastructure, orchestration, and evaluation platforms.",
    tools: [
      "LangSmith",
      "LangChain",
      "LlamaIndex",
      "Haystack",
      "Langflow",
      "AutoGPT",
      "Superagent",
      "SmythOS",
      "Dust",
      "OpenAI GPTs",
    ],
  },
  {
    title: "AI Security",
    description:
      "Security copilots, code scanning, compliance automation, threat detection, and AI governance.",
    tools: [
      "Snyk AI",
      "Wiz AI",
      "Endor Labs",
      "Socket AI",
      "Semgrep Assistant",
      "Vanta AI",
      "Drata AI",
      "CrowdStrike Charlotte",
      "Darktrace",
      "SentinelOne Purple AI",
    ],
  },
  {
    title: "AI Ecommerce",
    description:
      "Storefront personalization, ecommerce search, product recommendations, and commerce automation.",
    tools: [
      "Shopify Magic",
      "Shopify Sidekick",
      "Bloomreach Clarity",
      "Nosto",
      "Algolia AI",
      "Constructor",
      "Syte",
      "Clerk.io",
      "Rebuy AI",
      "Octane AI",
    ],
  },
]

export type ToolDirectoryItem = CardItem & {
  name: string
  category: string
  slug: string
}

export function slugifyToolName(name: string) {
  return name
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
}

export const toolDirectory: ToolDirectoryItem[] = Array.from(
  new Map(
    aiToolCategories.flatMap((category) =>
      category.tools.map((name) => {
        const slug = slugifyToolName(name)

        return [
          slug,
          {
            name,
            title: name,
            category: category.title,
            slug,
            description: `${name} is listed in Sinale's ${category.title.toLowerCase()} directory for ${category.description.toLowerCase()}`,
            href: `/tools/${slug}`,
          },
        ] as const
      }),
    ),
  ).values(),
)

export function getToolBySlug(slug: string) {
  return toolDirectory.find((tool) => tool.slug === slug)
}

export const searchSuggestions = [
  "Cursor",
  "Claude",
  "Perplexity",
  "Agents",
  "Coding",
  "Research",
]

export const searchIcon = Search
