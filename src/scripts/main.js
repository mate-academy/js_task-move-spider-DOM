'use strict';

const wall = document.querySelector('.wall');
const spider = wall.querySelector('.spider');

const rect = wall.getBoundingClientRect();

const spiderWidth = spider.clientWidth / 2;
const spiderHeight = spider.clientHeight / 2;

const wallMinX = rect.left + wall.clientLeft;
const wallMinY = rect.top + wall.clientTop;

const wallMaxY = wall.clientHeight - spider.clientHeight;
const wallMaxX = wall.clientWidth - spider.clientWidth;

wall.addEventListener('click', getClickPosition, false);

function getClickPosition(e) {
  if (e.target !== wall) {
    return;
  }

  let xPos = e.clientX - wallMinX - spiderWidth;
  let yPos = e.clientY - wallMinY - spiderHeight;

  if (xPos < 0) {
    xPos = 0;
  }

  if (yPos < 0) {
    yPos = 0;
  }

  if (xPos > wallMaxX) {
    xPos = wallMaxX;
  }

  if (yPos > wallMaxY) {
    yPos = wallMaxY;
  }

  spider.style.transform = `translate(${xPos}px, ${yPos}px)`;
}
