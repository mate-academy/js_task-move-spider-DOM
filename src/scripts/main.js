'use strict';

document.addEventListener('click', e => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  if (e.target !== wall) {
    return;
  }

  const x = e.offsetX;
  const y = e.offsetY;

  spider.style.left = x - spider.width / 2 + 'px';
  spider.style.top = y - spider.height / 2 + 'px';

  if (parseInt(spider.style.left) < 0) {
    spider.style.left = 0 + 'px';
  }

  if (parseInt(spider.style.left) + spider.width > wall.clientWidth) {
    spider.style.left = wall.clientWidth - spider.width + 'px';
  }

  if (parseInt(spider.style.top) < 0) {
    spider.style.top = 0 + 'px';
  }

  if (parseInt(spider.style.top) + spider.height > wall.clientHeight) {
    spider.style.top = wall.clientHeight - spider.height + 'px';
  }
});
