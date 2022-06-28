'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', e => {
  if (!e.target.closest('.wall')) {
    return;
  }

  const wallCoords = wall.getBoundingClientRect();
  const leftValue = e.clientX - (wallCoords.left + wall.clientLeft)
    - spider.offsetWidth / 2;
  const topValue = e.clientY - (wallCoords.top + wall.clientTop)
    - spider.offsetHeight / 2;

  spider.style.left = leftValue + 'px';
  spider.style.top = topValue + 'px';

  if (leftValue < 0) {
    spider.style.left = 0;
  } else if (leftValue > wall.clientWidth - spider.offsetWidth) {
    spider.style.left = wall.clientWidth - spider.offsetWidth + 'px';
  }

  if (topValue < 0) {
    spider.style.top = 0;
  } else if (topValue > wall.clientHeight - spider.offsetHeight) {
    spider.style.top = wall.clientHeight - spider.offsetHeight + 'px';
  }
});
