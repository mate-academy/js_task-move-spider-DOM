'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', (e) => {
  const wallRect = wall.getBoundingClientRect();
  const spiderRect = spider.getBoundingClientRect();
  const x = e.clientX;
  const y = e.clientY;

  const wallField = e.target.closest('.wall');

  if (!wallField) {
    return;
  }

  let leftSpider = x - wallRect.left - spiderRect.width / 2 - wall.clientLeft;
  let topSpider = y - wallRect.top - spiderRect.height / 2 - wall.clientTop;
  const topMax = wall.clientHeight - spider.clientHeight;
  const leftMax = wall.clientWidth - spider.clientWidth;

  if (topSpider < 0) {
    topSpider = 0;
  }

  if (topSpider > topMax) {
    topSpider = topMax;
  }

  if (leftSpider < 0) {
    leftSpider = 0;
  }

  if (leftSpider > leftMax) {
    leftSpider = leftMax;
  }

  spider.style.left = leftSpider + 'px';
  spider.style.top = topSpider + 'px';
});
