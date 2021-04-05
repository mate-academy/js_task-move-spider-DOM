'use strict';

const spider = document.getElementsByClassName('spider')[0];
const wall = document.getElementsByClassName('wall')[0];

wall.addEventListener('click', e => {
  const startOfWallX = wall.getBoundingClientRect().x + wall.clientLeft;
  const startOfWallY = wall.getBoundingClientRect().y + wall.clientTop;
  const endOfWallX = wall.clientWidth + startOfWallX;
  const endOfWallY = wall.clientHeight + startOfWallY;

  if (e.clientX < startOfWallX + spider.width / 2) {
    spider.style.left = 0;
  } else if (e.clientX > endOfWallX - spider.width / 2) {
    spider.style.left = wall.clientWidth - spider.width + 'px';
  } else {
    spider.style.left = e.clientX - startOfWallX - spider.width / 2 + 'px';
  }

  if (e.clientY < startOfWallY + spider.height / 2) {
    spider.style.top = 0;
  } else if (e.clientY > endOfWallY - spider.height / 2) {
    spider.style.top = wall.clientHeight - spider.height + 'px';
  } else {
    spider.style.top = e.clientY - startOfWallY - spider.height / 2 + 'px';
  }
});
