import { ArticlePage } from "@/app/article-page"
import { pageMetadata } from "@/lib/seo"
import { trendingTools } from "@/lib/site-content"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const item = trendingTools.find((entry) => entry.href.endsWith(`/${slug}`))

  return pageMetadata({
    title: item ? `${item.name} | Sinale` : "AI Tool | Sinale",
    description:
      item?.description ??
      "Explore practical AI tool recommendations, workflows, reviews, and comparisons.",
    path: `/tools/${slug}`,
  })
}

export default function ToolPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  return (
    <ArticlePage
      items={trendingTools.map((tool) => ({
        title: tool.name,
        description: tool.description,
        href: tool.href,
      }))}
      params={params}
      parentHref="/tools"
      parentLabel="Tools"
    />
  )
}
