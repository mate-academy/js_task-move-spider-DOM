'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  const borderWidth = parseInt(window.getComputedStyle(wall).borderWidth);

  document.addEventListener('click', (e) => {
    const wallRect = wall.getBoundingClientRect();
    const spiderRect = spider.getBoundingClientRect();

    if (
      e.clientX < wallRect.left + borderWidth ||
      e.clientX > wallRect.right - borderWidth ||
      e.clientY < wallRect.top + borderWidth ||
      e.clientY > wallRect.bottom - borderWidth
    ) {
      return;
    }

    let newLef = e.clientX - wallRect.left - spiderRect.width / 2 - borderWidth;
    let newTop = e.clientY - wallRect.top - spiderRect.height / 2 - borderWidth;

    if (newLef < 0) {
      newLef = 0;
    } else if (newLef > wallRect.width - spiderRect.width - 2 * borderWidth) {
      newLef = wallRect.width - spiderRect.width - 2 * borderWidth;
    }

    if (newTop < 0) {
      newTop = 0;
    } else if (newTop > wallRect.height - spiderRect.height - 2 * borderWidth) {
      newTop = wallRect.height - spiderRect.height - 2 * borderWidth;
    }

    spider.style.left = `${newLef}px`;
    spider.style.top = `${newTop}px`;
  });
});
