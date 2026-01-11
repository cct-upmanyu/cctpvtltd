import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { 
  Package, 
  Truck, 
  Warehouse, 
  BarChart3, 
  ShoppingCart, 
  Plug, 
  Smartphone,
  QrCode,
  Globe,
  Settings,
  Workflow,
  ArrowRight,
  CheckCircle2,
  Store,
  Box,
  PackageSearch,
  TrendingUp,
  Users,
  Zap
} from "lucide-react";
import zohoInventoryInterface from "@/assets/zoho-inventory-interface.jpg";

const ZohoInventory = () => {
  useEffect(() => {
    document.title = "Zoho Inventory Management Software Implementation | ClubCode Technology Pvt Ltd";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Expert Zoho Inventory implementation services. Manage inventory, fulfill orders, and sell across multiple channels with powerful inventory management software.");
    }

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Zoho Inventory Implementation Services",
      "provider": {
        "@type": "Organization",
        "name": "ClubCode Technology Pvt Ltd"
      },
      "description": "Expert Zoho Inventory implementation, multichannel selling, and order fulfillment solutions.",
      "serviceType": "Inventory Management Implementation"
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const coreFeatures = [
    {
      icon: Package,
      title: "Item Management",
      description: "Sort items, create price offers, and manage production with item groups, bundles, and composite items.",
      features: ["Item groups & variants", "Composite items", "Serial & batch tracking", "Unit of measure conversion"]
    },
    {
      icon: Warehouse,
      title: "Warehouse Management",
      description: "Manage stock across multiple locations, transfer items between warehouses, and generate location-specific reports.",
      features: ["Multi-warehouse tracking", "Stock transfers", "Warehouse reports", "Bin/shelf management"]
    },
    {
      icon: ShoppingCart,
      title: "Multichannel Selling",
      description: "Establish presence across digital storefronts and track all sales within one unified platform.",
      features: ["Multiple sales channels", "Effortless stock sync", "Currency handling", "Channel analytics"]
    },
    {
      icon: Truck,
      title: "Order Fulfillment",
      description: "From packing to tracking, manage the complete shipping process with carrier integrations.",
      features: ["Package visualization", "Carrier integration", "Real-time tracking", "Shipping labels"]
    },
    {
      icon: QrCode,
      title: "Barcode & RFID",
      description: "Accurate stock tracking with barcode scanning and RFID systems for fast, error-free operations.",
      features: ["Barcode generation", "Scanner support", "RFID tracking", "Batch scanning"]
    },
    {
      icon: BarChart3,
      title: "Reports & Analytics",
      description: "Generate instant reports on stock levels, sales, purchases, and inventory valuation.",
      features: ["Stock reports", "Sales analytics", "Purchase tracking", "Inventory valuation"]
    }
  ];

  const sellingChannels = [
    { name: "Amazon", icon: Store },
    { name: "Shopify", icon: ShoppingCart },
    { name: "eBay", icon: Store },
    { name: "Etsy", icon: Store },
    { name: "WooCommerce", icon: ShoppingCart },
    { name: "Google Shopping", icon: Store }
  ];

  const highlights = [
    {
      icon: Box,
      title: "Assemblies & Bundles",
      description: "Create product bundles and manage assembly workflows for manufacturing."
    },
    {
      icon: PackageSearch,
      title: "Backorders & Dropship",
      description: "Handle shortages with backordering and dropshipping to never lose a sale."
    },
    {
      icon: Globe,
      title: "Multi-Currency",
      description: "Transact across currencies and countries with automatic conversion."
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Manage inventory and close deals on the go with iOS and Android apps."
    },
    {
      icon: Workflow,
      title: "Custom Workflows",
      description: "Automate processes with personalized workflows and webhooks."
    },
    {
      icon: Settings,
      title: "User Permissions",
      description: "Configure user roles and permissions for secure access control."
    }
  ];

  const integrations = [
    "Zoho Books", "Zoho CRM", "Zoho Analytics", "Zoho Commerce",
    "Amazon", "Shopify", "eBay", "Etsy", "WooCommerce",
    "PayPal", "Stripe", "ShipStation", "Salesforce"
  ];

  const pricingPlans = [
    { name: "Free", price: "$0", orders: "50 orders/mo", users: "1 user", locations: "2 locations" },
    { name: "Standard", price: "$29", orders: "500 orders/mo", users: "2 users", locations: "2 locations" },
    { name: "Professional", price: "$79", orders: "3000 orders/mo", users: "2 users", locations: "4 locations" },
    { name: "Premium", price: "$129", orders: "7500 orders/mo", users: "2 users", locations: "6 locations" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                Zoho Inventory Implementation Partner
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Manage Inventory <span className="text-primary">the Right Way</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Successful business relies on successful inventory management. Automate operations and sell more with less effort using Zoho Inventory.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                We implement end-to-end inventory solutions that optimize your supply chain and boost profitability.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="text-lg px-8">
                  <Link to="/contact">Book a Free Consultation</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg px-8">
                  <Link to="/contact">Request a Demo</Link>
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/50">
                <img 
                  src={zohoInventoryInterface} 
                  alt="Zoho Inventory Management Interface" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-card rounded-xl p-4 shadow-lg border border-border/50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Package className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-foreground">Multi-Channel Selling</div>
                    <div className="text-xs text-muted-foreground">Unified inventory across platforms</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Highlight Section */}
      <section className="py-12 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Package, value: "10K+", label: "Products Managed Daily" },
              { icon: Users, value: "500+", label: "Happy Clients" },
              { icon: TrendingUp, value: "40%", label: "Efficiency Increase" },
              { icon: Zap, value: "99.9%", label: "Inventory Accuracy" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 mx-auto mb-3 bg-primary/20 rounded-xl flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Next-Gen Inventory Software
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need from stock management to order fulfillment.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                      <feature.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.features.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Multichannel Selling */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Sell Across Multiple Channels
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Integrate with major marketplaces and e-commerce platforms for unified inventory management.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {sellingChannels.map((channel, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center p-6 bg-card rounded-xl border border-border/50 hover:border-primary/50 transition-colors"
              >
                <channel.icon className="w-10 h-10 text-primary mb-3" />
                <span className="font-medium text-foreground">{channel.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Flexible & Extensible
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Made to work with your unique business needs and grow with you.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border/50"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <highlight.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">{highlight.title}</h3>
                  <p className="text-muted-foreground text-sm">{highlight.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Unified Platform Integrations
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tightly integrated with apps to manage every angle of your business.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {integrations.map((integration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                className="px-5 py-3 bg-card rounded-full border border-border/50 text-foreground font-medium text-sm"
              >
                {integration}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Zoho Inventory Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              End-to-end inventory management implementation from certified experts.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Implementation & Setup", description: "Complete Zoho Inventory configuration with warehouses, items, and sales channels." },
              { title: "Multichannel Integration", description: "Connect Amazon, Shopify, eBay, and other marketplaces for unified selling." },
              { title: "Accounting Integration", description: "Seamless sync with Zoho Books, Xero, or QuickBooks for financial accuracy." },
              { title: "Shipping Setup", description: "Configure carrier integrations for automated label generation and tracking." },
              { title: "Workflow Automation", description: "Automate reorder points, stock alerts, and order processing workflows." },
              { title: "Training & Support", description: "Enable your team with comprehensive training and ongoing optimization." }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-card rounded-xl border border-border/50 hover:border-primary/50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Transform Your Inventory Operations
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of businesses managing inventory the right way. Let us optimize your supply chain for growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8">
                <Link to="/contact">
                  Get Started <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8">
                <Link to="/zoho-solutions">Explore Zoho Solutions</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ZohoInventory;
