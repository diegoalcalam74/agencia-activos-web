import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://permitatlas.vercel.app"),
  title: {
    default: "PermitAtlas | US Permit & Filing Fee Intelligence",
    template: "%s | PermitAtlas",
  },
  description:
    "PermitAtlas provides up-to-date permit costs and filing fees by state and city across the United States. Compare building permits, LLC filing fees, court filing costs, and more.",
  keywords: [
    "permit cost by state",
    "building permit fees",
    "LLC filing fee",
    "small claims filing fee",
    "permit calculator USA",
  ],
  openGraph: {
    title: "PermitAtlas",
    description:
      "Find permit costs and filing fees by state and city across the United States.",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-neutral-900`}
      >
        <header className="border-b border-neutral-200 p-5">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <div>
              <h1 className="text-xl font-bold">PermitAtlas</h1>
              <span className="text-xs text-neutral-500">
                US Permit & Filing Fee Intelligence
              </span>
            </div>

            <nav className="space-x-6 text-sm text-neutral-600">
              <a href="/" className="hover:text-black">
                Home
              </a>
              <a href="/blog" className="hover:text-black">
                By State
              </a>
              <a href="/tools" className="hover:text-black">
                Tools
              </a>
            </nav>
          </div>
        </header>

        <main className="max-w-6xl mx-auto px-4 py-10">
          {children}
        </main>

        <footer className="border-t border-neutral-200 p-6 text-center text-sm text-neutral-500">
          © {new Date().getFullYear()} PermitAtlas. All rights reserved.
        </footer>
      </body>
    </html>
  );
}