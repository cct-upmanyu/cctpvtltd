import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  MessageSquare, 
  Bot, 
  Users, 
  Target, 
  Zap,
  Brain,
  Sparkles,
  Settings,
  Mic,
  RefreshCw,
  ChevronDown,
  ChevronUp,
  Eye,
  BarChart3,
  Shield,
  Globe,
  Database,
  Cpu,
  Network,
  CheckCircle2,
  Phone,
  Mail,
  Calendar,
  TrendingUp,
  Headphones,
  UserCheck,
  MessageCircle,
  Layers
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

// JSON-LD Structured Data for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "AI Chatbot Solutions",
  "description": "AI-powered chatbot implementation services including Zoho SalesIQ, NLP chatbots, and enterprise automation solutions.",
  "provider": {
    "@type": "Organization",
    "name": "ClubCode Technology",
    "url": "https://www.clubcodetechnology.com"
  },
  "serviceType": "AI Chatbot Implementation",
  "areaServed": "Worldwide"
};

const salesIQFeatures = [
  {
    icon: Eye,
    title: "Real-time Visitor Identification",
    description: "Track and identify website visitors in real-time with detailed behavioral insights."
  },
  {
    icon: Bot,
    title: "AI-Powered Chatbot Flows",
    description: "Create intelligent conversation flows that understand context and intent."
  },
  {
    icon: Target,
    title: "Lead Qualification & Scoring",
    description: "Automatically qualify and score leads based on engagement and behavior."
  },
  {
    icon: RefreshCw,
    title: "Zoho CRM Synchronization",
    description: "Seamlessly sync conversations, leads, and data with Zoho CRM."
  },
  {
    icon: Users,
    title: "Live Agent Handoff",
    description: "Smooth transition from bot to human agents when needed."
  },
  {
    icon: Globe,
    title: "Omnichannel Messaging",
    description: "Engage customers across web, mobile, WhatsApp, and social platforms."
  }
];

const chatbotTypes = [
  {
    icon: Settings,
    title: "Rule-Based Chatbots",
    emoji: "🤖",
    howItWorks: "Predefined IF–THEN logic",
    benefits: [
      "Answer FAQs instantly",
      "Reduce repetitive support queries",
      "Ensure consistent responses"
    ],
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: MessageSquare,
    title: "Menu / Button-Based Chatbots",
    emoji: "🧭",
    howItWorks: "Guided button-based interactions",
    benefits: [
      "Faster lead capture",
      "Higher completion rates",
      "Ideal for booking & inquiries"
    ],
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Target,
    title: "Keyword-Based Chatbots",
    emoji: "🔍",
    howItWorks: "Trigger responses using keywords",
    benefits: [
      "Quick intent detection",
      "Simple routing to departments",
      "Cost-effective automation"
    ],
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Brain,
    title: "AI & NLP Chatbots",
    emoji: "🧠",
    howItWorks: "Understand user intent and context",
    benefits: [
      "Natural conversations",
      "Better customer experience",
      "Fewer escalations to humans"
    ],
    color: "from-orange-500 to-yellow-500"
  },
  {
    icon: Sparkles,
    title: "Generative AI Chatbots (LLM-Powered)",
    emoji: "✨",
    howItWorks: "Generate human-like responses using AI models",
    benefits: [
      "Advanced customer support",
      "Knowledge assistance",
      "Sales conversations at scale"
    ],
    color: "from-indigo-500 to-purple-500"
  },
  {
    icon: Layers,
    title: "Hybrid Chatbots",
    emoji: "🔀",
    howItWorks: "Combine rules, AI, and human handoff",
    benefits: [
      "Best accuracy",
      "Controlled automation",
      "Enterprise-ready deployments"
    ],
    color: "from-red-500 to-rose-500"
  },
  {
    icon: Mic,
    title: "Voice Chatbots",
    emoji: "🎙️",
    howItWorks: "Voice-based conversations via IVR & AI",
    benefits: [
      "Call center automation",
      "Appointment confirmations",
      "Reduced call handling time"
    ],
    color: "from-teal-500 to-cyan-500"
  },
  {
    icon: Database,
    title: "Contextual & CRM-Connected Chatbots",
    emoji: "🔁",
    howItWorks: "Remember user data & past interactions",
    benefits: [
      "Personalised conversations",
      "Higher conversion rates",
      "Better customer retention"
    ],
    color: "from-sky-500 to-blue-500"
  }
];

