import type { Metadata, Viewport } from "next";
import { Pixelify_Sans, Space_Grotesk, Space_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const pixelifySans = Pixelify_Sans({
  variable: "--font-pixelify-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const siteUrl = "https://aegeiseun-website-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "JP — Media Buyer & Software Developer",
  description:
    "JP is a Media Buyer and Software Developer building with no-code/low-code tools. Explore projects, experience, and get in touch.",
  openGraph: {
    title: "JP — Media Buyer & Software Developer",
    description:
      "JP is a Media Buyer and Software Developer building with no-code/low-code tools. Explore projects, experience, and get in touch.",
    url: siteUrl,
    siteName: "JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JP — Media Buyer & Software Developer",
    description:
      "JP is a Media Buyer and Software Developer building with no-code/low-code tools.",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0f",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${pixelifySans.variable} ${spaceGrotesk.variable} ${spaceMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-void text-text-hi">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
