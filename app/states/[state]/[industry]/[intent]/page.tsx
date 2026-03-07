import { notFound } from "next/navigation"
import { statesData } from "@/data/states"
import { industries } from "@/data/industries"
import { permitIntents } from "@/data/permit-intents"

export async function generateStaticParams() {
  const params = []

  for (const state of statesData) {
    for (const industry of industries) {
      for (const intent of permitIntents) {
        params.push({
          state: state.slug,
          industry: industry.slug,
          intent: intent.slug
        })
      }
    }
  }

  return params
}

export default async function PermitIntentPage({
  params
}: {
  params: Promise<{ state: string; industry: string; intent: string }>
}) {

  const { state, industry, intent } = await params

  const stateData = statesData.find(
    (s) => s.slug === state
  )

  if (!stateData) return notFound()

  const industryData = industries.find(
    (i) => i.slug === industry
  )

  if (!industryData) return notFound()

  const intentData = permitIntents.find(
    (i) => i.slug === intent
  )

  if (!intentData) return notFound()

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="max-w-6xl mx-auto px-8 py-20">

        <p className="text-sm text-gray-400 mb-6 uppercase tracking-wide">
          United States • {stateData.name} • {industryData.name}
        </p>

        <h1 className="text-4xl md:text-5xl font-bold mb-8">
          {industryData.name} {intentData.title} in {stateData.name}
        </h1>

        <p className="text-gray-400 max-w-3xl mb-12">
          {intentData.description}
        </p>

        <div className="bg-zinc-900 border border-gray-800 rounded-xl p-8">

          <h2 className="text-2xl font-semibold mb-4">
            {industryData.name} Licensing Overview
          </h2>

          <p className="text-gray-400">
            {industryData.overview}
          </p>

        </div>

      </section>
    </main>
  )
}