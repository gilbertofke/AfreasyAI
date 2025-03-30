import type { ReactNode } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, ExternalLink } from "lucide-react"

interface EnhancedCTAProps {
  title: string
  description: string
  primaryButtonText: string
  primaryButtonLink: string
  secondaryButtonText?: string
  secondaryButtonLink?: string
  icon?: ReactNode
  variant?: "primary" | "secondary" | "accent" | "gradient"
  size?: "sm" | "md" | "lg"
  isExternal?: boolean
}

export function EnhancedCTA({
  title,
  description,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  icon,
  variant = "primary",
  size = "md",
  isExternal = false,
}: EnhancedCTAProps) {
  const getBackgroundClass = () => {
    switch (variant) {
      case "primary":
        return "bg-primary text-white"
      case "secondary":
        return "bg-secondary text-white"
      case "accent":
        return "bg-accent text-white"
      case "gradient":
        return "bg-gradient-to-r from-primary to-secondary text-white"
      default:
        return "bg-primary text-white"
    }
  }

  const getSizeClass = () => {
    switch (size) {
      case "sm":
        return "py-4 px-6"
      case "md":
        return "py-8 px-8"
      case "lg":
        return "py-12 px-10"
      default:
        return "py-8 px-8"
    }
  }

  const buttonSize = size === "sm" ? "default" : size === "md" ? "lg" : "xl"

  return (
    <div className={`${getBackgroundClass()} ${getSizeClass()} rounded-xl relative overflow-hidden`}>
      {/* Decorative elements */}
      <div className="absolute -right-16 -top-16 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
      <div className="absolute -left-8 -bottom-8 w-24 h-24 bg-white/10 rounded-full blur-lg"></div>

      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
          <div className="md:w-2/3">
            <h2
              className={`font-bold font-barlow ${size === "sm" ? "text-2xl" : size === "md" ? "text-3xl" : "text-4xl"} mb-4`}
            >
              {title}
            </h2>
            <p className={`${size === "sm" ? "text-base" : "text-lg"} text-white/80 mb-6 md:mb-0 max-w-xl`}>
              {description}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 md:w-1/3">
            <Button
              size={buttonSize as any}
              className="bg-white text-primary hover:bg-white/90 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:translate-y-[-2px] group"
              asChild
            >
              <Link href={primaryButtonLink} target={isExternal ? "_blank" : undefined}>
                {primaryButtonText}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>

            {secondaryButtonText && secondaryButtonLink && (
              <Button
                variant="outline"
                size={buttonSize as any}
                className="border-white text-white hover:bg-white/10"
                asChild
              >
                <Link href={secondaryButtonLink} target={isExternal ? "_blank" : undefined}>
                  {secondaryButtonText}
                  {isExternal && <ExternalLink className="ml-2 h-4 w-4" />}
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Animated pulse effect */}
      <div className="absolute inset-0 bg-white/5 animate-pulse-slow opacity-0"></div>
    </div>
  )
}

