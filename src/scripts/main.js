'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', (e) => {
  const wallRect = wall.getBoundingClientRect();

  let leftForSpider =
    e.clientX - wallRect.left - wall.clientLeft - spider.clientWidth / 2;

  let topForSpider =
    e.clientY - wallRect.top - wall.clientTop - spider.clientHeight / 2;

  const rightForSpider = leftForSpider + spider.clientWidth;
  const bottomForSpider = topForSpider + spider.clientHeight;

  if (topForSpider < 0) {
    topForSpider = 0;
  }

  if (leftForSpider < 0) {
    leftForSpider = 0;
  }

  if (rightForSpider > wall.clientWidth) {
    leftForSpider = wall.clientWidth - spider.clientWidth;
  }

  if (bottomForSpider > wall.clientHeight) {
    topForSpider = wall.clientHeight - spider.clientHeight;
  }

  spider.style.left = `${leftForSpider}px`;
  spider.style.top = `${topForSpider}px`;
});
