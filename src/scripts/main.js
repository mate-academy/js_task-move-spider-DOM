'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

document.addEventListener('click', e => {
  const coords = {
    x: e.offsetX - (spider.clientWidth / 2),
    y: e.offsetY - (spider.clientHeight / 2),
  };

  if (e.target !== wall) {
    return;
  };

  function helper(coord, spiderSize, wallSize) {
    if (coord <= 0) {
      return 0;
    } else if (coord > wallSize - spiderSize) {
      return wallSize - spiderSize;
    } else {
      return coord;
    }
  }

  const x = helper(coords.x, spider.clientWidth, wall.clientWidth) + 'px';
  const y = helper(coords.y, spider.clientHeight, wall.clientHeight) + 'px';

  spider.style.left = x;
  spider.style.top = y;
});
