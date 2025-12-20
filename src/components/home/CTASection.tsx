import { motion } from "framer-motion";
import { ArrowRight, Calendar, MessageCircle, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="bg-light-gradient section-padding relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#3FE0F0]/10 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#8B5CF6]/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#3FE0F0]/30 bg-[#3FE0F0]/10 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[#3FE0F0] animate-pulse" />
            <span className="text-[#3FE0F0] text-sm font-medium">Start Your Transformation Today</span>
          </motion.div>

          {/* LIGHT SECTION: Heading must be #111827 */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#111827] mb-6">
            Let's Build the Future
            <span className="text-gradient-primary block mt-2">of Your Business</span>
          </h2>

          {/* LIGHT SECTION: Secondary text must be #374151 */}
          <p className="text-[#374151] text-lg md:text-xl max-w-2xl mx-auto mb-12">
            Ready to transform your operations with intelligent automation? Let's discuss how Zoho, AI, and custom solutions can accelerate your growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button variant="heroLight" size="xl">
              <Calendar className="w-5 h-5" />
              Book a Free Consultation
            </Button>
            <Button variant="heroSecondary" size="lg">
              <MessageCircle className="w-5 h-5" />
              Talk to a Zoho Expert
            </Button>
            <Button variant="heroLight" size="lg">
              <Lightbulb className="w-5 h-5" />
              Build an AI Strategy
            </Button>
          </div>

          {/* Quick value props - LIGHT SECTION: text must be #374151 */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto"
          >
            {[
              { text: "Free 30-min Consultation", icon: "🎯" },
              { text: "No Obligation Assessment", icon: "✓" },
              { text: "Expert Recommendations", icon: "💡" },
            ].map((item) => (
              <div
                key={item.text}
                className="flex items-center justify-center gap-2 text-[#374151]"
              >
                <span>{item.icon}</span>
                <span className="text-sm">{item.text}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}