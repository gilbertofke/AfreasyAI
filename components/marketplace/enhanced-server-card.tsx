"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, Check, ChevronDown, ChevronUp, ExternalLink, Download, Share2, BookmarkPlus } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MPesaModal } from "@/components/payment/mpesa-modal"

interface ServerCardProps {
  title: string
  description: string
  price: number
  rating: number
  creator: string
  creatorId?: string
  isVerified: boolean
  impactTags: string[]
  complianceBadges: {
    name: string
    status: "certified" | "needs-localization"
  }[]
  image: string
  detailedDescription?: string
  features?: string[]
  useCases?: { title: string; description: string }[]
  apiEndpoints?: { name: string; method: string; description: string }[]
  downloads?: number
  lastUpdated?: string
}

export function EnhancedServerCard({
  title,
  description,
  price,
  rating,
  creator,
  creatorId,
  isVerified,
  impactTags,
  complianceBadges,
  image,
  detailedDescription = "This server provides AI-powered functionality specifically designed for African use cases.",
  features = ["Easy integration", "African-specific optimizations", "Low-bandwidth support"],
  useCases = [
    { title: "Small Business", description: "Perfect for small businesses looking to automate processes." },
    { title: "Enterprise", description: "Scalable for large organizations with complex needs." },
  ],
  apiEndpoints = [
    { name: "/api/predict", method: "POST", description: "Make predictions based on input data" },
    { name: "/api/analyze", method: "POST", description: "Analyze data for insights" },
  ],
  downloads = Math.floor(Math.random() * 1000) + 100,
  lastUpdated = "2023-12-15",
}: ServerCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false)
  const [isDeploying, setIsDeploying] = useState(false)

  const handleDeploy = () => {
    setIsDeploying(true)
    setTimeout(() => {
      setIsDeploying(false)
      // Show success message or redirect
    }, 2000)
  }

  return (
    <Card variant="server" className="overflow-hidden flex flex-col h-full transition-all duration-300 hover:shadow-md">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-2 right-2 flex gap-1">
          <Badge variant="compliance" className="flex items-center gap-1">
            <span className="sr-only">Price</span>
            {price < 5 ? "$" : price < 20 ? "$$" : "$$$"}
          </Badge>
          <Badge variant="secondary" className="flex items-center gap-1">
            <Download className="w-3 h-3 mr-1" />
            {downloads}
          </Badge>
        </div>
      </div>

      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl">{title}</CardTitle>
          <div className="flex items-center">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${i < rating ? "fill-primary text-primary" : "fill-gray-200 text-gray-200"}`}
              />
            ))}
          </div>
        </div>
        <div className="flex items-center text-sm text-muted-foreground">
          <span>By {creator}</span>
          {isVerified && (
            <Badge variant="secondary" className="ml-2 flex items-center gap-1">
              <Check className="w-3 h-3" />
              <span>Verified</span>
            </Badge>
          )}
        </div>
      </CardHeader>

      <CardContent className="flex-grow">
        <p className="text-sm text-muted-foreground">{description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {impactTags.map((tag) => (
            <Badge key={tag} variant="impact">
              #{tag}
            </Badge>
          ))}
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {complianceBadges.map((badge) => (
            <Badge
              key={badge.name}
              variant={badge.status === "certified" ? "compliance" : "complianceWarning"}
              className="flex items-center gap-1"
            >
              <span className="w-2 h-2 rounded-full bg-current" />
              {badge.name}
            </Badge>
          ))}
        </div>

        {isExpanded && (
          <div className="mt-4 pt-4 border-t border-gray-100 animate-safari-sunset">
            <h4 className="font-medium text-sm mb-2">Key Features</h4>
            <ul className="text-sm text-muted-foreground space-y-1 mb-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <h4 className="font-medium text-sm mb-2">Use Cases</h4>
            <div className="space-y-2 mb-4">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-gray-50 p-2 rounded-md">
                  <h5 className="text-sm font-medium">{useCase.title}</h5>
                  <p className="text-xs text-muted-foreground">{useCase.description}</p>
                </div>
              ))}
            </div>

            <div className="text-xs text-muted-foreground">
              <p>Last updated: {lastUpdated}</p>
            </div>
          </div>
        )}
      </CardContent>

      <CardFooter className="pt-2 flex flex-col gap-2">
        <div className="flex w-full gap-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="primary" className="flex-1">
                View Details
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px]">
              <DialogHeader>
                <DialogTitle>{title}</DialogTitle>
                <DialogDescription>
                  By {creator} • {downloads} downloads
                </DialogDescription>
              </DialogHeader>

              <Tabs defaultValue="overview">
                <TabsList className="grid grid-cols-3">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="api">API</TabsTrigger>
                  <TabsTrigger value="pricing">Pricing</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-4">
                  <div>
                    <img
                      src={image || "/placeholder.svg"}
                      alt={title}
                      className="w-full h-48 object-cover rounded-md mb-4"
                    />
                    <p className="text-sm">{detailedDescription}</p>
                  </div>

                  <div>
                    <h4 className="font-medium text-sm mb-2">Key Features</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium text-sm mb-2">Compliance</h4>
                    <div className="flex flex-wrap gap-2">
                      {complianceBadges.map((badge) => (
                        <Badge
                          key={badge.name}
                          variant={badge.status === "certified" ? "compliance" : "complianceWarning"}
                          className="flex items-center gap-1"
                        >
                          <span className="w-2 h-2 rounded-full bg-current" />
                          {badge.name}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="api" className="space-y-4">
                  <div>
                    <h4 className="font-medium text-sm mb-2">API Endpoints</h4>
                    <div className="space-y-2">
                      {apiEndpoints.map((endpoint, index) => (
                        <div key={index} className="bg-gray-50 p-3 rounded-md">
                          <div className="flex items-center gap-2">
                            <Badge variant="outline" className="text-xs">
                              {endpoint.method}
                            </Badge>
                            <code className="text-sm font-mono">{endpoint.name}</code>
                          </div>
                          <p className="text-xs text-muted-foreground mt-1">{endpoint.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-sm mb-2">Authentication</h4>
                    <p className="text-sm text-muted-foreground">
                      API access requires an API key. You will receive your API key after purchase.
                    </p>
                  </div>
                </TabsContent>

                <TabsContent value="pricing" className="space-y-4">
                  <div className="bg-primary/5 p-4 rounded-md">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-medium">Standard License</h4>
                      <span className="font-bold text-lg">${price.toFixed(2)}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      One-time payment for unlimited access to this server.
                    </p>
                    <ul className="text-sm space-y-1 mb-4">
                      <li className="flex items-start">
                        <Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                        <span>Unlimited API calls</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                        <span>Email support</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                        <span>Free updates</span>
                      </li>
                    </ul>
                    <Button variant="primary" className="w-full" onClick={() => setIsPaymentModalOpen(true)}>
                      Purchase Now
                    </Button>
                  </div>

                  <div>
                    <h4 className="font-medium text-sm mb-2">Payment Methods</h4>
                    <div className="flex gap-2">
                      <Badge variant="outline">M-Pesa</Badge>
                      <Badge variant="outline">Flutterwave</Badge>
                      <Badge variant="outline">Airtel Money</Badge>
                      <Badge variant="outline">Crypto</Badge>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>

              <DialogFooter className="flex justify-between items-center">
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Share2 className="w-4 h-4 mr-1" />
                    Share
                  </Button>
                  <Button variant="outline" size="sm">
                    <BookmarkPlus className="w-4 h-4 mr-1" />
                    Save
                  </Button>
                </div>
                <Button variant="primary" onClick={handleDeploy} disabled={isDeploying}>
                  {isDeploying ? "Deploying..." : "Deploy to Workflow"}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <Button
            variant="outline"
            size="icon"
            onClick={() => setIsExpanded(!isExpanded)}
            aria-label={isExpanded ? "Show less" : "Show more"}
          >
            {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </Button>
        </div>

        {isExpanded && (
          <div className="w-full flex gap-2">
            <Button variant="outline" className="flex-1" size="sm" onClick={() => setIsPaymentModalOpen(true)}>
              Purchase (${price.toFixed(2)})
            </Button>
            <Button variant="secondary" className="flex-1" size="sm" asChild>
              <a href={`/builder/${creatorId || "demo"}`} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-3 h-3 mr-1" />
                Creator
              </a>
            </Button>
          </div>
        )}
      </CardFooter>

      <MPesaModal isOpen={isPaymentModalOpen} onClose={() => setIsPaymentModalOpen(false)} amount={price} />
    </Card>
  )
}

