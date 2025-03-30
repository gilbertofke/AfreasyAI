"use client"

import React, { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, ArrowDown, Coffee, Save } from "lucide-react"

interface Node {
  id: string
  type: string
  title: string
  position: { x: number; y: number }
  inputs?: string[]
  outputs?: string[]
}

interface WorkflowCanvasProps {
  initialNodes?: Node[]
}

export function WorkflowCanvas({ initialNodes = [] }: WorkflowCanvasProps) {
  const [nodes, setNodes] = useState<Node[]>(initialNodes)
  const [isDeploying, setIsDeploying] = useState(false)

  const handleAddNode = (type: string) => {
    const newNode: Node = {
      id: `node-${Date.now()}`,
      type,
      title:
        type === "mpesa"
          ? "M-Pesa Payment"
          : type === "sms"
            ? "SMS Notification"
            : type === "nafdac"
              ? "NAFDAC Check"
              : "New Node",
      position: {
        x: Math.floor(Math.random() * 100),
        y: nodes.length * 120,
      },
      inputs: ["input"],
      outputs: ["output"],
    }

    setNodes([...nodes, newNode])
  }

  const handleDeploy = () => {
    setIsDeploying(true)
    setTimeout(() => {
      setIsDeploying(false)
    }, 3000)
  }

  return (
    <div className="flex flex-col md:flex-row h-full gap-4">
      {/* Node Library */}
      <div className="w-full md:w-64 bg-gray-50 p-4 rounded-lg">
        <h3 className="font-barlow font-semibold mb-4">African Services</h3>
        <div className="space-y-2">
          <Button variant="outline" className="w-full justify-start" onClick={() => handleAddNode("mpesa")}>
            <div className="mr-2">🇰🇪</div> M-Pesa API
          </Button>
          <Button variant="outline" className="w-full justify-start" onClick={() => handleAddNode("sms")}>
            <div className="mr-2">📱</div> Twilio SMS
          </Button>
          <Button variant="outline" className="w-full justify-start" onClick={() => handleAddNode("nafdac")}>
            <div className="mr-2">🇳🇬</div> NAFDAC Check
          </Button>
        </div>

        <h3 className="font-barlow font-semibold mt-6 mb-4">Templates</h3>
        <div className="space-y-2">
          <Button variant="secondary" className="w-full justify-start">
            <div className="mr-2">🌾</div> Farmers' Alert
          </Button>
          <Button variant="secondary" className="w-full justify-start">
            <div className="mr-2">🏛️</div> eCitizen Assistant
          </Button>
        </div>
      </div>

      {/* Canvas */}
      <div className="flex-1 bg-white border-2 border-dashed border-gray-200 rounded-lg p-4 min-h-[500px] relative">
        {nodes.length === 0 ? (
          <div className="flex items-center justify-center h-full text-muted-foreground">
            <div className="text-center">
              <Plus className="mx-auto h-12 w-12 text-muted-foreground/50" />
              <p className="mt-2">Drag services here to build your workflow</p>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            {nodes.map((node, index) => (
              <React.Fragment key={node.id}>
                <Card className="w-full md:w-3/4 mx-auto">
                  <CardHeader className="bg-secondary/10 py-2">
                    <CardTitle className="text-sm font-medium">{node.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4">
                    <p className="text-sm text-muted-foreground">
                      {node.type === "mpesa"
                        ? "Process payments via M-Pesa"
                        : node.type === "sms"
                          ? "Send SMS notifications"
                          : node.type === "nafdac"
                            ? "Verify product compliance"
                            : "Configure node"}
                    </p>
                  </CardContent>
                </Card>
                {index < nodes.length - 1 && (
                  <div className="flex justify-center">
                    <ArrowDown className="h-6 w-6 text-muted-foreground" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        )}
      </div>

      {/* Actions */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4 flex justify-end gap-2">
        <Button variant="outline">
          <Save className="mr-2 h-4 w-4" />
          Save
        </Button>
        <Button variant="primary" onClick={handleDeploy} disabled={isDeploying}>
          {isDeploying ? (
            <>
              <Coffee className={`mr-2 h-4 w-4 animate-djembe-pulse`} />
              Deploying...
            </>
          ) : (
            <>Deploy Workflow</>
          )}
        </Button>
      </div>
    </div>
  )
}

