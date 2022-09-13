'use strict';

document.addEventListener('click', e => {
  let x = e.offsetX;
  let y = e.offsetY;

  const spider = document.querySelector('.spider');

  const wall = document.querySelector('.wall');

  if (e.target !== wall) {
    return;
  }

  if (x > wall.clientWidth - spider.clientWidth / 2) {
    x = wall.clientWidth - spider.clientWidth / 2;
  } else if (x < spider.clientWidth / 2) {
    x = spider.clientWidth / 2;
  }

  if (y > wall.clientHeight - spider.clientHeight / 2) {
    y = wall.clientHeight - spider.clientHeight / 2;
  } else if (y < spider.clientWidth / 2) {
    y = spider.clientWidth / 2;
  }

  spider.style.left = `${x - spider.clientWidth / 2}px`;

  spider.style.top = `${y - spider.clientWidth / 2}px`;
});
