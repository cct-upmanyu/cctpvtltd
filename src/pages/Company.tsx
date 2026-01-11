import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Award, 
  Users, 
  Globe, 
  Target, 
  CheckCircle,
  Lightbulb,
  Shield,
  Handshake,
  TrendingUp,
  Building2,
  Clock,
  MapPin,
  Zap,
  Code,
  Heart
} from "lucide-react";
import cctLogo from "@/assets/cct-logo.png";

const milestones = [
  { year: "2012", title: "Founded", description: "Started as Club Code Technology in India with a vision to transform businesses through technology" },
  { year: "2015", title: "Zoho Partner", description: "Became an official Zoho Partner, beginning our journey in the Zoho ecosystem" },
  { year: "2018", title: "Premium Partner", description: "Elevated to Zoho Premium Partner status, recognizing our expertise and delivery excellence" },
  { year: "2020", title: "AI Integration", description: "Launched AI-powered business automation solutions integrating with Zoho ecosystem" },
  { year: "2022", title: "Creator Champions", description: "Recognized as Zoho Creator Champions for exceptional low-code solutions" },
  { year: "2023", title: "Global Expansion", description: "Expanded to UK, USA, Canada, Australia, and UAE with dedicated local teams" },
  { year: "2024", title: "800+ Projects", description: "Crossed 800+ successful implementations serving clients across 40+ countries" },
];

const values = [
  { icon: Target, title: "Customer Success", description: "Your success is our success. We measure our achievements through your growth and ROI." },
  { icon: Award, title: "Excellence", description: "We strive for excellence in every implementation, every integration, every solution we deliver." },
  { icon: Handshake, title: "Partnership", description: "We work as an extension of your team, understanding your vision, challenges, and goals." },
  { icon: Lightbulb, title: "Innovation", description: "Continuously exploring new technologies to deliver cutting-edge, future-ready solutions." },
  { icon: Shield, title: "Trust & Security", description: "Enterprise-grade security practices and transparent communication at every step." },
  { icon: Heart, title: "Long-Term Relationships", description: "We build lasting partnerships, not just one-time projects—growing with you over time." },
];

const expertise = [
  { icon: Target, title: "CRM Implementation", description: "500+ Zoho CRM implementations across industries" },
  { icon: Code, title: "Custom Development", description: "Low-code & API-based solutions using Zoho Creator" },
  { icon: Zap, title: "Automation", description: "Workflow automation reducing manual work by 50%+" },
  { icon: TrendingUp, title: "AI & Analytics", description: "Zia-powered insights and predictive analytics" },
  { icon: Globe, title: "Integrations", description: "300+ third-party integrations delivered" },
  { icon: Building2, title: "Enterprise Solutions", description: "Multi-entity, multi-country implementations" },
];

const globalPresence = [
  { country: "United Kingdom", city: "London", flag: "🇬🇧" },
  { country: "United States", city: "New York", flag: "🇺🇸" },
  { country: "Canada", city: "Toronto", flag: "🇨🇦" },
  { country: "Australia", city: "Sydney", flag: "🇦🇺" },
  { country: "UAE", city: "Dubai", flag: "🇦🇪" },
  { country: "India", city: "Mumbai (HQ)", flag: "🇮🇳" },
];

const stats = [
  { value: "800+", label: "Projects Delivered" },
  { value: "12+", label: "Years Experience" },
  { value: "6", label: "Global Offices" },
  { value: "50+", label: "Team Members" },
  { value: "40+", label: "Countries Served" },
  { value: "500+", label: "CRM Implementations" },
];

