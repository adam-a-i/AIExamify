# AIExamify

AI-powered quiz generator that creates personalized quizzes and provides targeted learning recommendations like topics to review and youtube videos to watch!

# Watch AIExamify Demo

https://github.com/user-attachments/assets/7852d104-fd0d-473c-bee7-89a304526154


## Features

- 🤖 AI Quiz Generation: Convert any text into a structured quiz
- 📊 Real-time Performance Analytics: Track scores and completion time
- 🎯 Smart Recommendations: Get personalized topic suggestions based on mistakes
- 🎥 Curated Video Resources: Watch targeted educational content
- 🎨 Modern UI/UX: Interactive design with animations and celebrations
- 📱 Responsive Design: Works seamlessly across all devices

## Tech Stack

- **Frontend**: React.js, CSS
- **Backend**: Node.js, Express
- **APIs**: Groq AI(Llama AI API), YouTube Data API
- **Build Tool**: Vite

## Getting Started

### Prerequisites
- Node.js v18+
- npm or yarn
- API keys for Groq AI and YouTube Data API

### Installation

1. Clone the repository

```bash
npm install
```

### Environment Variables

Create a `.env` file in the root directory and add the following:

```bash
VITE_GROQ_API_KEY=your_groq_api_key
VITE_YOUTUBE_API=your_youtube_api_key
```

### Running the Application

To start the development server, run:

```bash
npm run dev
```

To start the backend server go to the backend directory, run:
```bash
node apiPrompt.js
```


