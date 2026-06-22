import type { Metadata } from "next";
import { Outfit, Syne, Space_Grotesk } from "next/font/google";
import "./globals.css";
import TRPCProvider from "@/trpc/Provider";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/ui/ScrollProgress";
import Loader from "@/components/ui/Loader";
import Chatbot from "@/components/Chatbot";

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://nexiog.com'),
  title: {
    default: "NexiOG Technologies | Innovative Web Development",
    template: "%s | NexiOG Technologies"
  },
  description: "Go Digital, Build Smarter, Optimize Faster, and Grow Stronger. We provide cutting-edge web development and enterprise solutions.",
  keywords: ["Web Development", "Next.js", "Enterprise Software", "Digital Agency", "Tech Solutions", "React Development"],
  authors: [{ name: "NexiOG Technologies" }],
  creator: "NexiOG Technologies",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nexiog.com",
    title: "NexiOG Technologies",
    description: "Go Digital, Build Smarter, Optimize Faster, and Grow Stronger. Innovative web development solutions.",
    siteName: "NexiOG Technologies",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "NexiOG Technologies Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NexiOG Technologies",
    description: "Go Digital, Build Smarter, Optimize Faster, and Grow Stronger.",
    images: ["/og-image.jpg"],
    creator: "@NexiOG",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${syne.variable} ${spaceGrotesk.variable} dark antialiased`}
      suppressHydrationWarning
      style={{ colorScheme: "dark" }}
    >
      <body className="min-h-screen flex flex-col bg-background text-foreground font-sans relative">
        <TRPCProvider>
          <ScrollProgress />
          <Loader />
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
          <Chatbot />
        </TRPCProvider>
      </body>
    </html>
  );
}