export default function Company() {
  useEffect(() => {
    document.title = "About Us | ClubCode Technology - Zoho Premium Partner";
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'ClubCode Technology is a Global Zoho Premium Partner with 12+ years of experience, 800+ implementations, and presence across UK, USA, Canada, Australia, UAE, and India.');
    
    return () => {
      document.title = "ClubCode Technology";
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero - LIGHT SECTION */}
      <section className="bg-light-gradient pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex justify-center mb-6">
              <img src={cctLogo} alt="ClubCode Technology" className="h-20" />
            </div>
            <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-6">
              Zoho Premium Partner | Zoho Creator Champions
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              ClubCode Technology
              <span className="text-gradient-primary block">Private Limited</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl mb-8 max-w-3xl mx-auto">
              Global Zoho Premium Partner & AI Automation Experts with 12+ years of experience 
              transforming businesses across UK, USA, Canada, Australia, UAE, and India.
            </p>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Formerly known as Club Code Technology, we've grown from a small team in India to a global 
              technology partner trusted by 800+ organizations across 40+ countries.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button size="lg" variant="heroLight">
                  Work With Us
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/case-studies">
                <Button size="lg" variant="outline">
                  View Our Work
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar - DARK SECTION */}
      <section className="bg-[#0B1C3D] py-12">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-white/70">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision - LIGHT SECTION */}
      <section className="bg-light-gradient section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-4">
                Our Mission
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Empowering Businesses to Scale Intelligently
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                We empower businesses to scale intelligently by implementing world-class Zoho, AI, and 
                automation solutions that transform operations and accelerate growth.
              </p>
              <p className="text-muted-foreground mb-6">
                Our approach goes beyond software implementation. We architect complete business operating 
                systems that connect sales, marketing, finance, HR, and operations into a unified platform 
                that delivers real results.
              </p>
              <div className="space-y-3">
                {[
                  "Architecture-first approach to every implementation",
                  "Industry-specific frameworks, not generic templates",
                  "Long-term partnership mindset with ongoing optimization",
                  "Data-driven decisions with comprehensive analytics"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm"
            >
              <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-4">
                Our Vision
              </span>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                The Future of Business Operations
              </h3>
              <p className="text-muted-foreground mb-6">
                We envision a world where businesses of all sizes have access to enterprise-grade 
                technology solutions that were once available only to large corporations.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "30-50%", label: "Reduction in manual work" },
                  { value: "2-4x", label: "Faster decision making" },
                  { value: "100%", label: "Data consistency" },
                  { value: "∞", label: "Scalability" },
                ].map((item, index) => (
                  <div key={index} className="text-center p-4 bg-gray-50 rounded-xl">
                    <div className="text-2xl font-bold text-primary">{item.value}</div>
                    <div className="text-xs text-muted-foreground">{item.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values - DARK SECTION */}
      <section className="bg-[#0B1C3D] section-padding relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-4">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Drives Us Every Day
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Our core values shape how we work, how we treat our clients, and how we build solutions.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">{value.title}</h3>
                  <p className="text-sm text-white/70">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Expertise - LIGHT SECTION */}
      <section className="bg-light-gradient section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-4">
              Our Expertise
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What We Do Best
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Deep expertise across the Zoho ecosystem, AI automation, and enterprise integrations.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertise.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md hover:border-primary/30 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline - DARK SECTION */}
      <section className="bg-[#0B1C3D] section-padding relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-4">
              Our Journey
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              12+ Years of Growth & Excellence
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/5 border border-white/10 rounded-xl p-6"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-2xl font-bold text-primary">{milestone.year}</span>
                    <div className="h-px flex-1 bg-white/20" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">{milestone.title}</h3>
                  <p className="text-sm text-white/70">{milestone.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence - LIGHT SECTION */}
      <section className="bg-light-gradient section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-4">
              Global Presence
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Local Expertise, Global Reach
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              With offices across 6 countries, we provide local support with global capabilities.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {globalPresence.map((location, index) => (
              <motion.div
                key={location.country}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-md hover:border-primary/30 transition-all"
              >
                <span className="text-4xl mb-4 block">{location.flag}</span>
                <h3 className="font-semibold text-foreground mb-1">{location.country}</h3>
                <div className="flex items-center justify-center gap-1 text-muted-foreground text-sm">
                  <MapPin className="w-3 h-3" />
                  {location.city}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - DARK SECTION */}
      <section className="bg-[#0B1C3D] section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-white/70 text-lg mb-8">
              Join 800+ organizations that trust ClubCode Technology for their digital transformation journey.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button size="lg" variant="heroDark">
                  Schedule a Consultation
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/zoho-one-premium-partner">
                <Button size="lg" variant="heroSecondary">
                  Explore Zoho One
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Careers CTA - LIGHT SECTION */}
      <section className="bg-light-gradient section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-4">
              Careers
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Want to Join Our Team?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              We're always looking for talented individuals who share our passion for technology and innovation. 
              Work on exciting projects, grow your skills, and make an impact.
            </p>
            <Link to="/contact">
              <Button size="lg" variant="heroLight">
                View Open Positions
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
