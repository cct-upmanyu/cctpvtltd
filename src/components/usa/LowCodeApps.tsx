import { motion } from "framer-motion";
import { Code, Puzzle, Smartphone, Zap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const capabilities = [
  { icon: <Code className="w-6 h-6" />, title: "Deluge Scripting", description: "Zoho's powerful scripting language for custom business logic, API integrations, and automated workflows." },
  { icon: <Puzzle className="w-6 h-6" />, title: "Bespoke Workflows", description: "Build approval chains, multi-step processes, and cross-app automations that off-the-shelf solutions can't match." },
  { icon: <Smartphone className="w-6 h-6" />, title: "Mobile-First Apps", description: "Deploy responsive business applications accessible on any device—from warehouse floors to boardrooms." },
  { icon: <Zap className="w-6 h-6" />, title: "Rapid Prototyping", description: "Go from concept to working application in weeks, not months. Iterate fast based on real user feedback." },
];

export function LowCodeApps() {
  return (
    <section className="py-20" style={{ background: "linear-gradient(180deg, #EBF4FF 0%, #F0F7FF 50%, #F8FAFC 100%)" }}>
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border border-[#4DA3FF]/20 bg-[#4DA3FF]/5">
              <Code className="w-4 h-4 text-[#4DA3FF]" />
              <span className="text-[#0B1C3D] text-sm font-semibold">Zoho Creator</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">
              Custom Low-Code Apps That Off-the-Shelf Can't Solve
            </h2>
            <p className="text-[#374151] text-lg mb-8 leading-relaxed">
              Every business has unique processes. We leverage Zoho Creator and Deluge scripting to build tailored applications that adapt to your workflow—not the other way around.
            </p>
            <Button variant="heroLight" size="lg" asChild>
              <Link to="/zoho-creator">
                Explore Custom Apps <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl p-5 bg-white border border-[#E2E8F0] hover:shadow-lg transition-all"
              >
                <div className="w-11 h-11 rounded-xl bg-[#4DA3FF]/10 text-[#4DA3FF] flex items-center justify-center mb-3">
                  {cap.icon}
                </div>
                <h3 className="text-sm font-bold text-[#111827] mb-1">{cap.title}</h3>
                <p className="text-[#374151] text-xs leading-relaxed">{cap.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
