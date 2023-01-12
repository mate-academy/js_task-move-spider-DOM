'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', e => {
  const wallXCorrection = wall.getBoundingClientRect().left;
  const wallYCorrection = wall.getBoundingClientRect().top;
  let xPos = e.clientX - (spider.clientWidth / 2)
    - wallXCorrection;
  let yPos = e.clientY - (spider.clientHeight / 2)
    - wallYCorrection;
  const leftBorderX = wall.clientWidth - spider.clientWidth;
  const leftBorderY = wall.clientHeight - spider.clientHeight;

  if (xPos < 0) {
    xPos = 0;
  }

  if (xPos > leftBorderX) {
    xPos = leftBorderX;
  }

  if (yPos < 0) {
    yPos = 0;
  }

  if (yPos > leftBorderY) {
    yPos = leftBorderY;
  }

  spider.style.left = xPos + 'px';

  spider.style.top = yPos + 'px';
});
