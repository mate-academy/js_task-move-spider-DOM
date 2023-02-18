'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', e => {
  const workSpaceY = wall.clientHeight - spider.clientHeight;
  const workSpaceX = wall.clientWidth - spider.clientWidth;

  const spiderHalfHeight = spider.clientHeight / 2;
  const spiderHalfWidth = spider.clientWidth / 2;

  let normalizedY = e.offsetY - spiderHalfHeight;
  let normalizedX = e.offsetX - spiderHalfWidth;

  if (e.offsetY < spiderHalfHeight) {
    normalizedY = 0;
  }

  if (e.offsetY > workSpaceY) {
    normalizedY = workSpaceY;
  }

  if (e.offsetX < spiderHalfWidth) {
    normalizedX = 0;
  }

  if (e.offsetX > workSpaceX) {
    normalizedX = workSpaceX;
  }

  spider.style.left = `${normalizedX}px`;
  spider.style.top = `${normalizedY}px`;
});
