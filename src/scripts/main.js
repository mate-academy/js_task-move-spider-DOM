'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', (e) => {
  const rect = wall.getBoundingClientRect();
  const coordinatesTop = e.clientY - rect.top;
  const coordinatesLeft = e.clientX - rect.left;

  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  const half = spiderWidth / 2;

  const wallWidth = wall.offsetWidth;
  const wallHeight = wall.offsetHeight;

  let newTop = coordinatesTop - half;
  let newLeft = coordinatesLeft - half;

  if (newTop < 0) {
    newTop = 0;
  }

  if (newTop > wallHeight - spiderHeight) {
    newTop = wallHeight - spiderHeight;
  }

  if (newLeft < 0) {
    newLeft = 0;
  }

  if (newLeft > wallWidth - spiderWidth) {
    newLeft = wallWidth - spiderWidth;
  }

  spider.style.top = newTop + 'px';
  spider.style.left = newLeft + 'px';
});
