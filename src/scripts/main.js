'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', (e) => {
  const wallRect = wall.getBoundingClientRect();

  // click coordinates inside the wall content area (borders excluded)
  const x = e.clientX - wallRect.left - wall.clientLeft;
  const y = e.clientY - wallRect.top - wall.clientTop;

  const maxLeft = wall.clientWidth - spider.offsetWidth;
  const maxTop = wall.clientHeight - spider.offsetHeight;

  const spiderLeft = Math.min(Math.max(x - spider.offsetWidth / 2, 0), maxLeft);
  const spiderTop = Math.min(Math.max(y - spider.offsetHeight / 2, 0), maxTop);

  spider.style.left = `${spiderLeft}px`;
  spider.style.top = `${spiderTop}px`;
});
