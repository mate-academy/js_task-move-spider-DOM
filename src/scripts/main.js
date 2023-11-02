'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const body = document.querySelector('body');

document.addEventListener('click', e => {
  if (e.target.closest('.wall')) {
    const styleWall = getComputedStyle(wall);
    const styleSpider = getComputedStyle(spider);
    const styleBody = getComputedStyle(body);
    const spiderWidth = +styleSpider.width.slice(0, -2) / 2;
    const spiderHeight = +styleSpider.height.slice(0, -2) / 2;
    const bodyWidth = +styleBody.width.slice(0, -2) / 2;
    const bodyHeight = +styleBody.height.slice(0, -2) / 2;
    const wallWidth = +styleWall.width.slice(0, -2) / 2;
    const wallHeight = +styleWall.height.slice(0, -2) / 2;
    const topp = bodyHeight - wallHeight;
    const leftt = bodyWidth - wallWidth;

    let x = e.clientX - spiderHeight - leftt;
    let y = e.clientY - spiderWidth - topp;

    if (x < 0) {
      x += spiderWidth;
    }

    if (y < 0) {
      y += spiderHeight;
    }

    if (x > wallWidth * 2 - spiderWidth * 2) {
      x -= spiderWidth;
    }

    if (y > wallHeight * 2 - spiderHeight * 2) {
      y -= spiderHeight;
    }

    spider.style.top = y + 'px';
    spider.style.left = x + 'px';
  }
});
