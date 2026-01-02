import { motion } from "framer-motion";

const integrationApps = [
  { name: "WhatsApp", color: "#25D366", icon: "💬", orbit: 1, delay: 0, size: "lg" },
  { name: "Razorpay", color: "#2B84EA", icon: "💳", orbit: 2, delay: 0.5, size: "md" },
  { name: "HRMS", color: "#8B5CF6", icon: "👥", orbit: 2, delay: 2.5, size: "md" },
  { name: "Finance", color: "#10B981", icon: "💰", orbit: 3, delay: 1, size: "sm" },
  { name: "Chatbot", color: "#F59E0B", icon: "🤖", orbit: 1, delay: 3.5, size: "lg" },
  { name: "Website", color: "#3B82F6", icon: "🌐", orbit: 3, delay: 3, size: "sm" },
  { name: "QuickBooks", color: "#2CA01C", icon: "📊", orbit: 2, delay: 4.5, size: "md" },
  { name: "Slack", color: "#4A154B", icon: "💼", orbit: 3, delay: 5, size: "sm" },
];

const orbitRadii = {
  1: 100,
  2: 160,
  3: 220,
};

const sizeClasses = {
  lg: "w-16 h-16 text-2xl",
  md: "w-14 h-14 text-xl",
  sm: "w-12 h-12 text-lg",
};

export const IntegrationSolarSystem = () => {
  return (
    <div className="relative w-full h-[500px] flex items-center justify-center overflow-hidden">
      {/* Orbit rings */}
      {[1, 2, 3].map((orbit) => (
        <div
          key={orbit}
          className="absolute rounded-full border border-primary/20"
          style={{
            width: orbitRadii[orbit as keyof typeof orbitRadii] * 2,
            height: orbitRadii[orbit as keyof typeof orbitRadii] * 2,
          }}
        />
      ))}

      {/* Central Hub - Business Ecosystem */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6, type: "spring" }}
        className="absolute z-20 w-28 h-28 rounded-full bg-gradient-to-br from-primary via-primary/80 to-accent flex items-center justify-center shadow-2xl"
        style={{ boxShadow: "0 0 60px rgba(0, 160, 176, 0.5)" }}
      >
        <div className="text-center">
          <span className="text-3xl">🏢</span>
          <p className="text-xs font-bold text-white mt-1">Business</p>
          <p className="text-[10px] text-white/80">Ecosystem</p>
        </div>
      </motion.div>

      {/* Orbiting Apps */}
      {integrationApps.map((app, index) => {
        const radius = orbitRadii[app.orbit as keyof typeof orbitRadii];
        const duration = 15 + app.orbit * 5;

        return (
          <motion.div
            key={app.name}
            className="absolute"
            style={{
              width: radius * 2,
              height: radius * 2,
            }}
            animate={{ rotate: 360 }}
            transition={{
              duration: duration,
              repeat: Infinity,
              ease: "linear",
              delay: app.delay,
            }}
          >
            <motion.div
              className={`absolute ${sizeClasses[app.size as keyof typeof sizeClasses]} rounded-full flex flex-col items-center justify-center shadow-lg cursor-pointer transition-transform hover:scale-125 z-10`}
              style={{
                backgroundColor: app.color,
                top: -20,
                left: "50%",
                transform: "translateX(-50%)",
                boxShadow: `0 0 20px ${app.color}66`,
              }}
              initial={{ scale: 0 }}
              animate={{ scale: 1, rotate: -360 }}
              transition={{
                scale: { delay: 0.2 * index, duration: 0.5 },
                rotate: { duration: duration, repeat: Infinity, ease: "linear", delay: app.delay },
              }}
              whileHover={{ scale: 1.2, zIndex: 30 }}
            >
              <span>{app.icon}</span>
              <span className="text-[8px] font-semibold text-white truncate max-w-full px-1">
                {app.name}
              </span>
            </motion.div>
          </motion.div>
        );
      })}

      {/* Connection lines animation */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(0, 160, 176, 0)" />
            <stop offset="50%" stopColor="rgba(0, 160, 176, 0.6)" />
            <stop offset="100%" stopColor="rgba(0, 160, 176, 0)" />
          </linearGradient>
        </defs>
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <motion.line
            key={i}
            x1="50%"
            y1="50%"
            x2="50%"
            y2="20%"
            stroke="url(#lineGradient)"
            strokeWidth="1"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0.5, 0],
              rotate: [i * 60, i * 60 + 360],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: i * 0.5,
            }}
            style={{ transformOrigin: "center" }}
          />
        ))}
      </svg>
    </div>
  );
};
