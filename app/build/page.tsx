"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { EnhancedWorkflowCanvas } from "@/components/workflow/enhanced-canvas"
import { Save, Play, Download, FileText } from "lucide-react"
import { Input } from "@/components/ui/input"

export default function WorkflowBuilderPage() {
  const [workflowName, setWorkflowName] = useState("New Workflow")
  const [workflowDescription, setWorkflowDescription] = useState("")
  const [isEditing, setIsEditing] = useState(false)

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="container px-4 md:px-6 py-4 flex items-center justify-between">
          <div>
            {isEditing ? (
              <div className="flex items-center gap-2">
                <Input
                  value={workflowName}
                  onChange={(e) => setWorkflowName(e.target.value)}
                  className="text-2xl font-bold font-barlow h-10 w-64"
                  autoFocus
                  onBlur={() => setIsEditing(false)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      setIsEditing(false)
                    }
                  }}
                />
                <Button variant="ghost" size="sm" onClick={() => setIsEditing(false)}>
                  Save
                </Button>
              </div>
            ) : (
              <h1
                className="text-2xl font-bold font-barlow cursor-pointer hover:text-primary"
                onClick={() => setIsEditing(true)}
              >
                {workflowName}
              </h1>
            )}
            <p className="text-sm text-muted-foreground">
              Build your workflow by dragging African services from the library to the canvas
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <FileText className="mr-2 h-4 w-4" />
              Documentation
            </Button>
            <Button variant="outline" size="sm">
              <Save className="mr-2 h-4 w-4" />
              Save
            </Button>
            <Button variant="outline" size="sm">
              <Play className="mr-2 h-4 w-4" />
              Test
            </Button>
            <Button variant="primary" size="sm">
              <Download className="mr-2 h-4 w-4" />
              Deploy
            </Button>
          </div>
        </div>
      </header>

      <div className="flex-1 container px-4 md:px-6 py-6">
        <div className="h-[calc(100vh-180px)]">
          <EnhancedWorkflowCanvas />
        </div>
      </div>
    </div>
  )
}

