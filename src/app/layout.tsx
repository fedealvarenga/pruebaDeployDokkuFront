import './globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--montserrat-font' 
})

export const metadata: Metadata = {
  title: 'Copal',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montserrat.variable}>
        <aside>
          <p className={montserrat.className}>hola mundo</p>
        </aside>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
