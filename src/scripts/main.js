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

  if (positionY > wallHeight - spiderHeight / 2) {
    spider.style.top = `${wallHeight - spiderHeight}px`;
  } else if (positionY < spiderHeight / 2) {
    spider.style.top = `0px`;
  } else {
    spider.style.top = `${positionY - spiderHeight / 2}px`;
  }

  if (positionX > wallWidth - spiderWidth / 2) {
    spider.style.left = `${wallWidth - spiderWidth}px`;
  } else if (positionX < spiderWidth / 2) {
    spider.style.left = `0px`;
  } else {
    spider.style.left = `${positionX - spiderWidth / 2}px`;
  }
});
