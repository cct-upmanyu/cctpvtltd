import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, Users, Clock, Award, Building2, ShoppingCart, GraduationCap, Truck, Heart, Home, Utensils, Monitor, HandHeart } from "lucide-react";
import { Helmet } from "react-helmet-async";
import clientLogosRow1 from "@/assets/client-logos-row1.png";
import clientLogosRow2 from "@/assets/client-logos-row2.png";

const caseStudies = [
  {
    id: 1,
    title: "Manufacturing Excellence with Zoho One",
    client: "Global Manufacturing Corp",
    industry: "Manufacturing",
    icon: Building2,
    challenge: "Manual processes causing delays and inventory mismanagement across 5 production facilities.",
    solution: "Implemented Zoho One with custom inventory management, automated workflows, and real-time production tracking.",
    results: [
      { metric: "40%", label: "Reduction in operational costs" },
      { metric: "60%", label: "Faster order processing" },
      { metric: "99.5%", label: "Inventory accuracy" }
    ],
    testimonial: "CCT transformed our entire manufacturing operation. The ROI was visible within 3 months.",
    author: "Operations Director"
  },
  {
    id: 2,
    title: "Retail Chain Digital Transformation",
    client: "Multi-Brand Retail Group",
    industry: "Retail",
    icon: ShoppingCart,
    challenge: "Disconnected POS systems, poor inventory visibility, and fragmented customer data across 50+ stores.",
    solution: "Unified commerce platform using Zoho Inventory, Books, and CRM with custom integrations.",
    results: [
      { metric: "35%", label: "Increase in sales" },
      { metric: "50%", label: "Reduction in stockouts" },
      { metric: "3x", label: "Customer retention improvement" }
    ],
    testimonial: "The unified system gave us complete visibility across all stores. Game changer for our business.",
    author: "CEO"
  },
  {
    id: 3,
    title: "EdTech Platform Scaling Success",
    client: "Leading Education Provider",
    industry: "Education",
    icon: GraduationCap,
    challenge: "Unable to handle 10x student growth, manual enrollment processes, and poor student engagement tracking.",
    solution: "Custom Zoho Creator application with automated enrollment, LMS integration, and student analytics.",
    results: [
      { metric: "500%", label: "Student capacity increase" },
      { metric: "80%", label: "Reduction in enrollment time" },
      { metric: "45%", label: "Improvement in student retention" }
    ],
    testimonial: "CCT built exactly what we needed. We went from 2,000 to 12,000 students seamlessly.",
    author: "Founder & CEO"
  },
  {
    id: 4,
    title: "Logistics Fleet Optimization",
    client: "National Logistics Company",
    industry: "Logistics",
    icon: Truck,
    challenge: "Inefficient route planning, fuel wastage, and lack of real-time tracking across 200+ vehicles.",
    solution: "Custom fleet management solution with GPS integration, route optimization, and automated dispatch.",
    results: [
      { metric: "25%", label: "Fuel cost reduction" },
      { metric: "40%", label: "More deliveries per day" },
      { metric: "98%", label: "On-time delivery rate" }
    ],
    testimonial: "The fleet optimization alone paid for the entire implementation in 6 months.",
    author: "Logistics Manager"
  },
  {
    id: 5,
    title: "Healthcare Practice Automation",
    client: "Multi-Specialty Hospital Group",
    industry: "Healthcare",
    icon: Heart,
    challenge: "Paper-based patient records, scheduling conflicts, and billing delays affecting patient experience.",
    solution: "HIPAA-compliant Zoho solution with patient portal, automated scheduling, and integrated billing.",
    results: [
      { metric: "70%", label: "Reduction in admin work" },
      { metric: "50%", label: "Faster billing cycles" },
      { metric: "4.8/5", label: "Patient satisfaction score" }
    ],
    testimonial: "Our staff can now focus on patient care instead of paperwork. Patients love the new system.",
    author: "Hospital Administrator"
  },
  {
    id: 6,
    title: "Real Estate CRM Revolution",
    client: "Premium Property Developers",
    industry: "Real Estate",
    icon: Home,
    challenge: "Lost leads, poor follow-up processes, and no visibility into sales pipeline across projects.",
    solution: "Zoho CRM with custom property management module, automated lead nurturing, and broker portal.",
    results: [
      { metric: "65%", label: "Increase in lead conversion" },
      { metric: "3x", label: "Sales team productivity" },
      { metric: "₹50Cr+", label: "Additional revenue generated" }
    ],
    testimonial: "CCT understood real estate. The custom solution fits our unique sales process perfectly.",
    author: "Sales Director"
  },
  {
    id: 7,
    title: "Hospitality Chain Integration",
    client: "Boutique Hotel Group",
    industry: "Hospitality",
    icon: Utensils,
    challenge: "Disconnected booking systems, poor guest experience tracking, and revenue leakage across properties.",
    solution: "Integrated hospitality solution with Zoho CRM, Books, and custom booking management.",
    results: [
      { metric: "45%", label: "Increase in direct bookings" },
      { metric: "30%", label: "Revenue per room increase" },
      { metric: "92%", label: "Guest satisfaction rate" }
    ],
    testimonial: "Finally, a unified view of our guests across all properties. Personalization is now possible.",
    author: "General Manager"
  },
  {
    id: 8,
    title: "IT Services Company Scaling",
    client: "Enterprise IT Solutions",
    industry: "IT & Technology",
    icon: Monitor,
    challenge: "Project delays, resource conflicts, and poor client communication affecting growth.",
    solution: "Zoho Projects, CRM, and custom resource management with client portal integration.",
    results: [
      { metric: "50%", label: "Reduction in project delays" },
      { metric: "40%", label: "Improved resource utilization" },
      { metric: "200%", label: "Client base growth" }
    ],
    testimonial: "We scaled from 50 to 200 clients without adding operational overhead. CCT made it possible.",
    author: "CTO"
  },
  {
    id: 9,
    title: "Nonprofit Donor Management",
    client: "International NGO",
    industry: "Nonprofit",
    icon: HandHeart,
    challenge: "Poor donor tracking, manual grant management, and lack of impact reporting.",
    solution: "Zoho CRM for nonprofits with custom donor portal, grant tracking, and impact dashboards.",
    results: [
      { metric: "80%", label: "Increase in donor retention" },
      { metric: "3x", label: "Grant application efficiency" },
      { metric: "$2M+", label: "Additional funding secured" }
    ],
    testimonial: "CCT helped us focus on our mission by automating the backend. Donor engagement is at an all-time high.",
    author: "Executive Director"
  }
];

