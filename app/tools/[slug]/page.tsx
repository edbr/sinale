import { ArticlePage } from "@/app/article-page"
import { pageMetadata } from "@/lib/seo"
import { getToolBySlug, toolDirectory } from "@/lib/site-content"
import { ApolloToolPage } from "./apollo"
import { ArtisanToolPage } from "./artisan"
import { AutogenToolPage } from "./autogen"
import { CaptionsToolPage } from "./captions"
import { ClaudeToolPage } from "./claude"
import { ClayToolPage } from "./clay"
import { CrewaiToolPage } from "./crewai"
import { CursorToolPage } from "./cursor"
import { DecktopusToolPage } from "./decktopus"
import { ElicitToolPage } from "./elicit"
import { GongToolPage } from "./gong"
import { GumloopToolPage } from "./gumloop"
import { HelpscoutAiToolPage } from "./helpscout-ai"
import { HirevueToolPage } from "./hirevue"
import { LanggraphToolPage } from "./langgraph"
import { LavenderToolPage } from "./lavender"
import { OpusClipToolPage } from "./opus-clip"
import { PerplexityToolPage } from "./perplexity"
import { RegieToolPage } from "./regie"
import { RelayToolPage } from "./relay"
import { RelevanceAiToolPage } from "./relevance-ai"
import { ReplitToolPage } from "./replit"
import { WindsurfToolPage } from "./windsurf"
import { YouComToolPage } from "./you-com"

