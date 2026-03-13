import { introVariations } from "@/content/variations/introVariations"
import { pickVariation, renderTemplate } from "@/lib/contentEngine"

export function intro(state: string, industry: string) {

  const template = pickVariation(introVariations, state, industry)

  const text = renderTemplate(template, state, industry)

  return text

}