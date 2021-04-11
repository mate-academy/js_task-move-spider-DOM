'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', e => {
  const wallLeft = wall.offsetLeft + wall.clientLeft;
  const wallRight = wall.clientWidth + wall.offsetLeft + wall.clientLeft;
  const wallTop = wall.offsetTop + wall.clientTop;
  const wallBottom = wall.clientHeight + wall.offsetTop + wall.clientTop;

  const horizontal = e.clientX >= wallLeft && e.clientX <= wallRight;
  const vertical = e.clientY >= wallTop && e.clientY <= wallBottom;

  if (horizontal && vertical) {
    const topOffset = e.clientY - wallTop - (spider.clientHeight / 2);
    const bottomOffset = wallBottom - e.clientY;
    const leftOffset = e.clientX - wallLeft - (spider.clientWidth / 2);
    const rightOffset = wallRight - e.clientX;

    if (topOffset < 0) {
      spider.style.top = '0px';
    } else if (bottomOffset < (spider.clientHeight / 2)) {
      spider.style.top = wall.clientHeight - spider.clientHeight + 'px';
    } else {
      spider.style.top = topOffset + 'px';
    }

    if (leftOffset < 0) {
      spider.style.left = '0px';
    } else if (rightOffset < (spider.clientWidth / 2)) {
      spider.style.left = wall.clientWidth - spider.clientWidth + 'px';
    } else {
      spider.style.left = leftOffset + 'px';
    }
  }
});
