'use strict';

{
  const canvas = document.getElementById('gameCanvas');
  const ctx = canvas.getContext('2d');

  const fishImage = new Image();
  fishImage.src = 'image/ayu.png';           

  const fishWidth = 80;
  const fishHeight = 80;

  let fishX = Math.random() * (canvas.width - fishWidth);
  let fishY = Math.random() * (canvas.height - fishHeight);

  function drawfish() {
    ctx.drawImage(fishImage, fishX, fishY, fishWidth, fishHeight);
  }

  const scoreElement = document.getElementById('score');
  let score = 0;

  function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawfish();
    requestAnimationFrame(gameLoop);
  }

  canvas.addEventListener('click', (e) => {
    const mouseX = e.clientX - canvas.offsetLeft;
    const mouseY = e.clientY - canvas.offsetTop;

    if(mouseX >= fishX && mouseX <= fishX + fishWidth && mouseY >= fishY && mouseY
    <= fishY + fishHeight) {
    score++;
    scoreElement.textContent = score;
    fishX = Math.random() * (canvas.width - fishWidth);
    fishY = Math.random() * (canvas.height - fishHeight);
  }
});

gameLoop();
}