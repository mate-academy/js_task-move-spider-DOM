'use strict';

document.addEventListener('click', e => {
  const wall = document.querySelector('.wall');

  const item = document.elementFromPoint(e.clientX, e.clientY);

  if (item === wall) {
    const spider = document.querySelector('.spider');

    const maximumX = wall.clientWidth - spider.clientWidth;
    const maximumY = wall.clientHeight - spider.clientHeight;

    const positionX = e.offsetX - spider.clientWidth / 2;
    const positionY = e.offsetY - spider.clientHeight / 2;

    spider.style.top = `${Math.max(0, Math.min(maximumY, positionY))}px`;
    spider.style.left = `${Math.max(0, Math.min(maximumX, positionX))}px`;
  }
});
