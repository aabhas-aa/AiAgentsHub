import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useRoute, useLocation } from 'wouter';
import Header from '@/components/ui/header';
import Footer from '@/components/ui/footer';
import AgentDetailModal from '@/components/ui/agent-detail-modal';
import { Loader2 } from 'lucide-react';
import { agentsMockData, categoriesMockData, featuresMockData, useCasesMockData } from '@/lib/mock-data';
import type { Agent, Category, AgentFeature, AgentUseCase } from '@shared/schema';

export default function AgentDetail() {
  const [, params] = useRoute('/agent/:slug');
  const slug = params?.slug;
  const [, navigate] = useLocation();
  
  const [agent, setAgent] = useState<Agent | undefined>();
  const [category, setCategory] = useState<Category | undefined>();
  const [features, setFeatures] = useState<AgentFeature[]>([]);
  const [useCases, setUseCases] = useState<AgentUseCase[]>([]);
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(true);
  
  // In a real app, we would fetch this data from the API
  /*
  const { data, isLoading, error } = useQuery({
    queryKey: [`/api/agents/${slug}`],
    enabled: !!slug,
  });
  */
  
  // Using mock data instead
  useEffect(() => {
    if (slug) {
      // Simulate API loading delay
      setLoading(true);
      setTimeout(() => {
        const foundAgent = agentsMockData.find(a => a.slug === slug);
        setAgent(foundAgent);
        
        if (foundAgent) {
          const foundCategory = categoriesMockData.find(c => c.id === foundAgent.categoryId);
          setCategory(foundCategory);
          
          const agentFeatures = featuresMockData.filter(f => f.agentId === foundAgent.id);
          setFeatures(agentFeatures);
          
          const agentUseCases = useCasesMockData.filter(u => u.agentId === foundAgent.id);
          setUseCases(agentUseCases);
        }
        
        setLoading(false);
      }, 500);
    }
  }, [slug]);
  
  // Handle modal close by navigating back to the previous page or home
  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (!open) {
      // Navigate back or to home page when dialog is closed
      navigate('/');
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        {loading ? (
          <div className="flex items-center justify-center min-h-[50vh]">
            <Loader2 className="h-8 w-8 animate-spin text-purple-700" />
          </div>
        ) : agent ? (
          <AgentDetailModal 
            open={isOpen}
            onOpenChange={handleOpenChange}
            agent={agent}
            category={category}
            features={features}
            useCases={useCases}
          />
        ) : (
          <div className="text-center py-16">
            <h2 className="text-2xl font-bold mb-2">Agent Not Found</h2>
            <p className="text-neutral-600">The agent you're looking for doesn't exist or has been removed.</p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
