'use strict';

const spider = document.querySelector('.spider');
const field = document.querySelector('.wall');

field.addEventListener('click', (e) => {
  // const spiderRect = spider.getBoundingClientRect();
  const fieldRect = field.getBoundingClientRect();

  // eslint-disable-next-line max-len
  let x =
    e.clientX - fieldRect.left - field.clientLeft - spider.clientWidth / 2;

  let y = e.clientY - fieldRect.top - field.clientTop - spider.clientHeight / 2;

  if (x < 0) {
    x = 0;
  }

  if (y < 0) {
    y = 0;
  }

  const maxX = field.clientWidth - spider.clientWidth;
  const maxY = field.clientHeight - spider.clientHeight;

  if (x > maxX) {
    x = maxX;
  }

  if (y > maxY) {
    y = maxY;
  }

  spider.style.left = x + 'px';
  spider.style.top = y + 'px';
});
