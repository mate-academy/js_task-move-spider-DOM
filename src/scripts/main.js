'use strict';

document.addEventListener('click', e => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  if (!e.target.closest('.wall')) {
    return;
  }

  spider.style.top = `${e.clientY
  - wall.offsetTop - wall.clientTop - spider.clientHeight / 2}px`;

  spider.style.left = `${e.clientX
  - wall.offsetLeft - wall.clientLeft - spider.clientWidth / 2}px`;

  if (parseFloat(spider.style.top) + spider.clientHeight > wall.clientHeight) {
    spider.style.top = `${wall.clientHeight - spider.clientHeight}px`;
  }

  if (parseFloat(spider.style.left) + spider.clientWidth > wall.clientWidth) {
    spider.style.left = `${wall.clientWidth - spider.clientWidth}px`;
  }

  if (parseFloat(spider.style.top) < 0) {
    spider.style.top = 0;
  }

  if (parseFloat(spider.style.left) < 0) {
    spider.style.left = 0;
  }
});
