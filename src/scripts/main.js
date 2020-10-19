'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', e => {
  const leftWall = wall.clientLeft + wall.offsetLeft;
  const topWall = wall.clientTop + wall.offsetTop;

  const positionX = e.clientX - leftWall - spider.offsetWidth / 2;
  const positionY = e.clientY - topWall - spider.offsetWidth / 2;

  spider.style.left = `${positionSpider(positionX)}px`;
  spider.style.top = `${positionSpider(positionY)}px`;
});

function positionSpider(position) {
  let allPosition = position;

  if (allPosition < 0) {
    allPosition = 0;
  }

  if (allPosition > wall.clientHeight - spider.offsetHeight) {
    allPosition = wall.clientHeight - spider.offsetHeight;
  }

  return allPosition;
}
