'use strict';

function spiderMove(area) {
  const spider = area.querySelector('.spider');

  area.addEventListener('click', e => {
    if (e.target !== e.currentTarget) {
      return;
    }

    let a = e.offsetX - spider.offsetWidth / 2;
    let b = e.offsetY - spider.offsetHeight / 2;

    if (a < 0) {
      a = 0;
    }

    if (b < 0) {
      b = 0;
    }

    if (a >= area.clientWidth - spider.offsetWidth) {
      a = area.clientWidth - spider.offsetWidth;
    }

    if (b >= area.clientHeight - spider.offsetHeight) {
      b = area.clientHeight - spider.offsetHeight;
    }

    spider.style.left = `${a}px`;
    spider.style.top = `${b}px`;
  });
}

spiderMove(document.querySelector('.wall'));
