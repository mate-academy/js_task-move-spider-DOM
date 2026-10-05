'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', (e) => {
  const wallRect = wall.getBoundingClientRect();

  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  const wallClientLeft = wallRect.left + wall.clientLeft;
  const wallClientTop = wallRect.top + wall.clientTop;

  let leftCoord = e.clientX - wallClientLeft - spiderWidth / 2;
  let topCoord = e.clientY - wallClientTop - spiderHeight / 2;

  const minLeft = 0;
  const maxLeft = wall.clientWidth - spiderWidth;

  const minTop = 0;
  const maxTop = wall.clientHeight - spiderHeight;

  leftCoord = Math.max(minLeft, Math.min(leftCoord, maxLeft));
  topCoord = Math.max(minTop, Math.min(topCoord, maxTop));

  spider.style.left = `${leftCoord}px`;
  spider.style.top = `${topCoord}px`;
});
