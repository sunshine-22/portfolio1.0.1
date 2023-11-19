import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import script from "next/script";
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sabarish | Portfolio',
  description: 'Sabarish portfolio application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    
      <body className={inter.className}>{children}</body>
      
    </html>
  )
}
