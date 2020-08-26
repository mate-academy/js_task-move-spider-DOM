'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

document.addEventListener('click', e => {
  if (e.target !== wall) {
    return;
  }

  let coordX = e.offsetX - spider.width / 2;
  let coordY = e.offsetY - spider.height / 2;

  coordX = overflowChecker(coordX, wall.clientWidth, spider.offsetWidth);
  coordY = overflowChecker(coordY, wall.clientHeight, spider.offsetHeight);

  spider.style.top = `${coordY}px`;
  spider.style.left = `${coordX}px`;
});

function overflowChecker(coord, containerSize, elementSize) {
  if (coord < 0) {
    return 0;
  }

  if (coord > containerSize - elementSize) {
    return containerSize - elementSize;
  }

  return coord;
}