const technologies = [
  {
    icon: Brain,
    title: "Natural Language Processing (NLP)",
    description: "Understand and interpret human language with advanced NLP algorithms."
  },
  {
    icon: Cpu,
    title: "Machine Learning (ML)",
    description: "Continuously improve responses based on conversation patterns and feedback."
  },
  {
    icon: Sparkles,
    title: "Large Language Models (LLMs)",
    description: "Power intelligent, context-aware conversations with GPT and similar models."
  },
  {
    icon: Network,
    title: "CRM & ERP Integrations",
    description: "Connect chatbots with Zoho CRM, SAP, Salesforce, and other business systems."
  },
  {
    icon: Globe,
    title: "Omnichannel Messaging APIs",
    description: "Deploy across WhatsApp, Facebook, Instagram, SMS, and web platforms."
  },
  {
    icon: BarChart3,
    title: "Analytics & Conversation Tracking",
    description: "Monitor performance, sentiment, and conversion metrics in real-time."
  },
  {
    icon: Shield,
    title: "Secure Data & Compliance Layers",
    description: "GDPR, HIPAA compliant with enterprise-grade security and encryption."
  }
];

const implementationSteps = [
  {
    step: "01",
    title: "Business Requirement Analysis",
    description: "Deep dive into your customer journey, pain points, and automation opportunities."
  },
  {
    step: "02",
    title: "Chatbot Strategy & Flow Design",
    description: "Create conversation blueprints aligned with your sales and support goals."
  },
  {
    step: "03",
    title: "Platform Selection",
    description: "Choose the right platform—Zoho SalesIQ, custom AI, or hybrid solutions."
  },
  {
    step: "04",
    title: "AI & Rule Configuration",
    description: "Build intelligent flows with NLP, intents, entities, and business rules."
  },
  {
    step: "05",
    title: "CRM & System Integrations",
    description: "Connect with Zoho CRM, ERP, ticketing, and communication platforms."
  },
  {
    step: "06",
    title: "Testing, Launch & Optimization",
    description: "Rigorous testing, deployment, and continuous improvement cycles."
  }
];

