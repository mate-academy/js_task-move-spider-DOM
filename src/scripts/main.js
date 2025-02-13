'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', (e) => {
  // Calculate 'top'
  const clickPosY = e.clientY;
  const wallHeight = wall.clientHeight;
  const topBeforeParent = wall.offsetTop;
  const spiderHeight = spider.clientHeight;

  const rawTopPos = clickPosY - topBeforeParent - spiderHeight / 2;
  const minTop = 0;
  const maxTop = wallHeight - spiderHeight;

  const topPos = Math.max(minTop, Math.min(maxTop, rawTopPos));

  // Calculate 'left'
  const clickPosX = e.clientX;
  const wallWidth = wall.clientWidth;
  const leftBeforeParent = wall.offsetLeft;
  const spiderWidth = spider.clientWidth;

  const rawLeftPos = clickPosX - leftBeforeParent - spiderWidth / 2;
  const minLeft = 0;
  const maxLeft = wallWidth - spiderWidth;

  const leftPos = Math.max(minLeft, Math.min(maxLeft, rawLeftPos));

  // Move
  spider.style.top = `${topPos}px`;
  spider.style.left = `${leftPos}px`;
});