const stats = [
  { value: "500+", label: "Projects Delivered", icon: Award },
  { value: "40+", label: "Countries Served", icon: Users },
  { value: "12+", label: "Years Experience", icon: Clock },
  { value: "95%", label: "Client Retention", icon: TrendingUp }
];

export default function CaseStudies() {
  return (
    <>
      <Helmet>
        <title>Case Studies | CCT - ClubCode Technology Success Stories</title>
        <meta name="description" content="Explore real client success stories and case studies from ClubCode Technology. See how we've helped businesses transform with Zoho and AI solutions." />
        <link rel="canonical" href="https://clubcodetechnology.com/case-studies" />
      </Helmet>
      
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section - Light Clean Theme */}
        <section className="relative py-20 md:py-28 bg-[hsl(0,0%,96%)] overflow-hidden">
          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-4xl mx-auto"
            >
              <span className="inline-block px-5 py-2 border-2 border-primary text-primary rounded-full text-sm font-medium mb-8">
                Success Stories
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                How ClubCode Technology
                <span className="block mt-2">
                  <span className="bg-gradient-to-r from-[hsl(210,90%,55%)] via-[hsl(190,85%,50%)] via-[hsl(330,80%,65%)] via-[hsl(290,70%,55%)] to-[hsl(270,70%,60%)] bg-clip-text text-transparent">
                    Transforms Your Business
                  </span>
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                ClubCode Technology delivers powerful Zoho implementations and AI solutions - helping you achieve measurable results faster.
              </p>
            </motion.div>
            
            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center bg-white rounded-xl p-6 shadow-sm border border-border/50">
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Case Studies Grid - Clean White Theme */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-14"
            >
              <span className="inline-block px-5 py-2 border-2 border-secondary text-secondary rounded-full text-sm font-medium mb-6">
                Case Studies
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Industry 
                <span className="bg-gradient-to-r from-[hsl(210,90%,55%)] via-[hsl(330,80%,65%)] to-[hsl(270,70%,60%)] bg-clip-text text-transparent"> Transformations</span>
              </h2>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-[hsl(0,0%,96%)] rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 group"
                >
                  {/* Header */}
                  <div className="bg-gradient-to-r from-[hsl(220,70%,25%)] to-[hsl(220,60%,35%)] p-6 text-white">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-white/15 rounded-lg flex items-center justify-center">
                        <study.icon className="w-5 h-5" />
                      </div>
                      <span className="text-sm font-medium border border-white/30 px-3 py-1 rounded-full">
                        {study.industry}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold">{study.title}</h3>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-foreground mb-2">Challenge</h4>
                      <p className="text-sm text-muted-foreground">{study.challenge}</p>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-foreground mb-2">Solution</h4>
                      <p className="text-sm text-muted-foreground">{study.solution}</p>
                    </div>
                    
                    {/* Results */}
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      {study.results.map((result, i) => (
                        <div key={i} className="text-center bg-white rounded-lg p-3 border border-border/30">
                          <div className="text-lg font-bold bg-gradient-to-r from-[hsl(210,90%,55%)] to-[hsl(270,70%,60%)] bg-clip-text text-transparent">{result.metric}</div>
                          <div className="text-xs text-muted-foreground leading-tight">{result.label}</div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Testimonial */}
                    <div className="border-t border-border/30 pt-4">
                      <p className="text-sm italic text-muted-foreground mb-2">"{study.testimonial}"</p>
                      <p className="text-xs font-medium text-foreground">— {study.author}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Client Logos - Light Theme */}
        <section className="py-16 bg-[hsl(0,0%,96%)]">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="inline-block px-5 py-2 border-2 border-primary text-primary rounded-full text-sm font-medium mb-6">
                Trusted Partners
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                Trusted by 
                <span className="bg-gradient-to-r from-[hsl(210,90%,55%)] via-[hsl(330,80%,65%)] to-[hsl(270,70%,60%)] bg-clip-text text-transparent"> Industry Leaders</span>
              </h2>
              <p className="text-muted-foreground">
                Join 500+ businesses that have transformed with CCT
              </p>
            </motion.div>
            
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 md:p-8 border border-border/30"
              >
                <img 
                  src={clientLogosRow1} 
                  alt="Client logos - Bluebond, Trace, Amp It Up PR, Genova Law, Viacare" 
                  className="w-full max-w-5xl mx-auto object-contain"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-2xl p-6 md:p-8 border border-border/30"
              >
                <img 
                  src={clientLogosRow2} 
                  alt="Client logos - Chemispire, Milestones Moments, Pro Imaging, Jindal Healthcare, XPRS" 
                  className="w-full max-w-5xl mx-auto object-contain"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section - Clean Dark Theme */}
        <section className="py-20 bg-[hsl(220,70%,15%)]">
          <div className="container-custom text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <span className="inline-block px-5 py-2 border-2 border-white/30 text-white rounded-full text-sm font-medium mb-6">
                Get Started
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                Ready to Write Your
              </h2>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-[hsl(210,90%,55%)] via-[hsl(330,80%,65%)] to-[hsl(270,70%,60%)] bg-clip-text text-transparent">
                  Success Story?
                </span>
              </h2>
              <p className="text-lg text-white/80 mb-8">
                Join hundreds of businesses that have transformed their operations with CCT's expertise in Zoho and AI solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-white" asChild>
                  <Link to="/contact" className="gap-2">
                    Start Your Transformation
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button size="lg" className="border-2 border-white/40 bg-transparent text-white hover:bg-white/10" asChild>
                  <Link to="/contact">Book Free Consultation</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}
