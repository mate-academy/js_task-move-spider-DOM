'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', (e) => {
  if (e.target !== wall) {
    return;
  }

  const maxX = wall.clientHeight - spider.clientHeight;
  const maxY = wall.clientWidth - spider.clientWidth;

  let spiderX = e.offsetX - spider.clientHeight / 2;
  let spiderY = e.offsetY - spider.clientWidth / 2;

  if (spiderX > maxX) {
    spiderX = maxX;
  }

  if (spiderY > maxY) {
    spiderY = maxY;
  }

  if (spiderX < 0) {
    spiderX = 0;
  }

  if (spiderY < 0) {
    spiderY = 0;
  }

  spider.style.left = `${spiderX}px`;
  spider.style.top = `${spiderY}px`;
});
