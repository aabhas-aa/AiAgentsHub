import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';

export function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      toast({
        title: "Email is required",
        description: "Please enter your email address to subscribe.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Subscription successful!",
        description: "Thank you for subscribing to our newsletter.",
      });
      setEmail('');
      setIsSubmitting(false);
    }, 1000);
  };
  
  return (
    <section className="py-10 sm:py-12 md:py-16 bg-gradient-to-r from-indigo-800 to-purple-700 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-4">Stay Updated on AI Advancements</h2>
          <p className="text-white/90 text-sm sm:text-base mb-6 sm:mb-8">Subscribe to our newsletter to receive the latest AI agent updates, reviews, and exclusive offers.</p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-xs sm:max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-3 py-2 sm:px-4 sm:py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600/50 text-neutral-800 text-sm sm:text-base"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button 
              type="submit"
              className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg font-medium transition-colors whitespace-nowrap text-sm sm:text-base"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Subscribing..." : "Subscribe"}
            </Button>
          </form>
          
          <p className="text-white/70 text-xs sm:text-sm mt-3 sm:mt-4">We respect your privacy. Unsubscribe at any time.</p>
        </div>
      </div>
    </section>
  );
}

export default NewsletterSection;
