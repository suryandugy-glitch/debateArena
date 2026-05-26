import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import Anthropic from '@anthropic-ai/sdk';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('.'));

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY
});

app.post('/chat', async (req, res) => {

  try {

    const {
      message,
      stance,
      history
    } = req.body;

    const system = `
You are an aggressive debate opponent.

Current stance: ${stance}

Rules:
- Never agree
- Be persuasive
- Be sharp
- Keep responses short
`;

    const response =
      await anthropic.messages.create({

        model: 'claude-3-5-sonnet-20241022',

        max_tokens: 300,

        system,

        messages: [
          ...history,
          {
            role: 'user',
            content: message
          }
        ]
      });

    const reply =
      response.content[0].text;

    res.json({ reply });

  } catch (err) {

    console.error(err);

    res.status(500).json({
      error: 'AI error'
    });
  }
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(
    `Server running on http://localhost:${PORT}`
  );
});
