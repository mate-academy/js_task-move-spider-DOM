'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', e => {
  e.preventDefault();

  if (!e || !wall.contains(e.target)) {
    return;
  }

  const positionY = e.offsetY;
  const positionX = e.offsetX;
  const wallHeight = wall.clientHeight;
  const wallWidth = wall.clientWidth;
  const spiderHeight = spider.clientWidth;
  const spiderWidth = spider.clientHeight;
  const spiderHalfHeight = spiderHeight / 2;
  const spiderHalfWidth = spiderWidth / 2;
  const maxHeight = wallHeight - spiderHeight;
  const maxWidth = wallWidth - spiderWidth;
  let spiderPositionFromTop = positionY - spiderHalfHeight;
  let spiderPositionFromLeft = positionX - spiderHalfWidth;

  if (spiderPositionFromTop > maxHeight) {
    spiderPositionFromTop = maxHeight;
  } else if (spiderPositionFromTop < 0) {
    spiderPositionFromTop = 0;
  }

  if (spiderPositionFromLeft > maxWidth) {
    spiderPositionFromLeft = maxWidth;
  } else if (spiderPositionFromLeft < 0) {
    spiderPositionFromLeft = 0;
  }

  spider.style.top = `${spiderPositionFromTop}px`;
  spider.style.left = `${spiderPositionFromLeft}px`;
});
