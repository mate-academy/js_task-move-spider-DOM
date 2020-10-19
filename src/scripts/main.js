'use strict';

document.addEventListener('click', (event) => {
  const wall = event.target.closest('.wall');
  const spider = document.querySelector('.spider');

  if (!wall) {
    return;
  }

  let positionX = event.clientX - wall.offsetLeft - wall.clientLeft
     - spider.offsetHeight / 2;
  let positionY = event.clientY - wall.offsetTop - wall.clientTop
     - spider.offsetHeight / 2;

  positionX = checkBorders(positionX, spider.offsetWidth, wall.clientWidth);
  positionY = checkBorders(positionY, spider.offsetHeight, wall.clientHeight);

  spider.style.left = `${positionX}px`;
  spider.style.top = `${positionY}px`;
});

function checkBorders(coord, spiderSize, wallSize) {
  if (coord < 0) {
    return 0;
  }

  if (coord > wallSize - spiderSize) {
    return wallSize - spiderSize;
  }

  return coord;
}
