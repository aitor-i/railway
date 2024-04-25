import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/Header/Header";
import BackgroundDots from "@/components/ui/BackgroundDots/BackgroundDots";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Railway test - Aitor Ibarra",
  description: "This is a test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <BackgroundDots />
      </body>
    </html>
  );
}
