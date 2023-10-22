"use client"

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import './globals.css'
import { Inter } from 'next/font/google'
import Nav from '../components/Nav/Nav'
import Sidebar from '@/components/Sidebar/Sidebar'

const inter = Inter({ subsets: ['latin'],preload: true })


export default function RootLayout({ children }) {
  
  return (
    <html lang="en" className={inter.className}>
      <body>
        <title>Chanokchon</title>
        <Sidebar />
        {children}
        <ProgressBar
          height="4px"
          color="white"
          options={{ showSpinner: false }}
          shallowRouting
        />
        </body>
    </html>
  )
}
