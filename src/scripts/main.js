'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', (e) => {
  if (!wall.contains(e.target)) {
    return;
  }

  const wallRect = wall.getBoundingClientRect();
  const x = e.clientX - wallRect.left - wall.clientLeft;
  const y = e.clientY - wallRect.top - wall.clientTop;

  let spiderLeft = x - spider.offsetWidth / 2;
  let spiderTop = y - spider.offsetHeight / 2;

  const maxLeft = wall.clientWidth - spider.offsetWidth;
  const maxTop = wall.clientHeight - spider.offsetHeight;

  spiderLeft = Math.max(0, Math.min(spiderLeft, maxLeft));
  spiderTop = Math.max(0, Math.min(spiderTop, maxTop));

  spider.style.left = `${spiderLeft}px`;
  spider.style.top = `${spiderTop}px`;
});
