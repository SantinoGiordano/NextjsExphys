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
  title: {
    default: "ATP Exphys",
    template: "%s | ATP Exphys",
  },
  description:
    "ATP Exphys is led by experienced Exercise Physiologists Jill and Heather, offering personalized wellness programs and evidence-based support to help you reach your full potential.",
  openGraph: {
    title: "ATP Exphys",
    description:
      "Led by expert Exercise Physiologists, ATP Exphys delivers personalized and practical wellness solutions backed by science.",
    url: "https://atp-exphys.com",
    siteName: "ATP Exphys",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
