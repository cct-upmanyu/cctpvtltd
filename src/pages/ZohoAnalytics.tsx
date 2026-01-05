import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { 
  BarChart3, 
  Database, 
  Brain, 
  Share2, 
  Layers, 
  Plug, 
  LineChart,
  PieChart,
  TrendingUp,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Users,
  Code,
  Briefcase
} from "lucide-react";

const ZohoAnalytics = () => {
  useEffect(() => {
    document.title = "Zoho Analytics Implementation & BI Solutions | Club Code Technology";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Expert Zoho Analytics implementation services. Transform data into actionable insights with AI-powered BI, custom dashboards, and advanced reporting solutions.");
    }

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Zoho Analytics Implementation Services",
      "provider": {
        "@type": "Organization",
        "name": "Club Code Technology"
      },
      "description": "Expert Zoho Analytics implementation, dashboard development, and business intelligence solutions.",
      "serviceType": "Business Intelligence Implementation"
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const capabilities = [
    {
      icon: Database,
      title: "Connect & Blend Data",
      description: "Connect and blend data from 500+ sources including databases, data lakes, warehouses, business apps, files, and feeds.",
      features: ["500+ data connectors", "Live database connections", "Custom connector builder", "Automated data sync"]
    },
    {
      icon: Layers,
      title: "Prepare Data for Analysis",
      description: "Create and manage data pipelines with our visual builder. Use AI to improve data quality with 250+ transforms.",
      features: ["Visual pipeline builder", "250+ data transforms", "AI-powered data quality", "Data cataloging"]
    },
    {
      icon: BarChart3,
      title: "Visual Analysis",
      description: "Build insightful reports and dashboards using 50+ visualizations with drag-and-drop interface.",
      features: ["50+ chart types", "Interactive dashboards", "Drill-down analysis", "Custom visualizations"]
    },
    {
      icon: TrendingUp,
      title: "Advanced Analytics",
      description: "Perform historic, predictive, and diagnostic analysis with AI-backed recommendations.",
      features: ["Predictive analytics", "Trend identification", "Anomaly detection", "What-if scenarios"]
    },
    {
      icon: Share2,
      title: "Collaborate & Share",
      description: "Share insights with teams through secured sharing, fine-grained permissions, and data storytelling.",
      features: ["Role-based access", "Row-level security", "Data storytelling", "Scheduled reports"]
    },
    {
      icon: Plug,
      title: "Embedded Analytics",
      description: "Embed analytics inside your apps or set up branded portals with powerful APIs and SDKs.",
      features: ["White-label portals", "REST APIs", "JavaScript SDK", "MCP Server integration"]
    }
  ];

  const ziaFeatures = [
    {
      icon: Sparkles,
      title: "Ask Zia Agent",
      description: "Build data pipelines, metrics, reports, and dashboards through interactive AI conversations powered by LLM."
    },
    {
      icon: Brain,
      title: "Zia Insights",
      description: "Get automated AI-generated insights as easily understandable narratives about important trends."
    },
    {
      icon: LineChart,
      title: "Predictive AI",
      description: "Forecast future outcomes with advanced predictive models tailored to your business data."
    }
  ];

  const userSegments = [
    {
      icon: Users,
      title: "Business Users",
      description: "Access critical information effortlessly with a user-friendly interface for better decision-making."
    },
    {
      icon: BarChart3,
      title: "Data Analysts",
      description: "Transform raw data into actionable insights with powerful visualization and analysis tools."
    },
    {
      icon: Code,
      title: "Data Engineers",
      description: "Seamlessly integrate and manage complex data pipelines with efficient preparation tools."
    },
    {
      icon: Briefcase,
      title: "Data Scientists",
      description: "Build ML models with AutoML or Python, train, test, deploy, and manage for deep analysis."
    }
  ];

  const integrations = [
    "Databricks", "Oracle NetSuite", "Amazon Athena", "MySQL", "PostgreSQL",
    "Snowflake", "Zoho CRM", "Google Cloud", "Amazon S3", "ServiceNow",
    "Salesforce", "HubSpot", "Microsoft Azure", "MongoDB", "BigQuery"
  ];

  const stats = [
    { value: "20K+", label: "Customers" },
    { value: "3M+", label: "Users" },
    { value: "75M+", label: "Reports Created" },
    { value: "500+", label: "Integrations" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
        <div className="absolute top-20 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                Zoho Analytics Implementation Partner
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                AI-Powered <span className="text-primary">Self-Service BI</span> Platform
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Go from data to insights in minutes. Connect data, visually analyze, and get actionable insights with Zoho Analytics—the modern BI platform trusted by 20K+ businesses.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                We implement enterprise-grade analytics solutions that transform your data into competitive advantage.
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
                <BarChart3 className="w-6 h-6 text-primary" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-foreground">Gartner Magic Quadrant</div>
                <div className="text-sm text-muted-foreground">2025 ABI Platforms</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-foreground">#3 Ranked</div>
                <div className="text-sm text-muted-foreground">Dresner Cloud BI Study 2025</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-foreground">91% Recommend</div>
                <div className="text-sm text-muted-foreground">BARC Survey 2024</div>
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
              End-to-End BI & Analytics Platform
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A complete analytics solution from data connection to insight sharing, assisted by Agentic AI.
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

      {/* Zia AI Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Powered by Agentic AI
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ask Zia, Your BI Agent
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ask questions in natural language and get answers as reports. Build analytics through interactive AI conversations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {ziaFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8 bg-card rounded-2xl border border-border/50"
              >
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* User Segments */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Analytics for Everyone
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Designed to democratize analytics for all roles in your organization.
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
                className="p-6 bg-card rounded-xl border border-border/50 hover:border-primary/50 transition-colors"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <segment.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{segment.title}</h3>
                <p className="text-muted-foreground text-sm">{segment.description}</p>
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
              500+ Data Integrations
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Connect to any data source—databases, data warehouses, cloud apps, files, and more.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {integrations.map((integration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                className="px-5 py-3 bg-card rounded-full border border-border/50 text-foreground font-medium text-sm"
              >
                {integration}
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
              Our Zoho Analytics Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From strategy to implementation, we deliver analytics solutions that drive results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Analytics Strategy", description: "Define KPIs, metrics, and reporting frameworks aligned with your business goals." },
              { title: "Dashboard Development", description: "Custom executive dashboards and operational reports for real-time visibility." },
              { title: "Data Integration", description: "Connect all your data sources into a unified analytics environment." },
              { title: "Embedded Analytics", description: "White-label analytics portals and embedded dashboards for your applications." },
              { title: "AI & Predictive Models", description: "Implement Zia AI features and build predictive models for forecasting." },
              { title: "Training & Support", description: "Enable your team with training and provide ongoing optimization support." }
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
              Transform Data Into Decisions
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join 20,000+ customers who trust Zoho Analytics for business intelligence. Let us build your analytics foundation.
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

export default ZohoAnalytics;
