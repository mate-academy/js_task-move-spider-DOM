'use strict';

document.addEventListener('click', event => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  if (event.target !== wall) {
    return;
  }

  const posX = event.offsetX - spider.width / 2;
  const posY = event.offsetY - spider.height / 2;
  const getPosition = (coord, wallSize, spiderSize) => {
    if (coord < 0) {
      return 0;
    } else if (coord > wallSize - spiderSize) {
      return wallSize - spiderSize;
    } else {
      return coord;
    }
  };

  spider.style.top = `${getPosition(posY, wall.clientHeight, spider.height)}px`;
  spider.style.left = `${getPosition(posX, wall.clientWidth, spider.width)}px`;
});
