'use strict';

document.addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  const wallRect = wall.getBoundingClientRect();
  const spiderRect = spider.getBoundingClientRect();

  const clickX = e.clientX;
  const clickY = e.clientY;

  let leftPosition =
    clickX - wallRect.left - spiderRect.width / 2;

  let topPosition =
    clickY - wallRect.top - spiderRect.height / 2;

  const maxLeft = wallRect.width - spiderRect.width;
  const maxTop = wallRect.height - spiderRect.height;

  leftPosition = Math.max(0, Math.min(leftPosition, maxLeft));
  topPosition = Math.max(0, Math.min(topPosition, maxTop));

  spider.style.left = `${leftPosition}px`;
  spider.style.top = `${topPosition}px`;
});
