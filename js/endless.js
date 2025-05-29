// --- Minimalist Snake Game ---
const canvas = document.getElementById('snakeCanvas');
const ctx = canvas.getContext('2d');
const grid = 20; // size of each square
let snake, direction, food, gameInterval, nextDirection, growing, speed;

function initSnake() {
  snake = [{x: 7, y: 7}];
  direction = {x: 1, y: 0};
  nextDirection = direction;
  food = {x: 12, y: 12};
  growing = 0;
  speed = 200; // SLOWER: was 140, now 200 ms per frame
  clearInterval(gameInterval);
  draw();
  gameInterval = setInterval(gameLoop, speed);
}
function draw() {
  ctx.fillStyle = '#111';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  // Draw food
  ctx.fillStyle = '#fff';
  ctx.fillRect(food.x * grid, food.y * grid, grid, grid);
  // Draw snake
  snake.forEach((seg, i) => {
    ctx.fillStyle = i === 0 ? '#fff' : '#ccc';
    ctx.fillRect(seg.x * grid, seg.y * grid, grid, grid);
  });
}
function randomFood() {
  let x, y;
  do {
    x = Math.floor(Math.random() * (canvas.width / grid));
    y = Math.floor(Math.random() * (canvas.height / grid));
  } while (snake.some(seg => seg.x === x && seg.y === y));
  return {x, y};
}
function gameLoop() {
  // Direction update (prevents double move bug)
  direction = nextDirection;
  // Move snake
  const head = {x: snake[0].x + direction.x, y: snake[0].y + direction.y};
  // Wrap around
  head.x = (head.x + canvas.width / grid) % (canvas.width / grid);
  head.y = (head.y + canvas.height / grid) % (canvas.height / grid);
  // Game over (self-collision)
  if (snake.some(seg => seg.x === head.x && seg.y === head.y)) {
    setTimeout(initSnake, 1000);
    return;
  }
  snake.unshift(head);
  // Eat food
  if (head.x === food.x && head.y === food.y) {
    food = randomFood();
    growing += 1;
    // Optional: speed up slightly
    if (speed > 90) { // was 60, now 90 minimum speed
      speed -= 3;
      clearInterval(gameInterval);
      gameInterval = setInterval(gameLoop, speed);
    }
  }
  if (growing > 0) {
    growing--;
  } else {
    snake.pop();
  }
  draw();
}
function changeDir(dir) {
  // Prevent reverse
  if (dir.x === -direction.x && dir.y === -direction.y)
    return;
  nextDirection = dir;
}
document.addEventListener('keydown', e => {
  if (e.key === 'ArrowUp') changeDir({x: 0, y: -1});
  if (e.key === 'ArrowDown') changeDir({x: 0, y: 1});
  if (e.key === 'ArrowLeft') changeDir({x: -1, y: 0});
  if (e.key === 'ArrowRight') changeDir({x: 1, y: 0});
});
document.getElementById('snakeControls').addEventListener('click', e => {
  if (!e.target.dataset.dir) return;
  if (e.target.dataset.dir === 'up') changeDir({x: 0, y: -1});
  if (e.target.dataset.dir === 'down') changeDir({x: 0, y: 1});
  if (e.target.dataset.dir === 'left') changeDir({x: -1, y: 0});
  if (e.target.dataset.dir === 'right') changeDir({x: 1, y: 0});
});
initSnake();