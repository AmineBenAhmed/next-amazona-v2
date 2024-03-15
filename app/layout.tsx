import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Crowdfunding",
  description: "La premiere application de crowdfunding en tunisie",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col bg-white overflow-hidden">
          <Header />
            {children}
        </div>
        <Footer />  
      </body>
    </html>
  );
}
