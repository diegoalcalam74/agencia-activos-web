export default function StatesIndex() {
  return (
    <main className="max-w-4xl mx-auto py-12">
      <h1 className="text-3xl font-bold mb-6">States</h1>

      <ul className="space-y-2">
        <li>
          <a href="/states/texas" className="underline">Texas</a>
        </li>
        <li>
          <a href="/states/florida" className="underline">Florida</a>
        </li>
      </ul>
    </main>
  )
}