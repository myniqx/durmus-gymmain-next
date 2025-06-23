import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import "@fortawesome/fontawesome-free/css/all.min.css"
import { LanguageProvider } from "@/components/providers/LanguageProvider"
import NavBar from "@/components/Navbar"
import Footer from "@/components/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "DurmusGym - Personal Training & Fitness",
  description: "Professional personal training, pilates, yoga and diet coaching in Bergen op Zoom",
  icons: {
    icon: "/logo.png",
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>
          <NavBar />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  )
}
