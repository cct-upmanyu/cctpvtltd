import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Check, 
  Users, 
  Building2, 
  Globe, 
  Zap, 
  Shield, 
  HeadphonesIcon,
  TrendingUp,
  Clock,
  Award,
  Star,
  BarChart3,
  Layers,
  Settings,
  Workflow,
  Database,
  Mail,
  DollarSign,
  Target,
  Briefcase,
  ShoppingCart
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import zohoOneLogo from "@/assets/zoho-one-logo.png";

// JSON-LD Structured Data for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "ClubCode Technology - Zoho Premium Partner",
  "description": "Certified Zoho Premium Partner providing implementation, customization, and support services for Zoho One - The Operating System for Business with 50+ integrated apps.",
  "url": "https://www.clubcodetechnology.com/zoho-one-premium-partner",
  "logo": "https://www.clubcodetechnology.com/logo.png",
  "sameAs": [
    "https://www.linkedin.com/company/clubcodetechnology",
    "https://twitter.com/clubcodetech"
  ],
  "offers": {
    "@type": "Offer",
    "name": "Zoho One Implementation Services",
    "description": "Complete Zoho One implementation, customization, and training services"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "150"
  }
};

const stats = [
  { value: "75,000+", label: "Businesses Worldwide", icon: Building2 },
  { value: "50+", label: "Apps Included", icon: Layers },
  { value: "1000+", label: "Integrations", icon: Workflow },
  { value: "99.9%", label: "Uptime Guarantee", icon: Shield },
  { value: "46,000+", label: "Max Users per Business", icon: Users },
  { value: "4.5/5", label: "Average Rating", icon: Star }
];

const departments = [
  {
    name: "Sales",
    description: "Define and automate your sales process. Capture, engage, convert, and grow at a consistent pace.",
    apps: ["Zoho CRM", "Bigin", "Bookings", "SalesIQ"],
    icon: Target,
    color: "from-blue-500 to-cyan-500"
  },
  {
    name: "Marketing",
    description: "Build a business presence, send prospects the right messages, and get great returns on your marketing budget.",
    apps: ["Marketing Automation", "Campaigns", "Forms", "Social", "Thrive"],
    icon: TrendingUp,
    color: "from-purple-500 to-pink-500"
  },
  {
    name: "Customer Service",
    description: "Enable your teams to field customer support requests across channels and improve satisfaction.",
    apps: ["Zoho Desk", "Assist", "Lens"],
    icon: HeadphonesIcon,
    color: "from-green-500 to-emerald-500"
  },
  {
    name: "Finance",
    description: "Gain access to accounting tools that help organize your finances, track payables, and manage expenses.",
    apps: ["Books", "Invoice", "Expense", "Checkout", "Billing", "Payroll"],
    icon: DollarSign,
    color: "from-yellow-500 to-orange-500"
  },
  {
    name: "HR & Recruitment",
    description: "Find new talent, manage employees, and build a strong organizational culture.",
    apps: ["Zoho People", "Recruit"],
    icon: Users,
    color: "from-indigo-500 to-blue-500"
  },
  {
    name: "Operations",
    description: "Fulfill orders quickly, manage projects, and create custom apps for your unique processes.",
    apps: ["Projects", "Sprints", "Inventory"],
    icon: Settings,
    color: "from-red-500 to-rose-500"
  },
  {
    name: "eCommerce",
    description: "Make your website the face of your business and sell in combination with other tools.",
    apps: ["Sites", "Commerce", "PageSense"],
    icon: ShoppingCart,
    color: "from-teal-500 to-cyan-500"
  }
];

const collaborationFeatures = [
  {
    name: "Communications",
    description: "Communicate instantly using one-to-one and group chats accessible from any tab.",
    apps: ["Cliq", "Mail"],
    icon: Mail
  },
  {
    name: "Collaboration",
    description: "Collaborate through notes, shared group emails, and spreadsheets.",
    apps: ["Connect", "TeamInbox", "Notebook", "Sheet", "Vani"],
    icon: Users
  },
  {
    name: "Content & Storage",
    description: "Create and file away business documents with plenty of data storage.",
    apps: ["WorkDrive", "Writer", "Show", "Learn"],
    icon: Database
  },
  {
    name: "Project Management",
    description: "Access project management tools like task lists, dashboards, and workflow rules.",
    apps: ["Projects", "Sprints"],
    icon: Briefcase
  }
];

