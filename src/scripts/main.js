'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('img.spider');

wall.addEventListener('click', (e) => {
  if (e.target !== wall) {
    return;
  }

  const clickY = e.offsetY;
  const clickX = e.offsetX;

  const maxX = wall.clientWidth - spider.clientWidth;
  const maxY = wall.clientHeight - spider.clientHeight;

  const coordX = Math.max(0, Math.min(clickX - spider.clientWidth / 2, maxX));
  const coordY = Math.max(0, Math.min(clickY - spider.clientHeight / 2, maxY));

  spider.style.top = `${coordY}px`;
  spider.style.left = `${coordX}px`;
});
