'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  wall.style.position = 'relative';
  spider.style.position = 'absolute';

  wall.addEventListener('click', (e) => {
    const wallRect = wall.getBoundingClientRect();
    const borderLeft = parseInt(getComputedStyle(wall).borderLeftWidth);
    const borderTop = parseInt(getComputedStyle(wall).borderTopWidth);

    let targetX =
      e.clientX - wallRect.left - borderLeft - spider.offsetWidth / 2;
    let targetY =
      e.clientY - wallRect.top - borderTop - spider.offsetHeight / 2;

    targetX = Math.max(
      0,
      Math.min(targetX, wall.clientWidth - spider.offsetWidth),
    );

    targetY = Math.max(
      0,
      Math.min(targetY, wall.clientHeight - spider.offsetHeight),
    );

    spider.style.left = `${targetX}px`;
    spider.style.top = `${targetY}px`;
  });
});
