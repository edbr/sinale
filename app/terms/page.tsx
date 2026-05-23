import type { Metadata } from "next"

import { pageMetadata } from "@/lib/seo"

export const metadata: Metadata = pageMetadata({
  title: "Terms of Service | Sinale",
  description:
    "Read the Sinale terms of service for website use, content accuracy, affiliate relationships, and third-party links.",
  path: "/terms",
})

const terms = [
  {
    title: "1. Website Purpose",
    body: [
      "Sinale provides reviews, comparisons, workflows, educational content, and commentary related to artificial intelligence tools, software products, productivity systems, and technology.",
      "All content is provided for informational and educational purposes only.",
    ],
  },
  {
    title: "2. No Professional Advice",
    body: [
      "The information published on Sinale does not constitute legal, financial, investment, tax, medical, or professional advice.",
      "You should independently evaluate products and services before making purchasing or business decisions.",
      "Any actions you take based on information found on this website are your responsibility.",
    ],
  },
  {
    title: "3. Content Accuracy",
    body: [
      "We strive to provide accurate and up-to-date information.",
      "However, software products, pricing, features, integrations, and company policies change frequently.",
      "Sinale makes no guarantees regarding accuracy, completeness, reliability, availability, or suitability of any information published on the site.",
    ],
  },
  {
    title: "4. Affiliate Relationships",
    body: [
      "Some links on Sinale may be affiliate links.",
      "If you click an affiliate link and purchase a product or service, Sinale may earn a commission at no additional cost to you.",
      "Affiliate partnerships do not influence editorial opinions or recommendations.",
      "For additional information, please review our Affiliate Disclosure page.",
    ],
  },
  {
    title: "5. Third-Party Websites",
    body: [
      "Sinale may link to third-party websites, products, or services.",
      "We are not responsible for third-party content, privacy practices, product quality, pricing, availability, or security.",
      "Your interactions with third-party websites are governed by their own terms and policies.",
    ],
  },
  {
    title: "6. Intellectual Property",
    body: [
      "Unless otherwise stated, all content on Sinale, including text, graphics, branding, logos, articles, and original materials, is the property of Sinale and its author.",
      "You may view content, share links, and quote brief excerpts with attribution.",
      "You may not republish entire articles, reproduce content for commercial purposes, or copy substantial portions of content without permission.",
    ],
  },
  {
    title: "7. User Conduct",
    body: [
      "When interacting with Sinale, you agree not to violate applicable laws, attempt unauthorized access to systems, distribute malicious software, interfere with website functionality, or submit fraudulent or misleading information.",
    ],
  },
  {
    title: "8. Limitation of Liability",
    body: [
      "To the maximum extent permitted by law, Sinale and its owner shall not be liable for any direct, indirect, incidental, consequential, or special damages arising from use of the website, reliance on website content, third-party products or services, website interruptions, or errors.",
      "Use of the website is at your own risk.",
    ],
  },
  {
    title: "9. Changes to These Terms",
    body: [
      "We may update these Terms of Service periodically.",
      "Changes become effective immediately upon publication on this page.",
      "Continued use of the website constitutes acceptance of any revised terms.",
    ],
  },
]

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <article className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <p className="mb-4 text-sm font-medium text-muted-foreground">
          Last updated: May 2026
        </p>
        <h1 className="text-5xl font-heading font-extrabold leading-[0.95] tracking-[-0.05em] md:text-7xl">
          Terms of Service
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          Welcome to Sinale. By accessing or using this website, you agree to
          the following terms and conditions.
        </p>
        <p className="mt-4 text-lg leading-8 text-muted-foreground">
          If you do not agree with these terms, please do not use the website.
        </p>

        <div className="mt-10 grid gap-8 text-base leading-7 text-muted-foreground">
          {terms.map((term) => (
            <section key={term.title}>
              <h2 className="text-2xl font-semibold text-foreground">
                {term.title}
              </h2>
              {term.body.map((paragraph) => (
                <p key={paragraph} className="mt-3">
                  {paragraph}
                </p>
              ))}
            </section>
          ))}

          <section>
            <h2 className="text-2xl font-semibold text-foreground">
              10. Contact
            </h2>
            <p className="mt-3">
              Questions regarding these Terms of Service may be directed to:{" "}
              <a
                className="font-medium text-foreground"
                href="mailto:eduardo@sinale.cc"
              >
                eduardo@sinale.cc
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">
              About Sinale
            </h2>
            <p className="mt-3">
              Sinale is an independent publication dedicated to helping
              developers, designers, product managers, analysts, and founders
              discover and evaluate AI tools through reviews, comparisons,
              workflows, and practical guides.
            </p>
          </section>
        </div>
      </article>
    </main>
  )
}
