'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

wall.addEventListener('click', event => {
  if (event.target !== event.currentTarget) {
    return;
  }

  const point = {
    x: event.offsetX - (spider.width / 2),
    y: event.offsetY - (spider.height / 2),
  };

  function containSpider(axis) {
    const dimension = axis === 'x'
      ? 'width'
      : 'height';

    const offsetSide = axis === 'x'
      ? 'offsetX'
      : 'offsetY';

    if (wall.clientWidth - event[offsetSide] < spider[dimension]) {
      point[axis] = wall.clientWidth - spider[dimension];
    }

    if (spider[dimension] > event[offsetSide]) {
      point[axis] = 0;
    }

    return point[axis];
  }

  spider.style.left = `${containSpider('x')}px`;
  spider.style.top = `${containSpider('y')}px`;
});
