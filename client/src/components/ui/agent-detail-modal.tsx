import { useState } from 'react';
import { useLocation } from 'wouter';
import { 
  Dialog, 
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  X, Star, StarHalf, Globe, Zap, Calendar, 
  CheckCircle, User, Pencil, GraduationCap,
  ExternalLink, BookmarkPlus
} from 'lucide-react';
import { calculateDisplayRating, formatUserCount } from '@/lib/mock-data';
import type { Agent, AgentFeature, AgentUseCase, Category } from '@shared/schema';

interface AgentDetailModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  agent?: Agent;
  features?: AgentFeature[];
  useCases?: AgentUseCase[];
  category?: Category;
}

export function AgentDetailModal({ 
  open, 
  onOpenChange, 
  agent, 
  features = [], 
  useCases = [],
  category
}: AgentDetailModalProps) {
  const [, navigate] = useLocation();
  
  if (!agent) return null;
  
  const displayRating = calculateDisplayRating(agent.rating);
  const fullStars = Math.floor(displayRating);
  const hasHalfStar = displayRating % 1 >= 0.5;
  const formattedDate = agent.addedDate ? new Date(agent.addedDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  }) : '';
  
  // Match Lucide icon components based on iconName in useCases
  const getUseCaseIcon = (iconName: string) => {
    switch (iconName) {
      case 'briefcase': return <User className="mt-1 mr-2" />;
      case 'pen-tool': return <Pencil className="mt-1 mr-2" />;
      case 'book-open': return <GraduationCap className="mt-1 mr-2" />;
      default: return <User className="mt-1 mr-2" />;
    }
  };
  
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl w-[95vw] max-h-[90vh] overflow-y-auto p-3 sm:p-6">
        <DialogHeader className="p-0 sm:p-0">
          <DialogTitle className="sr-only">Agent Details</DialogTitle>
          <DialogDescription className="sr-only">
            Detailed information about {agent.name} including features, use cases, and pricing
          </DialogDescription>
          <DialogClose 
            className="absolute top-2 right-2 sm:top-4 sm:right-4 text-neutral-500 hover:text-neutral-800 transition-colors"
            onClick={() => onOpenChange(false)}
          >
            <X className="h-4 w-4 sm:h-5 sm:w-5" />
          </DialogClose>
        </DialogHeader>
        
        <div className="flex flex-col md:flex-row gap-4 sm:gap-6 mt-2 sm:mt-0">
          <div className="md:w-1/3">
            <div className="aspect-square bg-neutral-200 rounded-lg overflow-hidden">
              <img src={agent.imageUrl} alt={agent.name} className="w-full h-full object-cover" />
            </div>
            
            <div className="mt-3 sm:mt-4">
              <div className="flex items-center justify-between">
                {category && (
                  <Badge 
                    variant="outline" 
                    className="bg-purple-100 text-purple-700 border-0 text-xs font-medium"
                  >
                    {category.name}
                  </Badge>
                )}
                
                <div className="flex items-center">
                  {[...Array(fullStars)].map((_, i) => (
                    <Star key={`star-${i}`} className="h-3 w-3 sm:h-4 sm:w-4 text-amber-500 fill-amber-500" />
                  ))}
                  
                  {hasHalfStar && (
                    <StarHalf className="h-3 w-3 sm:h-4 sm:w-4 text-amber-500 fill-amber-500" />
                  )}
                  
                  {[...Array(5 - fullStars - (hasHalfStar ? 1 : 0))].map((_, i) => (
                    <Star key={`empty-star-${i}`} className="h-3 w-3 sm:h-4 sm:w-4 text-neutral-300" />
                  ))}
                  
                  <span className="text-xs text-neutral-500 ml-1">{displayRating.toFixed(1)}</span>
                </div>
              </div>
              
              <div className="mt-3 sm:mt-4 space-y-2 sm:space-y-3">
                <div className="flex items-center text-xs sm:text-sm">
                  <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-neutral-500" />
                  <a href={agent.websiteUrl} target="_blank" rel="noopener noreferrer" className="text-purple-700 hover:underline ml-2 truncate">
                    {new URL(agent.websiteUrl).hostname}
                  </a>
                </div>
                
                <div className="flex items-center text-xs sm:text-sm">
                  <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-neutral-500" />
                  <span className="ml-2">{formatUserCount(agent.userCount)} users</span>
                </div>
                
                <div className="flex items-center text-xs sm:text-sm">
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-neutral-500" />
                  <span className="ml-2">Added on {formattedDate}</span>
                </div>
              </div>
              
              <div className="mt-3 sm:mt-5">
                <h4 className="font-medium text-xs sm:text-sm mb-1 sm:mb-2">Pricing</h4>
                <div className="space-y-1 sm:space-y-2">
                  {agent.isFree && (
                    <div className="flex items-center">
                      <CheckCircle className="text-green-600 w-3 h-3 sm:w-4 sm:h-4" />
                      <span className="text-xs sm:text-sm ml-2">Free tier available</span>
                    </div>
                  )}
                  
                  {agent.premiumPrice && (
                    <div className="flex items-center">
                      <CheckCircle className="text-green-600 w-3 h-3 sm:w-4 sm:h-4" />
                      <span className="text-xs sm:text-sm ml-2">Premium: {agent.premiumPrice}</span>
                    </div>
                  )}
                  
                  {agent.enterprisePrice && (
                    <div className="flex items-center">
                      <CheckCircle className="text-green-600 w-3 h-3 sm:w-4 sm:h-4" />
                      <span className="text-xs sm:text-sm ml-2">Enterprise: {agent.enterprisePrice}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-2/3">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-neutral-800 mb-1 sm:mb-2">{agent.name}</h2>
            <p className="text-neutral-600 text-sm sm:text-base mb-4 sm:mb-6">{agent.description}</p>
            
            <div className="space-y-4 sm:space-y-6">
              {features.length > 0 && (
                <div>
                  <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">Features</h3>
                  <ul className="space-y-1 sm:space-y-2">
                    {features.map(feature => (
                      <li key={feature.id} className="flex items-start">
                        <CheckCircle className="text-green-600 mt-0.5 sm:mt-1 mr-1 sm:mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                        <span className="text-sm sm:text-base">{feature.feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {useCases.length > 0 && (
                <div>
                  <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">Use Cases</h3>
                  <ul className="space-y-1 sm:space-y-2">
                    {useCases.map(useCase => (
                      <li key={useCase.id} className="flex items-start">
                        <span className={useCase.iconColor}>
                          {getUseCaseIcon(useCase.icon)}
                        </span>
                        <div>
                          <span className="font-medium text-sm sm:text-base">{useCase.title}</span>
                          <p className="text-xs sm:text-sm text-neutral-600">{useCase.description}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              <div className="pt-3 sm:pt-4 border-t border-neutral-200">
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                  <Button 
                    className="bg-purple-700 hover:bg-purple-800 text-white text-xs sm:text-sm h-8 sm:h-10" 
                    asChild
                  >
                    <a href={agent.websiteUrl} target="_blank" rel="noopener noreferrer">
                      Visit Website
                      <ExternalLink className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                    </a>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="border-purple-700 text-purple-700 hover:bg-purple-50 text-xs sm:text-sm h-8 sm:h-10"
                  >
                    Save to Favorites
                    <BookmarkPlus className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default AgentDetailModal;
