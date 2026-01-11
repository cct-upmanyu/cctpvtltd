import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { 
  Users, 
  Clock, 
  FileText, 
  Award, 
  BarChart3, 
  Heart, 
  Smartphone, 
  Shield,
  UserPlus,
  Calendar,
  GraduationCap,
  MessageSquare,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Globe,
  Building2
} from "lucide-react";
import zohoPeopleInterface from "@/assets/zoho-people-interface.jpg";

const ZohoPeople = () => {
  useEffect(() => {
    document.title = "Zoho People Implementation & HR Software Solutions | ClubCode Technology Pvt Ltd";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Expert Zoho People implementation services. Streamline HR processes, automate employee management, and deliver exceptional workforce experiences with our certified consultants.");
    }

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Zoho People Implementation Services",
      "provider": {
        "@type": "Organization",
        "name": "ClubCode Technology Pvt Ltd"
      },
      "description": "Expert Zoho People implementation, customization, and HR automation services for businesses of all sizes.",
      "serviceType": "HR Software Implementation"
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const hrModules = [
    {
      icon: UserPlus,
      title: "Hiring & Onboarding",
      description: "Attract, recruit, and onboard the right talent with personalized workflows, automated hiring, and e-sign offer letters.",
      features: ["Automated hiring workflows", "Custom onboarding processes", "E-signature integration", "Onboarding analytics"]
    },
    {
      icon: Users,
      title: "Core HR Management",
      description: "Centralize employee information, streamline attendance tracking, and manage documents from a single platform.",
      features: ["Employee database", "Time & attendance", "Document management", "HR helpdesk"]
    },
    {
      icon: Award,
      title: "Performance Management",
      description: "Evaluate talent, appreciate achievements, and drive professional growth with customizable appraisal systems.",
      features: ["Performance evaluations", "360-degree feedback", "Goal tracking", "Compensation management"]
    },
    {
      icon: GraduationCap,
      title: "Learning Management",
      description: "Empower employees with training programs, course management, and skill development opportunities.",
      features: ["Course creation", "Training tracking", "Certification management", "Learning analytics"]
    },
    {
      icon: Clock,
      title: "Leave & Attendance",
      description: "Automate leave requests, track attendance, and manage shift schedules with precision.",
      features: ["Leave management", "Shift scheduling", "Geo-fencing", "Biometric integration"]
    },
    {
      icon: BarChart3,
      title: "HR Analytics",
      description: "Generate precise reports on every HR metric and visualize data to make better business decisions.",
      features: ["Custom dashboards", "Standard reports", "Trend analysis", "Predictive insights"]
    }
  ];

  const benefits = [
    {
      icon: Smartphone,
      title: "Mobile-First HR",
      description: "Access HR functions from anywhere with native iOS and Android apps."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Industry-leading data protection with ISO 27001/27017/27018 certification."
    },
    {
      icon: Heart,
      title: "Employee Engagement",
      description: "Build productive workforce through surveys, eNPS, and engagement tools."
    },
    {
      icon: MessageSquare,
      title: "Zia HR Assistant",
      description: "AI-powered chatbot to help employees with daily HR tasks instantly."
    }
  ];

  const integrations = [
    "Zoho Payroll", "Zoho Expense", "Zoho Recruit", "Zoho Sign",
    "Microsoft 365", "Google Workspace", "Zapier", "Slack"
  ];

  const stats = [
    { value: "45K+", label: "Businesses Trust Zoho People" },
    { value: "1M+", label: "Users Worldwide" },
    { value: "165+", label: "Countries Served" },
    { value: "15+", label: "Years of Excellence" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                Zoho People Implementation Partner
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                HR Software for Every <span className="text-primary">Business</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Streamline all your HR processes and deliver exceptional employee experiences with Zoho People—cloud-based HR software that's intuitive, agile, and mobile-friendly.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                We implement, customize, and optimize Zoho People to transform your HR operations and empower your workforce.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="text-lg px-8">
                  <Link to="/contact">Book a Free Consultation</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg px-8">
                  <Link to="/contact">Request a Demo</Link>
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-border/50">
                <img 
                  src={zohoPeopleInterface} 
                  alt="Zoho People HR Software Dashboard Interface" 
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Highlight Section - Between Hero & Content */}
      <section className="relative -mt-10 z-20 pb-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#0B1C3D] to-[#1a3a6e] rounded-2xl p-8 shadow-2xl"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-4"
                >
                  <div className="text-3xl md:text-4xl font-bold text-[#3FE0F0] mb-2">{stat.value}</div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* HR Modules Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Complete HR Management Suite
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From hiring to retirement, manage every aspect of your employee lifecycle with powerful, integrated HR modules.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hrModules.map((module, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                      <module.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">{module.title}</h3>
                    <p className="text-muted-foreground mb-4">{module.description}</p>
                    <ul className="space-y-2">
                      {module.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Businesses Choose Zoho People
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Built for modern HR teams, designed for employee satisfaction.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-card rounded-xl border border-border/50"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Seamless Integrations
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Connect Zoho People with your favorite apps to create a unified HR ecosystem.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {integrations.map((integration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="px-6 py-3 bg-card rounded-full border border-border/50 text-foreground font-medium"
              >
                {integration}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Zoho People Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              End-to-end implementation and support from certified Zoho experts.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Implementation & Setup", description: "Complete Zoho People deployment tailored to your HR workflows and policies." },
              { title: "Data Migration", description: "Seamless migration of employee data from legacy systems with zero data loss." },
              { title: "Custom Workflows", description: "Design automated HR processes for approvals, notifications, and task assignments." },
              { title: "Integration Services", description: "Connect Zoho People with payroll, accounting, and third-party applications." },
              { title: "Training & Adoption", description: "Comprehensive training for HR teams and employees to maximize platform usage." },
              { title: "Ongoing Support", description: "Continuous optimization, troubleshooting, and feature updates." }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-card rounded-xl border border-border/50 hover:border-primary/50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Transform Your HR Operations Today
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join 45,000+ businesses that trust Zoho People for seamless HR management. Let us help you implement a solution that grows with your team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8">
                <Link to="/contact">
                  Get Started <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8">
                <Link to="/zoho-solutions">Explore Zoho Solutions</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ZohoPeople;
