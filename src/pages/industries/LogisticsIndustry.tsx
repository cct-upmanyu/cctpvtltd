import { IndustryPageTemplate } from "@/components/industry/IndustryPageTemplate";
import { Truck, MapPin, Package, Users, BarChart3, Clock } from "lucide-react";

// Import project screenshots
import mekarTransport1 from "@/assets/projects/mekar-transport-1.jpg";
import mekarTransport2 from "@/assets/projects/mekar-transport-2.jpg";
import mekarTransport3 from "@/assets/projects/mekar-transport-3.jpg";
import fleetManagement1 from "@/assets/projects/fleet-management-1.jpg";
import fleetManagement2 from "@/assets/projects/fleet-management-2.jpg";
import fleetManagement3 from "@/assets/projects/fleet-management-3.jpg";

export default function LogisticsIndustry() {
  return (
    <IndustryPageTemplate
      industry="Logistics"
      tagline="Optimize Your Logistics Operations"
      heroDescription="Digitize your entire logistics operation from fleet management to last-mile delivery. Improve efficiency and customer experience with Zoho One and Zoho Creator."
      heroImage="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&h=1080&fit=crop"
      solutions={[
        {
          icon: Truck,
          title: "Fleet Management",
          description: "Track vehicles, manage maintenance schedules, and optimize fleet utilization.",
          zohoApps: ["Zoho Creator", "Zoho FSM", "Zoho Analytics"],
        },
        {
          icon: MapPin,
          title: "Route Optimization",
          description: "Plan optimal routes to reduce fuel costs and improve delivery times.",
          zohoApps: ["Zoho Creator", "Zoho Flow", "Zoho Maps"],
        },
        {
          icon: Package,
          title: "Shipment Tracking",
          description: "Real-time tracking of shipments with automated status updates to customers.",
          zohoApps: ["Zoho Creator", "Zoho CRM", "Zoho Desk"],
        },
        {
          icon: Users,
          title: "Driver Management",
          description: "Manage driver schedules, assignments, and performance tracking.",
          zohoApps: ["Zoho People", "Zoho Creator", "Zoho Payroll"],
        },
        {
          icon: Clock,
          title: "Delivery Scheduling",
          description: "Automated delivery scheduling with customer notification and confirmation.",
          zohoApps: ["Zoho Creator", "Zoho Bookings", "Zoho Flow"],
        },
        {
          icon: BarChart3,
          title: "Operations Analytics",
          description: "Comprehensive dashboards for delivery performance, costs, and efficiency metrics.",
          zohoApps: ["Zoho Analytics", "Zoho Creator", "Zoho DataPrep"],
        },
      ]}
      useCases={[
        {
          title: "Transport Management System",
          description: "Complete TMS for managing shipments, carriers, and freight operations.",
        },
        {
          title: "Last-Mile Delivery App",
          description: "Mobile app for delivery personnel with route guidance and proof of delivery.",
        },
        {
          title: "Customer Tracking Portal",
          description: "Self-service portal for customers to track shipments and manage deliveries.",
        },
        {
          title: "Warehouse Operations",
          description: "Manage receiving, putaway, picking, and shipping operations.",
        },
        {
          title: "Carrier Management",
          description: "Manage multiple carriers with rate comparison and performance tracking.",
        },
        {
          title: "Returns Logistics",
          description: "Streamline reverse logistics with automated return processing.",
        },
      ]}
      benefits={[
        "Reduced fuel and operational costs",
        "Improved on-time delivery rates",
        "Real-time visibility across operations",
        "Enhanced customer communication",
        "Optimized fleet utilization",
        "Automated dispatch and routing",
        "Mobile access for drivers",
        "Scalable for growing operations",
      ]}
      zohoAppsUsed={[
        "Zoho One",
        "Zoho Creator",
        "Zoho FSM",
        "Zoho CRM",
        "Zoho Analytics",
        "Zoho People",
        "Zoho Desk",
        "Zoho Bookings",
        "Zoho Flow",
      ]}
      builtSolutions={[
        {
          icon: Truck,
          title: "MEKAR Transport Management System",
          tagline: "Complete ERP for transport and logistics operations",
          description: "A comprehensive Transport Management System built for Maker.ae. Manages trips, dispatches, drivers, operators, and proof of delivery. Role-based dashboards for administrators, drivers, and operators with real-time tracking, dispatch management, and POD workflows.",
          features: ["Trip Management", "Dispatch Tracking", "POD System", "Role-Based Dashboards"],
          screenshots: [mekarTransport1, mekarTransport2, mekarTransport3],
        },
        {
          icon: MapPin,
          title: "Fleet Management & Rental System",
          tagline: "Vehicle fleet management with subscription and rental tracking",
          description: "End-to-end fleet management solution with vehicle tracking, maintenance schedules, insurance management, and subscription-based rental plans. Supports multiple partners, vendors, and vehicle types with complete service task and reminder management.",
          features: ["Vehicle Tracking", "Maintenance Management", "Subscription Plans", "Partner Portal"],
          screenshots: [fleetManagement1, fleetManagement2, fleetManagement3],
        },
      ]}
    />
  );
}
