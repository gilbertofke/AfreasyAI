"use client"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { X } from "lucide-react"

interface FilterPanelProps {
  isOpen: boolean
  onClose: () => void
}

export function FilterPanel({ isOpen, onClose }: FilterPanelProps) {
  const regions = [
    { id: "ecowas", label: "ECOWAS", flag: "🇳🇬" },
    { id: "eac", label: "EAC", flag: "🇰🇪" },
    { id: "sadc", label: "SADC", flag: "🇿🇦" },
  ]

  const compliance = [
    { id: "gdpr-africa", label: "GDPR-Africa" },
    { id: "nafdac", label: "NAFDAC" },
    { id: "kenya-dpa", label: "Kenya DPA" },
  ]

  const priceRanges = [
    { id: "free", label: "Free" },
    { id: "under-5", label: "Under $5" },
    { id: "5-20", label: "$5 - $20" },
    { id: "over-20", label: "Over $20" },
  ]

  return (
    <div
      className={`
      fixed inset-y-0 left-0 z-50 w-full md:w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out
      ${isOpen ? "translate-x-0" : "-translate-x-full"}
      md:relative md:translate-x-0
    `}
    >
      <div className="p-4 border-b flex justify-between items-center">
        <h2 className="font-barlow font-semibold text-xl">Filters</h2>
        <Button variant="ghost" size="icon" onClick={onClose} className="md:hidden">
          <X className="h-5 w-5" />
        </Button>
      </div>

      <div className="p-4 overflow-y-auto h-[calc(100%-60px)]">
        <div className="space-y-6">
          {/* Region Filter */}
          <div>
            <h3 className="font-barlow font-semibold mb-3">Region</h3>
            <div className="space-y-2">
              {regions.map((region) => (
                <div key={region.id} className="flex items-center space-x-2">
                  <Checkbox id={`region-${region.id}`} />
                  <Label htmlFor={`region-${region.id}`} className="flex items-center">
                    <span className="mr-2">{region.flag}</span>
                    {region.label}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          {/* Compliance Filter */}
          <div>
            <h3 className="font-barlow font-semibold mb-3">Compliance</h3>
            <div className="space-y-2">
              {compliance.map((item) => (
                <div key={item.id} className="flex items-center space-x-2">
                  <Checkbox id={`compliance-${item.id}`} />
                  <Label htmlFor={`compliance-${item.id}`}>{item.label}</Label>
                </div>
              ))}
            </div>
          </div>

          {/* Price Filter */}
          <div>
            <h3 className="font-barlow font-semibold mb-3">Price</h3>
            <div className="space-y-2">
              {priceRanges.map((range) => (
                <div key={range.id} className="flex items-center space-x-2">
                  <Checkbox id={`price-${range.id}`} />
                  <Label htmlFor={`price-${range.id}`}>{range.label}</Label>
                </div>
              ))}
            </div>
          </div>

          {/* Impact Score */}
          <div>
            <h3 className="font-barlow font-semibold mb-3">Impact Score</h3>
            <Slider defaultValue={[50]} max={100} step={1} className="my-4" />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Low Impact</span>
              <span>High Impact</span>
            </div>
          </div>
        </div>

        <div className="mt-8 space-y-2">
          <Button variant="primary" className="w-full">
            Apply Filters
          </Button>
          <Button variant="outline" className="w-full">
            Reset
          </Button>
        </div>
      </div>
    </div>
  )
}

