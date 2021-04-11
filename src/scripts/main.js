'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', e => {
  if (document.elementFromPoint(e.clientX, e.clientY) !== wall) {
    return;
  }

  const wallBottom = wall.clientHeight - spider.clientHeight;
  const wallRight = wall.clientWidth - spider.clientWidth;

  let spiderPosX = e.clientX - wall.clientLeft - wall.offsetLeft
    - (spider.clientWidth / 2);
  let spiderPosY = e.clientY - wall.clientTop - wall.offsetTop
    - (spider.clientHeight / 2);

  spiderPosX = spiderPosX < 0 ? 0 : spiderPosX;
  spiderPosX = spiderPosX > wallRight ? wallRight : spiderPosX;

  spiderPosY = spiderPosY < 0 ? 0 : spiderPosY;
  spiderPosY = spiderPosY > wallBottom ? wallBottom : spiderPosY;

  spider.style.top = `${spiderPosY}px`;
  spider.style.left = `${spiderPosX}px`;
});
