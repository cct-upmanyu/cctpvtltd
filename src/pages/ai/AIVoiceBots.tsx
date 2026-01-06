import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Phone, Mic, Volume2, Globe, Zap, Shield } from "lucide-react";

const voiceBotFeatures = [
  {
    icon: Phone,
    title: "Intelligent Call Handling",
    description: "AI voice bots that understand context and handle complex conversations."
  },
  {
    icon: Mic,
    title: "Natural Speech Recognition",
    description: "Advanced speech-to-text with accent and dialect understanding."
  },
  {
    icon: Volume2,
    title: "Human-Like Voice",
    description: "Natural text-to-speech with emotional intelligence and tone matching."
  },
  {
    icon: Globe,
    title: "Multi-Language Support",
    description: "Voice bots that communicate in multiple languages seamlessly."
  },
  {
    icon: Zap,
    title: "Real-Time Processing",
    description: "Sub-second response times for natural conversation flow."
  },
  {
    icon: Shield,
    title: "Secure Transactions",
    description: "PCI-compliant voice authentication and secure data handling."
  }
];

export default function AIVoiceBots() {
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
              AI Voice Bots
            </h1>
            <p className="text-lg lg:text-xl text-[#E5E7EB] mb-8">
              Deploy intelligent voice bots that handle calls, answer questions, and complete 
              transactions with human-like conversation.
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
              Voice Bot Capabilities
            </h2>
            <p className="text-lg text-[#374151]">
              Advanced voice AI for natural phone interactions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {voiceBotFeatures.map((feature, index) => {
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
              Ready to Deploy Voice AI?
            </h2>
            <p className="text-lg text-[#E5E7EB] mb-8">
              Let's discuss how AI voice bots can transform your phone operations.
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
