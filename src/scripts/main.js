'use strict';

document.addEventListener('click', e => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  const x = getCoord(e.offsetX, spider.offsetWidth, wall.clientWidth);
  const y = getCoord(e.offsetY, spider.offsetHeight, wall.clientHeight);

  if (wall === e.target) {
    spider.style.top = `${y}px`;
    spider.style.left = `${x}px`;
  }
});

function getCoord(mouseClick, itemParam, fieldParam) {
  let coord = mouseClick - (itemParam / 2);
  const maxPosition = fieldParam - itemParam;

  if (coord < 0) {
    coord = 0;
  }

  if (coord > maxPosition) {
    coord = maxPosition;
  }

  return coord;
}
