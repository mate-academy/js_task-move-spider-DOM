'use strict';

document.addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  const wallRect = wall.getBoundingClientRect();
  const spiderRect = spider.getBoundingClientRect();

  if (
    e.clientX < wallRect.left ||
    e.clientX > wallRect.right ||
    e.clientY < wallRect.top ||
    e.clientY > wallRect.bottom
  ) {
    return;
  }

  let newLeft =
    e.clientX - wallRect.left - wall.clientLeft - spiderRect.width / 2;
  let newTop =
    e.clientY - wallRect.top - wall.clientTop - spiderRect.height / 2;

  newLeft = Math.max(0, Math.min(newLeft, wall.clientWidth - spiderRect.width));
  newTop = Math.max(0, Math.min(newTop, wall.clientHeight - spiderRect.height));

  spider.style.left = `${newLeft}px`;
  spider.style.top = `${newTop}px`;
});
