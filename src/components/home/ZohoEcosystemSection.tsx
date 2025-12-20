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
    <section className="bg-white section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#3FE0F0]/10 text-[#3FE0F0] text-sm font-medium mb-4">
              Zoho Premium Partner
            </span>
            {/* LIGHT SECTION: Heading must be #111827 */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#111827] mb-6">
              Complete Zoho
              <span className="text-gradient-primary block">Ecosystem Mastery</span>
            </h2>
            {/* LIGHT SECTION: Secondary text must be #374151 */}
            <p className="text-[#374151] text-lg mb-8">
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
                  className="flex items-start gap-3 p-4 bg-[#F5F7FB] rounded-xl border border-gray-200"
                >
                  <CheckCircle className="w-5 h-5 text-[#3FE0F0] flex-shrink-0 mt-0.5" />
                  <div>
                    {/* LIGHT SECTION: Text must be #111827 */}
                    <h4 className="font-semibold text-[#111827]">{suite.name}</h4>
                    {/* LIGHT SECTION: Secondary text must be #374151 */}
                    <p className="text-sm text-[#374151]">{suite.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Button variant="heroLight" size="lg" asChild>
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
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Center - Zoho One */}
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
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#3FE0F0] to-[#4DA3FF] flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-[#111827] font-bold text-xl block">Zoho</span>
                    <span className="text-[#111827]/80 text-sm">One</span>
                  </div>
                </div>
              </motion.div>

              {/* Orbiting suites */}
              {zohoSuites.map((suite, index) => {
                const angle = (index * 60) * (Math.PI / 180);
                const radius = 130;
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
                      className="w-20 h-20 rounded-xl bg-white border border-gray-200 flex items-center justify-center shadow-lg"
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 3, repeat: Infinity, delay: index * 0.2 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {/* LIGHT SECTION: Text must be #111827 */}
                      <span className="text-xs font-medium text-[#111827] text-center px-2">
                        {suite.name}
                      </span>
                    </motion.div>
                  </motion.div>
                );
              })}

              {/* Connection lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                {zohoSuites.map((_, index) => {
                  const angle = (index * 60) * (Math.PI / 180);
                  const radius = 130;
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
                      strokeWidth="1"
                      strokeDasharray="4 4"
                      initial={{ pathLength: 0, opacity: 0 }}
                      whileInView={{ pathLength: 1, opacity: 0.3 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                    />
                  );
                })}
              </svg>
            </div>

            {/* App tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="mt-8 flex flex-wrap justify-center gap-2"
            >
              {zohoApps.map((app) => (
                <span
                  key={app}
                  className="px-3 py-1.5 bg-[#F5F7FB] border border-gray-200 rounded-full text-xs text-[#374151] hover:border-[#3FE0F0]/50 hover:text-[#111827] transition-colors cursor-pointer"
                >
                  {app}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}