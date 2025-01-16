// define canvas, ctx, and load svg
const canvas = document.getElementById('gradientCanvas');
const ctx = canvas.getContext('2d');
const svgImage = new Image();
svgImage.src = 'Untitled-7-01 (1).svg'; // Replace with your SVG file path

// Hue increment

let hueDegree = 0; // Start the hue at 0 degrees
const hueIncrement = 1; // Change in hue degree per frame

// SVG

svgImage.onload = () => {
  // Function to animate the hue rotation
  function animateHueRotation() {
    // Clear the canvas before redrawing
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Apply the hue-rotate filter and blur filter
    ctx.filter = `hue-rotate(${hueDegree}deg) blur(5px)`;

    // Save the current state of the canvas
    ctx.save();

    // Set the origin of the rotation (center of the canvas)
    ctx.translate(canvas.width / 2, canvas.height / 2);

    // Rotate the canvas
    ctx.rotate(270 * Math.PI / 180); // 270 degrees in radians

    // Scale the image (set the scaling factor)
    ctx.scale(0.3, 0.45); // Scale 0.3 in X and 0.45 in Y axes

    // Draw the image (use negative width and height to position the center correctly)
    ctx.drawImage(svgImage, -svgImage.width / 2, -svgImage.height / 2);

    // Restore the canvas to its original state
    ctx.restore();

    // Increment the hue and ensure it loops within the 360 degrees
    hueDegree = (hueDegree + hueIncrement) % 360;

    // Request next frame for continuous animation
    requestAnimationFrame(animateHueRotation);
  }

  // Start the animation loop
  animateHueRotation();
};

const cards = document.querySelectorAll('.card');

cards.forEach((card) => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (centerY - y) / 10;
    const rotateY = (x - centerX) / 10;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.1)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'rotateX(0) rotateY(0) scale(1)';
  });
});

const slides = document.querySelector('.carousel-slides');
const slideCount = document.querySelectorAll('.slide').length;
let currentIndex = 0;

document.getElementById('prev').addEventListener('click', () => {
  currentIndex = (currentIndex > 0) ? currentIndex - 1 : slideCount - 1;
  updateCarousel();
});

document.getElementById('next').addEventListener('click', () => {
  currentIndex = (currentIndex < slideCount - 1) ? currentIndex + 1 : 0;
  updateCarousel();
});

function updateCarousel() {
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}