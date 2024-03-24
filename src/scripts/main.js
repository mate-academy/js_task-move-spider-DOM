'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', (e) => {
  if (e.target.className !== 'wall') {
    return;
  }

  const maxX = wall.clientWidth - spider.clientWidth;
  const maxY = wall.clientHeight - spider.clientHeight;
  const x = e.clientX;
  const y = e.clientY;
  const startWallX = wall.offsetLeft;
  const startWallY = wall.offsetTop;
  let left = x - startWallX - spider.clientWidth / 2;
  let topY = y - startWallY - spider.clientHeight / 2;

  if (left > maxX) {
    left = maxX;
  }

  if (left < 0) {
    left = 0;
  }

  if (topY > maxY) {
    topY = maxY;
  }

  if (topY < 0) {
    topY = 0;
  }

  spider.style.left = `${left}px`;
  spider.style.top = `${topY}px`;
});
