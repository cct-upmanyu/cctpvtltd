import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    details: "info@clubcodetechnology.com",
    link: "mailto:info@clubcodetechnology.com",
  },
  {
    icon: Phone,
    title: "Call Us",
    details: "+91 98765 43210",
    link: "tel:+919876543210",
  },
  {
    icon: MapPin,
    title: "Global Offices",
    details: "India • UK • USA • UAE • Canada",
    link: "#",
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: "Mon - Fri: 9AM - 6PM IST",
    link: "#",
  },
];

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
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
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-[#3FE0F0]/30 bg-[#3FE0F0]/10 text-[#3FE0F0] text-sm font-medium mb-6">
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#111827] mb-6">
              Let's Start a
              <span className="text-gradient-primary block">Conversation</span>
            </h1>
            <p className="text-[#374151] text-lg md:text-xl max-w-2xl mx-auto">
              Ready to transform your business? Get in touch for a free consultation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section - LIGHT SECTION */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#F5F7FB] rounded-2xl p-8 border border-gray-200"
            >
              <h2 className="text-2xl font-bold text-[#111827] mb-6">
                Send Us a Message
              </h2>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#111827] mb-2">
                      First Name
                    </label>
                    <Input placeholder="John" className="bg-white border-gray-200" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#111827] mb-2">
                      Last Name
                    </label>
                    <Input placeholder="Doe" className="bg-white border-gray-200" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#111827] mb-2">
                    Email
                  </label>
                  <Input type="email" placeholder="john@company.com" className="bg-white border-gray-200" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#111827] mb-2">
                    Phone
                  </label>
                  <Input placeholder="+91 98765 43210" className="bg-white border-gray-200" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#111827] mb-2">
                    What are you interested in?
                  </label>
                  <select className="w-full h-10 px-3 rounded-lg border border-gray-200 bg-white text-[#111827]">
                    <option>Zoho Implementation</option>
                    <option>AI Solutions</option>
                    <option>CRM Solutions</option>
                    <option>Custom ERP</option>
                    <option>Website Development</option>
                    <option>Data Migration</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#111827] mb-2">
                    Message
                  </label>
                  <Textarea
                    placeholder="Tell us about your project or requirements..."
                    className="bg-white border-gray-200 min-h-[120px]"
                  />
                </div>
                <Button variant="heroLight" size="lg" className="w-full">
                  Send Message
                  <Send className="w-5 h-5" />
                </Button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-[#111827] mb-6">
                Get in Touch
              </h2>
              <p className="text-[#374151] mb-8">
                Have questions? Want to discuss a project? We'd love to hear from you. Reach out using any of the methods below.
              </p>

              <div className="space-y-6">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.a
                      key={item.title}
                      href={item.link}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-4 p-4 bg-[#F5F7FB] rounded-xl border border-gray-200 hover:border-[#3FE0F0]/30 transition-colors"
                    >
                      <div className="w-12 h-12 rounded-lg bg-[#3FE0F0]/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-[#3FE0F0]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#111827]">{item.title}</h3>
                        <p className="text-[#374151]">{item.details}</p>
                      </div>
                    </motion.a>
                  );
                })}
              </div>

              {/* Quick CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="mt-8 p-6 bg-[#3FE0F0]/5 rounded-2xl border border-[#3FE0F0]/20"
              >
                <h3 className="font-semibold text-[#111827] mb-2">
                  Prefer a Quick Call?
                </h3>
                <p className="text-[#374151] text-sm mb-4">
                  Schedule a free 30-minute consultation with our experts.
                </p>
                <Button variant="heroLight" size="sm">
                  Book a Call
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}