'use strict';

document.addEventListener('click', e => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  if (e.target !== wall) {
    return;
  }

  const overflow = (coord, spiderSize, wallSize) => {
    let result = coord;

    if (result < 0) {
      result = 0;
    }

    if (result > wallSize - spiderSize) {
      result = wallSize - spiderSize;
    };

    return result;
  };

  const coords = {
    x: e.offsetX - spider.offsetWidth / 2,
    y: e.offsetY - spider.offsetHeight / 2,
  };

  coords.x = overflow(coords.x, spider.offsetWidth, wall.clientWidth);
  coords.y = overflow(coords.y, spider.offsetHeight, wall.clientHeight);

  spider.style.left = `${coords.x}px`;
  spider.style.top = `${coords.y}px`;
});
