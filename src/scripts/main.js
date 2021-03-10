'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const spiderSize = [
  parseInt(getComputedStyle(spider).height) / 2,
  parseInt(getComputedStyle(spider).width) / 2,
];

document.addEventListener('click', e => {
  const x = e.offsetX - spiderSize[0];
  const y = e.offsetY - spiderSize[1];
  const borderSide = parseInt(getComputedStyle(wall).borderLeftWidth);
  const maxOpenWidth = parseInt(getComputedStyle(wall).width)
    - spiderSize[0];
  const maxOpenHeight = parseInt(getComputedStyle(wall).height)
    - spiderSize[1];

  if (e.target.className !== 'wall') {
    return;
  }

  spider.style.top = y + 'px';
  spider.style.left = x + 'px';

  if (x >= maxOpenWidth) {
    spider.style.left = (x - spiderSize[1] - borderSide + 1) + 'px';
  }

  if (x <= 0) {
    spider.style.left = 0;
  }

  if (y >= maxOpenHeight) {
    spider.style.top = (y - spiderSize[0] - borderSide + 1) + 'px';
  }

  if (y <= 0) {
    spider.style.top = 0;
  }
});
