"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Loader2, Send, Check } from "lucide-react"

interface AfricasTalkingSMSProps {
  apiKey?: string
  username?: string
  onSuccess?: () => void
}

export function AfricasTalkingSMS({ apiKey, username, onSuccess }: AfricasTalkingSMSProps) {
  const [formData, setFormData] = useState({
    to: "",
    message: "",
    from: "AFREASY",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setResult(null)

    try {
      // Simulate API call to AfricasTalking
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // For demo purposes, we'll just simulate a successful response
      setResult({
        success: true,
        message: `SMS sent successfully to ${formData.to}`,
      })

      if (onSuccess) {
        onSuccess()
      }
    } catch (error) {
      setResult({
        success: false,
        message: "Failed to send SMS. Please try again.",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <span className="mr-2">📱</span> AfricasTalking SMS
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="to">Recipient Phone Number</Label>
            <Input id="to" name="to" value={formData.to} onChange={handleChange} placeholder="+254XXXXXXXXX" required />
            <p className="text-xs text-muted-foreground">Enter the recipient's phone number with country code</p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="from">Sender ID</Label>
            <Input
              id="from"
              name="from"
              value={formData.from}
              onChange={handleChange}
              placeholder="AFREASY"
              maxLength={11}
            />
            <p className="text-xs text-muted-foreground">Alphanumeric sender ID (max 11 characters)</p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message here..."
              rows={4}
              required
            />
            <div className="flex justify-between">
              <p className="text-xs text-muted-foreground">SMS will be sent using AfricasTalking</p>
              <p className="text-xs">{formData.message.length}/160 characters</p>
            </div>
          </div>

          {result && (
            <div
              className={`p-3 rounded-md ${result.success ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"}`}
            >
              <p className="text-sm flex items-center">
                {result.success ? <Check className="h-4 w-4 mr-2" /> : <span className="mr-2">⚠️</span>}
                {result.message}
              </p>
            </div>
          )}

          <CardFooter className="px-0 pt-2">
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Send SMS
                </>
              )}
            </Button>
          </CardFooter>
        </form>
      </CardContent>
    </Card>
  )
}

