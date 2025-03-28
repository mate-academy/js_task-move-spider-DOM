'use strict';

document.addEventListener('click', (e) => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  const wallCoords = wall.getBoundingClientRect();
  const spiderCoords = spider.getBoundingClientRect();

  const borderWidth = parseFloat(window.getComputedStyle(wall).borderWidth);

  const mouseX = e.pageX;
  const mouseY = e.pageY;

  if (
    mouseX >= wallCoords.left &&
    mouseX <= wallCoords.right &&
    mouseY >= wallCoords.top &&
    mouseY <= wallCoords.bottom
  ) {
    let newX = mouseX - wallCoords.left - spiderCoords.width / 2 - borderWidth;
    let newY = mouseY - wallCoords.top - spiderCoords.height / 2 - borderWidth;

    const minCoord = 0;
    const maxX = wallCoords.width - spiderCoords.width - borderWidth * 2;
    const maxY = wallCoords.height - spiderCoords.height - borderWidth * 2;

    newX = Math.max(minCoord, Math.min(newX, maxX));
    newY = Math.max(minCoord, Math.min(newY, maxY));

    spider.style.left = newX + 'px';
    spider.style.top = newY + 'px';
  }
});