const benefits = [
  {
    title: "Seamless Launch",
    description: "Step-by-step onboarding facilitates smooth transition. Scale from 5 apps to 50 without procurement struggles.",
    icon: Zap
  },
  {
    title: "Dependable Support",
    description: "Free technical assistance from Zoho, plus priority support and implementation from certified partners.",
    icon: HeadphonesIcon
  },
  {
    title: "Enterprise Security",
    description: "99.9% uptime with TLS 1.2/1.3 encryption. All connections secured with strong ciphers.",
    icon: Shield
  },
  {
    title: "Cost Effective",
    description: "All employee pricing at $37/user/month. Many apps, one simple invoice.",
    icon: DollarSign
  }
];

const partnerBenefits = [
  "Certified Zoho Premium Partner with 10+ years experience",
  "Dedicated implementation specialists for each Zoho app",
  "Custom development and API integration expertise",
  "24/7 priority support and training",
  "Data migration from legacy systems",
  "Industry-specific workflow automation",
  "Multi-country deployment experience",
  "Ongoing optimization and health checks"
];

const faqs = [
  {
    question: "What is Zoho One?",
    answer: "Zoho One is the Operating System for Business - a unified platform with 50+ integrated applications covering Sales, Marketing, Customer Service, Finance, HR, Operations, and more. It helps growing businesses manage their entire operation on one system."
  },
  {
    question: "How much does Zoho One cost?",
    answer: "Zoho One offers all-employee pricing at $37/employee/month when billed annually. This includes access to 50+ apps, centralized administrative control, mobile device management, and platform customization capabilities."
  },
  {
    question: "Why choose a Zoho Premium Partner?",
    answer: "A Zoho Premium Partner like ClubCode Technology provides certified expertise, faster implementation, custom development, industry-specific solutions, and dedicated support that ensures maximum ROI from your Zoho investment."
  },
  {
    question: "Can Zoho One integrate with my existing tools?",
    answer: "Yes! Zoho One offers 1000+ interoperable integrations with third-party apps. Our team can also build custom integrations using Zoho's robust APIs to connect with any system."
  },
  {
    question: "How long does Zoho One implementation take?",
    answer: "Implementation timelines vary based on complexity. Basic setups can be completed in 2-4 weeks, while enterprise deployments with custom development typically take 2-3 months. We provide detailed project timelines during consultation."
  },
  {
    question: "Do you provide training for Zoho One?",
    answer: "Absolutely! We offer comprehensive training programs including hands-on workshops, role-based training sessions, video tutorials, and ongoing support to ensure your team maximizes Zoho One's potential."
  }
];

