import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Users, 
  Bot, 
  Database, 
  UserCheck, 
  TrendingUp,
  ArrowRight,
  MessageCircle,
  Zap,
  CheckCircle,
  Star
} from "lucide-react";

interface JourneyStep {
  icon: React.ElementType;
  label: string;
  description: string;
  color: string;
}

interface CustomerJourneyInfographicProps {
  title?: string;
  subtitle?: string;
  steps?: JourneyStep[];
  variant?: "horizontal" | "vertical" | "circular";
}

const defaultSteps: JourneyStep[] = [
  { 
    icon: Users, 
    label: "Visitor", 
    description: "Website visitor arrives",
    color: "hsl(210, 90%, 55%)" 
  },
  { 
    icon: Bot, 
    label: "AI Engagement", 
    description: "Chatbot initiates conversation",
    color: "hsl(190, 85%, 50%)" 
  },
  { 
    icon: MessageCircle, 
    label: "Qualification", 
    description: "AI qualifies the lead",
    color: "hsl(330, 80%, 65%)" 
  },
  { 
    icon: Database, 
    label: "CRM Sync", 
    description: "Data synced to CRM",
    color: "hsl(290, 70%, 55%)" 
  },
  { 
    icon: UserCheck, 
    label: "Sales Handoff", 
    description: "Assigned to sales rep",
    color: "hsl(270, 70%, 60%)" 
  },
  { 
    icon: TrendingUp, 
    label: "Conversion", 
    description: "Deal closed successfully",
    color: "hsl(150, 70%, 45%)" 
  },
];

export function CustomerJourneyInfographic({
  title = "AI-Powered Customer Journey",
  subtitle = "From first touch to conversion",
  steps = defaultSteps,
  variant = "horizontal"
}: CustomerJourneyInfographicProps) {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <div className="w-full">
      <div className="text-center mb-8">
        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground">{subtitle}</p>
      </div>

      <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border border-gray-200 shadow-sm overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-secondary rounded-full blur-3xl" />
        </div>

        {/* Journey Steps */}
        <div className="relative flex flex-wrap justify-center items-center gap-2 md:gap-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isActive = activeStep === index;
            const isPast = activeStep > index;

            return (
              <div key={index} className="flex items-center">
                <motion.div
                  animate={{
                    scale: isActive ? 1.1 : 1,
                    opacity: isPast || isActive ? 1 : 0.5
                  }}
                  transition={{ duration: 0.3 }}
                  className="relative flex flex-col items-center"
                >
                  <motion.div
                    animate={{
                      boxShadow: isActive 
                        ? `0 0 30px ${step.color}60` 
                        : "0 0 0px transparent"
                    }}
                    className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                      isPast || isActive 
                        ? "bg-white border-2" 
                        : "bg-gray-100 border border-gray-200"
                    }`}
                    style={{ 
                      borderColor: isPast || isActive ? step.color : undefined,
                    }}
                  >
                    <Icon 
                      className="w-6 h-6 md:w-7 md:h-7 transition-colors" 
                      style={{ color: isPast || isActive ? step.color : "#9CA3AF" }} 
                    />
                  </motion.div>
                  
                  <div className="mt-3 text-center">
                    <span className={`text-xs md:text-sm font-semibold transition-colors ${
                      isActive ? "text-foreground" : "text-muted-foreground"
                    }`}>
                      {step.label}
                    </span>
                    <p className="text-[10px] md:text-xs text-muted-foreground mt-0.5 max-w-[80px] md:max-w-[100px]">
                      {step.description}
                    </p>
                  </div>

                  {/* Active indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="journeyIndicator"
                      className="absolute -bottom-1 w-2 h-2 rounded-full"
                      style={{ backgroundColor: step.color }}
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    />
                  )}

                  {/* Completion check */}
                  {isPast && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center"
                    >
                      <CheckCircle className="w-3 h-3 text-white" />
                    </motion.div>
                  )}
                </motion.div>

                {/* Connector */}
                {index < steps.length - 1 && (
                  <div className="relative mx-1 md:mx-3 h-0.5 w-6 md:w-12 bg-gray-200 overflow-hidden rounded-full">
                    <motion.div
                      animate={{
                        x: isPast ? "0%" : "-100%"
                      }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0 bg-gradient-to-r from-primary to-secondary"
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Animated Chat Bubble */}
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 2.5 }}
          className="mt-8 flex justify-center"
        >
          <div className="bg-white rounded-2xl rounded-bl-none p-4 border border-gray-200 shadow-md max-w-sm">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Bot className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm font-semibold text-foreground">AI Assistant</span>
              <span className="ml-auto flex gap-0.5">
                {[...Array(3)].map((_, i) => (
                  <motion.span
                    key={i}
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ repeat: Infinity, duration: 1, delay: i * 0.2 }}
                    className="w-1.5 h-1.5 bg-primary rounded-full"
                  />
                ))}
              </span>
            </div>
            <motion.p
              key={activeStep}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm text-muted-foreground"
            >
              {activeStep === 0 && "👋 Hello! Welcome to our website. How can I help you today?"}
              {activeStep === 1 && "I can help you find the perfect solution. What are you looking for?"}
              {activeStep === 2 && "Great! Based on your needs, I'm qualifying this lead..."}
              {activeStep === 3 && "✅ Your information has been synced to our CRM."}
              {activeStep === 4 && "🎯 Connecting you with our sales specialist..."}
              {activeStep === 5 && "🎉 Congratulations! Deal closed successfully!"}
            </motion.p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
