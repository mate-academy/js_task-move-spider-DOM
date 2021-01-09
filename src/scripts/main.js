'use strict';

const wall = document.querySelector('.wall');
const spider = wall.querySelector('.spider');

wall.addEventListener('click', e => {
  if (e.target === spider) {
    return;
  }

  let moveX = e.offsetX - spider.height / 2;
  let moveY = e.offsetY - spider.width / 2;
  const widthOfWall = wall.clientWidth - spider.offsetWidth;
  const heightOfWall = wall.clientHeight - spider.offsetHeight;

  if (moveX > widthOfWall) {
    moveX = widthOfWall;
  }

  if (moveY > heightOfWall) {
    moveY = heightOfWall;
  }

  if (moveX < 0) {
    moveX = 0;
  }

  if (moveY < 0) {
    moveY = 0;
  }
  spider.style.top = `${moveY}px`;
  spider.style.left = `${moveX}px`;
});
