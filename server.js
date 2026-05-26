import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('.'));

app.post('/chat', async (req, res) => {

  try {

    const {
      message,
      stance,
      history
    } = req.body;

    const prompt = `
You are an aggressive AI debate opponent.

Current stance: ${stance}

Rules:
- Never agree
- Be persuasive
- Sound confident
- Keep replies short
- Debate like a human

Conversation:
${history.map(h =>
`${h.role}: ${h.content}`
).join('\n')}

User:
${message}

AI:
`;

    const response = await fetch(
`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: 'POST',

        headers: {
          'Content-Type': 'application/json'
        },

        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: prompt
                }
              ]
            }
          ]
        })
      }
    );

    const data = await response.json();

    console.log(data);

    const reply =
      data.candidates?.[0]?.content?.parts?.[0]?.text
      || 'No AI response';

    res.json({ reply });

  } catch (err) {

  console.error("FULL ERROR:", err);

  res.status(500).json({
    error: err.message
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {

  console.log(
    `Server running on http://localhost:${PORT}`
  );
});
