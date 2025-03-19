'use strict';

document.addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  const wallRect = wall.getBoundingClientRect();
  const spiderRect = spider.getBoundingClientRect();

  const borderWidth = parseFloat(window.getComputedStyle(wall).borderLeftWidth);

  const clickX = e.clientX;
  const clickY = e.clientY;

  if (
    clickX >= wallRect.left &&
    clickX <= wallRect.right &&
    clickY >= wallRect.top &&
    clickY <= wallRect.bottom
  ) {
    let newLeft = clickX - wallRect.left - spiderRect.width / 2 - borderWidth;
    let newTop = clickY - wallRect.top - spiderRect.height / 2 - borderWidth;

    const minCoord = 0;
    const maxCoordX = wallRect.width - spiderRect.width - borderWidth * 2;
    const maxCoordY = wallRect.height - spiderRect.height - borderWidth * 2;

    newLeft = Math.max(minCoord, Math.min(newLeft, maxCoordX));
    newTop = Math.max(minCoord, Math.min(newTop, maxCoordY));

    spider.style.left = `${newLeft}px`;
    spider.style.top = `${newTop}px`;
  }
});
