'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');
const halfWidthSpider = spider.offsetWidth / 2;
const halfHeigthSpider = spider.offsetHeight / 2;
const widthLimit = wall.clientWidth - spider.offsetWidth;
const heigthLimit = wall.clientHeight - spider.offsetHeight;
const wallCoords = wall.getBoundingClientRect();

const moveSpider = (e) => {
  let x = e.clientX - wallCoords.left - wall.clientLeft
    - halfWidthSpider;

  let y = e.clientY - wallCoords.top - wall.clientTop
    - halfHeigthSpider;

  if (!e.target.closest('.wall')) {
    return;
  }

  if (x < 0) {
    x = 0;
  }

  if (y < 0) {
    y = 0;
  }

  if (x > widthLimit) {
    x = widthLimit;
  }

  if (y > heigthLimit) {
    y = heigthLimit;
  }

  spider.style.left = x + 'px';
  spider.style.top = y + 'px';
};

document.addEventListener('click', moveSpider);
