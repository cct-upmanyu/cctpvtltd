import { IndustryPageTemplate } from "@/components/industry/IndustryPageTemplate";
import { Factory, Cog, Package, ClipboardCheck, BarChart3, Truck } from "lucide-react";

// Import project screenshots
import maverickCampers1 from "@/assets/projects/maverick-campers-1.jpg";
import maverickCampers2 from "@/assets/projects/maverick-campers-2.jpg";
import maverickCampers3 from "@/assets/projects/maverick-campers-3.jpg";
import welloErp1 from "@/assets/projects/wello-erp-1.jpg";
import welloErp2 from "@/assets/projects/wello-erp-2.jpg";
import welloErp3 from "@/assets/projects/wello-erp-3.jpg";

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
      builtSolutions={[
        {
          icon: Package,
          title: "Order Management for Maverick Campers",
          tagline: "Complete order lifecycle from production to customer handover",
          description: "A robust solution managing the complete product order cycle from overseas factory production to customer delivery. Tracks all touchpoints including SO receipt, factory orders, cargo tracking, port arrival, assembly, and final handover. Integrated with Zoho Books for finance and customer sync.",
          features: ["Order Tracking", "VIN Management", "Cargo Tracking", "Zoho Books Integration"],
          screenshots: [maverickCampers1, maverickCampers2, maverickCampers3],
        },
        {
          icon: Factory,
          title: "Production Management ERP for Wello Inc.",
          tagline: "End-to-end manufacturing ERP for medical device production",
          description: "Comprehensive Production Management ERP for Wello Inc., manufacturer of FDA-Cleared medical devices. Manages materials, products, vendors, purchase orders, work orders, stocks, PNR tracking, hold/scrap items, and multi-level approvals. Quality testing and receiving workflows included.",
          features: ["Materials & BOM", "Purchase Orders", "Work Orders", "Quality Testing"],
          screenshots: [welloErp1, welloErp2, welloErp3],
        },
      ]}
    />
  );
}
