'use strict';

document.addEventListener('click', e => {
  const wall = document.querySelector('.wall');

  const element = document.elementFromPoint(e.clientX, e.clientY);

  if (element === wall) {
    const spider = document.querySelector('.spider');

    const maxX = wall.clientWidth - spider.clientWidth;
    const maxY = wall.clientHeight - spider.clientHeight;

    const posX = e.offsetX - spider.clientWidth / 2;
    const posY = e.offsetY - spider.clientHeight / 2;

    spider.style.top = `${Math.max(0, Math.min(maxY, posY))}px`;
    spider.style.left = `${Math.max(0, Math.min(maxX, posX))}px`;
  }
});
