import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "F2 Co.,Ltd. - Digital Innovation Transformation",
  description: "F2 Co.,Ltd. - We are a team of passionate people whose goal is to improve everyone's life through disruptive products. We build great products to solve your business problems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <Navbar />
        </div>
        <div className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          {children}
        </div>
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <Footer />
        </div>
      </body>
    </html>
  );
}
