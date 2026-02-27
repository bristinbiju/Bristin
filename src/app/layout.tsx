import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
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
                <Script id="tryme-widget" strategy="afterInteractive">
                    {`
                        (function() {
                            let script = document.createElement("script");
                            script.async = true;
                            script.src = "https://www.tryme.co/widgets?token=6f007d19-414d-4bf4-8321-91780f49d590.js?v=" + new Date().getTime();
                            document.body.appendChild(script);
                        })();
                    `}
                </Script>
            </body>
        </html>
    )
}
