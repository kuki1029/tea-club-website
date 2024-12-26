const canvas = document.getElementById("gradientCanvas");
const ctx = canvas.getContext("2d");
let raf;

const ball = {
  x: 100,
  y: 100,
  vx: 1,
  vy: 2,
  radius: 30,
  color: "blue",
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
  },
};

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
  ball.draw(); // Draw the ball
  ball.x += ball.vx; // Update x position
  ball.y += ball.vy; // Update y position

  // Bounce the ball off the walls
  if (
    ball.y + ball.vy > canvas.height - ball.radius ||
    ball.y + ball.vy < ball.radius
  ) {
    ball.vy = -ball.vy; // Reverse vertical velocity if hitting top or bottom
  }
  if (
    ball.x + ball.vx > canvas.width - ball.radius ||
    ball.x + ball.vx < ball.radius
  ) {
    ball.vx = -ball.vx; // Reverse horizontal velocity if hitting left or right
  }

  raf = window.requestAnimationFrame(draw); // Request the next frame
}

// Start the animation when the page is loaded
window.onload = () => {
  draw(); // Start the animation function immediately when the page loads
};

// Event listener to handle window resize
window.addEventListener('resize', resizeCanvas);

// Initialize canvas size on page load
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
