'use strict';

document.addEventListener('click', e => {
  // write code here
  if (e.target.className !== 'wall') {
    return;
  }

  const spider = document.querySelector('.spider');
  const spiderSize = spider.clientHeight;
  const wall = document.querySelector('.wall');
  const wallLimit = wall.clientWidth - spiderSize;

  let coorX = e.offsetX - spiderSize / 2;
  let coorY = e.offsetY - spiderSize / 2;

  if (coorX > wallLimit || coorX < 0) {
    coorX = coorX > wallLimit
      ? coorX = wallLimit
      : 0;
  }

  if (coorY > wallLimit || coorY < 0) {
    coorY = coorY > wallLimit
      ? coorY = wallLimit
      : 0;
  }

  spider.style.top = coorY + 'px';
  spider.style.left = coorX + 'px';
});
