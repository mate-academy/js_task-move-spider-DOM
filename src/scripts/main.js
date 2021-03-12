'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', e => {
  if (!e || !wall.contains(e.target)) {
    return false;
  }

  const positionX = e.offsetX;
  const positionY = e.offsetY;

  const wallHeight = wall.clientHeight;
  const wallWidth = wall.clientWidth;
  const spiderHeight = spider.clientHeight;
  const spiderWidth = spider.clientWidth;
  const maxHeight = wallHeight - spiderHeight;
  const maxWidth = wallWidth - spiderWidth;

  let spiderPositionX = positionX - spiderWidth / 2;
  let spiderPositionY = positionY - spiderHeight / 2;

  if (spiderPositionX > maxWidth) {
    spiderPositionX = maxWidth;
  } else if (spiderPositionX < 0) {
    spiderPositionX = 0;
  }

  if (spiderPositionY > maxHeight) {
    spiderPositionY = maxHeight;
  } else if (spiderPositionY < 0) {
    spiderPositionY = 0;
  }

  spider.style.top = `${spiderPositionY}px`;
  spider.style.left = `${spiderPositionX}px`;
});
