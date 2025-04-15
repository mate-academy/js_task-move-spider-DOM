'use strict';

const clamp = (value, min, max) => {
  return Math.max(min, Math.min(value, max));
};

document.addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');
  const wallRect = wall.getBoundingClientRect();
  const spiderRect = spider.getBoundingClientRect();

  if (e.target !== wall) {
    return;
  }

  const cursorTop = e.clientY;
  const cursorLeft = e.clientX;

  const wallBorder = parseInt(window.getComputedStyle(wall).borderWidth, 10);

  const calcX = cursorLeft - wallRect.x - wallBorder - spiderRect.width / 2;
  const calcY = cursorTop - wallRect.y - wallBorder - spiderRect.height / 2;

  const coordX = clamp(calcX, 0, wall.clientWidth - spider.clientWidth);
  const coordY = clamp(calcY, 0, wall.clientHeight - spider.clientHeight);

  spider.style.top = `${coordY}px`;
  spider.style.left = `${coordX}px`;
});
