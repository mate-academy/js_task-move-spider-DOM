'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

const spiderSize = spider.offsetWidth;
const max = wall.clientWidth - spiderSize;

document.addEventListener('click', e => {
  if (e.target !== wall) {
    return;
  }

  let x = e.offsetX - (spiderSize / 2);
  let y = e.offsetY - (spiderSize / 2);

  x = isFalid(x);
  y = isFalid(y);

  spider.style.left = `${x}px`;
  spider.style.top = `${y}px`;
});

function isFalid(value) {
  if (value < 0) {
    return 0;
  }

  if (value > max) {
    return max;
  }

  return value;
}
