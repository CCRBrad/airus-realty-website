import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL('https://airusrealty.com'),
  title: {
    default: "Airus Realty — Agent-First Real Estate Brokerage",
    template: "%s | Airus Realty",
  },
  description:
    "Airus Realty is a modern real estate brokerage built for agents who want more — more support, more tools, and more growth. California DRE License #02329021.",
  keywords: [
    "real estate brokerage",
    "real estate agents",
    "agent recruiting",
    "join a brokerage",
    "real estate training",
    "Airus Realty",
    "California real estate",
    "DRE",
    "sell my home",
    "find homes",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Airus Realty",
    title: "Airus Realty — Agent-First Real Estate Brokerage",
    description: "A modern brokerage built for agents who want more — more support, more tools, and more growth.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Airus Realty — Agent-First Real Estate Brokerage",
    description: "A modern brokerage built for agents who want more — more support, more tools, and more growth.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://airusrealty.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main
          id="main-content"
          style={{ paddingTop: 'var(--header-height)', minHeight: '100vh' }}
        >
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
