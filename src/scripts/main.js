'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

document.addEventListener('click', e => {
  if (!e.target.classList.contains('wall')) {
    return;
  }

  const [coordsX, coordsY] = generateCoords(e);

  spider.style.top = `${coordsY}px`;
  spider.style.left = `${coordsX}px`;
  spider.style.transform = `translate(-50%, -50%)`;
});

const checkCoords = (coordinate, minValue, maxValue) => {
  switch (true) {
    case coordinate < minValue:
      return minValue;

    case coordinate > maxValue:
      return maxValue;

    default:
      return coordinate;
  }
};

function generateCoords(e) {
  const wallStyles = getComputedStyle(wall);
  const spiderHalfSize = parseFloat(getComputedStyle(spider).width) * 0.5;

  const coordsX = e.offsetX;
  const coordsY = e.offsetY;

  const minCoords = spiderHalfSize;
  const maxCoords = parseFloat(wallStyles.width) - spiderHalfSize;

  const coordinateX = checkCoords(coordsX, minCoords, maxCoords);
  const coordinateY = checkCoords(coordsY, minCoords, maxCoords);

  return [coordinateX, coordinateY];
}
