"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState } from "react"

interface User {
  id: string
  fullName: string
  email: string
  country: string
  isLoggedIn: boolean
}

interface AuthContextType {
  user: User | null
  isLoading: boolean
  login: (email: string, password: string) => Promise<void>
  signup: (userData: Omit<User, "id" | "isLoggedIn">) => Promise<void>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if user is logged in from localStorage
    const storedUser = localStorage.getItem("afreasy_user")
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser)
        if (parsedUser.isLoggedIn) {
          setUser(parsedUser)
        }
      } catch (error) {
        console.error("Error parsing user from localStorage:", error)
      }
    }
    setIsLoading(false)
  }, [])

  const login = async (email: string, password: string) => {
    setIsLoading(true)
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // For demo purposes, we'll just create a user if none exists
      const userData: User = {
        id: "user_" + Date.now(),
        fullName: "Demo User",
        email,
        country: "NG",
        isLoggedIn: true,
      }

      localStorage.setItem("afreasy_user", JSON.stringify(userData))
      setUser(userData)
    } finally {
      setIsLoading(false)
    }
  }

  const signup = async (userData: Omit<User, "id" | "isLoggedIn">) => {
    setIsLoading(true)
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      const newUser: User = {
        ...userData,
        id: "user_" + Date.now(),
        isLoggedIn: true,
      }

      localStorage.setItem("afreasy_user", JSON.stringify(newUser))
      setUser(newUser)
    } finally {
      setIsLoading(false)
    }
  }

  const logout = () => {
    // Remove user from localStorage
    const storedUser = localStorage.getItem("afreasy_user")
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser)
        parsedUser.isLoggedIn = false
        localStorage.setItem("afreasy_user", JSON.stringify(parsedUser))
      } catch (error) {
        console.error("Error updating user in localStorage:", error)
      }
    }

    setUser(null)
  }

  return <AuthContext.Provider value={{ user, isLoading, login, signup, logout }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

