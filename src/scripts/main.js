'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

document.addEventListener('click', (e) => {
  const wallRect = wall.getBoundingClientRect();
  const wallInsideLeft = wallRect.left + wall.clientLeft;
  const wallInsideTop = wallRect.top + wall.clientTop;

  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  let clickLeft = e.clientX - wallInsideLeft - spiderWidth / 2;
  let clickTop = e.clientY - wallInsideTop - spiderHeight / 2;

  clickLeft = Math.max(0, Math.min(clickLeft, wall.clientWidth - spiderWidth));
  clickTop = Math.max(0, Math.min(clickTop, wall.clientHeight - spiderHeight));

  spider.style.left = `${clickLeft}px`;
  spider.style.top = `${clickTop}px`;
});
