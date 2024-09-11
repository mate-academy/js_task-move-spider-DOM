'use strict';

document.addEventListener(
  'click',
  (e) => {
    const wall = document.querySelector('.wall');
    const spider = document.querySelector('.spider');

    if (!wall.contains(e.target)) {
      return;
    }

    const rect = wall.getBoundingClientRect();

    let x = e.clientX - rect.left - wall.clientLeft - spider.offsetWidth / 2;
    let y = e.clientY - rect.top - wall.clientTop - spider.offsetHeight / 2;

    const maxX = wall.offsetWidth - spider.offsetWidth - wall.clientLeft * 2;
    const maxY = wall.offsetHeight - spider.offsetHeight - wall.clientTop * 2;

    x = Math.max(0, Math.min(x, maxX));
    y = Math.max(0, Math.min(y, maxY));

    spider.style.top = y + 'px';
    spider.style.left = x + 'px';
  },
  false,
);
