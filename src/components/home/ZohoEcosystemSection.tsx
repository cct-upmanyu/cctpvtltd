import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const zohoSuites = [
  { name: "CRM Plus", description: "Unified customer experience" },
  { name: "Finance Plus", description: "Complete finance suite" },
  { name: "People Plus", description: "HR & workforce management" },
  { name: "Workplace", description: "Collaboration tools" },
  { name: "Marketing Plus", description: "Marketing automation" },
  { name: "Service Plus", description: "Customer service" },
];

// Zoho apps with their icons and colors - organized by orbit
const innerOrbitApps = [
  { name: "CRM", icon: "📊", color: "#E42527" },
  { name: "Books", icon: "📚", color: "#1E88E5" },
  { name: "Inventory", icon: "📦", color: "#4CAF50" },
  { name: "Social", icon: "💬", color: "#F7931E" },
  { name: "Survey", icon: "📝", color: "#9C27B0" },
  { name: "Expense", icon: "💳", color: "#00BCD4" },
];

const middleOrbitApps = [
  { name: "Bookings", icon: "📅", color: "#3F51B5" },
  { name: "Campaigns", icon: "📧", color: "#FF5722" },
  { name: "SalesIQ", icon: "💬", color: "#00A651" },
  { name: "Flow", icon: "⚡", color: "#795548" },
  { name: "Creator", icon: "🔧", color: "#607D8B" },
  { name: "Payroll", icon: "💰", color: "#E91E63" },
];

const outerOrbitApps = [
  { name: "Recruit", icon: "👥", color: "#9C27B0" },
  { name: "Workplace", icon: "🏢", color: "#00BCD4" },
  { name: "People", icon: "👤", color: "#F7931E" },
  { name: "Voice", icon: "📞", color: "#4CAF50" },
  { name: "Sites", icon: "🌐", color: "#1E88E5" },
  { name: "Zia", icon: "🤖", color: "#E42527" },
];

