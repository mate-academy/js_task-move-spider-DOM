'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', (e) => {
  if (e.target !== wall) {
    return;
  }

  const maxX = wall.clientWidth - spider.clientWidth;
  const maxY = wall.clientHeight - spider.clientHeight;

  const xPosition = e.offsetX - spider.clientWidth / 2;
  const yPosition = e.offsetY - spider.clientHeight / 2;

  const x = Math.max(0, Math.min(xPosition, maxX));
  const y = Math.max(0, Math.min(yPosition, maxY));

  spider.style.top = `${y}px`;
  spider.style.left = `${x}px`;
});
