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
import foodTrucks from "./industries/food-trucks"
import restaurants from "./industries/restaurants"

export const industries: Industry[] = [
  contractors,
  foodTrucks,
  restaurants
]