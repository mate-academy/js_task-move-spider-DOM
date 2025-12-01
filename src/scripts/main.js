'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', (e) => {
  const wallWidth = wall.clientWidth;
  const wallHeight = wall.clientHeight;

  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  const wallRect = wall.getBoundingClientRect();
  const relativeX = e.clientX - wallRect.left - wall.clientLeft;
  const relativeY = e.clientY - wallRect.top - wall.clientTop;

  let spiderPosLeft = relativeX - spiderWidth / 2;
  let spiderPosTop = relativeY - spiderHeight / 2;

  spiderPosLeft = Math.max(0, Math.min(spiderPosLeft, wallWidth - spiderWidth));

  spiderPosTop = Math.max(0, Math.min(spiderPosTop, wallHeight - spiderHeight));

  spider.style.top = `${spiderPosTop}px`;
  spider.style.left = `${spiderPosLeft}px`;
});
