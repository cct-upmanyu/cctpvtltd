import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { AIAgentExamples } from "@/components/ai/AIAgentExamples";
import heroAISolutions from "@/assets/hero-ai-solutions.jpg";
import { 
  ArrowRight, 
  Brain, 
  MessageSquare, 
  Phone, 
  Bot, 
  Sparkles, 
  Zap, 
  Database, 
  Globe, 
  Instagram, 
  MessageCircle,
  Eye,
  Cog,
  TrendingUp,
  Users,
  FileText,
  AlertCircle,
  CheckCircle,
  ArrowDown,
  Workflow,
  Target,
  BarChart3,
  Headphones,
  Mail,
  Calendar,
  DollarSign,
  ShieldCheck,
  Clock
} from "lucide-react";

// Agentic AI use cases
const agenticUseCases = [
  {
    title: "Sales Agents",
    icon: TrendingUp,
    tasks: ["Auto-follow up leads", "Update deal stages", "Trigger proposals", "Score opportunities"],
  },
  {
    title: "Finance Agents",
    icon: DollarSign,
    tasks: ["Flag anomalies", "Predict cash flow risks", "Auto-reconcile", "Invoice reminders"],
  },
  {
    title: "Support Agents",
    icon: Headphones,
    tasks: ["Resolve tickets", "Escalate priority issues", "Customer sentiment", "Knowledge routing"],
  },
  {
    title: "Operations Agents",
    icon: Cog,
    tasks: ["Monitor workflows", "Prevent bottlenecks", "Resource allocation", "Process optimization"],
  },
];

// AI Automation examples
const automationExamples = [
  {
    trigger: "Lead captured",
    steps: ["CRM update", "AI scoring", "Sales alert"],
    outcome: "Qualified lead assigned",
  },
  {
    trigger: "Customer query",
    steps: ["Intent detection", "Ticket creation", "Auto-response"],
    outcome: "Resolved or escalated",
  },
  {
    trigger: "Invoice delay",
    steps: ["AI prediction", "Reminder sent", "Escalation"],
    outcome: "Payment recovered",
  },
  {
    trigger: "Website chat",
    steps: ["AI qualification", "Meeting booking", "CRM update"],
    outcome: "Sales meeting scheduled",
  },
];

// Zoho AI features
const zohoAIFeatures = [
  { title: "Zia Customization", description: "Tailored AI configurations for your business context" },
  { title: "Predictive Dashboards", description: "AI-powered forecasting and trend analysis" },
  { title: "Natural Language Analytics", description: "Ask questions, get insights instantly" },
  { title: "AI Recommendations", description: "Smart suggestions for sales, support, and operations" },
];

// ChatGPT integrations
const chatGPTUseCases = [
  { title: "CRM AI Copilots", description: "Intelligent assistants inside your CRM", icon: Bot },
  { title: "Sales Coaching", description: "Real-time guidance for sales conversations", icon: TrendingUp },
  { title: "Support Resolution", description: "AI-powered ticket analysis and responses", icon: Headphones },
  { title: "Executive Summaries", description: "Auto-generated reports and insights", icon: FileText },
  { title: "Customer Insights", description: "Behavioral analysis and predictions", icon: Users },
  { title: "Content Generation", description: "Proposals, emails, and documentation", icon: Mail },
];

// Chatbot platforms
const chatbotPlatforms = [
  { name: "Website", icon: Globe },
  { name: "WhatsApp", icon: MessageCircle },
  { name: "Instagram", icon: Instagram },
  { name: "Facebook", icon: MessageSquare },
];

// Voice AI features
const voiceAIFeatures = [
  { title: "Smart IVR", description: "Natural language call routing" },
  { title: "AI Call Routing", description: "Context-aware agent assignment" },
  { title: "Voice Bots", description: "Automated conversations with CRM sync" },
  { title: "Speech Analytics", description: "Sentiment and intent detection" },
];

