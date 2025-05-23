'use client';

import Sidebar from "../components/Sidebar";
import ChatWindow from "../components/ChatWindow";

export default function HomePage() {
  return (
    <div className="flex h-screen w-screen">
      <Sidebar />
      <div className="flex flex-1">
        <ChatWindow />
      </div>
    </div>
  );
}
