export function pickVariation(variations: string[], state: string, industry: string) {

  const seed = state.length + industry.length

  const index = seed % variations.length

  return variations[index]

}


export function renderTemplate(text: string, state: string, industry: string) {

  return text
    .replaceAll("{state}", state)
    .replaceAll("{industry}", industry)

}