'use strict';

function spiderMove(area) {
  const spider = area.querySelector('.spider');

  area.addEventListener('click', e => {
    if (e.target !== e.currentTarget) {
      return;
    }

    let x = e.offsetX - spider.offsetWidth / 2;
    let y = e.offsetY - spider.offsetHeight / 2;

    if (x < 0) {
      x = 0;
    }

    if (y < 0) {
      y = 0;
    }

    if (x >= area.clientWidth - spider.offsetWidth) {
      x = area.clientWidth - spider.offsetWidth;
    }

    if (y >= area.clientHeight - spider.offsetHeight) {
      y = area.clientHeight - spider.offsetHeight;
    }

    spider.style.left = `${x}px`;
    spider.style.top = `${y}px`;
  });
}

spiderMove(document.querySelector('.wall'));
