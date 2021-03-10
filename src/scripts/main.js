/* eslint-disable no-shadow */
'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const wallWidth = wall.clientWidth;
const wallHeight = wall.clientHeight;

const spiderWidth = spider.clientWidth;
const spiderHeight = spider.clientHeight;

wall.addEventListener('click', (event) => {
  const clickPositionX = event.offsetX;
  const clickPositionY = event.offsetY;

  let xPosition = clickPositionX - spiderWidth / 2;
  let yPosition = clickPositionY - spiderHeight / 2;

  if (xPosition < 0) {
    xPosition = 0;
  }

  if (yPosition < 0) {
    yPosition = 0;
  }

  if (xPosition + spiderWidth > wallWidth) {
    xPosition = wallWidth - spiderWidth;
  }

  if (yPosition + spiderHeight > wallHeight) {
    yPosition = wallHeight - spiderHeight;
  }

  spider.style.left = xPosition + 'px';
  spider.style.top = yPosition + 'px';
});
