'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', (e) => {
  const wallR = wall.getBoundingClientRect();

  const x = e.clientX;
  const y = e.clientY;

  const wallField = e.target.closest('.wall');

  if (!wallField) {
    return;
  }

  let leftSpider = x - wallR.left - spider.offsetWidth / 2 - wall.clientLeft;
  let topSpider = y - wallR.top - spider.offsetHeight / 2 - wall.clientTop;

  const topMax = wall.clientHeight - spider.offsetHeight;
  const leftMax = wall.clientWidth - spider.offsetWidth;

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

  spider.style.transform = `translate(${leftSpider}px, ${topSpider}px)`;
});
