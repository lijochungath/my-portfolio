import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Adjust if you use a different font
import "./globals.css";

// 1. Import your Navbar here (Adjust the path if your component is in a different folder)
import Navbar from "../components/layout/Navbar"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lijo Chungath Jose | Senior Data Engineer",
  description: "Portfolio of Lijo Chungath Jose, specializing in Azure, Microsoft Fabric, and Data Architecture.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-slate-950 text-slate-300 antialiased`}>
        
        {/* 2. The Navbar goes here so it wraps every single page! */}
        <Navbar />

        {/* 3. The pt-16 (padding-top) ensures the fixed navbar doesn't cover your page content */}
        <main className="pt-16">
          {children}
        </main>

      </body>
    </html>
  );
}