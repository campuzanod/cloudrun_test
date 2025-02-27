import OpenAI from "openai";
import { NextResponse } from "next/server";
import { products } from "@/utils";

// if (!process.env.OPENAI_API_KEY) {
//   throw new Error('Missing OPENAI_API_KEY environment variable');
// }

type Message = {
  role: "system" | "user" | "assistant";
  content: string;
};

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || "",
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { messages } = body;

    if (!messages.some((m: Message) => m.role === "system")) {
      messages.unshift({
        role: "system",
        content: `You are a shopping assistant with access to this product database: ${JSON.stringify(products)},
        When answering:
        - Provide accurate product information
        - Suggest similar products if the requested product is out of stock
        - Always be friendly and professional
        - If you don't have the answer, let the user know
        - Use the language of the user in your responses`,

      });
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages,
    });

    const reply = completion.choices[0].message;
    return NextResponse.json({ message: reply });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "An error occurred during your request." },
      { status: 500 }
    );
  }
}
