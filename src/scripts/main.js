'use strict';

document.addEventListener('click', e => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  let x = e.offsetX - (spider.offsetWidth / 2);
  let y = e.offsetY - (spider.offsetHeight / 2);

  const maxX = wall.clientWidth - spider.offsetWidth;
  const maxY = wall.clientWidth - spider.offsetWidth;

  if (x < 0) {
    x = 0;
  }

  if (x > maxX) {
    x = maxX;
  }

  if (y < 0) {
    y = 0;
  }

  if (y > maxY) {
    y = maxY;
  }

  if (wall === e.target) {
    spider.style.top = `${y}px`;
    spider.style.left = `${x}px`;
  }
});
