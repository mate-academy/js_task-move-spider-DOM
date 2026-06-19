'use strict';

document.addEventListener('click', (e) => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');
  const spiderRect = spider.getBoundingClientRect();
  const wallRect = wall.getBoundingClientRect();

  if (
    e.clientX < wallRect.left ||
    e.clientX > wallRect.right ||
    e.clientY < wallRect.top ||
    e.clientY > wallRect.bottom
  ) {
    return;
  }

  const x = e.clientX - wallRect.left - wall.clientLeft;
  const y = e.clientY - wallRect.top - wall.clientTop;

  const minLeft = x - spiderRect.width / 2;
  const minTop = y - spiderRect.height / 2;

  const maxLeft = wall.clientWidth - spider.offsetWidth;
  const maxTop = wall.clientHeight - spider.offsetHeight;

  const newLeft = Math.max(0, Math.min(minLeft, maxLeft));
  const newTop = Math.max(0, Math.min(minTop, maxTop));

  spider.style.left = `${newLeft}px`;
  spider.style.top = `${newTop}px`;
});
