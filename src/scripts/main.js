'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', (e) => {
  const wallRect = wall.getBoundingClientRect();

  let centerX =
    e.clientX - wallRect.left - wall.clientLeft - spider.offsetWidth / 2;
  let centerY =
    e.clientY - wallRect.top - wall.clientTop - spider.offsetHeight / 2;

  if (centerX < 0) {
    centerX = 0;
  }

  if (centerY < 0) {
    centerY = 0;
  }

  const maxX = wall.clientWidth - spider.offsetWidth;
  const maxY = wall.clientHeight - spider.offsetHeight;

  if (centerX > maxX) {
    centerX = maxX;
  }

  if (centerY > maxY) {
    centerY = maxY;
  }

  spider.style.left = centerX + 'px';
  spider.style.top = centerY + 'px';
});
