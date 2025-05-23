'use client';

import { useChat } from '../context/ChatContext';
import { Clock, Search } from 'lucide-react';

export default function Sidebar() {
  const { chats, selectedChatId, selectChat } = useChat();

  return (
    <div className="w-96 min-w-96 h-full bg-white border-r flex flex-col overflow-y-auto">
      {/* Top Inbox Section */}
      <div className="p-4 pb-2">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-lg font-semibold text-gray-900">Your Inbox</h1>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Clock className="w-4 h-4" />
            <span>{chats.length} Open</span>
          </div>
        </div>

        <div className="flex items-center gap-2 mb-4 px-2 py-1.5 bg-gray-100 rounded-lg">
          <Search className="w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search messages..."
            className="w-full bg-transparent text-sm placeholder-gray-400 focus:outline-none"
          />
        </div>

        <div className="flex items-center justify-between text-xs font-medium text-gray-500 mb-2">
          <span>Waiting longest</span>
          <span>Sorted by recent</span>
        </div>
      </div>

      {/* Chat List */}
      <div className="flex-1 overflow-y-auto text-gray-800">
        {chats.map((chat) => (
          <div
            key={chat.id}
            onClick={() => selectChat(chat.id)}
            className={`p-4 cursor-pointer ${
              selectedChatId === chat.id ? 'bg-blue-100' : ''
            }`}
          >
            <p className="font-semibold">{chat.participant}</p>
            <p className="text-sm text-gray-500 line-clamp-1">
              {chat.messages[chat.messages.length - 1]?.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
