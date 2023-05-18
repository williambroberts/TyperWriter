import './globals.css'
import { Inter } from 'next/font/google'
import { Noto_Color_Emoji } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  title: 'TypeWriter | W R',
  description: 'A React custom Type Writer component, to include in you next website!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
