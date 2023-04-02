'use strict';

document.addEventListener('click', e => {
  // write code here
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  if (e.target !== wall && e.target !== spider) {
    return;
  }

  if (e.target === spider) {
    spider.style.pointerEvents = 'none';
  }

  if (e.offsetY < spider.offsetHeight / 2) {
    spider.style.top = 0;
  } else if (e.offsetY > (wall.clientHeight - spider.clientHeight / 2)) {
    spider.style.top = `${wall.clientHeight - spider.clientHeight}px`;
  } else {
    spider.style.top = `${e.offsetY - spider.offsetHeight / 2}px`;
  }

  if (e.offsetX < spider.offsetWidth / 2) {
    spider.style.left = 0;
  } else if (e.offsetX > (wall.clientWidth - spider.clientWidth / 2)) {
    spider.style.left = `${wall.clientWidth - spider.clientWidth}px`;
  } else {
    spider.style.left = `${e.offsetX - spider.offsetWidth / 2}px`;
  }
});
