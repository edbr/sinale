import { ArticlePage } from "@/app/article-page"
import { pageMetadata } from "@/lib/seo"
import { reviews } from "@/lib/site-content"
import { ChatGPTReview } from "./chatgpt-review"
import { ClaudeReview } from "./claude-review"
import { CursorReview } from "./cursor-review"
import { LovableReview } from "./lovable-review"
import { PerplexityReview } from "./perplexity-review"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const item = reviews.find((entry) => entry.href.endsWith(`/${slug}`))

  return pageMetadata({
    title: item ? `${item.title} | Sinale` : "AI Tool Review | Sinale",
    description:
      item?.description ??
      "Read practical AI tool reviews covering strengths, weaknesses, pricing, and best-fit use cases.",
    path: `/reviews/${slug}`,
  })
}

export default async function ReviewPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  if (slug === "cursor-review") {
    return <CursorReview />
  }

  if (slug === "claude-review") {
    return <ClaudeReview />
  }

  if (slug === "chatgpt-review") {
    return <ChatGPTReview />
  }

  if (slug === "perplexity-review") {
    return <PerplexityReview />
  }

  if (slug === "lovable-review") {
    return <LovableReview />
  }

  return (
    <ArticlePage
      items={reviews}
      params={Promise.resolve({ slug })}
      parentHref="/reviews"
      parentLabel="Reviews"
    />
  )
}
