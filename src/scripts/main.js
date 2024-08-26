'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

wall.addEventListener('click', (e) => {
  const wallBorder = parseInt(getComputedStyle(wall).border);
  const wallRect = wall.getBoundingClientRect();

  let spiderLeft = e.clientX - wallRect.x - wallBorder - spider.offsetWidth / 2;
  let spiderTop = e.clientY - wallRect.y - wallBorder - spider.offsetHeight / 2;

  const maxLeft = wall.offsetWidth - spider.offsetWidth - wallBorder * 2;
  const maxTop = wall.offsetHeight - spider.offsetHeight - wallBorder * 2;

  spiderLeft = Math.min(Math.max(spiderLeft, 0), maxLeft);

  spiderTop = Math.min(Math.max(spiderTop, 0), maxTop);

  spider.style.left = `${spiderLeft}px`;
  spider.style.top = `${spiderTop}px`;
});
