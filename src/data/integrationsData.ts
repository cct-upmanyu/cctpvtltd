// Integration data with actual logos from CDNs

export interface Integration {
  id: string;
  name: string;
  logo: string;
  category: string;
  zohoApps: string[];
  featured?: boolean;
}

export const integrationCategories = [
  { id: "all", label: "All Apps", count: 0 },
  { id: "payment", label: "Payment Gateways", count: 0 },
  { id: "communication", label: "Communication", count: 0 },
  { id: "crm-sales", label: "CRM & Sales", count: 0 },
  { id: "marketing", label: "Marketing", count: 0 },
  { id: "accounting", label: "Accounting & Finance", count: 0 },
  { id: "ecommerce", label: "eCommerce", count: 0 },
  { id: "productivity", label: "Productivity", count: 0 },
  { id: "cloud-storage", label: "Cloud Storage", count: 0 },
  { id: "ai", label: "AI & Automation", count: 0 },
  { id: "telephony", label: "Telephony & Voice", count: 0 },
  { id: "social", label: "Social Media", count: 0 },
];

export const integrations: Integration[] = [
  // Payment Gateways
  {
    id: "razorpay",
    name: "Razorpay",
    logo: "https://cdn.brandfetch.io/razorpay.com/w/512/h/512/logo",
    category: "payment",
    zohoApps: ["Zoho CRM", "Zoho Books", "Zoho Creator"],
    featured: true
  },
  {
    id: "stripe",
    name: "Stripe",
    logo: "https://cdn.brandfetch.io/stripe.com/w/512/h/512/logo",
    category: "payment",
    zohoApps: ["Zoho CRM", "Zoho Books", "Zoho Subscriptions"],
    featured: true
  },
  {
    id: "paypal",
    name: "PayPal",
    logo: "https://cdn.brandfetch.io/paypal.com/w/512/h/512/logo",
    category: "payment",
    zohoApps: ["Zoho Books", "Zoho Invoice", "Zoho Creator"]
  },
  {
    id: "square",
    name: "Square",
    logo: "https://cdn.brandfetch.io/squareup.com/w/512/h/512/logo",
    category: "payment",
    zohoApps: ["Zoho CRM", "Zoho Inventory"]
  },
  {
    id: "paytm",
    name: "Paytm Business",
    logo: "https://cdn.brandfetch.io/paytm.com/w/512/h/512/logo",
    category: "payment",
    zohoApps: ["Zoho Books", "Zoho Creator"]
  },
  
  // Communication
  {
    id: "whatsapp",
    name: "WhatsApp Business",
    logo: "https://cdn.brandfetch.io/whatsapp.com/w/512/h/512/logo",
    category: "communication",
    zohoApps: ["Zoho CRM", "Zoho SalesIQ", "Zoho Desk"],
    featured: true
  },
  {
    id: "slack",
    name: "Slack",
    logo: "https://cdn.brandfetch.io/slack.com/w/512/h/512/logo",
    category: "communication",
    zohoApps: ["Zoho CRM", "Zoho Projects", "Zoho Cliq"],
    featured: true
  },
  {
    id: "telegram",
    name: "Telegram",
    logo: "https://cdn.brandfetch.io/telegram.org/w/512/h/512/logo",
    category: "communication",
    zohoApps: ["Zoho SalesIQ", "Zoho Desk", "Zoho Creator"]
  },
  {
    id: "twilio",
    name: "Twilio",
    logo: "https://cdn.brandfetch.io/twilio.com/w/512/h/512/logo",
    category: "communication",
    zohoApps: ["Zoho CRM", "Zoho Creator", "Zoho Flow"],
    featured: true
  },
  {
    id: "intercom",
    name: "Intercom",
    logo: "https://cdn.brandfetch.io/intercom.com/w/512/h/512/logo",
    category: "communication",
    zohoApps: ["Zoho CRM", "Zoho Desk"]
  },
  {
    id: "zoom",
    name: "Zoom",
    logo: "https://cdn.brandfetch.io/zoom.us/w/512/h/512/logo",
    category: "communication",
    zohoApps: ["Zoho CRM", "Zoho Meeting", "Zoho Calendar"]
  },
  {
    id: "microsoft-teams",
    name: "Microsoft Teams",
    logo: "https://cdn.brandfetch.io/microsoft.com/w/512/h/512/logo",
    category: "communication",
    zohoApps: ["Zoho CRM", "Zoho Projects", "Zoho Cliq"]
  },
  
  // CRM & Sales
  {
    id: "salesforce",
    name: "Salesforce",
    logo: "https://cdn.brandfetch.io/salesforce.com/w/512/h/512/logo",
    category: "crm-sales",
    zohoApps: ["Zoho CRM", "Zoho Analytics", "Zoho Flow"]
  },
  {
    id: "hubspot",
    name: "HubSpot",
    logo: "https://cdn.brandfetch.io/hubspot.com/w/512/h/512/logo",
    category: "crm-sales",
    zohoApps: ["Zoho CRM", "Zoho Marketing Automation"],
    featured: true
  },
  {
    id: "pipedrive",
    name: "Pipedrive",
    logo: "https://cdn.brandfetch.io/pipedrive.com/w/512/h/512/logo",
    category: "crm-sales",
    zohoApps: ["Zoho CRM", "Zoho Analytics"]
  },
  {
    id: "freshsales",
    name: "Freshsales",
    logo: "https://cdn.brandfetch.io/freshworks.com/w/512/h/512/logo",
    category: "crm-sales",
    zohoApps: ["Zoho CRM", "Zoho Flow"]
  },
  
  // Marketing
  {
    id: "mailchimp",
    name: "Mailchimp",
    logo: "https://cdn.brandfetch.io/mailchimp.com/w/512/h/512/logo",
    category: "marketing",
    zohoApps: ["Zoho CRM", "Zoho Campaigns", "Zoho Flow"],
    featured: true
  },
  {
    id: "google-ads",
    name: "Google Ads",
    logo: "https://cdn.brandfetch.io/google.com/w/512/h/512/logo",
    category: "marketing",
    zohoApps: ["Zoho CRM", "Zoho Analytics", "Zoho Marketing Automation"],
    featured: true
  },
  {
    id: "meta-ads",
    name: "Meta Ads",
    logo: "https://cdn.brandfetch.io/meta.com/w/512/h/512/logo",
    category: "marketing",
    zohoApps: ["Zoho CRM", "Zoho Social", "Zoho Marketing Automation"]
  },
  {
    id: "linkedin-ads",
    name: "LinkedIn Ads",
    logo: "https://cdn.brandfetch.io/linkedin.com/w/512/h/512/logo",
    category: "marketing",
    zohoApps: ["Zoho CRM", "Zoho Social", "Zoho Analytics"]
  },
  {
    id: "sendgrid",
    name: "SendGrid",
    logo: "https://cdn.brandfetch.io/sendgrid.com/w/512/h/512/logo",
    category: "marketing",
    zohoApps: ["Zoho CRM", "Zoho Creator", "Zoho Flow"]
  },
  {
    id: "klaviyo",
    name: "Klaviyo",
    logo: "https://cdn.brandfetch.io/klaviyo.com/w/512/h/512/logo",
    category: "marketing",
    zohoApps: ["Zoho CRM", "Zoho Inventory"]
  },
  
  // Accounting & Finance
  {
    id: "quickbooks",
    name: "QuickBooks",
    logo: "https://cdn.brandfetch.io/quickbooks.intuit.com/w/512/h/512/logo",
    category: "accounting",
    zohoApps: ["Zoho CRM", "Zoho Books", "Zoho Analytics"],
    featured: true
  },
  {
    id: "xero",
    name: "Xero",
    logo: "https://cdn.brandfetch.io/xero.com/w/512/h/512/logo",
    category: "accounting",
    zohoApps: ["Zoho CRM", "Zoho Books", "Zoho Flow"]
  },
  {
    id: "tally",
    name: "Tally",
    logo: "https://cdn.brandfetch.io/tallysolutions.com/w/512/h/512/logo",
    category: "accounting",
    zohoApps: ["Zoho Books", "Zoho Inventory", "Zoho Creator"]
  },
  {
    id: "sage",
    name: "Sage",
    logo: "https://cdn.brandfetch.io/sage.com/w/512/h/512/logo",
    category: "accounting",
    zohoApps: ["Zoho Books", "Zoho Analytics"]
  },
  
  // eCommerce
  {
    id: "shopify",
    name: "Shopify",
    logo: "https://cdn.brandfetch.io/shopify.com/w/512/h/512/logo",
    category: "ecommerce",
    zohoApps: ["Zoho CRM", "Zoho Inventory", "Zoho Books"],
    featured: true
  },
  {
    id: "woocommerce",
    name: "WooCommerce",
    logo: "https://cdn.brandfetch.io/woo.com/w/512/h/512/logo",
    category: "ecommerce",
    zohoApps: ["Zoho Inventory", "Zoho CRM", "Zoho Books"],
    featured: true
  },
  {
    id: "amazon",
    name: "Amazon Seller",
    logo: "https://cdn.brandfetch.io/amazon.com/w/512/h/512/logo",
    category: "ecommerce",
    zohoApps: ["Zoho Inventory", "Zoho Books", "Zoho Analytics"]
  },
  {
    id: "magento",
    name: "Magento",
    logo: "https://cdn.brandfetch.io/magento.com/w/512/h/512/logo",
    category: "ecommerce",
    zohoApps: ["Zoho Inventory", "Zoho CRM"]
  },
  {
    id: "bigcommerce",
    name: "BigCommerce",
    logo: "https://cdn.brandfetch.io/bigcommerce.com/w/512/h/512/logo",
    category: "ecommerce",
    zohoApps: ["Zoho Inventory", "Zoho CRM"]
  },
  
  // Productivity
  {
    id: "google-workspace",
    name: "Google Workspace",
    logo: "https://cdn.brandfetch.io/google.com/w/512/h/512/logo",
    category: "productivity",
    zohoApps: ["Zoho CRM", "Zoho Mail", "Zoho Calendar"],
    featured: true
  },
  {
    id: "microsoft-365",
    name: "Microsoft 365",
    logo: "https://cdn.brandfetch.io/microsoft.com/w/512/h/512/logo",
    category: "productivity",
    zohoApps: ["Zoho CRM", "Zoho Mail", "Zoho Projects"]
  },
  {
    id: "notion",
    name: "Notion",
    logo: "https://cdn.brandfetch.io/notion.so/w/512/h/512/logo",
    category: "productivity",
    zohoApps: ["Zoho Projects", "Zoho Flow"]
  },
  {
    id: "airtable",
    name: "Airtable",
    logo: "https://cdn.brandfetch.io/airtable.com/w/512/h/512/logo",
    category: "productivity",
    zohoApps: ["Zoho CRM", "Zoho Creator", "Zoho Flow"],
    featured: true
  },
  {
    id: "monday",
    name: "Monday.com",
    logo: "https://cdn.brandfetch.io/monday.com/w/512/h/512/logo",
    category: "productivity",
    zohoApps: ["Zoho Projects", "Zoho CRM"]
  },
  {
    id: "asana",
    name: "Asana",
    logo: "https://cdn.brandfetch.io/asana.com/w/512/h/512/logo",
    category: "productivity",
    zohoApps: ["Zoho Projects", "Zoho CRM", "Zoho Flow"]
  },
  {
    id: "trello",
    name: "Trello",
    logo: "https://cdn.brandfetch.io/trello.com/w/512/h/512/logo",
    category: "productivity",
    zohoApps: ["Zoho Projects", "Zoho CRM"]
  },
  {
    id: "jira",
    name: "Jira",
    logo: "https://cdn.brandfetch.io/atlassian.com/w/512/h/512/logo",
    category: "productivity",
    zohoApps: ["Zoho Projects", "Zoho Desk", "Zoho Flow"]
  },
  
  // Cloud Storage
  {
    id: "google-drive",
    name: "Google Drive",
    logo: "https://cdn.brandfetch.io/google.com/w/512/h/512/logo",
    category: "cloud-storage",
    zohoApps: ["Zoho WorkDrive", "Zoho CRM", "Zoho Creator"],
    featured: true
  },
  {
    id: "dropbox",
    name: "Dropbox",
    logo: "https://cdn.brandfetch.io/dropbox.com/w/512/h/512/logo",
    category: "cloud-storage",
    zohoApps: ["Zoho WorkDrive", "Zoho CRM", "Zoho Creator"]
  },
  {
    id: "onedrive",
    name: "OneDrive",
    logo: "https://cdn.brandfetch.io/microsoft.com/w/512/h/512/logo",
    category: "cloud-storage",
    zohoApps: ["Zoho WorkDrive", "Zoho CRM"]
  },
  {
    id: "box",
    name: "Box",
    logo: "https://cdn.brandfetch.io/box.com/w/512/h/512/logo",
    category: "cloud-storage",
    zohoApps: ["Zoho CRM", "Zoho WorkDrive"]
  },
  
  // AI & Automation
  {
    id: "openai",
    name: "OpenAI (ChatGPT)",
    logo: "https://cdn.brandfetch.io/openai.com/w/512/h/512/logo",
    category: "ai",
    zohoApps: ["Zoho CRM", "Zoho Creator", "Zoho Desk"],
    featured: true
  },
  {
    id: "zapier",
    name: "Zapier",
    logo: "https://cdn.brandfetch.io/zapier.com/w/512/h/512/logo",
    category: "ai",
    zohoApps: ["Zoho CRM", "Zoho Books", "All Zoho Apps"],
    featured: true
  },
  {
    id: "make",
    name: "Make (Integromat)",
    logo: "https://cdn.brandfetch.io/make.com/w/512/h/512/logo",
    category: "ai",
    zohoApps: ["Zoho CRM", "Zoho Creator", "All Zoho Apps"]
  },
  {
    id: "n8n",
    name: "n8n",
    logo: "https://cdn.brandfetch.io/n8n.io/w/512/h/512/logo",
    category: "ai",
    zohoApps: ["Zoho CRM", "Zoho Creator", "Zoho Flow"]
  },
  {
    id: "anthropic",
    name: "Claude AI",
    logo: "https://cdn.brandfetch.io/anthropic.com/w/512/h/512/logo",
    category: "ai",
    zohoApps: ["Zoho CRM", "Zoho Creator", "Zoho Desk"]
  },
  {
    id: "google-ai",
    name: "Google Gemini",
    logo: "https://cdn.brandfetch.io/google.com/w/512/h/512/logo",
    category: "ai",
    zohoApps: ["Zoho CRM", "Zoho Creator"]
  },
  
  // Telephony & Voice
  {
    id: "exotel",
    name: "Exotel",
    logo: "https://cdn.brandfetch.io/exotel.com/w/512/h/512/logo",
    category: "telephony",
    zohoApps: ["Zoho CRM", "Zoho Desk", "Zoho Creator"],
    featured: true
  },
  {
    id: "knowlarity",
    name: "Knowlarity",
    logo: "https://cdn.brandfetch.io/knowlarity.com/w/512/h/512/logo",
    category: "telephony",
    zohoApps: ["Zoho CRM", "Zoho Desk"]
  },
  {
    id: "ringcentral",
    name: "RingCentral",
    logo: "https://cdn.brandfetch.io/ringcentral.com/w/512/h/512/logo",
    category: "telephony",
    zohoApps: ["Zoho CRM", "Zoho Desk"]
  },
  {
    id: "dialpad",
    name: "Dialpad",
    logo: "https://cdn.brandfetch.io/dialpad.com/w/512/h/512/logo",
    category: "telephony",
    zohoApps: ["Zoho CRM", "Zoho Desk"]
  },
  
  // Social Media
  {
    id: "facebook",
    name: "Facebook",
    logo: "https://cdn.brandfetch.io/facebook.com/w/512/h/512/logo",
    category: "social",
    zohoApps: ["Zoho Social", "Zoho CRM", "Zoho SalesIQ"],
    featured: true
  },
  {
    id: "instagram",
    name: "Instagram",
    logo: "https://cdn.brandfetch.io/instagram.com/w/512/h/512/logo",
    category: "social",
    zohoApps: ["Zoho Social", "Zoho SalesIQ"]
  },
  {
    id: "twitter",
    name: "X (Twitter)",
    logo: "https://cdn.brandfetch.io/x.com/w/512/h/512/logo",
    category: "social",
    zohoApps: ["Zoho Social", "Zoho CRM"]
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    logo: "https://cdn.brandfetch.io/linkedin.com/w/512/h/512/logo",
    category: "social",
    zohoApps: ["Zoho Social", "Zoho CRM", "Zoho Recruit"],
    featured: true
  },
  {
    id: "youtube",
    name: "YouTube",
    logo: "https://cdn.brandfetch.io/youtube.com/w/512/h/512/logo",
    category: "social",
    zohoApps: ["Zoho Social", "Zoho Analytics"]
  },
];

// Get category counts
export function getCategoryCounts(integrationsList: Integration[]) {
  const counts: Record<string, number> = { all: integrationsList.length };
  integrationsList.forEach((integration) => {
    counts[integration.category] = (counts[integration.category] || 0) + 1;
  });
  return counts;
}
