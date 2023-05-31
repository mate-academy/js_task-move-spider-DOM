'use strict';

document.addEventListener('click', e => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  if (e.target === wall) {
    spider.style.left = `${e.offsetX - spider.clientWidth / 2}px`;
    spider.style.top = `${e.offsetY - spider.clientWidth / 2}px`;
  }

  if (parseFloat(spider.style.left) > wall.clientWidth - spider.clientWidth) {
    spider.style.left = `${wall.clientWidth - spider.clientWidth}px`;
  } else if (parseFloat(spider.style.left) < 0) {
    spider.style.left = `0px`;
  }

  if (parseFloat(spider.style.top) > wall.clientHeight - spider.clientHeight) {
    spider.style.top = `${wall.clientHeight - spider.clientHeight}px`;
  } else if (parseFloat(spider.style.top) < 0) {
    spider.style.top = `0px`;
  }
});
