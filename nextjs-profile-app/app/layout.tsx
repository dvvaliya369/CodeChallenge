import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'User Profile',
  description: 'User profile page created with Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
