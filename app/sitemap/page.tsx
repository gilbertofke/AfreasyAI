import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/layout/footer"
import { ExternalLink, Home } from "lucide-react"

export default function SitemapPage() {
  // Define all available routes in the application
  const routes = [
    { path: "/", name: "Home", description: "Landing page" },
    { path: "/market", name: "Marketplace", description: "Browse AI servers" },
    { path: "/build", name: "Build", description: "Create workflows" },
    { path: "/featured", name: "Featured Builders", description: "Discover top builders" },
    { path: "/partners", name: "Partners", description: "Our partnership network" },
    { path: "/signup", name: "Sign Up", description: "Create an account" },
    { path: "/login", name: "Login", description: "Access your account" },
    { path: "/profile", name: "Profile", description: "Manage your profile" },
    { path: "/documentation", name: "Documentation", description: "Learn how to use the platform" },
    { path: "/pricing", name: "Pricing", description: "View pricing plans" },
    { path: "/submit-server", name: "Submit Server", description: "Submit your AI server" },
    { path: "/sitemap", name: "Sitemap", description: "View all pages" },
  ]

  // Group routes by category
  const routeCategories = {
    "Main Pages": ["/", "/market", "/build", "/featured", "/partners"],
    Account: ["/signup", "/login", "/profile"],
    Information: ["/documentation", "/pricing"],
    Actions: ["/submit-server"],
    Utility: ["/sitemap"],
  }

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow container px-4 md:px-6 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold font-barlow mb-2">Sitemap</h1>
              <p className="text-muted-foreground">All available pages in the Afreasy Marketplace</p>
            </div>
            <Button variant="outline" asChild>
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {Object.entries(routeCategories).map(([category, paths]) => (
              <Card key={category}>
                <CardHeader>
                  <CardTitle>{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {paths.map((path) => {
                      const route = routes.find((r) => r.path === path)
                      if (!route) return null

                      return (
                        <li key={path} className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">{route.name}</p>
                            <p className="text-sm text-muted-foreground">{route.description}</p>
                          </div>
                          <Button variant="ghost" size="sm" asChild>
                            <Link href={path}>
                              <ExternalLink className="h-4 w-4" />
                              <span className="sr-only">Visit {route.name}</span>
                            </Link>
                          </Button>
                        </li>
                      )
                    })}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-primary/5 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Navigation Check</h2>
            <p className="mb-4">
              All buttons and links in the application should navigate to the pages listed above. If you find any broken
              links or navigation issues, please report them.
            </p>
            <div className="flex gap-4">
              <Button variant="primary" asChild>
                <Link href="/documentation">View Documentation</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/submit-server">Submit a Server</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

