"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Loader2, Upload, AlertCircle } from "lucide-react"

export default function SubmitServerPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    price: "",
    impactTags: [] as string[],
    complianceBadges: [] as string[],
    termsAgreed: false,
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error when user selects
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData((prev) => ({ ...prev, [name]: checked }))
    // Clear error when user checks
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const handleTagToggle = (tag: string) => {
    setFormData((prev) => {
      const currentTags = [...prev.impactTags]
      if (currentTags.includes(tag)) {
        return { ...prev, impactTags: currentTags.filter((t) => t !== tag) }
      } else {
        return { ...prev, impactTags: [...currentTags, tag] }
      }
    })
  }

  const handleComplianceToggle = (badge: string) => {
    setFormData((prev) => {
      const currentBadges = [...prev.complianceBadges]
      if (currentBadges.includes(badge)) {
        return { ...prev, complianceBadges: currentBadges.filter((b) => b !== badge) }
      } else {
        return { ...prev, complianceBadges: [...currentBadges, badge] }
      }
    })
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.title.trim()) {
      newErrors.title = "Hakuna matata! Please enter a title"
    }

    if (!formData.description.trim()) {
      newErrors.description = "Hakuna matata! Please enter a description"
    }

    if (!formData.category) {
      newErrors.category = "Hakuna matata! Please select a category"
    }

    if (!formData.price.trim()) {
      newErrors.price = "Hakuna matata! Please enter a price"
    } else if (isNaN(Number.parseFloat(formData.price)) || Number.parseFloat(formData.price) < 0) {
      newErrors.price = "Hakuna matata! Please enter a valid price"
    }

    if (formData.impactTags.length === 0) {
      newErrors.impactTags = "Hakuna matata! Please select at least one impact tag"
    }

    if (!formData.termsAgreed) {
      newErrors.termsAgreed = "Hakuna matata! Please agree to the terms"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsLoading(true)

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Redirect to success page or marketplace
      router.push("/market?submitted=true")
    } catch (error) {
      console.error("Submit error:", error)
      setErrors({ form: "An error occurred during submission. Please try again." })
    } finally {
      setIsLoading(false)
    }
  }

  const categories = [
    { id: "agriculture", name: "Agriculture", icon: "🌾" },
    { id: "healthcare", name: "Healthcare", icon: "🏥" },
    { id: "education", name: "Education", icon: "🎓" },
    { id: "finance", name: "Finance", icon: "💰" },
    { id: "logistics", name: "Logistics", icon: "🚚" },
    { id: "government", name: "Government", icon: "🏛️" },
    { id: "retail", name: "Retail", icon: "🛍️" },
    { id: "energy", name: "Energy", icon: "⚡" },
  ]

  const impactTags = [
    "AgriTech",
    "HealthTech",
    "EduTech",
    "FinTech",
    "CleanEnergy",
    "RuralAccess",
    "FarmersFirst",
    "AfricaImpact",
    "SMESupport",
    "RuralDev",
  ]

  const complianceBadges = [
    { id: "gdpr-africa", name: "GDPR-Africa", country: "Pan-African" },
    { id: "nafdac", name: "NAFDAC", country: "Nigeria" },
    { id: "kenya-dpa", name: "Kenya DPA", country: "Kenya" },
    { id: "popia", name: "POPIA", country: "South Africa" },
    { id: "ghana-dpa", name: "Ghana DPA", country: "Ghana" },
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold font-barlow mb-6">Submit Your Server</h1>

          <Card>
            <CardHeader>
              <CardTitle>Server Details</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {errors.form && (
                  <div className="p-4 bg-red-50 text-red-600 rounded-md flex items-start">
                    <AlertCircle className="h-5 w-5 mr-2 mt-0.5" />
                    <p>{errors.form}</p>
                  </div>
                )}

                <div className="space-y-2">
                  <Label htmlFor="title">Server Title</Label>
                  <Input
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="e.g., Farmer's Market Connect"
                  />
                  {errors.title && <p className="text-sm text-accent">{errors.title}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Describe what your server does and how it helps users in Africa..."
                    rows={4}
                  />
                  {errors.description && <p className="text-sm text-accent">{errors.description}</p>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <Select onValueChange={(value) => handleSelectChange("category", value)} value={formData.category}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((category) => (
                          <SelectItem key={category.id} value={category.id}>
                            <span className="flex items-center">
                              <span className="mr-2">{category.icon}</span>
                              {category.name}
                            </span>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.category && <p className="text-sm text-accent">{errors.category}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="price">Price (USD)</Label>
                    <Input
                      id="price"
                      name="price"
                      value={formData.price}
                      onChange={handleChange}
                      placeholder="e.g., 4.99"
                      type="number"
                      min="0"
                      step="0.01"
                    />
                    {errors.price && <p className="text-sm text-accent">{errors.price}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Impact Tags</Label>
                  <div className="flex flex-wrap gap-2">
                    {impactTags.map((tag) => (
                      <button
                        key={tag}
                        type="button"
                        className={`px-3 py-1 rounded-full text-sm ${
                          formData.impactTags.includes(tag)
                            ? "bg-secondary text-white"
                            : "bg-gray-100 hover:bg-gray-200"
                        }`}
                        onClick={() => handleTagToggle(tag)}
                      >
                        #{tag}
                      </button>
                    ))}
                  </div>
                  {errors.impactTags && <p className="text-sm text-accent">{errors.impactTags}</p>}
                </div>

                <div className="space-y-2">
                  <Label>Compliance Badges</Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {complianceBadges.map((badge) => (
                      <div key={badge.id} className="flex items-center space-x-2">
                        <Checkbox
                          id={`compliance-${badge.id}`}
                          checked={formData.complianceBadges.includes(badge.id)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              handleComplianceToggle(badge.id)
                            } else {
                              handleComplianceToggle(badge.id)
                            }
                          }}
                        />
                        <label htmlFor={`compliance-${badge.id}`} className="text-sm flex items-center cursor-pointer">
                          {badge.country === "Nigeria" && <span className="mr-1">🇳🇬</span>}
                          {badge.country === "Kenya" && <span className="mr-1">🇰🇪</span>}
                          {badge.country === "South Africa" && <span className="mr-1">🇿🇦</span>}
                          {badge.country === "Ghana" && <span className="mr-1">🇬🇭</span>}
                          {badge.country === "Pan-African" && <span className="mr-1">🌍</span>}
                          {badge.name}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Server Files</Label>
                  <div className="border-2 border-dashed rounded-md p-6 text-center">
                    <Upload className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
                    <p className="text-sm text-muted-foreground mb-2">
                      Drag and drop your server files here, or click to browse
                    </p>
                    <Button type="button" variant="outline" size="sm">
                      Browse Files
                    </Button>
                  </div>
                </div>

                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="termsAgreed"
                    checked={formData.termsAgreed}
                    onCheckedChange={(checked) => handleCheckboxChange("termsAgreed", !!checked)}
                  />
                  <div>
                    <label
                      htmlFor="termsAgreed"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      I agree to the terms and conditions
                    </label>
                    <p className="text-xs text-muted-foreground mt-1">
                      By submitting this server, you confirm that it complies with all applicable African regulations
                      and Afreasy's guidelines.
                    </p>
                  </div>
                </div>
                {errors.termsAgreed && <p className="text-sm text-accent">{errors.termsAgreed}</p>}

                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Upload className="mr-2 h-4 w-4" />
                      Submit Server
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

