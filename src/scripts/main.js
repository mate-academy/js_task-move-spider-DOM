'use strict';

document.addEventListener('click', e => {
  const wall = e.target.closest('.wall');

  if (!wall) {
    return;
  }

  const spider = document.querySelector('.spider');
  const borderWidth = parseInt(
    window.getComputedStyle(wall).getPropertyValue('border-width')
  );

  const x = e.clientX - wall.offsetLeft;
  const y = e.clientY - wall.offsetTop;

  const roundCoord = (coord, direction = 'y') => {
    const isX = direction === 'x';
    const spiderWidth = spider.clientWidth;
    const spiderHeight = spider.clientHeight;
    const halfOfSpider = (isX ? spiderWidth : spiderHeight) / 2;

    const wallWidth = wall.clientWidth;
    const wallHeight = wall.clientHeight;

    const min = halfOfSpider + borderWidth;
    const max = isX ? wallWidth - min : wallHeight - min;

    const minCoord = 0;
    const maxCoord = isX
      ? wallWidth - spiderHeight
      : wallHeight - spiderHeight;

    if (coord >= max) {
      return maxCoord;
    }

    if (coord <= min) {
      return minCoord;
    }

    return coord - halfOfSpider - borderWidth;
  };

  spider.style = `
    top: ${roundCoord(y)}px; left: ${roundCoord(x, 'x')}px;
  `;
});
