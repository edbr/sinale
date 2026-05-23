import type { Metadata } from "next"

type PageMetadataInput = {
  title: string
  description: string
  path: string
  index?: boolean
}

export function pageMetadata({
  title,
  description,
  path,
  index = true,
}: PageMetadataInput): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    robots: {
      index,
      follow: true,
    },
    openGraph: {
      title,
      description,
      url: path,
      siteName: "Sinale",
      type: "website",
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  }
}
