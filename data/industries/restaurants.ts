export default {
  name: "Restaurants",
  slug: "restaurants",

  metaTitle: "Restaurant Permits & Licenses in the United States (2026 Guide)",
  metaDescription:
    "Complete guide to restaurant permits, food licenses, health inspections, liquor licensing costs, and compliance requirements across major U.S. states.",

  overview:
    "Starting a restaurant in the United States requires multiple permits including health department approvals, food service licenses, sales tax registration, and liquor licensing if alcohol is served. Requirements vary by state and city, but all restaurants must meet food safety, zoning, and inspection standards before opening.",

  states: [
    {
      state: "Texas",
      summary:
        "Texas restaurants require a food establishment permit, sales tax registration, and local city permits. Liquor licenses are issued through the Texas Alcoholic Beverage Commission."
    },
    {
      state: "Florida",
      summary:
        "Florida restaurants must obtain a Food Service License through the DBPR, pass health inspections, and register for sales tax. Alcohol service requires state liquor licensing."
    },
    {
      state: "California",
      summary:
        "California restaurants must secure county health permits, food facility approval, and potentially ABC liquor licensing. Seller’s Permit registration is also required."
    },
    {
      state: "New York",
      summary:
        "New York restaurants must obtain local health department permits, food protection certification, and sales tax authorization. Liquor licensing is handled by the NYS Liquor Authority."
    },
    {
      state: "Illinois",
      summary:
        "Illinois restaurants require sanitation permits, local health department approval, and sales tax registration. Liquor licensing varies by municipality."
    }
  ],

  commonLicenses: [
    {
      license: "Food Service Permit",
      cost: "$250 – $1,500",
      processingTime: "2–6 weeks"
    },
    {
      license: "Health Inspection Approval",
      cost: "$100 – $500",
      processingTime: "1–3 weeks"
    },
    {
      license: "Sales Tax Registration",
      cost: "Free",
      processingTime: "3–7 business days"
    },
    {
      license: "Liquor License",
      cost: "$1,000 – $15,000+",
      processingTime: "30–120 days"
    }
  ],

  faqs: [
    {
      question: "Do I need a food license to open a restaurant?",
      answer:
        "Yes. All restaurants must obtain a food service or health department permit before opening to the public."
    },
    {
      question: "How long does it take to open a restaurant legally?",
      answer:
        "Most restaurants take 30–90 days to complete permits, inspections, and licensing approvals."
    },
    {
      question: "Do restaurants need a liquor license?",
      answer:
        "Only if alcohol will be served. Liquor licenses are optional but required for alcohol sales."
    }
  ]
};