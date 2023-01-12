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

  if (xPos < 0) {
    xPos = 0;
  } else if (xPos > wall.clientWidth - spider.clientWidth) {
    xPos = wall.clientWidth - spider.clientWidth;
  }

  if (yPos < 0) {
    yPos = 0;
  } else if (yPos > wall.clientWidth - spider.clientWidth) {
    yPos = wall.clientHeight - spider.clientWidth;
  }

  spider.style.left = xPos + 'px';

  spider.style.top = yPos + 'px';
});
