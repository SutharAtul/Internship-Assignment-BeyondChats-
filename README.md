# BeyondChats Admin Panel

This project is a frontend implementation of an AI-enhanced messaging dashboard inspired by Intercom. Built using **React (Next.js)** and **Tailwind CSS**, it provides an admin view of user conversations with AI-powered assistance on the side.

---

## 📁 Directory Structure

```bash
beyondchats-ui/
├── public/
├── src/
│   ├── app/
│   │   ├── favicon.ico
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── assets/                     # (optional future use)
│   ├── components/
│   │   ├── ChatWindow.tsx          # Displays selected chat messages
│   │   ├── CopilotPanel.tsx        # Right panel with AI Copilot suggestions
│   │   ├── NavBar.tsx              # "Your Inbox" top section UI
│   │   └── Sidebar.tsx             # Left panel with chat list and search
│   ├── context/
│   │   └── ChatContext.tsx         # Chat state and provider
│   ├── styles/
│   │   └── globals.css             # Tailwind CSS config
├── .gitignore
├── README.md                       # 📄 You’re here
├── tailwind.config.ts
├── tsconfig.json
├── postcss.config.mjs
├── eslint.config.mjs
├── next.config.ts
├── package.json
└── package-lock.json

```

#!/bin/bash

# README.sh – Script to setup README.md and organize screenshot for BeyondChats Assignment

echo "📦 Setting up README.md for BeyondChats Admin Panel..."

# Create README.md
cat <<EOF > README.md
# BeyondChats Admin Panel

This project is a frontend implementation of an AI-enhanced messaging dashboard inspired by Intercom. Built using **React (Next.js)** and **Tailwind CSS**, it provides an admin view of user conversations with AI-powered assistance on the side.

---

## 🛠️ Tech Stack

- **React / Next.js** – App framework
- **Tailwind CSS** – Utility-first styling
- **Lucide-react** – Icons
- **Context API** – Chat state management

---

## 🚀 Getting Started

### 1. Install Dependencies

\`\`\`bash
npm install
\`\`\`

### 2. Start Development Server

\`\`\`bash
npm run dev
\`\`\`

Then visit [http://localhost:3000](http://localhost:3000).

---

## ✨ Features

- 📥 Chat list with active selection state
- 🔍 Inbox search and sorting
- 💬 Real-time chat view and message history
- 🤖 AI Copilot with message-based suggestions
- 💡 Modular structure for easy scalability

---

## 📸 Screenshot

![Screenshot](./public/screenshot.png)

> Rename your screenshot file to \`screenshot.png\` and move it into the \`public/\` folder to display here.

---

## 📌 Notes

- Backend and AI suggestions are mocked.
- Fully compatible with future backend or real-time chat integrations (e.g.,

