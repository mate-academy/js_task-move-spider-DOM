'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', (e) => {
  const x = e.clientX;
  const y = e.clientY;
  const wallRect = wall.getBoundingClientRect();
  let spiderLeft = x - wallRect.left - wall.clientLeft - spider.offsetWidth / 2;
  let spiderTop = y - wallRect.top - wall.clientTop - spider.offsetHeight / 2;

  if (spiderLeft < 0) {
    spiderLeft = 0;
  }

  if (spiderTop < 0) {
    spiderTop = 0;
  }

  if (spiderLeft + spider.offsetWidth > wall.clientHeight) {
    spiderLeft = wall.clientHeight - spider.offsetWidth;
  }

  if (spiderTop + spider.offsetHeight > wall.clientHeight) {
    spiderTop = wall.clientHeight - spider.offsetHeight;
  }

  spider.style.left = spiderLeft + 'px';
  spider.style.top = spiderTop + 'px';
});
