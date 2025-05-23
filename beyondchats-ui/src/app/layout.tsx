import "../styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Sidebar from "../components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BeyondChats Admin Panel",
  description: "Intercom UI Clone for Internship",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex h-screen w-screen`}>
        <Sidebar />
        <main className="flex-1 bg-gray-50">{children}</main>
      </body>
    </html>
  );
}
