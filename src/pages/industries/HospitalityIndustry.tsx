import { IndustryPageTemplate } from "@/components/industry/IndustryPageTemplate";
import { Hotel, Users, Calendar, Utensils, Star, BarChart3 } from "lucide-react";

export default function HospitalityIndustry() {
  return (
    <IndustryPageTemplate
      industry="Hospitality"
      tagline="Elevate Your Guest Experience"
      heroDescription="Build holistic hospitality management solutions for hotels, restaurants, and resorts. Achieve personalized guest experiences with Zoho One and Zoho Creator."
      heroImage="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&h=1080&fit=crop"
      solutions={[
        {
          icon: Hotel,
          title: "Property Management",
          description: "Manage reservations, room inventory, and housekeeping operations seamlessly.",
          zohoApps: ["Zoho Creator", "Zoho Bookings", "Zoho Analytics"],
        },
        {
          icon: Calendar,
          title: "Reservation System",
          description: "Online booking engine with real-time availability and automated confirmations.",
          zohoApps: ["Zoho Bookings", "Zoho Creator", "Zoho Flow"],
        },
        {
          icon: Users,
          title: "Guest Management",
          description: "Complete guest profiles with preferences, history, and loyalty tracking.",
          zohoApps: ["Zoho CRM", "Zoho Creator", "Zoho Campaigns"],
        },
        {
          icon: Utensils,
          title: "F&B Operations",
          description: "Restaurant and banquet management with menu planning and inventory control.",
          zohoApps: ["Zoho Creator", "Zoho Inventory", "Zoho Books"],
        },
        {
          icon: Star,
          title: "Guest Feedback",
          description: "Collect and analyze guest feedback to continuously improve service quality.",
          zohoApps: ["Zoho Survey", "Zoho Desk", "Zoho Analytics"],
        },
        {
          icon: BarChart3,
          title: "Revenue Analytics",
          description: "Track occupancy, ADR, RevPAR, and other key hospitality metrics.",
          zohoApps: ["Zoho Analytics", "Zoho Creator", "Zoho DataPrep"],
        },
      ]}
      useCases={[
        {
          title: "Hotel Management System",
          description: "Complete HMS for managing rooms, guests, and operations efficiently.",
        },
        {
          title: "Guest Self-Service App",
          description: "Mobile app for guests to check-in, request services, and provide feedback.",
        },
        {
          title: "Event Management",
          description: "Manage conferences, weddings, and events with comprehensive planning tools.",
        },
        {
          title: "Housekeeping Management",
          description: "Track room status, assign tasks, and manage housekeeping schedules.",
        },
        {
          title: "Loyalty Program",
          description: "Build and manage guest loyalty programs with points and rewards.",
        },
        {
          title: "Multi-Property Dashboard",
          description: "Centralized view of operations across multiple properties.",
        },
      ]}
      benefits={[
        "Enhanced guest experience",
        "Increased direct bookings",
        "Streamlined operations",
        "Improved staff productivity",
        "Better revenue management",
        "Real-time operational insights",
        "Mobile access for staff",
        "Scalable for property chains",
      ]}
      zohoAppsUsed={[
        "Zoho One",
        "Zoho Creator",
        "Zoho CRM",
        "Zoho Books",
        "Zoho Analytics",
        "Zoho Bookings",
        "Zoho Inventory",
        "Zoho Survey",
        "Zoho Desk",
      ]}
    />
  );
}
