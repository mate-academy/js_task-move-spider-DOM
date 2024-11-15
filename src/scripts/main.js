'use strict';

document.addEventListener('click', (e) => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  if (e.target !== wall && e.target !== spider) {
    return;
  }

  const borderSize = parseInt(getComputedStyle(wall).borderWidth) || 0;
  const wallRect = wall.getBoundingClientRect();
  const { offsetWidth: spiderWidth, offsetHeight: spiderHeight } = spider;

  const minOffsetX = e.clientX - wallRect.left - borderSize - spiderWidth / 2;
  const minOffsetY = e.clientY - wallRect.top - borderSize - spiderHeight / 2;
  const maxOffsetX = wallRect.width - spiderWidth - borderSize * 2;
  const maxOffsetY = wallRect.height - spiderHeight - borderSize * 2;

  const newX = Math.max(0, Math.min(minOffsetX, maxOffsetX));
  const newY = Math.max(0, Math.min(minOffsetY, maxOffsetY));

  spider.style.left = `${newX}px`;
  spider.style.top = `${newY}px`;
});
