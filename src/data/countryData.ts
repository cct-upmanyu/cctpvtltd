export interface CountryData {
  name: string;
  slug: string;
  code: string;
  currency: string;
  timezone: string;
  complianceLaws: {
    name: string;
    description: string;
  }[];
  industries: {
    name: string;
    description: string;
  }[];
  challenges: string[];
  benefits: string[];
}

export const countries: CountryData[] = [
  {
    name: "United Kingdom",
    slug: "uk",
    code: "GB",
    currency: "GBP",
    timezone: "GMT/BST",
    complianceLaws: [
      { name: "GDPR", description: "General Data Protection Regulation for data privacy and protection" },
      { name: "UK Data Protection Act", description: "National framework ensuring data security and individual rights" },
      { name: "FCA Compliance", description: "Financial Conduct Authority regulations for financial services" },
    ],
    industries: [
      { name: "Financial Services", description: "Streamline banking, insurance, and fintech operations with Zoho-powered automation and AI-driven compliance monitoring." },
      { name: "Professional Services", description: "Optimize legal, accounting, and consulting workflows with integrated CRM and project management solutions." },
      { name: "Manufacturing", description: "Enhance production efficiency with ERP systems, inventory management, and supply chain automation." },
      { name: "Retail & E-commerce", description: "Unify online and offline sales channels with integrated POS, inventory, and customer engagement tools." },
      { name: "Healthcare", description: "Improve patient management and NHS compliance with secure, GDPR-compliant healthcare solutions." },
    ],
    challenges: [
      "Brexit-related regulatory changes requiring agile business systems",
      "High operational costs demanding automation and efficiency",
      "Intense competition requiring superior customer experience",
      "Digital transformation pressure from established enterprises",
    ],
    benefits: [
      "Time-zone aligned support during UK business hours",
      "Understanding of UK business culture and practices",
      "GDPR and UK Data Protection Act compliance expertise",
      "Integration with UK-specific payment and banking systems",
    ],
  },
  {
    name: "United Arab Emirates",
    slug: "uae",
    code: "AE",
    currency: "AED",
    timezone: "GST (GMT+4)",
    complianceLaws: [
      { name: "UAE VAT", description: "Value Added Tax compliance for business transactions" },
      { name: "PDPL", description: "Personal Data Protection Law for data privacy" },
      { name: "Free Zone Regulations", description: "Compliance requirements for free zone operations" },
    ],
    industries: [
      { name: "Real Estate & Construction", description: "Manage mega-projects, property portfolios, and contractor relationships with integrated ERP solutions." },
      { name: "Trading & Distribution", description: "Optimize multi-channel trading operations with inventory management and logistics automation." },
      { name: "Hospitality & Tourism", description: "Enhance guest experiences with CRM, booking management, and loyalty program automation." },
      { name: "Professional Services", description: "Streamline consulting, legal, and financial advisory operations with project and client management tools." },
      { name: "Healthcare", description: "Modernize patient care with compliant healthcare management and billing solutions." },
    ],
    challenges: [
      "Rapid business growth requiring scalable systems",
      "Multi-currency and multi-language operational needs",
      "Free zone and mainland regulatory differences",
      "High expectations for digital-first experiences",
    ],
    benefits: [
      "Arabic and English language support",
      "Understanding of UAE business regulations and free zones",
      "VAT-compliant invoicing and financial automation",
      "Integration with UAE payment gateways and banking",
    ],
  },
  {
    name: "Australia",
    slug: "australia",
    code: "AU",
    currency: "AUD",
    timezone: "AEST/AEDT",
    complianceLaws: [
      { name: "Privacy Act", description: "Australian Privacy Principles governing data handling" },
      { name: "GST Compliance", description: "Goods and Services Tax requirements for businesses" },
      { name: "ASIC Regulations", description: "Australian Securities and Investments Commission compliance" },
    ],
    industries: [
      { name: "Mining & Resources", description: "Optimize extraction operations, equipment management, and contractor coordination with specialized ERP solutions." },
      { name: "Agriculture", description: "Modernize farm management with inventory tracking, supply chain automation, and market connectivity." },
      { name: "Professional Services", description: "Enhance legal, accounting, and consulting practices with integrated CRM and project management." },
      { name: "Retail & E-commerce", description: "Unify omnichannel retail operations with inventory, POS, and customer engagement tools." },
      { name: "Healthcare", description: "Improve patient care with compliant practice management and billing solutions." },
    ],
    challenges: [
      "Geographic dispersion requiring cloud-first solutions",
      "Skilled labor shortages driving automation needs",
      "Growing compliance requirements across industries",
      "Competition from global digital-first businesses",
    ],
    benefits: [
      "AEST/AEDT timezone-aligned support",
      "Understanding of Australian business practices",
      "GST-compliant invoicing and financial systems",
      "Integration with Australian payment platforms",
    ],
  },
  {
    name: "Canada",
    slug: "canada",
    code: "CA",
    currency: "CAD",
    timezone: "EST/PST",
    complianceLaws: [
      { name: "PIPEDA", description: "Personal Information Protection and Electronic Documents Act" },
      { name: "Provincial Privacy Laws", description: "Province-specific data protection requirements" },
      { name: "CASL", description: "Canada's Anti-Spam Legislation for electronic communications" },
    ],
    industries: [
      { name: "Technology & SaaS", description: "Scale software companies with integrated CRM, billing, and customer success automation." },
      { name: "Natural Resources", description: "Optimize oil, gas, and mining operations with comprehensive ERP and field management solutions." },
      { name: "Financial Services", description: "Streamline banking, insurance, and fintech operations with compliant automation solutions." },
      { name: "Manufacturing", description: "Enhance production efficiency with inventory management and supply chain optimization." },
      { name: "Healthcare", description: "Improve patient outcomes with compliant healthcare management and billing systems." },
    ],
    challenges: [
      "Bilingual business requirements (English/French)",
      "Cross-provincial regulatory differences",
      "US market proximity driving competitiveness needs",
      "Talent competition requiring operational efficiency",
    ],
    benefits: [
      "Bilingual English and French support capabilities",
      "PIPEDA and provincial privacy compliance expertise",
      "CAD billing and Canadian payment integrations",
      "Cross-border business experience (US-Canada)",
    ],
  },
  {
    name: "United States",
    slug: "usa",
    code: "US",
    currency: "USD",
    timezone: "EST/CST/PST",
    complianceLaws: [
      { name: "CCPA", description: "California Consumer Privacy Act for data protection" },
      { name: "HIPAA", description: "Health Insurance Portability and Accountability Act for healthcare" },
      { name: "SOX", description: "Sarbanes-Oxley Act for financial reporting compliance" },
    ],
    industries: [
      { name: "Technology & SaaS", description: "Accelerate growth with integrated CRM, marketing automation, and customer success platforms." },
      { name: "Healthcare", description: "Ensure HIPAA compliance while improving patient care with secure management solutions." },
      { name: "Financial Services", description: "Maintain SOX compliance while streamlining operations with compliant automation." },
      { name: "Manufacturing", description: "Optimize production with lean manufacturing principles and supply chain automation." },
      { name: "Retail & E-commerce", description: "Dominate omnichannel retail with integrated inventory, POS, and customer engagement." },
    ],
    challenges: [
      "Intense competition requiring operational excellence",
      "Multi-state regulatory complexity",
      "High customer expectations for digital experiences",
      "Rapid technology evolution demanding agility",
    ],
    benefits: [
      "Multi-timezone US coverage (EST/CST/PST)",
      "CCPA, HIPAA, and SOX compliance expertise",
      "Integration with major US payment processors",
      "Understanding of US enterprise requirements",
    ],
  },
  {
    name: "India",
    slug: "india",
    code: "IN",
    currency: "INR",
    timezone: "IST (GMT+5:30)",
    complianceLaws: [
      { name: "GST", description: "Goods and Services Tax compliance for all business transactions" },
      { name: "DPDP Act", description: "Digital Personal Data Protection Act for data privacy" },
      { name: "Companies Act", description: "Corporate governance and reporting requirements" },
    ],
    industries: [
      { name: "IT & Technology", description: "Scale technology companies with integrated project management, billing, and resource optimization." },
      { name: "Manufacturing", description: "Modernize production with GST-compliant ERP, inventory management, and supply chain automation." },
      { name: "Retail & FMCG", description: "Unify distribution networks with inventory tracking, order management, and retailer portals." },
      { name: "Healthcare", description: "Improve patient care with hospital management, appointment booking, and billing automation." },
      { name: "Education", description: "Transform institutions with student management, fee collection, and learning management systems." },
    ],
    challenges: [
      "Complex GST compliance across states",
      "Rapid digital transformation across sectors",
      "Growing competition requiring automation",
      "Diverse market requiring localization",
    ],
    benefits: [
      "IST timezone alignment for seamless support",
      "Deep understanding of Indian business practices",
      "GST-compliant invoicing and e-way bill integration",
      "Integration with Indian payment gateways (UPI, Razorpay)",
    ],
  },
  {
    name: "Europe",
    slug: "europe",
    code: "EU",
    currency: "EUR",
    timezone: "CET/CEST",
    complianceLaws: [
      { name: "GDPR", description: "General Data Protection Regulation for comprehensive data protection" },
      { name: "EU VAT", description: "Value Added Tax compliance across member states" },
      { name: "ePrivacy Directive", description: "Electronic communications privacy requirements" },
    ],
    industries: [
      { name: "Manufacturing", description: "Optimize production across borders with multi-language ERP and supply chain management." },
      { name: "Professional Services", description: "Streamline consulting, legal, and accounting operations across EU markets." },
      { name: "Retail & E-commerce", description: "Manage cross-border sales with multi-currency, multi-language commerce solutions." },
      { name: "Financial Services", description: "Ensure compliance with EU banking regulations while driving digital transformation." },
      { name: "Healthcare", description: "Improve patient care with GDPR-compliant healthcare management across borders." },
    ],
    challenges: [
      "Multi-country, multi-language operational complexity",
      "Strict GDPR compliance requirements",
      "Cross-border VAT and regulatory differences",
      "Diverse business cultures requiring adaptation",
    ],
    benefits: [
      "CET timezone alignment for European support",
      "Multi-language capabilities (German, French, Spanish, etc.)",
      "GDPR and EU VAT compliance expertise",
      "Cross-border business experience across EU",
    ],
  },
];

