import { ArticlePage } from "@/app/article-page"
import { pageMetadata } from "@/lib/seo"
import { comparisons } from "@/lib/site-content"
import { ApolloVsClayComparison } from "./apollo-vs-clay"
import { AirtableVsNotionComparison } from "./airtable-vs-notion"
import { ApolloVsZoomInfoComparison } from "./apollo-vs-zoominfo"
import { AvomaVsGongComparison } from "./avoma-vs-gong"
import { BoltVsReplitComparison } from "./bolt-vs-replit"
import { CanvaVsAdobeExpressComparison } from "./canva-vs-adobe-express"
import { ChatGPTVsGeminiComparison } from "./chatgpt-vs-gemini"
import { ClayVsZoomInfoComparison } from "./clay-vs-zoominfo"
import { ClaudeCodeVsGithubCopilotComparison } from "./claude-code-vs-github-copilot"
import { ClaudeVsChatGPTComparison } from "./claude-vs-chatgpt"
import { ClaudeVsGeminiComparison } from "./claude-vs-gemini"
import { CursorVsClaudeCodeComparison } from "./cursor-vs-claude-code"
import { CursorVsGithubCopilotComparison } from "./cursor-vs-github-copilot"
import { CursorVsWindsurfComparison } from "./cursor-vs-windsurf"
import { DescriptVsRiversideComparison } from "./descript-vs-riverside"
import { FathomVsFirefliesComparison } from "./fathom-vs-fireflies"
import { FigmaAiVsGalileoAiComparison } from "./figma-ai-vs-galileo-ai"
import { FramerVsSquarespaceComparison } from "./framer-vs-squarespace"
import { GranolaVsFathomComparison } from "./granola-vs-fathom"
import { GranolaVsOtterComparison } from "./granola-vs-otter"
import { HubSpotVsSalesforceComparison } from "./hubspot-vs-salesforce"
import { LinearVsJiraComparison } from "./linear-vs-jira"
import { LovableVsBoltComparison } from "./lovable-vs-bolt"
import { MidjourneyVsDallEComparison } from "./midjourney-vs-dall-e"
import { NotionAiVsCodaAiComparison } from "./notion-ai-vs-coda-ai"
import { OtterVsFirefliesComparison } from "./otter-vs-fireflies"
import { NotionAiVsChatgptComparison } from "./notion-ai-vs-chatgpt"
import { NotionVsLinearComparison } from "./notion-vs-linear"
import { PerplexityVsGoogleSearchComparison } from "./perplexity-vs-google-search"
import { PerplexityVsGeminiComparison } from "./perplexity-vs-gemini"
import { PerplexityVsChatGPTComparison } from "./perplexity-vs-chatgpt"
import { ReadAiVsFathomComparison } from "./read-ai-vs-fathom"
import { ReplitVsLovableComparison } from "./replit-vs-lovable"
import { RetoolVsBubbleComparison } from "./retool-vs-bubble"
import { RunwayVsPikaComparison } from "./runway-vs-pika"
import { SupabaseVsFirebaseComparison } from "./supabase-vs-firebase"
import { WebflowVsFramerComparison } from "./webflow-vs-framer"
import { WebflowVsWixStudioComparison } from "./webflow-vs-wix-studio"
import { WindsurfVsCursorComparison } from "./windsurf-vs-cursor"
import { ZapierVsN8nComparison } from "./zapier-vs-n8n"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const item = comparisons.find((entry) => entry.href.endsWith(`/${slug}`))

  return pageMetadata({
    title: item ? `${item.title} | Sinale` : "AI Tool Comparison | Sinale",
    description:
      item?.description ??
      "Compare AI tools side by side with practical recommendations for modern software teams.",
    path: `/comparisons/${slug}`,
  })
}

