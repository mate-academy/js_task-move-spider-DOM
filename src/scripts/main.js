'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

function constrain(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

document.addEventListener('click', e => {
  if (!(e.target.closest('.wall'))) {
    return;
  }

  const maxWidth = wall.clientWidth - spider.offsetWidth;
  const maxHeight = wall.clientHeight - spider.offsetHeight;

  const xCoords = constrain(e.offsetX - spider.offsetWidth / 2,
    0, maxWidth);
  const yCoords = constrain(e.offsetY - spider.offsetHeight / 2,
    0, maxHeight);

  spider.style.left = xCoords + 'px';
  spider.style.top = yCoords + 'px';
});
