'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

document.addEventListener('click', event => {
  if (event.target !== wall) {
    return;
  }

  const spiderSize = window.getComputedStyle(spider).width.slice(0, -2);
  const wallSize = window.getComputedStyle(wall).width.slice(0, -2);
  const maxValue = wallSize - spiderSize;

  if (event.offsetX >= maxValue + spiderSize / 2) {
    spider.style.left = `${maxValue}px`;
  } else if (event.offsetX <= spiderSize) {
    spider.style.left = `0px`;
  } else {
    spider.style.left = `${event.offsetX - spiderSize / 2}px`;
  }

  if (event.offsetY >= maxValue + spiderSize / 2) {
    spider.style.top = `${maxValue}px`;
  } else if (event.offsetY <= spiderSize) {
    spider.style.top = `0px`;
  } else {
    spider.style.top = `${event.offsetY - spiderSize / 2}px`;
  }
});
