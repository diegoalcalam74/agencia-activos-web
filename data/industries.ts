export type Industry = {
  name: string
  slug: string
  metaTitle: string
  metaDescription: string
  overview: string

  typicalPermits: string[]

  estimatedCosts: string

  commonLicenses: {
    license: string
    cost: string
    processingTime: string
  }[]

  faqs: {
    question: string
    answer: string
  }[]
}

import contractors from "./industries/contractors"

export const industries: Industry[] = [
  contractors
]