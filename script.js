const topicInput = document.getElementById('topic-input');
const startBtn = document.getElementById('start-btn');
const debate = document.getElementById('debate');
const setup = document.getElementById('setup');
const chat = document.getElementById('chat');

const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

let stance = 'for';
let history = [];

document.querySelectorAll('.stance').forEach(btn => {
  btn.addEventListener('click', () => {

    document.querySelectorAll('.stance')
      .forEach(b => b.classList.remove('active'));

    btn.classList.add('active');

    stance = btn.dataset.stance;
  });
});

startBtn.addEventListener('click', async () => {

  const topic = topicInput.value.trim();

  if (!topic) return;

  setup.style.display = 'none';
  debate.style.display = 'flex';

  await aiReply(
    `Start the debate on: ${topic}`
  );
});

sendBtn.addEventListener('click', sendMessage);

async function sendMessage() {

  const text = userInput.value.trim();

  if (!text) return;

  addMessage(text, 'user');

  history.push({
    role: 'user',
    content: text
  });

  userInput.value = '';

  await aiReply(text);
}

async function aiReply(message) {

  try {

    const response = await fetch(
      'http://localhost:5000/chat',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },

        body: JSON.stringify({
          message,
          stance,
          history
        })
      }
    );

    const data = await response.json();

    addMessage(data.reply, 'ai');

    history.push({
      role: 'assistant',
      content: data.reply
    });

  } catch (err) {

    addMessage(
      'Error connecting to AI server.',
      'ai'
    );

    console.error(err);
  }
}

function addMessage(text, type) {

  const div = document.createElement('div');

  div.className = `msg ${type}`;

  div.textContent = text;

  chat.appendChild(div);

  chat.scrollTop = chat.scrollHeight;
}
