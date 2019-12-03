'use strict';

document.addEventListener('click', e => {
  const spider = document.querySelector('.spider');

  const wall = document.querySelector('.wall');

  if (e.target.matches('.wall') || e.target.matches('.spider')) {
    const wallPosition = wall.getBoundingClientRect();

    const wallPositionX = wallPosition.x + wall.clientLeft;

    const wallPositionY = wallPosition.y + wall.clientTop;

    let x = e.clientX - wallPositionX - spider.offsetWidth / 2;

    let y = e.clientY - wallPositionY - spider.offsetHeight / 2;

    if (x < 0) {
      x = 0;
    }

    if (x > wall.clientWidth - spider.offsetWidth) {
      x = wall.clientWidth - spider.offsetWidth;
    }

    if (y < 0) {
      y = 0;
    }

    if (y > wall.clientHeight - spider.offsetHeight) {
      y = wall.clientHeight - spider.offsetHeight;
    }

    spider.style.left = x + 'px';
    spider.style.top = y + 'px';
  }
});
