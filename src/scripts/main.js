'use strict';

document.addEventListener('click', (e) => {
  const wall = document.querySelector(`.wall`);
  const spider = wall.querySelector('.spider');

  if (e.target !== wall) {
    return;
  }

  const min = 0;
  const maxX = wall.clientWidth - spider.clientWidth;
  const maxY = wall.clientHeight - spider.clientHeight;

  let currX = e.offsetX - spider.clientWidth / 2;
  let currY = e.offsetY - spider.clientHeight / 2;

  if (currX < min) {
    currX = min;
  }

  if (currY < min) {
    currY = min;
  }

  if (currX > maxX) {
    currX = maxX;
  }

  if (currY > maxY) {
    currY = maxY;
  }

  spider.style.top = currY + 'px';
  spider.style.left = currX + 'px';
});
