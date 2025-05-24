'use client';

import { useState, useRef, useEffect } from 'react';
import { Sparkles, Send } from 'lucide-react';

const dummyMessages = [
  { id: 1, sender: 'user', text: 'Hello, I need help with my order.' },
  { id: 2, sender: 'agent', text: 'Sure! Could you please provide your order ID?' },
  { id: 3, sender: 'user', text: 'Yes, it is #12345.' },
  { id: 4, sender: 'agent', text: 'Thank you! Let me check that for you.' },
];

export default function CopilotPanel() {
  const [chat, setChat] = useState<{ from: string; text: string }[]>([]);
  const [input, setInput] = useState('');
  const chatEndRef = useRef<HTMLDivElement | null>(null);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newQuestion = { from: 'agent', text: input.trim() };
    setChat((prev) => [...prev, newQuestion]);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        from: 'ai',
        text:
          "Here's a possible reply based on conversation history:\n\n" +
          `"Hi! Thanks for the order ID (#12345). We're checking the status for you now!"`,
      };
      setChat((prev) => [...prev, aiResponse]);
    }, 600);

    setInput('');
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chat]);

  return (
    <aside className="hidden xl:flex w-[320px] h-full bg-gray-50 border-l px-4 py-6 flex-col">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <Sparkles className="text-purple-600" />
        <h2 className="text-lg font-semibold text-purple-700">AI Copilot Chat</h2>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto space-y-3 pr-1 text-sm text-gray-700">
        {chat.map((msg, index) => (
          <div
            key={index}
            className={`p-3 rounded-md max-w-[90%] whitespace-pre-wrap ${
              msg.from === 'agent'
                ? 'bg-purple-100 ml-auto text-right'
                : 'bg-white text-left border'
            }`}
          >
            {msg.text}
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>

      {/* Input */}
      <form onSubmit={handleSend} className="mt-4 flex items-center gap-2 text-gray-700">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask something based on chat history..."
          className="flex-1 text-sm px-3 py-2 rounded border"
        />
        <button
          type="submit"
          className="p-2 bg-purple-600 hover:bg-purple-700 text-white rounded"
        >
          <Send size={16} />
        </button>
      </form>
    </aside>
  );
}
