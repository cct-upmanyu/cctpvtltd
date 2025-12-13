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
      
      {/* Hero */}
      <section className="bg-dark-gradient particles-bg pt-32 pb-20 relative overflow-hidden">
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium mb-6">
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Let's Start a
              <span className="text-gradient-primary block">Conversation</span>
            </h1>
            <p className="text-muted-dark-foreground text-lg md:text-xl max-w-2xl mx-auto">
              Ready to transform your business? Get in touch for a free consultation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-light-gradient section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-8 border border-border"
            >
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Send Us a Message
              </h2>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      First Name
                    </label>
                    <Input placeholder="John" className="bg-background" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Last Name
                    </label>
                    <Input placeholder="Doe" className="bg-background" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input type="email" placeholder="john@company.com" className="bg-background" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone
                  </label>
                  <Input placeholder="+91 98765 43210" className="bg-background" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    What are you interested in?
                  </label>
                  <select className="w-full h-10 px-3 rounded-lg border border-border bg-background text-foreground">
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
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    placeholder="Tell us about your project or requirements..."
                    className="bg-background min-h-[120px]"
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
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Get in Touch
              </h2>
              <p className="text-muted-foreground mb-8">
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
                      className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border hover:border-primary/30 transition-colors"
                    >
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{item.title}</h3>
                        <p className="text-muted-foreground">{item.details}</p>
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
                className="mt-8 p-6 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl border border-primary/20"
              >
                <h3 className="font-semibold text-foreground mb-2">
                  Prefer a Quick Call?
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
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