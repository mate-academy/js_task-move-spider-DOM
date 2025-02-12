'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const wallCoords = wall.getBoundingClientRect();

wall.addEventListener('click', (e) => {
  let leftPos =
    e.clientX - wall.clientLeft - wallCoords.left - spider.clientWidth / 2;
  let topPos =
    e.clientY - wall.clientTop - wallCoords.top - spider.clientHeight / 2;

  if (leftPos < 0) {
    leftPos = 0;
  }

  if (topPos < 0) {
    topPos = 0;
  }

  if (leftPos + spider.clientWidth > wall.clientWidth) {
    leftPos = wall.clientWidth - spider.clientWidth;
  }

  if (topPos + spider.clientHeight > wall.clientHeight) {
    topPos = wall.clientHeight - spider.clientHeight;
  }

  spider.style.left = leftPos + 'px';
  spider.style.top = topPos + 'px';
});
