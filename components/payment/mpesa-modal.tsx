"use client"

import type React from "react"
import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Check, Loader2 } from "lucide-react"

interface MPesaModalProps {
  isOpen: boolean
  onClose: () => void
  amount: number
  onSuccess?: () => void
}

export function MPesaModal({ isOpen, onClose, amount, onSuccess }: MPesaModalProps) {
  const [phoneNumber, setPhoneNumber] = useState("")
  const [pin, setPin] = useState("")
  const [step, setStep] = useState(1)
  const [isProcessing, setIsProcessing] = useState(false)
  const [isComplete, setIsComplete] = useState(false)

  const handleSubmitPhone = (e: React.FormEvent) => {
    e.preventDefault()
    setStep(2)
  }

  const handleSubmitPin = (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)

    // Simulate processing
    setTimeout(() => {
      setIsProcessing(false)
      setIsComplete(true)

      // Simulate success callback
      setTimeout(() => {
        if (onSuccess) onSuccess()
        onClose()
        // Reset for next time
        setStep(1)
        setIsComplete(false)
        setPhoneNumber("")
        setPin("")
      }, 2000)
    }, 3000)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center">
            <span className="mr-2">🇰🇪</span> M-Pesa Payment
          </DialogTitle>
        </DialogHeader>

        {step === 1 && (
          <form onSubmit={handleSubmitPhone} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                countryFlag="🇰🇪"
                placeholder="07XX XXX XXX"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
              <p className="text-xs text-muted-foreground">Enter the M-Pesa registered phone number</p>
            </div>

            <div className="bg-secondary/10 p-3 rounded-md">
              <div className="flex justify-between">
                <span className="text-sm">Amount</span>
                <span className="font-semibold">KES {amount.toFixed(2)}</span>
              </div>
            </div>

            <DialogFooter>
              <Button type="button" variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button type="submit" variant="primary">
                Continue
              </Button>
            </DialogFooter>
          </form>
        )}

        {step === 2 && !isComplete && (
          <form onSubmit={handleSubmitPin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="pin">M-Pesa PIN</Label>
              <div className="flex gap-2">
                {Array.from({ length: 4 }).map((_, i) => (
                  <Input
                    key={i}
                    type="password"
                    maxLength={1}
                    className="w-12 h-12 text-center text-xl"
                    onChange={(e) => {
                      const newPin = pin.split("")
                      newPin[i] = e.target.value
                      setPin(newPin.join(""))

                      // Auto-focus next input
                      if (e.target.value && i < 3) {
                        const nextInput = document.querySelector(`input[name="pin-${i + 1}"]`) as HTMLInputElement
                        if (nextInput) nextInput.focus()
                      }
                    }}
                    name={`pin-${i}`}
                    required
                  />
                ))}
              </div>
              <p className="text-xs text-muted-foreground">Enter your M-Pesa PIN to authorize payment</p>
            </div>

            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => setStep(1)} disabled={isProcessing}>
                Back
              </Button>
              <Button type="submit" variant="primary" disabled={isProcessing || pin.length !== 4}>
                {isProcessing ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Processing...
                  </>
                ) : (
                  "Pay Now"
                )}
              </Button>
            </DialogFooter>
          </form>
        )}

        {isComplete && (
          <div className="py-6 text-center">
            <div className="mx-auto w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
              <Check className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Payment Successful</h3>
            <p className="text-muted-foreground mb-4">
              Your payment of KES {amount.toFixed(2)} has been processed successfully.
            </p>
            <Button variant="primary" onClick={onClose}>
              Done
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}

