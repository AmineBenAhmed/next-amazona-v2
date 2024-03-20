import Cover from "@/components/cover/Cover";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Crowdfunding",
  description: "La premiere application de crowdfunding en tunisie"
};

export default function FrontLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="flex-grow container mx-auto px-4">
    {children}
  </div>
}
