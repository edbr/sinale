import { ArticlePage } from "@/app/article-page"
import { pageMetadata } from "@/lib/seo"
import { getToolBySlug, toolDirectory } from "@/lib/site-content"

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
      items={toolDirectory.map((tool) => ({
        title: tool.title,
        description: tool.description,
        href: tool.href,
      }))}
      params={params}
      parentHref="/tools"
      parentLabel="Tools"
    />
  )
}
