import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Package, Users, Wallet, Truck, BarChart3, Brain, CheckCircle } from "lucide-react";

const modules = [
  { icon: Package, name: "Sales & Orders", description: "End-to-end sales process management" },
  { icon: Users, name: "HR & Payroll", description: "Complete workforce management" },
  { icon: Wallet, name: "Finance & Accounting", description: "Financial operations and reporting" },
  { icon: Truck, name: "Inventory & Logistics", description: "Stock and supply chain control" },
  { icon: BarChart3, name: "Analytics & Reports", description: "Real-time business intelligence" },
  { icon: Brain, name: "AI & Automation", description: "Intelligent process optimization" },
];

const benefits = [
  "100% customizable to your processes",
  "Built on Zoho Creator for scalability",
  "Integrated with your existing tools",
  "AI-powered insights and automation",
  "Mobile-ready for field teams",
  "Full ownership and control",
];

export default function CustomERP() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero - DARK SECTION */}
      <section className="bg-dark-gradient particles-bg pt-32 pb-20 relative overflow-hidden">
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-[#3FE0F0]/30 bg-[#3FE0F0]/5 text-[#3FE0F0] text-sm font-medium mb-6">
              Custom ERP Development
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#FFFFFF] mb-6">
              Custom ERP Systems
              <span className="text-gradient-primary block">Built for Your Business</span>
            </h1>
            <p className="text-[#E5E7EB] text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Modular, scalable ERP solutions built on Zoho Creator that perfectly match your unique business processes.
            </p>
            <Button variant="heroDark" size="lg">
              Discuss Your ERP Needs
              <ArrowRight className="w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Modules Grid - LIGHT SECTION */}
      <section className="bg-light-gradient section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">
              Modular ERP Architecture
            </h2>
            <p className="text-[#374151] text-lg max-w-2xl mx-auto">
              Choose the modules you need—scale as you grow
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((module, index) => {
              const Icon = module.icon;
              return (
                <motion.div
                  key={module.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group p-6 bg-white rounded-2xl border border-gray-200 hover:border-[#3FE0F0]/30 hover-lift transition-all"
                >
                  <div className="w-14 h-14 rounded-xl bg-[#3FE0F0]/10 flex items-center justify-center mb-4 group-hover:bg-[#3FE0F0] group-hover:scale-110 transition-all">
                    <Icon className="w-7 h-7 text-[#3FE0F0] group-hover:text-[#111827] transition-colors" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#111827] mb-2">{module.name}</h3>
                  <p className="text-[#374151]">{module.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Custom ERP - LIGHT SECTION */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-6">
                Why Custom ERP?
              </h2>
              <p className="text-[#374151] text-lg mb-6">
                Off-the-shelf ERPs force you to adapt your processes. Our custom solutions adapt to you.
              </p>
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-[#3FE0F0] flex-shrink-0" />
                    <span className="text-[#111827]">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                {modules.map((module, index) => {
                  const Icon = module.icon;
                  return (
                    <motion.div
                      key={module.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      className="p-4 bg-[#F5F7FB] rounded-xl border border-gray-200 flex items-center gap-3"
                    >
                      <Icon className="w-5 h-5 text-[#3FE0F0] flex-shrink-0" />
                      <span className="text-sm font-medium text-[#111827]">{module.name}</span>
                    </motion.div>
                  );
                })}
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                className="absolute -inset-4 border-2 border-dashed border-[#3FE0F0]/20 rounded-3xl -z-10"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA - DARK SECTION */}
      <section className="bg-dark-gradient section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#FFFFFF] mb-6">
              Ready to Build Your Custom ERP?
            </h2>
            <p className="text-[#E5E7EB] text-lg mb-8">
              Let's discuss your business processes and design the perfect ERP solution.
            </p>
            <Button variant="heroDark" size="xl">
              Schedule ERP Consultation
              <ArrowRight className="w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}