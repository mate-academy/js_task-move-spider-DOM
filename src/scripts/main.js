'use strict';

document.addEventListener('click', e => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  let topValue
    = e.clientY - wall.offsetTop - wall.clientTop - (spider.clientHeight / 2);
  let leftValue
    = e.clientX - wall.offsetLeft - wall.clientLeft - (spider.clientWidth / 2);

  if (topValue < 0) {
    topValue = 0;
  }

  if (leftValue < 0) {
    leftValue = 0;
  }

  if (topValue + spider.clientHeight > wall.clientHeight) {
    topValue = wall.clientHeight - spider.clientHeight;
  }

  if (leftValue + spider.clientWidth > wall.clientWidth) {
    leftValue = wall.clientWidth - spider.clientWidth;
  }

  spider.style.top = topValue + 'px';
  spider.style.left = leftValue + 'px';
});