export default function ZohoOnePremiumPartner() {
  useEffect(() => {
    // Set document title
    document.title = "Zoho One Premium Partner | Complete Business OS Implementation | ClubCode Technology";
    
    // Set meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Certified Zoho One Premium Partner offering complete implementation, customization, and support. 50+ integrated apps, 75,000+ businesses worldwide. Get free consultation today.');
    
    // Set canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://www.clubcodetechnology.com/zoho-one-premium-partner');
    
    // Add JSON-LD structured data
    let script = document.querySelector('#structured-data');
    if (!script) {
      script = document.createElement('script');
      script.id = 'structured-data';
      script.setAttribute('type', 'application/ld+json');
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(structuredData);
    
    return () => {
      // Cleanup on unmount
      document.title = "ClubCode Technology";
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
        
        <main>
          {/* Hero Section */}
          <section className="relative bg-dark-gradient text-dark-section pt-32 pb-20 overflow-hidden">
            <div className="absolute inset-0 particles-bg opacity-50" />
            
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-primary/20 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -30, 0],
                    opacity: [0.2, 0.5, 0.2],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>
            
            <div className="container-custom relative z-10">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 mb-6">
                    <Award className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-primary">Certified Zoho Premium Partner</span>
                  </div>
                  
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                    <span className="text-gradient-primary">Zoho One</span>
                    <br />
                    The Operating System for Business
                  </h1>
                  
                  <p className="text-xl text-dark-section-secondary mb-8 max-w-xl">
                    Transform your business with 50+ integrated applications. Win more customers, 
                    manage employees, track finances, and handle operations on one unified platform.
                  </p>
                  
                  <div className="flex flex-wrap gap-4 mb-8">
                    <Button variant="heroPrimary" size="lg" asChild>
                      <Link to="/contact">
                        Get Free Consultation
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Link>
                    </Button>
                    <Button variant="outline" size="lg" className="border-primary/50 text-primary hover:bg-primary/10">
                      Book Live Demo
                    </Button>
                  </div>
                  
                  <div className="flex items-center gap-6 text-sm text-dark-section-secondary">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-primary" />
                      Free 30-day trial
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-primary" />
                      No credit card required
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-primary" />
                      Free support
                    </div>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="relative"
                >
                  <div className="relative bg-card-dark/50 rounded-2xl p-8 border border-primary/20 backdrop-blur-sm">
                    <img 
                      src={zohoOneLogo} 
                      alt="Zoho One - Complete Business Operating System" 
                      className="w-full max-w-md mx-auto"
                    />
                    <div className="mt-6 grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-primary/10 rounded-lg">
                        <div className="text-3xl font-bold text-primary">50+</div>
                        <div className="text-sm text-dark-section-secondary">Integrated Apps</div>
                      </div>
                      <div className="text-center p-4 bg-primary/10 rounded-lg">
                        <div className="text-3xl font-bold text-primary">$37</div>
                        <div className="text-sm text-dark-section-secondary">Per User/Month</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Stats Section - Infographic */}
          <section className="py-16 bg-light-gradient">
            <div className="container-custom">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-light-section mb-4">
                  Trusted by 75,000+ Businesses Worldwide
                </h2>
                <p className="text-light-section-secondary max-w-2xl mx-auto">
                  Join thousands of growing companies that trust Zoho One for their business operations
                </p>
              </motion.div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center p-6 bg-card rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow"
                  >
                    <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                    <div className="text-2xl md:text-3xl font-bold text-light-section mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-light-section-secondary">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Departments Section - Visual Infographic */}
          <section className="py-20 bg-dark-gradient text-dark-section">
            <div className="container-custom">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  All Your Teams. <span className="text-gradient-primary">Better Together as One.</span>
                </h2>
                <p className="text-dark-section-secondary max-w-3xl mx-auto text-lg">
                  Zoho One brings together 50+ applications to streamline every department in your organization
                </p>
              </motion.div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {departments.map((dept, index) => (
                  <motion.div
                    key={dept.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group relative bg-card-dark/50 rounded-xl p-6 border border-primary/20 hover:border-primary/40 transition-all hover:-translate-y-1"
                  >
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${dept.color} flex items-center justify-center mb-4`}>
                      <dept.icon className="w-6 h-6 text-dark-section" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{dept.name}</h3>
                    <p className="text-dark-section-secondary text-sm mb-4">
                      {dept.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {dept.apps.slice(0, 3).map((app) => (
                        <span 
                          key={app} 
                          className="text-xs px-2 py-1 bg-primary/20 text-primary rounded-full"
                        >
                          {app}
                        </span>
                      ))}
                      {dept.apps.length > 3 && (
                        <span className="text-xs px-2 py-1 bg-muted-dark text-dark-section-secondary rounded-full">
                          +{dept.apps.length - 3} more
                        </span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Collaboration Features */}
          <section className="py-20 bg-light-gradient">
            <div className="container-custom">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-light-section mb-4">
                  Redefining Work. Powering Collaboration.
                </h2>
                <p className="text-light-section-secondary max-w-2xl mx-auto text-lg">
                  Unite your team with powerful communication and collaboration tools
                </p>
              </motion.div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {collaborationFeatures.map((feature, index) => (
                  <motion.div
                    key={feature.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-card rounded-xl p-6 border border-border shadow-sm hover:shadow-lg transition-all"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-light-section mb-2">{feature.name}</h3>
                    <p className="text-light-section-secondary text-sm mb-4">
                      {feature.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {feature.apps.map((app) => (
                        <span 
                          key={app} 
                          className="text-xs px-2 py-1 bg-muted text-muted-foreground rounded-full"
                        >
                          {app}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-20 bg-dark-gradient text-dark-section">
            <div className="container-custom">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Why Choose <span className="text-gradient-primary">Zoho One?</span>
                  </h2>
                  <p className="text-dark-section-secondary text-lg mb-8">
                    A reliable all-in-one solution that scales with your business from startup to enterprise.
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-6">
                    {benefits.map((benefit, index) => (
                      <motion.div
                        key={benefit.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-card-dark/50 rounded-xl p-5 border border-primary/20"
                      >
                        <benefit.icon className="w-10 h-10 text-primary mb-3" />
                        <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                        <p className="text-dark-section-secondary text-sm">{benefit.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-card-dark/50 rounded-2xl p-8 border border-primary/20"
                >
                  <h3 className="text-2xl font-bold mb-6">
                    <Globe className="w-6 h-6 text-primary inline mr-2" />
                    Why Partner with ClubCode?
                  </h3>
                  <ul className="space-y-4">
                    {partnerBenefits.map((benefit, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className="flex items-start gap-3"
                      >
                        <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-dark-section-secondary">{benefit}</span>
                      </motion.li>
                    ))}
                  </ul>
                  
                  <div className="mt-8 pt-6 border-t border-primary/20">
                    <div className="flex items-center gap-4">
                      <div className="flex -space-x-2">
                        {[1, 2, 3, 4].map((i) => (
                          <div 
                            key={i} 
                            className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-accent border-2 border-card-dark flex items-center justify-center text-sm font-medium"
                          >
                            {String.fromCharCode(64 + i)}
                          </div>
                        ))}
                      </div>
                      <div>
                        <div className="font-semibold">500+ Projects Delivered</div>
                        <div className="text-sm text-dark-section-secondary">Across 40+ countries</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Implementation Process Infographic */}
          <section className="py-20 bg-light-gradient">
            <div className="container-custom">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-light-section mb-4">
                  Ease Into a New Way of Working
                </h2>
                <p className="text-light-section-secondary max-w-2xl mx-auto text-lg">
                  Our proven implementation methodology ensures a smooth transition to Zoho One
                </p>
              </motion.div>
              
              <div className="relative">
                {/* Timeline line */}
                <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary/20 via-primary to-primary/20 -translate-y-1/2" />
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {[
                    { step: "01", title: "Discovery & Planning", description: "Understand your business needs and create a tailored implementation roadmap", icon: Target },
                    { step: "02", title: "Import & Configure", description: "Seamlessly transfer your existing data and configure apps to match your processes", icon: Database },
                    { step: "03", title: "Integrate & Automate", description: "Connect with third-party apps and set up automation workflows", icon: Workflow },
                    { step: "04", title: "Train & Launch", description: "Comprehensive training and go-live support for your team", icon: Zap }
                  ].map((item, index) => (
                    <motion.div
                      key={item.step}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 }}
                      className="relative"
                    >
                      {/* Step Circle */}
                      <div className="relative z-10 w-16 h-16 mx-auto mb-6 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl shadow-lg shadow-primary/30">
                        {item.step}
                      </div>
                      
                      <div className="text-center bg-card rounded-xl p-6 border border-border shadow-sm">
                        <item.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                        <h3 className="font-semibold text-lg text-light-section mb-2">{item.title}</h3>
                        <p className="text-sm text-light-section-secondary">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section for SEO */}
          <section className="py-20 bg-dark-gradient text-dark-section">
            <div className="container-custom">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="text-dark-section-secondary max-w-2xl mx-auto">
                  Everything you need to know about Zoho One and our implementation services
                </p>
              </motion.div>
              
              <div className="max-w-3xl mx-auto space-y-4">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-card-dark/50 rounded-xl p-6 border border-primary/20"
                    itemScope
                    itemProp="mainEntity"
                    itemType="https://schema.org/Question"
                  >
                    <h3 className="font-semibold text-lg mb-3" itemProp="name">
                      {faq.question}
                    </h3>
                    <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                      <p className="text-dark-section-secondary" itemProp="text">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-light-gradient">
            <div className="container-custom">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center max-w-3xl mx-auto"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-light-section mb-4">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-light-section-secondary text-lg mb-8">
                  Get a free consultation with our Zoho experts and discover how Zoho One 
                  can streamline your operations, boost productivity, and accelerate growth.
                </p>
                
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                  <Button variant="heroPrimary" size="lg" asChild>
                    <Link to="/contact">
                      Schedule Free Consultation
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" className="border-secondary text-secondary hover:bg-secondary/10">
                    <Clock className="mr-2 w-5 h-5" />
                    Start 30-Day Free Trial
                  </Button>
                </div>
                
                <div className="flex items-center justify-center gap-8 text-sm text-light-section-secondary">
                  <div className="flex items-center gap-2">
                    <BarChart3 className="w-4 h-4 text-primary" />
                    150% average productivity boost
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" />
                    Implementation in 2-4 weeks
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
  );
}
