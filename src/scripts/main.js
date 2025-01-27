'use strict';

document.addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');
  const wallOffsetTop = wall.offsetTop + wall.clientTop;
  const wallOffsetLeft = wall.offsetLeft + wall.clientLeft;
  const wallHeight = wall.offsetHeight;
  const wallWidth = wall.offsetWidth;
  const wallClientHeight = wall.clientHeight;
  const wallClientWidth = wall.clientWidth;

  const topClick = e.clientY;
  const leftClick = e.clientX;

  if (
    topClick < wallOffsetTop ||
    topClick > wallOffsetTop + wallHeight ||
    leftClick < wallOffsetLeft ||
    leftClick > wallOffsetLeft + wallWidth
  ) {
    return;
  }

  const spider = document.querySelector('.spider');
  const spiderWidth = spider.clientWidth;
  const spiderHeight = spider.clientHeight;
  let spiderShiftTop = topClick - wallOffsetTop - spiderHeight / 2;
  let spiderShiftLeft = leftClick - wallOffsetLeft - spiderWidth / 2;

  if (spiderShiftTop < 0) {
    spiderShiftTop = 0;
  }

  if (spiderShiftTop + spiderHeight > wallClientHeight) {
    spiderShiftTop = wallClientHeight - spiderHeight;
  }

  if (spiderShiftLeft < 0) {
    spiderShiftLeft = 0;
  }

  if (spiderShiftLeft + spiderWidth > wallClientWidth) {
    spiderShiftLeft = wallClientWidth - spiderWidth;
  }

  const styleValue = `top: ${spiderShiftTop}px; left: ${spiderShiftLeft}px`;

  spider.setAttribute('style', styleValue);
});
