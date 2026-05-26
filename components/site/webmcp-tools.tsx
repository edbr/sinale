"use client"

import { useEffect } from "react"

type JsonSchema = {
  type: "object"
  properties: Record<string, unknown>
  required?: string[]
}

type SinaleTool = {
  name: string
  description: string
  inputSchema: JsonSchema
  readOnly: boolean
  execute: (args: Record<string, unknown>) => string | Promise<string>
}

type ModelContext = {
  registerTool: (
    tool: {
      name: string
      description: string
      inputSchema: JsonSchema
      annotations?: {
        readOnlyHint?: boolean
        untrustedContentHint?: boolean
      }
      execute: (args: Record<string, unknown>) => string | Promise<string>
    },
    options?: { signal?: AbortSignal }
  ) => void
}

type LegacyWebMcp = {
  registerTool: (
    name: string,
    description: string,
    inputSchema: Record<string, unknown>,
    execute: (args: Record<string, unknown>) => unknown
  ) => void
}

type LegacyWebMcpConstructor = new (options?: {
  color?: string
  position?: string
  size?: string
  padding?: string
}) => LegacyWebMcp

declare global {
  interface Navigator {
    modelContext?: ModelContext
  }

  interface Window {
    WebMCP?: LegacyWebMcpConstructor
    __sinaleWebMcpRegistered?: boolean
    __sinaleLegacyWebMcpRegistered?: boolean
  }
}

const sectionPaths = {
  home: "/",
  search: "/search",
  tools: "/tools",
  reviews: "/reviews",
  comparisons: "/comparisons",
  workflows: "/workflows",
  best: "/best",
  designers: "/designers",
  developers: "/developers",
  productManagers: "/product-managers",
  founders: "/founders",
  analytics: "/analytics",
  newsletter: "https://sinale.beehiiv.com/subscribe",
} as const

const tools: SinaleTool[] = [
  {
    name: "get_current_page_context",
    description:
      "Return the current Sinale page title, description, URL, main headings, and visible article text excerpt.",
    inputSchema: {
      type: "object",
      properties: {},
    },
    readOnly: true,
    execute: () => {
      const title = document.title
      const description =
        document
          .querySelector<HTMLMetaElement>('meta[name="description"]')
          ?.getAttribute("content") ?? ""
      const headings = Array.from(
        document.querySelectorAll<HTMLHeadingElement>("h1, h2, h3")
      )
        .map((heading) => heading.textContent?.trim())
        .filter(Boolean)
        .slice(0, 18)
      const mainText =
        document.querySelector("main")?.textContent?.replace(/\s+/g, " ").trim() ??
        ""

      return JSON.stringify(
        {
          title,
          description,
          url: window.location.href,
          headings,
          excerpt: mainText.slice(0, 3000),
        },
        null,
        2
      )
    },
  },
  {
    name: "search_sinale",
    description:
      "Navigate to Sinale search results for AI tools, reviews, comparisons, workflows, and best-of guides.",
    inputSchema: {
      type: "object",
      properties: {
        query: {
          type: "string",
          description: "Search phrase, such as 'meeting assistants' or 'Cursor vs Copilot'.",
        },
      },
      required: ["query"],
    },
    readOnly: false,
    execute: ({ query }) => {
      const searchQuery = typeof query === "string" ? query.trim() : ""

      if (!searchQuery) {
        return "Please provide a non-empty search query."
      }

      const url = `/search?q=${encodeURIComponent(searchQuery)}`
      window.location.assign(url)

      return `Navigating to Sinale search results for "${searchQuery}".`
    },
  },
  {
    name: "open_sinale_section",
    description:
      "Navigate to a major Sinale section such as tools, reviews, comparisons, workflows, role guides, or newsletter signup.",
    inputSchema: {
      type: "object",
      properties: {
        section: {
          type: "string",
          enum: Object.keys(sectionPaths),
          description: "The Sinale section to open.",
        },
      },
      required: ["section"],
    },
    readOnly: false,
    execute: ({ section }) => {
      if (typeof section !== "string" || !(section in sectionPaths)) {
        return `Unknown section. Choose one of: ${Object.keys(sectionPaths).join(", ")}.`
      }

      const target = sectionPaths[section as keyof typeof sectionPaths]
      window.location.assign(target)

      return `Navigating to ${section}.`
    },
  },
]

function registerNativeWebMcp() {
  if (!navigator.modelContext || window.__sinaleWebMcpRegistered) return

  const controller = new AbortController()

  for (const tool of tools) {
    navigator.modelContext.registerTool(
      {
        name: tool.name,
        description: tool.description,
        inputSchema: tool.inputSchema,
        annotations: {
          readOnlyHint: tool.readOnly,
          untrustedContentHint: true,
        },
        execute: tool.execute,
      },
      { signal: controller.signal }
    )
  }

  window.__sinaleWebMcpRegistered = true
}

function registerLegacyWebMcp() {
  if (!window.WebMCP || window.__sinaleLegacyWebMcpRegistered) return

  const mcp = new window.WebMCP({
    color: "#111827",
    position: "bottom-right",
    size: "40px",
    padding: "16px",
  })

  for (const tool of tools) {
    mcp.registerTool(
      tool.name,
      tool.description,
      tool.inputSchema.properties,
      async (args) => ({
        content: [
          {
            type: "text",
            text: await tool.execute(args),
          },
        ],
      })
    )
  }

  window.__sinaleLegacyWebMcpRegistered = true
}

export function WebMcpTools() {
  useEffect(() => {
    registerNativeWebMcp()
    registerLegacyWebMcp()
  }, [])

  return null
}
