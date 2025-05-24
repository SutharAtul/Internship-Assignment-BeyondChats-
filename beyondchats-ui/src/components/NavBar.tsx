'use client';

import { Clock, Search } from 'lucide-react';

export default function NavBar() {
  return (
    <div className="w-96 min-w-96 h-full border-r border-gray-100 bg-white flex flex-col">
      <div className="p-4 pb-2">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-lg font-semibold text-gray-900">Your Inbox</h1>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Clock className="w-4 h-4" />
            <span>5 Open</span>
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
    </div>
  );
}
