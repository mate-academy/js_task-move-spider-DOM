'use strict';

const spider = document.querySelector('.spider');
const spiderW = spider.clientWidth;
const spiderH = spider.clientHeight;
let vertical = 0;
let horizontal = 0;

document.addEventListener('click', e => {
  if (e.target.classList.contains('wall')) {
    if ((e.offsetY - spiderH / 2) > 0) {
      vertical = e.offsetY - spiderH / 2;
    }

    if (vertical >= e.target.clientHeight - spiderH) {
      vertical = e.target.clientHeight - spiderH;
    }

    if ((e.offsetX - spiderW / 2) > 0) {
      horizontal = e.offsetX - spiderW / 2;
    }

    if (horizontal >= e.target.clientWidth - spiderW) {
      horizontal = e.target.clientWidth - spiderW;
    }

    spider.style.top = `${vertical}px`;
    spider.style.left = `${horizontal}px`;
  }
});
