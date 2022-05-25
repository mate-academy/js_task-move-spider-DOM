'use strict';

document.addEventListener('click', e => {
  // write code here
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  const x = e.offsetX;
  const y = e.offsetY;

  let coordX = e.offsetX - spider.width / 2;
  let coordY = e.offsetY - spider.height / 2;

  const maxX = wall.clientWidth - spider.width / 2;
  const maxY = wall.clientHeight - spider.height / 2;

  if (e.target.closest('.wall')) {
    if (x > maxX) {
      coordX = maxX - spider.width / 2;
    } else if (x < spider.width / 2) {
      coordX = 0;
    }

    if (y > maxY) {
      coordY = maxX - spider.width / 2;
    } else if (y < spider.height / 2) {
      coordY = 0;
    }
  }

  if (!e.target.closest('.wall') || e.target.closest('.spider')) {
    return;
  }

  spider.style.top = `${coordY}px`;
  spider.style.left = `${coordX}px`;
});
