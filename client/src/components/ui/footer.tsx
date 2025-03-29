import { Link } from 'wouter';
import { Bot, Download, ChevronRight } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

// Full desktop navigation links
const mainLinks = [
  { title: 'Categories', href: '/categories' },
  { title: 'Top Rated', href: '/top-rated' },
  { title: 'New Additions', href: '/new-additions' },
  { title: 'Submit Agent', href: '/submit' },
  { title: 'About', href: '/about' },
  { title: 'Contact', href: '/contact' },
];

const resourceLinks = [
  { title: 'News', href: '/news' },
  { title: 'Tutorials', href: '/tutorials' },
  { title: 'Reviews', href: '/reviews' },
  { title: 'Comparisons', href: '/comparisons' },
  { title: 'Guides', href: '/guides' },
];

const legalLinks = [
  { title: 'Terms', href: '/terms' },
  { title: 'Privacy', href: '/privacy' },
  { title: 'Cookies', href: '/cookies' },
];

// Reduced mobile links
const mobileLinks = [
  { title: 'Categories', href: '/categories' },
  { title: 'Top Rated', href: '/top-rated' },
  { title: 'Submit', href: '/submit' },
];

export function Footer() {
  const isMobile = useIsMobile();

  return (
    <footer className="bg-neutral-800 text-white py-6">
      <div className="container mx-auto px-4">
        {/* Mobile footer (simplified) */}
        {isMobile ? (
          <>
            <div className="flex items-center justify-between mb-4">
              <Link href="/" className="text-xl font-bold flex items-center">
                <Bot className="mr-2 text-pink-600" />
                <span>AIAgentsHub</span>
              </Link>
              
              <Link
                href="/download" 
                className="flex items-center gap-1 text-xs bg-purple-700 hover:bg-purple-600 text-white px-2 py-1 rounded transition-colors"
              >
                <Download size={14} />
                <span>Source</span>
              </Link>
            </div>
            
            <div className="flex justify-between">
              <div className="flex gap-3 mb-4">
                {mobileLinks.map((link, index) => (
                  <Link key={index} href={link.href} className="text-neutral-300 hover:text-white text-xs transition-colors flex items-center">
                    <span>{link.title}</span>
                    <ChevronRight size={12} className="ml-1" />
                  </Link>
                ))}
              </div>
            </div>
            
            <div className="border-t border-neutral-700 pt-3 flex justify-between items-center">
              <p className="text-neutral-500 text-xs">&copy; {new Date().getFullYear()} AIAgentsHub</p>
              
              <div className="flex gap-3">
                {legalLinks.map((link, index) => (
                  <Link key={index} href={link.href} className="text-neutral-500 hover:text-neutral-300 text-xs transition-colors">
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>
          </>
        ) : (
          // Desktop footer (full)
          <>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div>
                <Link href="/" className="text-xl font-bold flex items-center mb-4">
                  <Bot className="mr-2 text-pink-600" />
                  <span>AIAgentsHub</span>
                </Link>
                <p className="text-neutral-400 text-sm mb-4">Discover and compare the best AI agents and tools to enhance your productivity.</p>
                <Link
                  href="/download" 
                  className="flex items-center gap-1 text-sm bg-purple-700 hover:bg-purple-600 text-white px-4 py-2 rounded transition-colors w-fit"
                >
                  <Download size={16} />
                  <span>Download Source</span>
                </Link>
              </div>
              
              <div>
                <h3 className="font-semibold text-white mb-4">Navigation</h3>
                <ul className="space-y-2">
                  {mainLinks.map((link, index) => (
                    <li key={index}>
                      <Link href={link.href} className="text-neutral-300 hover:text-white text-sm transition-colors">
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-white mb-4">Resources</h3>
                <ul className="space-y-2">
                  {resourceLinks.map((link, index) => (
                    <li key={index}>
                      <Link href={link.href} className="text-neutral-300 hover:text-white text-sm transition-colors">
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-white mb-4">Contact</h3>
                <p className="text-neutral-300 text-sm mb-2">Questions or feedback?</p>
                <Link href="/contact" className="text-purple-400 hover:text-purple-300 text-sm mb-6 inline-block">
                  Contact us
                </Link>
                
                <h3 className="font-semibold text-white mb-2 mt-6">Legal</h3>
                <div className="flex gap-4">
                  {legalLinks.map((link, index) => (
                    <Link key={index} href={link.href} className="text-neutral-400 hover:text-neutral-300 text-sm transition-colors">
                      {link.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="pt-6 border-t border-neutral-700 flex justify-between items-center">
              <p className="text-neutral-500 text-sm">&copy; {new Date().getFullYear()} AIAgentsHub. All rights reserved.</p>
              
              <p className="text-neutral-500 text-sm">Built with ❤️ for AI enthusiasts</p>
            </div>
          </>
        )}
      </div>
    </footer>
  );
}

export default Footer;
