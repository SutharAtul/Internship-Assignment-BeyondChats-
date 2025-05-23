'use client';

import { useEffect, useRef } from 'react';

const dummyMessages = [
  { id: 1, sender: 'user', text: 'Hello, I need help with my order.' },
  { id: 2, sender: 'agent', text: 'Sure! Could you please provide your order ID?' },
  { id: 3, sender: 'user', text: 'Yes, it is #12345.' },
  { id: 4, sender: 'agent', text: 'Thank you! Let me check that for you.' },
];

export default function ChatWindow() {
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <div className="flex flex-col h-full w-full bg-white border-r px-4 py-6">
      
      {/* Header */}
      <header className="pb-4 border-b mb-4">
        <h2 className="text-lg font-semibold">Customer Queries</h2>
        <p className="text-sm text-gray-500">Chat with John Doe</p>
      </header>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto space-y-4 pr-2">
        {dummyMessages.map((msg) => (
          <div
            key={msg.id}
            className={`max-w-[75%] p-3 rounded-lg text-sm ${
              msg.sender === 'user'
                ? 'ml-auto bg-purple-100 text-right'
                : 'mr-auto bg-gray-100'
            }`}
          >
            {msg.text}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <form className="mt-4 flex items-center gap-2 border-t pt-4">
        <input
          type="text"
          placeholder="Type a message..."
          className="flex-1 p-2 text-sm border rounded"
        />
        <button
          type="submit"
          className="bg-purple-600 hover:bg-purple-700 text-white text-sm px-4 py-2 rounded"
        >
          Send
        </button>
      </form>
    </div>
  );
}
