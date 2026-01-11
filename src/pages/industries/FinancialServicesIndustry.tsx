import { IndustryPageTemplate } from "@/components/industry/IndustryPageTemplate";
import { DollarSign, TrendingUp, Shield, Users, FileText, BarChart3 } from "lucide-react";

export default function FinancialServicesIndustry() {
  return (
    <IndustryPageTemplate
      industry="Financial Services"
      tagline="Build Trust Through Digital Transformation"
      heroDescription="Transform financial advisory, wealth management, and lending operations with Zoho One. Manage leads, client relationships, compliance tracking, and reporting—all in one secure, scalable platform designed for financial institutions."
      heroImage="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&q=80&w=1920"
      solutions={[
        {
          icon: TrendingUp,
          title: "Lead & Opportunity Management",
          description: "Capture and nurture financial service leads with automated scoring, campaign tracking, and conversion optimization workflows.",
          zohoApps: ["Zoho CRM", "Zoho Marketing Automation", "Zoho SalesIQ"]
        },
        {
          icon: Users,
          title: "Client Relationship Management",
          description: "Build lasting client relationships with 360-degree views, communication history, and personalized service delivery tracking.",
          zohoApps: ["Zoho CRM", "Zoho Desk", "Zoho Analytics"]
        },
        {
          icon: Shield,
          title: "Compliance & Risk Management",
          description: "Automate compliance tracking, KYC processes, and risk assessments with configurable workflows and audit trails.",
          zohoApps: ["Zoho Creator", "Zoho Sign", "Zoho Vault"]
        },
        {
          icon: FileText,
          title: "Document & Contract Management",
          description: "Manage financial documents, automate contract generation, and ensure secure storage with compliance-ready solutions.",
          zohoApps: ["Zoho WorkDrive", "Zoho Writer", "Zoho Sign"]
        },
        {
          icon: DollarSign,
          title: "Loan & Application Processing",
          description: "Build custom loan origination workflows, track applications, and automate approval processes with integrated notifications.",
          zohoApps: ["Zoho Creator", "Zoho CRM", "Zoho Analytics"]
        },
        {
          icon: BarChart3,
          title: "Financial Analytics & Reporting",
          description: "Generate real-time dashboards for portfolio performance, client analytics, and regulatory reporting requirements.",
          zohoApps: ["Zoho Analytics", "Zoho CRM", "Zoho Creator"]
        }
      ]}
      useCases={[
        { title: "Wealth Management", description: "Track client portfolios and investment performance" },
        { title: "Insurance Agencies", description: "Manage policy lifecycles and renewals efficiently" },
        { title: "Mortgage Lending", description: "Process loan applications with automated workflows" },
        { title: "Investment Advisory", description: "Meet compliance requirements with audit trails" },
        { title: "Fintech", description: "Scale operations with integrated technology stack" },
        { title: "Credit Unions", description: "Modernize member services and engagement" }
      ]}
      benefits={[
        "Automated compliance workflows",
        "Secure client data management",
        "Real-time portfolio visibility",
        "Reduced processing times",
        "Enhanced client experience",
        "Regulatory-ready reporting"
      ]}
      zohoAppsUsed={[
        "Zoho CRM",
        "Zoho Creator",
        "Zoho Analytics",
        "Zoho Sign",
        "Zoho WorkDrive",
        "Zoho Desk",
        "Zoho Marketing Automation",
        "Zoho Vault",
        "Zoho SalesIQ"
      ]}
    />
  );
}
