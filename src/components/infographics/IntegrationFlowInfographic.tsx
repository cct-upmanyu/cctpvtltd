import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RefreshCw } from "lucide-react";

interface IntegrationNode {
  id: string;
  name: string;
  logo?: string;
  icon?: React.ElementType;
  type: "source" | "hub" | "destination";
}

interface IntegrationFlowInfographicProps {
  title?: string;
  subtitle?: string;
  sourceApps: IntegrationNode[];
  hubApp: IntegrationNode;
  destinationApps: IntegrationNode[];
  badge?: string;
}

export function IntegrationFlowInfographic({
  title = "Unified Data Flow",
  subtitle = "Watch how data flows seamlessly from your favorite apps through Zoho and out to your business systems",
  sourceApps,
  hubApp,
  destinationApps,
  badge = "How It Works"
}: IntegrationFlowInfographicProps) {
  const [activeSourceIndex, setActiveSourceIndex] = useState(0);
  const [flowPhase, setFlowPhase] = useState<"source" | "hub" | "destination">("source");

  useEffect(() => {
    const interval = setInterval(() => {
      setFlowPhase("source");
      
      setTimeout(() => setFlowPhase("hub"), 800);
      setTimeout(() => setFlowPhase("destination"), 1600);
      setTimeout(() => {
        setActiveSourceIndex((prev) => (prev + 1) % sourceApps.length);
        setFlowPhase("source");
      }, 2800);
    }, 3500);
    
    return () => clearInterval(interval);
  }, [sourceApps.length]);

  return (
    <div className="w-full py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
          {badge}
        </span>
        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">{title}</h3>
        <p className="text-muted-foreground max-w-xl mx-auto">{subtitle}</p>
      </div>

      {/* Integration Flow Diagram */}
      <div className="relative bg-[#F8FAFB] rounded-2xl border border-gray-100 p-8 md:p-12 overflow-hidden max-w-5xl mx-auto">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }} />
        </div>

        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-0">
          
          {/* SOURCE Column */}
          <div className="flex flex-col items-center lg:items-start w-full lg:w-auto">
            <span className="text-xs font-semibold text-gray-400 tracking-wider uppercase mb-4">Source</span>
            <div className="flex flex-col gap-3">
              {sourceApps.map((app, index) => {
                const isActive = activeSourceIndex === index;
                
                return (
                  <motion.div
                    key={app.id}
                    animate={{
                      scale: isActive ? 1.02 : 1,
                      boxShadow: isActive 
                        ? "0 4px 20px rgba(0, 0, 0, 0.08)" 
                        : "0 1px 3px rgba(0, 0, 0, 0.04)"
                    }}
                    transition={{ duration: 0.3 }}
                    className={`
                      flex items-center gap-3 px-4 py-3 bg-white rounded-xl border-2 min-w-[160px]
                      ${isActive ? "border-primary" : "border-gray-100"}
                    `}
                  >
                    {app.logo ? (
                      <img src={app.logo} alt={app.name} className="w-6 h-6 object-contain" />
                    ) : app.icon ? (
                      <app.icon className="w-6 h-6 text-gray-600" />
                    ) : null}
                    <span className="font-medium text-gray-800 text-sm">{app.name}</span>
                    {isActive && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="ml-auto w-2.5 h-2.5 bg-primary rounded-full"
                      />
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Left Flow Line */}
          <div className="hidden lg:flex items-center flex-1 max-w-[120px] px-2">
            <div className="relative w-full h-0.5 bg-gray-200">
              {/* Animated dots */}
              <div className="absolute inset-0 flex items-center justify-center gap-1.5">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    animate={{
                      backgroundColor: flowPhase === "source" || flowPhase === "hub" 
                        ? ["hsl(var(--primary))", "hsl(var(--primary) / 0.3)", "hsl(var(--primary))"]
                        : "hsl(0, 0%, 80%)",
                      scale: flowPhase === "source" ? [1, 1.2, 1] : 1
                    }}
                    transition={{ 
                      duration: 0.6, 
                      delay: i * 0.15,
                      repeat: flowPhase === "source" ? Infinity : 0,
                      repeatDelay: 0.5
                    }}
                    className="w-2 h-2 rounded-full bg-gray-300"
                  />
                ))}
              </div>
              
              {/* Arrow */}
              <motion.svg 
                className="absolute -right-3 top-1/2 -translate-y-1/2 w-4 h-4"
                viewBox="0 0 16 16"
                animate={{
                  fill: flowPhase === "source" || flowPhase === "hub" 
                    ? "hsl(var(--primary))" 
                    : "hsl(0, 0%, 70%)"
                }}
              >
                <path d="M8 0L16 8L8 16L8 10L0 10L0 6L8 6L8 0Z" />
              </motion.svg>
            </div>
          </div>

          {/* Mobile Flow Indicator */}
          <div className="lg:hidden flex items-center justify-center">
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center"
            >
              <svg className="w-4 h-4 text-primary rotate-90" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 0L16 8L8 16L8 10L0 10L0 6L8 6L8 0Z" />
              </svg>
            </motion.div>
          </div>

          {/* HUB - Central Zoho */}
          <div className="flex flex-col items-center">
            <span className="text-xs font-semibold text-gray-400 tracking-wider uppercase mb-4">Hub</span>
            <motion.div
              animate={{
                boxShadow: flowPhase === "hub" 
                  ? "0 0 0 8px rgba(0, 166, 153, 0.1), 0 20px 50px rgba(0, 0, 0, 0.15)" 
                  : "0 10px 40px rgba(0, 0, 0, 0.1)"
              }}
              transition={{ duration: 0.4 }}
              className="relative"
            >
              <div className="w-28 h-28 md:w-32 md:h-32 rounded-2xl bg-gradient-to-br from-[#00776b] to-[#004d45] flex flex-col items-center justify-center text-white p-4 shadow-xl">
                {/* Integration Symbol - Connected Nodes */}
                <svg 
                  viewBox="0 0 48 48" 
                  className="w-12 h-12 md:w-14 md:h-14 mb-2"
                  fill="none"
                >
                  {/* Center node */}
                  <circle cx="24" cy="24" r="6" fill="white" />
                  
                  {/* Outer nodes */}
                  <circle cx="12" cy="12" r="4" fill="white" opacity="0.9" />
                  <circle cx="36" cy="12" r="4" fill="white" opacity="0.9" />
                  <circle cx="12" cy="36" r="4" fill="white" opacity="0.9" />
                  <circle cx="36" cy="36" r="4" fill="white" opacity="0.9" />
                  
                  {/* Connection lines */}
                  <line x1="18" y1="18" x2="14" y2="14" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
                  <line x1="30" y1="18" x2="34" y2="14" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
                  <line x1="18" y1="30" x2="14" y2="34" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
                  <line x1="30" y1="30" x2="34" y2="34" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
                </svg>
                <span className="font-bold text-sm text-center whitespace-nowrap">{hubApp.name}</span>
              </div>
              
              {/* Sync indicator */}
              <motion.div
                animate={{ 
                  rotate: flowPhase === "hub" ? 360 : 0,
                  scale: flowPhase === "hub" ? 1.1 : 1
                }}
                transition={{ 
                  rotate: { duration: 1, ease: "linear" },
                  scale: { duration: 0.3 }
                }}
                className="absolute -bottom-2 -right-2 w-7 h-7 bg-white rounded-full shadow-md flex items-center justify-center border border-gray-100"
              >
                <RefreshCw className="w-3.5 h-3.5 text-primary" />
              </motion.div>
            </motion.div>
          </div>

          {/* Right Flow Line */}
          <div className="hidden lg:flex items-center flex-1 max-w-[120px] px-2">
            <div className="relative w-full h-0.5 bg-gray-200">
              {/* Arrow */}
              <motion.svg 
                className="absolute -left-1 top-1/2 -translate-y-1/2 w-4 h-4"
                viewBox="0 0 16 16"
                animate={{
                  fill: flowPhase === "hub" || flowPhase === "destination" 
                    ? "hsl(var(--primary))" 
                    : "hsl(0, 0%, 70%)"
                }}
              >
                <path d="M8 0L16 8L8 16L8 10L0 10L0 6L8 6L8 0Z" />
              </motion.svg>
              
              {/* Animated dots */}
              <div className="absolute inset-0 flex items-center justify-center gap-1.5 ml-4">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    animate={{
                      backgroundColor: flowPhase === "destination" 
                        ? ["hsl(var(--primary))", "hsl(var(--primary) / 0.3)", "hsl(var(--primary))"]
                        : "hsl(0, 0%, 80%)",
                      scale: flowPhase === "destination" ? [1, 1.2, 1] : 1
                    }}
                    transition={{ 
                      duration: 0.6, 
                      delay: i * 0.15,
                      repeat: flowPhase === "destination" ? Infinity : 0,
                      repeatDelay: 0.5
                    }}
                    className="w-2 h-2 rounded-full bg-gray-300"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Flow Indicator */}
          <div className="lg:hidden flex items-center justify-center">
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
              className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center"
            >
              <svg className="w-4 h-4 text-primary rotate-90" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 0L16 8L8 16L8 10L0 10L0 6L8 6L8 0Z" />
              </svg>
            </motion.div>
          </div>

          {/* DESTINATION Column */}
          <div className="flex flex-col items-center lg:items-end w-full lg:w-auto">
            <span className="text-xs font-semibold text-gray-400 tracking-wider uppercase mb-4">Destination</span>
            <div className="flex flex-col gap-3">
              {destinationApps.map((app, index) => {
                const isActive = flowPhase === "destination" && activeSourceIndex === index;
                
                return (
                  <motion.div
                    key={app.id}
                    animate={{
                      scale: isActive ? 1.02 : 1,
                      boxShadow: isActive 
                        ? "0 4px 20px rgba(0, 0, 0, 0.08)" 
                        : "0 1px 3px rgba(0, 0, 0, 0.04)"
                    }}
                    transition={{ duration: 0.3 }}
                    className={`
                      flex items-center gap-3 px-4 py-3 bg-white rounded-xl border-2 min-w-[160px]
                      ${isActive ? "border-green-500" : "border-gray-100"}
                    `}
                  >
                    {app.logo ? (
                      <img src={app.logo} alt={app.name} className="w-6 h-6 object-contain" />
                    ) : app.icon ? (
                      <app.icon className="w-6 h-6 text-gray-600" />
                    ) : null}
                    <span className="font-medium text-gray-800 text-sm">{app.name}</span>
                    
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0, opacity: 0 }}
                          className="ml-auto flex items-center gap-1"
                        >
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: [0, 1.2, 1] }}
                            transition={{ duration: 0.4 }}
                            className="w-2.5 h-2.5 bg-green-500 rounded-full"
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
