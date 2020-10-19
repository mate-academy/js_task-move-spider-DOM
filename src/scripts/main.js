'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', event => {
  if (event.target !== wall) {
    return;
  }

  let eventX = event.offsetX - spider.offsetWidth / 2;
  let eventY = event.offsetY - spider.offsetHeight / 2;

  const breakPointStart = 0;
  const breakPointX = wall.clientWidth - spider.offsetWidth;
  const breakPointY = wall.clientHeight - spider.offsetHeight;

  if (eventX < breakPointStart) {
    eventX = breakPointStart;
  }

  if (eventY < breakPointStart) {
    eventY = breakPointStart;
  }

  if (eventX > breakPointX) {
    eventX = breakPointX;
  }

  if (eventY > breakPointY) {
    eventY = breakPointY;
  }

  spider.style.top = `${eventY}px`;
  spider.style.left = `${eventX}px`;
});
