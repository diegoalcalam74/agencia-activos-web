export default function StatesPage() {
  const states = [
    "Texas",
    "California",
    "Florida",
    "New York",
    "Arizona",
    "Illinois",
    "Pennsylvania",
    "Ohio",
    "Georgia",
    "North Carolina",
  ];

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold">
          Permit Costs & Filing Fees by State
        </h1>
        <p className="text-neutral-600 mt-3">
          Explore building permit costs, LLC filing fees, and small claims
          court filing fees by U.S. state.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {states.map((state) => (
          <a
            key={state}
            href={`/blog/building-permit-cost-${state
              .toLowerCase()
              .replace(" ", "-")}`}
            className="border border-neutral-200 rounded-lg p-4 hover:bg-neutral-100 transition"
          >
            {state}
          </a>
        ))}
      </div>
    </div>
  );
}