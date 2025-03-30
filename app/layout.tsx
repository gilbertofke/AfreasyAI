import type React from "react"
import type { Metadata } from "next"
import { Inter, Barlow } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { AuthProvider } from "@/context/auth-context"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const barlow = Barlow({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-barlow",
})

export const metadata: Metadata = {
  title: "Afreasy Marketplace - AI-Powered Servers for African Challenges",
  description:
    "Build, deploy, and scale AI workflows tailored for African markets. Connect with builders across the continent.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <style>
          {`
            @keyframes pulse-slow {
              0%, 100% {
                opacity: 0;
              }
              50% {
                opacity: 0.3;
              }
            }
            .animate-pulse-slow {
              animation: pulse-slow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
            }
            .bg-grid-pattern {
              background-image: 
                linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px);
              background-size: 20px 20px;
            }
          `}
        </style>
      </head>
      <body className={`${inter.variable} ${barlow.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <AuthProvider>{children}</AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'