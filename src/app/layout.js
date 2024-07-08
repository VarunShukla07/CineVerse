import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import './globals.css'
import Providers from './Providers'
import Navbar from '@/components/Navbar'
import SearchBox from '@/components/SearchBox'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CineVerse,
  description: 'User Interface for Movie Listing',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {/* Header */}
          <Header />
          {/* Navbar */}
          <Navbar/>
          {/* SearchBox */}
          <SearchBox/>
          {children}
        </Providers>


      </body>
    </html>
  )
}
