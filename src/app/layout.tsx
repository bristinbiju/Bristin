import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Bristin Biju Portfolio',
    description: undefined, // Explicitly undefined to remove if inherited
    openGraph: {
        title: 'Bristin Biju Portfolio',
        description: '', // Empty or undefined
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Bristin Biju Portfolio',
        description: '',
    },
    icons: {
        icon: '/icon',
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className="dark scroll-smooth">
            <body className={inter.className}>
                {children}
                <Analytics />
            </body>
        </html>
    )
}
