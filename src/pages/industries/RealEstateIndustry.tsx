import { IndustryPageTemplate } from "@/components/industry/IndustryPageTemplate";
import { Building2, Users, FileText, DollarSign, BarChart3, Key } from "lucide-react";

export default function RealEstateIndustry() {
  return (
    <IndustryPageTemplate
      industry="Real Estate"
      tagline="Unify Your Real Estate Operations"
      heroDescription="Manage properties, leads, transactions, and tenant engagement through a single platform built on Zoho One and Zoho Creator for seamless real estate operations."
      heroImage="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&h=1080&fit=crop"
      solutions={[
        {
          icon: Building2,
          title: "Property Management",
          description: "Comprehensive property listing, maintenance tracking, and portfolio management.",
          zohoApps: ["Zoho Creator", "Zoho CRM", "Zoho Analytics"],
        },
        {
          icon: Users,
          title: "Lead Management",
          description: "Capture, nurture, and convert leads with automated follow-ups and scoring.",
          zohoApps: ["Zoho CRM", "Zoho SalesIQ", "Zoho Campaigns"],
        },
        {
          icon: Key,
          title: "Tenant Management",
          description: "Manage tenant lifecycle from application to move-out with self-service portals.",
          zohoApps: ["Zoho Creator", "Zoho Sign", "Zoho Desk"],
        },
        {
          icon: FileText,
          title: "Document Automation",
          description: "Generate and manage contracts, leases, and agreements with e-signatures.",
          zohoApps: ["Zoho Sign", "Zoho Writer", "Zoho Creator"],
        },
        {
          icon: DollarSign,
          title: "Financial Management",
          description: "Rent collection, expense tracking, and financial reporting for properties.",
          zohoApps: ["Zoho Books", "Zoho Creator", "Zoho Invoice"],
        },
        {
          icon: BarChart3,
          title: "Portfolio Analytics",
          description: "Track occupancy rates, ROI, and property performance metrics.",
          zohoApps: ["Zoho Analytics", "Zoho Creator", "Zoho DataPrep"],
        },
      ]}
      useCases={[
        {
          title: "Property CRM",
          description: "Complete CRM tailored for real estate with property matching and deal tracking.",
        },
        {
          title: "Tenant Self-Service Portal",
          description: "Portal for tenants to pay rent, submit maintenance requests, and communicate.",
        },
        {
          title: "Listing Management",
          description: "Manage property listings across multiple platforms from a single dashboard.",
        },
        {
          title: "Maintenance Tracking",
          description: "Track maintenance requests, vendor assignments, and work order completion.",
        },
        {
          title: "Commission Management",
          description: "Calculate and track agent commissions with automated payment processing.",
        },
        {
          title: "Investment Analysis",
          description: "Analyze property investments with ROI calculators and financial projections.",
        },
      ]}
      benefits={[
        "Centralized property database",
        "Automated lead nurturing",
        "Streamlined lease management",
        "Improved tenant satisfaction",
        "Faster deal closures",
        "Real-time portfolio visibility",
        "Mobile access for agents",
        "Scalable for growing portfolios",
      ]}
      zohoAppsUsed={[
        "Zoho One",
        "Zoho Creator",
        "Zoho CRM",
        "Zoho Books",
        "Zoho Analytics",
        "Zoho Sign",
        "Zoho Desk",
        "Zoho SalesIQ",
        "Zoho Campaigns",
      ]}
    />
  );
}
