import { IndustryPageTemplate } from "@/components/industry/IndustryPageTemplate";
import { GraduationCap, Users, BookOpen, Calendar, CreditCard, BarChart3 } from "lucide-react";

export default function EducationIndustry() {
  return (
    <IndustryPageTemplate
      industry="Education"
      tagline="Digitize Your Educational Institution"
      heroDescription="Build comprehensive education ERP solutions for student management, admissions, e-learning, and institutional operations using Zoho One and Zoho Creator."
      heroImage="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920&h=1080&fit=crop"
      solutions={[
        {
          icon: Users,
          title: "Student Management",
          description: "Complete student lifecycle management from enrollment to graduation.",
          zohoApps: ["Zoho Creator", "Zoho CRM", "Zoho People"],
        },
        {
          icon: GraduationCap,
          title: "Admissions Portal",
          description: "Streamline the admissions process with online applications and automated workflows.",
          zohoApps: ["Zoho Creator", "Zoho Forms", "Zoho Sign"],
        },
        {
          icon: BookOpen,
          title: "Learning Management",
          description: "Integrate with LMS platforms for seamless course delivery and tracking.",
          zohoApps: ["Zoho Creator", "Zoho Connect", "Zoho Meeting"],
        },
        {
          icon: Calendar,
          title: "Attendance & Scheduling",
          description: "Automated attendance tracking and class scheduling for students and faculty.",
          zohoApps: ["Zoho Creator", "Zoho Calendar", "Zoho Flow"],
        },
        {
          icon: CreditCard,
          title: "Fee Management",
          description: "Comprehensive fee collection, invoicing, and payment tracking system.",
          zohoApps: ["Zoho Books", "Zoho Creator", "Zoho Invoice"],
        },
        {
          icon: BarChart3,
          title: "Academic Analytics",
          description: "Track student performance, attendance patterns, and institutional metrics.",
          zohoApps: ["Zoho Analytics", "Zoho Creator", "Zoho DataPrep"],
        },
      ]}
      useCases={[
        {
          title: "Complete School ERP",
          description: "End-to-end school management system covering all administrative needs.",
        },
        {
          title: "Online Admission System",
          description: "Paperless admission process with document upload and automated eligibility checks.",
        },
        {
          title: "Parent Portal",
          description: "Self-service portal for parents to track attendance, grades, and communicate with teachers.",
        },
        {
          title: "Examination Management",
          description: "Schedule exams, manage grades, and generate report cards automatically.",
        },
        {
          title: "Library Management",
          description: "Track books, manage borrowing, and automate overdue notifications.",
        },
        {
          title: "Alumni Management",
          description: "Maintain alumni database for networking, events, and fundraising.",
        },
      ]}
      benefits={[
        "Paperless administrative processes",
        "Improved parent-teacher communication",
        "Automated fee reminders and collection",
        "Real-time attendance tracking",
        "Centralized student records",
        "Enhanced academic performance tracking",
        "Mobile access for all stakeholders",
        "Scalable for multi-campus institutions",
      ]}
      zohoAppsUsed={[
        "Zoho One",
        "Zoho Creator",
        "Zoho CRM",
        "Zoho Books",
        "Zoho Analytics",
        "Zoho Forms",
        "Zoho Sign",
        "Zoho Meeting",
        "Zoho Connect",
      ]}
    />
  );
}
