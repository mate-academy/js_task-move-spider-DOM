'use strict';

document.addEventListener('click', e => {
  const wall = document.querySelector('.wall');
  const wallWidth = wall.clientWidth;
  const wallHeight = wall.clientHeight;
  const wallLeftBorder = wall.clientLeft;
  const wallTopBorder = wall.clientTop;
  const wallRect = wall.getBoundingClientRect();

  const spider = document.querySelector('.spider');
  const spiderWidth = spider.clientWidth;
  const spiderHeight = spider.clientHeight;

  if (e.target.className === 'wall') {
    const leftGap = e.clientX - wallRect.left
    - wallLeftBorder - spiderWidth / 2;
    const topGap = e.clientY - wallRect.top - wallTopBorder - spiderWidth / 2;

    if (leftGap < 0) {
      spider.style.left = 0 + 'px';
    } else if (leftGap + spiderWidth > wallWidth) {
      spider.style.left = wallWidth - spiderWidth + 'px';
    } else {
      spider.style.left = leftGap + 'px';
    }

    if (topGap < 0) {
      spider.style.top = 0 + 'px';
    } else if (topGap + spiderHeight > wallHeight) {
      spider.style.top = wallHeight - spiderHeight + 'px';
    } else {
      spider.style.top = topGap + 'px';
    }
  }
});
