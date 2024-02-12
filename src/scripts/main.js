'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const borderSize = parseInt(getComputedStyle(wall)
  .getPropertyValue('border-width'));
const wallSize = parseInt(getComputedStyle(wall)
  .getPropertyValue('height'));
const spiderHalfOfSize = spider.height / 2;
const wallRect = wall.getBoundingClientRect();

function getPosition(cursorPosition, distanceToEdge) {
  return (cursorPosition < borderSize + spiderHalfOfSize + distanceToEdge
    ? spiderHalfOfSize
    : cursorPosition > wallSize - spiderHalfOfSize + distanceToEdge
      ? wallSize - spiderHalfOfSize
      : cursorPosition - distanceToEdge - borderSize) - spiderHalfOfSize;
}

wall.addEventListener('click', e => {
  spider.style.top = `${getPosition(e.clientY, wallRect.y)}px`;
  spider.style.left = `${getPosition(e.clientX, wallRect.x)}px`;
});
