import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
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
  Briefcase,
  Target,
  DollarSign,
  Settings,
  HeadphonesIcon,
  AlertTriangle,
  Zap,
  Eye
} from "lucide-react";

const ZohoAnalytics = () => {
  useEffect(() => {
    document.title = "Zoho Analytics Implementation Partner | Decision Intelligence & BI Solutions | Club Code Technology";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Expert Zoho Analytics implementation partner. Transform business data into decisions with AI-powered BI, custom dashboards, and advanced reporting solutions.");
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

  const whyZohoAnalytics = [
    "Connect data from 500+ sources—CRMs, ERPs, databases, and spreadsheets",
    "AI-powered insights that surface what matters without complex queries",
    "Self-service analytics for business users, not just data teams",
    "Embedded analytics and white-label portal capabilities",
    "Predictive analytics and trend forecasting built-in",
    "Enterprise security with role-based access and data governance"
  ];

  const moreThanDashboards = [
    "Dashboards show what happened—decision systems tell you what to do",
    "We connect data across your entire business, not just one department",
    "Insights are delivered to the people who can act on them",
    "Automated alerts when metrics move outside expected ranges",
    "Drill-down capabilities to understand the 'why' behind the numbers"
  ];

  const whyImplementationsFail = [
    {
      issue: "No Data Strategy",
      consequence: "Dashboards are built but nobody trusts the data or uses them.",
      prevention: "We define KPIs and data sources before any visualization work begins."
    },
    {
      issue: "Siloed Reporting",
      consequence: "Each department has their own version of the truth.",
      prevention: "We create unified data models that provide organization-wide consistency."
    },
    {
      issue: "Overcomplicated Dashboards",
      consequence: "Too much data, no actionable insights—dashboard fatigue sets in.",
      prevention: "We design for decision-making, not data display."
    },
    {
      issue: "No Governance",
      consequence: "Reports proliferate, data quality degrades, trust erodes.",
      prevention: "We implement data governance and access controls from day one."
    },
    {
      issue: "Lack of Training",
      consequence: "Users don't know how to interpret or explore data themselves.",
      prevention: "Role-based training empowers self-service analytics adoption."
    }
  ];

  const implementationServices = [
    {
      icon: Target,
      title: "Analytics Strategy & KPI Design",
      description: "Define what success looks like for your business and design the metrics that matter.",
      features: ["KPI framework development", "Data source mapping", "Executive alignment", "ROI measurement design"]
    },
    {
      icon: Database,
      title: "Data Connection & Integration",
      description: "Connect to all your data sources—CRMs, ERPs, spreadsheets, databases, and cloud apps.",
      features: ["500+ data connectors", "Custom API integrations", "Data warehouse connections", "Real-time data sync"]
    },
    {
      icon: Layers,
      title: "Data Modeling & Blending",
      description: "Create unified data models that bring together data from across your organization.",
      features: ["Cross-source blending", "Data transformation", "Calculated metrics", "Relationship mapping"]
    },
    {
      icon: BarChart3,
      title: "Dashboard & Report Development",
      description: "Build actionable dashboards designed for decision-making, not just data display.",
      features: ["Executive dashboards", "Operational reports", "Drill-down analysis", "Mobile-optimized views"]
    },
    {
      icon: Brain,
      title: "AI & Predictive Analytics",
      description: "Leverage Zia AI for automated insights, forecasting, and anomaly detection.",
      features: ["Ask Zia agent", "Predictive modeling", "Trend forecasting", "Anomaly detection"]
    },
    {
      icon: Users,
      title: "Training & Self-Service Enablement",
      description: "Empower your team to explore data and build their own reports.",
      features: ["Admin training", "End-user workshops", "Self-service guidelines", "Documentation"]
    }
  ];

  const businessFunctionAnalytics = [
    {
      icon: Briefcase,
      title: "Leadership & Executive Analytics",
      description: "Company-wide KPI dashboards, financial performance, strategic initiative tracking, and board reporting.",
      metrics: ["Revenue growth", "Profitability trends", "Market share", "Strategic KPIs"]
    },
    {
      icon: Target,
      title: "Sales & Revenue Analytics",
      description: "Pipeline performance, conversion rates, rep productivity, forecast accuracy, and deal velocity.",
      metrics: ["Pipeline health", "Win/loss analysis", "Rep performance", "Forecast accuracy"]
    },
    {
      icon: DollarSign,
      title: "Finance & Accounting Analytics",
      description: "Cash flow analysis, expense tracking, budget vs. actual, and financial compliance reporting.",
      metrics: ["Cash position", "Working capital", "Budget variance", "Cost centers"]
    },
    {
      icon: Settings,
      title: "Operations & Supply Chain Analytics",
      description: "Inventory levels, production efficiency, logistics performance, and supplier metrics.",
      metrics: ["Inventory turns", "Order fulfillment", "Production yield", "Supplier performance"]
    },
    {
      icon: HeadphonesIcon,
      title: "Customer Support Analytics",
      description: "Ticket resolution, customer satisfaction, agent performance, and service level compliance.",
      metrics: ["First response time", "Resolution rate", "CSAT scores", "SLA compliance"]
    },
    {
      icon: Users,
      title: "HR & Workforce Analytics",
      description: "Headcount trends, attrition analysis, recruitment metrics, and performance management.",
      metrics: ["Attrition rate", "Time to hire", "Employee satisfaction", "Training completion"]
    }
  ];

  const capabilities = [
    {
      icon: Database,
      title: "Connect & Blend Data",
      description: "Connect to 500+ data sources and blend data across systems for unified insights.",
      features: ["500+ data connectors", "Live database connections", "Custom connector builder", "Automated data sync"]
    },
    {
      icon: Layers,
      title: "Prepare Data for Analysis",
      description: "Create and manage data pipelines with visual builders and 250+ transforms.",
      features: ["Visual pipeline builder", "250+ data transforms", "AI-powered data quality", "Data cataloging"]
    },
    {
      icon: BarChart3,
      title: "Visual Analysis",
      description: "Build insightful reports and dashboards using 50+ visualization types.",
      features: ["50+ chart types", "Interactive dashboards", "Drill-down analysis", "Custom visualizations"]
    },
    {
      icon: TrendingUp,
      title: "Advanced Analytics",
      description: "Perform historic, predictive, and diagnostic analysis with AI recommendations.",
      features: ["Predictive analytics", "Trend identification", "Anomaly detection", "What-if scenarios"]
    },
    {
      icon: Share2,
      title: "Collaborate & Share",
      description: "Share insights with teams through secured sharing and data storytelling.",
      features: ["Role-based access", "Row-level security", "Data storytelling", "Scheduled reports"]
    },
    {
      icon: Plug,
      title: "Embedded Analytics",
      description: "Embed analytics inside your apps or set up branded portals.",
      features: ["White-label portals", "REST APIs", "JavaScript SDK", "Custom embedding"]
    }
  ];

  const ziaFeatures = [
    {
      icon: Sparkles,
      title: "Ask Zia Agent",
      description: "Build reports through natural language conversations—just ask what you want to see."
    },
    {
      icon: Brain,
      title: "Zia Insights",
      description: "Get automated AI-generated insights about important trends and patterns."
    },
    {
      icon: LineChart,
      title: "Predictive AI",
      description: "Forecast future outcomes with advanced predictive models tailored to your data."
    },
    {
      icon: Eye,
      title: "Anomaly Detection",
      description: "Automatically identify unusual patterns and get alerts when metrics deviate."
    }
  ];

  const implementationMethodology = [
    {
      step: "01",
      title: "Discovery & KPI Definition",
      description: "Understand your business questions, define success metrics, and map data sources."
    },
    {
      step: "02",
      title: "Data Architecture Design",
      description: "Design the data model, connections, and blending logic for unified reporting."
    },
    {
      step: "03",
      title: "Data Connection & Prep",
      description: "Connect all data sources, build pipelines, and ensure data quality."
    },
    {
      step: "04",
      title: "Dashboard Development",
      description: "Build executive dashboards, operational reports, and self-service capabilities."
    },
    {
      step: "05",
      title: "AI & Advanced Analytics",
      description: "Implement predictive models, alerts, and automated insights."
    },
    {
      step: "06",
      title: "Training & Adoption",
      description: "Role-based training and change management for organization-wide adoption."
    }
  ];

  const faqs = [
    {
      question: "How is Zoho Analytics different from Excel or Power BI?",
      answer: "Zoho Analytics is cloud-native with built-in AI, 500+ pre-built connectors, and seamless integration with the Zoho ecosystem. It's designed for self-service analytics without requiring technical skills, and includes embedded analytics capabilities for customer-facing applications."
    },
    {
      question: "Can Zoho Analytics connect to my existing data sources?",
      answer: "Yes. Zoho Analytics connects to 500+ data sources including databases (SQL, PostgreSQL, MySQL), data warehouses (Snowflake, BigQuery, Redshift), business apps (Salesforce, HubSpot, Zoho), and files (Excel, CSV, Google Sheets)."
    },
    {
      question: "How long does an analytics implementation take?",
      answer: "Basic dashboards: 2-4 weeks. Comprehensive analytics platform with multiple data sources: 6-12 weeks. Enterprise implementations with governance: 3-6 months. Timeline depends on data complexity and integration requirements."
    },
    {
      question: "Can business users build their own reports?",
      answer: "Absolutely. Zoho Analytics is designed for self-service analytics. We set up the data model and governance, then train users to explore data and build their own visualizations without IT involvement."
    },
    {
      question: "What is Zia and how does it help?",
      answer: "Zia is Zoho's AI assistant. In Analytics, Zia enables natural language queries ('Show me sales by region last quarter'), automated insights, predictive forecasting, and anomaly detection—making analytics accessible to everyone."
    },
    {
      question: "Can I embed analytics in my own applications?",
      answer: "Yes. Zoho Analytics offers white-label embedding with custom branding, SSO integration, and row-level security. This is ideal for SaaS companies wanting to offer analytics to their customers."
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes. We offer support packages including dashboard optimization, new report development, data source additions, and user training as your analytics needs evolve."
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
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-primary/3 rounded-full blur-3xl" />
        
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
                Turn Business Data Into <span className="text-primary">Decisions</span> with Intelligent Analytics
              </h1>
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                Most dashboards tell you what happened. We build analytics systems that tell you what to do about it.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                As a Zoho Analytics implementation partner, we design decision intelligence platforms that connect data across your business—turning fragmented reports into actionable insights.
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
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {stats.map((stat, index) => (
                    <motion.div 
                      key={index} 
                      className="text-center p-4 bg-background/50 rounded-xl"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
                <div className="p-4 bg-primary/5 rounded-xl border border-primary/20">
                  <div className="flex items-center gap-3 mb-2">
                    <BarChart3 className="w-5 h-5 text-primary" />
                    <span className="font-semibold text-foreground">Gartner Magic Quadrant</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Featured in 2025 Analytics & BI Platforms Report</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* More Than Dashboards Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              We Don't Build Dashboards—We Build Decision Systems
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The difference between data visualization and decision intelligence.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto mb-12">
            {moreThanDashboards.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-3 p-4 bg-card rounded-xl border border-border/50"
              >
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground">{item}</span>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {whyZohoAnalytics.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-3 p-3 bg-background/50 rounded-lg"
              >
                <Zap className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                <span className="text-muted-foreground text-sm">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Implementations Fail Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 text-amber-600 rounded-full text-sm font-medium mb-4">
              <AlertTriangle className="w-4 h-4" />
              Common Pitfalls
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Analytics Implementations Fail
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Most failures aren't about the tool—they're about the approach.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-4">
            {whyImplementationsFail.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-card rounded-xl border border-border/50"
              >
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <span className="text-xs font-semibold text-destructive uppercase tracking-wider">Issue</span>
                    <h4 className="font-semibold text-foreground">{item.issue}</h4>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-amber-600 uppercase tracking-wider">Consequence</span>
                    <p className="text-sm text-muted-foreground">{item.consequence}</p>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-primary uppercase tracking-wider">Our Prevention</span>
                    <p className="text-sm text-muted-foreground">{item.prevention}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Services Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Zoho Analytics Implementation Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From strategy to implementation, we deliver analytics solutions that drive results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {implementationServices.map((service, index) => (
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
                      <service.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
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

      {/* Business Function Analytics Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Analytics for Every Business Function
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tailored analytics solutions for each department's decision-making needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {businessFunctionAnalytics.map((func, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg hover:border-primary/50 transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                      <func.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{func.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{func.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {func.metrics.map((metric, idx) => (
                        <span key={idx} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                          {metric}
                        </span>
                      ))}
                    </div>
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
              Ask Zia—Your AI Analytics Agent
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Natural language analytics that puts insights at everyone's fingertips.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ziaFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-card rounded-2xl border border-border/50"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Capabilities Section */}
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
              A complete analytics solution from data connection to insight sharing.
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

      {/* Implementation Methodology Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Implementation Methodology
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A proven 6-step approach that ensures successful analytics deployments.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {implementationMethodology.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative p-6 bg-card rounded-xl border border-border/50"
              >
                <div className="absolute -top-3 -left-3 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                  {step.step}
                </div>
                <div className="pt-4">
                  <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-16">
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
              Connect to any data source—databases, data warehouses, cloud apps, and more.
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

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Common questions about Zoho Analytics implementation.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-card rounded-xl border border-border/50 px-6">
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
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
              Ready to Turn Data Into Decisions?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Stop drowning in data. Start making decisions with confidence. Let's build your decision intelligence platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8">
                <Link to="/contact">
                  Schedule Consultation <ArrowRight className="ml-2 w-5 h-5" />
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