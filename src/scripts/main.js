'use strict';

document.addEventListener('click', (e) => {
  e.preventDefault();

  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  const wallRect = wall.getBoundingClientRect();
  const spiderRect = spider.getBoundingClientRect();
  const borderWidth = parseInt(getComputedStyle(wall).borderWidth);

  if (
    e.clientX < wallRect.left ||
    e.clientX > wallRect.right ||
    e.clientY < wallRect.top ||
    e.clientY > wallRect.bottom
  ) {
    return;
  }

  let newLeft = e.clientX - wallRect.left - spiderRect.width / 2 - borderWidth;
  let newTop = e.clientY - wallRect.top - spiderRect.height / 2 - borderWidth;

  if (newLeft < 0) {
    newLeft = 0;
  } else if (newLeft + spiderRect.width > wallRect.width - 2 * borderWidth) {
    newLeft = wallRect.width - 2 * borderWidth - spiderRect.width;
  }

  if (newTop < 0) {
    newTop = 0;
  } else if (newTop + spiderRect.height > wallRect.height - 2 * borderWidth) {
    newTop = wallRect.height - 2 * borderWidth - spiderRect.height;
  }

  spider.style.left = `${newLeft}px`;
  spider.style.top = `${newTop}px`;
});
