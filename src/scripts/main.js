'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const topGap = wall.offsetTop + wall.clientTop;
const leftGap = wall.offsetLeft + wall.clientLeft;
const spiderHalf = spider.offsetWidth / 2;

wall.addEventListener('click', event => {
  let spiderTop = event.clientY - topGap - spiderHalf;
  let spiderLeft = event.clientX - leftGap - spiderHalf;

  if (spiderTop > wall.clientHeight - spider.offsetHeight) {
    spiderTop = wall.clientHeight - spider.offsetHeight;
  };

  if (spiderTop < 0) {
    spiderTop = 0;
  }

  if (spiderLeft > wall.clientWidth - spider.offsetWidth) {
    spiderLeft = wall.clientWidth - spider.offsetWidth;
  }

  if (spiderLeft < 0) {
    spiderLeft = 0;
  }

  spider.style.top = spiderTop + 'px';
  spider.style.left = spiderLeft + 'px';
});
