import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Users, Building, Handshake } from "lucide-react"

export default function PartnersPage() {
  const partners = [
    {
      id: "partner-1",
      name: "AfricasTalking",
      logo: "/placeholder.svg?height=80&width=200",
      category: "Technology",
      description:
        "Leading provider of mobile communication APIs across Africa, enabling businesses to reach customers via SMS, voice, and USSD.",
      website: "https://africastalking.com",
    },
    {
      id: "partner-2",
      name: "M-Pesa",
      logo: "/placeholder.svg?height=80&width=200",
      category: "Finance",
      description:
        "Revolutionary mobile money service that allows users to store and transfer money through their mobile phones.",
      website: "https://www.safaricom.co.ke/personal/m-pesa",
    },
    {
      id: "partner-3",
      name: "NAFDAC",
      logo: "/placeholder.svg?height=80&width=200",
      category: "Regulatory",
      description:
        "Nigerian regulatory body responsible for controlling and regulating food, drugs, medical devices, and chemicals.",
      website: "https://www.nafdac.gov.ng",
    },
    {
      id: "partner-4",
      name: "Flutterwave",
      logo: "/placeholder.svg?height=80&width=200",
      category: "Finance",
      description:
        "African-focused payment technology company that enables businesses to make and accept payments across Africa.",
      website: "https://flutterwave.com",
    },
    {
      id: "partner-5",
      name: "Kenya DPA",
      logo: "/placeholder.svg?height=80&width=200",
      category: "Regulatory",
      description: "Kenyan regulatory body responsible for data protection and privacy compliance.",
      website: "https://www.odpc.go.ke",
    },
    {
      id: "partner-6",
      name: "Airtel Africa",
      logo: "/placeholder.svg?height=80&width=200",
      category: "Telecommunications",
      description: "Leading provider of telecommunications and mobile money services across Africa.",
      website: "https://airtel.africa",
    },
  ]

  const partnerCategories = [
    { id: "technology", name: "Technology", icon: <Building className="h-5 w-5" /> },
    { id: "finance", name: "Finance", icon: <Building className="h-5 w-5" /> },
    { id: "regulatory", name: "Regulatory", icon: <Building className="h-5 w-5" /> },
    { id: "telecommunications", name: "Telecommunications", icon: <Building className="h-5 w-5" /> },
  ]

  const partnershipTypes = [
    {
      title: "Technology Integration",
      description:
        "Integrate your technology with our platform to reach thousands of African developers and businesses.",
      icon: <Building className="h-10 w-10 text-primary" />,
      cta: "Become a Tech Partner",
    },
    {
      title: "Regulatory Compliance",
      description:
        "Partner with us to ensure our platform meets regulatory requirements across different African countries.",
      icon: <Handshake className="h-10 w-10 text-primary" />,
      cta: "Partner on Compliance",
    },
    {
      title: "Community Building",
      description:
        "Join our efforts to build and support the African tech ecosystem through events, training, and resources.",
      icon: <Users className="h-10 w-10 text-primary" />,
      cta: "Build Community Together",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-secondary text-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-barlow mb-6">Our Partners</h1>
            <p className="text-xl text-white/80 mb-8">
              Collaborating with leading organizations across Africa to build a more connected, innovative ecosystem
            </p>
            <Button variant="accent" size="lg">
              Become a Partner
            </Button>
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold font-barlow mb-4">Trusted by Africa's Leading Organizations</h2>
            <p className="text-lg text-muted-foreground">
              We partner with organizations that share our vision for an innovative, connected Africa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((partner) => (
              <Card key={partner.id} className="overflow-hidden hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <div className="h-16 flex items-center justify-center mb-4">
                    <img
                      src={partner.logo || "/placeholder.svg"}
                      alt={partner.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <CardTitle className="text-xl text-center">{partner.name}</CardTitle>
                  <p className="text-sm text-center text-muted-foreground">{partner.category}</p>
                </CardHeader>
                <CardContent className="pt-2">
                  <p className="text-sm text-center">{partner.description}</p>
                </CardContent>
                <CardFooter className="flex justify-center">
                  <Button variant="outline" size="sm" asChild>
                    <a href={partner.website} target="_blank" rel="noopener noreferrer">
                      Visit Website
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold font-barlow mb-4">Partnership Opportunities</h2>
            <p className="text-lg text-muted-foreground">
              Explore the different ways your organization can partner with Afreasy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnershipTypes.map((type, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="mx-auto mb-4">{type.icon}</div>
                  <CardTitle className="text-xl">{type.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{type.description}</p>
                </CardContent>
                <CardFooter className="flex justify-center">
                  <Button variant="outline">{type.cta}</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary/10">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold font-barlow mb-4">Ready to Partner with Us?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join our growing network of partners and help shape the future of technology in Africa
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg">
                Apply Now
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

