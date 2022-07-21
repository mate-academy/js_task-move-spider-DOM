'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const coords = wall.getBoundingClientRect();

wall.addEventListener('click', e => {
  let topCoord = e.clientY - coords.top - (spider.clientHeight / 2);
  let leftCoord = e.clientX - coords.left - (spider.clientWidth / 2);

  if (topCoord <= 0 || leftCoord <= 0) {
    return;
  }

  if (topCoord >= (coords.height - spider.clientHeight)) {
    topCoord = wall.clientHeight - spider.clientHeight;
  }

  if (leftCoord >= (coords.width - spider.clientWidth)) {
    leftCoord = wall.clientWidth - spider.clientWidth;
  }

  spider.style.top = topCoord + 'px';
  spider.style.left = leftCoord + 'px';
});
