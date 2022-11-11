'use strict';

document.addEventListener('click', e => {
  const item = e.target.closest('.wall');

  if (!item) {
    return;
  }

  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');
  const x = parseFloat(getComputedStyle(spider).width) / 2;
  const y = parseFloat(getComputedStyle(spider).height) / 2;

  if (x + e.offsetX > wall.clientWidth) {
    spider.style.left = wall.clientWidth - x + 'px';
  } else if (e.offsetX - x < 0) {
    spider.style.left = x + 'px';
  } else {
    spider.style.left = e.offsetX + 'px';
  }

  if (y + e.offsetY > wall.clientHeight) {
    spider.style.top = wall.clientHeight - y + 'px';
  } else if (e.offsetY - y < 0) {
    spider.style.top = y + 'px';
  } else {
    spider.style.top = e.offsetY + 'px';
  }

  spider.style.transform = 'translate(-50%, -50%)';
});
