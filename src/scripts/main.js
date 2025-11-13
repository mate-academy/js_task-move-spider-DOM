'use strict';

document.addEventListener('click', (e) => {
  const spider = document.querySelector('img');
  const wall = document.querySelector('.wall');

  const wallRect = wall.getBoundingClientRect();

  if (
    e.clientX < wallRect.left ||
    e.clientX > wallRect.right ||
    e.clientY < wallRect.top ||
    e.clientY > wallRect.bottom
  ) {
    return;
  }

  const clickX = e.clientX - wallRect.left - wall.clientLeft;
  const clickY = e.clientY - wallRect.top - wall.clientTop;

  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  let left = clickX - spiderWidth / 2;
  let topValue = clickY - spiderHeight / 2;

  const wallWidth = wall.clientWidth;
  const wallHeight = wall.clientHeight;

  if (left < 0) {
    left = 0;
  }

  if (topValue < 0) {
    topValue = 0;
  }

  if (left + spiderWidth > wallWidth) {
    left = wallWidth - spiderWidth;
  }

  if (topValue + spiderHeight > wallHeight) {
    topValue = wallHeight - spiderHeight;
  }

  wall.style.position = 'relative';
  spider.style.position = 'absolute';
  spider.style.left = `${Math.round(left)}px`;
  spider.style.top = `${Math.round(topValue)}px`;
});
