'use strict';

document.addEventListener('click', e => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  const {
    width: spiderWidth,
    height: spiderHeight,
  }
  = window.getComputedStyle(spider);

  const {
    width: wallWidth,
    height: wallHeight,
  }
  = window.getComputedStyle(wall);

  if (e.target !== wall) {
    return;
  }

  const getPosition = (parentSize, childSize, offset) => {
    const min = 0;
    const max = parseFloat(parentSize) - parseFloat(childSize);
    const position = e[offset] - parseFloat(childSize) / 2;

    return `${Math.min(Math.max(position, min), max)}px`;
  };

  spider.style.left = getPosition(wallWidth, spiderWidth, 'offsetX');
  spider.style.top = getPosition(wallHeight, spiderHeight, 'offsetY');
});
