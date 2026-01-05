import { IndustryPageTemplate } from "@/components/industry/IndustryPageTemplate";
import { Heart, Users, HandHeart, Calendar, DollarSign, BarChart3 } from "lucide-react";

export default function NonprofitIndustry() {
  return (
    <IndustryPageTemplate
      industry="Nonprofits"
      tagline="Amplify Your Impact"
      heroDescription="Automate fundraising, volunteer management, and program delivery with custom nonprofit solutions built on Zoho One and Zoho Creator."
      heroImage="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1920&h=1080&fit=crop"
      solutions={[
        {
          icon: DollarSign,
          title: "Fundraising Management",
          description: "Track donations, manage campaigns, and automate donor communications.",
          zohoApps: ["Zoho CRM", "Zoho Creator", "Zoho Campaigns"],
        },
        {
          icon: Users,
          title: "Donor Management",
          description: "Complete donor profiles with giving history, preferences, and engagement tracking.",
          zohoApps: ["Zoho CRM", "Zoho Creator", "Zoho Analytics"],
        },
        {
          icon: HandHeart,
          title: "Volunteer Management",
          description: "Recruit, schedule, and track volunteer hours and contributions.",
          zohoApps: ["Zoho Creator", "Zoho Bookings", "Zoho People"],
        },
        {
          icon: Calendar,
          title: "Event Management",
          description: "Plan and manage fundraising events, galas, and community programs.",
          zohoApps: ["Zoho Creator", "Zoho Backstage", "Zoho Flow"],
        },
        {
          icon: Heart,
          title: "Program Tracking",
          description: "Track program outcomes, beneficiary data, and impact metrics.",
          zohoApps: ["Zoho Creator", "Zoho Analytics", "Zoho Forms"],
        },
        {
          icon: BarChart3,
          title: "Impact Reporting",
          description: "Generate comprehensive reports for stakeholders, boards, and funders.",
          zohoApps: ["Zoho Analytics", "Zoho Creator", "Zoho DataPrep"],
        },
      ]}
      useCases={[
        {
          title: "Donor CRM",
          description: "Tailored CRM for nonprofits with donation tracking and stewardship workflows.",
        },
        {
          title: "Volunteer Portal",
          description: "Self-service portal for volunteers to sign up for shifts and log hours.",
        },
        {
          title: "Grant Management",
          description: "Track grant applications, deadlines, and reporting requirements.",
        },
        {
          title: "Beneficiary Database",
          description: "Manage beneficiary information, services received, and outcomes.",
        },
        {
          title: "Recurring Donations",
          description: "Set up and manage monthly giving programs with automated processing.",
        },
        {
          title: "Board Portal",
          description: "Secure portal for board members to access documents and meeting materials.",
        },
      ]}
      benefits={[
        "Increased donor retention",
        "Streamlined volunteer management",
        "Better program outcomes tracking",
        "Automated fundraising workflows",
        "Improved stakeholder reporting",
        "Reduced administrative overhead",
        "Enhanced donor experience",
        "Scalable as your mission grows",
      ]}
      zohoAppsUsed={[
        "Zoho One",
        "Zoho Creator",
        "Zoho CRM",
        "Zoho Books",
        "Zoho Analytics",
        "Zoho Campaigns",
        "Zoho Bookings",
        "Zoho Forms",
        "Zoho Sign",
      ]}
    />
  );
}
