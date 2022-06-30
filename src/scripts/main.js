'use strict';

document.addEventListener('click', e => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  if (e.target !== wall) {
    return;
  }

  const maxCoordX = wall.clientWidth - spider.clientWidth;
  const maxCoordY = wall.clientHeight - spider.clientHeight;
  let x = e.offsetX - (spider.offsetWidth / 2);
  let y = e.offsetY - (spider.offsetHeight / 2);

  if (x < 0) {
    x = 0;
  };

  if (y < 0) {
    y = 0;
  }

  if (x > maxCoordX) {
    x = maxCoordX;
  }

  if (y > maxCoordY) {
    y = maxCoordY;
  }

  spider.style.left = x + 'px';
  spider.style.top = y + 'px';
});
