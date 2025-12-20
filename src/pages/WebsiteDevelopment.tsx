import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Zap, Database, Bot, Smartphone, TrendingUp, CheckCircle } from "lucide-react";

const services = [
  {
    title: "CRM-Connected Websites",
    description: "Every lead, form submission, and interaction automatically flows into your CRM for complete visibility.",
    icon: Database,
  },
  {
    title: "AI-Enabled Features",
    description: "Intelligent chatbots, personalized content, and smart recommendations that convert visitors.",
    icon: Bot,
  },
  {
    title: "Conversion Optimized",
    description: "Strategic UX design, A/B testing capabilities, and analytics integration for maximum ROI.",
    icon: TrendingUp,
  },
  {
    title: "Mobile-First Design",
    description: "Responsive designs that deliver exceptional experiences across all devices.",
    icon: Smartphone,
  },
];

const process = [
  { step: "Discovery", description: "Understanding your business goals and target audience" },
  { step: "Design", description: "Creating stunning, conversion-focused designs" },
  { step: "Development", description: "Building with modern technologies and CRM integration" },
  { step: "Launch", description: "Testing, optimization, and successful deployment" },
];

export default function WebsiteDevelopment() {
  return (
    <div className="min-h-screen bg-[#F5F7FB]">
      <Navbar />
      
      {/* Hero - LIGHT SECTION */}
      <section className="bg-light-gradient pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#3FE0F0]/10 rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-[#3FE0F0]/30 bg-[#3FE0F0]/10 text-[#3FE0F0] text-sm font-medium mb-6">
              Website Development
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#111827] mb-6">
              CRM-Connected,
              <span className="text-gradient-primary block">AI-Enabled Websites</span>
            </h1>
            <p className="text-[#374151] text-lg md:text-xl mb-8 max-w-2xl">
              More than just beautiful websites—we build digital experiences that connect to your CRM, leverage AI, and drive real business results.
            </p>
            <Button variant="heroLight" size="lg">
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Transformation Visual - DARK SECTION */}
      <section className="bg-[#0B1C3D] section-padding relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#3FE0F0]/5 rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#FFFFFF] mb-4">
              Website Transformation
            </h2>
            <p className="text-[#E5E7EB] text-lg">
              From static to intelligent business websites
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="grid md:grid-cols-3 gap-4 items-center">
              <div className="p-6 bg-[#0B1C3D]/80 border border-[#374151]/30 rounded-2xl text-center">
                <Globe className="w-12 h-12 mx-auto text-[#E5E7EB] mb-3" />
                <h3 className="font-semibold text-[#FFFFFF] mb-2">Static Website</h3>
                <p className="text-sm text-[#E5E7EB]">Basic brochure site</p>
              </div>
              
              <div className="flex justify-center">
                <motion.div
                  animate={{ x: [0, 10, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="text-[#3FE0F0]"
                >
                  <ArrowRight className="w-8 h-8 hidden md:block" />
                  <ArrowRight className="w-8 h-8 rotate-90 md:hidden" />
                </motion.div>
              </div>
              
              <div className="p-6 bg-[#3FE0F0]/10 border-2 border-[#3FE0F0]/30 rounded-2xl text-center">
                <Zap className="w-12 h-12 mx-auto text-[#3FE0F0] mb-3" />
                <h3 className="font-semibold text-[#FFFFFF] mb-2">AI Business Platform</h3>
                <p className="text-sm text-[#E5E7EB]">CRM + AI integrated</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services - LIGHT SECTION */}
      <section className="bg-light-gradient section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-6 p-6 bg-white rounded-2xl border border-gray-200 hover:border-[#3FE0F0]/30 transition-colors"
                >
                  <div className="w-14 h-14 rounded-xl bg-[#3FE0F0]/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-7 h-7 text-[#3FE0F0]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#111827] mb-2">{service.title}</h3>
                    <p className="text-[#374151]">{service.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process - DARK SECTION */}
      <section className="bg-[#0B1C3D] section-padding relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#4DA3FF]/5 rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#FFFFFF] mb-4">
              Our Development Process
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-[#0B1C3D]/80 rounded-2xl border border-[#3FE0F0]/20"
              >
                <span className="text-4xl font-bold text-[#3FE0F0]/30">{String(index + 1).padStart(2, '0')}</span>
                <h3 className="font-semibold text-[#FFFFFF] mt-2 mb-2">{item.step}</h3>
                <p className="text-sm text-[#E5E7EB]">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - LIGHT SECTION */}
      <section className="bg-light-gradient section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-6">
              Ready to Build Your Next Website?
            </h2>
            <p className="text-[#374151] text-lg mb-8">
              Let's create a website that not only looks great but drives real business results.
            </p>
            <Button variant="heroLight" size="xl">
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}