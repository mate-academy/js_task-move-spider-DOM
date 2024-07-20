'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const wallBorderWidth = Number.parseFloat(getComputedStyle(wall).borderWidth);
const offsetX =
  wall.getBoundingClientRect().left + wallBorderWidth + spider.width / 2;
const maxX = wall.clientWidth - spider.clientWidth;
const offsetY =
  wall.getBoundingClientRect().top + wallBorderWidth + spider.height / 2;
const maxY = wall.clientHeight - spider.clientHeight;

document.addEventListener('click', (e) => {
  if (!e.target.closest('.wall')) {
    return;
  }
  spider.style.left = getCoordinate(e.clientX, offsetX, maxX) + 'px';
  spider.style.top = getCoordinate(e.clientY, offsetY, maxY) + 'px';
});

function getCoordinate(eventCoordinate, offset, maxCoordinate) {
  const coordinate = eventCoordinate - offset;

  if (coordinate < 0) {
    return 0;
  }

  if (coordinate > maxCoordinate) {
    return maxCoordinate;
  }

  return coordinate;
}
