import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/header';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BlocHack',
  description: 'Detect Hacks, Trace Transactions in real-time',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='scroll-smooth'>
      <body className={inter.className}>
        <main>
        <Header />
        
        {children}
        
        </main>
      </body>
    </html>
  )
}
