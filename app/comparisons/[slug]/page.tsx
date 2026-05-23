import { ArticlePage } from "@/app/article-page"
import { pageMetadata } from "@/lib/seo"
import { comparisons } from "@/lib/site-content"
import { ApolloVsZoomInfoComparison } from "./apollo-vs-zoominfo"
import { ClaudeVsChatGPTComparison } from "./claude-vs-chatgpt"
import { CursorVsClaudeCodeComparison } from "./cursor-vs-claude-code"
import { LovableVsBoltComparison } from "./lovable-vs-bolt"
import { PerplexityVsChatGPTComparison } from "./perplexity-vs-chatgpt"
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

  if (slug === "claude-vs-chatgpt") {
    return <ClaudeVsChatGPTComparison />
  }

  if (slug === "perplexity-vs-chatgpt") {
    return <PerplexityVsChatGPTComparison />
  }

  if (slug === "lovable-vs-bolt") {
    return <LovableVsBoltComparison />
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

  return (
    <ArticlePage
      items={comparisons}
      params={Promise.resolve({ slug })}
      parentHref="/comparisons"
      parentLabel="Comparisons"
    />
  )
}
