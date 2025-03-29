import { useState } from "react";
import { useLocation } from "wouter";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

// Mock submission data (would normally come from API)
const mockSubmission = {
  id: 1,
  name: "DataBot",
  slug: "databot",
  description: "An advanced AI assistant focused on data analytics and visualization, helping users get meaningful insights from complex datasets with simple natural language queries.",
  imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
  websiteUrl: "https://databot.example.com",
  category: "Data Analysis",
  categoryId: 6,
  submittedBy: "user123@example.com",
  submittedDate: "2023-03-15",
  status: "pending",
  features: [
    "Natural language querying of data",
    "Automated data visualization",
    "Trend analysis and predictions",
    "Integration with popular data sources",
    "Automated report generation"
  ],
  useCases: [
    "Business analysts seeking insights from sales data",
    "Marketing teams analyzing campaign performance",
    "Researchers exploring patterns in experimental data"
  ]
};

export default function SubmissionDetail() {
  const [reviewNotes, setReviewNotes] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [, setLocation] = useLocation();
  const { toast } = useToast();

  const handleApprove = async () => {
    setIsProcessing(true);
    
    // Simulate API call to approve submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Submission approved",
        description: `${mockSubmission.name} has been approved and added to the directory.`,
      });
      
      setLocation("/admin/dashboard");
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to approve submission. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  const handleReject = async () => {
    setIsProcessing(true);
    
    // Simulate API call to reject submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Submission rejected",
        description: `${mockSubmission.name} has been rejected.`,
      });
      
      setLocation("/admin/dashboard");
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to reject submission. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow container max-w-4xl mx-auto px-4 py-8 pt-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold">Submission Details</h1>
            <p className="text-gray-500">
              Reviewing submission #{mockSubmission.id} from {mockSubmission.submittedBy}
            </p>
          </div>
          <Button variant="outline" asChild>
            <a href="/admin/dashboard">Back to Dashboard</a>
          </Button>
        </div>
        
        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-2xl">{mockSubmission.name}</CardTitle>
                  <CardDescription>
                    Submitted on {mockSubmission.submittedDate}
                  </CardDescription>
                </div>
                <Badge variant="outline" className="uppercase px-3 py-1 text-sm">
                  {mockSubmission.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                    Image Preview
                  </h3>
                  <div className="aspect-video rounded-md overflow-hidden bg-gray-100 dark:bg-gray-800 relative">
                    <img 
                      src={mockSubmission.imageUrl} 
                      alt={mockSubmission.name}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                      Category
                    </h3>
                    <p>{mockSubmission.category}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                      Website URL
                    </h3>
                    <a 
                      href={mockSubmission.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:underline"
                    >
                      {mockSubmission.websiteUrl}
                    </a>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                      Slug
                    </h3>
                    <p>{mockSubmission.slug}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                      Submitted By
                    </h3>
                    <p>{mockSubmission.submittedBy}</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                  Description
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {mockSubmission.description}
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                    Features
                  </h3>
                  <ul className="list-disc pl-5 space-y-1">
                    {mockSubmission.features.map((feature, index) => (
                      <li key={index} className="text-gray-700 dark:text-gray-300">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                    Use Cases
                  </h3>
                  <ul className="list-disc pl-5 space-y-1">
                    {mockSubmission.useCases.map((useCase, index) => (
                      <li key={index} className="text-gray-700 dark:text-gray-300">
                        {useCase}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div>
                <Label htmlFor="review-notes">Review Notes</Label>
                <Textarea
                  id="review-notes"
                  placeholder="Add your review notes here..."
                  className="mt-1"
                  value={reviewNotes}
                  onChange={(e) => setReviewNotes(e.target.value)}
                />
              </div>
            </CardContent>
            <CardFooter className="flex flex-col sm:flex-row gap-3 justify-end">
              <Button 
                variant="destructive" 
                onClick={handleReject}
                disabled={isProcessing}
              >
                Reject Submission
              </Button>
              <Button 
                onClick={handleApprove}
                disabled={isProcessing}
              >
                Approve & Publish
              </Button>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  );
}