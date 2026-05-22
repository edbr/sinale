import { SectionPage } from "@/app/section-page"
import { developerGuides, rolePages } from "@/lib/site-content"

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
