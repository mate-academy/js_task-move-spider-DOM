'use strict';

document.addEventListener('click', e => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  if (e.target.closest('.wall') && !e.target.closest('.spider')) {
    let x = e.offsetX - (spider.offsetWidth / 2);
    let y = e.offsetY - (spider.offsetHeight / 2);

    if (x < 0) {
      x = 0;
    } else if (x > wall.clientWidth - spider.offsetWidth) {
      x = wall.clientWidth - spider.offsetWidth;
    }

    if (y < 0) {
      y = 0;
    } else if (y > wall.clientHeight - spider.offsetHeight) {
      y = wall.clientHeight - spider.offsetHeight;
    }

    spider.style.left = `${x}px`;
    spider.style.top = `${y}px`;
  }
});
