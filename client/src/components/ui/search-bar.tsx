import { useState } from 'react';
import { useLocation } from 'wouter';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

interface SearchBarProps {
  className?: string;
  placeholder?: string;
  initialValue?: string;
}

export function SearchBar({ 
  className = '',
  placeholder = 'Search for AI agents, categories, or tasks...',
  initialValue = ''
}: SearchBarProps) {
  const [searchQuery, setSearchQuery] = useState(initialValue);
  const [, navigate] = useLocation();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className={`relative ${className}`}>
      <Input 
        type="text" 
        placeholder={placeholder}
        className="w-full px-3 sm:px-4 py-1 sm:py-2 pr-8 sm:pr-10 rounded-lg border-neutral-300 text-xs sm:text-sm"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <Button 
        type="submit"
        className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-purple-700 hover:bg-purple-800 text-white p-1 rounded-md transition-colors h-6 w-6 sm:h-8 sm:w-8"
        size="icon"
      >
        <Search className="h-3 w-3 sm:h-4 sm:w-4" />
      </Button>
    </form>
  );
}

export default SearchBar;
