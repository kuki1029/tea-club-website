const canvas = document.getElementById('gradientCanvas');
const ctx = canvas.getContext('2d');

// Resize canvas to fill the window
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  drawGradients();
}

// Draw the 6 blocks with linear gradients
function drawGradients() {
  const blockWidth = canvas.width / 3;
  const blockHeight = canvas.height / 2;

  // Define the gradient for each block
  const gradients = [
    ctx.createLinearGradient(0, 0, blockWidth, blockHeight),
    ctx.createLinearGradient(0, 0, blockWidth, blockHeight),
    ctx.createLinearGradient(0, 0, blockWidth, blockHeight),
    ctx.createLinearGradient(0, 0, blockWidth, blockHeight),
    ctx.createLinearGradient(0, 0, blockWidth, blockHeight),
    ctx.createLinearGradient(0, 0, blockWidth, blockHeight),
  ];

  // Add color stops to each gradient
  gradients[0].addColorStop(0, 'rgb(255, 0, 0)');
  gradients[0].addColorStop(1, 'rgb(255, 255, 0)');
  
  gradients[1].addColorStop(0, 'rgb(0, 255, 0)');
  gradients[1].addColorStop(1, 'rgb(0, 0, 255)');

  gradients[2].addColorStop(0, 'rgb(255, 255, 255)');
  gradients[2].addColorStop(1, 'rgb(0, 0, 0)');

  gradients[3].addColorStop(0, 'rgb(255, 0, 255)');
  gradients[3].addColorStop(1, 'rgb(255, 165, 0)');

  gradients[4].addColorStop(0, 'rgb(0, 255, 255)');
  gradients[4].addColorStop(1, 'rgb(255, 69, 0)');

  gradients[5].addColorStop(0, 'rgb(255, 105, 180)');
  gradients[5].addColorStop(1, 'rgb(34, 193, 195)');

  // Draw the 6 blocks
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 3; j++) {
      ctx.fillStyle = gradients[i * 3 + j];
      ctx.fillRect(j * blockWidth, i * blockHeight, blockWidth, blockHeight);
    }
  }

  // Apply a blur effect to the entire canvas
  ctx.filter = 'blur(10px)';
  ctx.drawImage(canvas, 0, 0);
  ctx.filter = 'none'; // Reset the filter
}

// Event listener to handle window resize
window.addEventListener('resize', resizeCanvas);

// Initialize canvas on page load
resizeCanvas();
