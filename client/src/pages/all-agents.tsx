import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useLocation } from 'wouter';
import Header from '@/components/ui/header';
import Footer from '@/components/ui/footer';
import AgentCard from '@/components/ui/agent-card';
import SearchBar from '@/components/ui/search-bar';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Grid, List, LayoutGrid, Loader2 } from 'lucide-react';
import { categoriesMockData, agentsMockData, getAgentsCountByCategory } from '@/lib/mock-data';
import type { Category, Agent } from '@shared/schema';

export default function AllAgents() {
  const [location] = useLocation();
  const [searchParams, setSearchParams] = useState(new URLSearchParams(window.location.search));
  const initialQuery = searchParams.get('q') || '';
  
  const [agents, setAgents] = useState<Agent[]>([]);
  const [categories, setCategories] = useState<Category[]>(categoriesMockData);
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'popularity' | 'rating' | 'newest'>('popularity');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  
  // In a real app, we would fetch this data from the API
  /*
  const { data: agentsData, isLoading } = useQuery({
    queryKey: ['/api/agents', { search: searchQuery }],
  });
  */
  
  // Using mock data instead, simulating search
  useEffect(() => {
    // Simulate API loading delay
    setLoading(true);
    setTimeout(() => {
      let filteredAgents = [...agentsMockData];
      
      // Apply search filter if there's a query
      if (initialQuery) {
        const searchTermLower = initialQuery.toLowerCase();
        filteredAgents = filteredAgents.filter(
          agent => agent.name.toLowerCase().includes(searchTermLower) || 
                  agent.description.toLowerCase().includes(searchTermLower)
        );
      }
      
      // Apply category filter if not "all"
      if (selectedCategory !== 'all') {
        const categoryId = parseInt(selectedCategory);
        filteredAgents = filteredAgents.filter(agent => agent.categoryId === categoryId);
      }
      
      setAgents(filteredAgents);
      setLoading(false);
    }, 500);
  }, [initialQuery, selectedCategory]);
  
  // Sort agents based on selected sort option
  const sortedAgents = [...agents].sort((a, b) => {
    if (sortBy === 'rating') {
      return b.rating - a.rating;
    } else if (sortBy === 'newest') {
      // Safely handle potential null dates
      const dateA = a.addedDate ? new Date(a.addedDate).getTime() : 0;
      const dateB = b.addedDate ? new Date(b.addedDate).getTime() : 0;
      return dateB - dateA;
    } else {
      return b.userCount - a.userCount; // popularity
    }
  });
  
  // Find category for each agent
  const getCategoryForAgent = (agent: Agent) => {
    return categories.find(c => c.id === agent.categoryId);
  };

  // Create page title based on current view
  const getPageTitle = () => {
    if (initialQuery) {
      return `Search Results for "${initialQuery}"`;
    } else if (selectedCategory !== 'all') {
      const category = categories.find(c => c.id === parseInt(selectedCategory));
      return category ? `${category.name} AI Agents` : 'All AI Agents';
    } else {
      return 'All AI Agents';
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-purple-700 to-indigo-800 py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{getPageTitle()}</h1>
            <p className="text-white/80 max-w-3xl mb-6">
              {initialQuery 
                ? `Found ${sortedAgents.length} AI agents matching your search.`
                : 'Browse our comprehensive directory of AI agents to find the perfect tools for your needs.'}
            </p>
            <SearchBar 
              className="max-w-xl" 
              initialValue={initialQuery}
            />
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-6 flex-col md:flex-row">
            <div className="mb-4 md:mb-0">
              <h2 className="text-xl font-semibold">
                {sortedAgents.length} {sortedAgents.length === 1 ? 'Agent' : 'Agents'} Found
              </h2>
            </div>
            
            <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
              <Select 
                defaultValue={selectedCategory}
                onValueChange={setSelectedCategory}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.map(category => (
                    <SelectItem key={category.id} value={category.id.toString()}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Select 
                defaultValue={sortBy}
                onValueChange={(value) => setSortBy(value as any)}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popularity">Sort by Popularity</SelectItem>
                  <SelectItem value="rating">Sort by Rating</SelectItem>
                  <SelectItem value="newest">Sort by Newest</SelectItem>
                </SelectContent>
              </Select>
              
              <div className="flex border border-neutral-200 rounded-lg overflow-hidden">
                <Button 
                  variant={viewMode === 'grid' ? 'secondary' : 'ghost'} 
                  size="icon" 
                  onClick={() => setViewMode('grid')}
                  className="rounded-none"
                >
                  <LayoutGrid className="h-4 w-4" />
                </Button>
                <Button 
                  variant={viewMode === 'list' ? 'secondary' : 'ghost'} 
                  size="icon" 
                  onClick={() => setViewMode('list')}
                  className="rounded-none"
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
          
          {loading ? (
            <div className="flex items-center justify-center py-16">
              <Loader2 className="h-8 w-8 animate-spin text-purple-700" />
            </div>
          ) : (
            <>
              <div className={`grid gap-6 ${
                viewMode === 'grid' 
                  ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
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
              
              {sortedAgents.length === 0 && (
                <div className="text-center py-16">
                  <h3 className="text-xl font-semibold mb-2">No agents found</h3>
                  <p className="text-neutral-600">
                    {initialQuery 
                      ? `No results found for "${initialQuery}". Try a different search term.`
                      : 'No agents match the selected filters.'}
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
