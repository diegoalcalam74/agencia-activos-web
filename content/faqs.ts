export function faqs(state: string, industry: string) {

  return [
    {
      question: `Do I need a permit to start a ${industry} in ${state}?`,
      answer: `Yes. Most businesses require a general business license and local permits depending on the city.`
    },
    {
      question: `How long does it take to obtain permits in ${state}?`,
      answer: `Permit approval times vary by city but typically range from a few days to several weeks.`
    },
    {
      question: `What is the cost of permits for a ${industry} in ${state}?`,
      answer: `Costs vary but most businesses spend between $200 and $2000 depending on requirements.`
    }
  ]

}