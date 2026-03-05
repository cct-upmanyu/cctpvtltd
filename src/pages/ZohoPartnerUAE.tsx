import { CountryPageTemplate, CountryPageConfig } from "@/components/country/CountryPageTemplate";
import { getCountryBySlug } from "@/data/countryData";
import { Shield, Landmark, CheckCircle, Zap, TrendingUp, BarChart3, FileCheck, Award, Clock, Users, Sparkles, Briefcase, Factory, ShoppingCart, Heart, Building2, Globe, GraduationCap, Cpu, Truck, Home, Scale, Megaphone, Code, Clapperboard, HandHeart } from "lucide-react";
import heroUaeBg from "@/assets/hero-uae-landmarks.png";

const uaeIndustries = [
  { name: "Real Estate & Construction", icon: <Building2 className="w-7 h-7" />, description: "Manage mega-projects, property portfolios, and contractor relationships with integrated ERP solutions.", image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=80" },
  { name: "Trading & Distribution", icon: <Globe className="w-7 h-7" />, description: "Optimize multi-channel trading operations with inventory management and logistics automation.", image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=600&q=80" },
  { name: "Hospitality & Tourism", icon: <Building2 className="w-7 h-7" />, description: "Enhance guest experiences with CRM, booking management, and loyalty program automation.", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80" },
  { name: "Professional Services", icon: <Briefcase className="w-7 h-7" />, description: "Streamline consulting, legal, and financial advisory operations with project and client management tools.", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80" },
  { name: "Healthcare", icon: <Heart className="w-7 h-7" />, description: "Modernize patient care with compliant healthcare management and billing solutions.", image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80" },
  { name: "Financial Services", icon: <Landmark className="w-7 h-7" />, description: "Streamline banking, insurance, and fintech operations with AI-driven compliance monitoring.", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80" },
  { name: "Manufacturing", icon: <Factory className="w-7 h-7" />, description: "Enhance production efficiency with ERP systems, inventory management, and supply chain automation.", image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=600&q=80" },
  { name: "Retail & E-commerce", icon: <ShoppingCart className="w-7 h-7" />, description: "Unify online and offline sales channels with integrated POS, inventory, and customer engagement.", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80" },
  { name: "Education", icon: <GraduationCap className="w-7 h-7" />, description: "Transform institutions with student management, fee collection, and learning management systems.", image: "https://images.unsplash.com/photo-1523050854058-8df90110c476?w=600&q=80" },
  { name: "IT & Technology", icon: <Cpu className="w-7 h-7" />, description: "Scale technology companies with integrated project management, billing, and resource optimization.", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80" },
  { name: "Logistics & Transport", icon: <Truck className="w-7 h-7" />, description: "Optimize fleet management, route planning, and supply chain visibility with real-time tracking.", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80" },
  { name: "Legal Services", icon: <Scale className="w-7 h-7" />, description: "Streamline case management, client billing, and compliance tracking for law firms.", image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&q=80" },
];

export default function ZohoPartnerUAE() {
  const country = getCountryBySlug("uae");
  if (!country) return null;

  const config: CountryPageConfig = {
    country,
    heroImage: heroUaeBg,
    metaTitle: "Zoho Premium Partner UAE – ERP, CRM & AI Automation | ClubCode Technology",
    metaDescription: "Helping UAE businesses implement Zoho CRM, Zoho One, ERP systems, and AI-powered automation with VAT-compliant and PDPL-ready architecture.",
    heroSubtitle: "ERP, CRM, Agentic AI & Robotic Process Automation Experts",
    heroDescription: "Helping United Arab Emirates businesses scale with Zoho, ERP systems, and AI-powered automation. Transform your operations with our proven expertise across Dubai, Abu Dhabi, and beyond.",
    trustBadges: [
      { icon: <Award className="w-4 h-4" />, text: "Global Zoho Premium Partner" },
      { icon: <Clock className="w-4 h-4" />, text: "12+ Years Experience" },
      { icon: <Users className="w-4 h-4" />, text: "4000+ Global Implementations" },
      { icon: <Sparkles className="w-4 h-4" />, text: "200+ Middle East Projects" },
    ],
    socialProof: [
      { icon: <Shield className="w-6 h-6" />, title: "Trusted by UAE", subtitle: "SMEs & Enterprises", color: "#0B1C3D" },
      { icon: <Landmark className="w-6 h-6" />, title: "VAT-Compliant", subtitle: "Implementations", color: "#1a56db" },
      { icon: <CheckCircle className="w-6 h-6" />, title: "PDPL-Ready", subtitle: "Data Protection", color: "#0B1C3D" },
      { icon: <Zap className="w-6 h-6" />, title: "Free Zone", subtitle: "Expertise", color: "#1a56db" },
    ],
    marketDescription: "UAE businesses operate in one of the world's most dynamic markets—from free zone regulations to multi-currency operations. We deliver tailored Zoho solutions that address compliance, scalability, and digital-first expectations.",
    servicesTitle: "Zoho Services for UAE Businesses",
    servicesDescription: "End-to-end Zoho implementation, ERP development, and AI automation tailored for UAE enterprises.",
    businessOutcomes: [
      { icon: <TrendingUp className="w-6 h-6" />, text: "Reduce CRM licensing costs", color: "#3FE0F0" },
      { icon: <Zap className="w-6 h-6" />, text: "Replace legacy ERP systems", color: "#4DA3FF" },
      { icon: <FileCheck className="w-6 h-6" />, text: "Automate VAT compliance", color: "#3FE0F0" },
      { icon: <BarChart3 className="w-6 h-6" />, text: "Improve sales pipeline visibility", color: "#4DA3FF" },
    ],
    industries: uaeIndustries,
    ctaButtonText: "Book a Free UAE Consultation",
    ctaTitle: "Ready to Streamline Operations and Scale Your Business in the UAE?",
  };

  return <CountryPageTemplate config={config} />;
}
