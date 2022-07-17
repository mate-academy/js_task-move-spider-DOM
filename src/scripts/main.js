'use strict';

document.addEventListener('click', e => {
  if (e.target !== wall) {
    return;
  }

  const spiderDiagonal = spider.clientWidth / 2;
  const topPosition = e.offsetY - spiderDiagonal;
  const leftPosition = e.offsetX - spiderDiagonal;

  spider.style.top = `${
    e.offsetY < spiderDiagonal
      ? 0
      : e.offsetY > wall.clientHeight - spiderDiagonal
        ? wall.clientHeight - spider.clientHeight
        : topPosition
  }px`;

  spider.style.left = `${
    e.offsetX < spiderDiagonal
      ? 0
      : e.offsetX > wall.clientWidth - spiderDiagonal
        ? wall.clientWidth - spider.clientWidth
        : leftPosition
  }px`;
});

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');
