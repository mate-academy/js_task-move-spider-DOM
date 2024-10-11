'use strict';

document.addEventListener('click', (e) => {
  // write code here
  const spider = document.querySelector('.spider');
  const wall = e.target.closest('.wall');

  if (!wall) {
    return;
  }

  const wallRect = wall.getBoundingClientRect();
  const borderSize = parseInt(getComputedStyle(wall).borderWidth);
  const spiderRect = spider.getBoundingClientRect();

  let targetX = e.clientX - wallRect.left - spiderRect.width / 2 - borderSize;
  let targetY = e.clientY - wallRect.top - spiderRect.height / 2 - borderSize;

  targetX = Math.max(0, Math.min(targetX, wall.clientWidth - spiderRect.width));

  targetY = Math.max(
    0,
    Math.min(targetY, wall.clientHeight - spiderRect.height),
  );

  spider.style.left = `${targetX}px`;
  spider.style.top = `${targetY}px`;
});