export default async function ComparisonPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  if (slug === "cursor-vs-claude-code") {
    return <CursorVsClaudeCodeComparison />
  }

  if (slug === "claude-code-vs-github-copilot") {
    return <ClaudeCodeVsGithubCopilotComparison />
  }

  if (slug === "cursor-vs-github-copilot") {
    return <CursorVsGithubCopilotComparison />
  }

  if (slug === "cursor-vs-windsurf") {
    return <CursorVsWindsurfComparison />
  }

  if (slug === "claude-vs-chatgpt") {
    return <ClaudeVsChatGPTComparison />
  }

  if (slug === "claude-vs-gemini") {
    return <ClaudeVsGeminiComparison />
  }

  if (slug === "chatgpt-vs-gemini") {
    return <ChatGPTVsGeminiComparison />
  }

  if (slug === "perplexity-vs-chatgpt") {
    return <PerplexityVsChatGPTComparison />
  }

  if (slug === "perplexity-vs-google-search") {
    return <PerplexityVsGoogleSearchComparison />
  }

  if (slug === "perplexity-vs-gemini") {
    return <PerplexityVsGeminiComparison />
  }

  if (slug === "lovable-vs-bolt") {
    return <LovableVsBoltComparison />
  }

  if (slug === "replit-vs-lovable") {
    return <ReplitVsLovableComparison />
  }

  if (slug === "bolt-vs-replit") {
    return <BoltVsReplitComparison />
  }

  if (slug === "notion-ai-vs-coda-ai") {
    return <NotionAiVsCodaAiComparison />
  }

  if (slug === "notion-ai-vs-chatgpt") {
    return <NotionAiVsChatgptComparison />
  }

  if (slug === "notion-vs-linear") {
    return <NotionVsLinearComparison />
  }

  if (slug === "granola-vs-fathom") {
    return <GranolaVsFathomComparison />
  }

  if (slug === "granola-vs-otter") {
    return <GranolaVsOtterComparison />
  }

  if (slug === "fathom-vs-fireflies") {
    return <FathomVsFirefliesComparison />
  }

  if (slug === "otter-vs-fireflies") {
    return <OtterVsFirefliesComparison />
  }

  if (slug === "read-ai-vs-fathom") {
    return <ReadAiVsFathomComparison />
  }

  if (slug === "windsurf-vs-cursor") {
    return <WindsurfVsCursorComparison />
  }

  if (slug === "apollo-vs-zoominfo") {
    return <ApolloVsZoomInfoComparison />
  }

  if (slug === "apollo-vs-clay") {
    return <ApolloVsClayComparison />
  }

  if (slug === "clay-vs-zoominfo") {
    return <ClayVsZoomInfoComparison />
  }

  if (slug === "avoma-vs-gong") {
    return <AvomaVsGongComparison />
  }

  if (slug === "airtable-vs-notion") {
    return <AirtableVsNotionComparison />
  }

  if (slug === "hubspot-vs-salesforce") {
    return <HubSpotVsSalesforceComparison />
  }

  if (slug === "webflow-vs-framer") {
    return <WebflowVsFramerComparison />
  }

  if (slug === "retool-vs-bubble") {
    return <RetoolVsBubbleComparison />
  }

  if (slug === "supabase-vs-firebase") {
    return <SupabaseVsFirebaseComparison />
  }

  if (slug === "zapier-vs-n8n") {
    return <ZapierVsN8nComparison />
  }

  if (slug === "descript-vs-riverside") {
    return <DescriptVsRiversideComparison />
  }

  if (slug === "runway-vs-pika") {
    return <RunwayVsPikaComparison />
  }

  if (slug === "midjourney-vs-dall-e") {
    return <MidjourneyVsDallEComparison />
  }

  if (slug === "figma-ai-vs-galileo-ai") {
    return <FigmaAiVsGalileoAiComparison />
  }

  if (slug === "canva-vs-adobe-express") {
    return <CanvaVsAdobeExpressComparison />
  }

  if (slug === "framer-vs-squarespace") {
    return <FramerVsSquarespaceComparison />
  }

  if (slug === "webflow-vs-wix-studio") {
    return <WebflowVsWixStudioComparison />
  }

  if (slug === "linear-vs-jira") {
    return <LinearVsJiraComparison />
  }

  return (
    <ArticlePage
      items={comparisons}
      params={Promise.resolve({ slug })}
      parentHref="/comparisons"
      parentLabel="Comparisons"
    />
  )
}
