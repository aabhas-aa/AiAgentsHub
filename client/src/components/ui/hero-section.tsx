import { useState } from 'react';
import { useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

const popularSearches = [
  { title: 'Chatbots', href: '/category/chatbots' },
  { title: 'Image Generation', href: '/category/image-generation' },
  { title: 'Writing', href: '/category/writing' },
  { title: 'Productivity', href: '/category/productivity' }
];

export function HeroSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [, navigate] = useLocation();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <section className="relative bg-gradient-to-r from-purple-700 to-indigo-800 text-white py-10 sm:py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-6">Discover the Best AI Agents for Your Needs</h1>
          <p className="text-base sm:text-lg md:text-xl opacity-90 mb-6 sm:mb-10">
            Explore our curated directory of powerful AI tools that can help you work smarter, not harder.
          </p>
          
          {/* Search Bar */}
          <form onSubmit={handleSearch} className="relative mx-auto max-w-xl sm:max-w-2xl">
            <Input 
              type="text" 
              placeholder="Search for AI agents, categories, or tasks..." 
              className="w-full px-4 sm:px-5 py-3 sm:py-6 rounded-full text-neutral-800 shadow-lg focus:outline-none focus:ring-2 focus:ring-pink-600 text-sm sm:text-base"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button 
              type="submit"
              className="absolute right-1 sm:right-2 top-1/2 transform -translate-y-1/2 bg-pink-600 hover:bg-pink-700 text-white p-1 sm:p-2 rounded-full transition-colors"
              size="icon"
            >
              <Search className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </form>
          
          {/* Top Search Terms */}
          <div className="mt-4 sm:mt-6 flex flex-wrap justify-center gap-1 sm:gap-2">
            <span className="text-xs sm:text-sm">Popular searches:</span>
            {popularSearches.map((search) => (
              <a 
                key={search.href}
                href={search.href} 
                className="text-xs sm:text-sm bg-white/20 hover:bg-white/30 px-2 sm:px-3 py-1 rounded-full transition-colors"
              >
                {search.title}
              </a>
            ))}
          </div>
        </div>
      </div>
      
      {/* Background Elements */}
      <div className="absolute bottom-0 left-0 w-full h-10 sm:h-16 bg-neutral-100" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0)' }}></div>
    </section>
  );
}

export default HeroSection;
