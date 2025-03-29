import { 
  users, type User, type InsertUser, 
  categories, type Category, type InsertCategory,
  agents, type Agent, type InsertAgent,
  agentFeatures, type AgentFeature, type InsertAgentFeature,
  agentUseCases, type AgentUseCase, type InsertAgentUseCase,
  pageContent, type PageContent, type InsertPageContent
} from "@shared/schema";

export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Category methods
  getAllCategories(): Promise<Category[]>;
  getCategoryById(id: number): Promise<Category | undefined>;
  getCategoryBySlug(slug: string): Promise<Category | undefined>;
  createCategory(category: InsertCategory): Promise<Category>;
  updateCategory(id: number, category: Partial<InsertCategory>): Promise<Category | undefined>;
  
  // Agent methods
  getAllAgents(): Promise<Agent[]>;
  getAgentById(id: number): Promise<Agent | undefined>;
  getAgentBySlug(slug: string): Promise<Agent | undefined>;
  getAgentsByCategory(categoryId: number): Promise<Agent[]>;
  getFeaturedAgents(limit?: number): Promise<Agent[]>;
  getNewAgents(limit?: number): Promise<Agent[]>;
  searchAgents(query: string): Promise<Agent[]>;
  createAgent(agent: InsertAgent): Promise<Agent>;
  updateAgent(id: number, agent: Partial<InsertAgent>): Promise<Agent | undefined>;
  
  // Agent Feature methods
  getFeaturesByAgentId(agentId: number): Promise<AgentFeature[]>;
  createAgentFeature(feature: InsertAgentFeature): Promise<AgentFeature>;
  
  // Agent Use Case methods
  getUseCasesByAgentId(agentId: number): Promise<AgentUseCase[]>;
  createAgentUseCase(useCase: InsertAgentUseCase): Promise<AgentUseCase>;
  
  // Page Content methods
  getAllPageContent(): Promise<PageContent[]>;
  getPageContentByKey(pageKey: string): Promise<PageContent | undefined>;
  createPageContent(content: InsertPageContent): Promise<PageContent>;
  updatePageContent(pageKey: string, content: Partial<InsertPageContent>): Promise<PageContent | undefined>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private categories: Map<number, Category>;
  private agents: Map<number, Agent>;
  private agentFeatures: Map<number, AgentFeature>;
  private agentUseCases: Map<number, AgentUseCase>;
  private pageContents: Map<number, PageContent>;
  
  private userCurrentId: number;
  private categoryCurrentId: number;
  private agentCurrentId: number;
  private featureCurrentId: number;
  private useCaseCurrentId: number;
  private pageContentCurrentId: number;

  constructor() {
    this.users = new Map();
    this.categories = new Map();
    this.agents = new Map();
    this.agentFeatures = new Map();
    this.agentUseCases = new Map();
    this.pageContents = new Map();
    
    this.userCurrentId = 1;
    this.categoryCurrentId = 1;
    this.agentCurrentId = 1;
    this.featureCurrentId = 1;
    this.useCaseCurrentId = 1;
    this.pageContentCurrentId = 1;
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userCurrentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  // Category methods
  async getAllCategories(): Promise<Category[]> {
    return Array.from(this.categories.values());
  }
  
  async getCategoryById(id: number): Promise<Category | undefined> {
    return this.categories.get(id);
  }
  
  async getCategoryBySlug(slug: string): Promise<Category | undefined> {
    return Array.from(this.categories.values()).find(
      (category) => category.slug === slug,
    );
  }
  
  async createCategory(insertCategory: InsertCategory): Promise<Category> {
    const id = this.categoryCurrentId++;
    const category: Category = { 
      ...insertCategory, 
      id,
      agentCount: insertCategory.agentCount || 0 
    };
    this.categories.set(id, category);
    return category;
  }
  
  // Agent methods
  async getAllAgents(): Promise<Agent[]> {
    return Array.from(this.agents.values());
  }
  
  async getAgentById(id: number): Promise<Agent | undefined> {
    return this.agents.get(id);
  }
  
  async getAgentBySlug(slug: string): Promise<Agent | undefined> {
    return Array.from(this.agents.values()).find(
      (agent) => agent.slug === slug,
    );
  }
  
  async getAgentsByCategory(categoryId: number): Promise<Agent[]> {
    return Array.from(this.agents.values()).filter(
      (agent) => agent.categoryId === categoryId,
    );
  }
  
  async getFeaturedAgents(limit?: number): Promise<Agent[]> {
    const featuredAgents = Array.from(this.agents.values())
      .filter(agent => agent.featured)
      .sort((a, b) => b.rating - a.rating);
      
    if (limit) {
      return featuredAgents.slice(0, limit);
    }
    
    return featuredAgents;
  }
  
  async getNewAgents(limit?: number): Promise<Agent[]> {
    const newAgents = Array.from(this.agents.values())
      .filter(agent => agent.isNew)
      .sort((a, b) => b.rating - a.rating);
      
    if (limit) {
      return newAgents.slice(0, limit);
    }
    
    return newAgents;
  }
  
  async searchAgents(query: string): Promise<Agent[]> {
    const searchTermLower = query.toLowerCase();
    return Array.from(this.agents.values()).filter(agent => 
      agent.name.toLowerCase().includes(searchTermLower) || 
      agent.description.toLowerCase().includes(searchTermLower)
    );
  }
  
  async createAgent(insertAgent: InsertAgent): Promise<Agent> {
    const id = this.agentCurrentId++;
    const agent: Agent = { 
      ...insertAgent, 
      id, 
      rating: insertAgent.rating || 0,
      userCount: insertAgent.userCount || 0,
      featured: insertAgent.featured || false,
      isFree: insertAgent.isFree || false,
      isNew: insertAgent.isNew || false,
      premiumPrice: insertAgent.premiumPrice || null,
      enterprisePrice: insertAgent.enterprisePrice || null,
      addedDate: new Date() 
    };
    this.agents.set(id, agent);
    return agent;
  }
  
  // Agent Feature methods
  async getFeaturesByAgentId(agentId: number): Promise<AgentFeature[]> {
    return Array.from(this.agentFeatures.values()).filter(
      (feature) => feature.agentId === agentId
    );
  }
  
  async createAgentFeature(insertFeature: InsertAgentFeature): Promise<AgentFeature> {
    const id = this.featureCurrentId++;
    const feature: AgentFeature = { ...insertFeature, id };
    this.agentFeatures.set(id, feature);
    return feature;
  }
  
  // Agent Use Case methods
  async getUseCasesByAgentId(agentId: number): Promise<AgentUseCase[]> {
    return Array.from(this.agentUseCases.values()).filter(
      (useCase) => useCase.agentId === agentId
    );
  }
  
  async createAgentUseCase(insertUseCase: InsertAgentUseCase): Promise<AgentUseCase> {
    const id = this.useCaseCurrentId++;
    const useCase: AgentUseCase = { ...insertUseCase, id };
    this.agentUseCases.set(id, useCase);
    return useCase;
  }
  
  // Update methods
  async updateCategory(id: number, category: Partial<InsertCategory>): Promise<Category | undefined> {
    const existingCategory = this.categories.get(id);
    if (!existingCategory) {
      return undefined;
    }
    
    const updatedCategory: Category = {
      ...existingCategory,
      ...category,
    };
    
    this.categories.set(id, updatedCategory);
    return updatedCategory;
  }
  
  async updateAgent(id: number, agent: Partial<InsertAgent>): Promise<Agent | undefined> {
    const existingAgent = this.agents.get(id);
    if (!existingAgent) {
      return undefined;
    }
    
    const updatedAgent: Agent = {
      ...existingAgent,
      ...agent,
    };
    
    this.agents.set(id, updatedAgent);
    return updatedAgent;
  }
  
  // Page Content methods
  async getAllPageContent(): Promise<PageContent[]> {
    return Array.from(this.pageContents.values());
  }
  
  async getPageContentByKey(pageKey: string): Promise<PageContent | undefined> {
    return Array.from(this.pageContents.values()).find(
      (content) => content.pageKey === pageKey
    );
  }
  
  async createPageContent(insertContent: InsertPageContent): Promise<PageContent> {
    const id = this.pageContentCurrentId++;
    const content: PageContent = { 
      ...insertContent, 
      id, 
      description: insertContent.description || null,
      bannerTitle: insertContent.bannerTitle || null,
      bannerSubtitle: insertContent.bannerSubtitle || null,
      bannerImageUrl: insertContent.bannerImageUrl || null,
      metaTitle: insertContent.metaTitle || null,
      metaDescription: insertContent.metaDescription || null,
      content: insertContent.content || null,
      lastUpdated: new Date() 
    };
    this.pageContents.set(id, content);
    return content;
  }
  
  async updatePageContent(pageKey: string, content: Partial<InsertPageContent>): Promise<PageContent | undefined> {
    const existingContent = await this.getPageContentByKey(pageKey);
    
    if (!existingContent) {
      return undefined;
    }
    
    const updatedContent: PageContent = {
      ...existingContent,
      ...content,
      lastUpdated: new Date()
    };
    
    this.pageContents.set(existingContent.id, updatedContent);
    return updatedContent;
  }
}

export const storage = new MemStorage();
