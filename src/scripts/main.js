'use strict';

document.addEventListener('click', (e) => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');
  const wallRect = wall.getBoundingClientRect();

  const x = e.clientX - wallRect.left;
  const y = e.clientY - wallRect.top;

  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  const centeredX = x - spiderWidth / 2;
  const centeredY = y - spiderHeight / 2;

  const maxX = wall.clientWidth - spiderWidth;
  const maxY = wall.clientHeight - spiderHeight;

  const finalX = Math.max(0, Math.min(centeredX, maxX));
  const finalY = Math.max(0, Math.min(centeredY, maxY));

  spider.style.left = `${finalX}px`;
  spider.style.top = `${finalY}px`;
});
