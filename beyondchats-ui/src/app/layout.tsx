import "../styles/globals.css";
import type { Metadata } from "next";
 import { ChatProvider } from '../context/ChatContext';

export const metadata: Metadata = {
  title: "BeyondChats Admin Panel",
  description: "Intercom UI Clone for Internship",
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="h-screen w-screen overflow-hidden">
        <ChatProvider>{children}</ChatProvider>
      </body>
    </html>
  );
}