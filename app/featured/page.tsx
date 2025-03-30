import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, ExternalLink, Award } from "lucide-react"

export default function FeaturedBuildersPage() {
  const featuredBuilders = [
    {
      id: "builder-1",
      name: "AgriTech Kenya",
      avatar: "/placeholder.svg?height=100&width=100",
      country: "Kenya",
      countryFlag: "🇰🇪",
      bio: "Building innovative solutions for small-scale farmers across East Africa.",
      rating: 4.9,
      reviewCount: 124,
      specialty: "Agriculture",
      servers: 8,
      workflows: 12,
      featured: true,
      topServer: {
        title: "Farmer's Market Connect",
        description: "Connect small-scale farmers directly with urban markets using AI-powered logistics optimization.",
        rating: 4.8,
        downloads: 1245,
      },
    },
    {
      id: "builder-2",
      name: "HealthTech Lagos",
      avatar: "/placeholder.svg?height=100&width=100",
      country: "Nigeria",
      countryFlag: "🇳🇬",
      bio: "Revolutionizing healthcare delivery in West Africa through AI and mobile technology.",
      rating: 4.7,
      reviewCount: 98,
      specialty: "Healthcare",
      servers: 6,
      workflows: 9,
      featured: true,
      topServer: {
        title: "MediTrack Nigeria",
        description:
          "Verify pharmaceutical authenticity and track medical supplies across Nigeria's healthcare system.",
        rating: 5.0,
        downloads: 987,
      },
    },
    {
      id: "builder-3",
      name: "EduTech Cape Town",
      avatar: "/placeholder.svg?height=100&width=100",
      country: "South Africa",
      countryFlag: "🇿🇦",
      bio: "Bridging the education gap in Southern Africa through accessible digital learning tools.",
      rating: 4.5,
      reviewCount: 76,
      specialty: "Education",
      servers: 5,
      workflows: 7,
      featured: false,
      topServer: {
        title: "EduConnect SA",
        description: "Connect students with educational resources and tutors across South Africa's rural communities.",
        rating: 4.6,
        downloads: 856,
      },
    },
    {
      id: "builder-4",
      name: "AccraTech",
      avatar: "/placeholder.svg?height=100&width=100",
      country: "Ghana",
      countryFlag: "🇬🇭",
      bio: "Developing financial technology solutions for small businesses and entrepreneurs in Ghana.",
      rating: 4.6,
      reviewCount: 62,
      specialty: "Finance",
      servers: 4,
      workflows: 6,
      featured: false,
      topServer: {
        title: "FinTrack Ghana",
        description: "Mobile-first financial tracking and budgeting tool for small businesses across Ghana.",
        rating: 4.4,
        downloads: 723,
      },
    },
    {
      id: "builder-5",
      name: "AddisEnergy",
      avatar: "/placeholder.svg?height=100&width=100",
      country: "Ethiopia",
      countryFlag: "🇪🇹",
      bio: "Pioneering clean energy solutions for rural communities in Ethiopia and East Africa.",
      rating: 4.8,
      reviewCount: 54,
      specialty: "Energy",
      servers: 3,
      workflows: 5,
      featured: true,
      topServer: {
        title: "Solar Monitor Ethiopia",
        description: "Monitor and optimize solar panel performance for rural electrification projects.",
        rating: 4.7,
        downloads: 612,
      },
    },
    {
      id: "builder-6",
      name: "KigaliTech",
      avatar: "/placeholder.svg?height=100&width=100",
      country: "Rwanda",
      countryFlag: "🇷🇼",
      bio: "Creating logistics and transportation solutions for Rwanda and neighboring countries.",
      rating: 4.4,
      reviewCount: 48,
      specialty: "Logistics",
      servers: 4,
      workflows: 3,
      featured: false,
      topServer: {
        title: "Logistics Tracker Rwanda",
        description: "Track and optimize delivery routes across Rwanda's challenging terrain.",
        rating: 4.5,
        downloads: 489,
      },
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold font-barlow mb-4">Featured Builders</h1>
          <p className="text-lg text-muted-foreground">
            Discover the talented creators building innovative AI solutions for Africa's unique challenges
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredBuilders.map((builder) => (
            <Card key={builder.id} className={`overflow-hidden ${builder.featured ? "border-2 border-primary" : ""}`}>
              <CardHeader className="pb-0">
                {builder.featured && (
                  <div className="absolute top-0 right-0 bg-primary text-white px-3 py-1 text-xs font-medium">
                    Featured Builder
                  </div>
                )}
                <div className="flex flex-col items-center">
                  <div className="relative">
                    <img
                      src={builder.avatar || "/placeholder.svg"}
                      alt={builder.name}
                      className="w-20 h-20 rounded-full object-cover border-2 border-primary"
                    />
                    <span className="absolute bottom-0 right-0 text-lg">{builder.countryFlag}</span>
                  </div>
                  <CardTitle className="mt-4 text-xl">{builder.name}</CardTitle>
                  <div className="flex items-center mt-1">
                    <div className="flex">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(builder.rating)
                              ? "fill-primary text-primary"
                              : i < builder.rating
                                ? "fill-primary text-primary opacity-50"
                                : "fill-gray-200 text-gray-200"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-muted-foreground">
                      ({builder.rating}) · {builder.reviewCount} reviews
                    </span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-sm text-center mb-4">{builder.bio}</p>

                <div className="grid grid-cols-3 gap-2 text-center mb-4">
                  <div className="bg-gray-50 p-2 rounded-md">
                    <p className="text-xs text-muted-foreground">Specialty</p>
                    <p className="font-medium">{builder.specialty}</p>
                  </div>
                  <div className="bg-gray-50 p-2 rounded-md">
                    <p className="text-xs text-muted-foreground">Servers</p>
                    <p className="font-medium">{builder.servers}</p>
                  </div>
                  <div className="bg-gray-50 p-2 rounded-md">
                    <p className="text-xs text-muted-foreground">Workflows</p>
                    <p className="font-medium">{builder.workflows}</p>
                  </div>
                </div>

                <div className="bg-gray-50 p-3 rounded-md">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-sm font-semibold">Top Server</h4>
                    <Badge variant="secondary" className="text-xs">
                      {builder.topServer.downloads} downloads
                    </Badge>
                  </div>
                  <h3 className="font-medium text-sm mb-1">{builder.topServer.title}</h3>
                  <p className="text-xs text-muted-foreground mb-2">{builder.topServer.description}</p>
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 ${
                          i < Math.floor(builder.topServer.rating)
                            ? "fill-primary text-primary"
                            : i < builder.topServer.rating
                              ? "fill-primary text-primary opacity-50"
                              : "fill-gray-200 text-gray-200"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href={`/builder/${builder.id}`}>
                    View Profile
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-16 max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8 text-center">
          <Award className="h-12 w-12 mx-auto text-primary mb-4" />
          <h2 className="text-2xl font-bold font-barlow mb-4">Become a Featured Builder</h2>
          <p className="text-muted-foreground mb-6">
            Join our community of talented creators and showcase your innovative solutions to thousands of users across
            Africa.
          </p>
          <Button variant="primary" size="lg" asChild>
            <Link href="/apply-featured">Apply Now</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

