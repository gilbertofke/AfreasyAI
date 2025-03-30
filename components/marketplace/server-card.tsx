import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, Check } from "lucide-react"

interface ServerCardProps {
  title: string
  description: string
  price: number
  rating: number
  creator: string
  isVerified: boolean
  impactTags: string[]
  complianceBadges: {
    name: string
    status: "certified" | "needs-localization"
  }[]
  image: string
}

export function ServerCard({
  title,
  description,
  price,
  rating,
  creator,
  isVerified,
  impactTags,
  complianceBadges,
  image,
}: ServerCardProps) {
  return (
    <Card variant="server" className="overflow-hidden flex flex-col h-full">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-2 right-2">
          <Badge variant="compliance" className="flex items-center gap-1">
            <span className="sr-only">Price</span>
            {price < 5 ? "$" : price < 20 ? "$$" : "$$$"}
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
      </CardContent>

      <CardFooter className="pt-2">
        <Button variant="primary" className="w-full">
          View Details
        </Button>
      </CardFooter>
    </Card>
  )
}

