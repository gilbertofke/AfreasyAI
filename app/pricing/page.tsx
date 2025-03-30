import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, X } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Footer } from "@/components/layout/footer"

export default function PricingPage() {
  const features = {
    basic: [
      { name: "Up to 5 servers", included: true },
      { name: "Up to 3 workflows", included: true },
      { name: "Basic analytics", included: true },
      { name: "Community support", included: true },
      { name: "GDPR-Africa compliance", included: true },
      { name: "API access", included: false },
      { name: "Custom branding", included: false },
      { name: "Priority support", included: false },
    ],
    pro: [
      { name: "Up to 20 servers", included: true },
      { name: "Up to 10 workflows", included: true },
      { name: "Advanced analytics", included: true },
      { name: "Email support", included: true },
      { name: "GDPR-Africa compliance", included: true },
      { name: "API access", included: true },
      { name: "Custom branding", included: true },
      { name: "Priority support", included: false },
    ],
    enterprise: [
      { name: "Unlimited servers", included: true },
      { name: "Unlimited workflows", included: true },
      { name: "Enterprise analytics", included: true },
      { name: "24/7 dedicated support", included: true },
      { name: "GDPR-Africa compliance", included: true },
      { name: "Full API access", included: true },
      { name: "Custom branding", included: true },
      { name: "Priority support", included: true },
    ],
  }

  const paymentMethods = [
    {
      name: "M-Pesa",
      logo: "/placeholder.svg?height=40&width=80",
      countries: ["Kenya", "Tanzania", "Uganda"],
      description: "Mobile money payment system popular in East Africa",
    },
    {
      name: "Flutterwave",
      logo: "/placeholder.svg?height=40&width=80",
      countries: ["Nigeria", "Ghana", "Kenya", "South Africa"],
      description: "Pan-African payment gateway supporting multiple payment methods",
    },
    {
      name: "Airtel Money",
      logo: "/placeholder.svg?height=40&width=80",
      countries: ["Nigeria", "Kenya", "Uganda", "Tanzania", "Rwanda"],
      description: "Mobile money service available across multiple African countries",
    },
    {
      name: "Chipper Cash",
      logo: "/placeholder.svg?height=40&width=80",
      countries: ["Ghana", "Uganda", "Kenya", "Tanzania", "Rwanda", "Nigeria"],
      description: "Cross-border payment app for sending and receiving money across Africa",
    },
    {
      name: "Akoin",
      logo: "/placeholder.svg?height=40&width=80",
      countries: ["Pan-African"],
      description: "Cryptocurrency designed for entrepreneurs in rising economies",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-primary/5">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold font-barlow mb-4">Simple, Transparent Pricing</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Choose the plan that's right for your business, with pricing options designed for African startups and
              enterprises
            </p>

            <div className="inline-flex items-center rounded-full border p-1 mb-8">
              <Tabs defaultValue="monthly" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="monthly">Monthly</TabsTrigger>
                  <TabsTrigger value="yearly">
                    Yearly
                    <Badge variant="outline" className="ml-2 bg-primary/10 text-primary border-0">
                      Save 20%
                    </Badge>
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="monthly" className="mt-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Basic Plan */}
                    <Card className="flex flex-col">
                      <CardHeader>
                        <CardTitle className="text-xl">Basic</CardTitle>
                        <div className="mt-4">
                          <span className="text-4xl font-bold">$19</span>
                          <span className="text-muted-foreground ml-2">/month</span>
                        </div>
                        <p className="text-sm text-muted-foreground mt-2">Perfect for individuals and small startups</p>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <ul className="space-y-3">
                          {features.basic.map((feature, index) => (
                            <li key={index} className="flex items-start">
                              {feature.included ? (
                                <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                              ) : (
                                <X className="h-5 w-5 text-gray-300 mr-2 shrink-0" />
                              )}
                              <span className={feature.included ? "" : "text-muted-foreground"}>{feature.name}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="w-full">
                          Get Started
                        </Button>
                      </CardFooter>
                    </Card>

                    {/* Pro Plan */}
                    <Card className="flex flex-col relative border-primary">
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <Badge className="bg-primary text-white">Most Popular</Badge>
                      </div>
                      <CardHeader>
                        <CardTitle className="text-xl">Pro</CardTitle>
                        <div className="mt-4">
                          <span className="text-4xl font-bold">$49</span>
                          <span className="text-muted-foreground ml-2">/month</span>
                        </div>
                        <p className="text-sm text-muted-foreground mt-2">For growing businesses and teams</p>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <ul className="space-y-3">
                          {features.pro.map((feature, index) => (
                            <li key={index} className="flex items-start">
                              {feature.included ? (
                                <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                              ) : (
                                <X className="h-5 w-5 text-gray-300 mr-2 shrink-0" />
                              )}
                              <span className={feature.included ? "" : "text-muted-foreground"}>{feature.name}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button variant="primary" className="w-full">
                          Get Started
                        </Button>
                      </CardFooter>
                    </Card>

                    {/* Enterprise Plan */}
                    <Card className="flex flex-col">
                      <CardHeader>
                        <CardTitle className="text-xl">Enterprise</CardTitle>
                        <div className="mt-4">
                          <span className="text-4xl font-bold">$99</span>
                          <span className="text-muted-foreground ml-2">/month</span>
                        </div>
                        <p className="text-sm text-muted-foreground mt-2">
                          For large organizations with advanced needs
                        </p>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <ul className="space-y-3">
                          {features.enterprise.map((feature, index) => (
                            <li key={index} className="flex items-start">
                              {feature.included ? (
                                <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                              ) : (
                                <X className="h-5 w-5 text-gray-300 mr-2 shrink-0" />
                              )}
                              <span className={feature.included ? "" : "text-muted-foreground"}>{feature.name}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="w-full">
                          Contact Sales
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="yearly" className="mt-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Basic Plan (Yearly) */}
                    <Card className="flex flex-col">
                      <CardHeader>
                        <CardTitle className="text-xl">Basic</CardTitle>
                        <div className="mt-4">
                          <span className="text-4xl font-bold">$15</span>
                          <span className="text-muted-foreground ml-2">/month</span>
                        </div>
                        <p className="text-sm text-muted-foreground mt-2">Billed annually at $180 (Save $48)</p>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <ul className="space-y-3">
                          {features.basic.map((feature, index) => (
                            <li key={index} className="flex items-start">
                              {feature.included ? (
                                <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                              ) : (
                                <X className="h-5 w-5 text-gray-300 mr-2 shrink-0" />
                              )}
                              <span className={feature.included ? "" : "text-muted-foreground"}>{feature.name}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="w-full">
                          Get Started
                        </Button>
                      </CardFooter>
                    </Card>

                    {/* Pro Plan (Yearly) */}
                    <Card className="flex flex-col relative border-primary">
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <Badge className="bg-primary text-white">Most Popular</Badge>
                      </div>
                      <CardHeader>
                        <CardTitle className="text-xl">Pro</CardTitle>
                        <div className="mt-4">
                          <span className="text-4xl font-bold">$39</span>
                          <span className="text-muted-foreground ml-2">/month</span>
                        </div>
                        <p className="text-sm text-muted-foreground mt-2">Billed annually at $468 (Save $120)</p>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <ul className="space-y-3">
                          {features.pro.map((feature, index) => (
                            <li key={index} className="flex items-start">
                              {feature.included ? (
                                <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                              ) : (
                                <X className="h-5 w-5 text-gray-300 mr-2 shrink-0" />
                              )}
                              <span className={feature.included ? "" : "text-muted-foreground"}>{feature.name}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button variant="primary" className="w-full">
                          Get Started
                        </Button>
                      </CardFooter>
                    </Card>

                    {/* Enterprise Plan (Yearly) */}
                    <Card className="flex flex-col">
                      <CardHeader>
                        <CardTitle className="text-xl">Enterprise</CardTitle>
                        <div className="mt-4">
                          <span className="text-4xl font-bold">$79</span>
                          <span className="text-muted-foreground ml-2">/month</span>
                        </div>
                        <p className="text-sm text-muted-foreground mt-2">Billed annually at $948 (Save $240)</p>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <ul className="space-y-3">
                          {features.enterprise.map((feature, index) => (
                            <li key={index} className="flex items-start">
                              {feature.included ? (
                                <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                              ) : (
                                <X className="h-5 w-5 text-gray-300 mr-2 shrink-0" />
                              )}
                              <span className={feature.included ? "" : "text-muted-foreground"}>{feature.name}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="w-full">
                          Contact Sales
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Methods Section */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold font-barlow mb-4">African Payment Methods</h2>
            <p className="text-lg text-muted-foreground">
              We support a wide range of payment methods popular across Africa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {paymentMethods.map((method, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="h-12 flex items-center mb-4">
                    <img
                      src={method.logo || "/placeholder.svg"}
                      alt={`${method.name} logo`}
                      className="max-h-full object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{method.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{method.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {method.countries.map((country, countryIndex) => (
                      <Badge key={countryIndex} variant="outline">
                        {country}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold font-barlow mb-8 text-center">Frequently Asked Questions</h2>

            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">Can I change my plan later?</h3>
                  <p className="text-muted-foreground">
                    Yes, you can upgrade or downgrade your plan at any time. When upgrading, you'll be prorated for the
                    remainder of your billing cycle. When downgrading, the new rate will apply to your next billing
                    cycle.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">Do you offer discounts for startups?</h3>
                  <p className="text-muted-foreground">
                    Yes, we offer special pricing for African startups. Contact our sales team to learn more about our
                    startup program and eligibility requirements.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">What payment methods do you accept?</h3>
                  <p className="text-muted-foreground">
                    We accept a wide range of payment methods popular across Africa, including M-Pesa, Flutterwave,
                    Airtel Money, Chipper Cash, and Akoin cryptocurrency.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">Is there a free trial?</h3>
                  <p className="text-muted-foreground">
                    Yes, we offer a 14-day free trial on all plans. No credit card required to start your trial.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-barlow mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8 text-white/80">
              Join thousands of African businesses building innovative AI solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Start Your Free Trial
              </Button>
              <Button variant="outline" size="lg" className="bg-transparent text-white border-white hover:bg-white/10">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

