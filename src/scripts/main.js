'use strict';

document.addEventListener('click', e => {
  // write code here
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');
  const spiderSizes = spider.getBoundingClientRect();
  const wallSizes = wall.getBoundingClientRect();
  const border = parseFloat(getComputedStyle(wall).borderWidth);
  const clickArea = e.target.closest('.wall');

  if (!clickArea) {
    return;
  }

  spider.style.left = `${
    e.clientX
    - wall.offsetLeft
    - spiderSizes.width / 2
    - border
    + window.pageXOffset
  }px`;

  const spiderLeftEdge = parseFloat(spider.style.left);
  const leftLimit = wallSizes.width - spiderSizes.width - border * 2;

  if (spiderLeftEdge < 0) {
    spider.style.left = '0px';
  }

  if (spiderLeftEdge > leftLimit) {
    spider.style.left = `${leftLimit}px`;
  }

  spider.style.top = `${
    e.clientY
    - wall.offsetTop
    - spiderSizes.height / 2
    - border
    + window.pageYOffset
  }px`;

  const spiderTopEdge = parseFloat(spider.style.top);
  const bottomLimit = wallSizes.height - spiderSizes.height - border * 2;

  if (spiderTopEdge < 0) {
    spider.style.top = '0px';
  }

  if (spiderTopEdge > bottomLimit) {
    spider.style.top = `${bottomLimit}px`;
  }
});
