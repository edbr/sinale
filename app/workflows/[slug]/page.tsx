import { ArticlePage } from "@/app/article-page"
import { workflows } from "@/lib/site-content"
import { BuildingSaasMvpWithAiWorkflow } from "./building-saas-mvp-with-ai"

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
