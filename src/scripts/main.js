'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');
const BORDER = 10;

wall.addEventListener('click', (e) => {
  const wallRect = wall.getBoundingClientRect();
  const spiderRect = spider.getBoundingClientRect();
  const centerOfSpider = Math.round((spiderRect.width * Math.sqrt(2)) / 2);

  let x = e.clientX - wallRect.left - centerOfSpider;
  let y = e.clientY - wallRect.top - centerOfSpider;

  if (x < 0) {
    x = 0;
  }

  if (y < 0) {
    y = 0;
  }

  if (x > wallRect.width - spiderRect.width) {
    x = wallRect.width - spiderRect.width - BORDER * 2;
  }

  if (y > wallRect.height - spiderRect.height) {
    y = wallRect.height - spiderRect.height - BORDER * 2;
  }

  if (e.target === wall) {
    spider.style.cssText = `left: ${x}px; top: ${y}px`;
  }
});
