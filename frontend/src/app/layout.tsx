import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Asma web developer",
  icons: {
    icon: "/logoAT.svg",
    shortcut: "/logoAT.svg",
    apple: "/logoAT.svg",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Asma web developer",
    description: "Portfolio of Asma, a web developer",
    type: "website",
    locale: "fr-FR",
    url: "https://asma-web-developer.vercel.app/",
    siteName: "Asma web developer",
    images: [
      {
        url: "/logoAT.svg",
        width: 800,
        height: 600,
      },
    ],
  },
  keywords: [
    "web developer",
    "frontend developer",
    "backend developer",
    "fullstack developer",
    "web design",
    "web developer portfolio",
    "developpeur web portfolio",
    "portfolio",],
  description: "Portfolio of Asma, a web developer ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
