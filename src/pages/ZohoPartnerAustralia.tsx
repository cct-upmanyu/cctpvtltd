import { CountryPageTemplate, CountryPageConfig } from "@/components/country/CountryPageTemplate";
import { getCountryBySlug } from "@/data/countryData";
import { Shield, Landmark, CheckCircle, Zap, TrendingUp, BarChart3, FileCheck, Award, Clock, Users, Sparkles, Briefcase, Factory, ShoppingCart, Heart, Building2, Globe, GraduationCap, Cpu, Truck, Home, Scale, Megaphone, Code, Clapperboard, HandHeart, Leaf } from "lucide-react";
import heroAuBg from "@/assets/hero-australia-landmarks.png";

const auIndustries = [
  { name: "Mining & Resources", icon: <Factory className="w-7 h-7" />, description: "Optimize extraction operations, equipment management, and contractor coordination with specialized ERP solutions.", image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&q=80" },
  { name: "Agriculture", icon: <Leaf className="w-7 h-7" />, description: "Modernize farm management with inventory tracking, supply chain automation, and market connectivity.", image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&q=80" },
  { name: "Professional Services", icon: <Briefcase className="w-7 h-7" />, description: "Enhance legal, accounting, and consulting practices with integrated CRM and project management.", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80" },
  { name: "Retail & E-commerce", icon: <ShoppingCart className="w-7 h-7" />, description: "Unify omnichannel retail operations with inventory, POS, and customer engagement tools.", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80" },
  { name: "Healthcare", icon: <Heart className="w-7 h-7" />, description: "Improve patient care with compliant practice management and billing solutions.", image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80" },
  { name: "Financial Services", icon: <Landmark className="w-7 h-7" />, description: "Streamline banking, insurance, and fintech operations with ASIC-compliant automation.", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80" },
  { name: "Manufacturing", icon: <Factory className="w-7 h-7" />, description: "Enhance production efficiency with ERP systems, inventory management, and supply chain automation.", image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=600&q=80" },
  { name: "Education", icon: <GraduationCap className="w-7 h-7" />, description: "Transform institutions with student management, fee collection, and learning management systems.", image: "https://images.unsplash.com/photo-1523050854058-8df90110c476?w=600&q=80" },
  { name: "IT & Technology", icon: <Cpu className="w-7 h-7" />, description: "Scale technology companies with integrated project management, billing, and resource optimization.", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80" },
  { name: "Hospitality & Tourism", icon: <Building2 className="w-7 h-7" />, description: "Enhance guest experiences with CRM, booking management, and loyalty program automation.", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80" },
  { name: "Logistics & Transport", icon: <Truck className="w-7 h-7" />, description: "Optimize fleet management, route planning, and supply chain visibility with real-time tracking.", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80" },
  { name: "Real Estate", icon: <Home className="w-7 h-7" />, description: "Manage property portfolios, tenant relationships, and sales pipelines with integrated CRM solutions.", image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80" },
];

export default function ZohoPartnerAustralia() {
  const country = getCountryBySlug("australia");
  if (!country) return null;

  const config: CountryPageConfig = {
    country,
    heroImage: heroAuBg,
    metaTitle: "Zoho Premium Partner Australia – ERP, CRM & AI Automation | ClubCode Technology",
    metaDescription: "Helping Australian businesses implement Zoho CRM, Zoho One, ERP systems, and AI-powered automation with Privacy Act and GST-compliant architecture.",
    heroSubtitle: "ERP, CRM, Agentic AI & Robotic Process Automation Experts",
    heroDescription: "Helping Australian businesses scale with Zoho, ERP systems, and AI-powered automation. Transform your operations with our proven expertise across Sydney, Melbourne, Brisbane, and beyond.",
    trustBadges: [
      { icon: <Award className="w-4 h-4" />, text: "Global Zoho Premium Partner" },
      { icon: <Clock className="w-4 h-4" />, text: "12+ Years Experience" },
      { icon: <Users className="w-4 h-4" />, text: "4000+ Global Implementations" },
      { icon: <Sparkles className="w-4 h-4" />, text: "150+ APAC Projects" },
    ],
    socialProof: [
      { icon: <Shield className="w-6 h-6" />, title: "Trusted by Australian", subtitle: "SMEs & Enterprises", color: "#0B1C3D" },
      { icon: <Landmark className="w-6 h-6" />, title: "ASIC-Compliant", subtitle: "Implementations", color: "#1a56db" },
      { icon: <CheckCircle className="w-6 h-6" />, title: "Privacy Act", subtitle: "Ready Solutions", color: "#0B1C3D" },
      { icon: <Zap className="w-6 h-6" />, title: "GST-Compliant", subtitle: "Invoicing", color: "#1a56db" },
    ],
    marketDescription: "Australian businesses face unique challenges—from geographic dispersion to skilled labor shortages and growing compliance requirements. We deliver tailored Zoho solutions that address efficiency, automation, and growth across all states.",
    servicesTitle: "Zoho Services for Australian Businesses",
    servicesDescription: "End-to-end Zoho implementation, ERP development, and AI automation tailored for Australian enterprises.",
    businessOutcomes: [
      { icon: <TrendingUp className="w-6 h-6" />, text: "Reduce CRM licensing costs", color: "#3FE0F0" },
      { icon: <Zap className="w-6 h-6" />, text: "Replace legacy ERP systems", color: "#4DA3FF" },
      { icon: <FileCheck className="w-6 h-6" />, text: "Automate GST compliance", color: "#3FE0F0" },
      { icon: <BarChart3 className="w-6 h-6" />, text: "Improve sales pipeline visibility", color: "#4DA3FF" },
    ],
    industries: auIndustries,
    ctaButtonText: "Book a Free Australia Consultation",
    ctaTitle: "Ready to Streamline Operations and Scale Your Business in Australia?",
  };

  return <CountryPageTemplate config={config} />;
}
