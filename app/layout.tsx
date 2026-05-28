import type { Metadata } from "next";
import {  Inter, Manrope, Geist_Mono } from "next/font/google";
import { SiteFooter } from "@/components/site/footer";
import { SiteHeader } from "@/components/site/header";
import { InternalLinkGrid } from "@/components/site/internal-link-grid";
import { NewsletterCta } from "@/components/site/newsletter-cta";
import { NextRelatedContent } from "@/components/site/next-related-content";
import { WebMcpTools } from "@/components/site/webmcp-tools";
import { pageMetadata } from "@/lib/seo";
import "./globals.css";
import { GoogleAnalytics } from "@/components/google-analytics"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sinale.cc"),
  ...pageMetadata({
    title: "Sinale",
    description: "AI tools, SaaS software, and founder resources.",
    path: "/",
  }),
};

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${manrope.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <WebMcpTools />
        <SiteHeader />
        <div className="flex-1">{children}</div>
        <NextRelatedContent />
        <InternalLinkGrid />
        <NewsletterCta />
        <SiteFooter />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
