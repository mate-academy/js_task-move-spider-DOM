'use strict';

const spider = document.querySelector('.spider');
const spiderSize = spider.offsetWidth;
const wall = document.querySelector('.wall');

document.addEventListener('click', event => {
  const wallTop = wall.offsetTop + wall.clientTop;
  const wallLeft = wall.offsetLeft + wall.clientLeft;

  const yPosition = event.clientY - wallTop - spiderSize / 2;
  const xPosition = event.clientX - wallLeft - spiderSize / 2;

  spider.style.top = spiderCoords(yPosition) + 'px';
  spider.style.left = spiderCoords(xPosition) + 'px';
});

function spiderCoords(coords) {
  let position = coords;

  if (position < 0) {
    position = 0;
  }

  if (position > wall.clientWidth - spiderSize) {
    position = wall.clientWidth - spiderSize;
  }

  return position;
}
