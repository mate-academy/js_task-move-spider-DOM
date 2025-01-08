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

  const spiderWidth = spiderRect.width;
  const spiderHeight = spiderRect.height;

  let newLeft = e.clientX - wallRect.left - spiderWidth / 2 - 10;
  let newTop = e.clientY - wallRect.top - spiderHeight / 2 - 10;

  newLeft = Math.max(0, Math.min(newLeft, wall.clientWidth - spiderWidth));
  newTop = Math.max(0, Math.min(newTop, wall.clientHeight - spiderHeight));

  spider.style.left = `${newLeft}px`;
  spider.style.top = `${newTop}px`;
});
