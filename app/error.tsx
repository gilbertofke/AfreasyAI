"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { RefreshCw, Home, AlertTriangle } from "lucide-react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="container px-4 md:px-6 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <AlertTriangle className="h-8 w-8 text-red-600" />
          </div>

          <h1 className="text-3xl md:text-4xl font-bold font-barlow mb-4">Something Went Wrong</h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            We apologize for the inconvenience. An unexpected error has occurred.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" onClick={reset} className="flex items-center">
              <RefreshCw className="mr-2 h-5 w-5" />
              Try Again
            </Button>
            <Button variant="outline" asChild>
              <Link href="/" className="flex items-center">
                <Home className="mr-2 h-5 w-5" />
                Back to Home
              </Link>
            </Button>
          </div>

          {error.digest && <p className="mt-8 text-sm text-muted-foreground">Error ID: {error.digest}</p>}
        </div>
      </div>
    </div>
  )
}

