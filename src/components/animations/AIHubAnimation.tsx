import { motion } from "framer-motion";
import { Brain, Database, MessageSquare, Phone, Globe, Users, Zap, BarChart3 } from "lucide-react";

const nodes = [
  { icon: Database, label: "Zoho", angle: 0, color: "primary" },
  { icon: Users, label: "CRM", angle: 45, color: "secondary" },
  { icon: BarChart3, label: "ERP", angle: 90, color: "accent" },
  { icon: Globe, label: "Website", angle: 135, color: "primary" },
  { icon: MessageSquare, label: "WhatsApp", angle: 180, color: "secondary" },
  { icon: Phone, label: "Voice", angle: 225, color: "accent" },
  { icon: Zap, label: "Analytics", angle: 270, color: "primary" },
  { icon: Brain, label: "AI", angle: 315, color: "secondary" },
];

export function AIHubAnimation() {
  const radius = 140;
  const centerSize = 120;

  return (
    <div className="relative w-full aspect-square max-w-lg mx-auto">
      {/* Outer rings */}
      <motion.div
        className="absolute inset-0 rounded-full border border-primary/20"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute inset-4 rounded-full border border-secondary/20"
        animate={{ rotate: -360 }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute inset-8 rounded-full border border-accent/20"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />

      {/* Center AI Hub */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, type: "spring" }}
      >
        <div className="relative">
          {/* Pulse rings */}
          <motion.div
            className="absolute inset-0 rounded-full bg-primary/20"
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
            style={{ width: centerSize, height: centerSize, marginLeft: -centerSize/2, marginTop: -centerSize/2 }}
          />
          <motion.div
            className="absolute inset-0 rounded-full bg-primary/30"
            animate={{ scale: [1, 1.3, 1], opacity: [0.6, 0, 0.6] }}
            transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
            style={{ width: centerSize, height: centerSize, marginLeft: -centerSize/2, marginTop: -centerSize/2 }}
          />
          
          {/* Center core */}
          <motion.div
            className="relative w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-2xl"
            style={{ marginLeft: -48, marginTop: -48 }}
            animate={{ 
              boxShadow: [
                "0 0 40px -10px hsl(186 100% 60% / 0.5)",
                "0 0 60px -10px hsl(186 100% 60% / 0.7)",
                "0 0 40px -10px hsl(186 100% 60% / 0.5)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Brain className="w-10 h-10 text-primary-foreground" />
          </motion.div>
        </div>
      </motion.div>

      {/* Orbiting nodes */}
      {nodes.map((node, index) => {
        const angleRad = (node.angle * Math.PI) / 180;
        const x = Math.cos(angleRad) * radius;
        const y = Math.sin(angleRad) * radius;
        const Icon = node.icon;

        return (
          <motion.div
            key={node.label}
            className="absolute left-1/2 top-1/2"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              x: x,
              y: y,
            }}
            transition={{ delay: 0.8 + index * 0.1, type: "spring" }}
          >
            <motion.div
              className="relative -translate-x-1/2 -translate-y-1/2"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2 + index * 0.2, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Connection line */}
              <svg
                className="absolute left-1/2 top-1/2 pointer-events-none"
                style={{
                  width: radius + 30,
                  height: 2,
                  transform: `rotate(${node.angle + 180}deg)`,
                  transformOrigin: "0 50%",
                }}
              >
                <motion.line
                  x1="0"
                  y1="1"
                  x2={radius - 20}
                  y2="1"
                  stroke={node.color === "primary" ? "hsl(186 100% 60%)" : node.color === "secondary" ? "hsl(212 100% 65%)" : "hsl(250 70% 55%)"}
                  strokeWidth="1"
                  strokeDasharray="4 4"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.4 }}
                  transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                />
              </svg>

              {/* Node */}
              <motion.div
                className={`w-14 h-14 rounded-xl flex items-center justify-center border ${
                  node.color === "primary" 
                    ? "bg-primary/10 border-primary/30" 
                    : node.color === "secondary"
                    ? "bg-secondary/10 border-secondary/30"
                    : "bg-accent/10 border-accent/30"
                }`}
                whileHover={{ scale: 1.1 }}
              >
                <Icon className={`w-6 h-6 ${
                  node.color === "primary" 
                    ? "text-primary" 
                    : node.color === "secondary"
                    ? "text-secondary"
                    : "text-accent"
                }`} />
              </motion.div>
              <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-muted-dark-foreground whitespace-nowrap">
                {node.label}
              </span>
            </motion.div>
          </motion.div>
        );
      })}

      {/* Floating particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full bg-primary/40"
          style={{
            left: `${20 + Math.random() * 60}%`,
            top: `${20 + Math.random() * 60}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
}