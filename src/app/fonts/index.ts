import { Inter, Roboto, Geist, Geist_Mono } from 'next/font/google'

export const inter = Inter({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700', '800'],
})

export const roboto = Roboto({
    weight: ['400', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
})

export const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
})

export const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
})
