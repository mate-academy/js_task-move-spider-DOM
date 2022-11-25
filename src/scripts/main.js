'use strict';

document.addEventListener('click', e => {
  const item = e.target;
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');
  const spiderCener = spider.offsetWidth / 2;
  const wallWidth = wall.clientWidth;
  const wallHeight = wall.clientHeight;
  const x = `${e.offsetX - spiderCener}px`;
  const y = `${e.offsetY - spiderCener}px`;

  if (item !== wall) {
    return;
  }

  if (e.offsetX > wallWidth - spider.offsetWidth) {
    spider.style.left = `${wallWidth - spider.offsetWidth}px`;
  }

  if (e.offsetY > wallHeight - spider.offsetWidth) {
    spider.style.top = `${wallHeight - spider.offsetWidth}px`;
  }

  if (e.offsetX < spider.offsetWidth && e.offsetX > 0) {
    spider.style.left = `0px`;
  }

  if (e.offsetY < spider.offsetWidth && e.offsetY > 0) {
    spider.style.top = `0px`;
  }

  if (e.offsetX < wallWidth - spider.offsetWidth && e.offsetX > spiderCener) {
    spider.style.left = x;
  }

  if (e.offsetY < wallHeight - spider.offsetWidth && e.offsetY > spiderCener) {
    spider.style.top = y;
  }
});
