'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const spider = document.querySelector('.spider');
  const walls = document.querySelector('.walls');

  if (!spider || !walls) {
    return;
  }

  document.addEventListener('click', (e) => {
    const wallsRect = walls.getBoundingClientRect();

    const spiderRect = spider.getBoundingClientRect();
    const spiderWidth = spiderRect.width;
    const spiderHeight = spiderRect.height;

    const clickX = e.clientX - wallsRect.left;
    const clickY = e.clientY - wallsRect.top;

    let newLeft = clickX - spiderWidth / 2;
    let newTop = clickY - spiderHeight / 2;

    newLeft = Math.max(0, Math.min(newLeft, wallsRect.width - spiderWidth));
    newTop = Math.max(0, Math.min(newTop, wallsRect.height - spiderHeight));

    spider.style.left = `${newLeft}px`;
    spider.style.top = `${newTop}px`;
  });
});
