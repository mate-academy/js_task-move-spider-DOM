'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', e => {
  if (e.target !== wall) {
    return;
  }

  const spiderHalf = spider.clientWidth / 2;
  let leftOffset = e.clientX - spiderHalf - wall.offsetLeft - wall.clientLeft;
  let topOffset = e.clientY - spiderHalf - wall.offsetTop - wall.clientLeft;

  if (leftOffset < 0) {
    leftOffset = 0;
  } else if (leftOffset
      >= wall.clientWidth - spider.clientWidth - wall.clientLeft * 2) {
    leftOffset = wall.clientWidth - spider.clientWidth;
  }

  if (topOffset < 0) {
    topOffset = 0;
  } else if (topOffset
      >= wall.clientHeight - spider.clientWidth - wall.clientTop * 2) {
    topOffset = wall.clientHeight - spider.clientWidth;
  }

  spider.style.left = leftOffset + 'px';
  spider.style.top = topOffset + 'px';
});
