import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import Header from '@/components/ui/header';
import Footer from '@/components/ui/footer';
import AgentCard from '@/components/ui/agent-card';
import SearchBar from '@/components/ui/search-bar';
import { Button } from '@/components/ui/button';
import { Grid, List, LayoutGrid, Loader2 } from 'lucide-react';
import { categoriesMockData, agentsMockData } from '@/lib/mock-data';
import type { Category, Agent } from '@shared/schema';

export default function NewAdditions() {
  const [agents, setAgents] = useState<Agent[]>([]);
  const [categories, setCategories] = useState<Category[]>(categoriesMockData);
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  
  // In a real app, we would fetch this data from the API
  /*
  const { data: newAgentsData, isLoading } = useQuery({
    queryKey: ['/api/agents', { sortBy: 'newest', limit: 20 }],
  });
  */
  
  // Using mock data instead
  useEffect(() => {
    // Simulate API loading delay
    setLoading(true);
    setTimeout(() => {
      // Sort agents by date added (newest first) and take top 20
      const newest = [...agentsMockData]
        .sort((a, b) => {
          const dateA = a.addedDate ? new Date(a.addedDate).getTime() : 0;
          const dateB = b.addedDate ? new Date(b.addedDate).getTime() : 0;
          return dateB - dateA;
        })
        .slice(0, 20);
      
      setAgents(newest);
      setLoading(false);
    }, 500);
  }, []);
  
  // Find category for each agent
  const getCategoryForAgent = (agent: Agent) => {
    return categories.find(c => c.id === agent.categoryId);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-purple-700 to-indigo-800 py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">New AI Agent Additions</h1>
            <p className="text-white/80 max-w-3xl mb-6">
              Check out the latest AI agents added to our directory and be among the first to try these cutting-edge tools.
            </p>
            <SearchBar className="max-w-xl" />
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-6 flex-col md:flex-row">
            <div className="mb-4 md:mb-0">
              <h2 className="text-xl font-semibold">
                {agents.length} Recently Added AI Agents
              </h2>
            </div>
            
            <div className="flex items-center space-x-3">
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
                {agents.map(agent => (
                  <AgentCard 
                    key={agent.id} 
                    agent={agent} 
                    category={getCategoryForAgent(agent)}
                  />
                ))}
              </div>
              
              {agents.length === 0 && (
                <div className="text-center py-16">
                  <h3 className="text-xl font-semibold mb-2">No new agents found</h3>
                  <p className="text-neutral-600">
                    We're working on adding new agents to our directory. Check back soon!
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