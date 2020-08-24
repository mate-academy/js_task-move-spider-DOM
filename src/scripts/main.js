'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');
const spiderSize = spider.clientHeight;
const wallSize = wall.clientHeight;

document.addEventListener('click', event => {
  if (event.target !== wall) {
    return;
  };

  let x = event.offsetX - spiderSize / 2;
  let y = event.offsetY - spiderSize / 2;

  if (x > wallSize - spiderSize) {
    x = wallSize - spiderSize;
  } else if (x < 0) {
    x = 0;
  };

  if (y > wallSize - spiderSize) {
    y = wallSize - spiderSize;
  } else if (y < 0) {
    y = 0;
  };

  spider.style.left = x + 'px';
  spider.style.top = y + 'px';
});
