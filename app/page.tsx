import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Footer } from "@/components/layout/footer"
import { EnhancedCTA } from "@/components/ui/enhanced-cta"
import { Check, ArrowRight, Server, Workflow, Users, Star } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-b from-primary/5 to-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 text-center lg:text-left">
              <div className="inline-block px-3 py-1 mb-6 rounded-full bg-primary/10 text-primary font-medium text-sm">
                Powered by African Innovation
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-barlow mb-6 tracking-tight">
                AI-Powered Servers for <span className="text-primary">African</span> Challenges
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
                Build, deploy, and scale AI workflows tailored for African markets. Connect with builders across the
                continent.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
                >
                  <Link href="/market" className="flex items-center">
                    Explore Marketplace
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5">
                  <Link href="/build">Start Building</Link>
                </Button>
              </div>

              <div className="mt-8 flex items-center justify-center lg:justify-start text-sm text-gray-500">
                <Check className="h-4 w-4 text-green-500 mr-1" />
                <span>No credit card required</span>
                <span className="mx-2">•</span>
                <Check className="h-4 w-4 text-green-500 mr-1" />
                <span>African payment methods</span>
                <span className="mx-2">•</span>
                <Check className="h-4 w-4 text-green-500 mr-1" />
                <span>Local compliance</span>
              </div>
            </div>

            <div className="lg:w-1/2 relative">
              <div className="relative bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-100">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary"></div>
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Afreasy Marketplace Dashboard"
                  className="w-full h-auto"
                />
              </div>

              <div className="absolute -bottom-6 -left-6 transform rotate-6 bg-white p-4 rounded-lg shadow-lg border border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-sm font-medium">AI-Powered Analytics</span>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 transform -rotate-3 bg-white p-4 rounded-lg shadow-lg border border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-primary"></div>
                  <span className="text-sm font-medium">African Compliance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-barlow mb-4">Built for African Innovation</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform is designed to address the unique challenges and opportunities of the African tech ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:translate-y-[-5px]">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Server className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">AI Servers</h3>
                <p className="text-gray-600 mb-4">
                  Deploy AI servers optimized for African use cases, from healthcare to agriculture.
                </p>
                <Link href="/market" className="text-primary font-medium flex items-center hover:underline">
                  Explore Servers
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:translate-y-[-5px]">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                  <Workflow className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Workflow Builder</h3>
                <p className="text-gray-600 mb-4">
                  Create custom workflows with our drag-and-drop interface, no coding required.
                </p>
                <Link href="/build" className="text-secondary font-medium flex items-center hover:underline">
                  Start Building
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:translate-y-[-5px]">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">African Community</h3>
                <p className="text-gray-600 mb-4">
                  Connect with builders across Africa, share knowledge, and collaborate.
                </p>
                <Link href="/builders" className="text-accent font-medium flex items-center hover:underline">
                  Meet Builders
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sankofa Section */}
      <section className="py-20 bg-primary/5">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <div className="relative">
                <div className="absolute inset-0 bg-grid-pattern opacity-10 rounded-xl"></div>
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Sankofa Symbol"
                  className="w-full h-auto rounded-xl shadow-lg"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">🦅</span>
                    <span className="text-sm font-medium">Sankofa Symbol</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold font-barlow mb-6">
                Inspired by <span className="text-primary">Sankofa</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our platform is inspired by the Sankofa principle: looking back to move forward. We combine traditional
                African wisdom with cutting-edge AI technology to create solutions that are truly African.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-1 mr-3">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">African-First Design</h3>
                    <p className="text-gray-600">
                      Built with African infrastructure, connectivity, and use cases in mind.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-1 mr-3">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Local Compliance</h3>
                    <p className="text-gray-600">
                      Designed to meet regulatory requirements across different African countries.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-1 mr-3">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Community-Driven</h3>
                    <p className="text-gray-600">
                      Built by Africans, for Africans, with a focus on collaboration and knowledge sharing.
                    </p>
                  </div>
                </div>
              </div>

              <Button className="mt-8 bg-primary hover:bg-primary/90 text-white">
                <Link href="/about-sankofa">Learn More About Sankofa</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold font-barlow text-primary mb-2">500+</div>
              <p className="text-gray-600">AI Servers</p>
            </div>

            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold font-barlow text-primary mb-2">1,200+</div>
              <p className="text-gray-600">African Builders</p>
            </div>

            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold font-barlow text-primary mb-2">25+</div>
              <p className="text-gray-600">African Countries</p>
            </div>

            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold font-barlow text-primary mb-2">98%</div>
              <p className="text-gray-600">Customer Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* News & Trends Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-barlow mb-4">AI Trends in Africa</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest developments in AI across the African continent.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="overflow-hidden">
              <div className="h-48 bg-gray-200">
                <img
                  src="/placeholder.svg?height=200&width=400"
                  alt="AI in Agriculture"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="text-sm text-gray-500 mb-2">March 15, 2024</div>
                <h3 className="text-xl font-semibold mb-2">AI Revolutionizing Agriculture in East Africa</h3>
                <p className="text-gray-600 mb-4">
                  How AI-powered solutions are helping small-scale farmers increase yields and access markets.
                </p>
                <Link
                  href="/blog/ai-agriculture"
                  className="text-primary font-medium flex items-center hover:underline"
                >
                  Read More
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="h-48 bg-gray-200">
                <img
                  src="/placeholder.svg?height=200&width=400"
                  alt="Healthcare AI"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="text-sm text-gray-500 mb-2">March 10, 2024</div>
                <h3 className="text-xl font-semibold mb-2">AI in Healthcare: Nigerian Success Stories</h3>
                <p className="text-gray-600 mb-4">
                  Nigerian startups are using AI to improve healthcare access and outcomes across the country.
                </p>
                <Link
                  href="/blog/ai-healthcare-nigeria"
                  className="text-primary font-medium flex items-center hover:underline"
                >
                  Read More
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="h-48 bg-gray-200">
                <img
                  src="/placeholder.svg?height=200&width=400"
                  alt="AI Regulations"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="text-sm text-gray-500 mb-2">March 5, 2024</div>
                <h3 className="text-xl font-semibold mb-2">Navigating AI Regulations Across Africa</h3>
                <p className="text-gray-600 mb-4">
                  A comprehensive guide to AI regulations and compliance requirements in different African countries.
                </p>
                <Link
                  href="/blog/ai-regulations-africa"
                  className="text-primary font-medium flex items-center hover:underline"
                >
                  Read More
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/5">
              <Link href="/blog">View All Articles</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <EnhancedCTA
        title="Ready to Build AI Solutions for African Challenges?"
        description="Join thousands of African developers and businesses building innovative AI solutions tailored for local challenges."
        primaryButtonText="Get Started for Free"
        primaryButtonLink="/signup"
        secondaryButtonText="Explore Marketplace"
        secondaryButtonLink="/market"
        variant="gradient"
        size="lg"
      />

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-barlow mb-4">Trusted by African Innovators</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from the builders and businesses using our platform to create impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
                <div>
                  <h3 className="font-semibold">Chioma Okonkwo</h3>
                  <p className="text-sm text-gray-500">Founder, HealthTech Nigeria</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "Afreasy has been a game-changer for our healthcare startup. We've been able to deploy AI solutions that
                work with our local infrastructure and comply with Nigerian regulations."
              </p>
              <div className="flex text-yellow-400">
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
                <div>
                  <h3 className="font-semibold">David Kimani</h3>
                  <p className="text-sm text-gray-500">CTO, AgriTech Kenya</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "The workflow builder has allowed us to create custom AI solutions for Kenyan farmers without writing a
                single line of code. The impact on our business has been tremendous."
              </p>
              <div className="flex text-yellow-400">
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
                <div>
                  <h3 className="font-semibold">Amara Diallo</h3>
                  <p className="text-sm text-gray-500">Lead Developer, SenTech</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "As a developer, I appreciate how Afreasy has built a platform that understands African challenges. The
                community of builders has been incredibly supportive."
              </p>
              <div className="flex text-yellow-400">
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-barlow mb-4">Our Partners</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Working with leading organizations across Africa to drive innovation.
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="w-32 h-16 bg-white rounded-lg shadow flex items-center justify-center">
                <img
                  src="/placeholder.svg?height=60&width=120"
                  alt={`Partner ${i + 1}`}
                  className="max-w-full max-h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}

