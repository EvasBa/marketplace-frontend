'use client'

import { ReactNode } from 'react'
import { useSession, signOut } from "next-auth/react"
import Link from 'next/link'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const { data: session } = useSession()

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-600 text-white">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">{process.env.NEXT_PUBLIC_SITE_NAME}</h1>
            <div className="space-x-4">
              <a href="/" className="hover:text-blue-200">Home</a>
              <a href="/products" className="hover:text-blue-200">Products</a>
              {session ? (
                <>
                  <span>Welcome, {session.user.email}</span>
                  <button onClick={() => signOut()} className="hover:text-blue-200">
                    Sign Out
                  </button>
                </>
              ) : (
                <a href="/auth/signin" className="hover:text-blue-200">Sign In</a>
              )}
            </div>
          </div>
        </nav>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>

      <footer className="bg-gray-100">
        <div className="container mx-auto px-4 py-6 text-center text-gray-600">
          <p>&copy; 2025 {process.env.NEXT_PUBLIC_SITE_NAME}</p>
        </div>
      </footer>
    </div>
  )
}