'use strict';

document.addEventListener('click', e => {
  const spider = document.querySelector('.spider');
  const wall = e.target.closest('.wall');

  if (!wall) {
    return;
  }

  const halfSpider = spider.clientWidth / 2;
  const border = wall.clientWidth - spider.clientWidth;

  if (e.offsetX > border) {
    spider.style.left = `${border}px`;
  } else if (e.offsetX < spider.clientWidth) {
    spider.style.left = `0px`;
  } else {
    spider.style.left = `${e.offsetX - halfSpider}px`;
  }

  if (e.offsetY > border) {
    spider.style.top = `${border}px`;
  } else if (e.offsetY < spider.clientHeight) {
    spider.style.top = `0px`;
  } else {
    spider.style.top = `${e.offsetY - halfSpider}px`;
  }
});
