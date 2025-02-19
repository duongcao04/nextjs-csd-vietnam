import '@/app/globals.css'

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className="antialiased scroll-smooth"
                suppressHydrationWarning
            >
                {children}
            </body>
        </html>
    )
}
