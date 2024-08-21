'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');
const wallRect = wall.getBoundingClientRect();
const wallBorder = parseInt(getComputedStyle(wall).border);

document.addEventListener('click', (e) => {
  const maxLeft = wall.offsetWidth - spider.offsetWidth - wallBorder * 2;
  const maxTop = wall.offsetHeight - spider.offsetWidth - wallBorder * 2;

  const spiderLeft =
    e.clientX - wallRect.x - wallBorder - spider.offsetWidth / 2;
  const spiderTop =
    e.clientY - wallRect.y - wallBorder - spider.offsetHeight / 2;

  if (e.target === wall) {
    spider.style.left = `${Math.min(Math.max(spiderLeft, 0), maxLeft)}px`;
    spider.style.top = `${Math.min(Math.max(spiderTop, 0), maxTop)}px`;
  }
});
