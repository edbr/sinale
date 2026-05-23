import { SectionPage } from "@/app/section-page"
import { pageMetadata } from "@/lib/seo"
import { developerGuides, rolePages } from "@/lib/site-content"

export const metadata = pageMetadata({
  title: "AI Tools for Developers | Sinale",
  description:
    "Explore AI coding assistants, agents, debugging tools, app builders, and developer workflows for modern software teams.",
  path: "/developers",
})

export default function DevelopersPage() {
  return (
    <SectionPage
      eyebrow="Role Guide"
      {...rolePages.developers}
      items={developerGuides}
      showRoleBrowse
    />
  )
}
