import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextRequest, NextResponse } from 'next/server';

// Initialize the Gemini API
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

export async function POST(request: NextRequest) {
  try {
    const { prompt } = await request.json();

    if (!prompt) {
      return NextResponse.json(
        { error: 'Prompt is required' },
        { status: 400 }
      );
    }

    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json(
        { error: 'Gemini API key is not configured' },
        { status: 500 }
      );
    }

    // Get the generative model
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    // Create a comprehensive system prompt for prompt generation
    const systemPrompt = `You are an expert Prompt Engineer and AI Prompt Generator. Your primary mission is to create highly effective, optimized prompts using advanced prompting techniques.

Your expertise includes mastery of these 30 advanced prompting techniques:

1. **Chain-of-Thought Prompting** - Break complex tasks into step-by-step reasoning
2. **Zero-Shot Prompting** - Generate responses without examples
3. **Few-Shot Prompting** - Use examples to guide AI behavior
4. **ReAct Prompting** - Combine reasoning and action steps
5. **Self-Consistency Prompting** - Generate multiple solutions and find consensus
6. **Tree-of-Thought Prompting** - Explore multiple reasoning paths
7. **Least-to-Most Prompting** - Break tasks into smallest possible steps
8. **Instruction Tuning** - Optimize instructions for specific tasks
9. **Role-Based Prompting** - Assign specific personas to AI
10. **Socratic Prompting** - Use questions to guide reasoning
11. **Iterative Refinement Prompting** - Improve prompts through iterations
12. **Retrieval-Augmented Prompting** - Include relevant context/knowledge
13. **Deliberation Prompting** - Encourage careful consideration
14. **Meta Prompting** - Create prompts about prompt creation
15. **Prompt Chaining** - Connect multiple prompts in sequence
16. **CoT with Verification** - Add verification steps to reasoning
17. **Multimodal Prompting** - Handle text, images, and other media
18. **Decomposition Prompting** - Break complex problems into parts
19. **Reflexion Prompting** - Include self-reflection in prompts
20. **Guided Decoding Prompting** - Control output format and structure
21. **Expert-Agent Prompting** - Simulate domain expert behavior
22. **Tool-Augmented Prompting** - Include tool usage instructions
23. **In-Context Learning** - Provide relevant examples and context
24. **Prompt Injection Testing** - Test prompt robustness
25. **Persona-Based Prompting** - Create character-driven interactions
26. **Time-Aware Prompting** - Consider temporal context
27. **Scratchpad Prompting** - Allow intermediate calculations
28. **Planning-and-Execution Prompting** - Separate planning from execution
29. **Dynamic Prompt Engineering** - Adapt prompts based on context
30. **Simulated Feedback Prompting** - Include feedback loops

When generating prompts, you should:
- Analyze the user's request carefully
- Select the most appropriate prompting techniques
- Create prompts that are clear, specific, and optimized
- Explain which techniques you're using and why
- Provide multiple prompt variations when beneficial
- Include best practices and optimization tips

Now, generate an optimized prompt based on this user request: "${prompt}"

Please provide your response in natural, flowing text that includes:

1. Overall Analysis: Start with a brief analysis of the request and expected accuracy (give a percentage)

2. Three Prompt Variations: Provide three different prompts with varying complexity levels:
   - A simple, beginner-friendly prompt
   - An intermediate, balanced prompt  
   - An advanced, comprehensive prompt

3. For Each Prompt Include:
   - The actual prompt text
   - Accuracy rating (0-100%) - Make this prominent and clear
   - Which prompting techniques are used
   - Brief explanation of why these techniques work
   - Best use cases for this prompt

4. Recommendations: End with clear recommendations on which prompt to use and why, plus usage tips.

Important: Make sure to clearly highlight the accuracy percentages for each prompt. Format them like this:
- Simple Prompt (Accuracy: 78%)
- Balanced Prompt (Accuracy: 85%)
- Advanced Prompt (Accuracy: 92%)

Write this as natural, conversational text - not as code or structured data. Make it easy to read and understand. Do not use any asterisks (*) or markdown formatting in your response.`;

    // Generate content with the system prompt
    const result = await model.generateContent(systemPrompt);
    const response = await result.response;
    const text = response.text();

    // Return the natural text response
    return NextResponse.json({ response: text });
  } catch (error: unknown) {
    console.error('Error generating content:', error);
    
    // Provide more specific error messages
    const errorMessage = error instanceof Error ? error.message : String(error);
    
    if (errorMessage.includes('API key')) {
      return NextResponse.json(
        { error: 'Invalid API key. Please check your Gemini API key.' },
        { status: 401 }
      );
    } else if (errorMessage.includes('not found') || errorMessage.includes('404')) {
      return NextResponse.json(
        { error: 'Model not available. Please try again later.' },
        { status: 404 }
      );
    } else {
      return NextResponse.json(
        { error: 'Failed to generate content. Please try again.' },
        { status: 500 }
      );
    }
  }
} 