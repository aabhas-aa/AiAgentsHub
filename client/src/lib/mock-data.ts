import type { Category, Agent, AgentFeature, AgentUseCase } from "@shared/schema";

// Categories with mock data
export const categoriesMockData: Category[] = [
  {
    id: 1,
    name: "Chatbots",
    slug: "chatbots",
    icon: "message-circle",
    iconBgColor: "bg-purple-100",
    iconColor: "text-purple-700",
    agentCount: 48
  },
  {
    id: 2,
    name: "Image Generation",
    slug: "image-generation",
    icon: "image",
    iconBgColor: "bg-pink-100",
    iconColor: "text-pink-700",
    agentCount: 36
  },
  {
    id: 3,
    name: "Writing",
    slug: "writing",
    icon: "pen",
    iconBgColor: "bg-indigo-100",
    iconColor: "text-indigo-700",
    agentCount: 42
  },
  {
    id: 4,
    name: "Productivity",
    slug: "productivity",
    icon: "check-square",
    iconBgColor: "bg-green-100",
    iconColor: "text-green-700",
    agentCount: 29
  },
  {
    id: 5,
    name: "Development",
    slug: "development",
    icon: "code",
    iconBgColor: "bg-amber-100",
    iconColor: "text-amber-700",
    agentCount: 33
  },
  {
    id: 6,
    name: "Data Analysis",
    slug: "data-analysis",
    icon: "bar-chart",
    iconBgColor: "bg-blue-100",
    iconColor: "text-blue-700",
    agentCount: 25
  }
];

// Agents with mock data
export const agentsMockData: Agent[] = [
  {
    id: 1,
    name: "ConversAI",
    slug: "conversai",
    description: "A powerful conversational AI that can answer questions, draft emails, and assist with creative writing tasks.",
    imageUrl: "https://images.unsplash.com/photo-1527430253228-e93688616381?auto=format&fit=crop&w=800&q=80",
    websiteUrl: "https://conversai.example.com",
    rating: 45, // 4.5 out of 5
    userCount: 100000,
    featured: true,
    isFree: true,
    isNew: false,
    categoryId: 1, // Chatbots
    premiumPrice: "$9.99/month",
    enterprisePrice: "Custom pricing",
    addedDate: new Date("2023-08-15")
  },
  {
    id: 2,
    name: "PixelMind",
    slug: "pixelmind",
    description: "Create stunning, realistic images from text descriptions with this state-of-the-art AI image generator.",
    imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    websiteUrl: "https://pixelmind.example.com",
    rating: 40, // 4.0 out of 5
    userCount: 75000,
    featured: false,
    isFree: false,
    isNew: true,
    categoryId: 2, // Image Generation
    premiumPrice: "$12.99/month",
    enterprisePrice: "Custom pricing",
    addedDate: new Date("2023-12-01")
  },
  {
    id: 3,
    name: "ProseGenius",
    slug: "prosegenius",
    description: "An AI writing assistant that helps you craft compelling content, from blog posts to marketing copy.",
    imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80",
    websiteUrl: "https://prosegenius.example.com",
    rating: 50, // 5.0 out of 5
    userCount: 120000,
    featured: false,
    isFree: true,
    isNew: false,
    categoryId: 3, // Writing
    premiumPrice: "$14.99/month",
    enterprisePrice: "$199/month",
    addedDate: new Date("2023-07-20")
  },
  {
    id: 4,
    name: "DataSense AI",
    slug: "datasense-ai",
    description: "Transform raw data into actionable insights with this powerful AI-powered analytics platform.",
    imageUrl: "https://images.unsplash.com/photo-1647427060118-4911c9821b82?auto=format&fit=crop&w=800&q=80",
    websiteUrl: "https://datasense.example.com",
    rating: 47, // 4.7 out of 5
    userCount: 65000,
    featured: false,
    isFree: false,
    isNew: false,
    categoryId: 6, // Data Analysis
    premiumPrice: "$19.99/month",
    enterprisePrice: "Custom pricing",
    addedDate: new Date("2023-09-10")
  },
  {
    id: 5,
    name: "CodeCompanion",
    slug: "codecompanion",
    description: "An AI coding assistant that helps developers write better code faster with smart suggestions and debugging.",
    imageUrl: "https://images.unsplash.com/photo-1581472723648-909f4851d4ae?auto=format&fit=crop&w=800&q=80",
    websiteUrl: "https://codecompanion.example.com",
    rating: 42, // 4.2 out of 5
    userCount: 85000,
    featured: false,
    isFree: true,
    isNew: false,
    categoryId: 5, // Development
    premiumPrice: "$15.99/month",
    enterprisePrice: "$299/month",
    addedDate: new Date("2023-06-05")
  },
  {
    id: 6,
    name: "TimeWizard",
    slug: "timewizard",
    description: "An intelligent scheduling assistant that optimizes your calendar and helps you make the most of your time.",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    websiteUrl: "https://timewizard.example.com",
    rating: 49, // 4.9 out of 5
    userCount: 95000,
    featured: true,
    isFree: true,
    isNew: false,
    categoryId: 4, // Productivity
    premiumPrice: "$8.99/month",
    enterprisePrice: "$149/month",
    addedDate: new Date("2023-05-25")
  },
  {
    id: 7,
    name: "VoiceGenius",
    slug: "voicegenius",
    description: "Convert speech to text and generate natural-sounding voiceovers with this advanced AI voice tool.",
    imageUrl: "https://images.unsplash.com/photo-1589254065909-b7086229d08c?auto=format&fit=crop&w=800&q=80",
    websiteUrl: "https://voicegenius.example.com",
    rating: 44, // 4.4 out of 5
    userCount: 55000,
    featured: false,
    isFree: false,
    isNew: true,
    categoryId: 1, // Chatbots
    premiumPrice: "$11.99/month",
    enterprisePrice: "Custom pricing",
    addedDate: new Date("2023-11-15")
  },
  {
    id: 8,
    name: "IntelliSlide",
    slug: "intellislide",
    description: "Create professional presentations in seconds with AI-powered slide generation and design.",
    imageUrl: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&w=800&q=80",
    websiteUrl: "https://intellislide.example.com",
    rating: 43, // 4.3 out of 5
    userCount: 60000,
    featured: false,
    isFree: true,
    isNew: false,
    categoryId: 4, // Productivity
    premiumPrice: "$9.99/month",
    enterprisePrice: "$179/month",
    addedDate: new Date("2023-08-01")
  }
];

