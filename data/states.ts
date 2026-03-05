export const statesData = [
  {
    name: "Texas",
    slug: "texas",
    description:
      "Businesses operating in Texas must register with the Texas Secretary of State, obtain tax permits from the Comptroller, and secure local city or county licenses depending on the business type.",
    portal: "https://www.sos.state.tx.us/",
    licenses: [
      { name: "Texas Business Registration", cost: "$300", time: "5–10 business days" },
      { name: "Sales Tax Permit", cost: "Free", time: "2–3 business days" },
      { name: "Local City Business License", cost: "$50–$300", time: "1–2 weeks" },
      { name: "Professional Licensing (if required)", cost: "$100–$500", time: "2–6 weeks" },
    ],
  },
  {
    name: "Florida",
    slug: "florida",
    description:
      "Businesses in Florida must register with Sunbiz, obtain sales tax registration, and secure local city or county business tax receipts depending on the industry.",
    portal: "https://dos.myflorida.com/sunbiz/",
    licenses: [
      { name: "Florida Business Registration", cost: "$125", time: "3–5 business days" },
      { name: "Sales Tax Registration", cost: "Free", time: "1–3 business days" },
      { name: "Local Business Tax Receipt", cost: "$50–$200", time: "1–2 weeks" },
    ],
  },
]