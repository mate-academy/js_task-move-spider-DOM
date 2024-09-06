'use strict';

document.addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  const wallRect = wall.getBoundingClientRect();

  if (
    e.clientX < wallRect.left ||
    e.clientX > wallRect.right ||
    e.clientY < wallRect.top ||
    e.clientY > wallRect.bottom
  ) {
    return;
  }

  const spiderWidth = spider.width;
  const spiderHeight = spider.height;

  const borderLeft = parseInt(
    window.getComputedStyle(wall).borderLeftWidth,
    10,
  );

  const borderTop = parseInt(window.getComputedStyle(wall).borderTopWidth, 10);

  let newLeft = e.clientX - wallRect.left - borderLeft - spiderWidth / 2;
  let newTop = e.clientY - wallRect.top - borderTop - spiderHeight / 2;

  if (newLeft < 0) {
    newLeft = 0;
  } else if (newLeft + spiderWidth > wallRect.width - 2 * borderLeft) {
    newLeft = wallRect.width - spiderWidth - 2 * borderLeft;
  }

  if (newTop < 0) {
    newTop = 0;
  } else if (newTop + spiderHeight > wallRect.height - 2 * borderTop) {
    newTop = wallRect.height - spiderHeight - 2 * borderTop;
  }

  spider.style.left = `${newLeft}px`;
  spider.style.top = `${newTop}px`;
});
