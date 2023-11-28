'use strict';

document.addEventListener('click', e => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  if (e.target !== wall) {
    return;
  }

  const offsetX = e.offsetX - spider.clientWidth / 2;
  const offsetY = e.offsetY - spider.clientHeight / 2;

  const maxX = wall.clientWidth - spider.clientWidth;
  const maxY = wall.clientHeight - spider.clientHeight;

  const clientX = Math.max(0, Math.min(maxX, offsetX));
  const clientY = Math.max(0, Math.min(maxY, offsetY));

  spider.style.left = `${clientX}px`;
  spider.style.top = `${clientY}px`;
});
