import Header from '@/components/ui/header';
import Footer from '@/components/ui/footer';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-purple-700 to-indigo-800 py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">About AI Agents Hub</h1>
            <p className="text-white/80 max-w-3xl mb-6">
              Learn more about our mission, our team, and how we're building the largest directory of AI agents on the web.
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Our Mission</h2>
              <p className="text-gray-600 mb-6">
                At AI Agents Hub, our mission is to connect people with the most useful and innovative AI agents available today. As artificial intelligence continues to transform how we work, create, and solve problems, navigating the growing ecosystem of AI tools becomes increasingly challenging.
              </p>
              <p className="text-gray-600 mb-6">
                We believe that the right AI agent can significantly enhance productivity, spark creativity, and help solve complex problems. Our goal is to make discovering these tools easier by providing a comprehensive, user-friendly directory that helps you find the perfect AI agent for your specific needs.
              </p>
            </section>
            
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">What We Do</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold mb-3 text-purple-700">Curate</h3>
                  <p className="text-gray-600">
                    We carefully review and organize AI agents across various categories, ensuring you have access to high-quality tools that deliver real value.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold mb-3 text-purple-700">Inform</h3>
                  <p className="text-gray-600">
                    We provide detailed information about each AI agent, including features, use cases, pricing, and user ratings to help you make informed decisions.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold mb-3 text-purple-700">Connect</h3>
                  <p className="text-gray-600">
                    We connect you directly to the AI agents that best match your requirements, saving you time and effort in your search.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold mb-3 text-purple-700">Educate</h3>
                  <p className="text-gray-600">
                    We share resources, tutorials, and guides to help you get the most out of AI technology in your personal and professional life.
                  </p>
                </div>
              </div>
            </section>
            
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Our Team</h2>
              <p className="text-gray-600 mb-6">
                AI Agents Hub is built by a passionate team of AI enthusiasts, developers, and content creators who are committed to making AI more accessible and valuable to everyone.
              </p>
              <p className="text-gray-600 mb-6">
                Our diverse backgrounds in technology, design, and content creation allow us to approach AI from multiple perspectives, ensuring that our platform serves the needs of both technical and non-technical users.
              </p>
            </section>
            
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Get Involved</h2>
              <p className="text-gray-600 mb-6">
                We believe in the power of community and welcome contributions from AI developers, users, and enthusiasts. There are several ways to get involved with AI Agents Hub:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 bg-purple-50 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2 text-purple-800">Submit an Agent</h3>
                  <p className="text-gray-600 mb-4">
                    If you've created an AI agent or know of one that should be in our directory, we'd love to hear about it.
                  </p>
                  <Link href="/submit">
                    <Button className="bg-purple-700 hover:bg-purple-800 text-white">Submit Now</Button>
                  </Link>
                </div>
                <div className="p-6 bg-purple-50 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2 text-purple-800">Contact Us</h3>
                  <p className="text-gray-600 mb-4">
                    Have questions, suggestions, or feedback? We're always looking to improve our platform.
                  </p>
                  <Link href="/contact">
                    <Button className="bg-purple-700 hover:bg-purple-800 text-white">Get in Touch</Button>
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}