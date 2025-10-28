'use strict';

document.addEventListener('click', (e) => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');
  const wallRect = wall.getBoundingClientRect();

  if (!e.target.closest('.wall')) {
    return;
  }

  const x =
    e.clientX - wallRect.left - spider.clientWidth / 2 - wall.clientLeft;
  const y = e.clientY - wallRect.top - spider.clientHeight / 2 - wall.clientTop;

  spider.style.top = `${Math.max(0, Math.min(y, wall.clientHeight - spider.clientHeight))}px`;
  spider.style.left = `${Math.max(0, Math.min(x, wall.clientWidth - spider.clientWidth))}px`;
});
