import { IndustryPageTemplate } from "@/components/industry/IndustryPageTemplate";
import { ShoppingCart, Store, Users, BarChart3, Package, CreditCard } from "lucide-react";

export default function RetailIndustry() {
  return (
    <IndustryPageTemplate
      industry="Retail"
      tagline="Transform Your Retail Business"
      heroDescription="Automate backend operations, manage customer engagement, and streamline inventory with custom retail solutions built on Zoho One and Zoho Creator."
      heroImage="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&h=1080&fit=crop"
      solutions={[
        {
          icon: ShoppingCart,
          title: "E-commerce Integration",
          description: "Seamlessly connect your online store with inventory, orders, and customer data.",
          zohoApps: ["Zoho Commerce", "Zoho Inventory", "Zoho Creator"],
        },
        {
          icon: Package,
          title: "Inventory Management",
          description: "Real-time stock tracking across multiple locations with automated reordering.",
          zohoApps: ["Zoho Inventory", "Zoho Creator", "Zoho Analytics"],
        },
        {
          icon: Users,
          title: "Customer Loyalty",
          description: "Build engaging loyalty programs to retain customers and increase repeat purchases.",
          zohoApps: ["Zoho CRM", "Zoho Creator", "Zoho Campaigns"],
        },
        {
          icon: Store,
          title: "POS Integration",
          description: "Connect point-of-sale systems with your backend for unified retail operations.",
          zohoApps: ["Zoho Creator", "Zoho Books", "Zoho Inventory"],
        },
        {
          icon: BarChart3,
          title: "Sales Analytics",
          description: "Track sales performance, customer trends, and inventory turnover with powerful analytics.",
          zohoApps: ["Zoho Analytics", "Zoho CRM", "Zoho Creator"],
        },
        {
          icon: CreditCard,
          title: "Order Management",
          description: "Streamline order processing from placement to delivery with automated workflows.",
          zohoApps: ["Zoho Creator", "Zoho Inventory", "Zoho Books"],
        },
      ]}
      useCases={[
        {
          title: "Multi-Channel Order Management",
          description: "Centralize orders from all sales channels into a single management system.",
        },
        {
          title: "Customer 360 View",
          description: "Complete customer profiles with purchase history, preferences, and engagement data.",
        },
        {
          title: "Warehouse Management",
          description: "Optimize warehouse operations with pick, pack, and ship automation.",
        },
        {
          title: "Franchise Management",
          description: "Manage multiple franchise locations with centralized reporting and controls.",
        },
        {
          title: "Returns Processing",
          description: "Streamline return and refund processes with automated approval workflows.",
        },
        {
          title: "Vendor Management Portal",
          description: "Self-service portal for vendors to manage products, pricing, and orders.",
        },
      ]}
      benefits={[
        "Unified view of all sales channels",
        "Reduced stockouts and overstock situations",
        "Improved customer retention rates",
        "Automated order fulfillment processes",
        "Real-time inventory visibility",
        "Enhanced customer experience",
        "Data-driven merchandising decisions",
        "Scalable multi-location support",
      ]}
      zohoAppsUsed={[
        "Zoho One",
        "Zoho Creator",
        "Zoho Commerce",
        "Zoho Inventory",
        "Zoho CRM",
        "Zoho Books",
        "Zoho Analytics",
        "Zoho Campaigns",
        "Zoho Desk",
      ]}
    />
  );
}
