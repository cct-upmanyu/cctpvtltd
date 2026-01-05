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

const zohoApps = [
  { name: "Zoho CRM", color: "#E42527" },
  { name: "Zoho Creator", color: "#00A651" },
  { name: "Zoho Books", color: "#1E88E5" },
  { name: "Zoho People", color: "#F7931E" },
  { name: "Zoho Recruit", color: "#9C27B0" },
  { name: "Zoho Desk", color: "#00BCD4" },
  { name: "Zoho FSM", color: "#4CAF50" },
  { name: "Zoho Analytics", color: "#FF5722" },
  { name: "SalesIQ & Zia", color: "#3F51B5" },
  { name: "Zoho Catalyst", color: "#795548" },
  { name: "50+ More Apps", color: "#607D8B" },
];

export function ZohoEcosystemSection() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Split background - dark left, white right */}
      <div className="absolute inset-0 flex">
        <div className="w-full lg:w-1/2 bg-[#0B1C3D]" />
        <div className="hidden lg:block w-1/2 bg-white" />
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
            {/* DARK SECTION: Heading must be #FFFFFF */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#FFFFFF] mb-6">
              Complete Zoho
              <span className="text-gradient-primary block">Ecosystem Mastery</span>
            </h2>
            {/* DARK SECTION: Secondary text must be #E5E7EB */}
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
                    {/* DARK SECTION: Text must be #FFFFFF */}
                    <h4 className="font-semibold text-[#FFFFFF]">{suite.name}</h4>
                    {/* DARK SECTION: Secondary text must be #E5E7EB */}
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

          {/* Visual - Zoho Ecosystem Diagram on White Background */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative bg-white lg:bg-transparent rounded-2xl lg:rounded-none p-6 lg:p-0"
          >
            <div className="relative flex flex-col items-center">
              {/* Zoho One Central Hub with orbiting rings */}
              <div className="relative w-72 h-72 md:w-80 md:h-80">
                {/* Outer rotating ring */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-dashed border-[#0B1C3D]/20"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                />
                
                {/* Middle ring */}
                <motion.div
                  className="absolute inset-6 rounded-full border border-[#0B1C3D]/15"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                />
                
                {/* Inner ring */}
                <div className="absolute inset-12 rounded-full border border-[#0B1C3D]/10" />

                {/* Orbiting app icons */}
                {zohoApps.slice(0, 6).map((app, i) => {
                  const angle = (i * 60 - 90) * (Math.PI / 180);
                  const radius = 130;
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;

                  return (
                    <motion.div
                      key={app.name}
                      className="absolute left-1/2 top-1/2"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      style={{ transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))` }}
                    >
                      <motion.div
                        className="flex flex-col items-center gap-1"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 2 + i * 0.3, repeat: Infinity }}
                      >
                        <div 
                          className="w-10 h-10 rounded-lg shadow-md flex items-center justify-center text-white text-xs font-bold"
                          style={{ backgroundColor: app.color }}
                        >
                          {app.name.split(' ')[1]?.[0] || app.name[0]}
                        </div>
                        <span className="text-[10px] font-medium text-[#111827] whitespace-nowrap max-w-[60px] truncate">
                          {app.name.replace('Zoho ', '')}
                        </span>
                      </motion.div>
                    </motion.div>
                  );
                })}

                {/* Center - Zoho One with Logo */}
                <motion.div
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
                  animate={{ 
                    boxShadow: [
                      "0 0 40px -10px rgba(11, 28, 61, 0.3)",
                      "0 0 60px -10px rgba(11, 28, 61, 0.5)",
                      "0 0 40px -10px rgba(11, 28, 61, 0.3)"
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <div className="w-32 h-32 md:w-36 md:h-36 rounded-full bg-white border-4 border-[#0B1C3D]/10 shadow-xl flex flex-col items-center justify-center p-3">
                    {/* Zoho logo representation */}
                    <div className="flex gap-0.5 mb-1">
                      <div className="w-5 h-5 rounded-md border-[3px] border-[#E42527] rotate-[-8deg]" />
                      <div className="w-5 h-5 rounded-md border-[3px] border-[#00A651] rotate-[-8deg] -ml-1" />
                      <div className="w-5 h-5 rounded-md border-[3px] border-[#1E88E5] rotate-[-8deg] -ml-1" />
                      <div className="w-5 h-5 rounded-md border-[3px] border-[#F7931E] rotate-[-8deg] -ml-1" />
                    </div>
                    <span className="text-[#111827] font-bold text-lg tracking-widest">ZOHO</span>
                    <span className="text-[#3FE0F0] text-sm font-semibold">One</span>
                  </div>
                </motion.div>
              </div>

              {/* App tags below */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                className="mt-8 flex flex-wrap justify-center gap-2 max-w-md"
              >
                {zohoApps.map((app, index) => (
                  <motion.span
                    key={app.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.9 + index * 0.03 }}
                    className="px-3 py-1.5 bg-[#F5F7FB] border border-[#0B1C3D]/10 rounded-full text-xs text-[#374151] hover:border-[#0B1C3D]/30 hover:text-[#111827] hover:bg-white transition-all cursor-pointer flex items-center gap-1.5"
                  >
                    <span 
                      className="w-2 h-2 rounded-full" 
                      style={{ backgroundColor: app.color }}
                    />
                    {app.name}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
