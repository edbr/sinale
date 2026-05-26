import { ImageResponse } from "next/og"

export const alt = "Sinale - AI tools, SaaS software, and founder resources"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#f8fafc",
          color: "#111827",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          padding: 72,
          width: "100%",
        }}
      >
        <div
          style={{
            background: "#ffffff",
            border: "1px solid #e5e7eb",
            borderRadius: 32,
            display: "flex",
            flexDirection: "column",
            gap: 36,
            height: "100%",
            justifyContent: "space-between",
            padding: 56,
            width: "100%",
          }}
        >
          <div
            style={{
              alignItems: "center",
              display: "flex",
              gap: 18,
            }}
          >
            <div
              style={{
                alignItems: "center",
                background: "#2563eb",
                borderRadius: 18,
                color: "#ffffff",
                display: "flex",
                fontSize: 34,
                fontWeight: 800,
                height: 64,
                justifyContent: "center",
                width: 64,
              }}
            >
              S
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 4,
              }}
            >
              <div style={{ fontSize: 34, fontWeight: 800 }}>Sinale</div>
              <div style={{ color: "#64748b", fontSize: 22 }}>
                AI tools, SaaS software, and founder resources
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 22,
            }}
          >
            <div
              style={{
                fontSize: 72,
                fontWeight: 800,
                letterSpacing: "-0.04em",
                lineHeight: 0.95,
                maxWidth: 900,
              }}
            >
              Find the right AI tools for the way you work.
            </div>
            <div
              style={{
                color: "#475569",
                fontSize: 28,
                lineHeight: 1.35,
                maxWidth: 820,
              }}
            >
              Practical reviews, workflows, and comparisons for builders,
              teams, and founders.
            </div>
          </div>

          <div
            style={{
              color: "#2563eb",
              display: "flex",
              fontSize: 24,
              fontWeight: 700,
              justifyContent: "space-between",
            }}
          >
            <span>Reviews</span>
            <span>Comparisons</span>
            <span>Workflows</span>
            <span>Tools</span>
          </div>
        </div>
      </div>
    ),
    size
  )
}
