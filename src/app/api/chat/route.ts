import OpenAI from 'openai';
import { NextResponse } from 'next/server';

// if (!process.env.OPENAI_API_KEY) {
//   throw new Error('Missing OPENAI_API_KEY environment variable');
// }

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || '',
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { messages } = body;

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: messages,
    });

    const reply = completion.choices[0].message;
    return NextResponse.json({ message: reply });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'An error occurred during your request.' },
      { status: 500 }
    );
  }
}