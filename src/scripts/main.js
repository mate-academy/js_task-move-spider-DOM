'use strict';

const spider = document.querySelector('.spider');

document.addEventListener('click', (e) => {
  const wall = e.target.closest('.wall');

  if (!wall) {
    return;
  }

  const wallRect = wall.getBoundingClientRect();

  const rawX =
    e.clientX - wallRect.left - wall.clientLeft - spider.offsetWidth / 2;
  const rawY =
    e.clientY - wallRect.top - wall.clientTop - spider.offsetHeight / 2;

  const maxX = wall.clientWidth - spider.offsetWidth;
  const maxY = wall.clientHeight - spider.offsetHeight;

  const x = Math.min(Math.max(rawX, 0), maxX);
  const y = Math.min(Math.max(rawY, 0), maxY);

  spider.style.left = `${x}px`;
  spider.style.top = `${y}px`;
});
