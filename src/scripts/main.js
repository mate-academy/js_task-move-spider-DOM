'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('img');

wall.addEventListener('click', e => {
  const {
    offsetX,
    offsetY,
  } = e;

  const maxAllowedX = wall.clientWidth - spider.clientWidth;
  const maxAllowedY = wall.clientHeight - spider.clientHeight;

  spider.style.left = setNewPosition(offsetX, maxAllowedX) + 'px';
  spider.style.top = setNewPosition(offsetY, maxAllowedY) + 'px';
});

function setNewPosition(offset, maxAllowed) {
  return Math.min(Math.max(
    offset - spider.clientHeight / 2, 0,
  ), maxAllowed);
}
