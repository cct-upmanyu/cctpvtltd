import { IndustryPageTemplate } from "@/components/industry/IndustryPageTemplate";
import { Palette, Users, FileText, BarChart3, Clock, DollarSign } from "lucide-react";

export default function MarketingCreativeIndustry() {
  return (
    <IndustryPageTemplate
      industry="Marketing & Creative"
      tagline="Unleash Creative Excellence at Scale"
      heroDescription="Power your marketing agency or creative studio with integrated project management, client collaboration, resource planning, and financial tracking. Zoho One unifies creative workflows from pitch to delivery with measurable results."
      heroImage="https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&q=80&w=1920"
      solutions={[
        {
          icon: Users,
          title: "Client & Campaign Management",
          description: "Manage client relationships, track campaigns, and measure performance with integrated CRM and marketing automation tools.",
          zohoApps: ["Zoho CRM", "Zoho Marketing Automation", "Zoho Campaigns"]
        },
        {
          icon: Palette,
          title: "Project & Creative Workflow",
          description: "Orchestrate creative projects from brief to delivery with task management, approvals, and version control for creative assets.",
          zohoApps: ["Zoho Projects", "Zoho WorkDrive", "Zoho Creator"]
        },
        {
          icon: Clock,
          title: "Resource & Time Tracking",
          description: "Allocate creative resources, track billable hours, and optimize team utilization with real-time visibility and reporting.",
          zohoApps: ["Zoho Projects", "Zoho People", "Zoho Analytics"]
        },
        {
          icon: DollarSign,
          title: "Billing & Profitability",
          description: "Track project budgets, generate invoices, and analyze profitability per client and campaign with integrated financial tools.",
          zohoApps: ["Zoho Books", "Zoho Invoice", "Zoho Analytics"]
        },
        {
          icon: FileText,
          title: "Proposal & Contract Management",
          description: "Create professional proposals, manage contracts, and streamline approvals with templates and e-signature integration.",
          zohoApps: ["Zoho Writer", "Zoho Sign", "Zoho CRM"]
        },
        {
          icon: BarChart3,
          title: "Performance Analytics",
          description: "Measure campaign ROI, creative productivity, and client satisfaction with comprehensive analytics and reporting dashboards.",
          zohoApps: ["Zoho Analytics", "Zoho Survey", "Zoho Social"]
        }
      ]}
      useCases={[
        { title: "Digital Marketing", description: "Manage multi-channel campaigns with performance tracking" },
        { title: "Creative Studios", description: "Coordinate design projects with approval workflows" },
        { title: "Advertising Agencies", description: "Track client deliverables and campaign milestones" },
        { title: "Content Agencies", description: "Manage editorial workflows and publishing calendars" },
        { title: "PR Firms", description: "Track media relations, coverage, and client outreach" },
        { title: "Brand Consultancies", description: "Strategic project management with client collaboration" }
      ]}
      benefits={[
        "Streamlined creative approvals",
        "Accurate project profitability",
        "Improved resource utilization",
        "Faster campaign delivery",
        "Client collaboration portals",
        "Integrated campaign analytics"
      ]}
      zohoAppsUsed={[
        "Zoho CRM",
        "Zoho Projects",
        "Zoho Marketing Automation",
        "Zoho Books",
        "Zoho Analytics",
        "Zoho Social",
        "Zoho WorkDrive",
        "Zoho Sign",
        "Zoho Campaigns"
      ]}
    />
  );
}
