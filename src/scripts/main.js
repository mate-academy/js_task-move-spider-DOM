'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', (event) => {
  const spiderWidth = spider.width;
  const spiderHeight = spider.height;
  const wallWidth = wall.clientWidth;
  const wallHeigth = wall.clientHeight;
  const positionX = event.offsetX - spiderWidth / 2;
  const positionY = event.offsetY - spiderHeight / 2;

  function correctPosition(coord, spiderSize, wallSize) {
    let resultCorrection = coord;

    if (resultCorrection < 0) {
      resultCorrection = 0;
    } else if (resultCorrection > wallSize - spiderSize) {
      resultCorrection = wallSize - spiderSize;
    }

    return resultCorrection;
  }

  const readyPositionX = correctPosition(positionX, spiderWidth, wallWidth);
  const readyPositionY = correctPosition(positionY, spiderHeight, wallHeigth);

  spider.style.top = `${readyPositionY}px`;
  spider.style.left = `${readyPositionX}px`;
});
