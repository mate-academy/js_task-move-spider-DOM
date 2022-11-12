'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', e => {
  if (e.target !== wall) {
    return;
  }

  const borderWidth = 10;
  let x = e.offsetX - spider.width / 2 - borderWidth;
  let y = e.offsetY - spider.height / 2 - borderWidth;

  const borderX = wall.clientWidth - spider.clientWidth;
  const borderY = wall.clientHeight - spider.clientHeight;

  x = x > borderX ? borderX : x;
  x = x < 0 ? 0 : x;
  y = y > borderY ? borderY : y;
  y = y < 0 ? 0 : y;

  spider.style.left = x + 'px';
  spider.style.top = y + 'px';
});
