import { ArticlePage } from "@/app/article-page"
import { comparisons } from "@/lib/site-content"
import { ClaudeVsChatGPTComparison } from "./claude-vs-chatgpt"
import { CursorVsClaudeCodeComparison } from "./cursor-vs-claude-code"
import { LovableVsBoltComparison } from "./lovable-vs-bolt"
import { PerplexityVsChatGPTComparison } from "./perplexity-vs-chatgpt"
import { WindsurfVsCursorComparison } from "./windsurf-vs-cursor"

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

  return (
    <ArticlePage
      items={comparisons}
      params={Promise.resolve({ slug })}
      parentHref="/comparisons"
      parentLabel="Comparisons"
    />
  )
}
