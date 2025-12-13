import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Users, Globe, Target, CheckCircle } from "lucide-react";

const milestones = [
  { year: "2012", title: "Founded", description: "Started as Club Code Technology with a vision to transform businesses" },
  { year: "2015", title: "Zoho Partner", description: "Became an official Zoho Partner" },
  { year: "2018", title: "Premium Partner", description: "Elevated to Zoho Premium Partner status" },
  { year: "2020", title: "AI Integration", description: "Launched AI-powered business solutions" },
  { year: "2022", title: "Creator Champions", description: "Recognized as Zoho Creator Champions" },
  { year: "2024", title: "Global Expansion", description: "Operating across 5+ countries globally" },
];

const values = [
  { icon: Target, title: "Customer Success", description: "Your success is our success. We measure our achievements through your growth." },
  { icon: Award, title: "Excellence", description: "We strive for excellence in every implementation, every integration, every solution." },
  { icon: Users, title: "Partnership", description: "We work as an extension of your team, understanding your vision and goals." },
  { icon: Globe, title: "Innovation", description: "Continuously exploring new technologies to deliver cutting-edge solutions." },
];

export default function Company() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="bg-dark-gradient particles-bg pt-32 pb-20 relative overflow-hidden">
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium mb-6">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              ClubCode Technology
              <span className="text-gradient-primary block">Private Limited</span>
            </h1>
            <p className="text-muted-dark-foreground text-lg md:text-xl mb-8 max-w-2xl">
              Global Zoho Premium Partner & AI Automation Experts with 12+ years of experience transforming businesses worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-light-gradient section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Mission
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                We empower businesses to scale intelligently by implementing world-class Zoho, AI, and automation solutions that transform operations and accelerate growth.
              </p>
              <p className="text-muted-foreground text-lg">
                Previously known as Club Code Technology, we've evolved into a global technology partner trusted by enterprises across UK, USA, Canada, Australia, UAE, and India.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { value: "800+", label: "Projects Delivered" },
                { value: "12+", label: "Years Experience" },
                { value: "5+", label: "Global Offices" },
                { value: "50+", label: "Team Members" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 bg-card rounded-xl border border-border text-center"
                >
                  <span className="text-3xl font-bold text-primary">{stat.value}</span>
                  <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-card section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Values
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-6 bg-background rounded-2xl border border-border"
                >
                  <div className="w-14 h-14 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-light-gradient section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Journey
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-6 mb-8"
              >
                <div className="w-20 flex-shrink-0 text-right">
                  <span className="text-2xl font-bold text-primary">{milestone.year}</span>
                </div>
                <div className="relative flex-1 pb-8 border-l-2 border-border pl-6">
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary" />
                  <h3 className="font-semibold text-foreground mb-1">{milestone.title}</h3>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark-gradient section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Want to Join Our Team?
            </h2>
            <p className="text-muted-dark-foreground text-lg mb-8">
              We're always looking for talented individuals who share our passion for technology and innovation.
            </p>
            <Button variant="heroDark" size="xl">
              View Open Positions
              <ArrowRight className="w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}