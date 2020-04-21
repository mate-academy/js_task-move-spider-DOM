'use strict';

document.addEventListener('click', e => {
  const wallElement = e.target.closest('.wall');

  if (!wallElement) {
    return;
  }

  const wallPosition = wallElement.getBoundingClientRect();

  const wallWidthBorder = wallElement.clientLeft;

  const wallX = wallPosition.x + wallWidthBorder;
  const wallY = wallPosition.y + wallWidthBorder;

  const spider = wallElement.querySelector('.spider');

  let x = event.clientX - wallX - spider.clientWidth / 2;
  let y = event.clientY - wallY - spider.clientHeight / 2;

  const maxX = wallElement.clientWidth - spider.clientWidth;
  const maxY = wallElement.clientHeight - spider.clientHeight;

  if (x < 0) {
    x = 0;
  }

  if (x > maxX) {
    x = maxX;
  }

  if (y < 0) {
    y = 0;
  }

  if (y > maxY) {
    y = maxY;
  }

  spider.style.left = `${x}px`;
  spider.style.top = `${y}px`;
});
