import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: 'O-Shot Vagina PRP Rejuvanation',
    template: '%s',
  },
  description: {
    default: 'O-Shot Vagina PRP Rejuvanation in London by Dr Sherif Wakil',
    template: '%s',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
