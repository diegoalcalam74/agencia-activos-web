export default {
  name: "Contractors",
  slug: "contractors",

  metaTitle: "Contractor Licenses & Permits in the United States (2026 Guide)",
  metaDescription:
    "Complete guide to contractor licenses, construction permits, bonding, insurance requirements, and costs across major U.S. states.",

  overview:
    "Contractors in the United States must obtain state or local contractor licenses, building permits, bonding, and insurance approvals before performing construction work. Licensing requirements vary by trade (electrician, plumbing, HVAC, general contractor) and by state jurisdiction.",

  states: [
    {
      state: "Texas",
      summary:
        "Texas contractor licensing is primarily handled at the city level, although specialized trades like electricians and plumbers require state licensing."
    },
    {
      state: "Florida",
      summary:
        "Florida contractors must obtain a Certified or Registered Contractor License through the DBPR and meet experience, exam, and insurance requirements."
    },
    {
      state: "California",
      summary:
        "California requires a state-issued Contractor License through the CSLB for projects over $500, including trade classification, bonding, and insurance."
    },
    {
      state: "New York",
      summary:
        "New York contractor licensing is managed locally. NYC requires Home Improvement Contractor licensing and insurance verification."
    },
    {
      state: "Illinois",
      summary:
        "Illinois contractor licensing varies by municipality, but roofing contractors require statewide licensing and registration."
    }
  ],

  commonLicenses: [
    {
      license: "General Contractor License",
      cost: "$150 – $500 application + exams",
      processingTime: "4–8 weeks"
    },
    {
      license: "Trade License (Electrical/Plumbing/HVAC)",
      cost: "$100 – $300",
      processingTime: "2–6 weeks"
    },
    {
      license: "Contractor Bond",
      cost: "$100 – $1,000/year",
      processingTime: "1–5 days"
    },
    {
      license: "General Liability Insurance",
      cost: "$400 – $1,500/year",
      processingTime: "Same day – 3 days"
    }
  ],

  faqs: [
    {
      question: "Do I need a contractor license to do construction work?",
      answer:
        "Yes. Most states require contractors to hold a license if performing work above a minimum dollar threshold, often $500–$2,000 depending on the state."
    },
    {
      question: "How long does it take to get a contractor license?",
      answer:
        "Most contractor licenses take 2–8 weeks depending on exams, background checks, and documentation requirements."
    },
    {
      question: "Do contractors need insurance?",
      answer:
        "Yes. General liability insurance and bonding are commonly required before a contractor license is issued."
    }
  ]
};