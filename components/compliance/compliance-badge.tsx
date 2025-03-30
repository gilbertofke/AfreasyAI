import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Info } from "lucide-react"

interface ComplianceBadgeProps {
  name: string
  status: "certified" | "needs-localization"
  country?: string
}

export function ComplianceBadge({ name, status, country }: ComplianceBadgeProps) {
  const getCountryFlag = (country?: string) => {
    switch (country?.toLowerCase()) {
      case "nigeria":
        return "🇳🇬"
      case "kenya":
        return "🇰🇪"
      case "south africa":
        return "🇿🇦"
      default:
        return "🌍"
    }
  }

  const getTooltipContent = (name: string, status: string) => {
    if (status === "certified") {
      return `This service is fully compliant with ${name} regulations.`
    }
    return `This service needs localization to fully comply with ${name} regulations.`
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Badge
            variant={status === "certified" ? "compliance" : "complianceWarning"}
            className="flex items-center gap-1 cursor-help"
          >
            <span>{getCountryFlag(country)}</span>
            <span>{name}</span>
            <Info className="h-3 w-3 ml-1" />
          </Badge>
        </TooltipTrigger>
        <TooltipContent>
          <p>{getTooltipContent(name, status)}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

