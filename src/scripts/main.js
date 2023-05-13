'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

const spiderSize = parseFloat(getComputedStyle(spider).width);
const wallSize = parseFloat(getComputedStyle(wall).width);

function getOffset(initialOffset) {
  if (initialOffset < 0) {
    return 0;
  }

  if (initialOffset > wallSize - spiderSize) {
    return wallSize - spiderSize;
  }

  return initialOffset;
};

document.addEventListener('click', e => {
  if (e.target !== wall) {
    return;
  }

  spider.style.left = `${getOffset(e.offsetX - spiderSize / 2)}px`;
  spider.style.top = `${getOffset(e.offsetY - spiderSize / 2)}px`;
});