export function ZohoEcosystemSection() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Split background - dark left, gradient blue right */}
      <div className="absolute inset-0 flex">
        <div className="w-full lg:w-1/2 bg-[#0B1C3D]" />
        <div className="hidden lg:block w-1/2 bg-gradient-to-br from-[#E8F4FC] via-[#D0E8F7] to-[#B8DCF2]" />
      </div>
      
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#3FE0F0]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#8B5CF6]/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content - Dark background */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:pr-8"
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-[#3FE0F0]/30 bg-[#3FE0F0]/10 text-[#3FE0F0] text-sm font-medium mb-4">
              Zoho Premium Partner
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#FFFFFF] mb-6">
              Complete Zoho
              <span className="text-gradient-primary block">Ecosystem Mastery</span>
            </h2>
            <p className="text-[#E5E7EB] text-lg mb-8">
              As a certified Global Zoho Premium Partner and Creator Champions, we implement the full Zoho ecosystem—from individual apps to complete enterprise suites.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {zohoSuites.map((suite, index) => (
                <motion.div
                  key={suite.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 p-4 bg-[#0F2A5F] rounded-xl border border-[#3FE0F0]/10"
                >
                  <CheckCircle className="w-5 h-5 text-[#3FE0F0] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-[#FFFFFF]">{suite.name}</h4>
                    <p className="text-sm text-[#E5E7EB]">{suite.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Button variant="heroDark" size="lg" asChild>
              <Link to="/zoho-solutions">
                Explore Zoho Solutions
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>

          {/* Visual - Zoho Ecosystem Orbital Diagram */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-[#E8F4FC] via-[#D0E8F7] to-[#B8DCF2] lg:bg-none rounded-2xl lg:rounded-none p-8 lg:p-4"
          >
            <div className="relative flex items-center justify-center min-h-[400px] md:min-h-[480px]">
              {/* Concentric Orbit Rings */}
              
              {/* Outer Ring */}
              <div className="absolute w-[380px] h-[380px] md:w-[440px] md:h-[440px] rounded-full border-2 border-[#5BA3D9]/30" />
              
              {/* Middle Ring */}
              <div className="absolute w-[280px] h-[280px] md:w-[320px] md:h-[320px] rounded-full border-2 border-[#5BA3D9]/40" />
              
              {/* Inner Ring */}
              <div className="absolute w-[180px] h-[180px] md:w-[200px] md:h-[200px] rounded-full border-2 border-[#5BA3D9]/50" />

              {/* Outer Orbit Apps */}
              {outerOrbitApps.map((app, i) => {
                const angle = (i * 60 - 90) * (Math.PI / 180);
                const radius = 190;
                const mdRadius = 220;

                return (
                  <motion.div
                    key={app.name}
                    className="absolute"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    animate={{ 
                      rotate: [0, 360],
                    }}
                    style={{ 
                      transformOrigin: 'center center',
                    }}
                  >
                    <motion.div
                      className="flex flex-col items-center gap-1"
                      style={{ 
                        transform: `translate(${Math.cos(angle) * radius}px, ${Math.sin(angle) * radius}px)`,
                      }}
                      whileHover={{ scale: 1.1 }}
                    >
                      <div 
                        className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-lg flex items-center justify-center border-2"
                        style={{ borderColor: app.color }}
                      >
                        <span className="text-lg md:text-xl">{app.icon}</span>
                      </div>
                      <div className="flex items-center gap-1 bg-white/80 backdrop-blur-sm px-2 py-0.5 rounded-full shadow-sm">
                        <span className="text-[10px] md:text-xs font-semibold text-[#1a4b7c]">Zoho</span>
                        <span className="text-[10px] md:text-xs font-bold text-[#0B1C3D]">{app.name}</span>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}

              {/* Middle Orbit Apps */}
              {middleOrbitApps.map((app, i) => {
                const angle = (i * 60 - 60) * (Math.PI / 180);
                const radius = 140;

                return (
                  <motion.div
                    key={app.name}
                    className="absolute"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                  >
                    <motion.div
                      className="flex flex-col items-center gap-1"
                      style={{ 
                        transform: `translate(${Math.cos(angle) * radius}px, ${Math.sin(angle) * radius}px)`,
                      }}
                      animate={{ y: [0, -3, 0] }}
                      transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      <div 
                        className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white shadow-md flex items-center justify-center border-2"
                        style={{ borderColor: app.color }}
                      >
                        <span className="text-base md:text-lg">{app.icon}</span>
                      </div>
                      <div className="flex items-center gap-0.5 bg-white/80 backdrop-blur-sm px-1.5 py-0.5 rounded-full shadow-sm">
                        <span className="text-[9px] md:text-[10px] font-semibold text-[#1a4b7c]">Zoho</span>
                        <span className="text-[9px] md:text-[10px] font-bold text-[#0B1C3D]">{app.name}</span>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}

              {/* Inner Orbit Apps */}
              {innerOrbitApps.map((app, i) => {
                const angle = (i * 60 - 30) * (Math.PI / 180);
                const radius = 90;

                return (
                  <motion.div
                    key={app.name}
                    className="absolute"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                  >
                    <motion.div
                      className="flex flex-col items-center gap-0.5"
                      style={{ 
                        transform: `translate(${Math.cos(angle) * radius}px, ${Math.sin(angle) * radius}px)`,
                      }}
                      animate={{ y: [0, -2, 0] }}
                      transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.15 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      <div 
                        className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-white shadow flex items-center justify-center border-2"
                        style={{ borderColor: app.color }}
                      >
                        <span className="text-sm md:text-base">{app.icon}</span>
                      </div>
                      <div className="flex items-center gap-0.5 bg-white/80 backdrop-blur-sm px-1 py-0.5 rounded-full shadow-sm">
                        <span className="text-[8px] md:text-[9px] font-semibold text-[#1a4b7c]">Zoho</span>
                        <span className="text-[8px] md:text-[9px] font-bold text-[#0B1C3D]">{app.name}</span>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}

              {/* Center - Zoho One Hub */}
              <motion.div
                className="relative z-20"
                animate={{ 
                  boxShadow: [
                    "0 0 30px 10px rgba(91, 163, 217, 0.2)",
                    "0 0 50px 15px rgba(91, 163, 217, 0.3)",
                    "0 0 30px 10px rgba(91, 163, 217, 0.2)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-white shadow-2xl flex flex-col items-center justify-center border-4 border-[#5BA3D9]/30">
                  {/* Zoho One 3D Cube Icon */}
                  <div className="relative w-10 h-10 md:w-12 md:h-12 mb-1">
                    {/* 3D Cube representation */}
                    <svg viewBox="0 0 48 48" className="w-full h-full">
                      {/* Back face - blue */}
                      <polygon points="24,4 44,16 44,36 24,24" fill="#1E88E5" opacity="0.9"/>
                      {/* Left face - red */}
                      <polygon points="4,16 24,4 24,24 4,36" fill="#E42527" opacity="0.9"/>
                      {/* Top face - green */}
                      <polygon points="4,16 24,4 44,16 24,28" fill="#00A651" opacity="0.9"/>
                      {/* Front bottom - yellow/orange */}
                      <polygon points="4,36 24,48 44,36 24,24" fill="#F7931E" opacity="0.9"/>
                    </svg>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-[#1a4b7c] text-xs md:text-sm font-semibold">Zoho</span>
                    <span className="text-[#0B1C3D] text-sm md:text-base font-bold">One</span>
                  </div>
                </div>
              </motion.div>

              {/* Connecting Lines (subtle) */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}>
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#5BA3D9" stopOpacity="0.1" />
                    <stop offset="50%" stopColor="#5BA3D9" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#5BA3D9" stopOpacity="0.1" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
