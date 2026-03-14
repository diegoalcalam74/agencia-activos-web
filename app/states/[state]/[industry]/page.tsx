import { notFound } from "next/navigation"
import Link from "next/link"
import type { Metadata } from "next"

import { statesData } from "@/data/states"
import { industries } from "@/data/industries"

const intents = [
  { slug: "permits", name: "Permits" },
  { slug: "licenses", name: "Licenses" },
  { slug: "cost", name: "Costs" },
  { slug: "requirements", name: "Requirements" },
  { slug: "how-to-start", name: "How to Start" },
]

export async function generateStaticParams() {
  const params = []

  for (const state of statesData) {
    for (const industry of industries) {
      params.push({
        state: state.slug,
        industry: industry.slug,
      })
    }
  }

  return params
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ state: string; industry: string }>
}): Promise<Metadata> {

  const { state, industry } = await params

  const stateSlug = state.toLowerCase()
  const industrySlug = industry.toLowerCase()

  const stateData = statesData.find(
    (s) => s.slug.toLowerCase() === stateSlug
  )

  const industryData = industries.find(
    (i) => i.slug.toLowerCase() === industrySlug
  )

  if (!stateData || !industryData) {
    return {}
  }

  return {
    title: `${industryData.name} Permits & Licensing in ${stateData.name} (2026 Guide)`,
    description: `Complete guide to ${industryData.name.toLowerCase()} permits, licensing requirements, regulatory costs, and compliance rules in ${stateData.name}.`
  }
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ state: string; industry: string }>
}) {

  const { state, industry } = await params

  const stateSlug = state.toLowerCase()
  const industrySlug = industry.toLowerCase()

  const stateData = statesData.find(
    (s) => s.slug.toLowerCase() === stateSlug
  )

  if (!stateData) {
    return notFound()
  }

  const industryData = industries.find(
    (i) => i.slug.toLowerCase() === industrySlug
  )

  if (!industryData) {
    return notFound()
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="max-w-6xl mx-auto px-8 py-20">

        <p className="text-sm text-gray-400 mb-6 uppercase tracking-wide">
          United States • {stateData.name} • {industryData.name}
        </p>

        <h1 className="text-4xl md:text-5xl font-bold mb-8">
          {industryData.name} Permits & Licensing in {stateData.name}
        </h1>

        <p className="text-gray-400 max-w-3xl mb-12">
          {industryData.overview}
        </p>

        {/* INTENTS */}

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-16">

          {intents.map((intent) => (

            <Link
              key={intent.slug}
              href={`/states/${stateSlug}/${industrySlug}/${intent.slug}`}
              className="border border-gray-700 rounded-lg p-4 hover:border-white transition"
            >

              <h3 className="text-lg font-medium">
                {intent.name}
              </h3>

              <p className="text-sm text-gray-400">
                View guide
              </p>

            </Link>

          ))}

        </div>

        {/* PERMITS */}

        <div className="bg-zinc-900 border border-gray-800 rounded-xl p-8 mb-12">

          <h2 className="text-2xl font-semibold mb-6">
            Typical Permits & Requirements
          </h2>

          {industryData.typicalPermits ? (

            <ul className="list-disc pl-6 text-gray-400 space-y-2">
              {industryData.typicalPermits.map((permit, index) => (
                <li key={index}>{permit}</li>
              ))}
            </ul>

          ) : (

            <p className="text-gray-400">
              Permit requirements vary by state and municipality.
            </p>

          )}

        </div>

        {/* COSTS */}

        <div className="bg-zinc-900 border border-gray-800 rounded-xl p-8 mb-12">

          <h2 className="text-2xl font-semibold mb-4">
            Estimated Licensing Costs
          </h2>

          <p className="text-gray-400">
            {industryData.estimatedCosts ?? "Costs vary depending on permits required by local and state authorities."}
          </p>

        </div>

        {/* COMMON LICENSES */}

        <div className="bg-zinc-900 border border-gray-800 rounded-xl p-8 mb-12">

          <h2 className="text-2xl font-semibold mb-6">
            Common Licenses
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {(industryData.commonLicenses ?? []).map((license, index) => (

              <div
                key={index}
                className="border border-gray-700 rounded-lg p-4"
              >

                <h3 className="font-medium mb-2">
                  {license.license}
                </h3>

                <p className="text-sm text-gray-400">
                  Cost: {license.cost}
                </p>

                <p className="text-sm text-gray-400">
                  Processing time: {license.processingTime}
                </p>

              </div>

            ))}

          </div>

        </div>

        {/* STATE OVERVIEW */}

        <div className="bg-zinc-900 border border-gray-800 rounded-xl p-8 mb-12">

          <h2 className="text-2xl font-semibold mb-4">
            {stateData.name} Regulatory Overview
          </h2>

          <p className="text-gray-400 mb-4">
            {stateData.executiveSummary}
          </p>

          <p className="text-gray-400">
            <strong>Compliance Risk:</strong> {stateData.complianceRisks}
          </p>

        </div>

        {/* FAQ */}

        <div className="bg-zinc-900 border border-gray-800 rounded-xl p-8">

          <h2 className="text-2xl font-semibold mb-6">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">

            {(industryData.faqs ?? []).map((faq, index) => (

              <div key={index}>

                <h3 className="font-medium mb-2">
                  {faq.question}
                </h3>

                <p className="text-gray-400">
                  {faq.answer}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>
    </main>
  )
}