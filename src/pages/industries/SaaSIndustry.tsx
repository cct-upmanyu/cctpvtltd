import { IndustryPageTemplate } from "@/components/industry/IndustryPageTemplate";
import { Code, Users, TrendingUp, BarChart3, Headphones, DollarSign } from "lucide-react";

export default function SaaSIndustry() {
  return (
    <IndustryPageTemplate
      industry="SaaS & Technology"
      tagline="Scale Your SaaS Business Efficiently"
      heroDescription="Power your SaaS company with integrated sales pipelines, customer onboarding, subscription management, support ticketing, and analytics. Zoho One provides the operational backbone for technology companies from startup to scale."
      heroImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1920"
      solutions={[
        {
          icon: TrendingUp,
          title: "Sales Pipeline & Revenue",
          description: "Manage MRR/ARR tracking, sales pipelines, and subscription revenue with integrated forecasting and quota management.",
          zohoApps: ["Zoho CRM", "Zoho Subscriptions", "Zoho Analytics"]
        },
        {
          icon: Users,
          title: "Customer Onboarding & Success",
          description: "Automate customer onboarding workflows, track adoption metrics, and manage customer health scores for retention.",
          zohoApps: ["Zoho CRM", "Zoho Creator", "Zoho Desk"]
        },
        {
          icon: DollarSign,
          title: "Subscription & Billing",
          description: "Manage recurring subscriptions, automated billing, payment processing, and revenue recognition with compliance.",
          zohoApps: ["Zoho Subscriptions", "Zoho Books", "Zoho Invoice"]
        },
        {
          icon: Headphones,
          title: "Customer Support & Ticketing",
          description: "Provide multi-channel support with knowledge base, ticket management, and SLA tracking for customer satisfaction.",
          zohoApps: ["Zoho Desk", "Zoho SalesIQ", "Zoho Assist"]
        },
        {
          icon: Code,
          title: "Product & Development",
          description: "Track product development with agile project management, bug tracking, and release coordination across teams.",
          zohoApps: ["Zoho Sprints", "Zoho Projects", "Zoho Analytics"]
        },
        {
          icon: BarChart3,
          title: "SaaS Metrics & Analytics",
          description: "Track key SaaS metrics including MRR, churn, LTV, CAC, and NPS with real-time dashboards and cohort analysis.",
          zohoApps: ["Zoho Analytics", "Zoho CRM", "Zoho Survey"]
        }
      ]}
      useCases={[
        { title: "B2B SaaS", description: "Scale go-to-market with integrated sales and success" },
        { title: "Bootstrapped Startups", description: "All-in-one tools without enterprise complexity" },
        { title: "Subscription Business", description: "Complex subscription models with billing automation" },
        { title: "Software Vendors", description: "Manage partner channels and reseller networks" },
        { title: "Fintech Startups", description: "Meet compliance requirements while scaling fast" },
        { title: "Platform Companies", description: "Track marketplace metrics and ecosystem growth" }
      ]}
      benefits={[
        "Unified MRR/ARR tracking",
        "Automated subscription management",
        "Customer health scoring",
        "Reduced churn rates",
        "Faster customer onboarding",
        "Real-time SaaS analytics"
      ]}
      zohoAppsUsed={[
        "Zoho CRM",
        "Zoho Subscriptions",
        "Zoho Desk",
        "Zoho Analytics",
        "Zoho Books",
        "Zoho Sprints",
        "Zoho Projects",
        "Zoho SalesIQ",
        "Zoho Survey"
      ]}
    />
  );
}
