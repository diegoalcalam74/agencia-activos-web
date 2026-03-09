import { notFound } from "next/navigation"

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

  return (
    <main
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "40px",
        color: "white"
      }}
    >
      <h1>Intent Page</h1>

      <p>Dynamic page working correctly.</p>

      <p>State: {state}</p>
      <p>Industry: {industry}</p>
      <p>Intent: {intent}</p>

    </main>
  )
}