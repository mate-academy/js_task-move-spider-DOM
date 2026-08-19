'use strict';

const wall = document.querySelector('.wall');

// const borderWallTop= wall.offsetTop + wall.clientTop;
// const borderWallLeft = wall.offsetLeft + wall.clientLeft;
// const borderWallRight = wall.clientWidth;
// const borderWallBottom = wall.offsetTop + wall.clientTop + wall.clientHeight;

// //console.log('borderWallTop', borderWallTop);
// //console.log('borderWallLeft', borderWallLeft);
// console.log('borderWallRight', borderWallRight);
// console.log('borderWallBottom', borderWallBottom);

const spider = document.querySelector('.spider');

// console.log('wall.offset',wall.offsetLeft, wall.offsetTop);
// console.log(window.scrollX, window.scrollY);
// console.log('wall.client', wall.clientLeft, wall.clientTop);
// console.log('wall.clientWH', wall.clientWidth, wall.clientHeight);

// console.log('wall', wall.getBoundingClientRect());

wall.addEventListener('click', (e) => {
  const wallRect = wall.getBoundingClientRect();

  let leftForSpider =
    e.clientX - wall.clientLeft - spider.clientWidth / 2 - wallRect.left;

  let topForSpider =
    e.clientY - wall.clientTop - spider.clientHeight / 2 - wallRect.top;

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
