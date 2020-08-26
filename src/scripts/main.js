'use strict';

const spider = document.querySelector('.spider');

const spiderHeight = spider.clientHeight;
const spiderWidth = spider.clientWidth;

const wall = document.querySelector('.wall');

const wallHeight = wall.clientHeight;
const wallWidth = wall.clientWidth;

const checkCoords = function(topCoord, leftCoord, elementToMove) {
  let top = topCoord;
  let left = leftCoord;

  if (top < 0) {
    top = 0;
  }

  if (top + spiderHeight > wallHeight) {
    top = wallHeight - spiderHeight;
  }

  if (left + spiderWidth > wallWidth) {
    left = wallWidth - spiderWidth;
  }

  if (left < 0) {
    left = 0;
  }

  elementToMove.style.top = `${top}px`;
  elementToMove.style.left = `${left}px`;
};

document.addEventListener('click', e => {
  if (e.target !== wall) {
    return;
  }

  const topCoord = (e.offsetY - spiderHeight / 2);
  const leftCoord = (e.offsetX - spiderWidth / 2);

  checkCoords(topCoord, leftCoord, spider);
});
