import express from 'express';
import Groq from 'groq-sdk';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config({ path: '../../.env' });  // Load .env file

const app = express();

app.use(cors());
app.use(express.json());

// Initialize Groq with API key
const groq = new Groq({ apiKey: process.env.VITE_GROQ_API_KEY });

app.post('/generate-quiz', async (req, res) => {
  const { inputText } = req.body;

  try {
    // Make API request to generate quiz
    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: `DO NOT PROVIDE ANYTHING ELSE OTHER THAN JSON. You are a quiz generator. Based on the text provided below, please create a quiz with multiple-choice questions. Each question should have 4 options, and one of them should be the correct answer. Additionally, provide an explanation for why the correct answer is correct. Return the output in JSON format NOT STRING with the following structure:

{
  "quiz": [
    {
      "question": "The question text here",
      "options": [
        "Option 1",
        "Option 2",
        "Option 3",
        "Option 4"
      ],
      "correct_answer": "The correct option",
      "explanation": "Explanation for why this answer is correct."
    },
    {
      "question": "Next question text",
      "options": [
        "Option 1",
        "Option 2",
        "Option 3",
        "Option 4"
      ],
      "correct_answer": "The correct option",
      "explanation": "Explanation for why this answer is correct."
    }
  ]
}

TEXT: ${inputText}`
,
        },
      ],
      model: 'llama3-70b-8192',
      temperature: 1,
      max_tokens: 1024,
      top_p: 1,
    });

    // Extract the message content from the response
    const messageContent = chatCompletion?.choices?.[0]?.message?.content;

    if (messageContent) {
      // Log the content to see its structure
      console.log('Message content:', messageContent);

      try {
        // Try to parse the content as JSON
        const parsedQuiz = JSON.parse(messageContent);
        res.json({ quiz: parsedQuiz });
      } catch (error) {
        // Handle invalid JSON parsing
        console.error('JSON Parsing Error:', error);
        res.status(500).json({ error: 'Invalid JSON format in response.' });
      }
    } else {
      res.status(500).json({ error: 'No valid message content found in the response.' });
    }
  } catch (error) {
    // Handle unexpected API errors
    console.error('Error in API Request:', error);
    res.status(500).json({ error: 'Failed to generate quiz.' });
  }
});

app.post('/generate-keywords', async (req, res) => {
  const { quiz, incorrectAnswers } = req.body;

  try {
    // Make API request to generate quiz
    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: `yoU MUST return a single json object. DO NOT PROVIDE ANYTHING ELSE OTHER THAN JSON OR ELSE MY WEBSITE WILL BREAK. You are a quiz generator. Based on the json provided below. Generate JSON with two keys: "topics" and "videoQuery". The "topics" key should contain an array of  3 topics that the user can review based on their quiz results of incorrect answers with using the context of the whole quiz so find a way to balance the topics correctly focusing more on the things the person got wrong. The "videoQuery" key should contain a string that the user can use to search for videos using the youtube API related to the quiz results. Return the output in JSON format NOT STRING with the following structure:
          {
            "topics": ["Topic 1", "Topic 2", "Topic 3"]
            ,
            "videoQuery": "The query string for the youtube API goes here"
          }
Entire quiz: ${quiz}
incorrectAnswers: ${incorrectAnswers}`

,
        },
      ],
      model: 'llama3-70b-8192',
      temperature: 1,
      max_tokens: 1024,
      top_p: 1,
    });

    // Extract the message content from the response
    const messageContent = chatCompletion?.choices?.[0]?.message?.content;

    if (messageContent) {
      // Log the content to see its structure
      console.log('Message content:', messageContent);

      try {
        // Try to parse the content as JSON
        const parsedQuiz = JSON.parse(messageContent);
        res.json({ quiz: parsedQuiz });
      } catch (error) {
        // Handle invalid JSON parsing
        console.error('JSON Parsing Error:', error);
        res.status(500).json({ error: 'Invalid JSON format in response.' });
      }
    } else {
      res.status(500).json({ error: 'No valid message content found in the response.' });
    }
  } catch (error) {
    // Handle unexpected API errors
    console.error('Error in API Request:', error);
    res.status(500).json({ error: 'Failed to generate quiz.' });
  }
});


app.listen(3000, () => {
  console.log('Server running on port 3000');
});
