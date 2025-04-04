'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

document.addEventListener('click', (e) => {
  const xPos = e.clientX;
  const yPos = e.clientY;
  const wallCoords = wall.getBoundingClientRect();
  const spiderCoords = spider.getBoundingClientRect();
  const borderWidth = parseFloat(window.getComputedStyle(wall).borderWidth);

  if (
    xPos >= wallCoords.left &&
    xPos <= wallCoords.right &&
    yPos >= wallCoords.top &&
    yPos <= wallCoords.bottom
  ) {
    let newX = xPos - wallCoords.left - spiderCoords.width / 2 - borderWidth;
    let newY = yPos - wallCoords.top - spiderCoords.height / 2 - borderWidth;

    const minCoords = 0;
    const maxX = wallCoords.width - spiderCoords.width - borderWidth * 2;
    const maxY = wallCoords.height - spiderCoords.height - borderWidth * 2;

    newX = Math.max(minCoords, Math.min(newX, maxX));
    newY = Math.max(minCoords, Math.min(newY, maxY));

    spider.style.top = `${newY}px`;
    spider.style.left = `${newX}px`;
  }
});
