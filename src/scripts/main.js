'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', e => {
  if (e.target !== wall) {
    return;
  }

  let x = e.offsetX - spider.offsetWidth / 2;
  let y = e.offsetY - spider.offsetHeight / 2;

  [x, y] = [x, y].map(el => {
    if (el > wall.clientWidth - spider.offsetWidth) {
      return wall.clientWidth - spider.offsetWidth;
    } else if (el < 0) {
      return 0;
    }

    return el;
  });

  spider.style.left = x + 'px';
  spider.style.top = y + 'px';
});
