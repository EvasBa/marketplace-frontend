import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        if (!credentials?.email) {
          return null;
        }

        try {
          const res = await fetch("http://localhost:8000/api/token/", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              username: credentials.email,
              password: credentials.password,
            }),
          })

          if (!res.ok) {
            throw new Error('Authentication failed')
          }

          const data = await res.json()
          
          if (data.access) {
            return {
              id: data.user_id,
              email: credentials.email,
              token: data.access
            }
          }
          
          return null
        } catch (error) {
          console.error("Auth error:", error)
          return null
        }
      }
    })
  ],
  pages: {
    signIn: '/auth/signin',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.token
        token.id = user.id
      }
      return token
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id as string
        session.user.accessToken = token.accessToken as string
      }
      return session
    }
  },
  session: {
    strategy: "jwt",
  }
})

export { handler as GET, handler as POST }