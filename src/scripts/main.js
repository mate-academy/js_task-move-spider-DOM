'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

document.addEventListener('click', (e) => {
  const wallRect = wall.getBoundingClientRect();

  const wallCenterX = wallRect.left + wallRect.width / 2;
  const wallCenterY = wallRect.top + wallRect.height / 2;

  let leftCoord = e.clientX - wallCenterX;
  let topCoord = e.clientY - wallCenterY;

  const maxX = wall.clientWidth / 2 - spider.offsetWidth / 2;
  const maxY = wall.clientHeight / 2 - spider.offsetHeight / 2;

  // Не рухаємо павука, якщо клік поза стіною
  if (
    e.clientX < wallRect.left ||
    e.clientX > wallRect.right ||
    e.clientY < wallRect.top ||
    e.clientY > wallRect.bottom
  ) {
    return;
  }

  leftCoord = Math.max(-maxX, Math.min(leftCoord, maxX));
  topCoord = Math.max(-maxY, Math.min(topCoord, maxY));

  spider.style.left = `${wall.clientWidth / 2 - spider.offsetWidth / 2 + leftCoord}px`;
  spider.style.top = `${wall.clientHeight / 2 - spider.offsetHeight / 2 + topCoord}px`;
});
