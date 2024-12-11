'use strict';

document.addEventListener('click', (e) => {
  // write code here
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  wall.addEventListener('click', () => {
    const wallRect = wall.getBoundingClientRect();
    const spiderRect = spider.getBoundingClientRect();

    const spiderHalfWidth = spiderRect.width / 2;
    const spiderHalfHeight = spiderRect.height / 2;
    const borderWidth = parseInt(getComputedStyle(wall).borderWidth, 10);

    const clickX = e.clientX - wallRect.left;
    const clickY = e.clientY - wallRect.top;

    let newLeft = clickX - spiderHalfWidth - borderWidth;
    let newTop = clickY - spiderHalfHeight - borderWidth;

    if (newLeft < 0) {
      newLeft = 0;
    }

    if (newTop < 0) {
      newTop = 0;
    }

    if (newLeft + spiderRect.width > wallRect.width - 2 * borderWidth) {
      newLeft = wallRect.width - spiderRect.width - 2 * borderWidth;
    }

    if (newTop + spiderRect.height > wallRect.height - 2 * borderWidth) {
      newTop = wallRect.height - spiderRect.height - 2 * borderWidth;
    }

    spider.style.position = 'absolute';
    spider.style.left = `${newLeft}px`;
    spider.style.top = `${newTop}px`;
  });
});
