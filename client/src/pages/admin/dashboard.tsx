import { useState } from "react";
import { Link } from "wouter";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow container max-w-7xl mx-auto px-4 py-8 pt-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <div>
            <Button variant="outline" className="mr-2" asChild>
              <Link href="/">View Site</Link>
            </Button>
            <Button variant="outline">Logout</Button>
          </div>
        </div>
        
        <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="space-y-4">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="agents">Agents</TabsTrigger>
            <TabsTrigger value="categories">Categories</TabsTrigger>
            <TabsTrigger value="submissions">Submissions</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Total Agents
                  </CardTitle>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-4 w-4 text-purple-600"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">8</div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    +2 from last month
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Categories
                  </CardTitle>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-4 w-4 text-purple-600"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">6</div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    No change from last month
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Pending Submissions
                  </CardTitle>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-4 w-4 text-purple-600"
                  >
                    <rect width="20" height="14" x="2" y="5" rx="2" />
                    <path d="M2 10h20" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">3</div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    +3 since last week
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="col-span-2">
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>
                    Recent actions performed on the site
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                      <span className="flex-1">New agent "VoiceGenius" added</span>
                      <span className="text-sm text-gray-500">2 days ago</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
                      <span className="flex-1">Category "Development" updated</span>
                      <span className="text-sm text-gray-500">3 days ago</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-purple-500 mr-2"></span>
                      <span className="flex-1">New submission received for "DataBot"</span>
                      <span className="text-sm text-gray-500">5 days ago</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-yellow-500 mr-2"></span>
                      <span className="flex-1">User admin logged in</span>
                      <span className="text-sm text-gray-500">1 week ago</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="agents" className="space-y-4">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Manage Agents</CardTitle>
                  <Button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4"
                    >
                      <path d="M5 12h14" />
                      <path d="M12 5v14" />
                    </svg>
                    Add Agent
                  </Button>
                </div>
                <CardDescription>
                  Add, edit, or remove AI agents from the directory
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <div className="grid grid-cols-12 border-b px-4 py-3 font-medium">
                    <div className="col-span-1">#</div>
                    <div className="col-span-3">Name</div>
                    <div className="col-span-2">Category</div>
                    <div className="col-span-2">Rating</div>
                    <div className="col-span-2">Featured</div>
                    <div className="col-span-2">Actions</div>
                  </div>
                  {[
                    { id: 1, name: "ConversAI", category: "Chatbots", rating: 4.5, featured: true },
                    { id: 2, name: "PixelMind", category: "Image Generation", rating: 4.0, featured: false },
                    { id: 3, name: "ProseGenius", category: "Writing", rating: 5.0, featured: false },
                    { id: 4, name: "DataSense AI", category: "Data Analysis", rating: 4.7, featured: false },
                    { id: 5, name: "CodeCompanion", category: "Development", rating: 4.2, featured: false },
                    { id: 6, name: "TimeWizard", category: "Productivity", rating: 4.9, featured: true },
                    { id: 7, name: "VoiceGenius", category: "Chatbots", rating: 4.4, featured: false },
                    { id: 8, name: "IntelliSlide", category: "Productivity", rating: 4.3, featured: false },
                  ].map((agent) => (
                    <div key={agent.id} className="grid grid-cols-12 border-b px-4 py-3">
                      <div className="col-span-1">{agent.id}</div>
                      <div className="col-span-3">{agent.name}</div>
                      <div className="col-span-2">{agent.category}</div>
                      <div className="col-span-2">{agent.rating}</div>
                      <div className="col-span-2">
                        {agent.featured ? (
                          <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                            Yes
                          </span>
                        ) : (
                          <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">
                            No
                          </span>
                        )}
                      </div>
                      <div className="col-span-2">
                        <Button variant="ghost" size="sm" className="h-8 px-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-4 w-4"
                          >
                            <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
                          </svg>
                        </Button>
                        <Button variant="ghost" size="sm" className="h-8 px-2 text-red-500">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-4 w-4"
                          >
                            <path d="M3 6h18" />
                            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                            <line x1="10" y1="11" x2="10" y2="17" />
                            <line x1="14" y1="11" x2="14" y2="17" />
                          </svg>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="categories" className="space-y-4">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Manage Categories</CardTitle>
                  <Button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4"
                    >
                      <path d="M5 12h14" />
                      <path d="M12 5v14" />
                    </svg>
                    Add Category
                  </Button>
                </div>
                <CardDescription>
                  Add, edit, or remove categories for organizing agents
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <div className="grid grid-cols-12 border-b px-4 py-3 font-medium">
                    <div className="col-span-1">#</div>
                    <div className="col-span-3">Name</div>
                    <div className="col-span-3">Slug</div>
                    <div className="col-span-3">Agent Count</div>
                    <div className="col-span-2">Actions</div>
                  </div>
                  {[
                    { id: 1, name: "Chatbots", slug: "chatbots", agentCount: 48 },
                    { id: 2, name: "Image Generation", slug: "image-generation", agentCount: 36 },
                    { id: 3, name: "Writing", slug: "writing", agentCount: 42 },
                    { id: 4, name: "Productivity", slug: "productivity", agentCount: 29 },
                    { id: 5, name: "Development", slug: "development", agentCount: 33 },
                    { id: 6, name: "Data Analysis", slug: "data-analysis", agentCount: 25 },
                  ].map((category) => (
                    <div key={category.id} className="grid grid-cols-12 border-b px-4 py-3">
                      <div className="col-span-1">{category.id}</div>
                      <div className="col-span-3">{category.name}</div>
                      <div className="col-span-3">{category.slug}</div>
                      <div className="col-span-3">{category.agentCount}</div>
                      <div className="col-span-2">
                        <Button variant="ghost" size="sm" className="h-8 px-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-4 w-4"
                          >
                            <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
                          </svg>
                        </Button>
                        <Button variant="ghost" size="sm" className="h-8 px-2 text-red-500">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-4 w-4"
                          >
                            <path d="M3 6h18" />
                            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                            <line x1="10" y1="11" x2="10" y2="17" />
                            <line x1="14" y1="11" x2="14" y2="17" />
                          </svg>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="submissions" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Pending Submissions</CardTitle>
                <CardDescription>
                  Review and approve or reject agent submissions from users
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <div className="grid grid-cols-12 border-b px-4 py-3 font-medium">
                    <div className="col-span-1">#</div>
                    <div className="col-span-3">Name</div>
                    <div className="col-span-3">Category</div>
                    <div className="col-span-3">Submitted By</div>
                    <div className="col-span-2">Actions</div>
                  </div>
                  {[
                    { id: 1, name: "DataBot", category: "Data Analysis", submitter: "user123@example.com" },
                    { id: 2, name: "LogicFlow", category: "Development", submitter: "developer@example.com" },
                    { id: 3, name: "MindMapper", category: "Productivity", submitter: "creator@example.com" },
                  ].map((submission) => (
                    <div key={submission.id} className="grid grid-cols-12 border-b px-4 py-3">
                      <div className="col-span-1">{submission.id}</div>
                      <div className="col-span-3">{submission.name}</div>
                      <div className="col-span-3">{submission.category}</div>
                      <div className="col-span-3">{submission.submitter}</div>
                      <div className="col-span-2">
                        <Button variant="ghost" size="sm" className="h-8 px-2 text-green-500">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-4 w-4"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </Button>
                        <Button variant="ghost" size="sm" className="h-8 px-2 text-red-500">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-4 w-4"
                          >
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                          </svg>
                        </Button>
                        <Button variant="ghost" size="sm" className="h-8 px-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-4 w-4"
                          >
                            <circle cx="12" cy="12" r="1" />
                            <circle cx="19" cy="12" r="1" />
                            <circle cx="5" cy="12" r="1" />
                          </svg>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}