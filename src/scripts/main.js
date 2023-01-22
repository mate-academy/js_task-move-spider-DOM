'use strict';

document.addEventListener('click', e => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  const { offsetWidth: spiderWidth, offsetHeight: spiderHeight } = spider;
  const { clientWidth: wallWidth, clientHeight: wallHeight } = wall;
  const { offsetX: x, offsetY: y, target } = e;

  if (target !== wall) {
    return;
  }

  const coords = {
    left: x - (spiderWidth / 2),
    top: y - (spiderHeight / 2),
  };

  if (coords.left > wallWidth - spiderWidth) {
    coords.left = wallWidth - spiderWidth;
  }

  if (coords.top > wallHeight - spiderHeight) {
    coords.top = wallHeight - spiderHeight;
  };

  if (coords.top < 0) {
    coords.top = 0;
  }

  if (coords.left < 0) {
    coords.left = 0;
  }

  spider.style.top = `${coords.top}px`;
  spider.style.left = `${coords.left}px`;
});
