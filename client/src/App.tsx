import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import AgentDetail from "@/pages/agent-detail";
import CategoryPage from "@/pages/category";
import AllAgents from "@/pages/all-agents";
import Categories from "@/pages/categories";
import TopRated from "@/pages/top-rated";
import NewAdditions from "@/pages/new-additions";
import Submit from "@/pages/submit";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import Terms from "@/pages/terms";
import Privacy from "@/pages/privacy";
import Cookies from "@/pages/cookies";
import News from "@/pages/news";
import Tutorials from "@/pages/tutorials";
import Careers from "@/pages/careers";
import DownloadPage from "@/pages/download-page";

// Admin Pages
import AdminLogin from "@/pages/admin/login";
import AdminDashboard from "@/pages/admin/dashboard";
import AddAgent from "@/pages/admin/add-agent";
import AddCategory from "@/pages/admin/add-category";
import SubmissionDetail from "@/pages/admin/submission-detail";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/agent/:slug" component={AgentDetail} />
      <Route path="/category/:slug" component={CategoryPage} />
      <Route path="/agents" component={AllAgents} />
      <Route path="/search" component={AllAgents} />
      <Route path="/categories" component={Categories} />
      <Route path="/top-rated" component={TopRated} />
      <Route path="/new-additions" component={NewAdditions} />
      <Route path="/submit" component={Submit} />
      
      {/* Company pages */}
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/careers" component={Careers} />
      <Route path="/terms" component={Terms} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/cookies" component={Cookies} />
      
      {/* Resource pages */}
      <Route path="/news" component={News} />
      <Route path="/tutorials" component={Tutorials} />
      <Route path="/reviews" component={AllAgents} /> {/* Reusing AllAgents for now */}
      <Route path="/comparisons" component={AllAgents} /> {/* Reusing AllAgents for now */}
      <Route path="/guides" component={Tutorials} /> {/* Reusing Tutorials for now */}
      <Route path="/download" component={DownloadPage} />
      
      {/* Admin pages */}
      <Route path="/admin/login" component={AdminLogin} />
      <Route path="/admin/dashboard" component={AdminDashboard} />
      <Route path="/admin/add-agent" component={AddAgent} />
      <Route path="/admin/add-category" component={AddCategory} />
      <Route path="/admin/submission/:id" component={SubmissionDetail} />
      
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
