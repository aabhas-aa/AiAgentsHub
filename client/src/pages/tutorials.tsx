import Header from '@/components/ui/header';
import Footer from '@/components/ui/footer';
import { CalendarIcon, Clock, PlayCircle, BookOpen, ChevronRightIcon } from 'lucide-react';

// Sample tutorials data
const tutorials = [
  {
    id: 1,
    title: "Getting Started with ChatGPT: A Beginner's Guide",
    excerpt: "Learn how to set up and effectively use ChatGPT for various tasks, from writing assistance to creative brainstorming.",
    date: "Recently published",
    author: "James Wilson",
    category: "Beginner",
    duration: "15 min read",
    image: "https://images.unsplash.com/photo-1677442135968-6d89469c787e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
    type: "article"
  },
  {
    id: 2,
    title: "Advanced Prompt Engineering for AI Agents",
    excerpt: "Master the art of crafting effective prompts to get the best results from language models like GPT-4 and Claude.",
    date: "Recently published",
    author: "Sophia Chen",
    category: "Advanced",
    duration: "25 min read",
    image: "https://images.unsplash.com/photo-1673027331881-948e5ade353e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    type: "article"
  },
  {
    id: 3,
    title: "Creating Stunning Images with Midjourney",
    excerpt: "This step-by-step video tutorial shows you how to create beautiful AI-generated artwork using Midjourney.",
    date: "Recently published",
    author: "Michael Adams",
    category: "Intermediate",
    duration: "18 min video",
    image: "https://images.unsplash.com/photo-1675740575307-1f5b78e1e06f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    type: "video"
  },
  {
    id: 4,
    title: "Building Your First AI Agent with Langchain",
    excerpt: "Learn how to use Langchain to create custom AI agents that can perform complex tasks by chaining together multiple capabilities.",
    date: "Recently published",
    author: "Dr. Rachel Kim",
    category: "Advanced",
    duration: "45 min read",
    image: "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    type: "guide"
  },
  {
    id: 5,
    title: "Integrating AI Agents into Your Workflow",
    excerpt: "Discover strategies for effectively incorporating AI tools into your daily work to boost productivity and creativity.",
    date: "Recently published",
    author: "Alex Johnson",
    category: "Intermediate",
    duration: "12 min read",
    image: "https://images.unsplash.com/photo-1677495559639-108a2250683a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
    type: "article"
  },
  {
    id: 6,
    title: "AI for Content Creation: A Complete Walkthrough",
    excerpt: "A comprehensive video guide to using AI agents for content creation, including writing, editing, and image generation.",
    date: "Recently published",
    author: "Emily Rodriguez",
    category: "Beginner",
    duration: "32 min video",
    image: "https://images.unsplash.com/photo-1679402559694-0c1b79ba96c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    type: "video"
  }
];

// Categories for filtering
const categories = [
  "All",
  "Beginner",
  "Intermediate",
  "Advanced"
];

// Types for filtering
const types = [
  "All",
  "Article",
  "Video",
  "Guide"
];

export default function Tutorials() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-purple-700 to-indigo-800 py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Tutorials & Guides</h1>
            <p className="text-white/80 max-w-3xl mb-6">
              Learn how to make the most of AI agents with our collection of tutorials, guides, and best practices.
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar with filters */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-5 sticky top-8">
                <div className="mb-6">
                  <h2 className="text-lg font-bold mb-4 text-gray-800">Difficulty Level</h2>
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
                </div>
                
                <div className="mb-6">
                  <h2 className="text-lg font-bold mb-4 text-gray-800">Content Type</h2>
                  <div className="space-y-2">
                    {types.map((type, index) => (
                      <button 
                        key={index} 
                        className={`block w-full text-left py-2 px-3 rounded transition-colors ${index === 0 ? 'bg-purple-100 text-purple-800' : 'hover:bg-gray-100'}`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h2 className="text-lg font-bold mb-4 text-gray-800">Popular Tags</h2>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-1 rounded-full hover:bg-gray-200 cursor-pointer">
                      ChatGPT
                    </span>
                    <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-1 rounded-full hover:bg-gray-200 cursor-pointer">
                      Prompts
                    </span>
                    <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-1 rounded-full hover:bg-gray-200 cursor-pointer">
                      Midjourney
                    </span>
                    <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-1 rounded-full hover:bg-gray-200 cursor-pointer">
                      DALL-E
                    </span>
                    <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-1 rounded-full hover:bg-gray-200 cursor-pointer">
                      Productivity
                    </span>
                    <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-1 rounded-full hover:bg-gray-200 cursor-pointer">
                      Workflow
                    </span>
                    <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-1 rounded-full hover:bg-gray-200 cursor-pointer">
                      GPT-4
                    </span>
                    <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-1 rounded-full hover:bg-gray-200 cursor-pointer">
                      Image Generation
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Main content */}
            <div className="lg:col-span-3">
              <div className="grid md:grid-cols-2 gap-8">
                {tutorials.map(tutorial => (
                  <div key={tutorial.id} className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 transition-all hover:shadow-md">
                    <div className="h-48 overflow-hidden relative">
                      <img 
                        src={tutorial.image} 
                        alt={tutorial.title}
                        className="w-full h-full object-cover transition-transform hover:scale-105"
                      />
                      {tutorial.type === 'video' && (
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                          <PlayCircle className="h-16 w-16 text-white opacity-80" />
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <div className="flex items-center space-x-2 mb-3">
                        <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full 
                          ${tutorial.category === 'Beginner' ? 'bg-green-100 text-green-800' : 
                            tutorial.category === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' : 
                            'bg-red-100 text-red-800'}`}
                        >
                          {tutorial.category}
                        </span>
                        <div className="flex items-center text-gray-500 text-sm">
                          {tutorial.type === 'article' ? (
                            <BookOpen className="h-3 w-3 mr-1" />
                          ) : tutorial.type === 'video' ? (
                            <PlayCircle className="h-3 w-3 mr-1" />
                          ) : (
                            <BookOpen className="h-3 w-3 mr-1" />
                          )}
                          {tutorial.type.charAt(0).toUpperCase() + tutorial.type.slice(1)}
                        </div>
                      </div>
                      
                      <h2 className="text-xl font-bold mb-3 text-gray-800 hover:text-purple-700 cursor-pointer">
                        {tutorial.title}
                      </h2>
                      
                      <p className="text-gray-600 mb-4">
                        {tutorial.excerpt}
                      </p>
                      
                      <div className="flex justify-between items-center">
                        <div className="flex items-center text-gray-500 text-sm">
                          <Clock className="h-3 w-3 mr-1" />
                          {tutorial.duration}
                        </div>
                        <button className="flex items-center text-purple-700 font-medium hover:text-purple-900">
                          Read More <ChevronRightIcon className="h-4 w-4 ml-1" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Newsletter */}
              <div className="mt-12 bg-gradient-to-r from-purple-700 to-indigo-800 rounded-lg p-8 text-white">
                <div className="text-center max-w-2xl mx-auto">
                  <h2 className="text-2xl font-bold mb-2">Want more AI tutorials?</h2>
                  <p className="mb-6 text-white/80">
                    Subscribe to our newsletter and receive the latest AI agent tutorials, tips, and resources directly in your inbox.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
                    <input 
                      type="email" 
                      placeholder="Enter your email" 
                      className="px-4 py-2 rounded-md flex-grow text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-300"
                    />
                    <button className="bg-white text-purple-700 font-medium px-6 py-2 rounded-md hover:bg-gray-100 transition-colors">
                      Subscribe
                    </button>
                  </div>
                </div>
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