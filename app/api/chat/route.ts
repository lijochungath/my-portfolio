import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextResponse } from 'next/server';
import { RESUME_DATA } from '../../../data/resume'; // Make sure this path points to your resume.ts file

// Initialize the Google Generative AI SDK
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GENERATIVE_AI_API_KEY || '');

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    // Use Gemini 1.5 Flash for fast text responses
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // The System Prompt + The Resume Context + The User's Question
    const prompt = `
      You are a professional AI assistant for Lijo Chungath Jose's personal portfolio. 
      Answer questions ONLY based on the provided resume data below. 
      If someone asks a question not covered in the resume, politely state that you do not have that information but they can contact Lijo directly.
      Keep your answers concise, professional, and highlight his data engineering expertise.

      --- RESUME DATA START ---
      ${RESUME_DATA}
      --- RESUME DATA END ---

      User Question: ${message}
    `;

    // Generate the response
    const result = await model.generateContent(prompt);
    const text = result.response.text();

    return NextResponse.json({ reply: text });

  } catch (error) {
    console.error("Gemini API Error:", error);
    return NextResponse.json(
      { reply: "Sorry, I encountered an error connecting to the AI backend. Please check your API keys." },
      { status: 500 }
    );
  }
}