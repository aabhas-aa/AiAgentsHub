import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow flex items-center justify-center px-4 py-12">
        <div className="max-w-md text-center">
          <h2 className="text-6xl font-bold text-purple-600 mb-6">404</h2>
          <h1 className="text-3xl font-bold mb-3">Page Not Found</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Sorry, the page you're looking for doesn't exist or has been moved.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild>
              <Link href="/">Return Home</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/categories">Browse Categories</Link>
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}