// Chatbot type expandable card component
function ChatbotTypeCard({ bot, index }: { bot: typeof chatbotTypes[0]; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-card-dark/50 rounded-xl border border-primary/20 overflow-hidden hover:border-primary/40 transition-all"
    >
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-6 text-left flex items-center justify-between"
      >
        <div className="flex items-center gap-4">
          <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${bot.color} flex items-center justify-center`}>
            <span className="text-2xl">{bot.emoji}</span>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-dark-section">{bot.title}</h3>
            <p className="text-sm text-dark-section-secondary">{bot.howItWorks}</p>
          </div>
        </div>
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="w-5 h-5 text-primary" />
        </motion.div>
      </button>
      
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-2 border-t border-primary/10">
              <p className="text-sm font-medium text-primary mb-3">Business Value:</p>
              <ul className="space-y-2">
                {bot.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-2 text-dark-section-secondary text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// Animated chatbot journey visualization
function ChatbotJourneyAnimation() {
  const [activeStep, setActiveStep] = useState(0);
  const steps = [
    { icon: Users, label: "Visitor", color: "bg-blue-500" },
    { icon: Bot, label: "Chatbot", color: "bg-primary" },
    { icon: Database, label: "CRM", color: "bg-purple-500" },
    { icon: UserCheck, label: "Sales/Support", color: "bg-green-500" },
    { icon: TrendingUp, label: "Conversion", color: "bg-orange-500" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      {/* Animated background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-purple-500/20 to-primary/20 blur-3xl opacity-50" />
      
      <div className="relative bg-card-dark/60 backdrop-blur-sm rounded-2xl p-8 border border-primary/30">
        <div className="flex items-center justify-between gap-2 md:gap-4">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center">
              <motion.div
                animate={{
                  scale: activeStep === index ? 1.1 : 1,
                  opacity: activeStep >= index ? 1 : 0.5
                }}
                className={`relative flex flex-col items-center`}
              >
                <motion.div
                  animate={{
                    boxShadow: activeStep === index 
                      ? "0 0 30px rgba(0, 160, 176, 0.6)" 
                      : "0 0 0px rgba(0, 160, 176, 0)"
                  }}
                  className={`w-12 h-12 md:w-16 md:h-16 rounded-full ${step.color} flex items-center justify-center`}
                >
                  <step.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </motion.div>
                <span className="mt-2 text-xs md:text-sm text-dark-section font-medium text-center">
                  {step.label}
                </span>
                
                {/* Active indicator */}
                {activeStep === index && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute -bottom-4 w-2 h-2 bg-primary rounded-full"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ repeat: Infinity, duration: 1 }}
                  />
                )}
              </motion.div>
              
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="relative mx-1 md:mx-2 flex-1 h-0.5 bg-muted-dark overflow-hidden min-w-[20px] md:min-w-[40px]">
                  <motion.div
                    animate={{
                      x: activeStep > index ? "0%" : "-100%"
                    }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 bg-gradient-to-r from-primary to-primary-glow"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Chat bubble animation */}
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="mt-8 flex justify-center"
        >
          <div className="bg-primary/20 backdrop-blur-sm rounded-2xl rounded-bl-none p-4 border border-primary/30 max-w-xs">
            <div className="flex items-center gap-2 mb-2">
              <Bot className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-primary">AI Assistant</span>
            </div>
            <motion.div
              key={activeStep}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-sm text-dark-section-secondary"
            >
              {activeStep === 0 && "Hello! How can I help you today?"}
              {activeStep === 1 && "Let me understand your requirements..."}
              {activeStep === 2 && "Syncing your data with CRM..."}
              {activeStep === 3 && "Connecting you with our team..."}
              {activeStep === 4 && "Great! Your request has been processed!"}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default function AIChatbotSolutions() {
  useEffect(() => {
    // Set document title
    document.title = "AI Chatbot Solutions for Business Automation | ClubCode Technology";
    
    // Set meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Explore AI chatbot types, Zoho SalesIQ capabilities, and modern chatbot technologies to automate engagement and business conversations.');
    
    // Set canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://www.clubcodetechnology.com/ai-chatbot-solutions');
    
    // Add JSON-LD structured data
    let script = document.querySelector('#chatbot-structured-data');
    if (!script) {
      script = document.createElement('script');
      script.id = 'chatbot-structured-data';
      script.setAttribute('type', 'application/ld+json');
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(structuredData);
    
    return () => {
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
          
          {/* Animated dots */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-primary/30 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.3, 0.7, 0.3],
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
                  <Bot className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-primary">AI-Powered Automation</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  AI Chatbot Solutions for{" "}
                  <span className="text-gradient-primary">Smarter Business Conversations</span>
                </h1>
                
                <p className="text-xl text-dark-section-secondary mb-4">
                  Automate engagement, qualify leads, support customers, and drive conversions using intelligent chatbots.
                </p>
                
                <p className="text-lg text-dark-section-secondary mb-8">
                  We design and implement AI-powered chatbot solutions that work across websites, apps, 
                  CRM systems, and messaging platforms—built for real business outcomes.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <Button variant="heroPrimary" size="lg" asChild>
                    <Link to="/contact">
                      Book a Free Consultation
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" className="border-primary/50 text-primary hover:bg-primary/10">
                    <Phone className="mr-2 w-5 h-5" />
                    Talk to a Zoho Expert
                  </Button>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <ChatbotJourneyAnimation />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Zoho SalesIQ Section */}
        <section className="py-20 bg-light-gradient">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-light-section mb-4">
                Zoho SalesIQ: The Foundation of{" "}
                <span className="text-primary">Intelligent Conversations</span>
              </h2>
              <p className="text-light-section-secondary max-w-3xl mx-auto text-lg">
                Zoho SalesIQ is more than live chat. It is a complete customer engagement platform 
                that combines AI chatbots, visitor tracking, CRM integration, and real-time communication.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {salesIQFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card rounded-xl p-6 border border-border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-light-section mb-2">{feature.title}</h3>
                  <p className="text-light-section-secondary">{feature.description}</p>
                </motion.div>
              ))}
            </div>
            
            {/* SalesIQ Visual */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-16 relative"
            >
              <div className="bg-gradient-to-r from-primary/10 via-purple-500/10 to-primary/10 rounded-2xl p-8 md:p-12 border border-border">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-light-section mb-4">
                      Seamless CRM Integration
                    </h3>
                    <p className="text-light-section-secondary mb-6">
                      Every conversation automatically syncs with Zoho CRM, creating leads, 
                      updating contacts, and tracking the complete customer journey.
                    </p>
                    <div className="space-y-3">
                      {["Auto-create leads from chat", "Track visitor behavior", "Trigger automated workflows", "Complete conversation history"].map((item, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary" />
                          <span className="text-light-section">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="relative">
                    <div className="bg-card rounded-xl p-6 shadow-lg border border-border">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                          <MessageCircle className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="font-semibold text-light-section">SalesIQ Dashboard</div>
                          <div className="text-sm text-muted-foreground">Live visitor tracking</div>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                          <span className="text-sm text-light-section">Active Visitors</span>
                          <span className="font-semibold text-primary">24</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                          <span className="text-sm text-light-section">Chats Today</span>
                          <span className="font-semibold text-primary">156</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                          <span className="text-sm text-light-section">Leads Generated</span>
                          <span className="font-semibold text-primary">42</span>
                        </div>
                      </div>
                    </div>
                    {/* Floating sync indicator */}
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                      className="absolute -right-4 top-1/2 -translate-y-1/2 bg-green-500 text-white px-3 py-2 rounded-lg shadow-lg flex items-center gap-2"
                    >
                      <RefreshCw className="w-4 h-4" />
                      <span className="text-sm font-medium">CRM Synced</span>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Types of Chatbots Section */}
        <section className="py-20 bg-dark-gradient text-dark-section">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Types of Chatbots{" "}
                <span className="text-gradient-primary">Businesses Use Today</span>
              </h2>
              <p className="text-dark-section-secondary max-w-3xl mx-auto text-lg">
                From simple rule-based bots to advanced AI-powered assistants, discover 
                which chatbot type fits your business needs.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-4">
              {chatbotTypes.map((bot, index) => (
                <ChatbotTypeCard key={bot.title} bot={bot} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-20 bg-light-gradient">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-light-section mb-4">
                Technologies Behind{" "}
                <span className="text-primary">Smart Chatbots</span>
              </h2>
              <p className="text-light-section-secondary max-w-3xl mx-auto text-lg">
                Modern chatbots leverage cutting-edge technologies to deliver 
                intelligent, context-aware conversations at scale.
              </p>
            </motion.div>
            
            {/* Tech Stack Visualization */}
            <div className="relative">
              {/* Center hub */}
              <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary/20 rounded-full flex items-center justify-center z-10">
                <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center">
                  <Bot className="w-12 h-12 text-white" />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
                {technologies.map((tech, index) => (
                  <motion.div
                    key={tech.title}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-card rounded-xl p-6 border border-border shadow-sm hover:shadow-lg hover:border-primary/30 transition-all group"
                  >
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <tech.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-light-section mb-2">{tech.title}</h3>
                    <p className="text-sm text-light-section-secondary">{tech.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Implementation Process Section */}
        <section className="py-20 bg-dark-gradient text-dark-section">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                From Strategy to{" "}
                <span className="text-gradient-primary">Scalable Implementation</span>
              </h2>
              <p className="text-dark-section-secondary max-w-3xl mx-auto text-lg">
                We don't just deploy chatbots—we align them with sales, support, and growth goals.
              </p>
            </motion.div>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="hidden lg:block absolute top-0 bottom-0 left-1/2 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary/20 -translate-x-1/2" />
              
              <div className="space-y-8 lg:space-y-0">
                {implementationSteps.map((step, index) => (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 }}
                    className={`relative lg:w-1/2 ${
                      index % 2 === 0 ? "lg:pr-12 lg:ml-0" : "lg:pl-12 lg:ml-auto"
                    }`}
                  >
                    {/* Step number circle */}
                    <div className="hidden lg:flex absolute top-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-primary items-center justify-center font-bold text-xl text-primary-foreground shadow-lg shadow-primary/30 z-10"
                      style={{
                        left: index % 2 === 0 ? "auto" : "-2rem",
                        right: index % 2 === 0 ? "-2rem" : "auto"
                      }}
                    >
                      {step.step}
                    </div>
                    
                    <div className="bg-card-dark/50 rounded-xl p-6 border border-primary/20 hover:border-primary/40 transition-all">
                      <div className="flex items-start gap-4">
                        <div className="lg:hidden w-12 h-12 rounded-full bg-primary flex items-center justify-center font-bold text-lg text-primary-foreground flex-shrink-0">
                          {step.step}
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                          <p className="text-dark-section-secondary">{step.description}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 bg-light-gradient">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative overflow-hidden bg-gradient-to-r from-dark-bg to-dark-bg-secondary rounded-3xl p-8 md:p-16"
            >
              {/* Animated background */}
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
                      scale: [1, 1.5, 1],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 3 + Math.random() * 2,
                      repeat: Infinity,
                      delay: Math.random() * 2,
                    }}
                  />
                ))}
              </div>
              
              <div className="relative z-10 text-center max-w-3xl mx-auto">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-8"
                >
                  <Bot className="w-10 h-10 text-primary" />
                </motion.div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-dark-section mb-4">
                  Build Chatbots That{" "}
                  <span className="text-gradient-primary">Actually Work</span>{" "}
                  for Your Business
                </h2>
                
                <p className="text-dark-section-secondary text-lg mb-8">
                  Whether you need lead qualification, support automation, or AI-driven conversations, 
                  we help you design chatbot solutions that deliver measurable results.
                </p>
                
                <div className="flex flex-wrap justify-center gap-4">
                  <Button variant="heroPrimary" size="lg" asChild>
                    <Link to="/contact">
                      Book a Free Consultation
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" className="border-primary/50 text-primary hover:bg-primary/10">
                    <Calendar className="mr-2 w-5 h-5" />
                    Request a Demo
                  </Button>
                </div>
                
                {/* Internal links for SEO */}
                <div className="mt-12 pt-8 border-t border-primary/20">
                  <p className="text-sm text-dark-section-secondary mb-4">Related Solutions:</p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Link to="/crm-solutions" className="text-primary hover:underline text-sm">
                      Zoho CRM Solutions
                    </Link>
                    <span className="text-dark-section-secondary">•</span>
                    <Link to="/zoho-solutions" className="text-primary hover:underline text-sm">
                      Zoho Solutions
                    </Link>
                    <span className="text-dark-section-secondary">•</span>
                    <Link to="/ai-solutions" className="text-primary hover:underline text-sm">
                      AI Solutions
                    </Link>
                    <span className="text-dark-section-secondary">•</span>
                    <Link to="/contact" className="text-primary hover:underline text-sm">
                      Contact Us
                    </Link>
                  </div>
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
