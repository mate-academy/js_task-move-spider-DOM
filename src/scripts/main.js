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
    return (coord < 0)
      ? 0
      : (coord > wallSize - spiderSize)
        ? wallSize - spiderSize
        : coord;
  };

  spider.style.top = `${getPosition(posY, wall.clientHeight, spider.height)}px`;
  spider.style.left = `${getPosition(posX, wall.clientWidth, spider.width)}px`;
});
