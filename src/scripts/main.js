'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', (e) => {
  const rect = wall.getBoundingClientRect();
  const spiderRect = spider.getBoundingClientRect();
  const targetX = e.clientX - rect.left - spiderRect.width / 2;
  const targetY = e.clientY - rect.top - spiderRect.height / 2;

  function clamp(value, min, max) {
    return Math.max(min, Math.min(value, max));
  }

  const clampedX = clamp(targetX, 0, rect.width - spiderRect.width);
  const clampedY = clamp(targetY, 0, rect.height - spiderRect.height);

  spider.style.left = `${clampedX}px`;
  spider.style.top = `${clampedY}px`;
});
