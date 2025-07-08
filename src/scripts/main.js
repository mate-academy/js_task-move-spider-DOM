'use strict';

document.addEventListener('click', (e) => {
  const wall = e.target.closest('.wall');

  if (!wall) {
    return;
  }

  const spider = wall.querySelector('.spider');

  if (!spider) {
    return;
  }

  const wallRect = wall.getBoundingClientRect();
  const border = parseFloat(getComputedStyle(wall).borderLeftWidth);
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  let newPositionX = mouseX - wallRect.x - spider.offsetWidth / 2 - border;
  let newPositionY = mouseY - wallRect.y - spider.offsetHeight / 2 - border;

  newPositionX = Math.max(
    0,
    Math.min(newPositionX, wall.clientWidth - spider.offsetWidth),
  );

  newPositionY = Math.max(
    0,
    Math.min(newPositionY, wall.clientHeight - spider.offsetHeight),
  );

  spider.style.left = `${newPositionX}px`;
  spider.style.top = `${newPositionY}px`;
});
