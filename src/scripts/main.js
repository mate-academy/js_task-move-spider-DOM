'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', (event) => {
  const leftSideOfWall = wall.clientLeft + wall.offsetLeft;
  const topSideOfWall = wall.clientTop + wall.offsetTop;

  const positionX = event.clientX - leftSideOfWall - spider.offsetWidth / 2;
  const positionY = event.clientY - topSideOfWall - spider.offsetWidth / 2;

  spider.style.left = `${positionOfSpider(positionX)}px`;
  spider.style.top = `${positionOfSpider(positionY)}px`;
});

function positionOfSpider(position) {
  let correctPosition = position;

  if (correctPosition < 0) {
    correctPosition = 0;
  }

  if (correctPosition > wall.clientHeight - spider.offsetHeight) {
    correctPosition = wall.clientHeight - spider.offsetHeight;
  }

  return correctPosition;
}
