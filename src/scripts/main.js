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
  const spiderWidth = spider.clientHeight;
  const spiderHeight = spider.clientWidth;
  const spiderHalfWidth = spiderWidth / 2;
  const spiderHalfHeight = spiderHeight / 2;
  const maxWidth = wallWidth - spiderWidth;
  const maxHeight = wallHeight - spiderHeight;

  if (positionY > maxHeight) {
    spider.style.top = `${maxHeight}px`;
  } else if (positionY < spiderHalfHeight) {
    spider.style.top = `0px`;
  } else {
    spider.style.top = `${positionY - spiderHalfHeight}px`;
  }

  if (positionX > maxWidth) {
    spider.style.left = `${maxWidth}px`;
  } else if (positionX < spiderHalfWidth) {
    spider.style.left = `0px`;
  } else {
    spider.style.left = `${positionX - spiderHalfWidth}px`;
  }
});
