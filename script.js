/* FIRELIES */

(function () {

  const canvas = document.getElementById('fireflies');
  const ctx = canvas.getContext('2d');

  let W, H;
  let flies = [];

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  resize();

  window.addEventListener('resize', resize);

  for (let i = 0; i < 50; i++) {

    flies.push({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 2 + 1,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5
    });

  }

  function draw() {

    ctx.clearRect(0, 0, W, H);

    flies.forEach(f => {

      f.x += f.vx;
      f.y += f.vy;

      if (f.x < 0) f.x = W;
      if (f.x > W) f.x = 0;

      if (f.y < 0) f.y = H;
      if (f.y > H) f.y = 0;

      ctx.beginPath();
      ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);

      ctx.fillStyle = 'rgba(200,120,14,0.7)';
      ctx.fill();

    });

    requestAnimationFrame(draw);

  }

  draw();

})();

/* DATE */

const d = new Date();

const months = [
  'Jan','Feb','Mar','Apr',
  'May','Jun','Jul','Aug',
  'Sep','Oct','Nov','Dec'
];

document.getElementById('header-date-el').innerHTML =
  `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;

/* STANCE */

let stance = "for";

document.querySelectorAll('.stance-opt').forEach(el => {

  el.addEventListener('click', () => {

    document
      .querySelectorAll('.stance-opt')
      .forEach(x => x.classList.remove('active'));

    el.classList.add('active');

    stance = el.dataset.stance;

  });

});

/* INTENSITY */

let intensity = "sharp";

document.querySelectorAll('.int-btn').forEach(el => {

  el.addEventListener('click', () => {

    document
      .querySelectorAll('.int-btn')
      .forEach(x => x.classList.remove('active'));

    el.classList.add('active');

    intensity = el.dataset.intensity;

  });

});

/* ENABLE START BUTTON */

const topicInput =
  document.getElementById('topic-input');

const startBtn =
  document.getElementById('start-btn');

topicInput.addEventListener('input', () => {

  startBtn.disabled =
    !topicInput.value.trim();

});

/* START */

startBtn.addEventListener('click', () => {

  alert(
    `Debate Started!\n\nTopic: ${topicInput.value}\nAI Stance: ${stance}\nIntensity: ${intensity}`
  );

});/* FIRELIES */

(function () {

  const canvas = document.getElementById('fireflies');
  const ctx = canvas.getContext('2d');

  let W, H;
  let flies = [];

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  resize();

  window.addEventListener('resize', resize);

  for (let i = 0; i < 50; i++) {

    flies.push({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 2 + 1,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5
    });

  }

  function draw() {

    ctx.clearRect(0, 0, W, H);

    flies.forEach(f => {

      f.x += f.vx;
      f.y += f.vy;

      if (f.x < 0) f.x = W;
      if (f.x > W) f.x = 0;

      if (f.y < 0) f.y = H;
      if (f.y > H) f.y = 0;

      ctx.beginPath();
      ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);

      ctx.fillStyle = 'rgba(200,120,14,0.7)';
      ctx.fill();

    });

    requestAnimationFrame(draw);

  }

  draw();

})();

/* DATE */

const d = new Date();

const months = [
  'Jan','Feb','Mar','Apr',
  'May','Jun','Jul','Aug',
  'Sep','Oct','Nov','Dec'
];

document.getElementById('header-date-el').innerHTML =
  `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;

/* STANCE */

let stance = "for";

document.querySelectorAll('.stance-opt').forEach(el => {

  el.addEventListener('click', () => {

    document
      .querySelectorAll('.stance-opt')
      .forEach(x => x.classList.remove('active'));

    el.classList.add('active');

    stance = el.dataset.stance;

  });

});

/* INTENSITY */

let intensity = "sharp";

document.querySelectorAll('.int-btn').forEach(el => {

  el.addEventListener('click', () => {

    document
      .querySelectorAll('.int-btn')
      .forEach(x => x.classList.remove('active'));

    el.classList.add('active');

    intensity = el.dataset.intensity;

  });

});

/* ENABLE START BUTTON */

const topicInput =
  document.getElementById('topic-input');

const startBtn =
  document.getElementById('start-btn');

topicInput.addEventListener('input', () => {

  startBtn.disabled =
    !topicInput.value.trim();

});

/* START */

startBtn.addEventListener('click', () => {

  alert(
    `Debate Started!\n\nTopic: ${topicInput.value}\nAI Stance: ${stance}\nIntensity: ${intensity}`
  );

});
