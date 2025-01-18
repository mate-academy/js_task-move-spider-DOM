'use strict';

const field = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const spiderWidth = spider.clientWidth;
const spiderHeight = spider.clientHeight;
const fieldWidth = field.clientWidth;
const fieldHeight = field.clientHeight;

field.addEventListener('click', (e) => {
  let x = e.offsetX - spiderWidth / 2;
  let y = e.offsetY - spiderHeight / 2;

  if (x < 0) {
    x = 0;
  }

  if (y < 0) {
    y = 0;
  }

  if (x + spiderWidth > fieldWidth) {
    x = fieldWidth - spiderWidth;
  }

  if (y + spiderHeight > fieldHeight) {
    y = fieldHeight - spiderHeight;
  }

  spider.style.top = y + 'px';
  spider.style.left = x + 'px';
});
