'use strict';

const field = document.querySelector('.wall');
const spider = document.querySelector('.spider');

field.addEventListener('click', (e) => {
  const fieldMore = field.getBoundingClientRect();
  const spiderMore = spider.getBoundingClientRect();

  const widthX = getComputedStyle(field).borderLeftWidth;
  const borderX = parseInt(widthX);
  const heightY = getComputedStyle(field).borderTopWidth;
  const borderY = parseInt(heightY);

  let x = e.clientX - fieldMore.left - spiderMore.width / 2 - borderX;
  let y = e.clientY - fieldMore.top - spiderMore.height / 2 - borderY;

  x = Math.max(0, Math.min(x, field.clientWidth - spiderMore.width));
  y = Math.max(0, Math.min(y, field.clientHeight - spiderMore.height));

  spider.style.left = x + 'px';
  spider.style.top = y + 'px';
});
