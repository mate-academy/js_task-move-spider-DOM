'use strict';

const wall = document.body.querySelector('.wall');
const spider = document.body.querySelector('.spider');

spider.style.position = 'absolute';
wall.style.position = 'relative';

document.addEventListener('click', (e) => {
  const wallRect = wall.getBoundingClientRect();

  const clickX = e.clientX - wallRect.left;
  const clickY = e.clientY - wallRect.top;

  const spiderWidth = spider.clientWidth;
  const spiderHeight = spider.clientHeight;

  let finalX = clickX - spiderWidth / 2;
  let finalY = clickY - spiderHeight / 2;

  finalX = Math.max(0, Math.min(finalX, wall.clientWidth - spiderWidth));
  finalY = Math.max(0, Math.min(finalY, wall.clientHeight - spiderHeight));

  spider.style.left = finalX + 'px';
  spider.style.top = finalY + 'px';
});
