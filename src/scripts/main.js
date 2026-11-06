'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

wall.addEventListener('click', (e) => {
  const clickX = e.clientX;
  const clickY = e.clientY;

  const wallRect = wall.getBoundingClientRect();
  const spiderRect = spider.getBoundingClientRect();

  const spiderWidth = spiderRect.width;
  const spiderHeight = spiderRect.height;

  const clickLeft = clickX - wallRect.left - wall.clientLeft;
  const clickTop = clickY - wallRect.top - wall.clientTop;

  const spiderLeft = clickLeft - spiderWidth / 2;
  const spiderTop = clickTop - spiderHeight / 2;

  const maxLeft = Math.max(0, wall.clientWidth - spiderWidth);
  const maxTop = Math.max(0, wall.clientHeight - spiderHeight);

  const limitedLeft = Math.max(0, Math.min(spiderLeft, maxLeft));
  const limitedTop = Math.max(0, Math.min(spiderTop, maxTop));

  spider.style.left = `${limitedLeft}px`;
  spider.style.top = `${limitedTop}px`;
});
