import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileText, Book, Shield, Code, ExternalLink, Download } from "lucide-react"
import { Footer } from "@/components/layout/footer"

export default function DocumentationPage() {
  const documentationCategories = [
    {
      title: "Getting Started",
      icon: <FileText className="h-5 w-5" />,
      items: [
        { title: "Introduction to Afreasy", href: "/documentation/introduction" },
        { title: "Setting Up Your Account", href: "/documentation/account-setup" },
        { title: "Creating Your First Server", href: "/documentation/create-server" },
        { title: "Building Workflows", href: "/documentation/workflows" },
      ],
    },
    {
      title: "API Reference",
      icon: <Code className="h-5 w-5" />,
      items: [
        { title: "Authentication", href: "/documentation/api/authentication" },
        { title: "Server API", href: "/documentation/api/server" },
        { title: "Workflow API", href: "/documentation/api/workflow" },
        { title: "Payment Integration", href: "/documentation/api/payment" },
      ],
    },
    {
      title: "Compliance",
      icon: <Shield className="h-5 w-5" />,
      items: [
        { title: "GDPR-Africa Compliance", href: "/documentation/compliance/gdpr-africa" },
        { title: "NAFDAC Integration", href: "/documentation/compliance/nafdac" },
        { title: "Kenya DPA Compliance", href: "/documentation/compliance/kenya-dpa" },
        { title: "POPIA Compliance", href: "/documentation/compliance/popia" },
      ],
    },
    {
      title: "Tutorials",
      icon: <Book className="h-5 w-5" />,
      items: [
        { title: "Building a Farmer's Alert System", href: "/documentation/tutorials/farmers-alert" },
        { title: "Healthcare Verification Workflow", href: "/documentation/tutorials/healthcare-verification" },
        { title: "Educational Resource Distribution", href: "/documentation/tutorials/educational-resources" },
        { title: "Financial Inclusion Tools", href: "/documentation/tutorials/financial-inclusion" },
      ],
    },
  ]

  const complianceDocuments = [
    {
      title: "GDPR-Africa Compliance Guide",
      description: "Comprehensive guide to ensuring your servers and workflows comply with GDPR-Africa regulations.",
      lastUpdated: "January 15, 2024",
      downloadLink: "/documents/gdpr-africa-compliance.pdf",
    },
    {
      title: "NAFDAC Integration Documentation",
      description: "Technical documentation for integrating with NAFDAC's verification systems.",
      lastUpdated: "December 10, 2023",
      downloadLink: "/documents/nafdac-integration.pdf",
    },
    {
      title: "Kenya DPA Compliance Checklist",
      description: "Step-by-step checklist for ensuring compliance with Kenya's Data Protection Act.",
      lastUpdated: "February 5, 2024",
      downloadLink: "/documents/kenya-dpa-checklist.pdf",
    },
    {
      title: "POPIA Implementation Guide",
      description: "Guide to implementing South Africa's Protection of Personal Information Act requirements.",
      lastUpdated: "November 20, 2023",
      downloadLink: "/documents/popia-implementation.pdf",
    },
  ]

  const aiTrends = [
    {
      title: "The Rise of African AI Solutions",
      description: "How African developers are creating AI solutions tailored to local challenges.",
      date: "March 1, 2024",
      readTime: "5 min read",
      link: "/blog/african-ai-solutions",
    },
    {
      title: "AI for Agriculture: Transforming Farming in Africa",
      description: "How AI is helping small-scale farmers increase yields and access markets.",
      date: "February 15, 2024",
      readTime: "7 min read",
      link: "/blog/ai-agriculture-africa",
    },
    {
      title: "Data Privacy Regulations Across Africa",
      description: "A comprehensive overview of data privacy regulations in different African countries.",
      date: "January 25, 2024",
      readTime: "10 min read",
      link: "/blog/data-privacy-africa",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b">
        <div className="container px-4 md:px-6 py-12 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold font-barlow mb-4">Documentation & Resources</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Everything you need to build powerful AI solutions for African challenges
            </p>

            <div className="relative max-w-md mx-auto">
              <input
                type="text"
                placeholder="Search documentation..."
                className="w-full h-12 pl-4 pr-12 rounded-full border-2 border-primary/30 focus:border-primary focus:outline-none"
              />
              <Button className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full h-10">Search</Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container px-4 md:px-6 py-12">
        <Tabs defaultValue="documentation">
          <TabsList className="mb-8 w-full justify-start">
            <TabsTrigger value="documentation">Documentation</TabsTrigger>
            <TabsTrigger value="compliance">Legal Compliance</TabsTrigger>
            <TabsTrigger value="trends">AI Trends in Africa</TabsTrigger>
          </TabsList>

          <TabsContent value="documentation">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {documentationCategories.map((category, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      {category.icon}
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {category.items.map((item, itemIndex) => (
                        <li key={itemIndex}>
                          <Link
                            href={item.href}
                            className="flex items-center text-sm hover:text-primary transition-colors"
                          >
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                            {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>

                    <Button variant="ghost" className="mt-4 text-sm" asChild>
                      <Link href={`/documentation/${category.title.toLowerCase().replace(" ", "-")}`}>
                        View all {category.title.toLowerCase()} docs
                        <ExternalLink className="ml-2 h-3 w-3" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 bg-primary/5 rounded-lg p-8">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                  <Book className="h-8 w-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold font-barlow mb-2">Need help getting started?</h3>
                  <p className="text-muted-foreground mb-4">
                    Our comprehensive guide will walk you through creating your first AI server and workflow.
                  </p>
                  <Button variant="primary">Read the Getting Started Guide</Button>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="compliance">
            <div className="max-w-3xl mx-auto mb-8">
              <h2 className="text-2xl font-bold font-barlow mb-4">Legal Compliance Resources</h2>
              <p className="text-muted-foreground mb-6">
                Ensuring compliance with African regulations is essential for building trust and operating legally. Use
                these resources to understand the requirements for different African countries.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {complianceDocuments.map((doc, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2">{doc.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{doc.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-muted-foreground">Updated: {doc.lastUpdated}</span>
                      <Button variant="outline" size="sm" asChild>
                        <a href={doc.downloadLink} download>
                          <Download className="mr-2 h-4 w-4" />
                          Download PDF
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 bg-secondary/5 rounded-lg p-8">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center">
                  <Shield className="h-8 w-8 text-secondary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold font-barlow mb-2">Need compliance consulting?</h3>
                  <p className="text-muted-foreground mb-4">
                    Our team of legal experts can help ensure your AI solutions comply with all relevant African
                    regulations.
                  </p>
                  <Button variant="secondary">Schedule a Consultation</Button>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="trends">
            <div className="max-w-3xl mx-auto mb-8">
              <h2 className="text-2xl font-bold font-barlow mb-4">AI Trends in Africa</h2>
              <p className="text-muted-foreground mb-6">
                Stay up-to-date with the latest developments, innovations, and trends in AI across Africa.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {aiTrends.map((trend, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/3">
                        <div className="aspect-video bg-gray-100 rounded-md mb-4 md:mb-0"></div>
                      </div>
                      <div className="md:w-2/3">
                        <h3 className="text-xl font-semibold mb-2">{trend.title}</h3>
                        <div className="flex items-center text-sm text-muted-foreground mb-3">
                          <span>{trend.date}</span>
                          <span className="mx-2">•</span>
                          <span>{trend.readTime}</span>
                        </div>
                        <p className="text-muted-foreground mb-4">{trend.description}</p>
                        <Button variant="outline" asChild>
                          <Link href={trend.link}>
                            Read Article
                            <ExternalLink className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Button variant="outline" size="lg">
                View All Articles
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <div className="bg-primary/5 py-12">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold font-barlow mb-4">Can't find what you're looking for?</h2>
            <p className="text-muted-foreground mb-6">
              Our support team is here to help you with any questions or issues you may have.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary">Contact Support</Button>
              <Button variant="outline">Join Community Forum</Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

