"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface GDPRAfricaConsentProps {
  isOpen: boolean
  onAccept: () => void
  onDecline: () => void
}

export function GDPRAfricaConsent({ isOpen, onAccept, onDecline }: GDPRAfricaConsentProps) {
  const [consents, setConsents] = useState({
    necessary: true,
    functional: false,
    analytics: false,
    marketing: false,
  })

  const [language, setLanguage] = useState("en")

  const handleToggleConsent = (key: keyof typeof consents) => {
    if (key === "necessary") return // Cannot toggle necessary
    setConsents({
      ...consents,
      [key]: !consents[key],
    })
  }

  const handleAcceptAll = () => {
    setConsents({
      necessary: true,
      functional: true,
      analytics: true,
      marketing: true,
    })
    onAccept()
  }

  const handleSavePreferences = () => {
    onAccept()
  }

  return (
    <Dialog open={isOpen}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="flex items-center">
            <span className="mr-2">🌍</span> GDPR-Africa Consent
          </DialogTitle>
        </DialogHeader>

        <Tabs defaultValue="en" value={language} onValueChange={setLanguage}>
          <TabsList className="grid grid-cols-3 mb-4">
            <TabsTrigger value="en">English</TabsTrigger>
            <TabsTrigger value="sw">Swahili</TabsTrigger>
            <TabsTrigger value="fr">French</TabsTrigger>
          </TabsList>

          <TabsContent value="en" className="space-y-4">
            <p className="text-sm">
              We use cookies and similar technologies to provide you with the best experience on our platform, in
              accordance with GDPR-Africa regulations.
            </p>

            <div className="space-y-2">
              <div className="flex items-start space-x-2">
                <Checkbox id="necessary" checked={consents.necessary} disabled />
                <div className="grid gap-1.5">
                  <Label htmlFor="necessary" className="font-medium">
                    Necessary Cookies
                  </Label>
                  <p className="text-xs text-muted-foreground">
                    These cookies are essential for the platform to function properly.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-2">
                <Checkbox
                  id="functional"
                  checked={consents.functional}
                  onCheckedChange={() => handleToggleConsent("functional")}
                />
                <div className="grid gap-1.5">
                  <Label htmlFor="functional" className="font-medium">
                    Functional Cookies
                  </Label>
                  <p className="text-xs text-muted-foreground">
                    These cookies enable personalized features and functionality.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-2">
                <Checkbox
                  id="analytics"
                  checked={consents.analytics}
                  onCheckedChange={() => handleToggleConsent("analytics")}
                />
                <div className="grid gap-1.5">
                  <Label htmlFor="analytics" className="font-medium">
                    Analytics Cookies
                  </Label>
                  <p className="text-xs text-muted-foreground">
                    These cookies help us understand how visitors interact with our platform.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-2">
                <Checkbox
                  id="marketing"
                  checked={consents.marketing}
                  onCheckedChange={() => handleToggleConsent("marketing")}
                />
                <div className="grid gap-1.5">
                  <Label htmlFor="marketing" className="font-medium">
                    Marketing Cookies
                  </Label>
                  <p className="text-xs text-muted-foreground">
                    These cookies are used to deliver relevant ads and marketing campaigns.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="sw" className="space-y-4">
            <p className="text-sm">
              Tunatumia vidakuzi na teknolojia sawa ili kukupa uzoefu bora kwenye jukwaa letu, kwa mujibu wa kanuni za
              GDPR-Afrika.
            </p>

            {/* Swahili version of consent options would go here */}
            <div className="p-4 bg-secondary/10 rounded-md text-center">
              <p>Swahili translation of consent options</p>
            </div>
          </TabsContent>

          <TabsContent value="fr" className="space-y-4">
            <p className="text-sm">
              Nous utilisons des cookies et des technologies similaires pour vous offrir la meilleure expérience sur
              notre plateforme, conformément aux réglementations GDPR-Afrique.
            </p>

            {/* French version of consent options would go here */}
            <div className="p-4 bg-secondary/10 rounded-md text-center">
              <p>French translation of consent options</p>
            </div>
          </TabsContent>
        </Tabs>

        <DialogFooter className="flex flex-col sm:flex-row gap-2">
          <Button variant="outline" onClick={onDecline}>
            Decline All
          </Button>
          <Button variant="secondary" onClick={handleSavePreferences}>
            Save Preferences
          </Button>
          <Button variant="primary" onClick={handleAcceptAll}>
            Accept All
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

