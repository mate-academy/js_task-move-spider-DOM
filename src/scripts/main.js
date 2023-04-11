'use strict';

document.addEventListener('click', e => {
  const wall = document.querySelector('.wall');

  if (e.target !== wall) {
    return;
  }

  const spider = document.querySelector('.spider');
  const spiderCenter = spider.clientWidth / 2;
  const width = wall.clientWidth - spider.clientWidth;

  spider.style.top = e.offsetY - spiderCenter + 'px';
  spider.style.left = e.offsetX - spiderCenter + 'px';

  if (e.offsetY - spiderCenter > width) {
    spider.style.top = width + 'px';
  }

  if (e.offsetY - spiderCenter < 0) {
    spider.style.top = '0px';
  }

  if (e.offsetX - spiderCenter > width) {
    spider.style.left = width + 'px';
  }

  if (e.offsetX - spiderCenter < 0) {
    spider.style.left = '0px';
  };
});
