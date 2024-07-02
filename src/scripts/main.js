'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  wall.addEventListener('click', (e) => {
    const wallRect = wall.getBoundingClientRect();
    const spiderRect = spider.getBoundingClientRect();

    let newLeft = e.clientX - wallRect.left - spiderRect.width / 2;
    let newTop = e.clientY - wallRect.top - spiderRect.height / 2;

    // Check boundaries for left and right
    if (newLeft < 0) {
      newLeft = 0;
    } else if (newLeft + spiderRect.width > wallRect.width) {
      newLeft = wallRect.width - spiderRect.width;
    }

    // Check boundaries for top and bottom
    if (newTop < 0) {
      newTop = 0;
    } else if (newTop + spiderRect.height > wallRect.height) {
      newTop = wallRect.height - spiderRect.height;
    }

    spider.style.left = `${newLeft}px`;
    spider.style.top = `${newTop}px`;
  });
});
