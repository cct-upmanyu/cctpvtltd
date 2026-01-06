import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, Target, Users, Mail, Phone, BarChart3 } from "lucide-react";

const salesAIFeatures = [
  {
    icon: Target,
    title: "Lead Scoring",
    description: "AI-powered lead scoring that predicts conversion probability and prioritizes high-value prospects."
  },
  {
    icon: Mail,
    title: "Email Automation",
    description: "Intelligent email sequences with optimal send times and personalized content."
  },
  {
    icon: Phone,
    title: "Call Intelligence",
    description: "AI analysis of sales calls for insights, coaching, and opportunity detection."
  },
  {
    icon: Users,
    title: "Pipeline Prediction",
    description: "Accurate sales forecasting with AI-driven deal probability and timeline predictions."
  },
  {
    icon: TrendingUp,
    title: "Revenue Intelligence",
    description: "Real-time visibility into revenue trends, risks, and growth opportunities."
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    description: "AI-powered insights into team performance and coaching recommendations."
  }
];

export default function AISalesAutomation() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-dark-gradient section-padding pt-32 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#3FE0F0]/10 rounded-full blur-3xl animate-pulse-slow" />
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-2 bg-[#3FE0F0]/10 text-[#3FE0F0] text-sm font-bold rounded-full mb-6">
              AI Solutions
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#FFFFFF] leading-tight mb-6">
              AI Sales Automation
            </h1>
            <p className="text-lg lg:text-xl text-[#E5E7EB] mb-8">
              Supercharge your sales team with AI that automates prospecting, predicts outcomes, 
              and accelerates deal closure.
            </p>
            <Button variant="heroDark" size="lg" asChild>
              <Link to="/contact">
                Book Free Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-light-gradient section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">
              AI Sales Capabilities
            </h2>
            <p className="text-lg text-[#374151]">
              Intelligent automation for every stage of your sales process.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {salesAIFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow"
                >
                  <div className="w-14 h-14 rounded-xl bg-[#3FE0F0]/10 flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-[#00A0B0]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#111827] mb-3">{feature.title}</h3>
                  <p className="text-[#374151]">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark-gradient section-padding">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#FFFFFF] mb-6">
              Ready to Automate Your Sales?
            </h2>
            <p className="text-lg text-[#E5E7EB] mb-8">
              Discover how AI can accelerate your sales performance.
            </p>
            <Button variant="heroDark" size="lg" asChild>
              <Link to="/contact">
                Book Free Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
