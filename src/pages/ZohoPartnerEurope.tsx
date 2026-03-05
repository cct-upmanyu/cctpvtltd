import { CountryPageTemplate, CountryPageConfig } from "@/components/country/CountryPageTemplate";
import { getCountryBySlug } from "@/data/countryData";
import { Shield, Landmark, CheckCircle, Zap, TrendingUp, BarChart3, FileCheck, Award, Clock, Users, Sparkles, Briefcase, Factory, ShoppingCart, Heart, Building2, Globe, GraduationCap, Cpu, Truck, Home, Scale, Code, Megaphone } from "lucide-react";
import heroEuropeBg from "@/assets/hero-europe-landmarks.png";

const europeIndustries = [
  { name: "Manufacturing", icon: <Factory className="w-7 h-7" />, description: "Optimize production across borders with multi-language ERP and supply chain management.", image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=600&q=80" },
  { name: "Professional Services", icon: <Briefcase className="w-7 h-7" />, description: "Streamline consulting, legal, and accounting operations across EU markets.", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80" },
  { name: "Retail & E-commerce", icon: <ShoppingCart className="w-7 h-7" />, description: "Manage cross-border sales with multi-currency, multi-language commerce solutions.", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80" },
  { name: "Financial Services", icon: <Landmark className="w-7 h-7" />, description: "Ensure compliance with EU banking regulations while driving digital transformation.", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80" },
  { name: "Healthcare", icon: <Heart className="w-7 h-7" />, description: "Improve patient care with GDPR-compliant healthcare management across borders.", image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80" },
  { name: "IT & Technology", icon: <Cpu className="w-7 h-7" />, description: "Scale technology companies with integrated project management, billing, and resource optimization.", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80" },
  { name: "Education", icon: <GraduationCap className="w-7 h-7" />, description: "Transform institutions with student management, fee collection, and learning management systems.", image: "https://images.unsplash.com/photo-1523050854058-8df90110c476?w=600&q=80" },
  { name: "Logistics & Transport", icon: <Truck className="w-7 h-7" />, description: "Optimize cross-border fleet management, route planning, and supply chain visibility.", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80" },
  { name: "Real Estate", icon: <Home className="w-7 h-7" />, description: "Manage property portfolios across European markets with integrated CRM solutions.", image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80" },
  { name: "Hospitality & Tourism", icon: <Building2 className="w-7 h-7" />, description: "Enhance guest experiences with CRM, booking management, and loyalty program automation.", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80" },
  { name: "Marketing & Creative", icon: <Megaphone className="w-7 h-7" />, description: "Manage multi-market campaigns with unified marketing automation and analytics.", image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=600&q=80" },
  { name: "Legal Services", icon: <Scale className="w-7 h-7" />, description: "Streamline case management across jurisdictions with multi-language compliance tracking.", image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&q=80" },
];

export default function ZohoPartnerEurope() {
  const country = getCountryBySlug("europe");
  if (!country) return null;

  const config: CountryPageConfig = {
    country,
    heroImage: heroEuropeBg,
    metaTitle: "Zoho Premium Partner Europe – ERP, CRM & AI Automation | ClubCode Technology",
    metaDescription: "Helping European businesses implement Zoho CRM, Zoho One, ERP systems, and AI-powered automation with GDPR-compliant and EU VAT-ready architecture.",
    heroSubtitle: "ERP, CRM, Agentic AI & Robotic Process Automation Experts",
    heroDescription: "Helping European businesses scale with Zoho, ERP systems, and AI-powered automation. Transform your operations with our proven expertise across Germany, France, Netherlands, and beyond.",
    trustBadges: [
      { icon: <Award className="w-4 h-4" />, text: "Global Zoho Premium Partner" },
      { icon: <Clock className="w-4 h-4" />, text: "12+ Years Experience" },
      { icon: <Users className="w-4 h-4" />, text: "4000+ Global Implementations" },
      { icon: <Sparkles className="w-4 h-4" />, text: "300+ European Projects" },
    ],
    socialProof: [
      { icon: <Shield className="w-6 h-6" />, title: "Trusted by European", subtitle: "SMEs & Enterprises", color: "#0B1C3D" },
      { icon: <Landmark className="w-6 h-6" />, title: "GDPR-Compliant", subtitle: "Implementations", color: "#1a56db" },
      { icon: <CheckCircle className="w-6 h-6" />, title: "EU VAT", subtitle: "Ready Solutions", color: "#0B1C3D" },
      { icon: <Zap className="w-6 h-6" />, title: "Multi-Language", subtitle: "Support", color: "#1a56db" },
    ],
    marketDescription: "European businesses face multi-country, multi-language operational complexity with strict GDPR compliance and cross-border VAT differences. We deliver tailored Zoho solutions that address regulatory needs, localization, and seamless cross-border operations.",
    servicesTitle: "Zoho Services for European Businesses",
    servicesDescription: "End-to-end Zoho implementation, ERP development, and AI automation tailored for European enterprises.",
    businessOutcomes: [
      { icon: <TrendingUp className="w-6 h-6" />, text: "Reduce CRM licensing costs", color: "#3FE0F0" },
      { icon: <Zap className="w-6 h-6" />, text: "Replace legacy ERP systems", color: "#4DA3FF" },
      { icon: <FileCheck className="w-6 h-6" />, text: "Automate GDPR compliance", color: "#3FE0F0" },
      { icon: <BarChart3 className="w-6 h-6" />, text: "Improve cross-border visibility", color: "#4DA3FF" },
    ],
    industries: europeIndustries,
    ctaButtonText: "Book a Free European Consultation",
    ctaTitle: "Ready to Streamline Operations and Scale Your Business Across Europe?",
  };

  return <CountryPageTemplate config={config} />;
}
