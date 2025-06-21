# 🎨 LNS Frontend

This is the **frontend interface** for Lisk Name Service (LNS). It allows users to connect wallets, generate API keys, and interact with the LNS smart contract through a responsive and animated UI.

---

## 🧩 Project Overview

- **Framework**: React (with Vite + TypeScript)
- **Wallet Integration**: wagmi + viem (EVM-compatible wallets)
- **Styling**: Tailwind CSS + Custom Animations
- **API Integration**: Communicates with the LNS Backend
- **State & Queries**: React Context API
- **Deployment Target**: Vercel 

---

## 📂 Structure

```
frontend/src
├── components/ # UI components (e.g. Header, TypingText, SDK)
├── context/ # React Context for LNS contract
├── lib/ # Utility helpers (wagmi config, utils)
├── pages/ # Page-level components (Landing, Developer)
├── public/ # Static assets (images, favicon, etc.)
├── App.tsx # Root application component
├── main.tsx # Vite entry point
├── index.html # Base HTML template
├── .env # Local env config
├── tailwind.config.js
└── vite.config.ts
```

---

## 🔐 Environment Variables

Create a `.env` file in the root:

```env
VITE_WALLET_CONNECT_ID=
VITE_CONTRACT_ADDRESS=
VITE_LISK_JSONRPC=
VITE_BACKEND_URL=https://lns-backend.onrender.com/api/v1/generate-api-key
```

⚙️ Setup Instructions
1. Clone the repo

```
git clone https://github.com/Lisk-Name-Service/frontend
cd frontend
```

2. Install dependencies

`pnpm install` or  `npm install`

3. Run development server

`pnpm run dev` or `npm run dev`
