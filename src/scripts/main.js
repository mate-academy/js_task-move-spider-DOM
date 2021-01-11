'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');
const spiderWidth = spider.clientWidth;
const wallWidth = wall.clientWidth;

const coord = (arg) => {
  if (arg < spiderWidth / 2) {
    return 0;
  } else if (arg > wallWidth - spiderWidth / 2) {
    return wallWidth - spiderWidth;
  } else {
    return arg - spiderWidth / 2;
  }
};

document.addEventListener('click', e => {
  if (e.target !== wall) {
    return;
  }

  spider.style.top = `${coord(e.offsetY)}px`;
  spider.style.left = `${coord(e.offsetX)}px`;
});
