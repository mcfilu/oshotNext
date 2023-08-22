import './globals.css'
import { Inter } from 'next/font/google'
import GoogleAnalytics from './components/GoogleAnalytics';
import GoogleTagManager from '@magicul/next-google-tag-manager';
import Script from 'next/script';


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
  verification: {
    google: 'Ivp2xNJfql--maVFiajqYG7B6tfV-Su9h0lKu8saXnc',
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      
      <body className={inter.className}>
        <GoogleAnalytics/>
        <GoogleTagManager id="GTM-KFZWGS2" />
        {children}
        <Script strategy="afterInteractive" data-bot-id="a243d8ad-44a1-4441-aecd-b9b2a08ff886" src="https://launcher.enquirybot.com/index.js"></Script>
        {/* <script type="text/javascript" src="" data-bot-id="a243d8ad-44a1-4441-aecd-b9b2a08ff886"></script> */}
        </body>
    </html>
  )
}
