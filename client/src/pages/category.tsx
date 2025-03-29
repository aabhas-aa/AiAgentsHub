import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useRoute } from 'wouter';
import Header from '@/components/ui/header';
import Footer from '@/components/ui/footer';
import AgentCard from '@/components/ui/agent-card';
import SearchBar from '@/components/ui/search-bar';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Grid, List, LayoutGrid, Loader2 } from 'lucide-react';
import { categoriesMockData, agentsMockData, getAgentsCountByCategory } from '@/lib/mock-data';
import type { Category, Agent } from '@shared/schema';

export default function CategoryPage() {
  const [, params] = useRoute('/category/:slug');
  const slug = params?.slug;
  
  const [category, setCategory] = useState<Category | undefined>();
  const [agents, setAgents] = useState<Agent[]>([]);
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'popularity' | 'rating' | 'newest'>('popularity');
  
  // In a real app, we would fetch this data from the API
  /*
  const { data: categoryData, isLoading: categoryLoading } = useQuery({
    queryKey: [`/api/categories/${slug}`],
    enabled: !!slug,
  });
  
  const { data: agentsData, isLoading: agentsLoading } = useQuery({
    queryKey: [`/api/agents`, { category: slug }],
    enabled: !!slug,
  });
  */
  
  // Using mock data instead
  useEffect(() => {
    if (slug) {
      // Simulate API loading delay
      setLoading(true);
      setTimeout(() => {
        const foundCategory = categoriesMockData.find(c => c.slug === slug);
        setCategory(foundCategory);
        
        if (foundCategory) {
          const categoryAgents = agentsMockData.filter(a => a.categoryId === foundCategory.id);
          setAgents(categoryAgents);
        }
        
        setLoading(false);
      }, 500);
    }
  }, [slug]);
  
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

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {loading ? (
          <div className="flex items-center justify-center min-h-[50vh]">
            <Loader2 className="h-8 w-8 animate-spin text-purple-700" />
          </div>
        ) : category ? (
          <>
            <div className="bg-gradient-to-r from-purple-700 to-indigo-800 py-12">
              <div className="container mx-auto px-4">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{category.name}</h1>
                <p className="text-white/80 max-w-3xl mb-6">
                  Explore our collection of {getAgentsCountByCategory(category.id)} AI agents in the {category.name} category.
                </p>
                <SearchBar 
                  className="max-w-xl" 
                  placeholder={`Search for ${category.name.toLowerCase()} AI agents...`}
                />
              </div>
            </div>
            
            <div className="container mx-auto px-4 py-8">
              <div className="flex justify-between items-center mb-6 flex-col md:flex-row">
                <div className="mb-4 md:mb-0">
                  <h2 className="text-xl font-semibold">
                    {sortedAgents.length} {category.name} AI Agents
                  </h2>
                </div>
                
                <div className="flex items-center space-x-3 w-full md:w-auto">
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
              
              <div className={`grid gap-6 ${
                viewMode === 'grid' 
                  ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
                  : 'grid-cols-1'
              }`}>
                {sortedAgents.map(agent => (
                  <AgentCard 
                    key={agent.id} 
                    agent={agent} 
                    category={category}
                  />
                ))}
              </div>
              
              {sortedAgents.length === 0 && (
                <div className="text-center py-16">
                  <h3 className="text-xl font-semibold mb-2">No agents found</h3>
                  <p className="text-neutral-600">There are no agents in this category yet.</p>
                </div>
              )}
            </div>
          </>
        ) : (
          <div className="container mx-auto px-4 py-16 text-center">
            <h2 className="text-2xl font-bold mb-2">Category Not Found</h2>
            <p className="text-neutral-600">The category you're looking for doesn't exist or has been removed.</p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
