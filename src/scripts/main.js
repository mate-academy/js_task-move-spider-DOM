'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', (e) => {
  // write code here
  if (e.target !== wall) {
    return;
  }

  const maxY = wall.clientHeight - spider.clientHeight;
  const maxX = wall.clientWidth - spider.clientWidth;

  const yPos = e.offsetY - spider.clientHeight / 2;
  const xPos = e.offsetX - spider.clientWidth / 2;

  const y = Math.max(0, Math.min(maxY, yPos));
  const x = Math.max(0, Math.min(maxX, xPos));

  spider.style.top = `${y}px`;
  spider.style.left = `${x}px`;
});
