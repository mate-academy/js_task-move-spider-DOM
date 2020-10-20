'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', event => {
  const spiderHeight = spider.offsetHeight;
  const wallHeigth = wall.clientHeight;

  const leftWall = wall.clientLeft + wall.offsetLeft;
  const topWall = wall.clientTop + wall.offsetTop;

  const positionX = event.clientX - leftWall - spider.offsetWidth / 2;
  const positionY = event.clientY - topWall - spider.offsetWidth / 2;

  function correctPosition(coord, spiderSize, wallSize) {
    let resultCorrection = coord;

    if (resultCorrection < 0) {
      return 0;
    } else if (resultCorrection > wallSize - spiderSize) {
      resultCorrection = wallSize - spiderSize;
    }

    return resultCorrection;
  }

  const readyPositionX = correctPosition(positionX, spiderHeight, wallHeigth);
  const readyPositionY = correctPosition(positionY, spiderHeight, wallHeigth);

  spider.style.top = `${readyPositionY}px`;
  spider.style.left = `${readyPositionX}px`;
});
