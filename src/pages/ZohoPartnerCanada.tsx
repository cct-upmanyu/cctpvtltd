import { CountryPageTemplate, CountryPageConfig } from "@/components/country/CountryPageTemplate";
import { getCountryBySlug } from "@/data/countryData";
import { Shield, Landmark, CheckCircle, Zap, TrendingUp, BarChart3, FileCheck, Award, Clock, Users, Sparkles, Briefcase, Factory, ShoppingCart, Heart, Building2, Globe, GraduationCap, Cpu, Truck, Home, Scale, Code, Leaf } from "lucide-react";
import heroCanadaBg from "@/assets/hero-canada-landmarks.png";

const canadaIndustries = [
  { name: "Technology & SaaS", icon: <Code className="w-7 h-7" />, description: "Scale software companies with integrated CRM, billing, and customer success automation.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80" },
  { name: "Natural Resources", icon: <Leaf className="w-7 h-7" />, description: "Optimize oil, gas, and mining operations with comprehensive ERP and field management solutions.", image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&q=80" },
  { name: "Financial Services", icon: <Landmark className="w-7 h-7" />, description: "Streamline banking, insurance, and fintech operations with compliant automation solutions.", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80" },
  { name: "Manufacturing", icon: <Factory className="w-7 h-7" />, description: "Enhance production efficiency with inventory management and supply chain optimization.", image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=600&q=80" },
  { name: "Healthcare", icon: <Heart className="w-7 h-7" />, description: "Improve patient outcomes with compliant healthcare management and billing systems.", image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80" },
  { name: "Professional Services", icon: <Briefcase className="w-7 h-7" />, description: "Optimize legal, accounting, and consulting workflows with integrated CRM and project management.", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80" },
  { name: "Retail & E-commerce", icon: <ShoppingCart className="w-7 h-7" />, description: "Unify online and offline sales channels with integrated POS, inventory, and customer engagement.", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80" },
  { name: "Education", icon: <GraduationCap className="w-7 h-7" />, description: "Transform institutions with student management, fee collection, and learning management systems.", image: "https://images.unsplash.com/photo-1523050854058-8df90110c476?w=600&q=80" },
  { name: "Real Estate", icon: <Home className="w-7 h-7" />, description: "Manage property portfolios, tenant relationships, and sales pipelines with integrated CRM solutions.", image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80" },
  { name: "Logistics & Transport", icon: <Truck className="w-7 h-7" />, description: "Optimize fleet management, route planning, and supply chain visibility with real-time tracking.", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80" },
  { name: "Hospitality & Tourism", icon: <Building2 className="w-7 h-7" />, description: "Enhance guest experiences with CRM, booking management, and loyalty program automation.", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80" },
  { name: "IT & Technology", icon: <Cpu className="w-7 h-7" />, description: "Scale technology companies with integrated project management, billing, and resource optimization.", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80" },
];

export default function ZohoPartnerCanada() {
  const country = getCountryBySlug("canada");
  if (!country) return null;

  const config: CountryPageConfig = {
    country,
    heroImage: heroCanadaBg,
    metaTitle: "Zoho Premium Partner Canada – ERP, CRM & AI Automation | ClubCode Technology",
    metaDescription: "Helping Canadian businesses implement Zoho CRM, Zoho One, ERP systems, and AI-powered automation with PIPEDA and CASL-compliant architecture.",
    heroSubtitle: "ERP, CRM, Agentic AI & Robotic Process Automation Experts",
    heroDescription: "Helping Canadian businesses scale with Zoho, ERP systems, and AI-powered automation. Transform your operations with our proven expertise across Toronto, Vancouver, Montreal, and beyond.",
    trustBadges: [
      { icon: <Award className="w-4 h-4" />, text: "Global Zoho Premium Partner" },
      { icon: <Clock className="w-4 h-4" />, text: "12+ Years Experience" },
      { icon: <Users className="w-4 h-4" />, text: "4000+ Global Implementations" },
      { icon: <Sparkles className="w-4 h-4" />, text: "100+ North America Projects" },
    ],
    socialProof: [
      { icon: <Shield className="w-6 h-6" />, title: "Trusted by Canadian", subtitle: "SMEs & Enterprises", color: "#0B1C3D" },
      { icon: <Landmark className="w-6 h-6" />, title: "PIPEDA-Compliant", subtitle: "Implementations", color: "#1a56db" },
      { icon: <CheckCircle className="w-6 h-6" />, title: "CASL-Ready", subtitle: "Communications", color: "#0B1C3D" },
      { icon: <Zap className="w-6 h-6" />, title: "Bilingual", subtitle: "EN/FR Support", color: "#1a56db" },
    ],
    marketDescription: "Canadian businesses face unique challenges—from bilingual requirements to cross-provincial regulatory differences and US market proximity. We deliver tailored Zoho solutions that address compliance, competitiveness, and operational efficiency.",
    servicesTitle: "Zoho Services for Canadian Businesses",
    servicesDescription: "End-to-end Zoho implementation, ERP development, and AI automation tailored for Canadian enterprises.",
    businessOutcomes: [
      { icon: <TrendingUp className="w-6 h-6" />, text: "Reduce CRM licensing costs", color: "#3FE0F0" },
      { icon: <Zap className="w-6 h-6" />, text: "Replace legacy ERP systems", color: "#4DA3FF" },
      { icon: <FileCheck className="w-6 h-6" />, text: "Automate PIPEDA compliance", color: "#3FE0F0" },
      { icon: <BarChart3 className="w-6 h-6" />, text: "Improve sales pipeline visibility", color: "#4DA3FF" },
    ],
    industries: canadaIndustries,
    ctaButtonText: "Book a Free Canada Consultation",
    ctaTitle: "Ready to Streamline Operations and Scale Your Business in Canada?",
  };

  return <CountryPageTemplate config={config} />;
}