export function generateStaticParams() {
  return toolDirectory.map((tool) => ({ slug: tool.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const item = getToolBySlug(slug)

  return pageMetadata({
    title:
      slug === "helpscout-ai"
        ? "Help Scout AI | Sinale"
        : slug === "apollo"
          ? "Apollo | Sinale"
        : slug === "artisan"
          ? "Artisan | Sinale"
        : slug === "autogen"
          ? "AutoGen | Sinale"
        : slug === "captions"
          ? "Captions | Sinale"
        : slug === "claude"
          ? "Claude | Sinale"
        : slug === "clay"
          ? "Clay | Sinale"
        : slug === "crewai"
          ? "CrewAI | Sinale"
        : slug === "cursor"
          ? "Cursor | Sinale"
        : slug === "decktopus"
        ? "Decktopus | Sinale"
        : slug === "elicit"
          ? "Elicit | Sinale"
        : slug === "gong"
          ? "Gong | Sinale"
        : slug === "gumloop"
          ? "Gumloop | Sinale"
        : slug === "hirevue"
          ? "HireVue | Sinale"
        : slug === "langgraph"
          ? "LangGraph | Sinale"
        : slug === "lavender"
          ? "Lavender | Sinale"
        : slug === "opus-clip"
          ? "Opus Clip | Sinale"
        : slug === "perplexity"
          ? "Perplexity | Sinale"
        : slug === "regie"
          ? "Regie.ai | Sinale"
        : slug === "relay"
          ? "Relay.app | Sinale"
        : slug === "relevance-ai"
          ? "Relevance AI | Sinale"
        : slug === "replit"
          ? "Replit | Sinale"
        : slug === "windsurf"
          ? "Windsurf | Sinale"
        : slug === "you-com"
          ? "You.com | Sinale"
        : item
          ? `${item.name} | Sinale`
          : "AI Tool | Sinale",
    description:
      slug === "helpscout-ai"
        ? "Help Scout AI guide for support agents, helpdesk automation, customer service AI, and deflection."
        : slug === "apollo"
          ? "Apollo guide for B2B sales intelligence, prospecting, enrichment, sequences, AI research, sales engagement, and outbound workflows."
        : slug === "artisan"
          ? "Artisan guide for Ava, AI BDR workflows, autonomous outbound, lead discovery, enrichment, reply handling, meeting booking, pricing, and sales automation."
        : slug === "autogen"
          ? "AutoGen guide for open-source multi-agent applications, AgentChat, Core, Studio, extensions, and Microsoft Agent Framework migration."
        : slug === "captions"
          ? "Captions guide for AI captions, short-form video editing, AI video generation, avatars, translation, eye contact correction, pricing, and creator workflows."
        : slug === "claude"
          ? "Claude guide for reasoning, writing, research synthesis, artifacts, projects, web search, connectors, pricing, and knowledge work."
        : slug === "clay"
          ? "Clay guide for GTM enrichment, prospecting workflows, Claygent research, data waterfalls, CRM enrichment, signals, and outbound automation."
        : slug === "crewai"
          ? "CrewAI guide for open-source multi-agent orchestration, crews, flows, tools, memory, and enterprise deployment."
        : slug === "cursor"
          ? "Cursor guide for AI coding, coding agents, codebase understanding, autocomplete, cloud agents, CLI workflows, code review, pricing, and developer productivity."
        : slug === "decktopus"
        ? "Decktopus guide for AI deck generation, visual storytelling, slides, and executive presentations."
        : slug === "elicit"
          ? "Elicit guide for literature reviews, paper search, evidence synthesis, data extraction, systematic reviews, research alerts, pricing, and research workflows."
        : slug === "gong"
          ? "Gong guide for revenue intelligence, conversation intelligence, sales coaching, deal execution, forecasting, and RevOps visibility."
        : slug === "gumloop"
          ? "Gumloop guide for AI automation, visual workflows, agents, MCP integrations, and team governance."
        : slug === "hirevue"
          ? "HireVue guide for AI recruiting, video interviewing, skill validation, pre-hire assessments, scheduling, conversational AI, pricing, and hiring workflows."
        : slug === "langgraph"
          ? "LangGraph guide for stateful agent orchestration, graph workflows, durable execution, human-in-the-loop, memory, and LangSmith deployment."
        : slug === "lavender"
          ? "Lavender guide for AI sales email coaching, cold email writing, personalization, team coaching, sales integrations, pricing, and Ora."
        : slug === "opus-clip"
          ? "Opus Clip guide for video generation, editing, clips, captions, and creative repurposing workflows."
        : slug === "perplexity"
          ? "Perplexity guide for AI search, answer engine workflows, source discovery, Deep Research, Spaces, Comet, pricing, and enterprise research."
        : slug === "regie"
          ? "Regie.ai guide for AI sales engagement, prospecting agents, signal selling, AI dialer, enrichment, pricing, and outbound workflows."
        : slug === "relay"
          ? "Relay.app guide for AI workflows, human-in-the-loop automation, app connectors, tables, and MCP tools."
        : slug === "relevance-ai"
          ? "Relevance AI guide for AI workforce building, no-code agents, GTM automation, evaluations, and governance."
        : slug === "replit"
          ? "Replit guide for AI app building, browser-based coding, prototypes, deployments, and Replit Agent."
        : slug === "windsurf"
          ? "Windsurf guide for Cascade, agentic coding, AI IDE workflows, multi-file editing, MCP, app previews, pricing, and developer productivity."
        : slug === "you-com"
          ? "You.com guide for AI search, ARI, research agents, Search API, enterprise search infrastructure, model access, pricing, and RAG workflows."
        : (item?.description ??
          "Explore practical AI tool recommendations, workflows, reviews, and comparisons."),
    path: `/tools/${slug}`,
  })
}

function getRelatedToolItems(slug: string) {
  const currentIndex = toolDirectory.findIndex((tool) => tool.slug === slug)

  return [...toolDirectory.slice(currentIndex + 1), ...toolDirectory]
    .filter((tool) => tool.slug !== slug)
    .slice(0, 3)
    .map((tool) => ({
      title: tool.title,
      description: tool.description,
      href: tool.href,
      domain: tool.domain,
      logo: tool.logo,
    }))
}

export default async function ToolPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  if (slug === "apollo") {
    const relatedItems = getRelatedToolItems(slug)

    return <ApolloToolPage relatedItems={relatedItems} />
  }

  if (slug === "artisan") {
    const relatedItems = getRelatedToolItems(slug)

    return <ArtisanToolPage relatedItems={relatedItems} />
  }

  if (slug === "autogen") {
    const relatedItems = getRelatedToolItems(slug)

    return <AutogenToolPage relatedItems={relatedItems} />
  }

  if (slug === "captions") {
    const relatedItems = getRelatedToolItems(slug)

    return <CaptionsToolPage relatedItems={relatedItems} />
  }

  if (slug === "claude") {
    const relatedItems = getRelatedToolItems(slug)

    return <ClaudeToolPage relatedItems={relatedItems} />
  }

  if (slug === "clay") {
    const relatedItems = getRelatedToolItems(slug)

    return <ClayToolPage relatedItems={relatedItems} />
  }

  if (slug === "crewai") {
    const relatedItems = getRelatedToolItems(slug)

    return <CrewaiToolPage relatedItems={relatedItems} />
  }

  if (slug === "cursor") {
    const relatedItems = getRelatedToolItems(slug)

    return <CursorToolPage relatedItems={relatedItems} />
  }

  if (slug === "helpscout-ai") {
    const relatedItems = getRelatedToolItems(slug)

    return <HelpscoutAiToolPage relatedItems={relatedItems} />
  }

  if (slug === "hirevue") {
    const relatedItems = getRelatedToolItems(slug)

    return <HirevueToolPage relatedItems={relatedItems} />
  }

  if (slug === "decktopus") {
    const relatedItems = getRelatedToolItems(slug)

    return <DecktopusToolPage relatedItems={relatedItems} />
  }

  if (slug === "elicit") {
    const relatedItems = getRelatedToolItems(slug)

    return <ElicitToolPage relatedItems={relatedItems} />
  }

  if (slug === "gong") {
    const relatedItems = getRelatedToolItems(slug)

    return <GongToolPage relatedItems={relatedItems} />
  }

  if (slug === "gumloop") {
    const relatedItems = getRelatedToolItems(slug)

    return <GumloopToolPage relatedItems={relatedItems} />
  }

  if (slug === "langgraph") {
    const relatedItems = getRelatedToolItems(slug)

    return <LanggraphToolPage relatedItems={relatedItems} />
  }

  if (slug === "lavender") {
    const relatedItems = getRelatedToolItems(slug)

    return <LavenderToolPage relatedItems={relatedItems} />
  }

  if (slug === "opus-clip") {
    const relatedItems = getRelatedToolItems(slug)

    return <OpusClipToolPage relatedItems={relatedItems} />
  }

  if (slug === "perplexity") {
    const relatedItems = getRelatedToolItems(slug)

    return <PerplexityToolPage relatedItems={relatedItems} />
  }

  if (slug === "regie") {
    const relatedItems = getRelatedToolItems(slug)

    return <RegieToolPage relatedItems={relatedItems} />
  }

  if (slug === "relay") {
    const relatedItems = getRelatedToolItems(slug)

    return <RelayToolPage relatedItems={relatedItems} />
  }

  if (slug === "relevance-ai") {
    const relatedItems = getRelatedToolItems(slug)

    return <RelevanceAiToolPage relatedItems={relatedItems} />
  }

  if (slug === "replit") {
    const relatedItems = getRelatedToolItems(slug)

    return <ReplitToolPage relatedItems={relatedItems} />
  }

  if (slug === "windsurf") {
    const relatedItems = getRelatedToolItems(slug)

    return <WindsurfToolPage relatedItems={relatedItems} />
  }

  if (slug === "you-com") {
    const relatedItems = getRelatedToolItems(slug)

    return <YouComToolPage relatedItems={relatedItems} />
  }

  return (
    <ArticlePage
      items={toolDirectory.map((tool) => ({
        title: tool.title,
        description: tool.description,
        href: tool.href,
        domain: tool.domain,
        logo: tool.logo,
      }))}
      params={Promise.resolve({ slug })}
      parentHref="/tools"
      parentLabel="Tools"
    />
  )
}
