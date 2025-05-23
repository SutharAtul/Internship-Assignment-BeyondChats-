import "../styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Sidebar from "../components/Sidebar";
import ChatWindow from "../components/ChatWindow";


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
        <div className="flex flex-1">
          <ChatWindow />
          <main className="hidden">{children}</main>
        </div>
      </body>
    </html>
  );
}
