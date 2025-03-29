import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger 
} from '@/components/ui/sheet';
import { Menu, X, Bot } from 'lucide-react';

const navItems = [
  { title: 'Home', href: '/' },
  { title: 'Categories', href: '/categories' },
  { title: 'Top Rated', href: '/top-rated' },
  { title: 'New Additions', href: '/new-additions' },
  { title: 'Submit Agent', href: '/submit' }
];

export function Header() {
  const [location] = useLocation();
  const [open, setOpen] = useState(false);
  
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold text-purple-700 flex items-center">
            <Bot className="mr-2 text-pink-600" />
            <span>AIAgentsHub</span>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link 
              key={item.href}
              href={item.href} 
              className={`font-medium ${
                location === item.href 
                  ? 'text-purple-700' 
                  : 'text-neutral-700 hover:text-purple-700'
              } transition-colors`}
            >
              {item.title}
            </Link>
          ))}
        </nav>
        
        <div className="flex items-center">
          <Button className="hidden md:block" variant="default">
            Sign In
          </Button>
          
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] pr-0">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center">
                  <Bot className="mr-2 text-pink-600" />
                  <span className="font-bold text-lg">AIAgentsHub</span>
                </div>
              </div>
              
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link 
                    key={item.href}
                    href={item.href} 
                    onClick={() => setOpen(false)}
                    className={`font-medium text-lg py-2 ${
                      location === item.href 
                        ? 'text-purple-700' 
                        : 'text-neutral-700 hover:text-purple-700'
                    } transition-colors`}
                  >
                    {item.title}
                  </Link>
                ))}
                
                <Button className="w-full mt-4">
                  Sign In
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

export default Header;
