'use strict';

document.querySelector('.wall').addEventListener('click', (e) => {
  const spider = e.currentTarget.querySelector('.spider');

  const clickX = e.offsetX;
  const clickY = e.offsetY;

  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  let x = clickX - spiderWidth / 2;
  let y = clickY - spiderHeight / 2;

  const wall = e.currentTarget;

  x = Math.max(0, Math.min(x, wall.clientWidth - spiderWidth));
  y = Math.max(0, Math.min(y, wall.clientHeight - spiderHeight));

  spider.style.left = `${x}px`;
  spider.style.top = `${y}px`;
});
