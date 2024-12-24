const canvas = document.getElementById('gradientCanvas');
const ctx = canvas.getContext('2d');

// Set canvas dimensions to full window size
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    drawGradient();
}

// Function to draw a gradient
function drawGradient() {
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);

    // Define color stops
    gradient.addColorStop(0, '#ff7eb3'); // Light Pink
    gradient.addColorStop(0.5, '#65d6ce'); // Aqua Blue
    gradient.addColorStop(1, '#ffeb3b'); // Yellow

    // Apply gradient as fill style
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

// Event listener to handle window resize
window.addEventListener('resize', resizeCanvas);

// Initialize canvas on page load
resizeCanvas();