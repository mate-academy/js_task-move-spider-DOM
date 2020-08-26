'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

document.addEventListener('click', e => {
  const minTop = wall.offsetTop + wall.clientTop;
  const minLeft = wall.offsetLeft + wall.clientLeft;
  const maxTop = wall.clientHeight - spider.width;
  const maxLeft = wall.clientWidth - spider.width;
  let top = e.clientY - minTop - (spider.height / 2);
  let left = e.clientX - minLeft - (spider.height / 2);

  if (e.target !== wall) {
    return;
  }

  if (top < 0) {
    top = 0;
  }

  if (top > maxTop) {
    top = maxTop;
  }

  if (left < 0) {
    left = 0;
  }

  if (left > maxLeft) {
    left = maxLeft;
  }

  spider.style.cssText = `top: ${top}px; left: ${left}px;`;
});
