'use strict';

document.addEventListener('click', (event) => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  if (event.target !== wall) {
    return;
  }

  const targetY = event.offsetY - spider.clientHeight / 2;
  const targetX = event.offsetX - spider.clientWidth / 2;

  function boundariesCoords(value, wallSize, spiderSize) {
    switch (true) {
      case value < 0:
        return 0;

      case value > wallSize - spiderSize:
        return wallSize - spiderSize;

      default:
        return value;
    }
  }

  spider.style.cssText = `
    top: ${boundariesCoords(targetY, wall.clientHeight, spider.clientHeight)}px;
    left:${boundariesCoords(targetX, wall.clientWidth, spider.clientWidth)}px;
  `;
});
