'use strict';

document.addEventListener('click', moveSpider);

function moveSpider(e) {
  if (!e.target.closest('.wall')) {
    return false;
  }

  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');
  let y = e.offsetY;
  let x = e.offsetX;

  if (e.target.matches('.spider')) {
    y += spider.offsetTop;
    x += spider.offsetLeft;
  }

  let topSpider = y - spider.offsetHeight / 2;
  let leftSpider = x - spider.offsetWidth / 2;

  if (y <= spider.offsetHeight / 2) {
    topSpider = 0;
  } else if (y >= wall.clientHeight - spider.offsetHeight / 2) {
    topSpider = wall.clientHeight - spider.offsetHeight;
  }

  if (x <= spider.offsetWidth / 2) {
    leftSpider = 0;
  } else if (x >= wall.clientWidth - spider.offsetWidth / 2) {
    leftSpider = wall.clientWidth - spider.offsetWidth;
  }

  spider.style.left = leftSpider + 'px';
  spider.style.top = topSpider + 'px';
};
