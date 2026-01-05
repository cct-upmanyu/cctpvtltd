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
  "Zoho CRM", "Zoho Creator", "Zoho Books", "Zoho People",
  "Zoho Recruit", "Zoho Desk", "Zoho FSM", "Zoho Analytics",
  "SalesIQ & Zia", "Zoho Catalyst", "50+ More Apps"
];

export function ZohoEcosystemSection() {
  return (
    <section className="bg-[#0B1C3D] section-padding relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#3FE0F0]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#8B5CF6]/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
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

          {/* Visual - Zoho Ecosystem Diagram */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative flex flex-col items-center">
              {/* Zoho One Central Hub with orbiting rings */}
              <div className="relative w-72 h-72 md:w-80 md:h-80">
                {/* Outer rotating ring */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-dashed border-[#3FE0F0]/30"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                />
                
                {/* Middle ring */}
                <motion.div
                  className="absolute inset-6 rounded-full border border-[#4DA3FF]/30"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                />
                
                {/* Inner ring */}
                <div className="absolute inset-12 rounded-full border border-[#3FE0F0]/20" />

                {/* Orbiting dots */}
                {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-3 h-3 rounded-full bg-[#3FE0F0]"
                    style={{
                      top: "50%",
                      left: "50%",
                      transformOrigin: "0 0",
                    }}
                    animate={{
                      rotate: [angle, angle + 360],
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <div 
                      className="w-3 h-3 rounded-full bg-[#3FE0F0] shadow-lg shadow-[#3FE0F0]/50"
                      style={{ transform: `translateX(${120 + i * 5}px) translateY(-6px)` }}
                    />
                  </motion.div>
                ))}

                {/* Center - Zoho One */}
                <motion.div
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
                  animate={{ 
                    boxShadow: [
                      "0 0 40px -10px rgba(63, 224, 240, 0.4)",
                      "0 0 80px -10px rgba(63, 224, 240, 0.6)",
                      "0 0 40px -10px rgba(63, 224, 240, 0.4)"
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <div className="w-36 h-36 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-[#3FE0F0] via-[#4DA3FF] to-[#3FE0F0] p-1 flex items-center justify-center">
                    <div className="w-full h-full rounded-full bg-[#0B1C3D] flex items-center justify-center">
                      <div className="text-center">
                        <span className="text-[#FFFFFF] font-bold text-2xl block">Zoho</span>
                        <span className="text-[#3FE0F0] text-lg font-medium">One</span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Suite icons positioned around the circle */}
                {zohoSuites.map((suite, index) => {
                  const angle = (index * 60 - 90) * (Math.PI / 180);
                  const radius = 110;
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;

                  return (
                    <motion.div
                      key={suite.name}
                      className="absolute left-1/2 top-1/2"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      style={{ transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))` }}
                    >
                      <motion.div
                        className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0F2A5F] to-[#1A365D] border border-[#3FE0F0]/30 flex items-center justify-center shadow-lg cursor-pointer"
                        animate={{ y: [0, -3, 0] }}
                        transition={{ duration: 2 + index * 0.3, repeat: Infinity }}
                        whileHover={{ scale: 1.2, borderColor: "rgba(63, 224, 240, 0.8)" }}
                      >
                        <CheckCircle className="w-5 h-5 text-[#3FE0F0]" />
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>

              {/* App tags */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                className="mt-8 flex flex-wrap justify-center gap-2 max-w-md"
              >
                {zohoApps.map((app, index) => (
                  <motion.span
                    key={app}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.9 + index * 0.03 }}
                    className="px-3 py-1.5 bg-[#0F2A5F] border border-[#3FE0F0]/20 rounded-full text-xs text-[#E5E7EB] hover:border-[#3FE0F0]/50 hover:text-[#FFFFFF] hover:bg-[#3FE0F0]/10 transition-all cursor-pointer"
                  >
                    {app}
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