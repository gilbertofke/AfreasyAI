"use client"

import { Badge } from "@/components/ui/badge"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MPesaModal } from "@/components/payment/mpesa-modal"
import { ComplianceBadge } from "@/components/compliance/compliance-badge"
import { EnhancedServerCard } from "@/components/marketplace/enhanced-server-card"
import { Footer } from "@/components/layout/footer"
import {
  BarChart,
  LineChart,
  Wallet,
  Award,
  Settings,
  Edit,
  Plus,
  FileText,
  Users,
  MapPin,
  Briefcase,
  BookOpen,
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useAuth } from "@/context/auth-context"

export default function ProfilePage() {
  const router = useRouter()
  const { user } = useAuth()
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false)
  const [profileType, setProfileType] = useState<"individual" | "organization">("individual")
  const [isEditMode, setIsEditMode] = useState(false)
  const [profileData, setProfileData] = useState({
    name: "",
    email: "",
    bio: "",
    country: "",
    city: "",
    phone: "",
    website: "",
    organization: {
      name: "",
      size: "",
      industry: "",
      founded: "",
      description: "",
    },
  })

  useEffect(() => {
    // If no user is logged in, redirect to login
    if (!user && typeof window !== "undefined") {
      router.push("/login")
    } else if (user) {
      // Load profile data
      setProfileData({
        name: user.fullName || "Demo User",
        email: user.email || "user@example.com",
        bio: "Building innovative AI solutions for African challenges.",
        country: user.country || "NG",
        city: "Lagos",
        phone: "+234 XXX XXX XXXX",
        website: "https://example.com",
        organization: {
          name: "Tech Innovations Africa",
          size: "10-50",
          industry: "Technology",
          founded: "2020",
          description: "A technology company focused on building AI solutions for African markets.",
        },
      })
    }
  }, [user, router])

  const userStats = {
    earnings: 1245.67,
    servers: 3,
    workflows: 5,
    impact: 87,
  }

  const complianceStatus = [
    { name: "GDPR-Africa", status: "certified", country: "Pan-African" },
    { name: "NAFDAC", status: "certified", country: "Nigeria" },
    { name: "Kenya DPA", status: "needs-localization", country: "Kenya" },
  ]

  const transactions = [
    { id: 1, date: "2023-04-15", amount: 45.99, method: "M-Pesa", status: "Completed" },
    { id: 2, date: "2023-04-10", amount: 32.5, method: "Flutterwave", status: "Completed" },
    { id: 3, date: "2023-04-05", amount: 78.25, method: "Airtel Money", status: "Pending" },
  ]

  const userServers = [
    {
      title: "Farmer's Market Connect",
      description: "Connect small-scale farmers directly with urban markets using AI-powered logistics optimization.",
      price: 4.99,
      rating: 4,
      creator: profileData.name,
      isVerified: true,
      impactTags: ["AgriTech", "FarmersFirst", "AfricaImpact"],
      complianceBadges: [
        { name: "GDPR-Africa", status: "certified" as const },
        { name: "Kenya DPA", status: "certified" as const },
      ],
      image: "/placeholder.svg?height=200&width=400",
      downloads: 1245,
      lastUpdated: "2023-12-15",
    },
    {
      title: "Supply Chain Optimizer",
      description:
        "AI-powered supply chain optimization for African businesses dealing with complex logistics challenges.",
      price: 7.99,
      rating: 4.5,
      creator: profileData.name,
      isVerified: true,
      impactTags: ["SupplyChain", "Logistics", "AfricaImpact"],
      complianceBadges: [{ name: "GDPR-Africa", status: "certified" as const }],
      image: "/placeholder.svg?height=200&width=400",
      downloads: 876,
      lastUpdated: "2024-01-20",
    },
  ]

  const handleSaveProfile = () => {
    // Save profile data
    setIsEditMode(false)
    // Show success message
  }

  const handleProfileTypeChange = (type: "individual" | "organization") => {
    setProfileType(type)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target

    if (name.includes(".")) {
      const [parent, child] = name.split(".")
      setProfileData((prev) => ({
        ...prev,
        [parent]: {
          ...prev[parent as keyof typeof prev],
          [child]: value,
        },
      }))
    } else {
      setProfileData((prev) => ({
        ...prev,
        [name]: value,
      }))
    }
  }

  const getCountryFlag = (countryCode: string) => {
    const flags: Record<string, string> = {
      NG: "🇳🇬",
      KE: "🇰🇪",
      ZA: "🇿🇦",
      GH: "🇬🇭",
      ET: "🇪🇹",
      RW: "🇷🇼",
    }

    return flags[countryCode] || "🌍"
  }

  if (!user) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container px-4 md:px-6 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full md:w-64">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 rounded-full bg-secondary/20 flex items-center justify-center mb-4 relative">
                    <span className="text-3xl">{profileType === "individual" ? "👤" : "🏢"}</span>
                    {!isEditMode && (
                      <Button
                        variant="outline"
                        size="icon"
                        className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full bg-white"
                        onClick={() => setIsEditMode(true)}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                    )}
                  </div>

                  {isEditMode ? (
                    <div className="w-full space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="profileType">Profile Type</Label>
                        <div className="flex gap-4">
                          <div className="flex items-center space-x-2">
                            <input
                              type="radio"
                              id="individual"
                              checked={profileType === "individual"}
                              onChange={() => handleProfileTypeChange("individual")}
                            />
                            <Label htmlFor="individual">Individual</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <input
                              type="radio"
                              id="organization"
                              checked={profileType === "organization"}
                              onChange={() => handleProfileTypeChange("organization")}
                            />
                            <Label htmlFor="organization">Organization</Label>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="name">{profileType === "individual" ? "Full Name" : "Organization Name"}</Label>
                        <Input
                          id="name"
                          name={profileType === "individual" ? "name" : "organization.name"}
                          value={profileType === "individual" ? profileData.name : profileData.organization.name}
                          onChange={handleInputChange}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={profileData.email}
                          onChange={handleInputChange}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="country">Country</Label>
                        <Select
                          value={profileData.country}
                          onValueChange={(value) => setProfileData((prev) => ({ ...prev, country: value }))}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select country" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="NG">🇳🇬 Nigeria</SelectItem>
                            <SelectItem value="KE">🇰🇪 Kenya</SelectItem>
                            <SelectItem value="ZA">🇿🇦 South Africa</SelectItem>
                            <SelectItem value="GH">🇬🇭 Ghana</SelectItem>
                            <SelectItem value="ET">🇪🇹 Ethiopia</SelectItem>
                            <SelectItem value="RW">🇷🇼 Rwanda</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      {profileType === "organization" && (
                        <>
                          <div className="space-y-2">
                            <Label htmlFor="industry">Industry</Label>
                            <Select
                              value={profileData.organization.industry}
                              onValueChange={(value) =>
                                setProfileData((prev) => ({
                                  ...prev,
                                  organization: { ...prev.organization, industry: value },
                                }))
                              }
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Select industry" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="Technology">Technology</SelectItem>
                                <SelectItem value="Agriculture">Agriculture</SelectItem>
                                <SelectItem value="Healthcare">Healthcare</SelectItem>
                                <SelectItem value="Education">Education</SelectItem>
                                <SelectItem value="Finance">Finance</SelectItem>
                                <SelectItem value="Energy">Energy</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="organization.size">Company Size</Label>
                            <Select
                              value={profileData.organization.size}
                              onValueChange={(value) =>
                                setProfileData((prev) => ({
                                  ...prev,
                                  organization: { ...prev.organization, size: value },
                                }))
                              }
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Select size" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="1-10">1-10 employees</SelectItem>
                                <SelectItem value="10-50">10-50 employees</SelectItem>
                                <SelectItem value="50-200">50-200 employees</SelectItem>
                                <SelectItem value="200+">200+ employees</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="organization.description">Organization Description</Label>
                            <Textarea
                              id="organization.description"
                              name="organization.description"
                              value={profileData.organization.description}
                              onChange={handleInputChange}
                              rows={3}
                            />
                          </div>
                        </>
                      )}

                      {profileType === "individual" && (
                        <div className="space-y-2">
                          <Label htmlFor="bio">Bio</Label>
                          <Textarea id="bio" name="bio" value={profileData.bio} onChange={handleInputChange} rows={3} />
                        </div>
                      )}

                      <div className="pt-4 flex gap-2">
                        <Button variant="outline" onClick={() => setIsEditMode(false)}>
                          Cancel
                        </Button>
                        <Button variant="primary" onClick={handleSaveProfile}>
                          Save Profile
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <>
                      <h2 className="text-xl font-semibold font-barlow">
                        {profileType === "individual" ? profileData.name : profileData.organization.name}
                      </h2>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground mb-4">
                        <MapPin className="h-3 w-3" />
                        <span>
                          {profileData.city}, {getCountryFlag(profileData.country)}
                        </span>
                      </div>

                      {profileType === "individual" ? (
                        <p className="text-sm text-center text-muted-foreground mb-4">{profileData.bio}</p>
                      ) : (
                        <div className="space-y-2 w-full mb-4">
                          <div className="flex items-center text-sm">
                            <Briefcase className="h-3 w-3 mr-2" />
                            <span>{profileData.organization.industry}</span>
                          </div>
                          <div className="flex items-center text-sm">
                            <Users className="h-3 w-3 mr-2" />
                            <span>{profileData.organization.size} employees</span>
                          </div>
                          <div className="flex items-center text-sm">
                            <BookOpen className="h-3 w-3 mr-2" />
                            <span>Founded in {profileData.organization.founded}</span>
                          </div>
                          <p className="text-sm text-muted-foreground mt-2">{profileData.organization.description}</p>
                        </div>
                      )}

                      <div className="w-full space-y-2">
                        <Button variant="outline" className="w-full mb-2">
                          Edit Profile
                        </Button>
                        <Button variant="primary" className="w-full" onClick={() => setIsPaymentModalOpen(true)}>
                          <Wallet className="mr-2 h-4 w-4" />
                          Withdraw Funds
                        </Button>
                      </div>
                    </>
                  )}
                </div>

                <div className="mt-6 pt-6 border-t">
                  <nav className="space-y-2">
                    <Button variant="ghost" className="w-full justify-start">
                      <BarChart className="mr-2 h-4 w-4" />
                      Dashboard
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      <LineChart className="mr-2 h-4 w-4" />
                      Analytics
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      <Award className="mr-2 h-4 w-4" />
                      Compliance
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      <Settings className="mr-2 h-4 w-4" />
                      Settings
                    </Button>
                  </nav>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <h1 className="text-3xl font-bold font-barlow mb-6">My African Impact</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center">
                    <span className="text-3xl mb-2">💰</span>
                    <p className="text-sm text-muted-foreground">Total Earnings</p>
                    <h3 className="text-2xl font-semibold font-barlow">${userStats.earnings.toFixed(2)}</h3>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center">
                    <span className="text-3xl mb-2">🖥️</span>
                    <p className="text-sm text-muted-foreground">Servers</p>
                    <h3 className="text-2xl font-semibold font-barlow">{userStats.servers}</h3>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center">
                    <span className="text-3xl mb-2">⚙️</span>
                    <p className="text-sm text-muted-foreground">Workflows</p>
                    <h3 className="text-2xl font-semibold font-barlow">{userStats.workflows}</h3>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center">
                    <span className="text-3xl mb-2">🌍</span>
                    <p className="text-sm text-muted-foreground">Impact Score</p>
                    <h3 className="text-2xl font-semibold font-barlow">{userStats.impact}/100</h3>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Tabs defaultValue="servers">
              <TabsList className="mb-6">
                <TabsTrigger value="servers">My Servers</TabsTrigger>
                <TabsTrigger value="workflows">My Workflows</TabsTrigger>
                <TabsTrigger value="earnings">Earnings</TabsTrigger>
                <TabsTrigger value="compliance">Compliance</TabsTrigger>
                <TabsTrigger value="impact">Impact</TabsTrigger>
              </TabsList>

              <TabsContent value="servers">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold">Your Servers</h2>
                  <Button variant="primary">
                    <Plus className="h-4 w-4 mr-2" />
                    Create New Server
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {userServers.map((server, index) => (
                    <EnhancedServerCard key={index} {...server} />
                  ))}

                  <Card className="flex flex-col items-center justify-center h-full min-h-[300px] border-dashed">
                    <div className="p-6 text-center">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <Plus className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">Create a New Server</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Share your AI solutions with the African tech community
                      </p>
                      <Button variant="primary">Get Started</Button>
                    </div>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="workflows">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold">Your Workflows</h2>
                  <Button variant="primary" asChild>
                    <a href="/build">
                      <Plus className="h-4 w-4 mr-2" />
                      Create New Workflow
                    </a>
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Farmer's Alert System</CardTitle>
                      <p className="text-sm text-muted-foreground">Last edited: 2 days ago</p>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3 mb-4">
                        <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-md">
                          <div className="w-8 h-8 rounded bg-primary/20 flex items-center justify-center text-primary">
                            📱
                          </div>
                          <div className="flex-1">
                            <div className="text-sm font-medium">SMS Notification</div>
                            <div className="text-xs text-muted-foreground">AfricasTalking SMS</div>
                          </div>
                        </div>

                        <div className="flex justify-center">
                          <div className="w-0.5 h-4 bg-gray-300"></div>
                        </div>

                        <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-md">
                          <div className="w-8 h-8 rounded bg-secondary/20 flex items-center justify-center text-secondary">
                            🌦️
                          </div>
                          <div className="flex-1">
                            <div className="text-sm font-medium">Weather Data</div>
                            <div className="text-xs text-muted-foreground">Weather API</div>
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-between">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <FileText className="h-4 w-4 mr-1" />
                          <span>3 nodes</span>
                        </div>
                        <Badge variant="outline">Active</Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Healthcare Verification</CardTitle>
                      <p className="text-sm text-muted-foreground">Last edited: 1 week ago</p>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3 mb-4">
                        <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-md">
                          <div className="w-8 h-8 rounded bg-accent/20 flex items-center justify-center text-accent">
                            🏥
                          </div>
                          <div className="flex-1">
                            <div className="text-sm font-medium">NAFDAC Check</div>
                            <div className="text-xs text-muted-foreground">Verification API</div>
                          </div>
                        </div>

                        <div className="flex justify-center">
                          <div className="w-0.5 h-4 bg-gray-300"></div>
                        </div>

                        <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-md">
                          <div className="w-8 h-8 rounded bg-primary/20 flex items-center justify-center text-primary">
                            📱
                          </div>
                          <div className="flex-1">
                            <div className="text-sm font-medium">SMS Notification</div>
                            <div className="text-xs text-muted-foreground">AfricasTalking SMS</div>
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-between">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <FileText className="h-4 w-4 mr-1" />
                          <span>5 nodes</span>
                        </div>
                        <Badge variant="outline">Active</Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="earnings">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Transactions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left py-3 px-4">Date</th>
                            <th className="text-left py-3 px-4">Amount</th>
                            <th className="text-left py-3 px-4">Method</th>
                            <th className="text-left py-3 px-4">Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          {transactions.map((transaction) => (
                            <tr key={transaction.id} className="border-b">
                              <td className="py-3 px-4">{transaction.date}</td>
                              <td className="py-3 px-4">${transaction.amount.toFixed(2)}</td>
                              <td className="py-3 px-4">{transaction.method}</td>
                              <td className="py-3 px-4">
                                <span
                                  className={`px-2 py-1 rounded-full text-xs ${
                                    transaction.status === "Completed"
                                      ? "bg-green-100 text-green-800"
                                      : "bg-amber-100 text-amber-800"
                                  }`}
                                >
                                  {transaction.status}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="compliance">
                <Card>
                  <CardHeader>
                    <CardTitle>Compliance Certification Status</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {complianceStatus.map((compliance) => (
                        <div key={compliance.name} className="flex justify-between items-center border-b pb-4">
                          <div>
                            <h3 className="font-semibold">{compliance.name}</h3>
                            <p className="text-sm text-muted-foreground">{compliance.country}</p>
                          </div>
                          <ComplianceBadge
                            name={compliance.name}
                            status={compliance.status as "certified" | "needs-localization"}
                            country={compliance.country}
                          />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="impact">
                <Card>
                  <CardHeader>
                    <CardTitle>African Impact Metrics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">Rural Accessibility</span>
                          <span className="text-sm font-medium">78%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full" style={{ width: "78%" }}></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">Local Job Creation</span>
                          <span className="text-sm font-medium">65%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full" style={{ width: "65%" }}></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">Sustainable Development</span>
                          <span className="text-sm font-medium">92%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full" style={{ width: "92%" }}></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">Digital Inclusion</span>
                          <span className="text-sm font-medium">84%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full" style={{ width: "84%" }}></div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>

      <MPesaModal isOpen={isPaymentModalOpen} onClose={() => setIsPaymentModalOpen(false)} amount={250.0} />
      <Footer />
    </div>
  )
}

