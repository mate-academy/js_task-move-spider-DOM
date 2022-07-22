'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', e => {
  const coords = wall.getBoundingClientRect();

  const topCoord = e.clientY - coords.top - (spider.clientHeight / 2);
  const leftCoord = e.clientX - coords.left - (spider.clientWidth / 2);

  if (topCoord <= 0 || leftCoord <= 0) {
    return;
  }

  if (topCoord >= (coords.height - spider.clientHeight)) {
    return;
  }

  if (leftCoord >= (coords.width - spider.clientWidth)) {
    return;
  }

  spider.style.top = topCoord + 'px';
  spider.style.left = leftCoord + 'px';
});
