'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

document.addEventListener('click', (e) => {
  if (!wall.contains(e.target)) {
    return;
  }

  const wallRect = wall.getBoundingClientRect();
  const borderLeft = wall.clientLeft;
  const borderTop = wall.clientTop;

  let x = e.clientX - wallRect.left - borderLeft - spider.offsetWidth / 2;
  let y = e.clientY - wallRect.top - borderTop - spider.offsetHeight / 2;

  const maxX = wall.clientWidth - spider.offsetWidth;
  const maxY = wall.clientHeight - spider.offsetHeight;

  x = Math.max(0, Math.min(x, maxX));
  y = Math.max(0, Math.min(y, maxY));

  spider.style.left = `${x}px`;
  spider.style.top = `${y}px`;
});
