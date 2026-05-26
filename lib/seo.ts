import type { Metadata } from "next"

const siteName = "Sinale"
const siteUrl = "https://www.sinale.cc"
const ogImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "Sinale - AI tools, SaaS software, and founder resources",
}

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
      siteName,
      locale: "en_US",
      type: "website",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      site: siteUrl,
      images: [ogImage.url],
    },
  }
}
