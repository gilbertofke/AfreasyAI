"use client"

import { Label } from "@/components/ui/label"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Plus, Coffee, Save, MessageSquare, Trash2, ChevronUp, ChevronDown, Settings, LinkIcon } from "lucide-react"

interface Node {
  id: string
  type: string
  title: string
  position: { x: number; y: number }
  inputs?: string[]
  outputs?: string[]
  config?: Record<string, any>
}

interface Connection {
  id: string
  sourceId: string
  targetId: string
  sourceHandle?: string
  targetHandle?: string
}

interface EnhancedWorkflowCanvasProps {
  initialNodes?: Node[]
}

export function EnhancedWorkflowCanvas({ initialNodes = [] }: EnhancedWorkflowCanvasProps) {
  const [nodes, setNodes] = useState<Node[]>(initialNodes)
  const [connections, setConnections] = useState<Connection[]>([])
  const [isDeploying, setIsDeploying] = useState(false)
  const [draggedNode, setDraggedNode] = useState<string | null>(null)
  const [selectedNode, setSelectedNode] = useState<string | null>(null)
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [chatMessages, setChatMessages] = useState<{ role: "user" | "assistant"; content: string }[]>([
    { role: "assistant", content: "How can I help you build your workflow today?" },
  ])
  const [messageInput, setMessageInput] = useState("")
  const [isConnecting, setIsConnecting] = useState<{ nodeId: string; isOutput: boolean } | null>(null)

  const canvasRef = useRef<HTMLDivElement>(null)
  const chatEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Scroll to bottom of chat when new messages are added
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [chatMessages])

  const handleDragStart = (nodeType: string) => {
    const newNode: Node = {
      id: `node-${Date.now()}`,
      type: nodeType,
      title: getNodeTitle(nodeType),
      position: {
        x: 50,
        y: nodes.length * 120,
      },
      inputs: ["input"],
      outputs: ["output"],
      config: getDefaultConfig(nodeType),
    }

    setNodes([...nodes, newNode])
    setDraggedNode(newNode.id)
  }

  const getNodeTitle = (type: string) => {
    switch (type) {
      case "mpesa":
        return "M-Pesa Payment"
      case "sms":
        return "AfricasTalking SMS"
      case "nafdac":
        return "NAFDAC Check"
      case "input":
        return "Workflow Input"
      case "output":
        return "Workflow Output"
      case "transform":
        return "Transform Data"
      case "condition":
        return "Condition"
      default:
        return "New Node"
    }
  }

  const getDefaultConfig = (type: string) => {
    switch (type) {
      case "mpesa":
        return {
          phoneNumber: "",
          amount: 0,
          currency: "KES",
          description: "Payment for services",
        }
      case "sms":
        return {
          to: "",
          message: "Hello from Afreasy!",
          senderId: "AFREASY",
        }
      case "nafdac":
        return {
          productId: "",
          checkType: "verification",
        }
      case "transform":
        return {
          transformType: "map",
          expression: "{ result: input.value * 2 }",
        }
      case "condition":
        return {
          condition: "input.value > 10",
          trueLabel: "True",
          falseLabel: "False",
        }
      default:
        return {}
    }
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    if (!draggedNode || !canvasRef.current) return

    const canvasRect = canvasRef.current.getBoundingClientRect()
    const x = e.clientX - canvasRect.left
    const y = e.clientY - canvasRect.top

    setNodes(nodes.map((node) => (node.id === draggedNode ? { ...node, position: { x, y } } : node)))

    setDraggedNode(null)
  }

  const handleNodeClick = (nodeId: string) => {
    setSelectedNode(nodeId === selectedNode ? null : nodeId)
  }

  const handleNodeDelete = (nodeId: string) => {
    setNodes(nodes.filter((node) => node.id !== nodeId))
    setConnections(connections.filter((conn) => conn.sourceId !== nodeId && conn.targetId !== nodeId))
    if (selectedNode === nodeId) {
      setSelectedNode(null)
    }
  }

  const handleNodeMove = (nodeId: string, direction: "up" | "down") => {
    const nodeIndex = nodes.findIndex((node) => node.id === nodeId)
    if (nodeIndex === -1) return

    const newNodes = [...nodes]
    const targetIndex = direction === "up" ? nodeIndex - 1 : nodeIndex + 1

    if (targetIndex < 0 || targetIndex >= nodes.length) return

    // Swap positions
    const temp = { ...newNodes[nodeIndex] }
    newNodes[nodeIndex] = { ...newNodes[targetIndex] }
    newNodes[targetIndex] = temp

    setNodes(newNodes)
  }

  const handleConfigChange = (nodeId: string, key: string, value: any) => {
    setNodes(nodes.map((node) => (node.id === nodeId ? { ...node, config: { ...node.config, [key]: value } } : node)))
  }

  const handleConnectionStart = (nodeId: string, isOutput: boolean) => {
    setIsConnecting({ nodeId, isOutput })
  }

  const handleConnectionEnd = (nodeId: string, isOutput: boolean) => {
    if (!isConnecting) return

    // Don't connect to self
    if (isConnecting.nodeId === nodeId) {
      setIsConnecting(null)
      return
    }

    // Source should be an output, target should be an input
    const sourceId = isConnecting.isOutput ? isConnecting.nodeId : nodeId
    const targetId = isConnecting.isOutput ? nodeId : isConnecting.nodeId

    // Don't create duplicate connections
    const existingConnection = connections.find((conn) => conn.sourceId === sourceId && conn.targetId === targetId)

    if (!existingConnection) {
      setConnections([
        ...connections,
        {
          id: `conn-${Date.now()}`,
          sourceId,
          targetId,
        },
      ])
    }

    setIsConnecting(null)
  }

  const handleConnectionDelete = (connectionId: string) => {
    setConnections(connections.filter((conn) => conn.id !== connectionId))
  }

  const handleChatSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!messageInput.trim()) return

    // Add user message
    setChatMessages([...chatMessages, { role: "user", content: messageInput }])

    // Simulate AI response
    setTimeout(() => {
      let response = "I'll help you with that! "

      if (messageInput.toLowerCase().includes("sms")) {
        response +=
          "To add SMS functionality, drag the AfricasTalking SMS node from the library to the canvas. You can then configure the recipient number and message content."

        // Optionally add a node automatically
        if (!nodes.some((node) => node.type === "sms")) {
          handleDragStart("sms")
        }
      } else if (messageInput.toLowerCase().includes("payment")) {
        response +=
          "For payment processing, use the M-Pesa node which integrates with the popular mobile money service in East Africa."
      } else if (messageInput.toLowerCase().includes("condition") || messageInput.toLowerCase().includes("if")) {
        response +=
          "You can add conditional logic with the Condition node, which allows you to create different paths based on your data."
      } else {
        response +=
          "What specific functionality are you trying to add to your workflow? I can help with payments, messaging, data transformation, and more."
      }

      setChatMessages((prev) => [...prev, { role: "assistant", content: response }])
    }, 1000)

    setMessageInput("")
  }

  const handleDeploy = () => {
    setIsDeploying(true)
    setTimeout(() => {
      setIsDeploying(false)
      // Show success message
      setChatMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Your workflow has been successfully deployed! It's now available in your profile.",
        },
      ])
    }, 3000)
  }

  return (
    <div className="flex flex-col md:flex-row h-full gap-4 relative">
      {/* Node Library */}
      <div className="w-full md:w-64 bg-gray-50 p-4 rounded-lg">
        <h3 className="font-barlow font-semibold mb-4">African Services</h3>
        <div className="space-y-2">
          <div
            className="p-2 bg-white border rounded-md cursor-move flex items-center gap-2 hover:border-primary"
            draggable
            onDragStart={() => handleDragStart("mpesa")}
          >
            <div className="mr-2">🇰🇪</div> M-Pesa API
          </div>
          <div
            className="p-2 bg-white border rounded-md cursor-move flex items-center gap-2 hover:border-primary"
            draggable
            onDragStart={() => handleDragStart("sms")}
          >
            <div className="mr-2">📱</div> AfricasTalking SMS
          </div>
          <div
            className="p-2 bg-white border rounded-md cursor-move flex items-center gap-2 hover:border-primary"
            draggable
            onDragStart={() => handleDragStart("nafdac")}
          >
            <div className="mr-2">🇳🇬</div> NAFDAC Check
          </div>
        </div>

        <h3 className="font-barlow font-semibold mt-6 mb-4">Logic</h3>
        <div className="space-y-2">
          <div
            className="p-2 bg-white border rounded-md cursor-move flex items-center gap-2 hover:border-primary"
            draggable
            onDragStart={() => handleDragStart("input")}
          >
            <div className="mr-2">⬇️</div> Input
          </div>
          <div
            className="p-2 bg-white border rounded-md cursor-move flex items-center gap-2 hover:border-primary"
            draggable
            onDragStart={() => handleDragStart("output")}
          >
            <div className="mr-2">⬆️</div> Output
          </div>
          <div
            className="p-2 bg-white border rounded-md cursor-move flex items-center gap-2 hover:border-primary"
            draggable
            onDragStart={() => handleDragStart("transform")}
          >
            <div className="mr-2">🔄</div> Transform
          </div>
          <div
            className="p-2 bg-white border rounded-md cursor-move flex items-center gap-2 hover:border-primary"
            draggable
            onDragStart={() => handleDragStart("condition")}
          >
            <div className="mr-2">🔀</div> Condition
          </div>
        </div>

        <h3 className="font-barlow font-semibold mt-6 mb-4">Templates</h3>
        <div className="space-y-2">
          <Button
            variant="secondary"
            className="w-full justify-start"
            onClick={() => {
              setNodes([
                {
                  id: "node-input",
                  type: "input",
                  title: "Workflow Input",
                  position: { x: 50, y: 50 },
                  outputs: ["output"],
                },
                {
                  id: "node-sms",
                  type: "sms",
                  title: "AfricasTalking SMS",
                  position: { x: 50, y: 200 },
                  inputs: ["input"],
                  outputs: ["output"],
                  config: {
                    to: "+254XXXXXXXXX",
                    message: "Your farm alert: Rain expected tomorrow!",
                    senderId: "FARMALERT",
                  },
                },
                {
                  id: "node-output",
                  type: "output",
                  title: "Workflow Output",
                  position: { x: 50, y: 350 },
                  inputs: ["input"],
                },
              ])
              setConnections([
                {
                  id: "conn-1",
                  sourceId: "node-input",
                  targetId: "node-sms",
                },
                {
                  id: "conn-2",
                  sourceId: "node-sms",
                  targetId: "node-output",
                },
              ])
            }}
          >
            <div className="mr-2">🌾</div> Farmers' Alert
          </Button>
          <Button
            variant="secondary"
            className="w-full justify-start"
            onClick={() => {
              setNodes([
                {
                  id: "node-input",
                  type: "input",
                  title: "Workflow Input",
                  position: { x: 50, y: 50 },
                  outputs: ["output"],
                },
                {
                  id: "node-nafdac",
                  type: "nafdac",
                  title: "NAFDAC Check",
                  position: { x: 50, y: 200 },
                  inputs: ["input"],
                  outputs: ["output"],
                  config: {
                    productId: "NAFDAC-REG-001",
                    checkType: "verification",
                  },
                },
                {
                  id: "node-sms",
                  type: "sms",
                  title: "AfricasTalking SMS",
                  position: { x: 50, y: 350 },
                  inputs: ["input"],
                  outputs: ["output"],
                  config: {
                    to: "+234XXXXXXXXX",
                    message: "Your product verification result: Authentic",
                    senderId: "NAFDAC",
                  },
                },
                {
                  id: "node-output",
                  type: "output",
                  title: "Workflow Output",
                  position: { x: 50, y: 500 },
                  inputs: ["input"],
                },
              ])
              setConnections([
                {
                  id: "conn-1",
                  sourceId: "node-input",
                  targetId: "node-nafdac",
                },
                {
                  id: "conn-2",
                  sourceId: "node-nafdac",
                  targetId: "node-sms",
                },
                {
                  id: "conn-3",
                  sourceId: "node-sms",
                  targetId: "node-output",
                },
              ])
            }}
          >
            <div className="mr-2">🏛️</div> eCitizen Assistant
          </Button>
        </div>
      </div>

      {/* Canvas */}
      <div
        ref={canvasRef}
        className="flex-1 bg-white border-2 border-dashed border-gray-200 rounded-lg p-4 min-h-[500px] relative overflow-auto"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        {nodes.length === 0 ? (
          <div className="flex items-center justify-center h-full text-muted-foreground">
            <div className="text-center">
              <Plus className="mx-auto h-12 w-12 text-muted-foreground/50" />
              <p className="mt-2">Drag services here to build your workflow</p>
              <p className="text-sm text-muted-foreground mt-2">Or use the chat assistant to help you build</p>
            </div>
          </div>
        ) : (
          <div className="relative">
            {/* Connections */}
            <svg className="absolute inset-0 pointer-events-none" style={{ zIndex: 1 }}>
              {connections.map((connection) => {
                const sourceNode = nodes.find((node) => node.id === connection.sourceId)
                const targetNode = nodes.find((node) => node.id === connection.targetId)

                if (!sourceNode || !targetNode) return null

                const sourceX = sourceNode.position.x + 150 // middle of node
                const sourceY = sourceNode.position.y + 50 // bottom of node
                const targetX = targetNode.position.x + 150 // middle of node
                const targetY = targetNode.position.y // top of node

                return (
                  <g key={connection.id}>
                    <path
                      d={`M${sourceX},${sourceY} C${sourceX},${sourceY + 50} ${targetX},${targetY - 50} ${targetX},${targetY}`}
                      stroke="#006992"
                      strokeWidth="2"
                      fill="none"
                      markerEnd="url(#arrowhead)"
                    />
                    {/* Delete connection button */}
                    <circle
                      cx={(sourceX + targetX) / 2}
                      cy={(sourceY + targetY) / 2}
                      r="8"
                      fill="white"
                      stroke="#006992"
                      strokeWidth="1"
                      style={{ cursor: "pointer", pointerEvents: "all" }}
                      onClick={() => handleConnectionDelete(connection.id)}
                    />
                    <text
                      x={(sourceX + targetX) / 2}
                      y={(sourceY + targetY) / 2}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fontSize="12"
                      fill="#006992"
                      style={{ pointerEvents: "none" }}
                    >
                      ×
                    </text>
                  </g>
                )
              })}
              <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="#006992" />
                </marker>
              </defs>
            </svg>

            {/* Nodes */}
            <div className="space-y-4">
              {nodes.map((node) => (
                <div
                  key={node.id}
                  className={`absolute w-[300px] cursor-grab ${selectedNode === node.id ? "ring-2 ring-primary" : ""}`}
                  style={{
                    left: `${node.position.x}px`,
                    top: `${node.position.y}px`,
                    zIndex: selectedNode === node.id ? 10 : 2,
                  }}
                  onClick={() => handleNodeClick(node.id)}
                >
                  <Card>
                    <CardHeader
                      className={`py-2 ${
                        node.type === "mpesa"
                          ? "bg-primary/10"
                          : node.type === "sms"
                            ? "bg-secondary/10"
                            : node.type === "nafdac"
                              ? "bg-accent/10"
                              : node.type === "condition"
                                ? "bg-amber-100"
                                : "bg-gray-100"
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <CardTitle className="text-sm font-medium">{node.title}</CardTitle>
                        <div className="flex gap-1">
                          <button
                            className="p-1 hover:bg-gray-200 rounded"
                            onClick={(e) => {
                              e.stopPropagation()
                              handleNodeMove(node.id, "up")
                            }}
                          >
                            <ChevronUp className="h-3 w-3" />
                          </button>
                          <button
                            className="p-1 hover:bg-gray-200 rounded"
                            onClick={(e) => {
                              e.stopPropagation()
                              handleNodeMove(node.id, "down")
                            }}
                          >
                            <ChevronDown className="h-3 w-3" />
                          </button>
                          <button
                            className="p-1 hover:bg-gray-200 rounded"
                            onClick={(e) => {
                              e.stopPropagation()
                              handleNodeDelete(node.id)
                            }}
                          >
                            <Trash2 className="h-3 w-3" />
                          </button>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4">
                      <p className="text-sm text-muted-foreground mb-3">
                        {node.type === "mpesa"
                          ? "Process payments via M-Pesa"
                          : node.type === "sms"
                            ? "Send SMS via AfricasTalking"
                            : node.type === "nafdac"
                              ? "Verify product compliance"
                              : node.type === "input"
                                ? "Start of workflow"
                                : node.type === "output"
                                  ? "End of workflow"
                                  : node.type === "transform"
                                    ? "Transform data"
                                    : node.type === "condition"
                                      ? "Branch based on condition"
                                      : "Configure node"}
                      </p>

                      {/* Connection points */}
                      <div className="flex justify-between mb-2">
                        {node.inputs && node.inputs.length > 0 && (
                          <button
                            className={`w-6 h-6 rounded-full border-2 ${
                              isConnecting && !isConnecting.isOutput && isConnecting.nodeId !== node.id
                                ? "border-green-500 bg-green-100 animate-pulse"
                                : "border-gray-400"
                            }`}
                            onClick={() => {
                              if (isConnecting && isConnecting.isOutput) {
                                handleConnectionEnd(node.id, false)
                              } else if (!isConnecting) {
                                handleConnectionStart(node.id, false)
                              }
                            }}
                          >
                            <span className="sr-only">Input</span>
                          </button>
                        )}

                        <div className="flex-1"></div>

                        {node.outputs && node.outputs.length > 0 && (
                          <button
                            className={`w-6 h-6 rounded-full border-2 ${
                              isConnecting && isConnecting.isOutput && isConnecting.nodeId !== node.id
                                ? "border-green-500 bg-green-100 animate-pulse"
                                : "border-gray-400"
                            }`}
                            onClick={() => {
                              if (isConnecting && !isConnecting.isOutput) {
                                handleConnectionEnd(node.id, true)
                              } else if (!isConnecting) {
                                handleConnectionStart(node.id, true)
                              }
                            }}
                          >
                            <span className="sr-only">Output</span>
                          </button>
                        )}
                      </div>

                      {/* Node configuration */}
                      {selectedNode === node.id && node.config && (
                        <div className="mt-3 pt-3 border-t">
                          <h4 className="text-xs font-semibold mb-2 flex items-center">
                            <Settings className="h-3 w-3 mr-1" />
                            Configuration
                          </h4>
                          <div className="space-y-2">
                            {Object.entries(node.config).map(([key, value]) => (
                              <div key={key}>
                                <Label htmlFor={`${node.id}-${key}`} className="text-xs">
                                  {key.charAt(0).toUpperCase() + key.slice(1)}
                                </Label>
                                {typeof value === "string" && value.length > 20 ? (
                                  <Textarea
                                    id={`${node.id}-${key}`}
                                    value={value}
                                    onChange={(e) => handleConfigChange(node.id, key, e.target.value)}
                                    className="h-20 text-xs"
                                  />
                                ) : (
                                  <Input
                                    id={`${node.id}-${key}`}
                                    value={value}
                                    onChange={(e) => handleConfigChange(node.id, key, e.target.value)}
                                    className="h-7 text-xs"
                                  />
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Connection in progress indicator */}
        {isConnecting && (
          <div className="fixed bottom-4 right-4 bg-green-100 text-green-800 px-4 py-2 rounded-md shadow-md">
            <p className="text-sm flex items-center">
              <LinkIcon className="h-4 w-4 mr-2" />
              Select a {isConnecting.isOutput ? "target" : "source"} node to connect
            </p>
            <button className="text-xs text-green-600 hover:text-green-800 mt-1" onClick={() => setIsConnecting(null)}>
              Cancel
            </button>
          </div>
        )}
      </div>

      {/* Chat Assistant */}
      <div
        className={`
        fixed bottom-0 right-0 w-full md:w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out
        ${isChatOpen ? "translate-y-0" : "translate-y-[calc(100%-40px)]"}
        z-20 rounded-t-lg
      `}
      >
        <div
          className="p-2 border-b flex justify-between items-center cursor-pointer"
          onClick={() => setIsChatOpen(!isChatOpen)}
        >
          <h3 className="font-barlow font-semibold text-sm flex items-center">
            <MessageSquare className="h-4 w-4 mr-2" />
            Workflow Assistant
          </h3>
          <button className="p-1 hover:bg-gray-100 rounded">
            {isChatOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronUp className="h-4 w-4" />}
          </button>
        </div>

        {isChatOpen && (
          <>
            <div className="p-3 h-80 overflow-y-auto">
              {chatMessages.map((message, index) => (
                <div key={index} className={`mb-3 ${message.role === "user" ? "text-right" : "text-left"}`}>
                  <div
                    className={`inline-block p-2 rounded-lg max-w-[80%] ${
                      message.role === "user" ? "bg-primary text-white" : "bg-gray-100"
                    }`}
                  >
                    <p className="text-sm">{message.content}</p>
                  </div>
                </div>
              ))}
              <div ref={chatEndRef} />
            </div>

            <form onSubmit={handleChatSubmit} className="p-3 border-t">
              <div className="flex gap-2">
                <Input
                  value={messageInput}
                  onChange={(e) => setMessageInput(e.target.value)}
                  placeholder="Ask for help..."
                  className="text-sm"
                />
                <Button type="submit" size="sm">
                  Send
                </Button>
              </div>
            </form>
          </>
        )}
      </div>

      {/* Actions */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4 flex justify-end gap-2 z-10">
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

