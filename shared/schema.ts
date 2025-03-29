import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Define Category Table
export const categories = pgTable("categories", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  slug: text("slug").notNull().unique(),
  icon: text("icon").notNull(),
  iconBgColor: text("icon_bg_color").notNull(),
  iconColor: text("icon_color").notNull(),
  agentCount: integer("agent_count").notNull().default(0),
});

export const insertCategorySchema = createInsertSchema(categories).pick({
  name: true,
  slug: true,
  icon: true,
  iconBgColor: true,
  iconColor: true,
  agentCount: true,
});

export type InsertCategory = z.infer<typeof insertCategorySchema>;
export type Category = typeof categories.$inferSelect;

// Define Agent Table
export const agents = pgTable("agents", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  slug: text("slug").notNull().unique(),
  description: text("description").notNull(),
  imageUrl: text("image_url").notNull(),
  websiteUrl: text("website_url").notNull(),
  rating: integer("rating").notNull().default(0),
  userCount: integer("user_count").notNull().default(0),
  featured: boolean("featured").default(false),
  isFree: boolean("is_free").default(false),
  isNew: boolean("is_new").default(false),
  categoryId: integer("category_id").notNull(),
  premiumPrice: text("premium_price"),
  enterprisePrice: text("enterprise_price"),
  addedDate: timestamp("added_date").defaultNow(),
});

export const insertAgentSchema = createInsertSchema(agents).pick({
  name: true,
  slug: true,
  description: true,
  imageUrl: true,
  websiteUrl: true,
  rating: true,
  userCount: true,
  featured: true,
  isFree: true,
  isNew: true,
  categoryId: true,
  premiumPrice: true,
  enterprisePrice: true,
});

export type InsertAgent = z.infer<typeof insertAgentSchema>;
export type Agent = typeof agents.$inferSelect;

// Define Agent Feature Table
export const agentFeatures = pgTable("agent_features", {
  id: serial("id").primaryKey(),
  agentId: integer("agent_id").notNull(),
  feature: text("feature").notNull(),
});

export const insertAgentFeatureSchema = createInsertSchema(agentFeatures).pick({
  agentId: true,
  feature: true,
});

export type InsertAgentFeature = z.infer<typeof insertAgentFeatureSchema>;
export type AgentFeature = typeof agentFeatures.$inferSelect;

// Define Agent Use Case Table
export const agentUseCases = pgTable("agent_use_cases", {
  id: serial("id").primaryKey(),
  agentId: integer("agent_id").notNull(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  icon: text("icon").notNull(),
  iconColor: text("icon_color").notNull(),
});

export const insertAgentUseCaseSchema = createInsertSchema(agentUseCases).pick({
  agentId: true,
  title: true,
  description: true,
  icon: true,
  iconColor: true,
});

export type InsertAgentUseCase = z.infer<typeof insertAgentUseCaseSchema>;
export type AgentUseCase = typeof agentUseCases.$inferSelect;

// Define Page Content Table
export const pageContent = pgTable("page_content", {
  id: serial("id").primaryKey(),
  pageKey: text("page_key").notNull().unique(),
  title: text("title").notNull(),
  description: text("description"),
  bannerTitle: text("banner_title"),
  bannerSubtitle: text("banner_subtitle"),
  bannerImageUrl: text("banner_image_url"),
  metaTitle: text("meta_title"),
  metaDescription: text("meta_description"),
  content: text("content"),
  lastUpdated: timestamp("last_updated").defaultNow().notNull(),
});

export const insertPageContentSchema = createInsertSchema(pageContent).pick({
  pageKey: true,
  title: true,
  description: true,
  bannerTitle: true,
  bannerSubtitle: true,
  bannerImageUrl: true,
  metaTitle: true,
  metaDescription: true,
  content: true,
});

export type InsertPageContent = z.infer<typeof insertPageContentSchema>;
export type PageContent = typeof pageContent.$inferSelect;
