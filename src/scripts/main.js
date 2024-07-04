'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const walls = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  document.addEventListener('click', (e) => {
    const wallRect = walls.getBoundingClientRect();
    const spiderRect = spider.getBoundingClientRect();

    let newLeft = e.clientX - wallRect.left - spiderRect.width / 2;
    let newTop = e.clientY - wallRect.top - spiderRect.height / 2;

    if (newLeft < 0) {
      newLeft = 0;
    } else if (newLeft > wallRect.width - spiderRect.width) {
      newLeft = wallRect.width - spiderRect.width;
    }

    if (newTop < 0) {
      newTop = 0;
    } else if (newTop > wallRect.height - spiderRect.height) {
      newTop = wallRect.height - spiderRect.height;
    }

    spider.style.left = `${newLeft}px`;
    spider.style.top = `${newTop}px`;
  });
});
