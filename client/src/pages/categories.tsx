import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import Header from '@/components/ui/header';
import Footer from '@/components/ui/footer';
import CategoryCard from '@/components/ui/category-card';
import SearchBar from '@/components/ui/search-bar';
import { Loader2 } from 'lucide-react';
import { categoriesMockData } from '@/lib/mock-data';
import type { Category } from '@shared/schema';

export default function Categories() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  
  // In a real app, we would fetch this data from the API
  /*
  const { data: categoriesData, isLoading } = useQuery({
    queryKey: ['/api/categories'],
  });
  */
  
  // Using mock data instead
  useEffect(() => {
    // Simulate API loading delay
    setLoading(true);
    setTimeout(() => {
      setCategories(categoriesMockData);
      setLoading(false);
    }, 500);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-purple-700 to-indigo-800 py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">All Categories</h1>
            <p className="text-white/80 max-w-3xl mb-6">
              Browse our collection of AI agent categories to find the perfect tools for your specific needs.
            </p>
            <SearchBar className="max-w-xl" />
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-12">
          {loading ? (
            <div className="flex items-center justify-center py-16">
              <Loader2 className="h-8 w-8 animate-spin text-purple-700" />
            </div>
          ) : (
            <>
              <div className="text-center mb-10">
                <h2 className="text-2xl font-bold text-neutral-800 mb-2">
                  {categories.length} AI Categories
                </h2>
                <p className="text-neutral-600 max-w-2xl mx-auto">
                  Each category contains hand-picked AI agents designed to solve specific problems.
                </p>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5">
                {categories.map(category => (
                  <CategoryCard key={category.id} category={category} />
                ))}
              </div>
              
              {categories.length === 0 && (
                <div className="text-center py-16">
                  <h3 className="text-xl font-semibold mb-2">No categories found</h3>
                  <p className="text-neutral-600">
                    We're working on adding categories to our directory.
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