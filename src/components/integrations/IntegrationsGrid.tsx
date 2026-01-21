import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Filter, X, Sparkles } from "lucide-react";
import { Input } from "@/components/ui/input";
import { IntegrationCard } from "./IntegrationCard";
import { integrations, integrationCategories, getCategoryCounts, type Integration } from "@/data/integrationsData";

export function IntegrationsGrid() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categoryCounts = useMemo(() => getCategoryCounts(integrations), []);

  const filteredIntegrations = useMemo(() => {
    return integrations.filter((integration) => {
      const matchesSearch = 
        integration.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        integration.zohoApps.some(app => app.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesCategory = selectedCategory === "all" || integration.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const featuredIntegrations = useMemo(() => {
    return integrations.filter(i => i.featured).slice(0, 10);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Search Bar */}
      <div className="max-w-2xl mx-auto mb-12">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search integrations or Zoho apps..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-12 pr-12 py-6 text-lg rounded-full border-2 border-gray-200 focus:border-primary bg-white shadow-sm"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-gray-100"
            >
              <X className="w-4 h-4 text-muted-foreground" />
            </button>
          )}
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Categories */}
        <aside className="lg:w-64 flex-shrink-0">
          <div className="sticky top-24">
            <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <Filter className="w-4 h-4" />
              Browse by Category
            </h3>
            <nav className="space-y-1">
              {integrationCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-all flex items-center justify-between ${
                    selectedCategory === category.id
                      ? "bg-primary text-white"
                      : "text-muted-foreground hover:bg-gray-100 hover:text-foreground"
                  }`}
                >
                  <span>{category.label}</span>
                  <span className={`text-xs ${selectedCategory === category.id ? "text-white/80" : "text-muted-foreground"}`}>
                    {categoryCounts[category.id] || 0}
                  </span>
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          {/* Featured Apps - Only show when no search/filter */}
          {selectedCategory === "all" && !searchQuery && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-12"
            >
              <h3 className="font-semibold text-foreground mb-6 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-primary" />
                Featured Integrations
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {featuredIntegrations.map((integration, index) => (
                  <IntegrationCard
                    key={integration.id}
                    name={integration.name}
                    logo={integration.logo}
                    category={integration.category}
                    zohoApps={integration.zohoApps}
                    index={index}
                  />
                ))}
              </div>
            </motion.div>
          )}

          {/* Results Header */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-muted-foreground">
              Showing <span className="font-semibold text-foreground">{filteredIntegrations.length}</span> of{" "}
              <span className="font-semibold text-foreground">{integrations.length}</span> integrations
            </p>
          </div>

          {/* Integration Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`${selectedCategory}-${searchQuery}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
            >
              {filteredIntegrations.map((integration, index) => (
                <IntegrationCard
                  key={integration.id}
                  name={integration.name}
                  logo={integration.logo}
                  category={integration.category}
                  zohoApps={integration.zohoApps}
                  index={index}
                />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* No Results */}
          {filteredIntegrations.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">No integrations found</h3>
              <p className="text-muted-foreground mb-4">
                Try adjusting your search or filter criteria
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                }}
                className="text-primary font-medium hover:underline"
              >
                Clear all filters
              </button>
            </motion.div>
          )}
        </main>
      </div>
    </div>
  );
}
