import { notFound } from "next/navigation"
import type { Metadata } from "next"

import { statesData } from "@/data/states"
import { industries } from "@/data/industries"

export async function generateMetadata({
  params,
}: {
  params: { state: string; industry: string }
}): Promise<Metadata> {

  const stateSlug = params.state.toLowerCase()
  const industrySlug = params.industry.toLowerCase()

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
    title: `${industryData.name} License Requirements in ${stateData.name} (2026 Guide)`,
    description: `Learn the licensing requirements for ${industryData.name.toLowerCase()} businesses in ${stateData.name}. Includes permits, compliance rules, and regulatory agencies.`,
  }
}

export default function IndustryLicensePage({
  params,
}: {
  params: { state: string; industry: string }
}) {

  const stateSlug = params.state.toLowerCase()
  const industrySlug = params.industry.toLowerCase()

  const stateData = statesData.find(
    (s) => s.slug.toLowerCase() === stateSlug
  )

  const industryData = industries.find(
    (i) => i.slug.toLowerCase() === industrySlug
  )

  if (!stateData || !industryData) {
    return notFound()
  }

  return (

    <main className="min-h-screen bg-black text-white">

      <section className="max-w-6xl mx-auto px-8 py-20">

        <p className="text-sm text-gray-400 mb-6 uppercase tracking-wide">
          United States • {stateData.name} • {industryData.name}
        </p>

        <h1 className="text-4xl md:text-5xl font-bold mb-8">
          {industryData.name} License Requirements in {stateData.name}
        </h1>

        <p className="text-gray-400 max-w-3xl mb-12">
          Businesses operating in the {industryData.name.toLowerCase()} industry in {stateData.name} may need to obtain
          specific licenses, permits, and regulatory approvals before legally operating. Requirements can vary by city,
          county, and state authority.
        </p>

        {/* Licensing Overview */}

        <div className="bg-zinc-900 border border-gray-800 rounded-xl p-8 mb-12">

          <h2 className="text-2xl font-semibold mb-4">
            Licensing Overview
          </h2>

          <p className="text-gray-400">
            In {stateData.name}, {industryData.name.toLowerCase()} businesses may require professional licenses,
            contractor registration, or trade-specific certifications depending on the services offered and the
            regulatory authority overseeing the industry.
          </p>

        </div>

        {/* Common Licensing Authorities */}

        <div className="bg-zinc-900 border border-gray-800 rounded-xl p-8 mb-12">

          <h2 className="text-2xl font-semibold mb-6">
            Common Licensing Authorities
          </h2>

          <ul className="list-disc pl-6 text-gray-400 space-y-2">
            <li>{stateData.name} State Licensing Boards</li>
            <li>{stateData.name} Department of Business Regulation</li>
            <li>City or County Business Licensing Offices</li>
            <li>Industry-specific regulatory agencies</li>
          </ul>

        </div>

        {/* Typical Requirements */}

        <div className="bg-zinc-900 border border-gray-800 rounded-xl p-8 mb-12">

          <h2 className="text-2xl font-semibold mb-6">
            Typical Licensing Requirements
          </h2>

          <ul className="list-disc pl-6 text-gray-400 space-y-2">
            <li>Business registration with the state</li>
            <li>Professional or trade license</li>
            <li>Insurance coverage</li>
            <li>Local business permit</li>
            <li>Compliance inspections</li>
          </ul>

        </div>

        {/* Compliance Notice */}

        <div className="bg-zinc-900 border border-gray-800 rounded-xl p-8">

          <h2 className="text-2xl font-semibold mb-4">
            Compliance Considerations
          </h2>

          <p className="text-gray-400">
            Licensing rules for {industryData.name.toLowerCase()} businesses in {stateData.name} may change over time.
            Always verify requirements with state licensing boards or local authorities before starting operations.
          </p>

        </div>

      </section>

    </main>
  )
}