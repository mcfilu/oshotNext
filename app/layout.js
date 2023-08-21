import './globals.css'
import { Inter } from 'next/font/google'
import Head from 'next/head'

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
      <Head>
      {/* <!-- Google tag (gtag.js) --> */}
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-NVHFPSMTMM"></script>
    

    
      </Head>
      <body className={inter.className}>
        

        {children}
        <script type="text/javascript" src="https://launcher.enquirybot.com/index.js" data-bot-id="a243d8ad-44a1-4441-aecd-b9b2a08ff886"></script>
        </body>
    </html>
  )
}
