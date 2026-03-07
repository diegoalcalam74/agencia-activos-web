import { permitIntents } from "@/data/permit-intents"
import { industries } from "@/data/industries"
import { states } from "@/data/states"
import { notFound } from "next/navigation"

type Props = {
  params: {
    state: string
    industry: string
    intent: string
  }
}

export async function generateStaticParams() {
  const params = []

  for (const state of states) {
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

export default function IntentPage({ params }: Props) {
  const state = states.find(s => s.slug === params.state)
  const industry = industries.find(i => i.slug === params.industry)
  const intent = permitIntents.find(i => i.slug === params.intent)

  if (!state || !industry || !intent) {
    return notFound()
  }

  return (
    <main style={{ maxWidth: "900px", margin: "0 auto", padding: "40px" }}>
      <h1>
        {industry.name} {intent.title} in {state.name}
      </h1>

      <p style={{ marginTop: "20px" }}>
        {intent.description}
      </p>

      <section style={{ marginTop: "40px" }}>
        <h2>Overview</h2>

        <p>
          If you plan to operate a {industry.name.toLowerCase()} business in {state.name},
          you must understand the licensing process, regulatory requirements,
          and associated costs.
        </p>

        <p>
          This page explains {intent.title.toLowerCase()} for {industry.name.toLowerCase()} businesses in {state.name}.
        </p>
      </section>
    </main>
  )
}