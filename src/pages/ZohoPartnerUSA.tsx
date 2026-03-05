import { CountryPageTemplate, CountryPageConfig } from "@/components/country/CountryPageTemplate";
import { getCountryBySlug } from "@/data/countryData";
import { Shield, Landmark, CheckCircle, Zap, TrendingUp, BarChart3, FileCheck, Award, Clock, Users, Sparkles, Briefcase, Factory, ShoppingCart, Heart, Building2, Globe, GraduationCap, Cpu, Truck, Home, Scale, Code, Megaphone, Clapperboard, HandHeart } from "lucide-react";
import heroUsaBg from "@/assets/hero-usa-landmarks.png";

const usaIndustries = [
  { name: "Technology & SaaS", icon: <Code className="w-7 h-7" />, description: "Accelerate growth with integrated CRM, marketing automation, and customer success platforms.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80" },
  { name: "Healthcare", icon: <Heart className="w-7 h-7" />, description: "Ensure HIPAA compliance while improving patient care with secure management solutions.", image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80" },
  { name: "Financial Services", icon: <Landmark className="w-7 h-7" />, description: "Maintain SOX compliance while streamlining operations with compliant automation.", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80" },
  { name: "Manufacturing", icon: <Factory className="w-7 h-7" />, description: "Optimize production with lean manufacturing principles and supply chain automation.", image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=600&q=80" },
  { name: "Retail & E-commerce", icon: <ShoppingCart className="w-7 h-7" />, description: "Dominate omnichannel retail with integrated inventory, POS, and customer engagement.", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80" },
  { name: "Professional Services", icon: <Briefcase className="w-7 h-7" />, description: "Optimize legal, accounting, and consulting workflows with integrated CRM and project management.", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80" },
  { name: "Education", icon: <GraduationCap className="w-7 h-7" />, description: "Transform institutions with student management, fee collection, and learning management systems.", image: "https://images.unsplash.com/photo-1523050854058-8df90110c476?w=600&q=80" },
  { name: "Real Estate", icon: <Home className="w-7 h-7" />, description: "Manage property portfolios, tenant relationships, and sales pipelines with integrated CRM solutions.", image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80" },
  { name: "Logistics & Transport", icon: <Truck className="w-7 h-7" />, description: "Optimize fleet management, route planning, and supply chain visibility with real-time tracking.", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80" },
  { name: "Marketing & Creative", icon: <Megaphone className="w-7 h-7" />, description: "Manage campaigns, client relationships, and project workflows with unified marketing automation.", image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=600&q=80" },
  { name: "SaaS & Startups", icon: <Cpu className="w-7 h-7" />, description: "Accelerate growth with subscription billing, customer success, and product analytics tools.", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80" },
  { name: "Nonprofits & NGOs", icon: <HandHeart className="w-7 h-7" />, description: "Track donors, manage volunteers, and automate fundraising with purpose-built CRM solutions.", image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&q=80" },
  { name: "Hospitality & Tourism", icon: <Building2 className="w-7 h-7" />, description: "Enhance guest experiences with CRM, booking management, and loyalty program automation.", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80" },
  { name: "Legal Services", icon: <Scale className="w-7 h-7" />, description: "Streamline case management, client billing, and compliance tracking for law firms.", image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&q=80" },
  { name: "Media & Entertainment", icon: <Clapperboard className="w-7 h-7" />, description: "Manage content pipelines, talent relationships, and distribution with integrated workflows.", image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=600&q=80" },
  { name: "Recruitment & HR", icon: <Users className="w-7 h-7" />, description: "Automate hiring workflows, candidate tracking, and employee onboarding with Zoho Recruit and People.", image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80" },
];

export default function ZohoPartnerUSA() {
  const country = getCountryBySlug("usa");
  if (!country) return null;

  const config: CountryPageConfig = {
    country,
    heroImage: heroUsaBg,
    metaTitle: "Zoho Premium Partner USA – ERP, CRM & AI Automation | ClubCode Technology",
    metaDescription: "Helping US businesses implement Zoho CRM, Zoho One, ERP systems, and AI-powered automation with CCPA, HIPAA, and SOX-compliant architecture.",
    heroSubtitle: "ERP, CRM, Agentic AI & Robotic Process Automation Experts",
    heroDescription: "Helping United States businesses scale with Zoho, ERP systems, and AI-powered automation. Transform your operations with our proven expertise across New York, San Francisco, Chicago, and beyond.",
    trustBadges: [
      { icon: <Award className="w-4 h-4" />, text: "Global Zoho Premium Partner" },
      { icon: <Clock className="w-4 h-4" />, text: "12+ Years Experience" },
      { icon: <Users className="w-4 h-4" />, text: "4000+ Global Implementations" },
      { icon: <Sparkles className="w-4 h-4" />, text: "500+ US Implementations" },
    ],
    socialProof: [
      { icon: <Shield className="w-6 h-6" />, title: "Trusted by US", subtitle: "SMEs & Enterprises", color: "#0B1C3D" },
      { icon: <Landmark className="w-6 h-6" />, title: "HIPAA-Compliant", subtitle: "Healthcare Solutions", color: "#1a56db" },
      { icon: <CheckCircle className="w-6 h-6" />, title: "SOX-Ready", subtitle: "Financial Reporting", color: "#0B1C3D" },
      { icon: <Zap className="w-6 h-6" />, title: "CCPA-Compliant", subtitle: "Data Privacy", color: "#1a56db" },
    ],
    marketDescription: "US businesses face intense competition requiring operational excellence, multi-state regulatory complexity, and high customer expectations for digital experiences. We deliver tailored Zoho solutions that drive efficiency, compliance, and growth.",
    servicesTitle: "Zoho Services for US Businesses",
    servicesDescription: "End-to-end Zoho implementation, ERP development, and AI automation tailored for American enterprises.",
    businessOutcomes: [
      { icon: <TrendingUp className="w-6 h-6" />, text: "Reduce CRM licensing costs", color: "#3FE0F0" },
      { icon: <Zap className="w-6 h-6" />, text: "Replace legacy ERP systems", color: "#4DA3FF" },
      { icon: <FileCheck className="w-6 h-6" />, text: "Automate compliance reporting", color: "#3FE0F0" },
      { icon: <BarChart3 className="w-6 h-6" />, text: "Improve sales pipeline visibility", color: "#4DA3FF" },
    ],
    industries: usaIndustries,
    ctaButtonText: "Book a Free US Consultation",
    ctaTitle: "Ready to Streamline Operations and Scale Your Business in the United States?",
  };

  return <CountryPageTemplate config={config} />;
}
