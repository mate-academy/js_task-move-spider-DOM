'use strict';

document.addEventListener('click', (e) => {
  const spider = document.querySelector('.spider');
  const wall = spider.parentElement;

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

  let newSpiderLeft = e.clientX - wallRect.left - borderLeft - spiderWidth / 2;
  let newSpiderTop = e.clientY - wallRect.top - borderTop - spiderHeight / 2;

  if (newSpiderLeft < 0) {
    newSpiderLeft = 0;
  } else if (newSpiderLeft + spiderWidth > wallRect.width - 2 * borderLeft) {
    newSpiderLeft = wallRect.width - spiderWidth - 2 * borderLeft;
  }

  if (newSpiderTop < 0) {
    newSpiderTop = 0;
  } else if (newSpiderTop + spiderHeight > wallRect.height - 2 * borderTop) {
    newSpiderTop = wallRect.height - spiderHeight - 2 * borderTop;
  }

  spider.style.position = 'absolute';
  spider.style.left = `${newSpiderLeft}px`;
  spider.style.top = `${newSpiderTop}px`;
});
