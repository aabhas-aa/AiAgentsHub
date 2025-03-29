import Header from '@/components/ui/header';
import Footer from '@/components/ui/footer';
import { Button } from '@/components/ui/button';
import { MapPin, Briefcase, Clock, Users } from 'lucide-react';

// Sample job openings
const jobOpenings = [
  {
    id: 1,
    title: "Senior Full Stack Developer",
    department: "Engineering",
    locationType: "Remote",
    location: "Worldwide",
    employmentType: "Full-time",
    experience: "5+ years",
    description: "We're looking for an experienced Full Stack Developer to help us build and enhance our AI agents directory platform. You'll work on both frontend and backend systems, implementing new features and optimizing existing ones.",
    responsibilities: [
      "Design, develop, and maintain scalable web applications",
      "Work closely with our product and design teams to implement new features",
      "Write clean, maintainable, and efficient code",
      "Review code and provide constructive feedback to other developers",
      "Participate in architectural decisions and technology selections"
    ],
    requirements: [
      "5+ years of experience in full-stack development",
      "Proficiency in React, Node.js, and TypeScript",
      "Experience with SQL and NoSQL databases",
      "Strong problem-solving abilities and attention to detail",
      "Excellent communication and collaboration skills"
    ]
  },
  {
    id: 2,
    title: "Content Marketing Specialist",
    department: "Marketing",
    locationType: "Remote",
    location: "United States",
    employmentType: "Full-time",
    experience: "3+ years",
    description: "We're seeking a creative Content Marketing Specialist to produce engaging content that educates our audience about AI agents. You'll be responsible for creating blog posts, tutorials, newsletters, and other content that drives user engagement and growth.",
    responsibilities: [
      "Create high-quality content related to AI agents and their applications",
      "Develop and execute content marketing strategies",
      "Collaborate with the design team to create visually appealing content",
      "Manage our blog and social media channels",
      "Analyze content performance and optimize based on data"
    ],
    requirements: [
      "3+ years of experience in content marketing or related field",
      "Excellent writing and editing skills",
      "Understanding of SEO principles",
      "Ability to explain technical concepts in an accessible way",
      "Experience with content management systems and analytics tools"
    ]
  },
  {
    id: 3,
    title: "AI Research Analyst",
    department: "Product",
    locationType: "Hybrid",
    location: "San Francisco, CA",
    employmentType: "Full-time",
    experience: "2+ years",
    description: "Join our team as an AI Research Analyst to help us stay at the forefront of AI agent technologies. You'll research emerging AI tools, evaluate their capabilities, and contribute to our knowledge base to ensure our directory remains comprehensive and up-to-date.",
    responsibilities: [
      "Monitor and analyze trends in AI development and applications",
      "Test and evaluate new AI agents for inclusion in our directory",
      "Document agent capabilities, use cases, and limitations",
      "Create detailed comparison reports of similar AI tools",
      "Collaborate with content team to develop informative resources"
    ],
    requirements: [
      "2+ years of experience in AI, technology research, or related field",
      "Strong analytical skills and attention to detail",
      "Familiarity with various AI technologies including LLMs, image generators, etc.",
      "Excellent written and verbal communication skills",
      "Bachelor's degree in Computer Science, Information Technology, or related field"
    ]
  }
];

// Benefits
const benefits = [
  {
    title: "Competitive Compensation",
    description: "We offer competitive salaries and equity packages to ensure you're rewarded for your contributions.",
    icon: "💰"
  },
  {
    title: "Remote-First Culture",
    description: "Work from anywhere with flexible hours. We focus on results, not when or where you work.",
    icon: "🌎"
  },
  {
    title: "Health & Wellness",
    description: "Comprehensive health insurance, wellness stipend, and mental health resources for you and your family.",
    icon: "🏥"
  },
  {
    title: "Professional Growth",
    description: "Learning budget for conferences, courses, and books. Regular feedback and career development plans.",
    icon: "📈"
  },
  {
    title: "Team Retreats",
    description: "Twice-yearly company retreats to connect, collaborate, and celebrate our achievements together.",
    icon: "✈️"
  },
  {
    title: "Latest Technology",
    description: "Access to cutting-edge AI tools and a budget for home office equipment and software.",
    icon: "💻"
  }
];

export default function Careers() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-purple-700 to-indigo-800 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Join Our Team</h1>
            <p className="text-white/80 max-w-2xl mx-auto mb-8 text-lg">
              Help us build the future of AI discovery. We're looking for passionate people to join our mission of connecting users with the perfect AI agents.
            </p>
            <Button className="bg-white text-purple-700 hover:bg-gray-100 font-semibold px-6 py-3 text-lg">
              View Open Positions
            </Button>
          </div>
        </div>
        
        {/* Company values */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-3">Our Values</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                These core principles guide everything we do and define our company culture.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                <div className="bg-purple-100 h-16 w-16 mx-auto rounded-full flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-purple-700" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">User-Centered</h3>
                <p className="text-gray-600">
                  We put users at the center of everything we do, constantly seeking to understand their needs and improve their experience.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                <div className="bg-purple-100 h-16 w-16 mx-auto rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8 text-purple-700">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Innovation</h3>
                <p className="text-gray-600">
                  We embrace curiosity and creativity, continuously exploring new technologies and approaches to solve problems.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                <div className="bg-purple-100 h-16 w-16 mx-auto rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8 text-purple-700">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Collaboration</h3>
                <p className="text-gray-600">
                  We believe in the power of teamwork, bringing together diverse perspectives to create something greater than the sum of its parts.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Benefits */}
        <div className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-3">Benefits & Perks</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We believe in taking care of our team members and providing everything you need to do your best work.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <div className="text-3xl mb-3">{benefit.icon}</div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Open positions */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-3">Open Positions</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Join our diverse team of passionate individuals working to connect people with the best AI agents.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              {jobOpenings.map((job) => (
                <div key={job.id} className="mb-6 bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                  <div className="p-6">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">{job.title}</h3>
                        <div className="flex flex-wrap gap-3 mb-4">
                          <div className="flex items-center text-sm text-gray-600">
                            <Briefcase className="h-4 w-4 mr-1" />
                            {job.department}
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <MapPin className="h-4 w-4 mr-1" />
                            {job.locationType} • {job.location}
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <Clock className="h-4 w-4 mr-1" />
                            {job.employmentType}
                          </div>
                        </div>
                        <p className="text-gray-600 mb-4">{job.description}</p>
                      </div>
                      <div className="md:flex-shrink-0">
                        <Button className="bg-purple-700 hover:bg-purple-800 text-white w-full md:w-auto">View Position</Button>
                      </div>
                    </div>
                    
                    <div className="mt-4 grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Key Responsibilities:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-gray-600">
                          {job.responsibilities.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Requirements:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-gray-600">
                          {job.requirements.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <p className="text-gray-600 mb-4">Don't see a position that matches your skills?</p>
              <Button className="bg-purple-700 hover:bg-purple-800 text-white px-8">
                Send Spontaneous Application
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}