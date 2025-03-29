import Header from '@/components/ui/header';
import Footer from '@/components/ui/footer';
import { CalendarIcon, ChevronRightIcon } from 'lucide-react';

// Sample news data
const newsArticles = [
  {
    id: 1,
    title: "OpenAI Unveils New GPT-5 Model with Enhanced Reasoning Capabilities",
    excerpt: "OpenAI has announced the release of its latest language model, GPT-5, featuring significantly improved reasoning and problem-solving abilities.",
    date: "Recently published",
    author: "Sarah Johnson",
    category: "New Releases",
    image: "https://images.unsplash.com/photo-1677442135968-6d89469c787e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80"
  },
  {
    id: 2,
    title: "Microsoft Integrates AI Agents Across Its Office Suite",
    excerpt: "Microsoft has announced a major update to its Office suite, integrating AI agents that can assist with document creation, data analysis, and presentation design.",
    date: "Recently published",
    author: "David Chen",
    category: "Industry News",
    image: "https://images.unsplash.com/photo-1673027331881-948e5ade353e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 3,
    title: "AI Agent Ethics Summit Calls for New Industry Standards",
    excerpt: "A recent summit of AI researchers and ethicists has called for the establishment of new industry standards for the development and deployment of AI agents.",
    date: "Recently published",
    author: "Elena Rodriguez",
    category: "Ethics & Regulation",
    image: "https://images.unsplash.com/photo-1680262928403-c623f2c5052d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 4,
    title: "Midjourney V6 Pushes Boundaries of AI-Generated Artwork",
    excerpt: "Midjourney has released version 6 of its AI image generator, featuring unprecedented detail, composition control, and text rendering capabilities.",
    date: "Recently published",
    author: "Michael Liu",
    category: "New Releases",
    image: "https://images.unsplash.com/photo-1675740575307-1f5b78e1e06f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 5,
    title: "Study Shows 65% of Businesses Now Use AI Agents for Customer Support",
    excerpt: "A new industry report reveals that nearly two-thirds of businesses have implemented AI agents to handle customer support inquiries, up from 40% last year.",
    date: "Recently published",
    author: "Amanda Wilson",
    category: "Research & Trends",
    image: "https://images.unsplash.com/photo-1677495559639-108a2250683a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
  },
  {
    id: 6,
    title: "European Union Proposes New AI Agent Regulations",
    excerpt: "The European Union has proposed new regulations for AI agents, focusing on transparency, accountability, and the protection of user data.",
    date: "Recently published",
    author: "Thomas Weber",
    category: "Ethics & Regulation",
    image: "https://images.unsplash.com/photo-1679402559694-0c1b79ba96c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  }
];

// Categories for filtering
const categories = [
  "All",
  "New Releases",
  "Industry News",
  "Ethics & Regulation",
  "Research & Trends",
  "Case Studies"
];

export default function News() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-purple-700 to-indigo-800 py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">AI News</h1>
            <p className="text-white/80 max-w-3xl mb-6">
              Stay up-to-date with the latest developments in artificial intelligence, new agent releases, and industry trends.
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar with categories */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-5 sticky top-8">
                <h2 className="text-lg font-bold mb-4 text-gray-800">Categories</h2>
                <div className="space-y-2">
                  {categories.map((category, index) => (
                    <button 
                      key={index} 
                      className={`block w-full text-left py-2 px-3 rounded transition-colors ${index === 0 ? 'bg-purple-100 text-purple-800' : 'hover:bg-gray-100'}`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
                
                <h2 className="text-lg font-bold mt-8 mb-4 text-gray-800">Recent Posts</h2>
                <div className="space-y-4">
                  {newsArticles.slice(0, 3).map(article => (
                    <div key={article.id} className="flex items-start space-x-2">
                      <div className="w-16 h-16 rounded overflow-hidden flex-shrink-0">
                        <img 
                          src={article.image} 
                          alt={article.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-sm font-medium line-clamp-2 hover:text-purple-700 cursor-pointer">
                          {article.title}
                        </h3>
                        <p className="text-xs text-gray-500 mt-1">{article.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Main content */}
            <div className="lg:col-span-3">
              <div className="grid md:grid-cols-2 gap-8">
                {newsArticles.map(article => (
                  <div key={article.id} className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 transition-all hover:shadow-md">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={article.image} 
                        alt={article.title}
                        className="w-full h-full object-cover transition-transform hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center space-x-2 mb-3">
                        <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                          {article.category}
                        </span>
                        <div className="flex items-center text-gray-500 text-sm">
                          <CalendarIcon className="h-3 w-3 mr-1" />
                          {article.date}
                        </div>
                      </div>
                      
                      <h2 className="text-xl font-bold mb-3 text-gray-800 hover:text-purple-700 cursor-pointer">
                        {article.title}
                      </h2>
                      
                      <p className="text-gray-600 mb-4">
                        {article.excerpt}
                      </p>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">By {article.author}</span>
                        <button className="flex items-center text-purple-700 font-medium hover:text-purple-900">
                          Read More <ChevronRightIcon className="h-4 w-4 ml-1" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Pagination */}
              <div className="flex justify-center mt-12">
                <nav className="flex items-center space-x-2">
                  <button className="px-3 py-2 rounded-md text-sm font-medium bg-white border border-gray-300 text-gray-500 hover:bg-gray-50">
                    Previous
                  </button>
                  <button className="px-3 py-2 rounded-md text-sm font-medium bg-purple-600 text-white">
                    1
                  </button>
                  <button className="px-3 py-2 rounded-md text-sm font-medium bg-white border border-gray-300 text-gray-700 hover:bg-gray-50">
                    2
                  </button>
                  <button className="px-3 py-2 rounded-md text-sm font-medium bg-white border border-gray-300 text-gray-700 hover:bg-gray-50">
                    3
                  </button>
                  <span className="px-3 py-2 text-gray-500">...</span>
                  <button className="px-3 py-2 rounded-md text-sm font-medium bg-white border border-gray-300 text-gray-700 hover:bg-gray-50">
                    8
                  </button>
                  <button className="px-3 py-2 rounded-md text-sm font-medium bg-white border border-gray-300 text-gray-700 hover:bg-gray-50">
                    Next
                  </button>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}