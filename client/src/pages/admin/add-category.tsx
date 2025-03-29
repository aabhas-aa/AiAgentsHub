import { useState } from "react";
import { useLocation } from "wouter";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { insertCategorySchema } from "@shared/schema";
import { 
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";

// Extend the insert schema with form-specific validation
const formSchema = insertCategorySchema.extend({
  // Define additional properties or validation if needed
});

type FormData = z.infer<typeof formSchema>;

// Icon options
const iconOptions = [
  { value: "message-circle", label: "Chat" },
  { value: "image", label: "Image" },
  { value: "pen", label: "Writing" },
  { value: "check-square", label: "Productivity" },
  { value: "code", label: "Development" },
  { value: "bar-chart", label: "Data Analysis" },
  { value: "more-horizontal", label: "Other" },
];

// Color options
const colorOptions = [
  { value: "purple", label: "Purple", bg: "bg-purple-100", text: "text-purple-700" },
  { value: "pink", label: "Pink", bg: "bg-pink-100", text: "text-pink-700" },
  { value: "indigo", label: "Indigo", bg: "bg-indigo-100", text: "text-indigo-700" },
  { value: "green", label: "Green", bg: "bg-green-100", text: "text-green-700" },
  { value: "amber", label: "Amber", bg: "bg-amber-100", text: "text-amber-700" },
  { value: "blue", label: "Blue", bg: "bg-blue-100", text: "text-blue-700" },
];

export default function AddCategory() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      slug: "",
      icon: "more-horizontal",
      iconBgColor: "bg-purple-100",
      iconColor: "text-purple-700",
      agentCount: 0,
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    // Simulate API call
    try {
      // In a real app, this would be an API call to create the category
      console.log("Category data to submit:", data);
      
      // Simulate a delay for the API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Category created",
        description: `${data.name} has been added successfully`,
      });
      
      setLocation("/admin/dashboard");
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to create category. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Helper function to generate slug from name
  const generateSlug = (name: string) => {
    return name.toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');
  };

  // Auto-generate slug when name changes
  const watchedName = form.watch("name");
  if (watchedName && !form.getValues("slug")) {
    form.setValue("slug", generateSlug(watchedName));
  }

  // Set icon color based on selection
  const handleColorChange = (colorValue: string) => {
    const color = colorOptions.find(c => c.value === colorValue);
    if (color) {
      form.setValue("iconBgColor", color.bg);
      form.setValue("iconColor", color.text);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow container max-w-4xl mx-auto px-4 py-8 pt-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold">Add New Category</h1>
          <Button variant="outline" asChild>
            <a href="/admin/dashboard">Cancel</a>
          </Button>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Category Information</CardTitle>
            <CardDescription>
              Enter the details for the new category to organize agents
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Category name" {...field} />
                        </FormControl>
                        <FormDescription>
                          The display name of the category
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="slug"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Slug</FormLabel>
                        <FormControl>
                          <Input placeholder="category-name" {...field} />
                        </FormControl>
                        <FormDescription>
                          URL-friendly identifier (auto-generated)
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="icon"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Icon</FormLabel>
                        <Select 
                          onValueChange={field.onChange} 
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select an icon" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {iconOptions.map((icon) => (
                              <SelectItem key={icon.value} value={icon.value}>
                                <div className="flex items-center">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="mr-2"
                                  >
                                    {icon.value === "message-circle" && (
                                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                                    )}
                                    {icon.value === "image" && (
                                      <>
                                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                                        <circle cx="8.5" cy="8.5" r="1.5" />
                                        <polyline points="21 15 16 10 5 21" />
                                      </>
                                    )}
                                    {icon.value === "pen" && (
                                      <path d="M12 19l7-7 3 3-7 7-3-3z" />
                                    )}
                                    {icon.value === "check-square" && (
                                      <>
                                        <polyline points="9 11 12 14 22 4" />
                                        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                                      </>
                                    )}
                                    {icon.value === "code" && (
                                      <>
                                        <polyline points="16 18 22 12 16 6" />
                                        <polyline points="8 6 2 12 8 18" />
                                      </>
                                    )}
                                    {icon.value === "bar-chart" && (
                                      <>
                                        <line x1="12" y1="20" x2="12" y2="10" />
                                        <line x1="18" y1="20" x2="18" y2="4" />
                                        <line x1="6" y1="20" x2="6" y2="16" />
                                      </>
                                    )}
                                    {icon.value === "more-horizontal" && (
                                      <>
                                        <circle cx="12" cy="12" r="1" />
                                        <circle cx="19" cy="12" r="1" />
                                        <circle cx="5" cy="12" r="1" />
                                      </>
                                    )}
                                  </svg>
                                  {icon.label}
                                </div>
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormDescription>
                          The icon representing this category
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="space-y-2">
                    <FormLabel>Icon Color</FormLabel>
                    <Select 
                      onValueChange={handleColorChange}
                      defaultValue="purple"
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a color" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {colorOptions.map((color) => (
                          <SelectItem key={color.value} value={color.value}>
                            <div className="flex items-center">
                              <div 
                                className={`w-4 h-4 rounded-full mr-2 ${color.text}`}
                                style={{ backgroundColor: `rgb(var(--${color.value})` }}
                              ></div>
                              {color.label}
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormDescription>
                      The color scheme for the category icon
                    </FormDescription>
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <Button 
                    type="submit" 
                    className="w-full md:w-auto"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Creating..." : "Create Category"}
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}