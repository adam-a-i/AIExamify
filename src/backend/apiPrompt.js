import Groq from "groq-sdk";
import dotenv from 'dotenv';
dotenv.config();  // This loads the variables from the .env file

const groq = new Groq({apiKey: process.env.GROQ_API_KEY})
async function main() {
  const chatCompletion = await groq.chat.completions.create({
    "messages": [
      {
        "role": "system",
        "content": "You are a quiz generator. Based on the text provided below, please create a quiz with 5 multiple-choice questions. Each question should have 4 options, and one of them should be the correct answer. Return the output in JSON format with the following structure:\n\n{\n  \"quiz\": [\n    {\n      \"question\": \"The question text here\",\n      \"options\": [\n        \"Option 1\",\n        \"Option 2\",\n        \"Option 3\",\n        \"Option 4\"\n      ],\n      \"correct_answer\": \"The correct option\"\n    },\n    {\n      \"question\": \"Next question text\",\n      \"options\": [\n        \"Option 1\",\n        \"Option 2\",\n        \"Option 3\",\n        \"Option 4\"\n      ],\n      \"correct_answer\": \"The correct option\"\n    }\n  ]\n}\n\nTEXT: {text}"
      },
      {
        "role": "user",
        "content": ""
      },
      {
        "role": "assistant",
        "content": "I'm happy to help! However, I don't see any text provided. Please provide the text you'd like me to generate a quiz from, and I'll create a 5-question multiple-choice quiz for you!"
      }
    ],
    "model": "llama3-70b-8192",
    "temperature": 1,
    "max_tokens": 1024,
    "top_p": 1,
    "stream": true,
    "stop": null
  });

  for await (const chunk of chatCompletion) {
    process.stdout.write(chunk.choices[0]?.delta?.content || '');
  }
}

main();