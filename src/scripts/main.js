'use strict';

document.addEventListener('click', e => {
  // write code here
  const clickArea = e.target.closest('.wall');
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');
  const xLimit = wall.offsetWidth - spider.offsetWidth - wall.clientLeft * 2;
  const yLimit = wall.offsetHeight - spider.offsetHeight - wall.clientTop * 2;

  if (!clickArea) {
    return;
  }

  spider.style.left = `${
    e.clientX
    - wall.offsetLeft
    - wall.clientLeft
    - spider.offsetWidth / 2
    + window.pageXOffset
  }px`;

  if (parseFloat(spider.style.left) < 0) {
    spider.style.left = '0px';
  }

  if (parseFloat(spider.style.left) > xLimit) {
    spider.style.left = `${xLimit}px`;
  }

  spider.style.top = `${
    e.clientY
    - wall.offsetTop
    - wall.clientTop
    - spider.offsetHeight / 2
    + window.pageYOffset
  }px`;

  if (parseFloat(spider.style.top) < 0) {
    spider.style.top = '0px';
  }

  if (parseFloat(spider.style.top) > yLimit) {
    spider.style.top = `${yLimit}px`;
  }
});
