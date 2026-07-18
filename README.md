# 🤖 AI Code Reviewer

**By Abhishek Devkatte** — Computer Science Engineer

An AI-powered code review application that analyzes your code for runtime errors, performance issues, security vulnerabilities, and anti-patterns — powered by the Groq API.


🔗 **Live App:** 🌐 https://ai-code-reviewer-228e.onrender.com


Paste your code, get an instant, structured review — no setup, no waiting for a human reviewer.

## Features

- 🚀 **AI-Powered Code Analysis** — Leverages the Groq API for comprehensive, context-aware code reviews
- 💻 **Multi-Language Support** — Works with Python, JavaScript, Java, C++, and more
- ✨ **Real-Time Editing** — Monaco Editor (the engine behind VS Code) provides syntax highlighting and intelligent code completion
- 📝 **Markdown Feedback** — Clean, formatted review output with syntax-highlighted code snippets
- ⚡ **Fast Performance** — Built with Vite for rapid development and optimized production builds
- 🎨 **Modern UI** — Styled with Tailwind CSS for a responsive, clean interface

## Tech Stack

**Frontend**
- React
- Vite
- Tailwind CSS
- Monaco Editor
- react-markdown
- react-syntax-highlighter
- Axios

**Backend**
- Node.js
- Express.js
- Groq API

## Getting Started

### Prerequisites
- Node.js (v18+)
- A [Groq API key](https://console.groq.com/keys)

### Installation

```bash
git clone https://github.com/Abhishek-Devkatte/AI-Code-Reviewer.git
cd AI-Code-Reviewer
```

Install dependencies for both frontend and backend:

```bash
cd backend
npm install

cd ../frontend
npm install
```

### Environment Variables

Create a `.env` file inside the `backend` directory:

```properties
GROQ_API_KEY=your_groq_api_key
PORT=3000
NODE_ENV=development
```

> Get your Groq API key from the [Groq Console](https://console.groq.com/keys). Never commit this file — make sure `.env` is listed in `.gitignore`.

### Running the App

**Backend:**
```bash
cd backend
npm start
```

**Frontend:**
```bash
cd frontend
npm run build
npm run dev
```

The app will be available at `http://localhost:5173` (frontend) with the API running on `http://localhost:3000` (backend).

## How It Works

1. Write or paste your code into the Monaco editor
2. Select the language (auto-detected or manually chosen)
3. Submit for review
4. The backend sends your code to the Groq API with a review-focused prompt
5. Groq analyzes the code for:
   - Runtime errors and bugs
   - Performance bottlenecks
   - Security vulnerabilities
   - Anti-patterns and code smells
   - Style and readability improvements
6. The response is rendered as clean, syntax-highlighted Markdown in the UI

## Project Structure

```
AI-Code-Reviewer/
├── backend/          # Express server + Groq API integration
├── frontend/         # React + Vite + Monaco Editor UI
├── .gitignore
├── package.json
└── README.md
```

## Roadmap

- [ ] Support for reviewing full files/repositories, not just snippets
- [ ] Save and revisit past reviews
- [ ] Downloadable review reports (PDF/Markdown)
- [ ] Configurable review focus (e.g. security-only, performance-only)

## Contributing

Contributions are welcome. Feel free to open an issue or submit a pull request.
