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

// SVG Icon components matching Zoho's official icon style
const ZohoIcons = {
  CRM: ({ color }: { color: string }) => (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" stroke={color} strokeWidth="1.5" fill="none"/>
      <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z" stroke={color} strokeWidth="1.5" fill="none"/>
    </svg>
  ),
  Books: ({ color }: { color: string }) => (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <path d="M4 19V5c0-1.1.9-2 2-2h12c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2z" stroke={color} strokeWidth="1.5" fill="none"/>
      <path d="M8 7h8M8 11h8M8 15h5" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  People: ({ color }: { color: string }) => (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <circle cx="12" cy="7" r="4" stroke={color} strokeWidth="1.5" fill="none"/>
      <path d="M5.5 21c0-3.5 3-6 6.5-6s6.5 2.5 6.5 6" stroke={color} strokeWidth="1.5" strokeLinecap="round" fill="none"/>
    </svg>
  ),
  Recruit: ({ color }: { color: string }) => (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <circle cx="9" cy="7" r="3" stroke={color} strokeWidth="1.5" fill="none"/>
      <circle cx="15" cy="7" r="3" stroke={color} strokeWidth="1.5" fill="none"/>
      <path d="M3 19c0-3 2.5-5 6-5s6 2 6 5" stroke={color} strokeWidth="1.5" strokeLinecap="round" fill="none"/>
      <path d="M15 14c2 0 4 1.5 4 4" stroke={color} strokeWidth="1.5" strokeLinecap="round" fill="none"/>
    </svg>
  ),
  Inventory: ({ color }: { color: string }) => (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <path d="M20 7l-8-4-8 4v10l8 4 8-4V7z" stroke={color} strokeWidth="1.5" fill="none"/>
      <path d="M12 11V21M12 11L4 7M12 11L20 7" stroke={color} strokeWidth="1.5"/>
    </svg>
  ),
  Social: ({ color }: { color: string }) => (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" stroke={color} strokeWidth="1.5" fill="none"/>
    </svg>
  ),
  Survey: ({ color }: { color: string }) => (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <path d="M9 11l3 3 8-8" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M20 12v6a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h9" stroke={color} strokeWidth="1.5" fill="none"/>
    </svg>
  ),
  Expense: ({ color }: { color: string }) => (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <rect x="2" y="5" width="20" height="14" rx="2" stroke={color} strokeWidth="1.5" fill="none"/>
      <path d="M12 9v6M9 12h6" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  Bookings: ({ color }: { color: string }) => (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <rect x="3" y="4" width="18" height="18" rx="2" stroke={color} strokeWidth="1.5" fill="none"/>
      <path d="M16 2v4M8 2v4M3 10h18" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="12" cy="15" r="2" fill={color}/>
    </svg>
  ),
  Campaigns: ({ color }: { color: string }) => (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke={color} strokeWidth="1.5" fill="none"/>
      <path d="M22 6l-10 7L2 6" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  SalesIQ: ({ color }: { color: string }) => (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke={color} strokeWidth="1.5" fill="none"/>
      <path d="M8 10h8M8 14h4" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  Flow: ({ color }: { color: string }) => (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke={color} strokeWidth="1.5" fill="none" strokeLinejoin="round"/>
    </svg>
  ),
  Creator: ({ color }: { color: string }) => (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <path d="M12 3l1.5 4.5H18l-3.6 2.7 1.4 4.3L12 12l-3.8 2.5 1.4-4.3L6 7.5h4.5L12 3z" stroke={color} strokeWidth="1.5" fill="none" strokeLinejoin="round"/>
      <circle cx="12" cy="12" r="9" stroke={color} strokeWidth="1.5" fill="none"/>
    </svg>
  ),
  Payroll: ({ color }: { color: string }) => (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="1.5" fill="none"/>
      <path d="M12 6v12M9 9c0-1.5 1.5-2 3-2s3 .5 3 2-1 2-3 2-3 .5-3 2 1.5 2 3 2 3-.5 3-2" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  Workplace: ({ color }: { color: string }) => (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <rect x="3" y="3" width="18" height="18" rx="2" stroke={color} strokeWidth="1.5" fill="none"/>
      <path d="M3 9h18M9 21V9" stroke={color} strokeWidth="1.5"/>
    </svg>
  ),
  Voice: ({ color }: { color: string }) => (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" stroke={color} strokeWidth="1.5" fill="none"/>
    </svg>
  ),
  Sites: ({ color }: { color: string }) => (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="1.5" fill="none"/>
      <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" stroke={color} strokeWidth="1.5" fill="none"/>
    </svg>
  ),
  Zia: ({ color }: { color: string }) => (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="1.5" fill="none"/>
      <circle cx="12" cy="12" r="3" fill={color}/>
      <path d="M12 2v4M12 18v4M2 12h4M18 12h4" stroke={color} strokeWidth="1.5"/>
    </svg>
  ),
};

// Zoho apps organized by orbit with their official colors
const innerOrbitApps = [
  { name: "CRM", icon: "CRM", color: "#E42527" },
  { name: "Books", icon: "Books", color: "#1877F2" },
  { name: "Inventory", icon: "Inventory", color: "#00A651" },
  { name: "Social", icon: "Social", color: "#F7931E" },
  { name: "Survey", icon: "Survey", color: "#9C27B0" },
  { name: "Expense", icon: "Expense", color: "#00BCD4" },
];

const middleOrbitApps = [
  { name: "Bookings", icon: "Bookings", color: "#00838F" },
  { name: "Campaigns", icon: "Campaigns", color: "#7B1FA2" },
  { name: "SalesIQ", icon: "SalesIQ", color: "#00A651" },
  { name: "Flow", icon: "Flow", color: "#FF5722" },
  { name: "Creator", icon: "Creator", color: "#43A047" },
  { name: "Payroll", icon: "Payroll", color: "#1E88E5" },
];

const outerOrbitApps = [
  { name: "Recruit", icon: "Recruit", color: "#6A1B9A" },
  { name: "Workplace", icon: "Workplace", color: "#00ACC1" },
  { name: "People", icon: "People", color: "#F57C00" },
  { name: "Voice", icon: "Voice", color: "#43A047" },
  { name: "Sites", icon: "Sites", color: "#1E88E5" },
  { name: "Zia", icon: "Zia", color: "#E53935" },
];

const renderIcon = (iconName: string, color: string) => {
  const IconComponent = ZohoIcons[iconName as keyof typeof ZohoIcons];
  if (IconComponent) {
    return <IconComponent color={color} />;
  }
  return null;
};

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
            <div className="relative flex items-center justify-center min-h-[420px] md:min-h-[500px]">
              {/* Concentric Orbit Rings */}
              
              {/* Outer Ring */}
              <motion.div 
                className="absolute w-[360px] h-[360px] md:w-[420px] md:h-[420px] rounded-full border-2 border-[#5BA3D9]/40"
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Middle Ring */}
              <motion.div 
                className="absolute w-[260px] h-[260px] md:w-[300px] md:h-[300px] rounded-full border-2 border-[#5BA3D9]/50"
                animate={{ rotate: -360 }}
                transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Inner Ring */}
              <motion.div 
                className="absolute w-[160px] h-[160px] md:w-[180px] md:h-[180px] rounded-full border-2 border-[#5BA3D9]/60"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />

              {/* Outer Orbit Apps */}
              {outerOrbitApps.map((app, i) => {
                const angle = (i * 60 - 90) * (Math.PI / 180);
                const radius = 180;
                const mdRadius = 210;

                return (
                  <motion.div
                    key={app.name}
                    className="absolute"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    style={{ 
                      left: '50%',
                      top: '50%',
                      transform: `translate(-50%, -50%) translate(${Math.cos(angle) * radius}px, ${Math.sin(angle) * radius}px)`,
                    }}
                  >
                    <motion.div
                      className="flex flex-col items-center gap-1"
                      whileHover={{ scale: 1.15 }}
                      animate={{ y: [0, -4, 0] }}
                      transition={{ duration: 3, repeat: Infinity, delay: i * 0.3 }}
                    >
                      <div 
                        className="w-11 h-11 md:w-12 md:h-12 rounded-full bg-white shadow-lg flex items-center justify-center p-2.5"
                        style={{ border: `2px solid ${app.color}` }}
                      >
                        {renderIcon(app.icon, app.color)}
                      </div>
                      <div className="flex items-center gap-1 bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded-full shadow-sm">
                        <span className="text-[10px] font-medium text-[#5BA3D9]">Zoho</span>
                        <span className="text-[10px] font-bold text-[#0B1C3D]">{app.name}</span>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}

              {/* Middle Orbit Apps */}
              {middleOrbitApps.map((app, i) => {
                const angle = (i * 60 - 60) * (Math.PI / 180);
                const radius = 130;

                return (
                  <motion.div
                    key={app.name}
                    className="absolute"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    style={{ 
                      left: '50%',
                      top: '50%',
                      transform: `translate(-50%, -50%) translate(${Math.cos(angle) * radius}px, ${Math.sin(angle) * radius}px)`,
                    }}
                  >
                    <motion.div
                      className="flex flex-col items-center gap-1"
                      animate={{ y: [0, -3, 0] }}
                      transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.2 }}
                      whileHover={{ scale: 1.15 }}
                    >
                      <div 
                        className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white shadow-md flex items-center justify-center p-2"
                        style={{ border: `2px solid ${app.color}` }}
                      >
                        {renderIcon(app.icon, app.color)}
                      </div>
                      <div className="flex items-center gap-0.5 bg-white/90 backdrop-blur-sm px-1.5 py-0.5 rounded-full shadow-sm">
                        <span className="text-[9px] font-medium text-[#5BA3D9]">Zoho</span>
                        <span className="text-[9px] font-bold text-[#0B1C3D]">{app.name}</span>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}

              {/* Inner Orbit Apps */}
              {innerOrbitApps.map((app, i) => {
                const angle = (i * 60 - 30) * (Math.PI / 180);
                const radius = 80;

                return (
                  <motion.div
                    key={app.name}
                    className="absolute"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    style={{ 
                      left: '50%',
                      top: '50%',
                      transform: `translate(-50%, -50%) translate(${Math.cos(angle) * radius}px, ${Math.sin(angle) * radius}px)`,
                    }}
                  >
                    <motion.div
                      className="flex flex-col items-center gap-0.5"
                      animate={{ y: [0, -2, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.15 }}
                      whileHover={{ scale: 1.15 }}
                    >
                      <div 
                        className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-white shadow flex items-center justify-center p-1.5"
                        style={{ border: `2px solid ${app.color}` }}
                      >
                        {renderIcon(app.icon, app.color)}
                      </div>
                      <div className="flex items-center gap-0.5 bg-white/90 backdrop-blur-sm px-1 py-0.5 rounded-full shadow-sm">
                        <span className="text-[8px] font-medium text-[#5BA3D9]">Zoho</span>
                        <span className="text-[8px] font-bold text-[#0B1C3D]">{app.name}</span>
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
                    "0 0 50px 15px rgba(91, 163, 217, 0.35)",
                    "0 0 30px 10px rgba(91, 163, 217, 0.2)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                style={{ borderRadius: '50%' }}
              >
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white shadow-2xl flex flex-col items-center justify-center border-4 border-[#5BA3D9]/30">
                  {/* Zoho One 3D Cube Icon */}
                  <div className="relative w-8 h-8 md:w-10 md:h-10 mb-0.5">
                    <svg viewBox="0 0 48 48" className="w-full h-full">
                      {/* 3D Cube representation matching Zoho One branding */}
                      <polygon points="24,4 44,14 44,34 24,44 4,34 4,14" fill="none" stroke="#5BA3D9" strokeWidth="1"/>
                      <polygon points="24,4 44,14 24,24 4,14" fill="#F7931E"/>
                      <polygon points="4,14 24,24 24,44 4,34" fill="#E42527"/>
                      <polygon points="44,14 24,24 24,44 44,34" fill="#1E88E5"/>
                      <polygon points="24,24 44,14 24,4 4,14" fill="#00A651" opacity="0.9"/>
                    </svg>
                  </div>
                  <div className="flex items-center gap-0.5">
                    <span className="text-[#5BA3D9] text-[10px] md:text-xs font-medium">Zoho</span>
                    <span className="text-[#0B1C3D] text-xs md:text-sm font-bold">One</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
