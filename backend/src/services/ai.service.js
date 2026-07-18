import dotenv from "dotenv";
dotenv.config();

import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

async function main(code, language) {
  const prompt = `
You are an expert AI Code Reviewer.

Review the following ${language} code.

Check for:
- Bugs
- Runtime errors
- Security issues
- Performance improvements
- Best coding practices

If the code is perfect, reply only:
✅ Code Review Passed

Otherwise explain the issues and provide corrected code.

Code:

${code}
`;

  try {
    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.2,
    });

    return completion.choices[0].message.content;
  } catch (error) {
    console.error("Groq Error:", error);
    throw error;
  }
}

export default main;