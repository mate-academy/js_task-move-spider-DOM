'use strict';

document.addEventListener('click', e => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');
  const { offsetX, offsetY } = e;

  const spiderHalf = parseFloat(spider.width) / 2;
  const maxWidth = wall.clientWidth - spider.offsetWidth;
  const maxHeight = wall.clientHeight - spider.offsetHeight;

  if (e.target.className !== 'wall') {
    return;
  }

  spider.style.left = offsetX - spiderHalf <= maxWidth
    ? `${offsetX - spiderHalf}px`
    : `${wall.clientWidth - spider.clientWidth}px`;

  if (offsetX < spider.clientHeight) {
    spider.style.left = '0px';
  }

  spider.style.top = offsetY - spiderHalf <= maxHeight
    ? `${offsetY - spiderHalf}px`
    : `${wall.clientHeight - spider.clientHeight}px`;

  if (offsetY < spider.clientHeight) {
    spider.style.top = '0px';
  }
});
