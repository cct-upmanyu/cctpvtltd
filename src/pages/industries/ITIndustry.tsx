import { IndustryPageTemplate } from "@/components/industry/IndustryPageTemplate";
import { Monitor, Users, Ticket, Code, Shield, BarChart3 } from "lucide-react";

export default function ITIndustry() {
  return (
    <IndustryPageTemplate
      industry="Information Technology"
      tagline="Build Custom IT Solutions"
      heroDescription="Empower your IT department with custom applications for service management, project tracking, and internal tools. Leverage Zoho One and Zoho Creator for unified IT operations."
      heroImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop"
      solutions={[
        {
          icon: Ticket,
          title: "IT Service Management",
          description: "Complete ITSM solution for incident, problem, and change management.",
          zohoApps: ["Zoho Desk", "Zoho Creator", "Zoho Flow"],
        },
        {
          icon: Monitor,
          title: "Asset Management",
          description: "Track hardware, software, and licenses across your organization.",
          zohoApps: ["Zoho Creator", "Zoho Inventory", "Zoho Analytics"],
        },
        {
          icon: Code,
          title: "Project Management",
          description: "Manage IT projects, sprints, and deliverables with agile methodologies.",
          zohoApps: ["Zoho Projects", "Zoho Sprints", "Zoho Creator"],
        },
        {
          icon: Users,
          title: "Employee Onboarding",
          description: "Automate IT provisioning for new employees with self-service requests.",
          zohoApps: ["Zoho Creator", "Zoho People", "Zoho Flow"],
        },
        {
          icon: Shield,
          title: "Security & Compliance",
          description: "Manage access controls, audit trails, and compliance documentation.",
          zohoApps: ["Zoho Vault", "Zoho Creator", "Zoho Sign"],
        },
        {
          icon: BarChart3,
          title: "IT Analytics",
          description: "Track SLAs, resolution times, and IT performance metrics.",
          zohoApps: ["Zoho Analytics", "Zoho Creator", "Zoho DataPrep"],
        },
      ]}
      useCases={[
        {
          title: "Internal IT Helpdesk",
          description: "Self-service portal for employees to raise tickets and track resolution.",
        },
        {
          title: "Software License Management",
          description: "Track software licenses, renewals, and compliance across the organization.",
        },
        {
          title: "IT Procurement Portal",
          description: "Streamline IT equipment requests, approvals, and procurement.",
        },
        {
          title: "Knowledge Base",
          description: "Build internal documentation and FAQs for common IT issues.",
        },
        {
          title: "Change Management",
          description: "Manage IT changes with approval workflows and impact assessment.",
        },
        {
          title: "Vendor Management",
          description: "Track IT vendors, contracts, and service level agreements.",
        },
      ]}
      benefits={[
        "Reduced ticket resolution time",
        "Improved asset visibility",
        "Automated IT workflows",
        "Better compliance tracking",
        "Enhanced employee productivity",
        "Real-time IT metrics",
        "Centralized knowledge base",
        "Scalable for enterprise needs",
      ]}
      zohoAppsUsed={[
        "Zoho One",
        "Zoho Creator",
        "Zoho Desk",
        "Zoho Projects",
        "Zoho Analytics",
        "Zoho People",
        "Zoho Vault",
        "Zoho Flow",
        "Zoho Sprints",
      ]}
    />
  );
}
