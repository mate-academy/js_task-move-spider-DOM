'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', (e) => {
  const wallRect = wall.getBoundingClientRect();

  let spiderLeft =
    e.clientX - wallRect.left - wall.clientLeft - spider.offsetWidth / 2;
  let spiderTop =
    e.clientY - wallRect.top - wall.clientTop - spider.offsetHeight / 2;

  const maxLeft = wall.clientWidth - spider.offsetWidth;
  const maxTop = wall.clientHeight - spider.offsetHeight;

  spiderLeft = Math.max(0, Math.min(spiderLeft, maxLeft));
  spiderTop = Math.max(0, Math.min(spiderTop, maxTop));

  spider.style.left = `${spiderLeft}px`;
  spider.style.top = `${spiderTop}px`;
});