export default function AISolutions() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero - Light Clean Theme */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-[hsl(0,0%,96%)]">
        <div className="container-custom relative z-10 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block px-5 py-2 border-2 border-primary text-primary rounded-full text-sm font-medium mb-8">
              AI Automation Experts
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              AI That Actually Works—
              <span className="block mt-2">
                <span className="bg-gradient-to-r from-[hsl(350,80%,60%)] via-[hsl(290,70%,55%)] to-[hsl(260,70%,60%)] bg-clip-text text-transparent">
                  Inside Your Business Systems
                </span>
              </span>
            </h1>
            <p className="text-foreground text-lg md:text-xl mb-6 max-w-3xl mx-auto">
              AI is not a feature. It's an operating layer.
            </p>
            <p className="text-muted-foreground text-base md:text-lg mb-8 max-w-3xl mx-auto">
              At ClubCode Technology, we design AI-native business systems where intelligence lives inside CRM, ERP, workflows, communication channels, and analytics — not as disconnected tools.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button className="min-w-[220px] border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-white" size="lg">
                Build Your AI Strategy
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button className="min-w-[220px] border-2 border-secondary bg-transparent text-secondary hover:bg-secondary hover:text-white" size="lg">
                See AI in Action
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 1: Agentic AI - White Section */}
      <section className="bg-white section-padding relative overflow-hidden">
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-5 py-2 border-2 border-secondary text-secondary rounded-full text-sm font-medium mb-6">
              Next-Generation AI
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Agentic AI — Autonomous AI
              <span className="block mt-2">
                <span className="bg-gradient-to-r from-[hsl(350,80%,60%)] via-[hsl(290,70%,55%)] to-[hsl(260,70%,60%)] bg-clip-text text-transparent">
                  That Works for Your Business
                </span>
              </span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Agentic AI goes beyond chatbots. It acts, decides, learns, and executes across systems. 
              Our AI agents monitor CRM & ERP data, take actions without human triggers, coordinate across apps, and escalate intelligently when required.
            </p>
          </motion.div>

          {/* Agentic AI Flow Diagram */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mb-16"
          >
            <div className="bg-[hsl(0,0%,96%)] border border-border/30 rounded-2xl p-8">
              <h3 className="text-foreground text-xl font-semibold text-center mb-8">Agentic AI Flow</h3>
              <div className="flex flex-wrap justify-center items-center gap-4">
                {[
                  { label: "AI Agent", icon: Brain, color: "hsl(350,80%,60%)" },
                  { label: "Observes Data", icon: Eye, color: "hsl(320,70%,55%)" },
                  { label: "Decides", icon: Target, color: "hsl(290,70%,55%)" },
                  { label: "Acts", icon: Zap, color: "hsl(270,70%,55%)" },
                  { label: "Learns", icon: TrendingUp, color: "hsl(260,70%,60%)" },
                  { label: "Improves", icon: CheckCircle, color: "hsl(150,70%,45%)" },
                ].map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <motion.div
                      key={step.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-2"
                    >
                      <div 
                        className="w-16 h-16 rounded-xl flex flex-col items-center justify-center bg-white border border-border/30"
                      >
                        <Icon className="w-6 h-6 mb-1" style={{ color: step.color }} />
                        <span className="text-[10px] text-muted-foreground text-center">{step.label}</span>
                      </div>
                      {index < 5 && (
                        <ArrowRight className="w-5 h-5 text-muted-foreground/50 hidden sm:block" />
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Agentic AI Use Cases Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {agenticUseCases.map((useCase, index) => {
              const Icon = useCase.icon;
              return (
                <motion.div
                  key={useCase.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-[hsl(0,0%,96%)] rounded-2xl p-6 border border-border/30 hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[hsl(350,80%,60%)]/10 to-[hsl(290,70%,55%)]/10 border border-border/30 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">{useCase.title}</h3>
                  <ul className="space-y-2">
                    {useCase.tasks.map((task) => (
                      <li key={task} className="flex items-center gap-2 text-muted-foreground text-sm">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        {task}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* AI Agent Examples Section */}
      <AIAgentExamples />

      {/* SECTION 2: AI Automations - Light Gray Section */}
      <section className="bg-[hsl(0,0%,96%)] section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-5 py-2 border-2 border-primary text-primary rounded-full text-sm font-medium mb-6">
              Workflow Intelligence
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              AI Automation That
              <span className="block mt-2">
                <span className="bg-gradient-to-r from-[hsl(350,80%,60%)] via-[hsl(290,70%,55%)] to-[hsl(260,70%,60%)] bg-clip-text text-transparent">
                  Eliminates Manual Work
                </span>
              </span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              We combine AI + automation engines to remove repetitive work across departments using Zoho Flow, n8n, custom AI triggers, webhooks & APIs.
            </p>
          </motion.div>

          {/* Automation Pipeline Examples */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {automationExamples.map((example, index) => (
              <motion.div
                key={example.trigger}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-[#3FE0F0]/30 hover-lift transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#3FE0F0]/10 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-[#3FE0F0]" />
                  </div>
                  <span className="font-semibold text-[#111827]">{example.trigger}</span>
                </div>
                
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  {example.steps.map((step, stepIndex) => (
                    <div key={step} className="flex items-center gap-2">
                      <span className="px-3 py-1 bg-[#F5F7FB] text-[#374151] text-sm rounded-full border border-gray-200">
                        {step}
                      </span>
                      {stepIndex < example.steps.length - 1 && (
                        <ArrowRight className="w-4 h-4 text-[#3FE0F0]" />
                      )}
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center gap-2 text-[#10B981]">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-medium">{example.outcome}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tools Used */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            {["Zoho Flow", "n8n", "Custom AI Triggers", "Webhooks & APIs"].map((tool) => (
              <span
                key={tool}
                className="px-4 py-2 bg-white border border-gray-200 rounded-full text-[#111827] font-medium"
              >
                {tool}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 3: AI for Zoho - DARK SECTION */}
      <section className="bg-dark-gradient section-padding relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-4">
                Native Zoho AI
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                AI for Zoho
                <span className="text-gradient-primary block">Zia Enhancement</span>
              </h2>
              <p className="text-white/80 text-lg mb-8">
                Supercharge Zoho's native AI with custom configurations, advanced predictions, and intelligent automation tailored to your business processes.
              </p>
              
              <div className="space-y-4">
                {zohoAIFeatures.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3 p-4 bg-muted-dark/80 rounded-xl border border-primary/20"
                  >
                    <Sparkles className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-white">{feature.title}</h4>
                      <p className="text-sm text-white/80">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Zoho AI Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative aspect-square max-w-md mx-auto">
                {/* Center - AI Core */}
                <motion.div
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
                  animate={{ 
                    boxShadow: [
                      "0 0 40px -10px rgba(63, 224, 240, 0.3)",
                      "0 0 60px -10px rgba(63, 224, 240, 0.5)",
                      "0 0 40px -10px rgba(63, 224, 240, 0.3)"
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <div className="w-28 h-28 rounded-full bg-gradient-to-br from-[#3FE0F0] to-[#4DA3FF] flex items-center justify-center">
                    <Brain className="w-12 h-12 text-[#111827]" />
                  </div>
                </motion.div>

                {/* Orbiting Zoho apps */}
                {["CRM", "Books", "People", "Desk", "Analytics", "Creator"].map((app, index) => {
                  const angle = (index * 60) * (Math.PI / 180);
                  const radius = 120;
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;

                  return (
                    <motion.div
                      key={app}
                      className="absolute left-1/2 top-1/2"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      style={{ transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))` }}
                    >
                      <motion.div
                        className="w-16 h-16 rounded-xl bg-muted-dark/80 border border-primary/30 flex items-center justify-center shadow-lg"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 3, repeat: Infinity, delay: index * 0.2 }}
                      >
                        <span className="text-xs font-medium text-white text-center">{app}</span>
                      </motion.div>
                    </motion.div>
                  );
                })}

                {/* Animated insight lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  {[0, 1, 2, 3, 4, 5].map((index) => {
                    const angle = (index * 60) * (Math.PI / 180);
                    const radius = 120;
                    const x = 50 + (Math.cos(angle) * radius) / 4;
                    const y = 50 + (Math.sin(angle) * radius) / 4;
                    
                    return (
                      <motion.line
                        key={index}
                        x1="50%"
                        y1="50%"
                        x2={`${x}%`}
                        y2={`${y}%`}
                        stroke="#3FE0F0"
                        strokeWidth="2"
                        strokeDasharray="4 4"
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: 0.5 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                      />
                    );
                  })}
                </svg>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 4: ChatGPT Business Integrations - LIGHT SECTION */}
      <section className="bg-light-gradient section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#4DA3FF]/10 text-[#4DA3FF] text-sm font-medium mb-4">
              Enterprise GPT
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#111827] mb-4">
              ChatGPT Business
              <span className="text-gradient-primary block">Integrations</span>
            </h2>
            <p className="text-[#374151] text-lg max-w-3xl mx-auto">
              Enterprise-grade GPT implementations that understand your business context and deliver actionable intelligence across all departments.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {chatGPTUseCases.map((useCase, index) => {
              const Icon = useCase.icon;
              return (
                <motion.div
                  key={useCase.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-[#4DA3FF]/30 hover-lift transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#4DA3FF]/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-[#4DA3FF]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#111827] mb-2">{useCase.title}</h3>
                  <p className="text-[#374151] text-sm">{useCase.description}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Before vs After Impact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-100 rounded-2xl p-6 border border-gray-200">
                <h4 className="font-semibold text-[#374151] mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5" /> Before AI Integration
                </h4>
                <ul className="space-y-2 text-[#374151]">
                  <li className="flex items-center gap-2"><span className="text-red-500">✗</span> 4+ hours writing proposals</li>
                  <li className="flex items-center gap-2"><span className="text-red-500">✗</span> Manual data analysis</li>
                  <li className="flex items-center gap-2"><span className="text-red-500">✗</span> Slow customer response</li>
                  <li className="flex items-center gap-2"><span className="text-red-500">✗</span> Inconsistent communications</li>
                </ul>
              </div>
              <div className="bg-[#3FE0F0]/5 rounded-2xl p-6 border border-[#3FE0F0]/30">
                <h4 className="font-semibold text-[#111827] mb-4 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-[#3FE0F0]" /> After AI Integration
                </h4>
                <ul className="space-y-2 text-[#111827]">
                  <li className="flex items-center gap-2"><span className="text-[#10B981]">✓</span> Proposals in 15 minutes</li>
                  <li className="flex items-center gap-2"><span className="text-[#10B981]">✓</span> Instant AI insights</li>
                  <li className="flex items-center gap-2"><span className="text-[#10B981]">✓</span> Sub-minute response time</li>
                  <li className="flex items-center gap-2"><span className="text-[#10B981]">✓</span> Brand-consistent messaging</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 5: AI Chatbots & Voice AI - DARK SECTION */}
      <section className="bg-dark-gradient section-padding relative overflow-hidden">
        <div className="absolute inset-0 particles-bg pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-4">
              Omnichannel AI
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              AI Chatbots &
              <span className="text-gradient-primary block">Voice AI Systems</span>
            </h2>
            <p className="text-white/80 text-lg max-w-3xl mx-auto">
              Deploy intelligent conversational AI across all customer touchpoints for 24/7 engagement with unified intelligence.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Chatbots */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="card-glass rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-6">AI Chatbots</h3>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {chatbotPlatforms.map((platform) => {
                  const Icon = platform.icon;
                  return (
                    <div
                      key={platform.name}
                      className="flex items-center gap-3 p-4 bg-muted-dark/50 rounded-xl border border-primary/20"
                    >
                      <Icon className="w-6 h-6 text-primary" />
                      <span className="text-white font-medium">{platform.name}</span>
                    </div>
                  );
                })}
              </div>
              <ul className="space-y-2 text-white/80">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /> Multi-language support</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /> CRM integration</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /> Human handoff</li>
              </ul>
            </motion.div>

            {/* Voice AI */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="card-glass rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Voice AI</h3>
              <div className="space-y-4">
                {voiceAIFeatures.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3 p-4 bg-muted-dark/50 rounded-xl border border-secondary/20"
                  >
                    <Phone className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-white">{feature.title}</h4>
                      <p className="text-sm text-white/80">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Omnichannel Visual */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <div className="inline-flex items-center gap-4 px-6 py-3 bg-muted-dark/80 border border-primary/20 rounded-full">
              <span className="text-white/80">All channels →</span>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Brain className="w-5 h-5 text-foreground" />
              </div>
              <span className="text-white/80">→ Unified AI Intelligence</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA - LIGHT SECTION */}
      <section className="bg-light-gradient section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-6">
              Ready to Implement AI in Your Business?
            </h2>
            <p className="text-[#374151] text-lg mb-8">
              Get a customized AI strategy that aligns with your business goals and technical infrastructure.
            </p>
            <Button variant="heroLight" size="xl">
              Let's Build Your AI Strategy
              <ArrowRight className="w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}