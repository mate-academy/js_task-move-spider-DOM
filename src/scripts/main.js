'use strict';

document.addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');

  if (e.target !== wall) {
    return;
  }

  const spider = document.querySelector('.spider');
  const wallRect = wall.getBoundingClientRect();
  const spiderRect = spider.getBoundingClientRect();

  const localX =
    e.clientX - spiderRect.width / 2 - wallRect.left - wall.clientLeft;
  const localY =
    e.clientY - spiderRect.height / 2 - wallRect.top - wall.clientTop;
  const minTop = 0;
  const maxTop = wall.clientHeight - spiderRect.height;
  const minLeft = 0;
  const maxLeft = wall.clientWidth - spiderRect.width;
  const topPos = Math.max(minTop, Math.min(localY, maxTop));
  const leftPos = Math.max(minLeft, Math.min(localX, maxLeft));

  spider.style.top = `${topPos}px`;
  spider.style.left = `${leftPos}px`;
});
