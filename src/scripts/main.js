'use strict';

document.addEventListener('click', e => {
  if (e.target.className === 'wall') {
    const spider = document.querySelector('.spider');
    const wall = document.querySelector('.wall');

    let left = e.pageX - wall.offsetLeft
      - wall.clientLeft - spider.clientWidth / 2;
    let up = e.pageY
      - wall.offsetTop - wall.clientTop
      - spider.clientHeight / 2;

    if (left < 0) {
      left = 0;
    }

    if (left > wall.clientWidth - spider.clientWidth) {
      left = wall.clientWidth - spider.clientWidth;
    }

    if (up < 0) {
      up = 0;
    }

    if (up > wall.clientHeight - spider.clientHeight) {
      up = wall.clientHeight - spider.clientHeight;
    }

    spider.style.left = left + 'px';
    spider.style.top = up + 'px';
  }
});
