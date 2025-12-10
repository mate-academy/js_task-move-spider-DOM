'use strict';

document.addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');
  const wallRect = wall.getBoundingClientRect();

  const spiderHalfWidth = spider.offsetWidth / 2;
  const spiderHalfHeight = spider.offsetHeight / 2;

  const clickXinsideWall = e.clientX - wallRect.left - wall.clientLeft;
  const clickYinsideWall = e.clientY - wallRect.top - wall.clientTop;

  const spiderCenterWidth = clickXinsideWall - spiderHalfWidth;
  const spiderCenterHeight = clickYinsideWall - spiderHalfHeight;

  const limitWallWidth = wall.clientWidth - spider.offsetWidth;
  const limitWallHeight = wall.clientHeight - spider.offsetHeight;

  if (e.clientX < wallRect.left || e.clientX > wallRect.right) {
    return;
  }

  if (e.clientY < wallRect.top || e.clientY > wallRect.bottom) {
    return;
  }

  const finalX = Math.max(0, Math.min(spiderCenterWidth, limitWallWidth));
  const finalY = Math.max(0, Math.min(spiderCenterHeight, limitWallHeight));

  spider.style.transform = `translate(${finalX}px, ${finalY}px)`;
});
