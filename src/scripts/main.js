'use strict';

document.addEventListener('click', e => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  if (e.target === wall) {
    const {
      offsetX,
      offsetY,
    } = e;

    const maxX = wall.clientWidth - spider.clientWidth;
    const maxY = wall.clientHeight - spider.clientHeight;

    const x = Math.min(Math.max(
      offsetX - spider.clientWidth / 2, 0,
    ), maxX);

    const y = Math.min(Math.max(
      offsetY - spider.clientHeight / 2, 0,
    ), maxY);

    spider.style.top = `${y}px`;
    spider.style.left = `${x}px`;
  }
});
