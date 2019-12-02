'use strict';

function init(wall) {
  const spider = wall.querySelector('.spider');
  const wallPos = wall.getBoundingClientRect();
  const wallPosX = wallPos.left + wall.clientLeft;
  const wallPosY = wallPos.top + wall.clientTop;
  const maxCoordinateX = wall.clientWidth - spider.offsetWidth;
  const maxCoordinateY = wall.clientHeight - spider.offsetHeight;

  wall.addEventListener('click', e => {
    let coordinateX = e.clientX - wallPosX - spider.offsetWidth / 2;
    let coordinateY = e.clientY - wallPosY - spider.offsetHeight / 2;

    if (coordinateX < 0) {
      coordinateX = 0;
    }

    if (coordinateX > maxCoordinateX) {
      coordinateX = maxCoordinateX;
    }

    if (coordinateY < 0) {
      coordinateY = 0;
    }

    if (coordinateY > maxCoordinateY) {
      coordinateY = maxCoordinateY;
    }

    spider.style.left = `${coordinateX}px`;
    spider.style.top = `${coordinateY}px`;
  });
}

init(document.querySelector('.wall'));
