'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const maxTop = wall.clientHeight - spider.offsetHeight;
const maxLeft = wall.clientWidth - spider.offsetWidth;

wall.addEventListener('click', e => {
  let spiderTop = e.clientY - wall.offsetTop - wall.clientTop
    - (spider.offsetHeight / 2);
  let spiderLeft = e.clientX - wall.offsetLeft - wall.clientLeft
  - (spider.offsetWidth / 2);

  if (spiderTop < 0) {
    spiderTop = 0;
  }

  if (spiderTop > maxTop) {
    spiderTop = maxTop;
  }

  if (spiderLeft < 0) {
    spiderLeft = 0;
  }

  if (spiderLeft > maxLeft) {
    spiderLeft = maxLeft;
  }

  spider.style.cssText = `top: ${spiderTop}px;
    left: ${spiderLeft}px;
  `;
});
