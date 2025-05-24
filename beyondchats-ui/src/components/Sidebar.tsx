'use client';

import { useState } from 'react';
import { Inbox, Search, Settings } from 'lucide-react';

const dummyInboxes = [
  { id: 1, name: 'Customer Queries' },
  { id: 2, name: 'Bug Reports' },
  { id: 3, name: 'Feature Requests' },
];

export default function Sidebar() {
  const [active, setActive] = useState(1);

  return (
    <div className="w-[280px] min-w-[280px] h-full border-r bg-white p-4 flex flex-col">
      <h1 className="text-xl font-bold text-purple-700 mb-6">BeyondChats</h1>

      <div className="flex items-center gap-2 mb-4">
        <Search className="w-4 h-4 text-gray-500" />
        <input
          type="text"
          placeholder="Search inboxes..."
          className="w-full p-2 text-sm border rounded"
        />
      </div>

      <nav className="flex flex-col gap-2 text-sm">
        {dummyInboxes.map((inbox) => (
          <button
            key={inbox.id}
            onClick={() => setActive(inbox.id)}
            className={`text-left p-2 rounded text-gray-500 ${
              active === inbox.id
                ? 'bg-purple-100 text-purple-700 font-medium'
                : 'hover:bg-gray-100'
            }`}
          >
            <Inbox className="inline mr-2 w-4 h-4" />
            {inbox.name}
          </button>
        ))}
      </nav>

      <div className="mt-auto border-t pt-4 flex items-center gap-2 text-sm text-gray-500">
        <Settings className="w-4 h-4" />
        Settings
      </div>
    </div>
  );
}
