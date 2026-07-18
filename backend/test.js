import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

const models = [
  "gemini-2.5-flash",
  "gemini-2.5-flash-lite",
  "gemini-3.5-flash",
  "gemini-2.0-flash-lite",
];

for (const model of models) {
  try {
    console.log("\nTesting:", model);

    const response = await ai.models.generateContent({
      model,
      contents: "Say Hello",
    });

    console.log("SUCCESS:", response.text);
  } catch (e) {
    console.error("FAILED:", model);
    console.error(e);
  }
}