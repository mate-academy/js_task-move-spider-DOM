'use strict';

document.addEventListener('click', e => {
  const spider = document.querySelector('.spider');
  const spiderWidth = spider.clientWidth / 2;
  const spiderHeight = spider.clientWidth / 2;
  const wall = document.querySelector('.wall');
  const wallHeigth = wall.clientHeight - spider.clientHeight;
  const wallWidth = wall.clientWidth - spider.clientWidth;

  if (e.target !== wall) {
    return;
  }

  let x = e.offsetX - spiderWidth;
  let y = e.offsetY - spiderHeight;

  if (x < 0) {
    x = 0;
  }

  if (x > wallWidth) {
    x = wallWidth;
  }

  if (y < 0) {
    y = 0;
  }

  if (y > wallHeigth) {
    y = wallHeigth;
  }

  spider.style.top = y + 'px';
  spider.style.left = x + 'px';
});
