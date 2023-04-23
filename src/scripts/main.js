'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

document.addEventListener('click', e => {
  if (e.target.closest('.wall')) {
    const wallData = wall.getBoundingClientRect();

    const borderWidth = (wallData.width - wall.clientWidth) / 2;
    const borderHeight = (wallData.height - wall.clientHeight) / 2;

    const wallMaxX = wall.clientWidth - spider.offsetWidth;
    const wallMaxY = wall.clientHeight - spider.offsetHeight;

    let y = e.clientY - wallData.y - borderHeight - spider.offsetHeight / 2;
    let x = e.clientX - wallData.x - borderWidth - spider.offsetWidth / 2;

    if (y > wallMaxY) {
      y = wallMaxY;
    }

    if (x > wallMaxX) {
      x = wallMaxX;
    }

    if (e.clientY - wallData.y < spider.offsetHeight / 2 + borderHeight) {
      y = 0;
    }

    if (e.clientX - wallData.x < spider.offsetWidth / 2 + borderWidth) {
      x = 0;
    }
    spider.style.top = `${y}px`;
    spider.style.left = `${x}px`;
  }
});
