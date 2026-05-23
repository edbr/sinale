import { SectionPage } from "@/app/section-page"
import { pageMetadata } from "@/lib/seo"
import { rolePages } from "@/lib/site-content"

export const metadata = pageMetadata({
  title: "AI Tools for Data & Analytics | Sinale",
  description:
    "Explore AI tools for SQL, business intelligence, notebooks, dashboards, analytics workflows, and data exploration.",
  path: "/analytics",
})

export default function AnalyticsPage() {
  return (
    <SectionPage
      eyebrow="Role Guide"
      {...rolePages.analytics}
      showRoleBrowse
    />
  )
}
