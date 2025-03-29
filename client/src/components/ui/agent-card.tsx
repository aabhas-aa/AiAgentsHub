import { Link } from 'wouter';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, StarHalf, Zap, ExternalLink } from 'lucide-react';
import type { Agent, Category } from '@shared/schema';
import { calculateDisplayRating, formatUserCount } from '@/lib/mock-data';

interface AgentCardProps {
  agent: Agent;
  category?: Category;
}

export function AgentCard({ agent, category }: AgentCardProps) {
  const displayRating = calculateDisplayRating(agent.rating);
  const fullStars = Math.floor(displayRating);
  const hasHalfStar = displayRating % 1 >= 0.5;
  
  return (
    <Link href={`/agent/${agent.slug}`}>
      <Card className="agent-card bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-neutral-200 h-full hover:translate-y-[-5px]">
        <div className="h-40 sm:h-48 bg-neutral-200 relative overflow-hidden">
          <img src={agent.imageUrl} alt={agent.name} className="w-full h-full object-cover" />
          
          {agent.featured && (
            <div className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-pink-600 text-white text-xs font-semibold px-2 py-1 rounded-md">
              Featured
            </div>
          )}
          
          {agent.isNew && !agent.featured && (
            <div className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded-md">
              New
            </div>
          )}
        </div>
        
        <CardContent className="p-3 sm:p-5">
          <div className="flex flex-wrap items-center mb-2 sm:mb-3 gap-2">
            {category ? (
              <Badge 
                variant="outline" 
                className={`bg-purple-100 text-purple-700 border-0 text-xs font-medium`}
              >
                {category.name}
              </Badge>
            ) : null}
            
            <div className="ml-auto flex items-center shrink-0">
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
          
          <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2 line-clamp-1">{agent.name}</h3>
          <p className="text-neutral-600 text-xs sm:text-sm mb-2 sm:mb-3 line-clamp-3">{agent.description}</p>
        </CardContent>
        
        <CardFooter className="px-3 sm:px-5 pb-3 sm:pb-5 pt-0">
          <div className="flex items-center justify-between w-full">
            <span className="text-xs text-neutral-500">
              <Zap className="h-3 w-3 text-amber-500 inline mr-1" />
              {formatUserCount(agent.userCount)} users
            </span>
            <span className="text-purple-700 text-xs sm:text-sm font-medium flex items-center">
              View Details
              <ExternalLink className="ml-1 h-3 w-3" />
            </span>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}

export default AgentCard;
