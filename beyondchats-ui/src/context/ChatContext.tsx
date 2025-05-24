'use client';

import { createContext, useState, useContext } from 'react';

type Message = {
  id: number;
  sender: 'user' | 'agent';
  text: string;
};

type Chat = {
  id: number;
  participant: string;
  messages: Message[];
};

type ChatContextType = {
  chats: Chat[];
  selectedChatId: number;
  selectChat: (id: number) => void;
  sendMessage: (text: string) => void;
};

const chatsData: Chat[] = [
  {
    id: 1,
    participant: 'John Doe',
    messages: [
      { id: 1, sender: 'user', text: 'Hello, I need help with my order.' },
      { id: 2, sender: 'agent', text: 'Sure! Could you please provide your order ID?' },
      { id: 3, sender: 'user', text: 'Yes, it is #12345.' },
      { id: 4, sender: 'agent', text: 'Thank you! Let me check that for you.' },
    ],
  },
  {
    id: 2,
    participant: 'Jane Smith',
    messages: [
      { id: 1, sender: 'user', text: 'Hi, when will my package arrive?' },
      { id: 2, sender: 'agent', text: 'It should arrive by tomorrow 5 PM.' },
      { id: 3, sender: 'user', text: 'Great, thanks for the update!' },
    ],
  },
];

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export function ChatProvider({ children }: { children: React.ReactNode }) {
  const [chats, setChats] = useState<Chat[]>(chatsData);
  const [selectedChatId, setSelectedChatId] = useState<number>(1);

  const selectChat = (id: number) => setSelectedChatId(id);

  const sendMessage = (text: string) => {
    setChats(prev =>
      prev.map(chat =>
        chat.id === selectedChatId
          ? {
              ...chat,
              messages: [
                ...chat.messages,
                { id: Date.now(), sender: 'agent', text },
              ],
            }
          : chat
      )
    );
  };

  return (
    <ChatContext.Provider value={{ chats, selectedChatId, selectChat, sendMessage }}>
      {children}
    </ChatContext.Provider>
  );
}

export function useChat() {
  const context = useContext(ChatContext);
  if (!context) throw new Error('useChat must be used within a ChatProvider');
  return context;
}
