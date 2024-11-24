import express from 'express';
import Groq from 'groq-sdk';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config({path: '../../.env'});

const app = express();

app.use(cors());
app.use(express.json());
const groq = new Groq({ apiKey: process.env.VITE_GROQ_API_KEY});
app.post('/generate-quiz', async (req, res) => {
  const { inputText } = req.body;
  try {
    const chatCompletion = await groq.chat.completions.create({
      messages:  [
        {
          "role": "system",
          "content": `You are a quiz generator.Based on the text provided below, please create a quiz with multiple-choice questions. Each question should have 4 options, and one of them should be the correct answer. Return the output in JSON format with the following structure:\n\n{\n  \"quiz\": [\n    {\n      \"question\": \"The question text here\",\n      \"options\": [\n        \"Option 1\",\n        \"Option 2\",\n        \"Option 3\",\n        \"Option 4\"\n      ],\n      \"correct_answer\": \"The correct option\"\n    },\n    {\n      \"question\": \"Next question text\",\n      \"options\": [\n        \"Option 1\",\n        \"Option 2\",\n        \"Option 3\",\n        \"Option 4\"\n      ],\n      \"correct_answer\": \"The correct option\"\n    }\n  ]\n}\n\nTEXT: ${inputText} DO NOT GENERATE ANY OTHER TEXT EXCEPT OF THE JSON YOU WILL PROVIDE`
        },
      ],
      "model": "llama3-70b-8192",
      "temperature": 1,
      "max_tokens": 1024,
      "top_p": 1,
      "stream": true,
      "stop": null
    });
    let result = '';
    for await (const chunk of chatCompletion) {
      result += chunk.choices[0]?.delta?.content || '';
    }
    res.json({ quiz: result });
  } catch (error) {
    console.error('Error generating quiz:', error);
    res.status(500).json({ error: 'Failed to generate quiz' });
  }
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
