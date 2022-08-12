'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const positionWallX = wall.offsetLeft + wall.clientLeft;
const positionWallY = wall.offsetTop + wall.clientTop;
const spiderX = spider.getBoundingClientRect().left + window.pageXOffset;
const spiderY = spider.getBoundingClientRect().top + window.pageYOffset;
const correctX = spider.clientWidth / 2;
const correctY = spider.clientHeight / 2;
const correctWallX = wall.clientWidth;
const correctWallY = wall.clientHeight;

wall.addEventListener('click', (e) => {
  // write code here
  let x = e.clientX - spiderX < correctX
    ? 0
    : e.clientX - spiderX - correctX;
  let y = e.clientY - spiderY < correctY
    ? 0
    : e.clientY - spiderY - correctY;

  if (positionWallX + correctWallX - e.clientX - correctX <= 0) {
    x = correctWallX - correctX * 2;
  }

  if (positionWallY + correctWallY - e.clientY - correctY <= 0) {
    y = correctWallY - correctY * 2;
  }
  spider.style.left = `${x}px`;
  spider.style.top = `${y}px`;
});
window.addEventListener('resize', () => document.location.reload());
