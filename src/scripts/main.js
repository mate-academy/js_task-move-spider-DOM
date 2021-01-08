'use strict';

const spider = document.querySelector('.spider');
const spiderWidth = spider.offsetWidth;

const spiderMovementHandler = (e) => {
  const wall = e.target.closest('.wall');
  const wallPosition = wall.getBoundingClientRect();
  const wallXCoordsOfLeftCorner = wallPosition.left + wall.clientLeft;
  const wallYCoordsOfLeftCorner = wallPosition.top + wall.clientTop;
  const positionX = e.clientX - wallXCoordsOfLeftCorner - spiderWidth / 2;
  const positionY = e.clientY - wallYCoordsOfLeftCorner - spiderWidth / 2;
  const wallWidth = wall.clientWidth;
  const wallHeight = wall.clientHeight;

  if (!wall.contains(e.target)) {
    return;
  }

  function calculateSpiderPosition(coords, wallSide) {
    if (coords < 0) {
      return 0;
    } else if (coords > (wallSide - spiderWidth)) {
      return wallSide - spiderWidth;
    }

    return coords;
  }

  spider.style.left = `${calculateSpiderPosition(positionX, wallWidth)}px`;
  spider.style.top = `${calculateSpiderPosition(positionY, wallHeight)}px`;
};

document.addEventListener('click', spiderMovementHandler);
