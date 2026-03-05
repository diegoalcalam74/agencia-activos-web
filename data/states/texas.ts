export default {
  name: "Texas",
  slug: "texas",

  metaTitle: "Texas Business Permits & Licensing Requirements (2026 Guide)",
  metaDescription:
    "Complete guide to Texas business permits, license costs, processing times, compliance risks, and official filing resources.",

  executiveSummary:
    "Businesses operating in Texas must comply with state-level and city-level licensing requirements. While Texas does not require a statewide general business license, most businesses must obtain local permits, industry-specific licenses, or tax registrations depending on operations.",

  licenses: [
    { type: "Sales Tax Permit", cost: "Free", processingTime: "2–5 business days" },
    { type: "Food Establishment Permit", cost: "$258 – $773", processingTime: "2–6 weeks" },
    { type: "Liquor License", cost: "$2,000 – $6,000+", processingTime: "30–90 days" },
    { type: "Contractor License (Local)", cost: "Varies by city", processingTime: "1–4 weeks" }
  ],

  industries: [
    { name: "Retail Businesses", summary: "Retailers must obtain a Texas Sales Tax Permit and may require city-level operating permits." },
    { name: "Restaurants", summary: "Restaurants require health permits, food establishment licenses, and possibly alcohol permits." },
    { name: "Food Trucks", summary: "Mobile food vendors must secure food permits, health inspections, and local vending approvals." },
    { name: "Construction & Contractors", summary: "Certain trades require state registration or city-issued contractor licenses." },
    { name: "Home-Based Businesses", summary: "May require local zoning approval and sales tax registration." },
    { name: "Online Businesses", summary: "E-commerce businesses selling taxable goods must obtain a sales tax permit." },
    { name: "Bars & Nightclubs", summary: "Alcohol-serving establishments require Texas Alcoholic Beverage Commission licensing." },
    { name: "Professional Services", summary: "Licensed professionals (e.g., architects, CPAs) must comply with state board regulations." },
    { name: "Healthcare Providers", summary: "Medical and health-related businesses must comply with state licensing boards." },
    { name: "Manufacturing Businesses", summary: "Manufacturers may require environmental permits and local zoning approvals." }
  ],

  complianceRisks:
    "Operating without required permits in Texas can result in fines, forced closure, back taxes, and denial of future licensing approvals.",

  faqs: [
    {
      question: "Does Texas require a general business license?",
      answer: "Texas does not require a statewide general business license, but cities may require local permits."
    },
    {
      question: "How long does it take to get a Texas sales tax permit?",
      answer: "Most sales tax permits are issued within 2–5 business days."
    },
    {
      question: "How much does a Texas liquor license cost?",
      answer: "Liquor license costs typically range from $2,000 to $6,000+ depending on license type."
    }
  ],

  officialWebsite: "https://www.texas.gov/business/"
};