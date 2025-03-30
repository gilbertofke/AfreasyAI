"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { EnhancedServerCard } from "@/components/marketplace/enhanced-server-card"
import { FilterPanel } from "@/components/marketplace/filter-panel"
import { Footer } from "@/components/layout/footer"
import { EnhancedCTA } from "@/components/ui/enhanced-cta"
import { Menu, Search, Filter, X, AlertCircle } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function MarketplacePage() {
  // Existing code remains the same
  const searchParams = useSearchParams()
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [showSubmissionAlert, setShowSubmissionAlert] = useState(false)

  useEffect(() => {
    // Check if the user was redirected from the submit server page
    const submitted = searchParams.get("submitted")
    if (submitted === "true") {
      setShowSubmissionAlert(true)

      // Hide the alert after 5 seconds
      const timer = setTimeout(() => {
        setShowSubmissionAlert(false)
      }, 5000)

      return () => clearTimeout(timer)
    }
  }, [searchParams])

  const servers = [
    {
      title: "Farmer's Market Connect",
      description: "Connect small-scale farmers directly with urban markets using AI-powered logistics optimization.",
      price: 4.99,
      rating: 4,
      creator: "AgriTech Kenya",
      creatorId: "agritech-kenya",
      isVerified: true,
      impactTags: ["AgriTech", "FarmersFirst", "AfricaImpact"],
      complianceBadges: [
        { name: "GDPR-Africa", status: "certified" as const },
        { name: "Kenya DPA", status: "certified" as const },
      ],
      image: "/placeholder.svg?height=200&width=400",
      downloads: 1245,
      lastUpdated: "2023-12-15",
      detailedDescription:
        "Farmer's Market Connect is an AI-powered platform that connects small-scale farmers in rural areas directly with urban markets. The platform uses machine learning algorithms to optimize logistics, predict market demand, and ensure fair pricing for farmers. By eliminating middlemen and reducing post-harvest losses, the platform helps farmers increase their income while providing urban consumers with fresh, locally-grown produce.",
      features: [
        "Real-time market price monitoring",
        "Logistics optimization for rural areas",
        "Mobile money integration for instant payments",
        "Offline functionality for areas with limited connectivity",
        "SMS notifications for farmers without smartphones",
      ],
      useCases: [
        {
          title: "Small-scale Farmers",
          description: "Connect directly with urban markets and get fair prices for your produce.",
        },
        {
          title: "Cooperatives",
          description: "Aggregate produce from multiple farmers and coordinate logistics efficiently.",
        },
        { title: "Retailers", description: "Source fresh produce directly from farmers with reliable delivery." },
      ],
    },
    {
      title: "MediTrack Nigeria",
      description: "Verify pharmaceutical authenticity and track medical supplies across Nigeria's healthcare system.",
      price: 12.99,
      rating: 5,
      creator: "HealthTech Lagos",
      creatorId: "healthtech-lagos",
      isVerified: true,
      impactTags: ["HealthTech", "NAFDAC", "AfricaImpact"],
      complianceBadges: [
        { name: "NAFDAC", status: "certified" as const },
        { name: "GDPR-Africa", status: "needs-localization" as const },
      ],
      image: "/placeholder.svg?height=200&width=400",
      downloads: 987,
      lastUpdated: "2024-01-10",
      detailedDescription:
        "MediTrack Nigeria is a comprehensive pharmaceutical verification and tracking system designed specifically for Nigeria's healthcare ecosystem. The platform integrates with NAFDAC's database to verify the authenticity of medications, tracks medical supplies across the supply chain, and helps healthcare facilities manage their inventory efficiently. By combating counterfeit drugs and ensuring proper storage conditions, MediTrack helps improve patient safety and healthcare outcomes.",
      features: [
        "NAFDAC database integration for real-time verification",
        "QR code scanning for quick authentication",
        "Temperature and humidity monitoring for sensitive medications",
        "Expiry date tracking and alerts",
        "Inventory management for healthcare facilities",
      ],
      useCases: [
        { title: "Pharmacies", description: "Verify medication authenticity and manage inventory efficiently." },
        { title: "Hospitals", description: "Track medical supplies and ensure proper storage conditions." },
        { title: "Distributors", description: "Monitor the supply chain and prevent counterfeit products." },
      ],
    },
    {
      title: "EduConnect SA",
      description: "Connect students with educational resources and tutors across South Africa's rural communities.",
      price: 2.99,
      rating: 4,
      creator: "EduTech Cape Town",
      creatorId: "edutech-capetown",
      isVerified: false,
      impactTags: ["EduTech", "RuralAccess", "AfricaImpact"],
      complianceBadges: [{ name: "POPIA", status: "certified" as const }],
      image: "/placeholder.svg?height=200&width=400",
      downloads: 856,
      lastUpdated: "2023-11-20",
      detailedDescription:
        "EduConnect SA is an educational platform designed to bridge the digital divide in South Africa's rural communities. The platform connects students with educational resources, tutors, and mentors, providing access to quality education regardless of location. With features like offline content access, low-bandwidth optimization, and support for multiple South African languages, EduConnect SA is making education more accessible and inclusive across the country.",
      features: [
        "Offline content access for areas with limited connectivity",
        "Support for multiple South African languages",
        "Low-bandwidth optimization for rural areas",
        "Peer-to-peer learning communities",
        "Mentor matching based on student needs",
      ],
      useCases: [
        { title: "Rural Schools", description: "Access digital educational resources and connect with urban schools." },
        { title: "Students", description: "Find tutors and mentors to help with specific subjects." },
        { title: "Teachers", description: "Access teaching resources and professional development opportunities." },
      ],
    },
    {
      title: "FinTrack Ghana",
      description: "Mobile-first financial tracking and budgeting tool for small businesses across Ghana.",
      price: 3.99,
      rating: 3,
      creator: "AccraTech",
      creatorId: "accratech",
      isVerified: true,
      impactTags: ["FinTech", "SMESupport", "AfricaImpact"],
      complianceBadges: [{ name: "Ghana DPA", status: "certified" as const }],
      image: "/placeholder.svg?height=200&width=400",
      downloads: 723,
      lastUpdated: "2023-10-05",
      detailedDescription:
        "FinTrack Ghana is a mobile-first financial tracking and budgeting tool designed specifically for small businesses in Ghana. The platform helps entrepreneurs track income and expenses, manage inventory, generate financial reports, and make data-driven business decisions. With features like mobile money integration, offline functionality, and support for multiple languages, FinTrack Ghana is helping small businesses across the country improve their financial management and grow sustainably.",
      features: [
        "Mobile money integration for seamless transactions",
        "Offline functionality for areas with limited connectivity",
        "Financial reports and insights",
        "Inventory management",
        "Tax calculation and compliance assistance",
      ],
      useCases: [
        {
          title: "Market Vendors",
          description: "Track daily sales and expenses, manage inventory, and identify profitable products.",
        },
        {
          title: "Service Providers",
          description: "Track client payments, manage expenses, and generate professional invoices.",
        },
        {
          title: "Small Manufacturers",
          description: "Track production costs, manage inventory, and optimize pricing.",
        },
      ],
    },
    {
      title: "Solar Monitor Ethiopia",
      description: "Monitor and optimize solar panel performance for rural electrification projects.",
      price: 7.99,
      rating: 4,
      creator: "AddisEnergy",
      creatorId: "addis-energy",
      isVerified: false,
      impactTags: ["CleanEnergy", "RuralDev", "AfricaImpact"],
      complianceBadges: [{ name: "GDPR-Africa", status: "needs-localization" as const }],
      image: "/placeholder.svg?height=200&width=400",
      downloads: 612,
      lastUpdated: "2023-09-15",
      detailedDescription:
        "Solar Monitor Ethiopia is a comprehensive monitoring and optimization platform for solar energy systems in rural electrification projects. The platform collects data from solar panels, batteries, and inverters to track performance, identify issues, and optimize energy production. With features like remote monitoring, predictive maintenance, and energy consumption analytics, Solar Monitor Ethiopia is helping expand access to clean energy across rural Ethiopia while ensuring the sustainability of solar installations.",
      features: [
        "Remote monitoring of solar system performance",
        "Predictive maintenance to prevent system failures",
        "Energy consumption analytics",
        "Weather data integration for performance optimization",
        "SMS alerts for system issues",
      ],
      useCases: [
        {
          title: "Rural Electrification Projects",
          description: "Monitor and maintain solar installations across multiple villages.",
        },
        { title: "Community Centers", description: "Optimize energy usage and ensure system reliability." },
        { title: "Healthcare Facilities", description: "Ensure reliable power for critical medical equipment." },
      ],
    },
    {
      title: "Logistics Tracker Rwanda",
      description: "Track and optimize delivery routes across Rwanda's challenging terrain.",
      price: 9.99,
      rating: 5,
      creator: "KigaliTech",
      creatorId: "kigali-tech",
      isVerified: true,
      impactTags: ["Logistics", "RuralAccess", "AfricaImpact"],
      complianceBadges: [{ name: "Rwanda DPA", status: "certified" as const }],
      image: "/placeholder.svg?height=200&width=400",
      downloads: 489,
      lastUpdated: "2023-08-20",
      detailedDescription:
        "Logistics Tracker Rwanda is a specialized logistics platform designed to address the unique challenges of Rwanda's terrain. The platform uses AI to optimize delivery routes across hilly landscapes, unpaved roads, and varying weather conditions. With features like real-time tracking, route optimization, and delivery confirmation, Logistics Tracker Rwanda is helping businesses deliver goods efficiently and reliably across the country, including remote rural areas.",
      features: [
        "AI-powered route optimization for challenging terrain",
        "Real-time tracking of deliveries",
        "Weather-adaptive routing",
        "Delivery confirmation with photo evidence",
        "Performance analytics for drivers and vehicles",
      ],
      useCases: [
        {
          title: "E-commerce Businesses",
          description: "Deliver products to customers across Rwanda, including rural areas.",
        },
        {
          title: "Medical Supply Chains",
          description: "Ensure timely delivery of medications and supplies to healthcare facilities.",
        },
        { title: "Agricultural Cooperatives", description: "Transport produce from farms to markets efficiently." },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="container px-4 md:px-6 py-4 flex items-center justify-between">
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsFilterOpen(true)}>
            <Menu className="h-5 w-5" />
          </Button>

          <h1 className="text-2xl font-bold font-barlow">Marketplace</h1>

          <div className="relative w-full max-w-md mx-4 hidden md:block">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search servers..."
              className="pl-10 h-10 rounded-full border-2 border-primary/30 focus:border-primary"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <Button
            variant="primary"
            asChild
            className="animate-pulse-slow shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <a href="/submit-server">Submit Server</a>
          </Button>
        </div>
      </header>

      <div className="container px-4 md:px-6 py-6 md:py-8">
        {showSubmissionAlert && (
          <Alert className="mb-6 bg-green-50 border-green-200">
            <AlertCircle className="h-4 w-4 text-green-600" />
            <AlertTitle className="text-green-600">Success!</AlertTitle>
            <AlertDescription className="text-green-600">
              Your server has been submitted successfully and is now under review.
            </AlertDescription>
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 text-green-600 hover:text-green-800 hover:bg-green-100"
              onClick={() => setShowSubmissionAlert(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </Alert>
        )}

        <div className="md:hidden relative mb-4">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search servers..."
            className="pl-10 h-10 rounded-full border-2 border-primary/30 focus:border-primary"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Filter Panel */}
          <FilterPanel isOpen={isFilterOpen} onClose={() => setIsFilterOpen(false)} />

          {/* Server Listings */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold font-barlow">{servers.length} Servers Available</h2>

              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="hidden md:flex items-center"
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                >
                  <Filter className="mr-2 h-4 w-4" />
                  Filters
                </Button>

                <select className="text-sm border rounded-md p-1">
                  <option>Most Impactful</option>
                  <option>Newest</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Rating</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {servers
                .filter(
                  (server) =>
                    searchTerm === "" ||
                    server.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    server.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    server.impactTags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase())),
                )
                .map((server, index) => (
                  <EnhancedServerCard key={index} {...server} />
                ))}
            </div>

            <div className="mt-8 flex justify-center">
              <Button variant="outline">Load More</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced CTA */}
      <div className="mt-16">
        <EnhancedCTA
          title="Have an AI Server to Share?"
          description="Submit your AI server to the marketplace and reach thousands of African businesses and developers."
          primaryButtonText="Submit Your Server"
          primaryButtonLink="/submit-server"
          secondaryButtonText="Learn More"
          secondaryButtonLink="/documentation/submit-server"
          variant="primary"
          size="md"
        />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}

