import type { CSSProperties } from "react"

type CategoryThemeStyle = CSSProperties & {
  "--category-wash-a": string
  "--category-wash-a-dark": string
  "--category-wash-b": string
  "--category-wash-b-dark": string
  "--category-band": string
  "--category-pattern-x": string
  "--category-pattern-y": string
  "--category-pattern-size": string
  "--category-rule-size": string
  "--page-enter-blur": string
  "--page-enter-x": string
  "--page-enter-y": string
}

const categoryThemes = [
  {
    washA: "oklch(93% 0.04 184 / 0.72)",
    washADark: "oklch(34% 0.05 184 / 0.34)",
    washB: "oklch(92% 0.045 238 / 0.66)",
    washBDark: "oklch(34% 0.06 238 / 0.32)",
    band: "oklch(100% 0 0 / 0.52)",
  },
  {
    washA: "oklch(94% 0.045 142 / 0.68)",
    washADark: "oklch(34% 0.055 142 / 0.32)",
    washB: "oklch(93% 0.05 92 / 0.54)",
    washBDark: "oklch(36% 0.06 92 / 0.25)",
    band: "oklch(100% 0 0 / 0.46)",
  },
  {
    washA: "oklch(94% 0.035 310 / 0.62)",
    washADark: "oklch(34% 0.05 310 / 0.3)",
    washB: "oklch(92% 0.05 250 / 0.58)",
    washBDark: "oklch(34% 0.06 250 / 0.3)",
    band: "oklch(100% 0 0 / 0.5)",
  },
  {
    washA: "oklch(93% 0.055 34 / 0.54)",
    washADark: "oklch(36% 0.06 34 / 0.28)",
    washB: "oklch(94% 0.045 78 / 0.58)",
    washBDark: "oklch(36% 0.055 78 / 0.25)",
    band: "oklch(100% 0 0 / 0.44)",
  },
  {
    washA: "oklch(92% 0.045 210 / 0.64)",
    washADark: "oklch(34% 0.055 210 / 0.31)",
    washB: "oklch(94% 0.035 170 / 0.62)",
    washBDark: "oklch(34% 0.045 170 / 0.29)",
    band: "oklch(100% 0 0 / 0.5)",
  },
]

function hashSeed(seed: string) {
  return [...seed].reduce(
    (hash, character) => (hash * 31 + character.charCodeAt(0)) >>> 0,
    17
  )
}

export function getCategoryPageStyle(seed: string): CategoryThemeStyle {
  const hash = hashSeed(seed)
  const theme = categoryThemes[hash % categoryThemes.length]
  const patternSize = 152 + (hash % 4) * 16
  const ruleSize = 72 + ((hash >> 3) % 4) * 8
  const enterX = ((hash >> 5) % 5) - 2
  const enterY = 10 + ((hash >> 7) % 4) * 3

  return {
    "--category-wash-a": theme.washA,
    "--category-wash-a-dark": theme.washADark,
    "--category-wash-b": theme.washB,
    "--category-wash-b-dark": theme.washBDark,
    "--category-band": theme.band,
    "--category-pattern-x": `${16 + (hash % 5) * 10}px`,
    "--category-pattern-y": `${8 + ((hash >> 4) % 5) * 8}px`,
    "--category-pattern-size": `${patternSize}px ${patternSize}px`,
    "--category-rule-size": `${ruleSize}px`,
    "--page-enter-blur": `${2 + (hash % 3)}px`,
    "--page-enter-x": `${enterX * 5}px`,
    "--page-enter-y": `${enterY}px`,
  }
}
