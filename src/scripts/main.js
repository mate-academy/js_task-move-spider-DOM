'use strict';

document.addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  if (e.target === wall || wall.contains(e.target)) {
    const wallPropertyes = wall.getBoundingClientRect();
    const spiderPropertyes = spider.getBoundingClientRect();

    const newCoordsSpeder = {
      x: coordinateCalculation(
        e.clientX,
        wallPropertyes.x,
        wallPropertyes.width,
        spiderPropertyes.width,
        wall.clientLeft,
      ),
      y: coordinateCalculation(
        e.clientY,
        wallPropertyes.y,
        wallPropertyes.height,
        spiderPropertyes.height,
        wall.clientTop,
      ),
    };

    spider.style.top = `${newCoordsSpeder.y}px`;
    spider.style.left = `${newCoordsSpeder.x}px`;
  }
});

function coordinateCalculation(
  clientCoord,
  planeCoordStart,
  wallSize,
  spiderSize,
  border,
) {
  const halfSpiderSize = spiderSize / 2;

  const coord = clientCoord - planeCoordStart - halfSpiderSize - border;

  if (coord < 0) {
    return 0;
  }

  if (coord + spiderSize + border * 2 > wallSize) {
    return wallSize - spiderSize - border * 2;
  }

  return coord;
}
