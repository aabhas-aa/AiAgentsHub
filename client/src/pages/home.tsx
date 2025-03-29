import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import Header from '@/components/ui/header';
import HeroSection from '@/components/ui/hero-section';
import CategoryCard from '@/components/ui/category-card';
import AgentCard from '@/components/ui/agent-card';
import NewsletterSection from '@/components/ui/newsletter-section';
import Footer from '@/components/ui/footer';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Grid, List, LayoutGrid } from 'lucide-react';
import { categoriesMockData, agentsMockData, getAgentsCountByCategory } from '@/lib/mock-data';
import type { Category, Agent } from '@shared/schema';

// Component for the Categories section
function CategoriesSection({ categories }: { categories: Category[] }) {
  return (
    <section className="py-8 sm:py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-800 mb-2 sm:mb-4">Browse by Category</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto text-sm sm:text-base">
            Find the perfect AI agents by exploring our categories, each containing hand-picked tools to enhance your workflows.
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-4">
          {categories.map(category => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Component for the Featured Agents section
function FeaturedAgentsSection({ 
  agents, 
  categories 
}: { 
  agents: Agent[],
  categories: Category[]
}) {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'popularity' | 'rating' | 'newest'>('popularity');
  
  // Find category for each agent
  const getCategoryForAgent = (agent: Agent) => {
    return categories.find(c => c.id === agent.categoryId);
  };
  
  // Sort agents based on selected sort option
  const sortedAgents = [...agents].sort((a, b) => {
    if (sortBy === 'rating') {
      return b.rating - a.rating;
    } else if (sortBy === 'newest') {
      // Handle potential null dates by providing defaults
      const dateA = a.addedDate ? new Date(a.addedDate.toString()).getTime() : 0;
      const dateB = b.addedDate ? new Date(b.addedDate.toString()).getTime() : 0;
      return dateB - dateA;
    } else {
      return b.userCount - a.userCount; // popularity
    }
  });

  return (
    <section className="py-8 sm:py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6 sm:mb-10 flex-col md:flex-row">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-800 mb-1 sm:mb-2">Featured AI Agents</h2>
            <p className="text-neutral-600 text-sm sm:text-base">Top-rated AI tools that are making waves in the industry</p>
          </div>
          
          <div className="flex items-center space-x-2 sm:space-x-3 w-full md:w-auto">
            <select 
              className="bg-neutral-100 border border-neutral-200 rounded-lg px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm flex-grow md:flex-grow-0" 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
            >
              <option value="popularity">Sort by Popularity</option>
              <option value="rating">Sort by Rating</option>
              <option value="newest">Sort by Newest</option>
            </select>
            
            <div className="flex border border-neutral-200 rounded-lg overflow-hidden">
              <Button 
                variant={viewMode === 'grid' ? 'secondary' : 'ghost'} 
                size="icon" 
                onClick={() => setViewMode('grid')}
                className="rounded-none h-8 w-8 sm:h-10 sm:w-10"
              >
                <LayoutGrid className="h-3 w-3 sm:h-4 sm:w-4" />
              </Button>
              <Button 
                variant={viewMode === 'list' ? 'secondary' : 'ghost'} 
                size="icon" 
                onClick={() => setViewMode('list')}
                className="rounded-none h-8 w-8 sm:h-10 sm:w-10"
              >
                <List className="h-3 w-3 sm:h-4 sm:w-4" />
              </Button>
            </div>
          </div>
        </div>
        
        <div className={`grid gap-4 sm:gap-6 ${
          viewMode === 'grid' 
            ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' 
            : 'grid-cols-1'
        }`}>
          {sortedAgents.map(agent => (
            <AgentCard 
              key={agent.id} 
              agent={agent} 
              category={getCategoryForAgent(agent)}
            />
          ))}
        </div>
        
        <div className="mt-6 sm:mt-10 text-center">
          <Button asChild className="bg-purple-700 hover:bg-purple-800 text-white text-sm sm:text-base px-4 py-2 sm:px-6 sm:py-3">
            <Link href="/agents">Explore All AI Agents</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  // Using mock data initially
  const [categories, setCategories] = useState<Category[]>(categoriesMockData);
  const [featuredAgents, setFeaturedAgents] = useState<Agent[]>(agentsMockData);
  
  // API data fetching would look like this:
  /*
  const { data: categoriesData } = useQuery({
    queryKey: ['/api/categories'],
  });
  
  const { data: featuredAgentsData } = useQuery({
    queryKey: ['/api/agents', { featured: true }],
  });
  */
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <CategoriesSection categories={categories} />
        <FeaturedAgentsSection agents={featuredAgents} categories={categories} />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
}
