import { IndustryPageTemplate } from "@/components/industry/IndustryPageTemplate";
import { Scale, FileText, Clock, Users, DollarSign, Shield } from "lucide-react";

export default function LegalIndustry() {
  return (
    <IndustryPageTemplate
      industry="Legal & Law Firms"
      tagline="Modernize Legal Practice Management"
      heroDescription="Streamline client intake, case management, time tracking, billing, and document management with Zoho One. Build a connected legal practice that ensures compliance, improves client experience, and maximizes billable hours."
      heroImage="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1920"
      solutions={[
        {
          icon: Users,
          title: "Client Intake & Matter Management",
          description: "Automate client onboarding, conflict checks, and matter creation with integrated workflows that capture all relevant case information.",
          zohoApps: ["Zoho CRM", "Zoho Forms", "Zoho Creator"]
        },
        {
          icon: FileText,
          title: "Document Management & Assembly",
          description: "Manage legal documents, automate document assembly, and ensure version control with secure cloud-based storage and e-signatures.",
          zohoApps: ["Zoho WorkDrive", "Zoho Writer", "Zoho Sign"]
        },
        {
          icon: Clock,
          title: "Time Tracking & Billing",
          description: "Track billable hours, generate detailed invoices, and manage trust accounting with automated time entry and billing workflows.",
          zohoApps: ["Zoho Invoice", "Zoho Books", "Zoho Creator"]
        },
        {
          icon: DollarSign,
          title: "Trust Accounting & Finance",
          description: "Manage client trust accounts, track expenses, and ensure compliance with legal accounting requirements and audit trails.",
          zohoApps: ["Zoho Books", "Zoho Expense", "Zoho Analytics"]
        },
        {
          icon: Scale,
          title: "Case & Deadline Management",
          description: "Track case milestones, court dates, and deadlines with automated reminders and calendar integrations across the firm.",
          zohoApps: ["Zoho Projects", "Zoho Calendar", "Zoho Creator"]
        },
        {
          icon: Shield,
          title: "Compliance & Security",
          description: "Ensure data security, maintain audit trails, and comply with legal ethics requirements with enterprise-grade security controls.",
          zohoApps: ["Zoho Vault", "Zoho Directory", "Zoho Analytics"]
        }
      ]}
      useCases={[
        { title: "Corporate Law", description: "Manage complex client portfolios and transaction workflows" },
        { title: "Litigation", description: "Track case progress, deadlines, and court filings systematically" },
        { title: "Immigration Law", description: "High-volume case processing with compliance automation" },
        { title: "Family Law", description: "Handle sensitive matters with secure client communication" },
        { title: "IP Law", description: "Track filings, renewals, and portfolio management" },
        { title: "Solo Practice", description: "All-in-one practice management for independent attorneys" }
      ]}
      benefits={[
        "Automated conflict checking",
        "Accurate time capture and billing",
        "Secure document management",
        "Client portal for self-service",
        "Trust accounting compliance",
        "Reduced administrative overhead"
      ]}
      zohoAppsUsed={[
        "Zoho CRM",
        "Zoho Creator",
        "Zoho Books",
        "Zoho Invoice",
        "Zoho Sign",
        "Zoho WorkDrive",
        "Zoho Projects",
        "Zoho Analytics",
        "Zoho Vault"
      ]}
    />
  );
}
