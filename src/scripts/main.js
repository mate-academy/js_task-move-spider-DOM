'use strict';

const body = document.querySelector('body')
const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
let marginLeft = (body.clientWidth - wall.clientWidth) / 2;
let marginTop = (body.clientHeight - wall.clientHeight) / 2;

wall.addEventListener('click', (e) => {
  spider.style.top = `${e.clientY - marginTop - spider.clientHeight / 2}px`;
  spider.style.left = `${e.clientX - marginLeft - spider.clientWidth / 2}px`;

  if (parseInt(spider.style.top) < 0) {
    spider.style.top = 0;
  }

  if (parseInt(spider.style.top) > (wall.clientHeight - spider.clientHeight)) {
    spider.style.top = `${(wall.clientHeight - spider.clientHeight)}px`;
  }

  if (parseInt(spider.style.left) < 0) {
    spider.style.left = 0;
  }

  if (parseInt(spider.style.left) > (wall.clientWidth - spider.clientWidth)) {
    spider.style.left = `${wall.clientWidth - spider.clientWidth}px`;
  }
});

