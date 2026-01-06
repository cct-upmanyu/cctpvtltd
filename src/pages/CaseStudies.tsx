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
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 bg-gradient-to-br from-primary/5 via-background to-accent/5 overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
          </div>
          
          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-4xl mx-auto"
            >
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                Success Stories
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Real Results from Real
                <span className="text-primary"> Transformations</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Discover how ClubCode Technology has helped businesses across industries achieve remarkable growth with Zoho and AI-powered solutions.
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
                <div key={index} className="text-center bg-card rounded-xl p-6 shadow-sm border border-border">
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-20 bg-background">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-all duration-300 group"
                >
                  {/* Header */}
                  <div className="bg-gradient-to-r from-primary to-primary/80 p-6 text-primary-foreground">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                        <study.icon className="w-5 h-5" />
                      </div>
                      <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">
                        {study.industry}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold">{study.title}</h3>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-muted-foreground mb-2">Challenge</h4>
                      <p className="text-sm text-foreground">{study.challenge}</p>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-muted-foreground mb-2">Solution</h4>
                      <p className="text-sm text-foreground">{study.solution}</p>
                    </div>
                    
                    {/* Results */}
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      {study.results.map((result, i) => (
                        <div key={i} className="text-center bg-muted/50 rounded-lg p-3">
                          <div className="text-lg font-bold text-primary">{result.metric}</div>
                          <div className="text-xs text-muted-foreground leading-tight">{result.label}</div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Testimonial */}
                    <div className="border-t border-border pt-4">
                      <p className="text-sm italic text-muted-foreground mb-2">"{study.testimonial}"</p>
                      <p className="text-xs font-medium text-primary">— {study.author}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Client Logos */}
        <section className="py-16 bg-muted/30">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                Trusted by Industry Leaders
              </h2>
              <p className="text-muted-foreground">
                Join 500+ businesses that have transformed with CCT
              </p>
            </motion.div>
            
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl p-6 md:p-8 shadow-sm"
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
                className="bg-card rounded-2xl p-6 md:p-8 shadow-sm"
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

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary to-primary/90 text-primary-foreground">
          <div className="container-custom text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Write Your Success Story?
              </h2>
              <p className="text-lg opacity-90 mb-8">
                Join hundreds of businesses that have transformed their operations with CCT's expertise in Zoho and AI solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="heroSecondary" asChild>
                  <Link to="/contact" className="gap-2">
                    Start Your Transformation
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
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
