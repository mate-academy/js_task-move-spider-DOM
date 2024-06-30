'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

wall.addEventListener('click', (e) => {
  if (!wall.contains(e.target)) {
    return;
  }

  const maxX = wall.clientWidth - spider.clientWidth;
  const maxY = wall.clientHeight - spider.clientHeight;

  const xPos = e.offsetX - spider.clientWidth / 2;
  const yPos = e.offsetY - spider.clientHeight / 2;

  const x = Math.max(0, Math.min(xPos, maxX));
  const y = Math.max(0, Math.min(yPos, maxY));

  spider.style.left = `${x}px`;
  spider.style.top = `${y}px`;
});
