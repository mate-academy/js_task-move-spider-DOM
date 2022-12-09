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
    const spiderWidth = spider.clientWidth;
    const spiderHeight = spider.clientHeight;

    const max = direction === 'x'
      ? wall.clientWidth - spiderWidth / 2 + borderWidth
      : wall.clientHeight - spiderHeight / 2 + borderWidth;
    const min = (
      direction === 'x' ? spiderWidth : spiderHeight
    ) / 2 + borderWidth;

    if (coord >= max) {
      return wall.clientWidth - spiderWidth;
    }

    if (coord <= min) {
      return 0;
    }

    return coord - (
      direction === 'x' ? spiderWidth : spiderHeight
    ) / 2 - borderWidth;
  };

  spider.style = `
    top: ${roundCoord(y)}px; left: ${roundCoord(x, 'x')}px;
  `;
});
