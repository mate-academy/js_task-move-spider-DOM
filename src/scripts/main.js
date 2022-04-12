'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

const max = wall.clientHeight - spider.clientHeight;
const min = 0;

wall.addEventListener('click', e => {
  if (e.target !== spider) {
    let x = e.offsetX - (spider.clientWidth / 2);
    let y = e.offsetY - (spider.clientHeight / 2);

    x = x < min ? min : x;
    y = y < min ? min : y;
    x = x > max ? max : x;
    y = y > max ? max : y;

    spider.style.top = `${y}px`;
    spider.style.left = `${x}px`;
  }
});
