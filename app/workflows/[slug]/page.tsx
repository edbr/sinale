import { ArticlePage } from "@/app/article-page"
import { pageMetadata } from "@/lib/seo"
import { workflows } from "@/lib/site-content"
import { BuildingSaasMvpWithAiWorkflow } from "./building-saas-mvp-with-ai"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const item = workflows.find((entry) => entry.href.endsWith(`/${slug}`))

  return pageMetadata({
    title: item ? `${item.title} | Sinale` : "AI Workflow | Sinale",
    description:
      item?.description ??
      "Explore practical AI workflows for building, designing, researching, analyzing, and launching software.",
    path: `/workflows/${slug}`,
  })
}

export default async function WorkflowPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  if (slug === "building-saas-mvp-with-ai") {
    return <BuildingSaasMvpWithAiWorkflow />
  }

  return (
    <ArticlePage
      items={workflows}
      params={Promise.resolve({ slug })}
      parentHref="/workflows"
      parentLabel="Workflows"
    />
  )
}
