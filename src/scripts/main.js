'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', e => {
  let x = e.offsetX - spider.clientHeight / 2;
  let y = e.offsetY - spider.clientWidth / 2;
  const width = wall.clientWidth - spider.clientWidth;
  const height = wall.clientHeight - spider.clientHeight;

  x = x < 0 ? 0 : x;
  x = x > width ? width : x;
  y = y < 0 ? 0 : y;
  y = y > height ? height : y;

  spider.style.left = `${x}px`;
  spider.style.top = `${y}px`;
});
