# Prompt Generator

A simple prompt generator built with Next.js and Google's Gemini AI API. Generate creative prompts using AI with a minimal, clean interface.

## Features

- **Advanced Prompt Engineering**: Uses 30+ cutting-edge prompting techniques
- **Expert AI Guidance**: Specialized in creating optimized, effective prompts
- **Clean, Minimal UI**: Simple interface with message input and send button
- **Real-time Generation**: Instant prompt creation with detailed explanations
- **Responsive Design**: Works perfectly on all devices
- **Technique Explanations**: Learn which prompting techniques are used and why

## Getting Started

### Prerequisites

- Node.js 18+ 
- A Google Gemini API key

### Setup

1. Clone the repository:
```bash
git clone <your-repo-url>
cd prompt-generator
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the root directory and add your Gemini API key:
```bash
# Gemini API Key
# Get your API key from: https://makersuite.google.com/app/apikey
GEMINI_API_KEY=your_gemini_api_key_here
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## How to Use

1. Describe what type of prompt you want to generate (e.g., "Create a prompt for writing a science fiction story")
2. Click "Generate Prompt" to get an optimized prompt using advanced techniques
3. Review the generated prompt along with explanations of which techniques were used
4. Use the provided tips to maximize the effectiveness of your generated prompt

## Advanced Prompting Techniques

This prompt generator utilizes 30+ advanced prompting techniques including:

### Core Techniques
- **Chain-of-Thought**: Step-by-step reasoning for complex tasks
- **Zero-Shot**: Generate responses without examples
- **Few-Shot**: Use examples to guide AI behavior
- **ReAct**: Combine reasoning and action steps

### Advanced Strategies
- **Tree-of-Thought**: Explore multiple reasoning paths
- **Self-Consistency**: Generate multiple solutions and find consensus
- **Meta Prompting**: Create prompts about prompt creation
- **Expert-Agent**: Simulate domain expert behavior

### Specialized Methods
- **Socratic Prompting**: Use questions to guide reasoning
- **Persona-Based**: Create character-driven interactions
- **Multimodal**: Handle text, images, and other media
- **Dynamic Engineering**: Adapt prompts based on context

### Why These Techniques Matter
- **Better Results**: More accurate and relevant AI responses
- **Efficiency**: Faster problem-solving and task completion
- **Reliability**: More consistent and dependable outputs
- **Flexibility**: Adapt to different use cases and domains
- **Learning**: Understand how to craft better prompts yourself

## API Key Setup

To get your Gemini API key:

1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Create a new API key
4. Copy the key and paste it in your `.env.local` file

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework
- [Google Generative AI](https://ai.google.dev/) - Gemini API
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [TypeScript](https://www.typescriptlang.org/) - Type safety

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
