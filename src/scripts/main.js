'use strict';

document.addEventListener('click', (e) => {
  const wall = document.querySelector('div.wall');
  const spider = document.querySelector('img.spider');

  const details = wall.getBoundingClientRect();

  const clickX = e.clientX;
  const clickY = e.clientY;

  const isOutside =
    clickX < details.left ||
    clickX > details.right ||
    clickY < details.top ||
    clickY > details.bottom;

  if (isOutside) {
    return;
  }

  let x = e.clientX - details.left - wall.clientLeft;
  let y = e.clientY - details.top - wall.clientTop;

  x = x - spider.offsetWidth / 2;
  y = y - spider.offsetHeight / 2;

  const maxX = wall.clientWidth - spider.offsetWidth;
  const maxY = wall.clientHeight - spider.offsetHeight;

  if (x < 0) {
    x = 0;
  }

  if (y < 0) {
    y = 0;
  }

  if (x > maxX) {
    x = maxX;
  }

  if (y > maxY) {
    y = maxY;
  }

  spider.style.left = x + 'px';
  spider.style.top = y + 'px';
});
