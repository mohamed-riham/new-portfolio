import type { Metadata, Viewport } from "next";
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
  metadataBase: new URL("https://riham.dev"),
  title: "Mohamed Riham | AI & Data Science Portfolio",
  description: "BSc (Hons) Data Science student and AI/ML developer building practical, user-focused intelligent solutions.",
  openGraph: {
    title: "Mohamed Riham | AI & Data Science Portfolio",
    description: "BSc (Hons) Data Science student and AI/ML developer building practical, user-focused intelligent solutions.",
    url: "https://riham.dev",
    siteName: "Mohamed Riham Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mohamed Riham Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohamed Riham | AI & Data Science Portfolio",
    description: "BSc (Hons) Data Science student and AI/ML developer building practical, user-focused intelligent solutions.",
    images: ["/og-image.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#030305",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body>
        {children}
      </body>
    </html>
  );
}
