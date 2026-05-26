import type { MetadataRoute } from "next"

import { articles } from "@/lib/articles"
import {
  bestOfGuides,
  comparisons,
  designerGuides,
  developerGuides,
  founderGuides,
  productManagerGuides,
  reviews,
  toolDirectory,
  workflows,
} from "@/lib/site-content"

const baseUrl = "https://www.sinale.cc"
const lastModified = new Date("2026-05-26")

const staticRoutes = [
  "/",
  "/about",
  "/analytics",
  "/articles",
  "/best",
  "/comparisons",
  "/contact",
  "/designers",
  "/developers",
  "/disclosure",
  "/founders",
  "/privacy",
  "/product-managers",
  "/reviews",
  "/search",
  "/terms",
  "/tools",
  "/workflows",
]

export default function sitemap(): MetadataRoute.Sitemap {
  const contentRoutes = [
    ...articles.map((article) => `/articles/${article.slug}`),
    ...bestOfGuides.map((item) => item.href),
    ...comparisons.map((item) => item.href),
    ...designerGuides.map((item) => item.href),
    ...developerGuides.map((item) => item.href),
    ...founderGuides.map((item) => item.href),
    ...productManagerGuides.map((item) => item.href),
    ...reviews.map((item) => item.href),
    ...toolDirectory.map((tool) => tool.href),
    ...workflows.map((item) => item.href),
  ]

  const routes = Array.from(new Set([...staticRoutes, ...contentRoutes]))

  return routes.map((route) => ({
    url: `${baseUrl}${route === "/" ? "" : route}`,
    lastModified,
  }))
}
