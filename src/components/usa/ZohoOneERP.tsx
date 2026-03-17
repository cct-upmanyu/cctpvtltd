import { motion } from "framer-motion";
import { Layers, BarChart3, Users, DollarSign, Settings, Briefcase, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const departments = [
  { icon: <BarChart3 className="w-6 h-6" />, name: "Sales & Marketing", apps: "CRM, Campaigns, SalesIQ, Marketing Automation" },
  { icon: <DollarSign className="w-6 h-6" />, name: "Finance & Accounting", apps: "Books, Invoice, Expense, Subscriptions" },
  { icon: <Users className="w-6 h-6" />, name: "HR & People Ops", apps: "People, Recruit, Payroll, Workerly" },
  { icon: <Settings className="w-6 h-6" />, name: "Operations & IT", apps: "Projects, Sprints, ServiceDesk Plus, Creator" },
  { icon: <Briefcase className="w-6 h-6" />, name: "Customer Success", apps: "Desk, SalesIQ, Survey, Backstage" },
  { icon: <Layers className="w-6 h-6" />, name: "Business Intelligence", apps: "Analytics, DataPrep, Zoho Sheets" },
];

export function ZohoOneERP() {
  return (
    <section className="py-20 relative overflow-hidden" style={{ background: "linear-gradient(180deg, #0B1C3D 0%, #0F2A5F 50%, #0B1C3D 100%)" }}>
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(rgba(63,224,240,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(63,224,240,0.5) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />
      <div className="container-custom relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-6" style={{ background: "rgba(63,224,240,0.08)", border: "1px solid rgba(63,224,240,0.2)" }}>
            <Layers className="w-4 h-4 text-[#3FE0F0]" />
            <span className="text-[#3FE0F0] text-sm font-semibold">Unified Zoho One ERP</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            The Single Source of Truth
          </h2>
          <p className="text-white/70 text-lg max-w-3xl mx-auto">
            Unify sales, finance, HR, and operations under one intelligent platform. Zoho One replaces 30+ fragmented tools with a single, AI-powered business OS.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {departments.map((dept, i) => (
            <motion.div
              key={dept.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-2xl p-5 group hover:bg-white/[0.06] transition-all"
              style={{ background: "rgba(15, 25, 50, 0.5)", border: "1px solid rgba(63, 224, 240, 0.08)", backdropFilter: "blur(8px)" }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-3 bg-[#3FE0F0]/10 text-[#3FE0F0]">
                {dept.icon}
              </div>
              <h3 className="text-white font-bold text-base mb-1.5">{dept.name}</h3>
              <p className="text-white/50 text-xs">{dept.apps}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="heroDark" size="xl" asChild>
            <Link to="/zoho-one-premium-partner">
              Explore Zoho One <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
