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
  metadataBase: new URL("https://mohamed-riham.github.io/new-portfolio"),
  title: "M.A. Mohamed Riham | AI Developer & Data Science Undergraduate | Addalaichenai, Sri Lanka",
  description: "Professional portfolio of M.A. Mohamed Riham — Software Engineer and Data Science Undergraduate from Addalaichenai, Sri Lanka. Specializing in Edge AI, YOLOv8, privacy-first offline systems, and SOLID-pattern software architectures.",
  keywords: ["Mohamed Riham", "AI Developer", "Data Science", "Edge AI", "YOLOv8", "Sri Lanka", "Addalaichenai", "Machine Learning", "Software Engineer"],
  authors: [{ name: "M.A. Mohamed Riham" }],
  openGraph: {
    title: "M.A. Mohamed Riham | AI Developer & Data Science Undergraduate",
    description: "Edge AI hardware, convolutional ML models, and SOLID-pattern software from Addalaichenai, Sri Lanka.",
    url: "https://mohamed-riham.github.io/new-portfolio",
    siteName: "Mohamed Riham Portfolio",
    images: [
      {
        url: "https://github.com/mohamed-riham.png",
        width: 460,
        height: 460,
        alt: "M.A. Mohamed Riham",
      },
    ],
    locale: "en_US",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "M.A. Mohamed Riham | AI Developer",
    description: "Dual-disciplinary Software Engineer & Data Science Undergraduate specializing in offline Edge AI devices.",
    images: ["https://github.com/mohamed-riham.png"],
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
