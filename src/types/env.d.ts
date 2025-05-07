import NextAuth from "next-auth";

declare namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_API_URL: string;
      NEXT_PUBLIC_MEDIA_URL: string;
      NEXT_PUBLIC_SITE_NAME: string;
    }
  }


  import NextAuth from "next-auth"

declare module "next-auth" {
  interface Session {
    user: {
      id: string
      email: string
      accessToken: string
    }
  }

  interface User {
    id: string
    email: string
    token: string
  }
}