import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  BookOpen,
  FileText,
  HelpCircle,
  Users,
  Shield,
  Globe,
} from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Marketplace", href: "/market" },
    { name: "Workflow Builder", href: "/build" },
    { name: "Pricing", href: "/pricing" },
    { name: "Featured Builders", href: "/featured" },
    { name: "Partners", href: "/partners" },
  ]

  const resourceLinks = [
    { name: "Documentation", href: "/documentation", icon: <FileText className="w-4 h-4" /> },
    { name: "Tutorials", href: "/documentation", icon: <BookOpen className="w-4 h-4" /> },
    { name: "Knowledge Base", href: "/documentation", icon: <HelpCircle className="w-4 h-4" /> },
    { name: "Community Forum", href: "/documentation", icon: <Users className="w-4 h-4" /> },
    { name: "Legal & Compliance", href: "/documentation", icon: <Shield className="w-4 h-4" /> },
    { name: "AI in Africa Blog", href: "/documentation", icon: <Globe className="w-4 h-4" /> },
  ]

  const countries = [
    { name: "Nigeria", flag: "🇳🇬" },
    { name: "Kenya", flag: "🇰🇪" },
    { name: "South Africa", flag: "🇿🇦" },
    { name: "Ghana", flag: "🇬🇭" },
    { name: "Rwanda", flag: "🇷🇼" },
    { name: "Ethiopia", flag: "🇪🇹" },
  ]

  return (
    <footer className="bg-gradient-to-r from-primary/90 to-primary text-white">
      {/* Newsletter Section */}
      <div className="container px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold font-barlow mb-4">Stay Updated with African AI Innovations</h2>
            <p className="text-white/80 mb-6">
              Join our newsletter to receive the latest updates on AI developments, new servers, and success stories
              from across Africa.
            </p>
          </div>

          <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
            <form className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email Address
                </label>
                <div className="flex">
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    className="rounded-r-none bg-white/20 border-white/30 text-white placeholder:text-white/50"
                  />
                  <Button className="rounded-l-none bg-white text-primary hover:bg-white/90 transition-all duration-300 transform hover:translate-x-1">
                    Subscribe
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="flex items-center">
                <input type="checkbox" id="consent" className="mr-2" />
                <label htmlFor="consent" className="text-sm text-white/80">
                  I agree to receive marketing communications from Afreasy
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="border-t border-white/20">
        <div className="container px-4 md:px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Column 1: About */}
            <div>
              <h3 className="text-xl font-bold font-barlow mb-4">Afreasy Marketplace</h3>
              <p className="text-white/80 mb-4">
                Empowering African innovation through AI-powered servers and workflows designed for local challenges.
              </p>

              <div className="space-y-2 mb-4">
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  <a href="mailto:contact@afreasy.com" className="text-white/80 hover:text-white">
                    contact@afreasy.com
                  </a>
                </div>
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  <a href="tel:+2341234567890" className="text-white/80 hover:text-white">
                    +234 123 456 7890
                  </a>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-4 h-4 mr-2 mt-1" />
                  <span className="text-white/80">Lagos, Nigeria • Nairobi, Kenya • Accra, Ghana</span>
                </div>
              </div>

              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h3 className="text-xl font-bold font-barlow mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href} className="text-white/80 hover:text-white flex items-center group">
                      <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>

              <h3 className="text-xl font-bold font-barlow mt-6 mb-4">We Serve</h3>
              <div className="flex flex-wrap gap-2">
                {countries.map((country, index) => (
                  <span key={index} className="inline-flex items-center">
                    <span className="mr-1">{country.flag}</span>
                    <span className="text-white/80">{country.name}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Column 3: Resources */}
            <div>
              <h3 className="text-xl font-bold font-barlow mb-4">Resources</h3>
              <ul className="space-y-3">
                {resourceLinks.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href} className="text-white/80 hover:text-white flex items-center group">
                      <span className="mr-2 text-white/60 group-hover:text-white transition-colors">{link.icon}</span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-6 p-4 bg-white/10 rounded-lg">
                <h4 className="font-semibold mb-2">Quick Start Guides</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/guides/first-server" className="text-white/80 hover:text-white underline">
                      Building Your First Server
                    </Link>
                  </li>
                  <li>
                    <Link href="/guides/workflow-basics" className="text-white/80 hover:text-white underline">
                      Workflow Builder Basics
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/guides/africastalking-integration"
                      className="text-white/80 hover:text-white underline"
                    >
                      AfricasTalking SMS Integration
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Column 4: CTA */}
            <div>
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm border border-white/20 relative overflow-hidden">
                <div className="absolute -right-8 -top-8 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
                <div className="absolute -left-4 -bottom-4 w-16 h-16 bg-white/10 rounded-full blur-lg"></div>

                <h3 className="text-xl font-bold font-barlow mb-4 relative z-10">Start Building Today</h3>
                <p className="text-white/80 mb-6 relative z-10">
                  Create AI-powered servers and workflows tailored for African challenges.
                </p>

                <div className="space-y-3 relative z-10">
                  <Button className="w-full bg-white text-primary hover:bg-white/90 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:translate-y-[-2px]">
                    Create Account
                  </Button>
                  <Button variant="outline" className="w-full border-white text-white hover:bg-white/10">
                    Explore Marketplace
                  </Button>
                </div>

                <div className="mt-6 pt-4 border-t border-white/20 text-center text-sm text-white/60 relative z-10">
                  Already have an account?{" "}
                  <Link href="/login" className="text-white underline">
                    Log in
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20 py-6">
        <div className="container px-4 md:px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-white/60 text-sm mb-4 md:mb-0">
            © {currentYear} Afreasy Marketplace. Proudly built by{" "}
            <span className="font-semibold text-white">RaEasy</span>. All rights reserved.
          </div>

          <div className="flex space-x-6 text-sm text-white/60">
            <Link href="/terms" className="hover:text-white">
              Terms of Service
            </Link>
            <Link href="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/cookies" className="hover:text-white">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

