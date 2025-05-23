'use client';

import { Sparkles, Lightbulb } from 'lucide-react';

const suggestions = [
  'Summarize this conversation',
  'Generate a response',
  'Translate to Spanish',
  'Classify the issue type',
];

export default function CopilotPanel() {
  return (
    <aside className="w-[300px] min-w-[280px] h-full bg-gray-50 border-l px-4 py-6 flex flex-col">
      {/* Header */}
      <div className="flex items-center gap-2 mb-6">
        <Sparkles className="text-purple-600" />
        <h2 className="text-lg font-semibold text-purple-700">AI Copilot</h2>
      </div>

      {/* Suggestions */}
      <div className="space-y-3">
        {suggestions.map((item, index) => (
          <button
            key={index}
            className="w-full text-left text-sm p-3 rounded border bg-white hover:bg-purple-50 hover:border-purple-300 transition"
          >
            <Lightbulb className="inline-block w-4 h-4 text-yellow-500 mr-2" />
            {item}
          </button>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-auto pt-6 border-t text-xs text-gray-400">
        Powered by GPT | Suggestions are AI-generated
      </div>
    </aside>
  );
}