export const getCountryBySlug = (slug: string): CountryData | undefined => {
  return countries.find((country) => country.slug === slug);
};

export const services = [
  {
    title: "Zoho CRM Implementation & Optimization",
    description: "Transform your sales process with a fully customized Zoho CRM that captures leads, automates follow-ups, and provides real-time pipeline visibility.",
    features: ["Lead and deal management", "Sales automation workflows", "Custom dashboards and reports", "Mobile CRM for field teams"],
  },
  {
    title: "Zoho One ERP Development",
    description: "Unify your entire business operations with Zoho One—integrating sales, marketing, finance, HR, and operations into a single platform.",
    features: ["Cross-department integration", "Unified data management", "Process automation", "Custom module development"],
  },
  {
    title: "Zoho Creator Custom Applications",
    description: "Build bespoke business applications on Zoho Creator to address unique operational challenges that off-the-shelf solutions can't solve.",
    features: ["Low-code development", "Custom workflows", "Mobile-ready apps", "Third-party integrations"],
  },
  {
    title: "Zoho Finance Suite",
    description: "Streamline financial operations with Zoho Books, Inventory, and Subscriptions—ensuring accurate accounting, inventory control, and recurring billing.",
    features: ["Automated invoicing", "Inventory management", "Multi-currency support", "Financial reporting"],
  },
  {
    title: "AI Automation & Agentic AI Solutions",
    description: "Leverage AI to automate repetitive tasks, enhance decision-making, and create intelligent workflows that learn and improve over time.",
    features: ["AI lead qualification", "Intelligent document processing", "Predictive analytics", "Conversational AI assistants"],
  },
  {
    title: "Data Migration & Third-Party Integrations",
    description: "Seamlessly migrate from legacy systems and connect Zoho with your existing tech stack—including ERPs, payment gateways, and communication tools.",
    features: ["Clean data migration", "API integrations", "Legacy system connectivity", "Real-time data sync"],
  },
];

