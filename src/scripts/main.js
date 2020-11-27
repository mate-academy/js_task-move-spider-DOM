'use strict';

document.addEventListener('click', e => {
  // write code here
  const wall = document.querySelector('.wall');
  const spider = wall.querySelector('.spider');
  const fieldPosition = wall.getBoundingClientRect();
  const fieldX = fieldPosition.left + wall.clientLeft;
  const fieldY = fieldPosition.top + wall.clientTop;
  let spiderX = e.clientX - fieldX - spider.offsetWidth / 2;
  let spiderY = e.clientY - fieldY - spider.offsetHeight / 2;
  const maxX = wall.clientWidth - spider.clientWidth;
  const maxY = wall.clientHeight - spider.clientHeight;

  if (spiderX < 0) {
    spiderX = 0;
  }

  if (spiderX > maxX) {
    spiderX = maxX;
  }

  if (spiderY < 0) {
    spiderY = 0;
  }

  if (spiderY > maxY) {
    spiderY = maxY;
  }

  spider.style.top = `${spiderY}px`;
  spider.style.left = `${spiderX}px`;
});
