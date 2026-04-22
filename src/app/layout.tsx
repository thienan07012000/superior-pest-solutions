import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import MobileQuoteBar from "@/components/MobileQuoteBar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://superiorpestsolutionsnwa.com'),
  title: {
    template: '%s | Superior Pest Solutions',
    default: 'Superior Pest Solutions | Pest Control Fayetteville AR',
  },
  description: "Protect your home and business with Superior Pest Solutions. Discover peace of mind with our professional, highly effective pest control services.",
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: 'https://superiorpestsolutionsnwa.com',
    siteName: 'Superior Pest Solutions',
    title: 'Superior Pest Solutions | Pest Control Fayetteville AR',
    description: 'Protect your home and business with Superior Pest Solutions. Discover peace of mind with our professional, highly effective pest control services.',
    locale: 'en_US',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Superior Pest Solutions - Professional Pest Control in Northwest Arkansas',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Superior Pest Solutions | Pest Control Fayetteville AR',
    description: 'Protect your home and business with Superior Pest Solutions. Discover peace of mind with our professional, highly effective pest control services.',
    images: [
      {
        url: '/og-image.png',
        alt: 'Superior Pest Solutions - Professional Pest Control in Northwest Arkansas',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} antialiased scroll-smooth`}
    >
      <body className={`${inter.className} bg-background text-foreground min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <MobileQuoteBar />
      </body>
    </html>
  );
}
