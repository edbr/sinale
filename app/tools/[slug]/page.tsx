import { ArticlePage } from "@/app/article-page"
import { trendingTools } from "@/lib/site-content"

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
