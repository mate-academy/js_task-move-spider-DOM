'use strict';

document.addEventListener('click', e => {
  // write code here
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  const y = e.offsetY - spider.clientHeight / 2;
  const x = e.offsetX - spider.clientWidth / 2;

  const minY = spider.clientHeight / 2;
  const maxY = wall.clientHeight - spider.clientHeight / 2;

  const minX = spider.clientWidth / 2;
  const maxX = wall.clientWidth - spider.clientWidth / 2;

  const bottom = wall.clientHeight - spider.clientHeight;
  const right = wall.clientWidth - spider.clientWidth;

  if (e.target === wall) {
    spider.style.top = `${y}px`;
    spider.style.left = `${x}px`;

    if (e.offsetY < minY) {
      spider.style.top = 0;
    }

    if (e.offsetY > maxY) {
      spider.style.top = `${bottom}px`;
    }

    if (e.offsetX < minX) {
      spider.style.left = 0;
    }

    if (e.offsetX > maxX) {
      spider.style.left = `${right}px`;
    }
  }
});
