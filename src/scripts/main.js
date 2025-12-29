'use strict';

document.addEventListener('click', (e) => {
  // write code here
  const container = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  const rect = container.getBoundingClientRect();
  const xInContainer = e.clientX - rect.left;
  const yInContainer = e.clientY - rect.top;

  const spiderRect = spider.getBoundingClientRect();
  let targetX = xInContainer - spiderRect.width / 2;
  let targetY = yInContainer - spiderRect.height / 2;

  const minX = 0;

  const maxX = rect.width - spiderRect.width;

  const minY = 0;

  const maxY = rect.height - spiderRect.height;

  targetX = Math.max(minX, Math.min(targetX, maxX));
  targetY = Math.max(minY, Math.min(targetY, maxY));

  spider.style.left = targetX + 'px';
  spider.style.top = targetY + 'px';
});