export const aiCapabilities = [
  {
    title: "AI Lead Qualification",
    description: "Automatically score and prioritize leads based on behavior, engagement, and fit—ensuring your sales team focuses on high-value prospects.",
  },
  {
    title: "AI Sales Assistants",
    description: "Deploy intelligent assistants that handle initial inquiries, schedule meetings, and provide product information 24/7.",
  },
  {
    title: "AI Finance & Invoice Automation",
    description: "Automate invoice processing, expense categorization, and financial reconciliation with AI-powered document understanding.",
  },
  {
    title: "AI Customer Support Workflows",
    description: "Create intelligent support workflows that route tickets, suggest solutions, and escalate complex issues to human agents.",
  },
];

export const faqs = [
  {
    question: "Do you provide Zoho support in {country}?",
    answer: "Yes, we provide comprehensive Zoho support for businesses in {country}. Our team operates during {country} business hours and understands local business practices and requirements.",
  },
  {
    question: "Are your solutions compliant with {country} regulations?",
    answer: "Absolutely. All our implementations are designed with {country} regulatory requirements in mind, including {compliance}. We ensure your systems meet all necessary compliance standards.",
  },
  {
    question: "Can you migrate data from our existing systems?",
    answer: "Yes, we specialize in seamless data migration from legacy systems, spreadsheets, and other CRM/ERP platforms. Our migration process ensures data integrity and minimal business disruption.",
  },
  {
    question: "Do you offer post-implementation support?",
    answer: "Yes, we offer comprehensive post-implementation support including training, optimization, troubleshooting, and ongoing system enhancements. We're your long-term technology partner.",
  },
  {
    question: "How long does a typical Zoho implementation take?",
    answer: "Implementation timelines vary based on complexity. A basic CRM setup may take 2-4 weeks, while comprehensive Zoho One implementations typically take 8-16 weeks. We'll provide a detailed timeline during our initial consultation.",
  },
];
