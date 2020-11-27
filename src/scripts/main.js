'use strict';

document.addEventListener('click', e => {
  // write code here
  const wallElement = e.target.closest('.wall');

  if (!wallElement) {
    return;
  }

  const wallPosition = wallElement.getBoundingClientRect();

  const wallWidthBorder = wallElement.clientLeft;

  const wallPositionX = wallPosition.x + wallWidthBorder;
  const wallPositionY = wallPosition.y + wallWidthBorder;

  const spiderElement = wallElement.querySelector('.spider');

  let x = event.clientX - wallPositionX - spiderElement.clientWidth / 2;
  let y = event.clientY - wallPositionY - spiderElement.clientHeight / 2;

  const maxX = wallElement.clientWidth - spiderElement.clientWidth;
  const maxY = wallElement.clientHeight - spiderElement.clientHeight;

  if (x < 0) {
    x = 0;
  } else if (x > maxX) {
    x = maxX;
  }

  if (y < 0) {
    y = 0;
  } else if (y > maxY) {
    y = maxY;
  }

  spiderElement.style.left = `${x}px`;
  spiderElement.style.top = `${y}px`;
});
