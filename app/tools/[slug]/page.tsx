import { ArticlePage } from "@/app/article-page"
import { pageMetadata } from "@/lib/seo"
import { getToolBySlug, toolDirectory } from "@/lib/site-content"
import { DecktopusToolPage } from "./decktopus"
import { HelpscoutAiToolPage } from "./helpscout-ai"
import { OpusClipToolPage } from "./opus-clip"
import { ReplitToolPage } from "./replit"

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
    title:
      slug === "helpscout-ai"
        ? "Help Scout AI | Sinale"
        : slug === "decktopus"
          ? "Decktopus | Sinale"
        : slug === "opus-clip"
          ? "Opus Clip | Sinale"
        : slug === "replit"
          ? "Replit | Sinale"
        : item
          ? `${item.name} | Sinale`
          : "AI Tool | Sinale",
    description:
      slug === "helpscout-ai"
        ? "Help Scout AI guide for support agents, helpdesk automation, customer service AI, and deflection."
        : slug === "decktopus"
          ? "Decktopus guide for AI deck generation, visual storytelling, slides, and executive presentations."
        : slug === "opus-clip"
          ? "Opus Clip guide for video generation, editing, clips, captions, and creative repurposing workflows."
        : slug === "replit"
          ? "Replit guide for AI app building, browser-based coding, prototypes, deployments, and Replit Agent."
        : (item?.description ??
          "Explore practical AI tool recommendations, workflows, reviews, and comparisons."),
    path: `/tools/${slug}`,
  })
}

export default async function ToolPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  if (slug === "helpscout-ai") {
    const currentIndex = toolDirectory.findIndex((tool) => tool.slug === slug)
    const relatedItems = [...toolDirectory.slice(currentIndex + 1), ...toolDirectory]
      .filter((tool) => tool.slug !== slug)
      .slice(0, 3)
      .map((tool) => ({
        title: tool.title,
        description: tool.description,
        href: tool.href,
      }))

    return <HelpscoutAiToolPage relatedItems={relatedItems} />
  }

  if (slug === "decktopus") {
    const currentIndex = toolDirectory.findIndex((tool) => tool.slug === slug)
    const relatedItems = [...toolDirectory.slice(currentIndex + 1), ...toolDirectory]
      .filter((tool) => tool.slug !== slug)
      .slice(0, 3)
      .map((tool) => ({
        title: tool.title,
        description: tool.description,
        href: tool.href,
      }))

    return <DecktopusToolPage relatedItems={relatedItems} />
  }

  if (slug === "opus-clip") {
    const currentIndex = toolDirectory.findIndex((tool) => tool.slug === slug)
    const relatedItems = [...toolDirectory.slice(currentIndex + 1), ...toolDirectory]
      .filter((tool) => tool.slug !== slug)
      .slice(0, 3)
      .map((tool) => ({
        title: tool.title,
        description: tool.description,
        href: tool.href,
      }))

    return <OpusClipToolPage relatedItems={relatedItems} />
  }

  if (slug === "replit") {
    const currentIndex = toolDirectory.findIndex((tool) => tool.slug === slug)
    const relatedItems = [...toolDirectory.slice(currentIndex + 1), ...toolDirectory]
      .filter((tool) => tool.slug !== slug)
      .slice(0, 3)
      .map((tool) => ({
        title: tool.title,
        description: tool.description,
        href: tool.href,
      }))

    return <ReplitToolPage relatedItems={relatedItems} />
  }

  return (
    <ArticlePage
      items={toolDirectory.map((tool) => ({
        title: tool.title,
        description: tool.description,
        href: tool.href,
      }))}
      params={Promise.resolve({ slug })}
      parentHref="/tools"
      parentLabel="Tools"
    />
  )
}
