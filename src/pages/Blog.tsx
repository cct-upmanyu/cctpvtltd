import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock, User, Search, TrendingUp, Lightbulb, Cog, BarChart3, Bot, Database, Globe, Shield } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { Input } from "@/components/ui/input";

const categories = [
  { name: "All", count: 24 },
  { name: "Zoho Tips", count: 8 },
  { name: "AI & Automation", count: 6 },
  { name: "CRM Best Practices", count: 5 },
  { name: "Industry Insights", count: 3 },
  { name: "Digital Transformation", count: 2 }
];

const featuredPost = {
  id: 1,
  title: "How AI is Revolutionizing CRM: A Complete Guide for 2025",
  excerpt: "Discover how artificial intelligence is transforming customer relationship management. Learn about AI-powered lead scoring, predictive analytics, and automated workflows that are helping businesses close deals 3x faster.",
  category: "AI & Automation",
  author: "Navdeep Sen",
  role: "Founder & CEO, ClubCode Technology",
  date: "January 2, 2025",
  readTime: "8 min read",
  icon: Bot,
  tags: ["AI", "CRM", "Automation", "Lead Scoring"]
};

const blogPosts = [
  {
    id: 2,
    title: "10 Zoho CRM Customizations Every Business Needs",
    excerpt: "Unlock the full potential of Zoho CRM with these essential customizations that improve sales productivity and customer engagement.",
    category: "Zoho Tips",
    author: "CCT Team",
    date: "December 28, 2024",
    readTime: "6 min read",
    icon: Cog
  },
  {
    id: 3,
    title: "The Ultimate Guide to Zoho One Implementation",
    excerpt: "Step-by-step implementation strategy for Zoho One that ensures seamless adoption and maximum ROI for your business.",
    category: "Zoho Tips",
    author: "CCT Team",
    date: "December 22, 2024",
    readTime: "10 min read",
    icon: Database
  },
  {
    id: 4,
    title: "AI Chatbots vs Traditional Support: ROI Comparison",
    excerpt: "A detailed analysis of cost savings and efficiency gains when implementing AI-powered customer support solutions.",
    category: "AI & Automation",
    author: "CCT Team",
    date: "December 18, 2024",
    readTime: "7 min read",
    icon: Bot
  },
  {
    id: 5,
    title: "Data Migration Best Practices: Avoiding Common Pitfalls",
    excerpt: "Learn from our experience migrating 500+ businesses to ensure your data migration is smooth, complete, and error-free.",
    category: "CRM Best Practices",
    author: "CCT Team",
    date: "December 15, 2024",
    readTime: "8 min read",
    icon: Database
  },
  {
    id: 6,
    title: "Manufacturing Industry: Digital Transformation Trends 2025",
    excerpt: "Key digital transformation trends shaping the manufacturing industry and how Zoho solutions address each challenge.",
    category: "Industry Insights",
    author: "CCT Team",
    date: "December 10, 2024",
    readTime: "9 min read",
    icon: TrendingUp
  },
  {
    id: 7,
    title: "Zoho Analytics: Building Dashboards That Drive Decisions",
    excerpt: "Create powerful, actionable dashboards with Zoho Analytics that transform raw data into strategic business insights.",
    category: "Zoho Tips",
    author: "CCT Team",
    date: "December 5, 2024",
    readTime: "6 min read",
    icon: BarChart3
  },
  {
    id: 8,
    title: "CRM Automation: 15 Workflows That Save Hours Daily",
    excerpt: "Practical workflow automation ideas that reduce manual tasks and let your sales team focus on closing deals.",
    category: "CRM Best Practices",
    author: "CCT Team",
    date: "December 1, 2024",
    readTime: "7 min read",
    icon: Cog
  },
  {
    id: 9,
    title: "Global Expansion Made Easy with Zoho",
    excerpt: "How multi-national companies use Zoho to manage operations across countries while maintaining consistency.",
    category: "Digital Transformation",
    author: "CCT Team",
    date: "November 28, 2024",
    readTime: "8 min read",
    icon: Globe
  },
  {
    id: 10,
    title: "Security Best Practices for Zoho Implementation",
    excerpt: "Essential security configurations and best practices to protect your business data in Zoho applications.",
    category: "CRM Best Practices",
    author: "CCT Team",
    date: "November 22, 2024",
    readTime: "6 min read",
    icon: Shield
  },
  {
    id: 11,
    title: "AI Voice Bots: The Future of Customer Engagement",
    excerpt: "Explore how AI voice bots are transforming customer interactions and reducing support costs by up to 60%.",
    category: "AI & Automation",
    author: "CCT Team",
    date: "November 18, 2024",
    readTime: "7 min read",
    icon: Bot
  },
  {
    id: 12,
    title: "Retail Industry: Unified Commerce with Zoho",
    excerpt: "How retail businesses are using Zoho to create seamless omnichannel experiences for their customers.",
    category: "Industry Insights",
    author: "CCT Team",
    date: "November 12, 2024",
    readTime: "8 min read",
    icon: TrendingUp
  }
];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Helmet>
        <title>Blog | CCT - ClubCode Technology Insights & Tips</title>
        <meta name="description" content="Expert insights, tips, and guides on Zoho, CRM, AI automation, and digital transformation from ClubCode Technology." />
        <link rel="canonical" href="https://clubcodetechnology.com/blog" />
      </Helmet>
      
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section - Light Clean Theme */}
        <section className="relative py-16 md:py-20 bg-[hsl(0,0%,96%)] overflow-hidden">
          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-4xl mx-auto"
            >
              <span className="inline-block px-5 py-2 border-2 border-primary text-primary rounded-full text-sm font-medium mb-8">
                Insights & Resources
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Expert Insights for
                <span className="block mt-2">
                  <span className="bg-gradient-to-r from-[hsl(210,90%,55%)] via-[hsl(190,85%,50%)] via-[hsl(330,80%,65%)] to-[hsl(270,70%,60%)] bg-clip-text text-transparent">
                    Business Growth
                  </span>
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Stay ahead with expert tips, industry trends, and actionable guides on Zoho, CRM, AI, and digital transformation.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Featured Post - Light Section */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <span className="inline-block px-5 py-2 border-2 border-secondary text-secondary rounded-full text-sm font-medium mb-6">
                Featured Article
              </span>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[hsl(0,0%,96%)] rounded-3xl overflow-hidden border border-border/30"
            >
              <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
                <div>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                    <span className="bg-gradient-to-r from-[hsl(210,90%,55%)] via-[hsl(330,80%,65%)] to-[hsl(270,70%,60%)] bg-clip-text text-transparent">
                      {featuredPost.title}
                    </span>
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredPost.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center border border-primary/20">
                      <User className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">{featuredPost.author}</div>
                      <div className="text-sm text-muted-foreground">{featuredPost.role}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4 text-primary" />
                      {featuredPost.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4 text-primary" />
                      {featuredPost.readTime}
                    </span>
                  </div>
                  <Button className="border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-white" size="lg">
                    Read Full Article
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
                <div className="hidden md:flex items-center justify-center">
                  <div className="w-64 h-64 bg-gradient-to-br from-[hsl(210,90%,55%)]/10 via-[hsl(330,80%,65%)]/10 to-[hsl(270,70%,60%)]/10 border border-primary/20 rounded-3xl flex items-center justify-center">
                    <featuredPost.icon className="w-32 h-32 text-primary/40" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Blog Posts - Light Section */}
        <section className="py-20 bg-[hsl(0,0%,96%)]">
          <div className="container-custom">
            <div className="grid lg:grid-cols-4 gap-8">
              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-6">
                  {/* Search */}
                  <div className="bg-white rounded-xl p-6 border border-border/30">
                    <h3 className="font-semibold text-foreground mb-4">Search</h3>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        placeholder="Search articles..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10 border-border/50 focus:border-primary"
                      />
                    </div>
                  </div>
                  
                  {/* Categories */}
                  <div className="bg-white rounded-xl p-6 border border-border/30">
                    <h3 className="font-semibold text-foreground mb-4">Categories</h3>
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <button
                          key={category.name}
                          onClick={() => setSelectedCategory(category.name)}
                          className={`w-full flex items-center justify-between px-3 py-2 rounded-lg transition-colors text-left ${
                            selectedCategory === category.name
                              ? "bg-gradient-to-r from-[hsl(210,90%,55%)] to-[hsl(270,70%,60%)] text-white"
                              : "hover:bg-[hsl(0,0%,96%)] text-muted-foreground"
                          }`}
                        >
                          <span className="text-sm">{category.name}</span>
                          <span className={`text-xs px-2 py-0.5 rounded-full ${
                            selectedCategory === category.name
                              ? "bg-white/20 text-white"
                              : "bg-[hsl(0,0%,96%)] text-muted-foreground"
                          }`}>
                            {category.count}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Newsletter */}
                  <div className="bg-[hsl(220,70%,15%)] rounded-xl p-6 text-white">
                    <h3 className="font-semibold mb-2">Newsletter</h3>
                    <p className="text-sm text-white/80 mb-4">
                      Get the latest insights delivered to your inbox.
                    </p>
                    <Input
                      placeholder="Your email"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/60 mb-3 focus:border-primary"
                    />
                    <Button className="w-full border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-white" size="sm">
                      Subscribe
                    </Button>
                  </div>
                </div>
              </div>

              {/* Posts Grid */}
              <div className="lg:col-span-3">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-2xl font-bold text-foreground">
                    {selectedCategory === "All" ? "Latest " : ""}
                    <span className="bg-gradient-to-r from-[hsl(210,90%,55%)] via-[hsl(330,80%,65%)] to-[hsl(270,70%,60%)] bg-clip-text text-transparent">
                      {selectedCategory === "All" ? "Articles" : selectedCategory}
                    </span>
                  </h2>
                  <span className="text-muted-foreground text-sm">
                    {filteredPosts.length} articles
                  </span>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {filteredPosts.map((post, index) => (
                    <motion.article
                      key={post.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="bg-white rounded-xl border border-border/30 overflow-hidden hover:shadow-lg transition-all duration-300 group"
                    >
                      <div className="h-40 bg-gradient-to-br from-[hsl(210,90%,55%)]/10 via-[hsl(330,80%,65%)]/10 to-[hsl(270,70%,60%)]/10 flex items-center justify-center">
                        <post.icon className="w-16 h-16 text-muted-foreground/30 group-hover:text-primary transition-colors" />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                            {post.category}
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3 text-primary" />
                            {post.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3 text-primary" />
                            {post.readTime}
                          </span>
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </div>

                {filteredPosts.length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground">No articles found matching your criteria.</p>
                  </div>
                )}

                {/* Load More */}
                <div className="text-center mt-12">
                  <Button className="border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-white" size="lg">
                    Load More Articles
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - Clean Dark Theme */}
        <section className="py-20 bg-[hsl(220,70%,15%)]">
          <div className="container-custom text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <span className="inline-block px-5 py-2 border-2 border-white/30 text-white rounded-full text-sm font-medium mb-6">
                Get in Touch
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                Have Questions About
              </h2>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-[hsl(210,90%,55%)] via-[hsl(330,80%,65%)] to-[hsl(270,70%,60%)] bg-clip-text text-transparent">
                  Your Business?
                </span>
              </h2>
              <p className="text-lg text-white/80 mb-8">
                Our experts are ready to discuss how Zoho and AI solutions can transform your operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-white" asChild>
                  <Link to="/contact" className="gap-2">
                    Talk to an Expert
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button size="lg" className="border-2 border-white/40 bg-transparent text-white hover:bg-white/10" asChild>
                  <Link to="/case-studies">View Case Studies</Link>
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
