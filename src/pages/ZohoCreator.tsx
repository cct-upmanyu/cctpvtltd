import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { 
  Blocks, 
  Smartphone, 
  Workflow, 
  BarChart3, 
  Plug, 
  Sparkles,
  Building2,
  Users,
  Package,
  GraduationCap,
  ShoppingCart,
  Wrench,
  ArrowRight,
  CheckCircle2,
  Code,
  Briefcase
} from "lucide-react";

const ZohoCreator = () => {
  useEffect(() => {
    document.title = "Zoho Creator Low-Code Platform & Custom App Development | Club Code Technology";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Expert Zoho Creator implementation services. Build custom business applications with low-code development, AI-assisted app building, and seamless integrations.");
    }

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Zoho Creator Implementation Services",
      "provider": {
        "@type": "Organization",
        "name": "Club Code Technology"
      },
      "description": "Expert Zoho Creator low-code application development, customization, and integration services.",
      "serviceType": "Low-Code Application Development"
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const capabilities = [
    {
      icon: Blocks,
      title: "Drag & Drop App Building",
      description: "Build web and mobile apps with an intuitive drag-and-drop interface. No extensive coding required.",
      features: ["Visual form builder", "Page designer", "Component library", "Template gallery"]
    },
    {
      icon: Sparkles,
      title: "AI-Assisted Development",
      description: "Leverage Zia AI to create apps quickly—just tell it what you need and it delivers smart suggestions.",
      features: ["AI field suggestions", "Workflow recommendations", "Code generation", "Smart automation"]
    },
    {
      icon: Smartphone,
      title: "Native Mobile Apps",
      description: "Every app built on Creator comes with native iOS and Android apps automatically generated.",
      features: ["iOS native app", "Android native app", "Offline capabilities", "Push notifications"]
    },
    {
      icon: Workflow,
      title: "Process Automation",
      description: "Streamline operations with visual workflow builders and business process automation.",
      features: ["Blueprint workflows", "Approval chains", "Scheduled actions", "Conditional logic"]
    },
    {
      icon: BarChart3,
      title: "Real-Time Analytics",
      description: "Turn massive datasets into charts—ask questions in plain English and get powerful insights.",
      features: ["Custom reports", "Dashboard builder", "AI-powered insights", "Data visualization"]
    },
    {
      icon: Plug,
      title: "1000+ Integrations",
      description: "Connect all the tools you already use and run your business from one unified platform.",
      features: ["Pre-built connectors", "REST APIs", "Webhooks", "Deluge scripting"]
    }
  ];

  const useCases = [
    {
      icon: Wrench,
      title: "Internal Tools",
      description: "Build scalable internal tools to simplify processes, automate recurring tasks, and boost employee engagement."
    },
    {
      icon: Users,
      title: "Customer Portals",
      description: "Build self-service portals for customers, vendors, and partners with single point of access to your services."
    },
    {
      icon: Building2,
      title: "Core Business Systems",
      description: "Build mission-critical systems tailored to your needs without traditional development challenges."
    },
    {
      icon: Package,
      title: "Extend Applications",
      description: "Supercharge existing Zoho or third-party applications with custom features and integrations."
    }
  ];

  const solutions = [
    { icon: Package, title: "Asset Management", description: "Track assets, schedule maintenance, and manage inventory." },
    { icon: Building2, title: "Construction Management", description: "Centralize projects, teams, and data from start to finish." },
    { icon: Wrench, title: "Material Requirements Planning", description: "Transform production efficiency with intelligent planning." },
    { icon: GraduationCap, title: "Education Management", description: "Unified tools for admissions, scheduling, and student management." },
    { icon: ShoppingCart, title: "Procurement", description: "Digital workflows for vendor management and approvals." },
    { icon: Users, title: "Vendor Management", description: "Streamline vendor onboarding, tracking, and compliance." }
  ];

  const userSegments = [
    {
      icon: Users,
      title: "Business Users",
      description: "Empowering business users with low-code to solve their own problems."
    },
    {
      icon: Briefcase,
      title: "Business Leaders",
      description: "Faster business decisions through custom apps aligned with strategy."
    },
    {
      icon: Code,
      title: "Developers",
      description: "Create, automate, and integrate custom apps 10x faster with low-code."
    },
    {
      icon: Building2,
      title: "IT Leaders",
      description: "Accelerating IT development while maintaining governance and security."
    }
  ];

  const stats = [
    { value: "7M+", label: "Apps Built" },
    { value: "30K+", label: "Customers" },
    { value: "6M+", label: "Users" },
    { value: "1000+", label: "Integrations" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                Zoho Creator Implementation Partner
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Turn Ideas Into Apps <span className="text-primary">Faster</span> with Low-Code
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Zoho Creator combines the power of low-code development and AI to help you design, develop, and run any business software you need.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                We build custom applications that solve your unique business challenges—without the complexity of traditional development.
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
              <div className="bg-gradient-to-br from-card to-card/50 rounded-2xl p-8 border border-border/50 shadow-2xl">
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center p-4 bg-background/50 rounded-xl">
                      <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Recognition Banner */}
      <section className="py-8 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 text-center">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Blocks className="w-6 h-6 text-primary" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-foreground">Gartner Magic Quadrant</div>
                <div className="text-sm text-muted-foreground">Challenger 2024 - Low-Code</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-primary" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-foreground">ISG Provider Lens</div>
                <div className="text-sm text-muted-foreground">Leader 2024</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-foreground">4.3/5 Rating</div>
                <div className="text-sm text-muted-foreground">Capterra & G2</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Powerful Low-Code Capabilities
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to build enterprise-grade applications without the complexity.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
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
                      <capability.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">{capability.title}</h3>
                    <p className="text-muted-foreground mb-4">{capability.description}</p>
                    <ul className="space-y-2">
                      {capability.features.map((feature, idx) => (
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

      {/* Use Cases Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Can You Build?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From internal tools to customer-facing applications, Creator handles it all.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-card rounded-xl border border-border/50 hover:border-primary/50 transition-colors"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <useCase.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{useCase.title}</h3>
                <p className="text-muted-foreground text-sm">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Pre-Built Solutions We Customize
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Leverage fully customizable, pre-built applications tailored to your business needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border/50"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <solution.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">{solution.title}</h3>
                  <p className="text-muted-foreground text-sm">{solution.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* User Segments */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Empowering Everyone to Innovate
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Low-code development that works for every role in your organization.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {userSegments.map((segment, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-card rounded-xl border border-border/50"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <segment.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{segment.title}</h3>
                <p className="text-muted-foreground text-sm">{segment.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Zoho Creator Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              End-to-end low-code development from certified Zoho experts.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Custom App Development", description: "Build tailor-made applications that solve your specific business challenges." },
              { title: "Workflow Automation", description: "Design and implement automated business processes with visual workflow builders." },
              { title: "System Integration", description: "Connect Creator apps with Zoho suite and 1000+ third-party applications." },
              { title: "Mobile App Deployment", description: "Deploy native iOS and Android apps with offline capabilities and push notifications." },
              { title: "Data Migration", description: "Seamlessly migrate data from legacy systems into your new Creator applications." },
              { title: "Training & Support", description: "Enable your team to build and maintain apps with comprehensive training." }
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
              Build Apps That Work the Way You Work
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join 30,000+ businesses building custom applications with Zoho Creator. Let us bring your ideas to life.
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

export default ZohoCreator;
