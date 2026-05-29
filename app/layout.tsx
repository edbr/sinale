import type { Metadata } from "next"
import { Inter, Manrope, Geist_Mono } from "next/font/google"

import { GoogleAnalytics } from "@/components/google-analytics"
import { MicrosoftClarity } from "@/components/microsoft-clarity"
import { SiteFooter } from "@/components/site/footer"
import { SiteHeader } from "@/components/site/header"
import { InternalLinkGrid } from "@/components/site/internal-link-grid"
import { NewsletterCta } from "@/components/site/newsletter-cta"
import { NextRelatedContent } from "@/components/site/next-related-content"
import { WebMcpTools } from "@/components/site/webmcp-tools"
import { pageMetadata } from "@/lib/seo"

import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-heading",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sinale.cc"),

  ...pageMetadata({
    title: "Sinale | Software Reviews, Comparisons & Workflow Analysis",
    description:
      "Independent reviews, comparisons, and workflow guides for AI tools, SaaS software, and modern technology stacks.",
    path: "/",
  }),

  verification: {
    other: {
      "impact-site-verification":
        "1321ef41-cba2-4dc3-8aec-58d8baf072d1",

      // Replace this with your actual Semrush verification token/name if needed.
      "semrush-site-verification": "YOUR_SEMRUSH_VERIFICATION_CODE",
    },
  },

  openGraph: {
    title: "Sinale | Software Reviews, Comparisons & Workflow Analysis",
    description:
      "Independent reviews, comparisons, and workflow guides for AI tools, SaaS software, and modern technology stacks.",
    url: "https://www.sinale.cc",
    siteName: "Sinale",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Sinale | Software Reviews, Comparisons & Workflow Analysis",
    description:
      "Independent reviews, comparisons, and workflow guides for AI tools, SaaS software, and modern technology stacks.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${manrope.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <WebMcpTools />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <NextRelatedContent />
        <InternalLinkGrid />
        <NewsletterCta />
        <SiteFooter />
        <GoogleAnalytics />
        <MicrosoftClarity />
      </body>
    </html>
  )
}