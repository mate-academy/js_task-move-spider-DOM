'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', e => {
  const clickCoordX = e.clientX - wall.offsetLeft - wall.clientLeft;
  const clickCoordY = e.clientY - wall.offsetTop - wall.clientTop;

  function calcCoords(eventCoords, fieldSize, objectSize) {
    if (eventCoords > (fieldSize - objectSize / 2)) {
      return fieldSize - objectSize;
    }

    if (eventCoords < objectSize / 2) {
      return 0;
    }

    return eventCoords - objectSize / 2;
  }

  const spiderCoordX = calcCoords(
    clickCoordX,
    wall.clientWidth,
    spider.clientWidth
  );

  const spiderCoordY = calcCoords(
    clickCoordY,
    wall.clientHeight,
    spider.clientHeight
  );

  spider.style.left = spiderCoordX + 'px';
  spider.style.top = spiderCoordY + 'px';
});
