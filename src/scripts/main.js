'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

function limitMoving(axis, coordinate) {
  let currentAxis = axis;

  if (axis < 0) {
    currentAxis = 0;
  } else if (axis > coordinate) {
    currentAxis = coordinate;
  }

  return currentAxis;
}

document.addEventListener('click', (e) => {
  if (!e.target.closest('.wall')) {
    return;
  }

  const wallPosition = wall.getBoundingClientRect();
  const wallX = wallPosition.left + wall.clientLeft;
  const wallY = wallPosition.top + wall.clientTop;
  const coordinateX = e.clientX - wallX - spider.offsetWidth / 2;
  const coordinateY = e.clientY - wallY - spider.offsetHeight / 2;

  const maxX = wall.clientWidth - spider.offsetWidth;
  const maxY = wall.clientHeight - spider.offsetHeight;

  const limitedCoordinateX = limitMoving(coordinateX, maxX);
  const limitedCoordinateY = limitMoving(coordinateY, maxY);

  spider.style.top = `${limitedCoordinateY}px`;
  spider.style.left = `${limitedCoordinateX}px`;
});
