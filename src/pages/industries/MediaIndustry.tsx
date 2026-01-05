import { IndustryPageTemplate } from "@/components/industry/IndustryPageTemplate";
import { Film, Users, Calendar, FileText, DollarSign, BarChart3 } from "lucide-react";

export default function MediaIndustry() {
  return (
    <IndustryPageTemplate
      industry="Media"
      tagline="Streamline Your Media Operations"
      heroDescription="Custom media management solutions for publishing, advertising, and content management. Build scalable workflows with Zoho One and Zoho Creator."
      heroImage="https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=1920&h=1080&fit=crop"
      solutions={[
        {
          icon: FileText,
          title: "Content Management",
          description: "Manage content creation, approvals, and publishing workflows.",
          zohoApps: ["Zoho Creator", "Zoho Writer", "Zoho Flow"],
        },
        {
          icon: Calendar,
          title: "Editorial Calendar",
          description: "Plan and schedule content across multiple platforms and channels.",
          zohoApps: ["Zoho Creator", "Zoho Calendar", "Zoho Projects"],
        },
        {
          icon: Users,
          title: "Talent Management",
          description: "Manage talent database, contracts, and scheduling for productions.",
          zohoApps: ["Zoho CRM", "Zoho Creator", "Zoho Sign"],
        },
        {
          icon: DollarSign,
          title: "Ad Sales Management",
          description: "Track advertising inventory, sales, and campaign performance.",
          zohoApps: ["Zoho CRM", "Zoho Creator", "Zoho Analytics"],
        },
        {
          icon: Film,
          title: "Production Management",
          description: "Manage production schedules, resources, and deliverables.",
          zohoApps: ["Zoho Projects", "Zoho Creator", "Zoho People"],
        },
        {
          icon: BarChart3,
          title: "Audience Analytics",
          description: "Track audience engagement, content performance, and revenue metrics.",
          zohoApps: ["Zoho Analytics", "Zoho Creator", "Zoho DataPrep"],
        },
      ]}
      useCases={[
        {
          title: "Publishing Workflow",
          description: "End-to-end workflow for content creation, editing, and publishing.",
        },
        {
          title: "Digital Asset Management",
          description: "Organize and manage media assets with tagging and version control.",
        },
        {
          title: "Subscription Management",
          description: "Manage subscriber database, billing, and retention campaigns.",
        },
        {
          title: "Freelancer Portal",
          description: "Self-service portal for freelancers to submit work and track payments.",
        },
        {
          title: "Rights Management",
          description: "Track content rights, licensing, and usage across platforms.",
        },
        {
          title: "Event Coverage",
          description: "Coordinate coverage teams, schedules, and content delivery for events.",
        },
      ]}
      benefits={[
        "Faster content-to-publish cycles",
        "Streamlined approval workflows",
        "Better talent utilization",
        "Increased ad revenue tracking",
        "Centralized asset management",
        "Real-time performance insights",
        "Mobile access for field teams",
        "Scalable for multi-platform operations",
      ]}
      zohoAppsUsed={[
        "Zoho One",
        "Zoho Creator",
        "Zoho CRM",
        "Zoho Projects",
        "Zoho Analytics",
        "Zoho Writer",
        "Zoho Sign",
        "Zoho Flow",
        "Zoho Calendar",
      ]}
    />
  );
}
