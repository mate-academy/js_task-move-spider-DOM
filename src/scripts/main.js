'use strict';

document.addEventListener('click', e => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');
  const wallX = wall.offsetLeft + wall.clientLeft;
  const wallY = wall.offsetTop + wall.clientTop;
  let x = e.clientX - wallX - (spider.offsetWidth / 2);
  let y = e.clientY - wallY - (spider.offsetHeight / 2);

  if (x < 0) {
    x = 0;
  }

  if (x > wall.clientWidth - spider.offsetWidth) {
    x = wall.clientWidth - spider.offsetWidth;
  }

  if (y < 0) {
    y = 0;
  }

  if (y > wall.clientHeight - spider.offsetHeight) {
    y = wall.clientHeight - spider.offsetHeight;
  }

  spider.style.top = `${y}px`;
  spider.style.left = `${x}px`;
});
