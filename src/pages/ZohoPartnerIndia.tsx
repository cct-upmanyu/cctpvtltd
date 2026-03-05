import { CountryPageTemplate, CountryPageConfig } from "@/components/country/CountryPageTemplate";
import { getCountryBySlug } from "@/data/countryData";
import { Shield, Landmark, CheckCircle, Zap, TrendingUp, BarChart3, FileCheck, Award, Clock, Users, Sparkles, Briefcase, Factory, ShoppingCart, Heart, Building2, Globe, GraduationCap, Cpu, Truck, Home, Scale, Code } from "lucide-react";
import heroIndiaBg from "@/assets/hero-india-landmarks.png";

const indiaIndustries = [
  { name: "IT & Technology", icon: <Cpu className="w-7 h-7" />, description: "Scale technology companies with integrated project management, billing, and resource optimization.", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80" },
  { name: "Manufacturing", icon: <Factory className="w-7 h-7" />, description: "Modernize production with GST-compliant ERP, inventory management, and supply chain automation.", image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=600&q=80" },
  { name: "Retail & FMCG", icon: <ShoppingCart className="w-7 h-7" />, description: "Unify distribution networks with inventory tracking, order management, and retailer portals.", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80" },
  { name: "Healthcare", icon: <Heart className="w-7 h-7" />, description: "Improve patient care with hospital management, appointment booking, and billing automation.", image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80" },
  { name: "Education", icon: <GraduationCap className="w-7 h-7" />, description: "Transform institutions with student management, fee collection, and learning management systems.", image: "https://images.unsplash.com/photo-1523050854058-8df90110c476?w=600&q=80" },
  { name: "Financial Services", icon: <Landmark className="w-7 h-7" />, description: "Streamline banking, insurance, and fintech with RBI-compliant automation solutions.", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80" },
  { name: "Professional Services", icon: <Briefcase className="w-7 h-7" />, description: "Optimize consulting, legal, and accounting workflows with integrated CRM and project management.", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80" },
  { name: "Real Estate", icon: <Home className="w-7 h-7" />, description: "Manage property portfolios, tenant relationships, and sales pipelines with RERA-compliant CRM.", image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80" },
  { name: "Logistics & Transport", icon: <Truck className="w-7 h-7" />, description: "Optimize fleet management, e-way bills, and supply chain visibility with real-time tracking.", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80" },
  { name: "Hospitality & Tourism", icon: <Building2 className="w-7 h-7" />, description: "Enhance guest experiences with CRM, booking management, and loyalty program automation.", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80" },
  { name: "SaaS & Startups", icon: <Code className="w-7 h-7" />, description: "Accelerate growth with subscription billing, customer success, and product analytics tools.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80" },
  { name: "Legal Services", icon: <Scale className="w-7 h-7" />, description: "Streamline case management, client billing, and compliance tracking for law firms.", image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&q=80" },
];

export default function ZohoPartnerIndia() {
  const country = getCountryBySlug("india");
  if (!country) return null;

  const config: CountryPageConfig = {
    country,
    heroImage: heroIndiaBg,
    metaTitle: "Zoho Premium Partner India – ERP, CRM & AI Automation | ClubCode Technology",
    metaDescription: "Helping Indian businesses implement Zoho CRM, Zoho One, ERP systems, and AI-powered automation with GST-compliant and DPDP Act-ready architecture.",
    heroSubtitle: "ERP, CRM, Agentic AI & Robotic Process Automation Experts",
    heroDescription: "Helping Indian businesses scale with Zoho, ERP systems, and AI-powered automation. Transform your operations with our proven expertise across Mumbai, Delhi, Bangalore, and beyond.",
    trustBadges: [
      { icon: <Award className="w-4 h-4" />, text: "Global Zoho Premium Partner" },
      { icon: <Clock className="w-4 h-4" />, text: "12+ Years Experience" },
      { icon: <Users className="w-4 h-4" />, text: "4000+ Global Implementations" },
      { icon: <Sparkles className="w-4 h-4" />, text: "1000+ India Projects" },
    ],
    socialProof: [
      { icon: <Shield className="w-6 h-6" />, title: "Trusted by Indian", subtitle: "SMEs & Enterprises", color: "#0B1C3D" },
      { icon: <Landmark className="w-6 h-6" />, title: "GST-Compliant", subtitle: "Implementations", color: "#1a56db" },
      { icon: <CheckCircle className="w-6 h-6" />, title: "DPDP Act", subtitle: "Ready Solutions", color: "#0B1C3D" },
      { icon: <Zap className="w-6 h-6" />, title: "UPI & Razorpay", subtitle: "Integrations", color: "#1a56db" },
    ],
    marketDescription: "Indian businesses face unique challenges—from complex GST compliance across states to rapid digital transformation and diverse market localization. We deliver tailored Zoho solutions that address regulatory needs, automation, and scalable growth.",
    servicesTitle: "Zoho Services for Indian Businesses",
    servicesDescription: "End-to-end Zoho implementation, ERP development, and AI automation tailored for Indian enterprises.",
    businessOutcomes: [
      { icon: <TrendingUp className="w-6 h-6" />, text: "Reduce CRM licensing costs", color: "#3FE0F0" },
      { icon: <Zap className="w-6 h-6" />, text: "Replace legacy ERP systems", color: "#4DA3FF" },
      { icon: <FileCheck className="w-6 h-6" />, text: "Automate GST compliance", color: "#3FE0F0" },
      { icon: <BarChart3 className="w-6 h-6" />, text: "Improve sales pipeline visibility", color: "#4DA3FF" },
    ],
    industries: indiaIndustries,
    ctaButtonText: "Book a Free India Consultation",
    ctaTitle: "Ready to Streamline Operations and Scale Your Business in India?",
  };

  return <CountryPageTemplate config={config} />;
}
