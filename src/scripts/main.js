'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', e => {
  const workSpaceY = wall.clientHeight - spider.clientHeight;
  const workSpaceX = wall.clientWidth - spider.clientWidth;

  let normalizedY = e.offsetY;
  let normalizedX = e.offsetX;

  if (e.offsetY < 0) {
    normalizedY = spider.clientHeight;
  }

  if (e.offsetY > workSpaceY) {
    normalizedY = workSpaceY;
  }

  if (e.offsetX < 0) {
    normalizedX = spider.clientWidth;
  }

  if (e.offsetX > workSpaceX) {
    normalizedX = workSpaceX;
  }

  spider.style.left = `${normalizedX}px`;
  spider.style.top = `${normalizedY}px`;
});
