const canvas = document.getElementById('gradientCanvas');
const ctx = canvas.getContext('2d');

// Resize canvas to fill the window
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  drawShapesQ1();
  drawShapesQ2();
  
}



function drawShapesQ1() {
  // Blur filter
   

  // circle: arc(x, y, radius, startAngle, endAngle)
    ctx.beginPath();
    ctx.arc(100, 75, 250, 0, 2 * Math.PI);
    ctx.fillStyle = gradient1;
    ctx.fill();
    

    ctx.beginPath();
    ctx.arc(400, 95, 200, 0, 2 * Math.PI);
    ctx.fillStyle = gradient3;
    ctx.fill();

    ctx.beginPath();
    ctx.arc(250, 250, 150, 0, 2 * Math.PI);
    ctx.fillStyle = gradient1;
    ctx.fill();

    ctx.beginPath();
    ctx.arc(50, 300, 130, 0, 2 * Math.PI);
    ctx.fillStyle = gradient4;
    ctx.fill();


// ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle)
  //ctx.beginPath();
  //ctx.ellipse(450, 300, 200, 300, 90, 0, Math.PI * 2); 
  //ctx.fillStyle = gradient2;
  //ctx.fill();
  //ctx.lineWidth = 4;


        
}

function drawShapesQ2(){
  // Blur filter
   

   // aqua
   ctx.beginPath();
   ctx.ellipse(450, 50, 100, 175, 300, 0, Math.PI * 2); 
   ctx.fillStyle = gradient7;
   ctx.fill();
 

   // purple
  ctx.beginPath();
  ctx.ellipse(575, 50, 150, 200, 75, 0, Math.PI * 2); 
  ctx.fillStyle = gradient8;
  ctx.fill();

   // purple
  ctx.beginPath();
  ctx.ellipse(600, 50, 75, 200, 75, 0, Math.PI * 2); 
  ctx.fillStyle = gradient5;
  ctx.fill();
  
  // yellow
  ctx.beginPath();
  ctx.ellipse(725, 50, 75, 150, 90, 0, Math.PI * 2); 
  ctx.fillStyle = gradient9;
  ctx.fill();

  // purple
  ctx.beginPath();
  ctx.ellipse(800, 50, 75, 150, 90, 0, Math.PI * 2); 
  ctx.fillStyle = gradient10;
  ctx.fill();
  
  

  // green
  ctx.beginPath();
  ctx.ellipse(1200, 50, 100, 200, 360, 0, Math.PI * 2); 
  ctx.fillStyle = gradient6;
  ctx.fill();
}

// Gradient Constants Q1
const gradient1 = ctx.createLinearGradient(0, 0, canvas.width, 0);
gradient1.addColorStop(0, '#cbaf4e'); // Start color
gradient1.addColorStop(1, '#7fd95c'); // End color

const gradient2 = ctx.createLinearGradient(100, 300, canvas.width, 0);
gradient2.addColorStop(0, '#ffffff'); // Start color
gradient2.addColorStop(1, '#000000'); // End color

const gradient3 = ctx.createLinearGradient(100, 300, canvas.width, 0);
gradient3.addColorStop(0, '#76c588'); // Start color
gradient3.addColorStop(1, '#76c588'); // End color

const gradient4 = ctx.createLinearGradient(100, 300, canvas.width, 0);
gradient4.addColorStop(0, '#c99e61'); // Start color
gradient4.addColorStop(1, '#aa8b71'); // End color



// Gradient Constants Q2
const gradient5 = ctx.createLinearGradient(100, 300, canvas.width, 0);
gradient5.addColorStop(0, '#798a96'); // Start color
gradient5.addColorStop(1, '#837089'); // End color

const gradient6 = ctx.createLinearGradient(100, 300, canvas.width, 0);
gradient6.addColorStop(0, '#6da05e'); // Start color
gradient6.addColorStop(1, '#55c144');

const gradient7 = ctx.createLinearGradient(10, 30, canvas.width, 0);
gradient7.addColorStop(0, '#9cffbd'); // Start color
gradient7.addColorStop(1, '#9cffbd');

const gradient8 = ctx.createLinearGradient(10, 30, canvas.width, 0);
gradient8.addColorStop(0, '#c28bff'); // Start color
gradient8.addColorStop(1, '#c28bff');

const gradient9 = ctx.createLinearGradient(10, 30, canvas.width, 0);
gradient9.addColorStop(0, '#acac45'); // Start color
gradient9.addColorStop(1, '#acac45');

const gradient10 = ctx.createLinearGradient(10, 30, canvas.width, 0);
gradient10.addColorStop(0, '#acac45'); // Start color
gradient10.addColorStop(1, '#9c26c4');






// Gradient Constants Q3


// Gradient Constants Q4





// Event listener to handle window resize
window.addEventListener('resize', resizeCanvas);

// Initialize canvas on page load
resizeCanvas();
    

