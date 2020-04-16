'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');
const wallProperties = wall.getBoundingClientRect();
const spiderProperties = spider.getBoundingClientRect();

wall.addEventListener('click', (e) => {
  const wallX = wallProperties.left + wall.clientLeft;
  const wallY = wallProperties.top + wall.clientTop;

  let xPos = e.clientX - wallX - spiderProperties.width / 2;
  let yPos = e.clientY - wallY - spiderProperties.height / 2;
  const xMaxPos = wall.clientWidth - spiderProperties.width;
  const yMaxPos = wall.clientHeight - spiderProperties.height;

  if (xPos < 0) {
    xPos = 0;
  }

  if (yPos < 0) {
    yPos = 0;
  }

  if (xPos > xMaxPos) {
    xPos = xMaxPos;
  }

  if (yPos > yMaxPos) {
    yPos = yMaxPos;
  }
  spider.style.left = `${xPos}px`;
  spider.style.top = `${yPos}px`;
});
