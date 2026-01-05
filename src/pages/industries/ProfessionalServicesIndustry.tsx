import { IndustryPageTemplate } from "@/components/industry/IndustryPageTemplate";
import { Briefcase, Users, Clock, FileText, DollarSign, BarChart3 } from "lucide-react";

export default function ProfessionalServicesIndustry() {
  return (
    <IndustryPageTemplate
      industry="Professional Services"
      tagline="Deliver Exceptional Client Service"
      heroDescription="Build custom solutions for consulting, legal, and professional service firms. Increase productivity and client engagement with Zoho One and Zoho Creator."
      heroImage="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&h=1080&fit=crop"
      solutions={[
        {
          icon: Users,
          title: "Client Management",
          description: "Complete client lifecycle management with project history and engagement tracking.",
          zohoApps: ["Zoho CRM", "Zoho Creator", "Zoho Analytics"],
        },
        {
          icon: Clock,
          title: "Time & Billing",
          description: "Track billable hours, generate invoices, and manage retainer agreements.",
          zohoApps: ["Zoho Creator", "Zoho Invoice", "Zoho Books"],
        },
        {
          icon: Briefcase,
          title: "Project Management",
          description: "Manage client projects, deliverables, and team resources efficiently.",
          zohoApps: ["Zoho Projects", "Zoho Creator", "Zoho Sprints"],
        },
        {
          icon: FileText,
          title: "Document Management",
          description: "Secure document storage, collaboration, and client sharing portals.",
          zohoApps: ["Zoho WorkDrive", "Zoho Creator", "Zoho Sign"],
        },
        {
          icon: DollarSign,
          title: "Financial Management",
          description: "Track revenue, expenses, and profitability by client and project.",
          zohoApps: ["Zoho Books", "Zoho Creator", "Zoho Analytics"],
        },
        {
          icon: BarChart3,
          title: "Practice Analytics",
          description: "Track utilization rates, revenue per partner, and practice metrics.",
          zohoApps: ["Zoho Analytics", "Zoho Creator", "Zoho DataPrep"],
        },
      ]}
      useCases={[
        {
          title: "PSA Platform",
          description: "Professional Services Automation for end-to-end engagement management.",
        },
        {
          title: "Client Portal",
          description: "Self-service portal for clients to access documents and track project status.",
        },
        {
          title: "Resource Planning",
          description: "Allocate team members to projects based on skills and availability.",
        },
        {
          title: "Proposal Management",
          description: "Create, track, and manage client proposals with approval workflows.",
        },
        {
          title: "Knowledge Management",
          description: "Build internal knowledge base with best practices and templates.",
        },
        {
          title: "Partner Dashboard",
          description: "Executive dashboards for partners to track firm performance.",
        },
      ]}
      benefits={[
        "Improved billable utilization",
        "Faster invoicing cycles",
        "Better project visibility",
        "Enhanced client experience",
        "Streamlined document workflows",
        "Real-time profitability insights",
        "Mobile access for consultants",
        "Scalable for growing practices",
      ]}
      zohoAppsUsed={[
        "Zoho One",
        "Zoho Creator",
        "Zoho CRM",
        "Zoho Projects",
        "Zoho Books",
        "Zoho Analytics",
        "Zoho WorkDrive",
        "Zoho Sign",
        "Zoho Invoice",
      ]}
    />
  );
}
