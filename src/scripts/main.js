'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const spider = document.querySelector('.spider');

  document.addEventListener('click', (e) => {
    const wall = e.target.closest('.wall');

    if (wall) {
      const wallRect = wall.getBoundingClientRect();
      const spiderRect = spider.getBoundingClientRect();
      const borderTop = parseInt(getComputedStyle(wall).borderTopWidth, 10);
      const borderLeft = parseInt(getComputedStyle(wall).borderLeftWidth, 10);

      let newLeft =
        e.clientX - wallRect.left - borderLeft - spiderRect.width / 2;
      let newTop = e.clientY - wallRect.top - borderTop - spiderRect.height / 2;

      if (newLeft < 0) {
        newLeft = 0;
      }

      if (newTop < 0) {
        newTop = 0;
      }

      if (newLeft + spiderRect.width > wallRect.width - borderLeft * 2) {
        newLeft = wallRect.width - borderLeft * 2 - spiderRect.width;
      }

      if (newTop + spiderRect.height > wallRect.height - borderTop * 2) {
        newTop = wallRect.height - borderTop * 2 - spiderRect.height;
      }

      spider.style.left = newLeft + 'px';
      spider.style.top = newTop + 'px';
    }
  });
});
