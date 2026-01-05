import { IndustryPageTemplate } from "@/components/industry/IndustryPageTemplate";
import { Heart, Users, Calendar, FileText, CreditCard, BarChart3 } from "lucide-react";

export default function HealthcareIndustry() {
  return (
    <IndustryPageTemplate
      industry="Healthcare"
      tagline="Digitally Transform Healthcare Delivery"
      heroDescription="Modernize patient management, automate medical billing, and maintain electronic health records with custom healthcare solutions built on Zoho One and Zoho Creator."
      heroImage="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=1920&h=1080&fit=crop"
      solutions={[
        {
          icon: Users,
          title: "Patient Management",
          description: "Complete patient lifecycle management from registration to follow-up care.",
          zohoApps: ["Zoho Creator", "Zoho CRM", "Zoho Forms"],
        },
        {
          icon: Calendar,
          title: "Appointment Scheduling",
          description: "Online booking, automated reminders, and capacity management for clinics.",
          zohoApps: ["Zoho Bookings", "Zoho Creator", "Zoho Flow"],
        },
        {
          icon: FileText,
          title: "Electronic Health Records",
          description: "Secure, compliant EHR system with easy access to patient history.",
          zohoApps: ["Zoho Creator", "Zoho Vault", "Zoho Sign"],
        },
        {
          icon: CreditCard,
          title: "Medical Billing",
          description: "Automated billing, insurance claims processing, and payment tracking.",
          zohoApps: ["Zoho Books", "Zoho Creator", "Zoho Invoice"],
        },
        {
          icon: Heart,
          title: "Care Coordination",
          description: "Coordinate care across departments and providers for better patient outcomes.",
          zohoApps: ["Zoho Creator", "Zoho Connect", "Zoho Cliq"],
        },
        {
          icon: BarChart3,
          title: "Healthcare Analytics",
          description: "Track patient outcomes, operational metrics, and financial performance.",
          zohoApps: ["Zoho Analytics", "Zoho Creator", "Zoho DataPrep"],
        },
      ]}
      useCases={[
        {
          title: "Clinic Management System",
          description: "Complete solution for managing single or multi-location clinics.",
        },
        {
          title: "Patient Portal",
          description: "Self-service portal for patients to book appointments and view records.",
        },
        {
          title: "Telemedicine Platform",
          description: "Virtual consultation system with video calls and digital prescriptions.",
        },
        {
          title: "Lab Management",
          description: "Track samples, manage test results, and automate report generation.",
        },
        {
          title: "Pharmacy Management",
          description: "Inventory management, prescription tracking, and automated reordering.",
        },
        {
          title: "Staff Scheduling",
          description: "Manage shifts, on-call rotations, and leave for healthcare staff.",
        },
      ]}
      benefits={[
        "Improved patient experience",
        "Reduced administrative burden",
        "Faster insurance claim processing",
        "Secure, compliant data storage",
        "Better care coordination",
        "Real-time operational visibility",
        "Mobile access for staff",
        "Scalable for multi-location practices",
      ]}
      zohoAppsUsed={[
        "Zoho One",
        "Zoho Creator",
        "Zoho CRM",
        "Zoho Books",
        "Zoho Analytics",
        "Zoho Bookings",
        "Zoho Vault",
        "Zoho Sign",
        "Zoho Connect",
      ]}
    />
  );
}
