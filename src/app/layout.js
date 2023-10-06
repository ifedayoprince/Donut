import Script from 'next/script'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Donut',
  description: "The 'ultimate' social polling platform.",
  
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <Script src='/gsap/gsap.min.js'></Script>
    </html>
  )
}
