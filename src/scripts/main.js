'use strict';

const div = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const divStyle = getComputedStyle(div);
const spiderStyle = getComputedStyle(spider);

const max = parseFloat(divStyle.width) - (parseFloat(spiderStyle.width) / 2);
const min = parseFloat(spiderStyle.width) / 2;

div.addEventListener('click', e => {
  let x = e.offsetX;
  let y = e.offsetY;

  if (x > max) {
    x = max;
  }

  if (x < min) {
    x = min;
  }

  if (y > max) {
    y = max;
  }

  if (y < min) {
    y = min;
  }

  spider.style.top = `${y - min}px`;
  spider.style.left = `${x - min}px`;
});
