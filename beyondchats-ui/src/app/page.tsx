'use client';

import Sidebar from "../components/Sidebar";
import ChatWindow from "../components/ChatWindow";
import CopilotPanel from "../components/CopilotPanel";


export default function HomePage() {
  return (
    <div className="flex h-full w-full">
      <Sidebar />
      <div className="flex flex-1">
        <ChatWindow />
        <CopilotPanel />
      </div>
    </div>
  );
}
