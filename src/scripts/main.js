'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', (e) => {
  const x = e.clientX;
  const y = e.clientY;
  const spiderW = spider.offsetWidth;
  const spiderH = spider.offsetHeight;
  const wallW = wall.clientWidth;
  const wallH = wall.clientHeight;
  const wallRect = wall.getBoundingClientRect();
  let spiderLeft = x - wallRect.left - wall.clientLeft - spiderW / 2;
  let spiderTop = y - wallRect.top - wall.clientTop - spiderH / 2;

  if (spiderLeft < 0) {
    spiderLeft = 0;
  }

  if (spiderTop < 0) {
    spiderTop = 0;
  }

  if (spiderLeft + spiderW > wallW) {
    spiderLeft = wallW - spiderW;
  }

  if (spiderTop + spiderH > wallH) {
    spiderTop = wallH - spiderH;
  }

  spider.style.left = spiderLeft + 'px';
  spider.style.top = spiderTop + 'px';
});
