'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const topGap = wall.offsetTop + wall.clientTop;
const leftGap = wall.offsetLeft + wall.clientLeft;
const spiderHalf = spider.offsetWidth * 0.5;

wall.addEventListener('click', e => {
  let spiderTop = e.clientY - topGap - spiderHalf;
  let spiderLeft = e.clientX - leftGap - spiderHalf;

  if (spiderTop > wall.clientHeight - spider.offsetHeight) {
    spiderTop = wall.clientHeight - spider.offsetHeight;
  }

  if (spiderTop < 0) {
    spiderTop = 0;
  }

  if (spiderLeft > wall.clientWidth - spider.offsetWidth) {
    spiderLeft = wall.clientWidth - spider.offsetWidth;
  }

  if (spiderLeft < 0) {
    spiderLeft = 0;
  }

  spider.style.top = `${spiderTop}px`;
  spider.style.left = `${spiderLeft}px`;
});
