import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Zap, CheckCircle, Database, RefreshCw } from "lucide-react";

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
}

export function IntegrationFlowInfographic({
  title = "Seamless Integration Flow",
  subtitle = "Connect your favorite apps with Zoho",
  sourceApps,
  hubApp,
  destinationApps
}: IntegrationFlowInfographicProps) {
  const [activeFlow, setActiveFlow] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveFlow((prev) => (prev + 1) % sourceApps.length);
        setIsAnimating(false);
      }, 1000);
    }, 3000);
    return () => clearInterval(interval);
  }, [sourceApps.length]);

  return (
    <div className="w-full">
      <div className="text-center mb-8">
        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground">{subtitle}</p>
      </div>

      <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-3xl border border-gray-200 p-8 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
            backgroundSize: '24px 24px'
          }} />
        </div>

        <div className="relative flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-12">
          {/* Source Apps */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold text-muted-foreground text-center mb-2">SOURCE</span>
            {sourceApps.map((app, index) => {
              const Icon = app.icon;
              const isActive = activeFlow === index;
              
              return (
                <motion.div
                  key={app.id}
                  animate={{
                    scale: isActive ? 1.05 : 1,
                    borderColor: isActive ? "hsl(190, 85%, 50%)" : "hsl(0, 0%, 90%)"
                  }}
                  className="flex items-center gap-3 px-4 py-3 bg-white rounded-xl border-2 transition-colors"
                >
                  {app.logo ? (
                    <img src={app.logo} alt={app.name} className="w-8 h-8 object-contain" />
                  ) : Icon ? (
                    <Icon className="w-8 h-8 text-primary" />
                  ) : null}
                  <span className="font-medium text-foreground text-sm">{app.name}</span>
                  {isActive && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="ml-auto w-2 h-2 bg-primary rounded-full"
                    />
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Flow Arrows */}
          <div className="flex items-center gap-2">
            <div className="hidden lg:flex items-center gap-1">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    opacity: isAnimating ? [0.3, 1, 0.3] : 0.3,
                    x: isAnimating ? [0, 4, 0] : 0
                  }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="w-2 h-2 bg-primary rounded-full"
                />
              ))}
              <ArrowRight className="w-5 h-5 text-primary ml-1" />
            </div>
            
            {/* Data packet animation */}
            <AnimatePresence>
              {isAnimating && (
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 20, opacity: 0 }}
                  className="hidden lg:flex absolute left-1/3 w-6 h-6 bg-primary rounded-full items-center justify-center shadow-lg"
                  style={{ boxShadow: "0 0 20px hsl(190, 85%, 50%, 0.5)" }}
                >
                  <Zap className="w-3 h-3 text-white" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Hub App (Zoho) */}
          <motion.div
            animate={{
              boxShadow: isAnimating 
                ? "0 0 40px hsl(190, 85%, 50%, 0.3)" 
                : "0 10px 40px rgba(0,0,0,0.1)"
            }}
            className="relative"
          >
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-semibold text-muted-foreground">HUB</span>
            <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-primary to-secondary flex flex-col items-center justify-center text-white p-4">
              {hubApp.logo ? (
                <img src={hubApp.logo} alt={hubApp.name} className="w-12 h-12 object-contain mb-2" />
              ) : hubApp.icon ? (
                <hubApp.icon className="w-12 h-12 mb-2" />
              ) : (
                <Database className="w-12 h-12 mb-2" />
              )}
              <span className="font-bold text-sm text-center">{hubApp.name}</span>
            </div>
            
            {/* Sync indicator */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
              className="absolute -bottom-3 -right-3 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center"
            >
              <RefreshCw className="w-4 h-4 text-primary" />
            </motion.div>
          </motion.div>

          {/* Flow Arrows */}
          <div className="flex items-center gap-2">
            <div className="hidden lg:flex items-center gap-1">
              <ArrowRight className="w-5 h-5 text-primary mr-1" />
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    opacity: isAnimating ? [0.3, 1, 0.3] : 0.3,
                    x: isAnimating ? [0, 4, 0] : 0
                  }}
                  transition={{ delay: i * 0.1 + 0.5, duration: 0.5 }}
                  className="w-2 h-2 bg-green-500 rounded-full"
                />
              ))}
            </div>
          </div>

          {/* Destination Apps */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold text-muted-foreground text-center mb-2">DESTINATION</span>
            {destinationApps.map((app, index) => {
              const Icon = app.icon;
              const isActive = activeFlow === index;
              
              return (
                <motion.div
                  key={app.id}
                  animate={{
                    scale: isActive && isAnimating ? 1.05 : 1,
                    borderColor: isActive && isAnimating ? "hsl(150, 70%, 45%)" : "hsl(0, 0%, 90%)"
                  }}
                  className="flex items-center gap-3 px-4 py-3 bg-white rounded-xl border-2 transition-colors"
                >
                  {app.logo ? (
                    <img src={app.logo} alt={app.name} className="w-8 h-8 object-contain" />
                  ) : Icon ? (
                    <Icon className="w-8 h-8 text-green-600" />
                  ) : null}
                  <span className="font-medium text-foreground text-sm">{app.name}</span>
                  <AnimatePresence>
                    {isActive && isAnimating && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        className="ml-auto"
                      >
                        <CheckCircle className="w-5 h-5 text-green-500" />
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
  );
}
