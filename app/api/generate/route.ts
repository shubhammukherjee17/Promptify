import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { prompt } = await request.json();

    if (!prompt) {
      return NextResponse.json(
        { error: 'Prompt is required' },
        { status: 400 }
      );
    }

    if (!process.env.NVIDIA_API_KEY) {
      return NextResponse.json(
        { error: 'NVIDIA API key is not configured' },
        { status: 500 }
      );
    }

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
... (and many more)

When generating prompts, you should:
- Analyze the user's request carefully
- Select the most appropriate prompting techniques
- Create prompts that are clear, specific, and optimized
- Explain which techniques you're using and why
- Provide multiple prompt variations when beneficial

Now, generate an optimized prompt based on this user request: "${prompt}"

IMPORTANT: You MUST respond EXCLUSIVELY with a valid JSON object. Do not include any conversational text before or after the JSON. Do not wrap it in markdown code blocks like \`\`\`json. The JSON must exactly match this structure:

{
  "analysis": "Brief analysis of the request...",
  "prompts": [
    {
      "level": "Simple",
      "accuracy": 78,
      "text": "The actual prompt text...",
      "techniques": ["Technique 1", "Technique 2"],
      "explanation": "Brief explanation of why these techniques work...",
      "useCases": "Best use cases for this prompt..."
    },
    {
      "level": "Balanced",
      "accuracy": 85,
      "text": "The actual prompt text...",
      "techniques": ["Technique 1", "Technique 2"],
      "explanation": "Brief explanation of why these techniques work...",
      "useCases": "Best use cases for this prompt..."
    },
    {
      "level": "Advanced",
      "accuracy": 92,
      "text": "The actual prompt text...",
      "techniques": ["Technique 1", "Technique 2"],
      "explanation": "Brief explanation of why these techniques work...",
      "useCases": "Best use cases for this prompt..."
    }
  ],
  "recommendation": "Clear recommendation on which prompt to use and why."
}
`;

    // Call NVIDIA API
    const invoke_url = "https://integrate.api.nvidia.com/v1/chat/completions";
    
    const payload = {
      model: "google/gemma-4-31b-it",
      messages: [{ role: "user", content: systemPrompt }],
      max_tokens: 16384,
      temperature: 0.70,
      top_p: 0.95,
      stream: false,
    };

    const apiResponse = await fetch(invoke_url, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.NVIDIA_API_KEY}`,
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    if (!apiResponse.ok) {
      const errorData = await apiResponse.json().catch(() => ({}));
      throw new Error(errorData.error?.message || 'Failed to fetch from NVIDIA API');
    }

    const data = await apiResponse.json();
    let text = data.choices[0].message.content.trim();
    
    // Extract JSON from the text in case the model adds conversational padding or markdown
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      text = jsonMatch[0];
    }

    try {
      const parsedJSON = JSON.parse(text);
      return NextResponse.json({ response: parsedJSON });
    } catch {
      console.error("Failed to parse JSON from AI response:", text);
      throw new Error("AI returned an invalid format. Please try again.");
    }
    
  } catch (error: unknown) {
    console.error('Error generating content:', error);
    
    // Provide more specific error messages
    const errorMessage = error instanceof Error ? error.message : String(error);
    
    if (errorMessage.includes('API key')) {
      return NextResponse.json(
        { error: 'Invalid API key. Please check your NVIDIA API key.' },
        { status: 401 }
      );
    } else if (errorMessage.includes('not found') || errorMessage.includes('404')) {
      return NextResponse.json(
        { error: 'Model not available. Please try again later.' },
        { status: 404 }
      );
    } else {
      return NextResponse.json(
        { error: errorMessage || 'Failed to generate content. Please try again.' },
        { status: 500 }
      );
    }
  }
}