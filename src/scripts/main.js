'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', e => {
  // write code here
  if (e.target !== wall) {
    return;
  }

  let topCoords = e.offsetY - spider.clientHeight / 2;
  let leftCoords = e.offsetX - spider.clientWidth / 2;

  topCoords = specificCoords(topCoords, spider.clientHeight, wall.clientHeight);
  leftCoords = specificCoords(leftCoords, spider.clientWidth, wall.clientWidth);

  spider.style.cssText = `
    margin-top: ${topCoords}px;
    margin-left: ${leftCoords}px;
  `;

  function specificCoords(coords, coordsSpider, coordsWall) {
    if (coords < 0) {
      return 0;
    }

    if (coords > coordsWall - coordsSpider) {
      return coordsWall - coordsSpider;
    }

    return coords;
  }
});
