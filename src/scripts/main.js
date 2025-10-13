'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  if (!wall || !spider) {
    return;
  }

  wall.addEventListener('click', (e) => {
    const wallRect = wall.getBoundingClientRect();

    let spiderTop =
      e.clientY - wallRect.y - wall.clientLeft - spider.offsetWidth / 2;
    let spiderLeft =
      e.clientX - wallRect.x - wall.clientTop - spider.offsetHeight / 2;

    if (spiderTop < 0) {
      spiderTop = 0;
    }

    if (spiderLeft < 0) {
      spiderLeft = 0;
    }

    if (spiderTop > wall.clientHeight - spider.offsetHeight) {
      spiderTop = wall.clientHeight - spider.offsetHeight;
    }

    if (spiderLeft > wall.clientWidth - spider.offsetWidth) {
      spiderLeft = wall.clientWidth - spider.offsetWidth;
    }

    spider.style.top = spiderTop + 'px';
    spider.style.left = spiderLeft + 'px';
  });
});
