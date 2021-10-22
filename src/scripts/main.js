'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', e => {
  const topSpider = (e.clientY + window.pageYOffset) - wall.offsetTop;
  const leftSpider = (e.clientX + window.pageXOffset) - wall.offsetLeft;

  spider.style.transform = 'translate(-50%, -50%)';

  if (leftSpider > (wall.clientWidth - 0.5 * spider.clientWidth)) {
    spider.style.left = `${wall.clientWidth - spider.clientWidth / 2}px`;
  } else if (leftSpider < (0.5 * spider.clientWidth)) {
    spider.style.left = `${spider.clientWidth / 2}px`;
  } else {
    spider.style.left = `${leftSpider}px`;
  }

  if (topSpider > (wall.clientHeight - 0.5 * spider.clientHeight)) {
    spider.style.top = `${wall.clientHeight - spider.clientHeight / 2}px`;
  } else if (topSpider < (0.5 * spider.clientHeight)) {
    spider.style.top = `${spider.clientHeight / 2}px`;
  } else {
    spider.style.top = `${topSpider}px`;
  }
});
