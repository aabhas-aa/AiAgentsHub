import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";
import * as path from "path";
import * as fs from "fs";
import { execSync } from "child_process";
import { insertAgentSchema, insertCategorySchema, insertAgentFeatureSchema, insertAgentUseCaseSchema, insertPageContentSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // prefix all routes with /api
  
  // Categories API routes
  app.get("/api/categories", async (req, res) => {
    try {
      const categories = await storage.getAllCategories();
      res.json(categories);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch categories" });
    }
  });
  
  app.get("/api/categories/:slug", async (req, res) => {
    try {
      const { slug } = req.params;
      const category = await storage.getCategoryBySlug(slug);
      
      if (!category) {
        return res.status(404).json({ message: "Category not found" });
      }
      
      res.json(category);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch category" });
    }
  });
  
  app.post("/api/categories", async (req, res) => {
    try {
      const validatedData = insertCategorySchema.parse(req.body);
      const category = await storage.createCategory(validatedData);
      res.status(201).json(category);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid category data", errors: error.errors });
      }
      res.status(500).json({ message: "Failed to create category" });
    }
  });
  
  // Agents API routes
  app.get("/api/agents", async (req, res) => {
    try {
      const { category, featured, isNew, search } = req.query;
      
      let agents;
      
      if (search && typeof search === "string") {
        agents = await storage.searchAgents(search);
      } else if (category && typeof category === "string") {
        const categoryObj = await storage.getCategoryBySlug(category);
        if (!categoryObj) {
          return res.status(404).json({ message: "Category not found" });
        }
        agents = await storage.getAgentsByCategory(categoryObj.id);
      } else if (featured === "true") {
        const limit = req.query.limit ? parseInt(req.query.limit as string) : undefined;
        agents = await storage.getFeaturedAgents(limit);
      } else if (isNew === "true") {
        const limit = req.query.limit ? parseInt(req.query.limit as string) : undefined;
        agents = await storage.getNewAgents(limit);
      } else {
        agents = await storage.getAllAgents();
      }
      
      res.json(agents);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch agents" });
    }
  });
  
  app.get("/api/agents/:slug", async (req, res) => {
    try {
      const { slug } = req.params;
      const agent = await storage.getAgentBySlug(slug);
      
      if (!agent) {
        return res.status(404).json({ message: "Agent not found" });
      }
      
      // Get features and use cases for this agent
      const features = await storage.getFeaturesByAgentId(agent.id);
      const useCases = await storage.getUseCasesByAgentId(agent.id);
      
      res.json({
        agent,
        features,
        useCases
      });
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch agent details" });
    }
  });
  
  app.post("/api/agents", async (req, res) => {
    try {
      const validatedData = insertAgentSchema.parse(req.body);
      const agent = await storage.createAgent(validatedData);
      res.status(201).json(agent);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid agent data", errors: error.errors });
      }
      res.status(500).json({ message: "Failed to create agent" });
    }
  });
  
  // Agent Features API routes
  app.get("/api/agents/:agentId/features", async (req, res) => {
    try {
      const agentId = parseInt(req.params.agentId);
      const features = await storage.getFeaturesByAgentId(agentId);
      res.json(features);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch agent features" });
    }
  });
  
  app.post("/api/agent-features", async (req, res) => {
    try {
      const validatedData = insertAgentFeatureSchema.parse(req.body);
      const feature = await storage.createAgentFeature(validatedData);
      res.status(201).json(feature);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid feature data", errors: error.errors });
      }
      res.status(500).json({ message: "Failed to create agent feature" });
    }
  });
  
  // Agent Use Cases API routes
  app.get("/api/agents/:agentId/use-cases", async (req, res) => {
    try {
      const agentId = parseInt(req.params.agentId);
      const useCases = await storage.getUseCasesByAgentId(agentId);
      res.json(useCases);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch agent use cases" });
    }
  });
  
  app.post("/api/agent-use-cases", async (req, res) => {
    try {
      const validatedData = insertAgentUseCaseSchema.parse(req.body);
      const useCase = await storage.createAgentUseCase(validatedData);
      res.status(201).json(useCase);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid use case data", errors: error.errors });
      }
      res.status(500).json({ message: "Failed to create agent use case" });
    }
  });
  
  // Page Content API routes
  app.get("/api/page-content", async (req, res) => {
    try {
      const { pageKey } = req.query;
      
      if (pageKey && typeof pageKey === "string") {
        const content = await storage.getPageContentByKey(pageKey);
        
        if (!content) {
          return res.status(404).json({ message: "Page content not found" });
        }
        
        res.json(content);
      } else {
        const allContent = await storage.getAllPageContent();
        res.json(allContent);
      }
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch page content" });
    }
  });
  
  app.post("/api/page-content", async (req, res) => {
    try {
      const validatedData = insertPageContentSchema.parse(req.body);
      const content = await storage.createPageContent(validatedData);
      res.status(201).json(content);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid page content data", errors: error.errors });
      }
      res.status(500).json({ message: "Failed to create page content" });
    }
  });
  
  app.patch("/api/page-content/:pageKey", async (req, res) => {
    try {
      const { pageKey } = req.params;
      const validatedData = insertPageContentSchema.partial().parse(req.body);
      
      const updatedContent = await storage.updatePageContent(pageKey, validatedData);
      
      if (!updatedContent) {
        return res.status(404).json({ message: "Page content not found" });
      }
      
      res.json(updatedContent);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid page content data", errors: error.errors });
      }
      res.status(500).json({ message: "Failed to update page content" });
    }
  });
  
  // Initialize the database with mock data
  app.post("/api/init-demo-data", async (req, res) => {
    try {
      // This endpoint would only be available in development mode
      // You would implement the logic to seed the storage with demo data
      res.status(200).json({ message: "Demo data initialized" });
    } catch (error) {
      res.status(500).json({ message: "Failed to initialize demo data" });
    }
  });
  
  // API route to create and serve the ZIP file
  app.post("/api/create-zip", (req, res) => {
    const filePath = "/tmp/aiagentsdirectory_src.zip";
    
    try {
      // Run our script to create the zip file
      execSync(`./create-zip.sh`);
      
      if (fs.existsSync(filePath)) {
        res.setHeader("Content-Type", "application/zip");
        res.setHeader("Content-Disposition", "attachment; filename=aiagentsdirectory_src.zip");
        const fileStream = fs.createReadStream(filePath);
        fileStream.pipe(res);
      } else {
        res.status(500).json({ error: "Failed to create source code package" });
      }
    } catch (error) {
      console.error("Error creating zip file:", error);
      res.status(500).json({ error: "Error creating source code package" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
