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

  const wallRect = wall.getBoundingClientRect();
  const maxWidth = wall.clientWidth - spider.offsetWidth;
  const maxHeight = wall.clientHeight - spider.offsetHeight;

  const xCoords = constrain(e.clientX - wallRect.left - spider.offsetWidth / 2,
    0, maxWidth);
  const yCoords = constrain(e.clientY - wallRect.top - spider.offsetHeight / 2,
    0, maxHeight);

  spider.style.left = xCoords + 'px';
  spider.style.top = yCoords + 'px';
});
