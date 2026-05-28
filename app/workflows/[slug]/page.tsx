import { ArticlePage } from "@/app/article-page"
import { pageMetadata } from "@/lib/seo"
import { workflows } from "@/lib/site-content"
import { AiCodingStackWorkflow } from "./ai-coding-stack"
import { AiProductDesignWorkflow } from "./ai-product-design"
import { AiProductRoadmapReviewWorkflow } from "./ai-product-roadmap-review"
import { AiResearchStackWorkflow } from "./ai-research-stack"
import { AiUserPersonaBuilderWorkflow } from "./ai-user-persona-builder"
import { BuildingSaasMvpWithAiWorkflow } from "./building-saas-mvp-with-ai"
import { CustomerInterviewSynthesisAiWorkflow } from "./customer-interview-synthesis-ai"

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

  if (slug === "ai-coding-stack") {
    return <AiCodingStackWorkflow />
  }

  if (slug === "ai-product-design") {
    return <AiProductDesignWorkflow />
  }

  if (slug === "ai-product-roadmap-review") {
    return <AiProductRoadmapReviewWorkflow />
  }

  if (slug === "ai-research-stack") {
    return <AiResearchStackWorkflow />
  }

  if (slug === "ai-user-persona-builder") {
    return <AiUserPersonaBuilderWorkflow />
  }

  if (slug === "customer-interview-synthesis-ai") {
    return <CustomerInterviewSynthesisAiWorkflow />
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
