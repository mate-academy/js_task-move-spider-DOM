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

  const item = e.target;

  if (!item.classList.contains('wall')) {
    return;
  }

  if (e.clientY >= rectTop
    && e.clientY <= (rectTop + borderWidth + spiderHalfWidth)) {
    spider.style.top = '0px';
  } else if (e.clientY >= (rectTop + borderWidth + wallWidth - spiderHalfWidth)
    && e.clientY <= (rectTop + (2 * borderWidth) + wallWidth)) {
    spider.style.top = wallWidth - (2 * spiderHalfWidth) + 'px';
  } else {
    spider.style.top = (e.clientY
      - (rectTop + borderWidth))
      - spiderHalfWidth + 'px';
  }

  if (e.clientX >= rectLeft
    && e.clientX <= (rectLeft + borderWidth + spiderHalfWidth)) {
    spider.style.left = '0px';
  } else if (e.clientX >= (rectLeft + borderWidth + wallWidth - spiderHalfWidth)
    && e.clientX <= (rectLeft + (2 * borderWidth) + wallWidth)) {
    spider.style.left = wallWidth - (2 * spiderHalfWidth) + 'px';
  } else {
    spider.style.left = (e.clientX
      - (rectLeft + borderWidth))
      - spiderHalfWidth + 'px';
  }
});
