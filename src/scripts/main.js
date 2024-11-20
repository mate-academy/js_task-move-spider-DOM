'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', (e) => {
  if (e.target !== wall) {
    return;
  }

  const wallX = wall.offsetLeft;
  const wallY = wall.offsetTop;
  const borderX = wall.clientLeft;
  const borderY = wall.clientTop;
  let x = e.clientX - wallX - borderX - spider.offsetWidth / 2;
  let y = e.clientY - wallY - borderY - spider.offsetHeight / 2;

  if (x < 0) {
    x = 0;
  }

  if (y < 0) {
    y = 0;
  }

  if (x + spider.offsetWidth > wall.clientWidth) {
    x = wall.clientWidth - spider.offsetWidth;
  }

  if (y + spider.offsetHeight > wall.clientHeight) {
    y = wall.clientHeight - spider.offsetHeight;
  }

  spider.style.left = `${x}px`;
  spider.style.top = `${y}px`;
});
