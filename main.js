const w = window.innerWidth;
const h = window.innerHeight;
const radius = 20;
const cols = Math.floor(w / radius);
const rows = Math.floor(h / radius);

const max_speed = 0.15;

const do_alpha = false;

function mathRandom(min, max) {
  return Math.random() * (max - min) + min;
}

const speed = {
  red: {
    x: mathRandom(0, max_speed),
    y: mathRandom(0, max_speed),
  },
  green: {
    x: mathRandom(0, max_speed),
    y: mathRandom(0, max_speed),
  },
  blue: {
    x: mathRandom(0, max_speed),
    y: mathRandom(0, max_speed),
  },
  alpha: {
    x: mathRandom(0, max_speed),
    y: mathRandom(0, max_speed),
  },
};

const offset = {
  red: {
    x: Math.random(),
    y: Math.random(),
  },
  green: {
    x: Math.random(),
    y: Math.random(),
  },
  blue: {
    x: Math.random(),
    y: Math.random(),
  },
  alpha: {
    x: Math.random(),
    y: Math.random(),
  },
};

function setup() {
  createCanvas(w, h);
}

function draw() {
  background(50);
  stroke(0);

  offset.red.x += speed.red.x;
  offset.red.y += speed.red.y;

  offset.green.x += speed.green.x;
  offset.green.y += speed.green.y;

  offset.blue.x += speed.blue.x;
  offset.blue.y += speed.blue.y;

  offset.alpha.x += speed.alpha.x;
  offset.alpha.y += speed.alpha.y;

  for (var y = 0; y < rows; y++) {
    for (var x = 0; x < cols; x++) {
      const r = noise(x + offset.red.x, y + offset.red.y) * 255;
      const g = noise(x + offset.green.x, y + offset.green.y) * 255;
      const b = noise(x + offset.blue.x, y + offset.blue.y) * 255;
      const a = noise(x + offset.alpha.x, y + offset.alpha.y) * 250 + 5;

      if (do_alpha) {
        fill(r, g, b, a);
      } else {
        fill(r, g, b);
      }
      circle(
        x * radius + Math.floor(radius / 2),
        y * radius + Math.floor(radius / 2),
        radius
      );
    }
  }
}
