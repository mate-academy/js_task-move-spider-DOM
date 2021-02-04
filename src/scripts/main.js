'use strict';

const spider = document.querySelector('.spider');
const div = document.querySelector('.wall');

div.addEventListener('click', e => {
  const maxY = div.clientHeight - spider.height;
  const maxX = div.clientWidth - spider.width;
  let x = e.offsetX - spider.width / 2;
  let y = e.offsetY - spider.height / 2;

  x = Math.max(x, 0);
  x = Math.min(maxX, x);
  y = Math.max(y, 0);
  y = Math.min(maxY, y);

  spider.style.left = `${x}px`;
  spider.style.top = `${y}px`;
});
