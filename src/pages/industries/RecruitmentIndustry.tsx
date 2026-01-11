import { IndustryPageTemplate } from "@/components/industry/IndustryPageTemplate";
import { Users, FileText, Briefcase, DollarSign, BarChart3, Clock } from "lucide-react";

export default function RecruitmentIndustry() {
  return (
    <IndustryPageTemplate
      industry="Recruitment & Staffing"
      tagline="Streamline Hiring, Onboarding & Workforce Management"
      heroDescription="Transform your recruitment agency with unified candidate tracking, client management, timesheets, payroll, and compliance—all connected through Zoho One. From sourcing to placement, manage the complete recruitment lifecycle efficiently."
      heroImage="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=1920"
      solutions={[
        {
          icon: Users,
          title: "Candidate Pipeline Management",
          description: "Track candidates from sourcing to placement with automated workflows, resume parsing, and skill matching across multiple job openings.",
          zohoApps: ["Zoho Recruit", "Zoho CRM", "Zoho Forms"]
        },
        {
          icon: Briefcase,
          title: "Client & Job Order Management",
          description: "Manage client relationships, job requirements, contracts, and billing in a unified platform with real-time visibility.",
          zohoApps: ["Zoho CRM", "Zoho Books", "Zoho Sign"]
        },
        {
          icon: FileText,
          title: "Contract & Compliance Automation",
          description: "Generate contracts, track compliance requirements, and manage documentation with automated workflows and e-signatures.",
          zohoApps: ["Zoho Sign", "Zoho Writer", "Zoho Creator"]
        },
        {
          icon: DollarSign,
          title: "Payroll & Commission Management",
          description: "Automate contractor payroll, calculate commissions, and manage invoicing with integrated financial workflows.",
          zohoApps: ["Zoho Payroll", "Zoho Books", "Zoho Expense"]
        },
        {
          icon: Clock,
          title: "Timesheet & Attendance Tracking",
          description: "Track contractor hours, manage attendance, and automate timesheet approvals with mobile-friendly solutions.",
          zohoApps: ["Zoho People", "Zoho Creator", "Zoho Analytics"]
        },
        {
          icon: BarChart3,
          title: "Recruitment Analytics & Reporting",
          description: "Gain insights into placement rates, time-to-hire, revenue per recruiter, and client profitability with real-time dashboards.",
          zohoApps: ["Zoho Analytics", "Zoho CRM", "Zoho Recruit"]
        }
      ]}
      useCases={[
        { title: "IT Staffing", description: "Manage contract and permanent placements with integrated timesheets" },
        { title: "Healthcare Recruitment", description: "Track compliance, certifications, and credentialing workflows" },
        { title: "Executive Search", description: "Track high-value placements with detailed candidate profiles" },
        { title: "Temp Staffing", description: "Manage large contractor workforces with automated scheduling" },
        { title: "RPO Services", description: "Handle volume recruitment with scalable processes" },
        { title: "Niche Recruitment", description: "Build specialized pipelines for industry-specific talent" }
      ]}
      benefits={[
        "50% faster time-to-placement",
        "Unified candidate and client database",
        "Automated compliance and documentation",
        "Real-time commission calculations",
        "Mobile-first recruiter workflows",
        "Integrated invoicing and payments"
      ]}
      zohoAppsUsed={[
        "Zoho Recruit",
        "Zoho CRM",
        "Zoho People",
        "Zoho Books",
        "Zoho Payroll",
        "Zoho Sign",
        "Zoho Analytics",
        "Zoho Creator",
        "Zoho Expense"
      ]}
    />
  );
}
