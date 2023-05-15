'use strict';

document.addEventListener('click', e => {
  // write code here
  if (e.target.className !== 'wall') {
    return;
  }

  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  const maxTop = wall.clientHeight - spider.clientHeight;
  const maxLeft = wall.clientWidth - spider.clientWidth;

  let spiderCoordY = e.clientY - wall.offsetTop
    - wall.clientTop - spider.clientHeight / 2;

  let spiderCoordX = e.clientX - wall.offsetLeft
    - wall.clientLeft - spider.clientWidth / 2;

  if (spiderCoordY > maxTop) {
    spiderCoordY = maxTop;
  }

  if (spiderCoordY < 0) {
    spiderCoordY = 0;
  }

  if (spiderCoordX > maxLeft) {
    spiderCoordX = maxLeft;
  }

  if (spiderCoordX < 0) {
    spiderCoordX = 0;
  }

  spider.style.top = `${spiderCoordY}px`;
  spider.style.left = `${spiderCoordX}px`;
});
