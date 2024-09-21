'use strict';

const wall = document.getElementsByClassName('wall')[0];
const spider = document.getElementsByClassName('spider')[0];

document.addEventListener('click', (e) => {
  const wallBounds = wall.getBoundingClientRect();

  if (e.target.closest('.wall')) {
    let x = e.clientX - wallBounds.left - wall.clientTop;
    let y = e.clientY - wallBounds.top - wall.clientTop;

    if (x < 0) {
      x = 0;
    } else if (x > wall.clientWidth - spider.clientWidth) {
      x = wall.clientWidth - spider.clientWidth;
    }

    if (y < 0) {
      y = 0;
    } else if (y > wall.clientHeight - spider.clientHeight) {
      y = wall.clientHeight - spider.clientWidth;
    }

    spider.style.left = x + 'px';
    spider.style.top = y + 'px';
  }
});
