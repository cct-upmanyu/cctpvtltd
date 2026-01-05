import { IndustryPageTemplate } from "@/components/industry/IndustryPageTemplate";
import { Factory, Cog, Package, ClipboardCheck, BarChart3, Truck } from "lucide-react";

export default function ManufacturingIndustry() {
  return (
    <IndustryPageTemplate
      industry="Manufacturing"
      tagline="Streamline Your Manufacturing Operations"
      heroDescription="Digitize your entire manufacturing process with custom ERP solutions. From production planning to quality control, leverage Zoho One and Zoho Creator for seamless operations."
      heroImage="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&h=1080&fit=crop"
      solutions={[
        {
          icon: Factory,
          title: "Production Planning",
          description: "Optimize production schedules, manage work orders, and track manufacturing progress in real-time.",
          zohoApps: ["Zoho Creator", "Zoho Analytics", "Zoho Flow"],
        },
        {
          icon: Package,
          title: "Inventory Management",
          description: "Track raw materials, WIP, and finished goods with automated reorder points and stock alerts.",
          zohoApps: ["Zoho Inventory", "Zoho Creator", "Zoho Books"],
        },
        {
          icon: ClipboardCheck,
          title: "Quality Control",
          description: "Implement quality checkpoints, manage inspections, and maintain compliance documentation.",
          zohoApps: ["Zoho Creator", "Zoho Forms", "Zoho Sign"],
        },
        {
          icon: Cog,
          title: "Equipment Management",
          description: "Schedule preventive maintenance, track equipment performance, and manage repair workflows.",
          zohoApps: ["Zoho Creator", "Zoho FSM", "Zoho Desk"],
        },
        {
          icon: BarChart3,
          title: "Production Analytics",
          description: "Real-time dashboards for OEE, production metrics, and performance KPIs.",
          zohoApps: ["Zoho Analytics", "Zoho Creator", "Zoho DataPrep"],
        },
        {
          icon: Truck,
          title: "Supply Chain",
          description: "Manage vendors, purchase orders, and logistics for seamless supply chain operations.",
          zohoApps: ["Zoho Inventory", "Zoho CRM", "Zoho Creator"],
        },
      ]}
      useCases={[
        {
          title: "Custom Manufacturing ERP",
          description: "Build a tailored ERP system that fits your unique manufacturing processes and workflows.",
        },
        {
          title: "Bill of Materials Management",
          description: "Create and manage complex BOMs with multi-level assemblies and version control.",
        },
        {
          title: "Shop Floor Control",
          description: "Track production in real-time with barcode scanning and worker time tracking.",
        },
        {
          title: "Vendor Portal",
          description: "Self-service portal for vendors to manage orders, invoices, and delivery schedules.",
        },
        {
          title: "Quality Inspection App",
          description: "Mobile app for quality inspectors with checklists, photo capture, and approval workflows.",
        },
        {
          title: "Production Scheduling",
          description: "Drag-and-drop scheduling for optimal resource allocation and capacity planning.",
        },
      ]}
      benefits={[
        "Reduce production downtime by up to 40%",
        "Real-time visibility across all operations",
        "Automated inventory replenishment",
        "Paperless quality control processes",
        "Integrated supplier management",
        "Custom reports and analytics dashboards",
        "Mobile access for shop floor managers",
        "Scalable as your operations grow",
      ]}
      zohoAppsUsed={[
        "Zoho One",
        "Zoho Creator",
        "Zoho Inventory",
        "Zoho Books",
        "Zoho Analytics",
        "Zoho CRM",
        "Zoho Flow",
        "Zoho FSM",
        "Zoho Desk",
      ]}
    />
  );
}
