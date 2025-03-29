import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import Header from '@/components/ui/header';
import Footer from '@/components/ui/footer';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from '@/hooks/use-toast';
import { categoriesMockData } from '@/lib/mock-data';
import { insertAgentSchema } from '@shared/schema';

// Extend the schema with validation rules
const submitAgentSchema = insertAgentSchema.extend({
  name: z.string().min(3, {
    message: "Agent name must be at least 3 characters",
  }),
  description: z.string().min(10, {
    message: "Description must be at least 10 characters",
  }),
  websiteUrl: z.string().url({
    message: "Please enter a valid URL",
  }),
  imageUrl: z.string().url({
    message: "Please enter a valid URL for the image",
  }),
  premiumPrice: z.string().optional(),
  enterprisePrice: z.string().optional(),
  addedDate: z.string().optional(),
  agreeToTerms: z.boolean().refine(val => val === true, {
    message: "You must agree to the terms and conditions",
  }),
});

type SubmitAgentForm = z.infer<typeof submitAgentSchema> & {
  agreeToTerms: boolean;
};

export default function Submit() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Form definition
  const form = useForm<SubmitAgentForm>({
    resolver: zodResolver(submitAgentSchema),
    defaultValues: {
      name: '',
      slug: '',
      description: '',
      websiteUrl: '',
      imageUrl: '',
      categoryId: undefined,
      rating: 0,
      userCount: 0,
      isFree: false,
      premiumPrice: '',
      enterprisePrice: '',
      featured: false,
      isNew: true,
      addedDate: new Date().toISOString(),
      agreeToTerms: false,
    },
  });
  
  // Watch the name field to generate slug
  const name = form.watch('name');
  
  // Generate slug from name
  const generateSlug = (name: string) => {
    return name
      .toLowerCase()
      .replace(/[^\w\s]/gi, '')
      .replace(/\s+/g, '-');
  };
  
  // Update slug when name changes
  useEffect(() => {
    if (name) {
      form.setValue('slug', generateSlug(name), { shouldValidate: true });
    }
  }, [name, form]);
  
  const onSubmit = async (data: SubmitAgentForm) => {
    setIsSubmitting(true);
    
    // Simulate API call delay
    setTimeout(() => {
      console.log('Submitting agent:', data);
      
      toast({
        title: "Submission successful!",
        description: "Thank you for submitting your AI agent. Our team will review it shortly.",
      });
      
      // Reset form
      form.reset();
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-purple-700 to-indigo-800 py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Submit Your AI Agent</h1>
            <p className="text-white/80 max-w-3xl mb-6">
              Help us grow our directory by submitting your AI agent for review. We welcome innovative tools that can benefit our community.
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-sm p-6 md:p-8 border border-neutral-200">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Agent Name</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g. ChatGPT, Midjourney" {...field} />
                      </FormControl>
                      <FormDescription>
                        The name of your AI agent as it appears to users.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Briefly describe what your AI agent does and its main benefits..." 
                          className="resize-none min-h-[100px]"
                          {...field} 
                        />
                      </FormControl>
                      <FormDescription>
                        A concise description of your AI agent's capabilities and use cases.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="websiteUrl"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Website URL</FormLabel>
                        <FormControl>
                          <Input placeholder="https://your-agent-website.com" {...field} />
                        </FormControl>
                        <FormDescription>
                          The official website for your AI agent.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="imageUrl"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Logo/Image URL</FormLabel>
                        <FormControl>
                          <Input placeholder="https://your-image-url.com/logo.png" {...field} />
                        </FormControl>
                        <FormDescription>
                          A URL to your agent's logo or representative image.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="categoryId"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Category</FormLabel>
                      <Select 
                        onValueChange={(value) => field.onChange(parseInt(value))}
                        value={field.value?.toString()}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a category" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {categoriesMockData.map((category) => (
                            <SelectItem key={category.id} value={category.id.toString()}>
                              {category.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormDescription>
                        Select the category that best fits your AI agent.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <FormField
                    control={form.control}
                    name="isFree"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0 p-4 border border-neutral-200 rounded-md">
                        <FormControl>
                          <Checkbox
                            checked={field.value || false}
                            onCheckedChange={(checked) => field.onChange(!!checked)}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>Free Tier</FormLabel>
                          <FormDescription>
                            Has a free tier available
                          </FormDescription>
                        </div>
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="premiumPrice"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Premium Price</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g. $10/month" {...field} />
                        </FormControl>
                        <FormDescription>
                          If applicable
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="enterprisePrice"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Enterprise Price</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g. Contact for pricing" {...field} />
                        </FormControl>
                        <FormDescription>
                          If applicable
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="agreeToTerms"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 p-4 border border-neutral-200 rounded-md">
                      <FormControl>
                        <Checkbox
                          checked={field.value || false}
                          onCheckedChange={(checked) => field.onChange(!!checked)}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Terms and Conditions</FormLabel>
                        <FormDescription>
                          I confirm that I have the right to submit this agent, and I agree to the terms and conditions of AI Agents Hub.
                        </FormDescription>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full bg-purple-700 hover:bg-purple-800 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit AI Agent for Review"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}