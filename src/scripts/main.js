'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const spider = document.querySelector('.spider');

  document.addEventListener('click', (e) => {
    const wall = e.target.closest('.wall');

    if (wall) {
      const wallRect = wall.getBoundingClientRect();
      const spiderRect = spider.getBoundingClientRect();

      let newLeft =
        e.clientX - wallRect.left - wall.clientLeft - spiderRect.width / 2;
      let newTop =
        e.clientY - wallRect.top - wall.clientTop - spiderRect.height / 2;

      if (newLeft < 0) {
        newLeft = 0;
      }

      if (newTop < 0) {
        newTop = 0;
      }

      if (newLeft + spiderRect.width > wallRect.width - wall.clientLeft * 2) {
        newLeft = wallRect.width - wall.clientLeft * 2 - spiderRect.width;
      }

      if (newTop + spiderRect.height > wallRect.height - wall.clientTop * 2) {
        newTop = wallRect.height - wall.clientTop * 2 - spiderRect.height;
      }

      spider.style.left = newLeft + 'px';
      spider.style.top = newTop + 'px';
    }
  });
});
