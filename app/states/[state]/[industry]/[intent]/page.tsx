import { notFound } from "next/navigation"

import { intro } from "@/content/intro"
import { requirements } from "@/content/requirements"
import { costs } from "@/content/costs"
import { faqs } from "@/content/faqs"

type PageProps = {
  params: Promise<{
    state: string
    industry: string
    intent: string
  }>
}

export default async function IntentPage({ params }: PageProps) {

  const { state, industry, intent } = await params

  if (!state || !industry || !intent) {
    notFound()
  }

  const reqs = requirements(state, industry)
  const faqList = faqs(state, industry)

  return (
    <main
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "40px",
        color: "white",
        lineHeight: "1.6"
      }}
    >

      <h1 style={{ fontSize: "32px", marginBottom: "20px" }}>
        {industry} {intent} in {state}
      </h1>

      <p style={{ marginBottom: "30px" }}>
        {intro(state, industry)}
      </p>

      <h2 style={{ fontSize: "24px", marginTop: "30px" }}>
        Requirements
      </h2>

      <ul style={{ marginBottom: "30px" }}>
        {reqs.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <h2 style={{ fontSize: "24px", marginTop: "30px" }}>
        Costs
      </h2>

      <p style={{ marginBottom: "30px" }}>
        {costs(state, industry)}
      </p>

      <h2 style={{ fontSize: "24px", marginTop: "30px" }}>
        Frequently Asked Questions
      </h2>

      {faqList.map((faq, i) => (
        <div key={i} style={{ marginBottom: "20px" }}>
          <h3 style={{ fontSize: "18px" }}>{faq.question}</h3>
          <p>{faq.answer}</p>
        </div>
      ))}

    </main>
  )
}