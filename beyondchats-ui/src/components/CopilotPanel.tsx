'use client';

import { useChat } from '../context/ChatContext';
import { useState, useEffect, useRef } from 'react';
import { Send, Sparkles } from 'lucide-react';

export default function CopilotPanel() {
  const { chats, selectedChatId } = useChat();
  const chatHistory = chats.find(c => c.id === selectedChatId)?.messages || [];
  const [input, setInput] = useState('');
  const [aiMessages, setAiMessages] = useState<{ text: string; from: string }[]>([]);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const question = input.trim();
    setAiMessages(prev => [...prev, { text: question, from: 'agent' }]);

    setTimeout(() => {
      const lastUserMessage = [...chatHistory].reverse().find(m => m.sender === 'user')?.text || '';

      const aiReply = `Based on the last message: "${lastUserMessage}", here’s a helpful response.`;
      setAiMessages(prev => [...prev, { text: aiReply, from: 'ai' }]);
    }, 800);

    setInput('');
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [aiMessages]);

  return (
    <aside className="hidden xl:flex w-[320px] h-full bg-gray-50 border-l px-4 py-6 flex-col">
      <div className="flex items-center gap-2 mb-4">
        <Sparkles className="text-purple-600" />
        <h2 className="text-lg font-semibold text-purple-700">AI Copilot</h2>
      </div>

      <div className="flex-1 overflow-y-auto space-y-3 text-sm text-gray-600">
        {aiMessages.map((msg, idx) => (
          <div
            key={idx}
            className={`p-3 rounded ${
              msg.from === 'agent'
                ? 'ml-auto bg-purple-100 text-right'
                : 'mr-auto bg-white border'
            }`}
          >
            {msg.text}
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>

      <form onSubmit={handleSend} className="mt-4 flex gap-2">
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Ask based on conversation..."
          className="flex-1 border rounded px-3 py-2 text-sm text-gray-600"
        />
        <button type="submit" className="p-2 bg-purple-600 text-white rounded">
          <Send size={16} />
        </button>
      </form>
    </aside>
  );
}
