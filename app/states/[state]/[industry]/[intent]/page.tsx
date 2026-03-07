export const dynamicParams = true

import { permitIntents } from "@/data/permit-intents"
import { industries } from "@/data/industries"
import { states } from "@/data/states"
import { notFound } from "next/navigation"

type PageProps = {
  params: {
    state: string
    industry: string
    intent: string
  }
}

export default function IntentPage({ params }: PageProps) {
  const stateData = states.find((s) => s.slug === params.state)
  const industryData = industries.find((i) => i.slug === params.industry)
  const intentData = permitIntents.find((i) => i.slug === params.intent)

  if (!stateData || !industryData || !intentData) {
    notFound()
  }

  return (
    <main
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "40px",
        color: "white"
      }}
    >
      <h1>
        {industryData.name} {intentData.title} in {stateData.name}
      </h1>

      <p style={{ marginTop: "20px", fontSize: "18px" }}>
        {intentData.description}
      </p>

      <section style={{ marginTop: "40px" }}>
        <h2>Overview</h2>

        <p>
          If you plan to operate a{" "}
          {industryData.name.toLowerCase()} business in{" "}
          {stateData.name}, you must understand the licensing process,
          regulatory requirements, and associated costs.
        </p>

        <p>
          This page provides guidance about{" "}
          {intentData.title.toLowerCase()} for{" "}
          {industryData.name.toLowerCase()} businesses in{" "}
          {stateData.name}.
        </p>

        <p>
          Regulations, licensing procedures, and processing timelines can
          vary depending on the jurisdiction and the type of activity
          performed within the industry.
        </p>

        <p>
          Always consult the official state licensing authority or local
          government office to confirm the most up-to-date information.
        </p>
      </section>
    </main>
  )
}