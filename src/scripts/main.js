'use strict';

document.addEventListener('click', (e) => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  const wallCoords = wall.getBoundingClientRect();
  const spiderCoords = spider.getBoundingClientRect();

  const blocWidth = parseFloat(window.getComputedStyle(wall).borderWidth);

  const mouseX = e.clientX;
  const mouseY = e.clientY;

  if (
    mouseX >= wallCoords.left &&
    mouseX <= wallCoords.right &&
    mouseY >= wallCoords.top &&
    mouseY <= wallCoords.bottom
  ) {
    let newX = mouseX - wallCoords.left - spiderCoords.width / 2 - blocWidth;
    let newY = mouseY - wallCoords.top - spiderCoords.height / 2 - blocWidth;

    const minCoord = 0;
    const maxX = wallCoords.width - spiderCoords.width - blocWidth * 2;
    const maxY = wallCoords.height - spiderCoords.height - blocWidth * 2;

    newX = Math.max(minCoord, Math.min(newX, maxX));
    newY = Math.max(minCoord, Math.min(newY, maxY));

    spider.style.left = newX + 'px';
    spider.style.top = newY + 'px';
  }
});
