'use strict';

document.querySelector('.wall').addEventListener('click', (e) => {
  const wall = e.currentTarget;
  const spider = document.querySelector('.spider');

  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  const clickX = e.offsetX;
  const clickY = e.offsetY;

  let newLeft = clickX - spiderWidth / 2;
  let newTop = clickY - spiderHeight / 2;

  newLeft = Math.max(0, Math.min(newLeft, wall.clientWidth - spiderWidth));
  newTop = Math.max(0, Math.min(newTop, wall.clientHeight - spiderHeight));

  spider.style.left = `${newLeft}px`;
  spider.style.top = `${newTop}px`;
});
