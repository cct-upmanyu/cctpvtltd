import { motion } from "framer-motion";
import { ArrowRight, Bot, Sparkles, User, ShoppingBag, Calendar, Building, Headphones } from "lucide-react";

const agentExamples = [
  {
    title: "AI Agents for Customers",
    description: "Respond to your customers with instant, human-like support from a team of advanced AI Agents.",
    color: "#3FE0F0",
    conversation: [
      { type: "user", name: "Sarah", message: "I'd like to make a return" },
      { type: "agent", message: "Hi Sarah, no problem! Please select the item you'd like to return from your recent purchase.", isAI: true },
    ],
    products: [
      { name: "Business Suite", price: "$299/mo", image: "📊" },
      { name: "CRM Pro", price: "$149/mo", image: "📈" },
      { name: "Analytics", price: "$99/mo", image: "📉" },
    ],
  },
  {
    title: "AI Agents for Sales Reps",
    description: "Empower reps with an AI assistant that handles the busy work, so reps focus on great customer experiences.",
    color: "#4DA3FF",
    conversation: [
      { type: "user", name: "Alex", message: "Can I update my meeting to arrive on March 7th?" },
      { type: "copilot", message: "It looks like there are only 3 slots available March 7-10, 2025.", icon: "copilot" },
    ],
    booking: {
      title: "Client Meeting March 7-10 (3 days)",
      details: ["2 Conference rooms", "1 Standard meeting room, 1 Executive boardroom"],
    },
  },
  {
    title: "AI Agents for Support",
    description: "Resolve tickets instantly with intelligent routing, auto-responses, and seamless escalation to human agents.",
    color: "#8B5CF6",
    conversation: [
      { type: "user", name: "Mike", message: "My payment failed, need urgent help!" },
      { type: "agent", message: "I see the issue, Mike. Your card expired. I've sent a secure link to update it. Payment will retry automatically.", isAI: true },
    ],
    stats: [
      { label: "Avg Response", value: "<1 min" },
      { label: "Resolution Rate", value: "94%" },
    ],
  },
  {
    title: "AI Agents for Operations",
    description: "Monitor workflows, prevent bottlenecks, and optimize resource allocation with autonomous AI operations agents.",
    color: "#10B981",
    conversation: [
      { type: "system", message: "Inventory Alert: Stock level critical for SKU-4521" },
      { type: "agent", message: "Detected low stock. Auto-generated PO #2847 sent to supplier. ETA: 3 business days.", isAI: true },
    ],
    metrics: [
      { label: "Tasks Automated", value: "2.4K/day" },
      { label: "Cost Saved", value: "$45K/mo" },
    ],
  },
];

export function AIAgentExamples() {
  return (
    <section className="bg-light-gradient section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#3FE0F0]/10 text-[#3FE0F0] text-sm font-medium mb-4">
            AI in Action
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#111827] mb-4">
            See How AI Agents Work
            <span className="text-gradient-primary block">Across Your Business</span>
          </h2>
          <p className="text-[#374151] text-lg max-w-3xl mx-auto">
            Real examples of our AI agents handling customer interactions, sales assistance, support tickets, and operations management.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {agentExamples.map((example, index) => (
            <motion.div
              key={example.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-[#3FE0F0]/30 hover-lift transition-all shadow-sm"
            >
              {/* Header */}
              <h3 className="text-xl font-bold text-[#111827] mb-2">{example.title}</h3>
              <p className="text-[#374151] text-sm mb-6">{example.description}</p>
              
              {/* Learn More Link */}
              <button className="flex items-center gap-2 text-[#111827] font-medium mb-6 hover:text-[#3FE0F0] transition-colors">
                Learn More
                <ArrowRight className="w-4 h-4" />
              </button>
              
              {/* Chat Interface */}
              <div className="bg-[#F5F7FB] rounded-xl p-4 space-y-4">
                {example.conversation.map((msg, msgIndex) => (
                  <div key={msgIndex}>
                    {msg.type === "user" && (
                      <div className="flex items-start gap-3">
                        <div 
                          className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white"
                          style={{ backgroundColor: example.color }}
                        >
                          {msg.name?.charAt(0)}
                        </div>
                        <div className="bg-white rounded-xl px-4 py-2 shadow-sm max-w-[80%]">
                          <p className="text-[#374151] text-sm">{msg.message}</p>
                        </div>
                      </div>
                    )}
                    {msg.type === "agent" && (
                      <div className="flex items-start gap-3 justify-end">
                        <div 
                          className="rounded-xl px-4 py-3 max-w-[85%]"
                          style={{ backgroundColor: example.color }}
                        >
                          <p className="text-white text-sm">{msg.message}</p>
                          {msg.isAI && (
                            <div className="flex items-center gap-1 mt-2 text-white/80 text-xs">
                              <Sparkles className="w-3 h-3" />
                              AI-generated
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                    {msg.type === "system" && (
                      <div className="flex justify-center">
                        <div className="bg-orange-100 text-orange-700 rounded-lg px-4 py-2 text-sm flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                          {msg.message}
                        </div>
                      </div>
                    )}
                    {msg.type === "copilot" && (
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-[#4DA3FF] flex items-center justify-center">
                          <Bot className="w-4 h-4 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#4DA3FF]/10 rounded-full text-[#4DA3FF] text-xs font-medium mb-2">
                            <Bot className="w-3 h-3" />
                            Copilot
                          </div>
                          <div className="bg-white rounded-xl px-4 py-3 shadow-sm">
                            <p className="text-[#374151] text-sm">{msg.message}</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
                
                {/* Products Grid for Customer Agent */}
                {example.products && (
                  <div className="grid grid-cols-3 gap-2 mt-4">
                    {example.products.map((product, pIndex) => (
                      <div key={pIndex} className="bg-white rounded-lg p-3 text-center shadow-sm">
                        <div className="text-2xl mb-1">{product.image}</div>
                        <p className="text-xs text-[#111827] font-medium truncate">{product.name}</p>
                        <p className="text-xs text-[#374151]">{product.price}</p>
                      </div>
                    ))}
                  </div>
                )}
                
                {/* Booking Info for Sales Agent */}
                {example.booking && (
                  <div className="bg-white rounded-xl p-4 shadow-sm mt-4">
                    <div className="flex items-start gap-3">
                      <div className="w-12 h-12 bg-[#4DA3FF]/10 rounded-lg flex items-center justify-center">
                        <Calendar className="w-6 h-6 text-[#4DA3FF]" />
                      </div>
                      <div>
                        <p className="font-semibold text-[#111827] text-sm">{example.booking.title}</p>
                        {example.booking.details.map((detail, dIndex) => (
                          <p key={dIndex} className="text-xs text-[#374151]">{detail}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Stats for Support Agent */}
                {example.stats && (
                  <div className="flex gap-4 mt-4">
                    {example.stats.map((stat, sIndex) => (
                      <div key={sIndex} className="bg-white rounded-lg p-3 flex-1 text-center shadow-sm">
                        <p className="text-lg font-bold" style={{ color: example.color }}>{stat.value}</p>
                        <p className="text-xs text-[#374151]">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                )}
                
                {/* Metrics for Operations Agent */}
                {example.metrics && (
                  <div className="flex gap-4 mt-4">
                    {example.metrics.map((metric, mIndex) => (
                      <div key={mIndex} className="bg-white rounded-lg p-3 flex-1 text-center shadow-sm">
                        <p className="text-lg font-bold" style={{ color: example.color }}>{metric.value}</p>
                        <p className="text-xs text-[#374151]">{metric.label}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}