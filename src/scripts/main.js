'use strict';

const wall = document.querySelector('.wall');
const spider = wall.querySelector('.spider');

document.addEventListener('click', (event) => {
  const onWall = event.target.closest('.wall');

  if (onWall) {
    const x = event.clientX;
    const y = event.clientY;
    const styleWall = getComputedStyle(wall);
    const rect = wall.getBoundingClientRect();
    const borderWidth = parseFloat(styleWall.borderWidth);
    const minLeft = rect.left + borderWidth + spider.offsetWidth / 2;
    const minTop = rect.top + borderWidth + spider.offsetHeight / 2;
    const maxLeft = rect.right - borderWidth - spider.offsetHeight / 2;
    const maxTop = rect.bottom - borderWidth - spider.offsetHeight / 2;

    if (x < minLeft) {
      spider.style.left = `${0}px`;
    } else {
      spider.style.left = `${x - rect.left - spider.offsetWidth / 2 - parseFloat(styleWall.borderWidth)}px`;
    }

    if (y < minTop) {
      spider.style.top = `${0}px`;
    } else {
      spider.style.top = `${y - rect.top - spider.offsetHeight / 2 - parseFloat(styleWall.borderWidth)}px`;
    }

    if (x > maxLeft) {
      spider.style.left = `calc(100% - ${spider.offsetWidth}px)`;
    }

    if (y > maxTop) {
      spider.style.top = `calc(100% - ${spider.offsetHeight}px)`;
    }
  }
});