// Agent Features with mock data
export const featuresMockData: AgentFeature[] = [
  // ConversAI features
  { id: 1, agentId: 1, feature: "Natural language understanding with context awareness" },
  { id: 2, agentId: 1, feature: "Email drafting with tone adjustment (formal, friendly, persuasive)" },
  { id: 3, agentId: 1, feature: "Creative writing assistance for stories, poems, and scripts" },
  { id: 4, agentId: 1, feature: "Multi-language support (40+ languages)" },
  { id: 5, agentId: 1, feature: "Knowledge database integration for specialized domains" },
  
  // PixelMind features
  { id: 6, agentId: 2, feature: "Text-to-image generation with precise control" },
  { id: 7, agentId: 2, feature: "Style customization (photorealistic, artistic, cartoon)" },
  { id: 8, agentId: 2, feature: "High-resolution output (up to 4K)" },
  { id: 9, agentId: 2, feature: "Batch processing for multiple images" },
  { id: 10, agentId: 2, feature: "Image editing and enhancement tools" },
  
  // Features for other agents...
  { id: 11, agentId: 3, feature: "Content generation for multiple formats (blog, social media, email)" },
  { id: 12, agentId: 3, feature: "Tone and style adjustment to match brand voice" },
  { id: 13, agentId: 3, feature: "SEO optimization suggestions" },
  { id: 14, agentId: 3, feature: "Plagiarism-free content with citation support" },
  { id: 15, agentId: 3, feature: "Content editing and improvement recommendations" }
];

// Agent Use Cases with mock data
export const useCasesMockData: AgentUseCase[] = [
  // ConversAI use cases
  { 
    id: 1, 
    agentId: 1, 
    title: "Business Professionals", 
    description: "Draft professional emails, prepare meeting notes, and create business documents quickly.",
    icon: "briefcase", 
    iconColor: "text-purple-700" 
  },
  { 
    id: 2, 
    agentId: 1, 
    title: "Writers & Content Creators", 
    description: "Get help with creative writing, overcome writer's block, and generate content ideas.",
    icon: "pen-tool", 
    iconColor: "text-pink-700" 
  },
  { 
    id: 3, 
    agentId: 1, 
    title: "Students & Educators", 
    description: "Research assistance, explanations of complex topics, and learning aid for various subjects.",
    icon: "book-open", 
    iconColor: "text-indigo-700" 
  },
  
  // PixelMind use cases
  { 
    id: 4, 
    agentId: 2, 
    title: "Designers & Artists", 
    description: "Generate concept art, visualize ideas, and create inspiration for creative projects.",
    icon: "palette", 
    iconColor: "text-pink-700" 
  },
  { 
    id: 5, 
    agentId: 2, 
    title: "Marketing Teams", 
    description: "Create eye-catching visuals for social media, ads, and marketing materials.",
    icon: "trending-up", 
    iconColor: "text-amber-700" 
  },
  { 
    id: 6, 
    agentId: 2, 
    title: "Game Developers", 
    description: "Generate game assets, character designs, and environment concepts quickly.",
    icon: "gamepad", 
    iconColor: "text-green-700" 
  }
];

// Helper function to calculate display rating from 0-50 scale
export function calculateDisplayRating(rating: number): number {
  return rating / 10;
}

// Helper function to format user count with K/M suffix
export function formatUserCount(count: number): string {
  if (count >= 1000000) {
    return `${(count / 1000000).toFixed(1)}M+`;
  } else if (count >= 1000) {
    return `${(count / 1000).toFixed(0)}K+`;
  } else {
    return `${count}+`;
  }
}

// Helper function to calculate actual number of agents per category
export function getAgentsCountByCategory(categoryId: number): number {
  return agentsMockData.filter(agent => agent.categoryId === categoryId).length;
}
