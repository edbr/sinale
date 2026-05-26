"use client"

import { useEffect, useRef } from "react"
import { usePathname } from "next/navigation"

const giscusConfig = {
  repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
  repoId: process.env.NEXT_PUBLIC_GISCUS_REPO_ID,
  category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
  categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
  mapping: process.env.NEXT_PUBLIC_GISCUS_MAPPING ?? "pathname",
  strict: process.env.NEXT_PUBLIC_GISCUS_STRICT ?? "0",
  reactionsEnabled: process.env.NEXT_PUBLIC_GISCUS_REACTIONS_ENABLED ?? "1",
  emitMetadata: process.env.NEXT_PUBLIC_GISCUS_EMIT_METADATA ?? "0",
  inputPosition: process.env.NEXT_PUBLIC_GISCUS_INPUT_POSITION ?? "bottom",
  theme: process.env.NEXT_PUBLIC_GISCUS_THEME ?? "preferred_color_scheme",
  lang: process.env.NEXT_PUBLIC_GISCUS_LANG ?? "en",
  loading: process.env.NEXT_PUBLIC_GISCUS_LOADING ?? "lazy",
}

const isConfigured = Boolean(
  giscusConfig.repo &&
    giscusConfig.repoId &&
    giscusConfig.category &&
    giscusConfig.categoryId,
)

export function GiscusComments() {
  const pathname = usePathname()
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    const { repo, repoId, category, categoryId } = giscusConfig

    if (!container || !repo || !repoId || !category || !categoryId) {
      return
    }

    container.replaceChildren()

    const script = document.createElement("script")
    script.src = "https://giscus.app/client.js"
    script.async = true
    script.crossOrigin = "anonymous"
    script.setAttribute("data-repo", repo)
    script.setAttribute("data-repo-id", repoId)
    script.setAttribute("data-category", category)
    script.setAttribute("data-category-id", categoryId)
    script.setAttribute("data-mapping", giscusConfig.mapping)
    script.setAttribute("data-strict", giscusConfig.strict)
    script.setAttribute(
      "data-reactions-enabled",
      giscusConfig.reactionsEnabled,
    )
    script.setAttribute("data-emit-metadata", giscusConfig.emitMetadata)
    script.setAttribute("data-input-position", giscusConfig.inputPosition)
    script.setAttribute("data-theme", giscusConfig.theme)
    script.setAttribute("data-lang", giscusConfig.lang)
    script.setAttribute("data-loading", giscusConfig.loading)

    container.append(script)

    return () => {
      container.replaceChildren()
    }
  }, [pathname])

  if (!isConfigured) {
    return null
  }

  return (
    <section className="mt-14 border-t pt-10" aria-labelledby="comments-title">
      <h2 id="comments-title" className="text-2xl font-semibold tracking-tight">
        Comments
      </h2>
      <div ref={containerRef} className="giscus mt-6" />
    </section>
  )
}
