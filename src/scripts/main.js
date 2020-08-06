'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

document.addEventListener('click', e => {
  // write code here
  const item = e.target.closest('.wall');
  let left = 0;
  let top = 0;

  if (!item) {
    return;
  }

  const wallEdge = checkEdgesWall(e);

  if (wallEdge.xPosition === 0) {
    left = e.clientX - spider.x - (spider.offsetWidth / 2);
  } else {
    left = wallEdge.xPosition - spider.x;
  }

  if (wallEdge.yPosition === 0) {
    top = e.clientY - spider.y - (spider.offsetHeight / 2);
  } else {
    top = wallEdge.yPosition - spider.y;
  }

  if (spider.style.left === '') {
    spider.style.left = `${0}px`;
    spider.style.top = `${0}px`;
  }

  spider.style.left = `${parseFloat(spider.style.left) + left}px`;
  spider.style.top = `${parseFloat(spider.style.top) + top}px`;
});

function checkEdgesWall(event) {
  const edgeLeft = wall.offsetLeft + wall.clientLeft;
  const edgeTop = wall.offsetTop + wall.clientTop;
  const edgeRight = edgeLeft - spider.offsetWidth + wall.clientWidth;
  const edgeDown = edgeTop - spider.offsetHeight + wall.clientHeight;

  let positionX = 0;
  let positionY = 0;

  if (event.clientX <= edgeLeft + (spider.offsetWidth / 2)) {
    positionX = edgeLeft;
  }

  if (event.clientX >= edgeRight + (spider.offsetWidth / 2)) {
    positionX = edgeRight;
  }

  if (event.clientY <= edgeTop + (spider.offsetHeight / 2)) {
    positionY = edgeTop;
  }

  if (event.clientY >= edgeDown + (spider.offsetHeight / 2)) {
    positionY = edgeDown;
  }

  return {
    xPosition: positionX,
    yPosition: positionY,
  };
}
