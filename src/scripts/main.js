'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', (e) => {
  const wallWidth = wall.clientWidth;
  const wallHeight = wall.clientHeight;

  const spiderWidth = spider.clientWidth;
  const spiderHeight = spider.clientHeight;

  const wallRect = wall.getBoundingClientRect();

  let coordX = e.clientX - wallRect.left - spiderWidth / 2 - wall.clientLeft;
  let coordY = e.clientY - wallRect.top - spiderHeight / 2 - wall.clientTop;

  const maxOffsetLeft = wallWidth - spiderWidth;
  const maxOffsetTop = wallHeight - spiderHeight;

  if (coordX < 0) {
    coordX = 0;
  }

  if (coordY < 0) {
    coordY = 0;
  }

  if (coordX > maxOffsetLeft) {
    coordX = maxOffsetLeft;
  }

  if (coordY > maxOffsetTop) {
    coordY = maxOffsetTop;
  }

  spider.style.left = coordX + 'px';
  spider.style.top = coordY + 'px';
});
