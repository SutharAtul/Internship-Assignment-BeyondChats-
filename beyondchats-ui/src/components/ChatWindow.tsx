'use client';

import { useChat } from '../context/ChatContext';
import { useState, useEffect, useRef } from 'react';

export default function ChatWindow() {
  const { chats, selectedChatId, sendMessage } = useChat();
  const selectedChat = chats.find(chat => chat.id === selectedChatId);
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim()) {
      sendMessage(newMessage);
      setNewMessage('');
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [selectedChat]);

  return (
    <div className="flex flex-col h-full w-full px-4 py-6 bg-white">
      <h2 className="text-lg font-semibold mb-2 text-gray-700">{selectedChat?.participant}</h2>
      <div className="flex-1 overflow-y-auto space-y-2">
        {selectedChat?.messages.map(msg => (
          <div
            key={msg.id}
            className={`p-3 rounded max-w-[70%] text-sm text-gray-600 ${
              msg.sender === 'user' ? 'ml-auto bg-purple-100' : 'mr-auto bg-gray-200'
            }`}
          >
            {msg.text}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <form onSubmit={handleSend} className="mt-4 flex gap-2 border-t pt-4">
        <input
          type="text"
          value={newMessage}
          onChange={e => setNewMessage(e.target.value)}
          placeholder="Type a message"
          className="flex-1 border rounded px-2 py-1 text-sm text-gray-600"
        />
        <button type="submit" className="bg-purple-600 text-white px-4 rounded">
          Send
        </button>
      </form>
    </div>
  );
}
