'use strict';

const wall = document.querySelector('.wall');

wall.addEventListener('click', (e) => {
  if (e.target.closest('.wall')) {
    const spider = document.querySelector('.spider');
    let x =
      e.clientX - wall.offsetLeft - wall.clientLeft - spider.offsetWidth / 2;
    let y =
      e.clientY - wall.offsetTop - wall.clientTop - spider.offsetHeight / 2;

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

    spider.style.top = y + 'px';
    spider.style.left = x + 'px';
  }
});
