import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Providers } from './providers'

const geist = Geist({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Construction Marketplace",
  description: "Find quality construction materials",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={geist.className}>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}