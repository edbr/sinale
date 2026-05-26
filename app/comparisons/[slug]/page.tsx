import { ArticlePage } from "@/app/article-page"
import { pageMetadata } from "@/lib/seo"
import { comparisons } from "@/lib/site-content"
import { ApolloVsZoomInfoComparison } from "./apollo-vs-zoominfo"
import { BoltVsReplitComparison } from "./bolt-vs-replit"
import { ClaudeCodeVsGithubCopilotComparison } from "./claude-code-vs-github-copilot"
import { ClaudeVsChatGPTComparison } from "./claude-vs-chatgpt"
import { ClaudeVsGeminiComparison } from "./claude-vs-gemini"
import { CursorVsClaudeCodeComparison } from "./cursor-vs-claude-code"
import { CursorVsGithubCopilotComparison } from "./cursor-vs-github-copilot"
import { CursorVsWindsurfComparison } from "./cursor-vs-windsurf"
import { FathomVsFirefliesComparison } from "./fathom-vs-fireflies"
import { GranolaVsFathomComparison } from "./granola-vs-fathom"
import { GranolaVsOtterComparison } from "./granola-vs-otter"
import { LovableVsBoltComparison } from "./lovable-vs-bolt"
import { NotionAiVsCodaAiComparison } from "./notion-ai-vs-coda-ai"
import { OtterVsFirefliesComparison } from "./otter-vs-fireflies"
import { NotionAiVsChatgptComparison } from "./notion-ai-vs-chatgpt"
import { PerplexityVsGoogleSearchComparison } from "./perplexity-vs-google-search"
import { PerplexityVsGeminiComparison } from "./perplexity-vs-gemini"
import { PerplexityVsChatGPTComparison } from "./perplexity-vs-chatgpt"
import { ReadAiVsFathomComparison } from "./read-ai-vs-fathom"
import { ReplitVsLovableComparison } from "./replit-vs-lovable"
import { RetoolVsBubbleComparison } from "./retool-vs-bubble"
import { SupabaseVsFirebaseComparison } from "./supabase-vs-firebase"
import { WebflowVsFramerComparison } from "./webflow-vs-framer"
import { WindsurfVsCursorComparison } from "./windsurf-vs-cursor"

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

  if (slug === "webflow-vs-framer") {
    return <WebflowVsFramerComparison />
  }

  if (slug === "retool-vs-bubble") {
    return <RetoolVsBubbleComparison />
  }

  if (slug === "supabase-vs-firebase") {
    return <SupabaseVsFirebaseComparison />
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
