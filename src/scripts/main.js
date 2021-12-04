'use strict';

document.addEventListener('click', e => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');
  const styleWall = getComputedStyle(wall);
  const styleSpider = getComputedStyle(spider);

  const borderWidth = parseInt(styleWall.borderWidth);
  const wallWidth = parseInt(styleWall.width);
  const spiderHalfWidth = parseInt(styleSpider.width) / 2;

  const rect = wall.getBoundingClientRect();
  const rectTop = Math.round(rect.top);
  const rectLeft = Math.round(rect.left);

  const item = e.target.classList.contains('wall');

  if (!item) {
    return;
  }

  let topY = (e.clientY
      - (rectTop + borderWidth))
      - spiderHalfWidth;

  let leftX = (e.clientX
      - (rectLeft + borderWidth))
      - spiderHalfWidth;

  if (topY < 0) {
    topY = 0;
  }

  if (leftX < 0) {
    leftX = 0;
  }

  if (topY > wallWidth - (2 * spiderHalfWidth)) {
    topY = wallWidth - (2 * spiderHalfWidth);
  }

  if (leftX > wallWidth - (2 * spiderHalfWidth)) {
    leftX = wallWidth - (2 * spiderHalfWidth);
  }

  spider.style.top = topY + 'px';
  spider.style.left = leftX + 'px';
});
