import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/layout/footer"
import { Home, Search, ArrowLeft, HelpCircle } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow flex items-center justify-center">
        <div className="container px-4 md:px-6 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            {/* Visual Element */}
            <div className="relative w-48 h-48 mx-auto mb-8">
              <div className="absolute inset-0 bg-primary/10 rounded-full animate-pulse-slow"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-9xl font-bold text-primary/20">4</div>
                <div className="relative">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                    <svg width="32" height="32" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M40 8L50 28H30L40 8Z" fill="#FFFFFF" />
                      <path d="M40 72L30 52H50L40 72Z" fill="#FFFFFF" />
                      <path d="M8 40L28 30V50L8 40Z" fill="#FFFFFF" />
                      <path d="M72 40L52 50V30L72 40Z" fill="#FFFFFF" />
                      <circle cx="40" cy="40" r="10" fill="#FFFFFF" />
                    </svg>
                  </div>
                </div>
                <div className="text-9xl font-bold text-primary/20">4</div>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold font-barlow mb-4">Page Not Found</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-xl mx-auto">
              Oops! The page you're looking for doesn't exist or has been moved. Let's get you back on track.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button variant="primary" size="lg" asChild>
                <Link href="/" className="flex items-center">
                  <Home className="mr-2 h-5 w-5" />
                  Back to Home
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/market" className="flex items-center">
                  <Search className="mr-2 h-5 w-5" />
                  Explore Marketplace
                </Link>
              </Button>
            </div>

            <div className="flex flex-col md:flex-row gap-8 justify-center items-center text-sm text-muted-foreground">
              <Link href="/documentation" className="flex items-center hover:text-primary transition-colors">
                <HelpCircle className="mr-2 h-4 w-4" />
                Check Documentation
              </Link>
              <Link href="/" className="flex items-center hover:text-primary transition-colors">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Return to Previous Page
              </Link>
            </div>
          </div>
        </div>
      </main>

      <div className="bg-primary/5 py-8">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold font-barlow mb-4">Looking for Something Specific?</h2>
            <p className="text-muted-foreground mb-6">
              Try searching for what you need or check out our popular categories below.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Button variant="outline" size="sm" asChild>
                <Link href="/market?category=agriculture">Agriculture AI</Link>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <Link href="/market?category=healthcare">Healthcare Solutions</Link>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <Link href="/market?category=education">Education Tools</Link>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <Link href="/market?category=finance">Financial Services</Link>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <Link href="/documentation">Documentation</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

