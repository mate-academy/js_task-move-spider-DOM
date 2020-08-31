'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

document.addEventListener('click', event => {
  if (event.target !== wall) {
    return;
  }

  const spiderSize = window.getComputedStyle(spider).width.slice(0, -2);
  const wallWidth = window.getComputedStyle(wall).width.slice(0, -2);
  const wallHeight = window.getComputedStyle(wall).height.slice(0, -2);
  const maxValueX = wallWidth - spiderSize;
  const maxValueY = wallHeight - spiderSize;

  if (event.offsetX >= maxValueX + spiderSize / 2) {
    spider.style.left = `${maxValueX}px`;
  } else if (event.offsetX <= spiderSize) {
    spider.style.left = `0px`;
  } else {
    spider.style.left = `${event.offsetX - spiderSize / 2}px`;
  }

  if (event.offsetY >= maxValueY + spiderSize / 2) {
    spider.style.top = `${maxValueY}px`;
  } else if (event.offsetY <= spiderSize) {
    spider.style.top = `0px`;
  } else {
    spider.style.top = `${event.offsetY - spiderSize / 2}px`;
  }
});
