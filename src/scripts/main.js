'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

document.addEventListener('click', e => {
  const minWallTop = wall.offsetTop + wall.clientTop;
  const minWallLeft = wall.offsetLeft + wall.clientLeft;
  const maxWallTop = wall.clientHeight - spider.width;
  const maxWallLeft = wall.clientWidth - spider.width;
  let top = e.clientY - minWallTop - (spider.height / 2);
  let left = e.clientX - minWallLeft - (spider.height / 2);

  if (e.target !== wall) {
    return;
  }

  if (top < 0) {
    top = 0;
  }

  if (top > maxWallTop) {
    top = maxWallTop;
  }

  if (left < 0) {
    left = 0;
  }

  if (left > maxWallLeft) {
    left = maxWallLeft;
  }

  spider.style.cssText = `top: ${top}px; left: ${left}px;`;
});
