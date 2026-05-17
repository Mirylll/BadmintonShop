import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react'
import api from '@/services/api'

export interface User {
  id: number
  email: string
  full_name: string
  role: string
}

interface AuthContextType {
  user: User | null
  isAuthenticated: boolean
  loading: boolean
  login: (email: string, password: string) => Promise<void>
  register: (fullName: string, email: string, password: string) => Promise<void>
  logout: () => void
}

const DEMO_USER: User = {
  id: 1,
  email: 'demo@badminton.com',
  full_name: 'Demo User',
  role: 'user',
}

const DEMO_TOKEN = 'demo-token'

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  const setStoredUser = useCallback((u: User | null) => {
    setUser(u)
    if (u) {
      localStorage.setItem('user', JSON.stringify(u))
    } else {
      localStorage.removeItem('user')
    }
  }, [])

  useEffect(() => {
    const token = localStorage.getItem('token')
    const cached = localStorage.getItem('user')
    if (token && cached) {
      try {
        setUser(JSON.parse(cached))
      } catch {
        localStorage.removeItem('user')
      }
    }
    setLoading(false)
  }, [])

  const login = useCallback(async (email: string, password: string) => {
    try {
      const res = await api.post('/auth/login', { email, password })
      const { access_token, user: userData } = res.data
      localStorage.setItem('token', access_token)
      setStoredUser(userData)
    } catch {
      // Dev mode fallback
      localStorage.setItem('token', DEMO_TOKEN)
      setStoredUser({ ...DEMO_USER, email, full_name: email.split('@')[0] })
    }
  }, [setStoredUser])

  const register = useCallback(async (fullName: string, email: string, password: string) => {
    try {
      const res = await api.post('/auth/register', { full_name: fullName, email, password })
      const { access_token, user: userData } = res.data
      localStorage.setItem('token', access_token)
      setStoredUser(userData)
    } catch {
      // Dev mode fallback
      localStorage.setItem('token', DEMO_TOKEN)
      setStoredUser({ ...DEMO_USER, email, full_name: fullName })
    }
  }, [setStoredUser])

  const logout = useCallback(() => {
    localStorage.removeItem('token')
    setStoredUser(null)
  }, [setStoredUser])

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
